import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import DemoForTebby from './pages/demo-for-tebby/DemoForTebby'
import DemoForRoss from './pages/demo-for-ross/DemoForRoss'
import DemoForDrRebecca from './pages/demo-for-dr-rebecca/DemoForDrRebecca'
import { RetellWidget } from './components/RetellWidget'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <RetellWidget />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demo-for-tebby" element={<DemoForTebby />} />
          <Route path="/demo-for-ross" element={<DemoForRoss />} />
          <Route path="/demo-for-dr-rebecca" element={<DemoForDrRebecca />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
