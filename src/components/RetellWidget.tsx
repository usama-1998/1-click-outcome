import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// NOTE: The shadow-DOM structure and aria-label are undocumented internals 
// of Retell's widget (no official public API as of now). Verified by 
// inspection and may require updates if Retell changes their internal markup.

let retellButtonCache: HTMLElement | null = null;

const clickVoiceAssistant = () => {
  const clickIt = (retries: number) => {
    const rootContainer = document.getElementById("retell-widget-root");
    const shadowHost = rootContainer?.firstElementChild;
    if (shadowHost && shadowHost.shadowRoot) {
      const walker = document.createTreeWalker(shadowHost.shadowRoot, NodeFilter.SHOW_TEXT);
      let node;
      let voiceBtn = null;
      while ((node = walker.nextNode())) {
        if (node.textContent?.trim() === "Voice Assistant") {
          voiceBtn = node.parentElement;
          break;
        }
      }
      
      if (voiceBtn) {
        // Find the closest clickable container (button or div) to trigger the action
        const clickable = voiceBtn.closest('button') || voiceBtn.closest('[role="button"]') || voiceBtn.closest('div[tabindex]') || voiceBtn.parentElement;
        if (clickable) {
          (clickable as HTMLElement).click();
        }
        
        // Restore opacity after the transition to hide the flash
        setTimeout(() => {
          if (rootContainer) rootContainer.style.opacity = '1';
        }, 50);
        return;
      }
    }
    
    if (retries > 0) {
      setTimeout(() => clickIt(retries - 1), 50);
    } else {
      // In case of failure, restore opacity anyway so it doesn't stay hidden forever
      if (rootContainer) rootContainer.style.opacity = '1';
    }
  };
  
  clickIt(40); // Poll for up to 2 seconds
};

export const openRetellWidget = () => {
  const rootContainer = document.getElementById("retell-widget-root");
  
  if (retellButtonCache) {
    if (rootContainer) rootContainer.style.opacity = '0';
    retellButtonCache.click();
    clickVoiceAssistant();
    return;
  }

  const findAndClick = (retriesLeft: number) => {
    const shadowHost = rootContainer?.firstElementChild;

    if (shadowHost && shadowHost.shadowRoot) {
      // First try to find by known labels, otherwise just get the first button
      const button = shadowHost.shadowRoot.querySelector('button[aria-label="Open Assistant"], button[aria-label="Close assistant"], button');
      if (button) {
        retellButtonCache = button as HTMLElement;
        if (rootContainer) rootContainer.style.opacity = '0';
        retellButtonCache.click();
        clickVoiceAssistant();
        return;
      }
    }

    if (retriesLeft > 0) {
      setTimeout(() => findAndClick(retriesLeft - 1), 100);
    } else {
      console.warn("Retell widget button not found. The internal markup might have changed.");
      if (shadowHost && shadowHost.shadowRoot) {
        console.warn("Shadow DOM contents:", shadowHost.shadowRoot.innerHTML);
      }
    }
  };

  findAndClick(50); // 50 * 100ms = 5 seconds
};

export const RetellWidget = () => {
  const location = useLocation();

  useEffect(() => {
    let observer: MutationObserver | undefined;
    const isTebbyDemo = location.pathname.includes('/demo-for-tebby');
    const isRossDemo = location.pathname.includes('/demo-for-ross');

    if (!document.getElementById("retell-widget")) {
      const script = document.createElement("script");
      script.id = "retell-widget";
      script.src = "https://dashboard.retellai.com/retell-widget-v2.js";
      script.type = "module";
      
      if (isTebbyDemo) {
        // Tebby Demo (Outbound Calling Agent Only)
        script.setAttribute("data-voice-public-key", "public_key_dd0f5bf2461eed1bf27d3");
        script.setAttribute("data-voice-agent-id", "agent_ad8915378a18cd89457511bee1");
        script.setAttribute("data-title", "Outbound Agent");
      } else if (isRossDemo) {
        // UAE Peptide Clinic Demo (Sarah)
        script.setAttribute("data-voice-public-key", "public_key_72d820c4ffc587b80f805");
        script.setAttribute("data-voice-agent-id", "agent_b770fe1e51d890263daacadf4d");
        script.setAttribute("data-title", "Sarah - UAE Peptide Clinic");
      } else {
        // 1 Click Outcome Database Reactivation Agent (Chloe)
        script.setAttribute("data-voice-public-key", "public_key_72d820c4ffc587b80f805");
        script.setAttribute("data-voice-agent-id", "agent_37c580c2bbb4e53bef4c7662f8");
        script.setAttribute("data-title", "1 Click Outcome");
      }
      
      // Customize colors to match the website theme
      script.setAttribute("data-theme-color", "#101b19"); // Background dark color
      script.setAttribute("data-component-color", "#14221f"); // Black component accent
      
      // Hide the Retell logo using a transparent 1x1 pixel
      script.setAttribute("data-logo-url", "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");
      
      document.body.appendChild(script);

      // Inject a <style> element to hide the default launcher button
      const hideDefaultButton = (retriesLeft: number) => {
        const rootContainer = document.getElementById("retell-widget-root");
        const shadowHost = rootContainer?.firstElementChild;

        if (shadowHost && shadowHost.shadowRoot) {
          if (!shadowHost.shadowRoot.getElementById("retell-custom-style")) {
            const style = document.createElement("style");
            style.id = "retell-custom-style";
            style.textContent = `
              button[aria-label="Open Assistant"] {
                display: none !important;
              }
            `;
            shadowHost.shadowRoot.appendChild(style);
          }
          return;
        }

        if (retriesLeft > 0) {
          setTimeout(() => hideDefaultButton(retriesLeft - 1), 100);
        }
      };
      hideDefaultButton(50);

      const initObserver = (retriesLeft: number) => {
        const rootContainer = document.getElementById("retell-widget-root");
        const shadowHost = rootContainer?.firstElementChild;
        if (shadowHost && shadowHost.shadowRoot) {
          
          const processNode = (node: Node) => {
            if (node.nodeType === Node.TEXT_NODE) {
              const text = node.textContent?.trim();
              if (!text) return;
              
              if (text === 'Retell') {
                if (isTebbyDemo) node.textContent = 'Outbound Agent';
                else if (isRossDemo) node.textContent = 'Sarah - UAE Peptide Clinic';
                else node.textContent = '1 Click Outcome';
              } else if (text === 'Your RetellAI assistant') {
                if (isTebbyDemo) node.textContent = 'Lead Reactivation Demo for Physician Practices';
                else if (isRossDemo) node.textContent = 'AI Scheduling Assistant for UAE Peptide Clinic';
                else node.textContent = 'Database Reactivation Specialist';
              } else if (text.includes('Powered by')) {
                if (node.parentElement) {
                  node.parentElement.style.display = 'none';
                }
              }
            } else if (node.nodeType === Node.ELEMENT_NODE) {
              const el = node as HTMLElement;
              if (el.tagName === 'A' && (el.getAttribute('href')?.includes('retell') || el.textContent?.includes('Retell'))) {
                el.style.display = 'none';
              }
              el.childNodes.forEach(processNode);
            }
          };

          shadowHost.shadowRoot.childNodes.forEach(processNode);

          observer = new MutationObserver((mutations) => {
            mutations.forEach(mutation => {
              mutation.addedNodes.forEach(processNode);
              if (mutation.type === 'characterData') {
                processNode(mutation.target);
              }
            });
          });

          observer.observe(shadowHost.shadowRoot, {
            childList: true,
            subtree: true,
            characterData: true
          });
          return;
        }

        if (retriesLeft > 0) {
          setTimeout(() => initObserver(retriesLeft - 1), 100);
        }
      };

      initObserver(50);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
      const script = document.getElementById("retell-widget");
      if (script) {
        script.remove();
      }
      
      const root = document.getElementById("retell-widget-root");
      if (root) {
        root.remove();
      }
      retellButtonCache = null; // Important to reset cache on unmount
    };
  }, [location.pathname]);

  return null;
};
