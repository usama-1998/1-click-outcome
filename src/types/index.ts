export interface FormField {
  id: string;
  label: string;
  value: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface UseCaseCardProps {
  icon: string;
  title: string;
  description: string;
}

export interface FeatureShowcaseProps {
  badgeIcon: string;
  badgeText: string;
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  fileName: string;
  fields: { label: string; value: string }[];
  onActionClick: () => void;
}
