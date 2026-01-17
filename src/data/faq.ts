export type FaqItem = {
  title: string;
  content: string;
};

export const faqTeaserItems: FaqItem[] = [
  {
    title: "Is this financial advice?",
    content: "No. PMD is analytics only and does not provide financial advice."
  },
  {
    title: "Do you place trades automatically?",
    content: "No. PMD is read-only and never places orders on your behalf."
  },
  {
    title: "What markets are supported?",
    content: "PMD monitors Polymarket markets and lets you filter by theme, strength, and liquidity."
  },
  {
    title: "How does FAST mode work?",
    content:
      "FAST mode prioritizes high-conviction dislocations so urgent alerts hit your feed first."
  },
  {
    title: "Can I cancel anytime?",
    content: "Yes. You can manage or cancel your subscription in the billing portal."
  }
];

export const faqItems: FaqItem[] = [
  {
    title: "What is PMD?",
    content:
      "PMD (Polymarket Dislocation Monitor) ingests market data, detects dislocations, and sends context-rich alerts to your Telegram."
  },
  {
    title: "Does PMD place orders?",
    content: "No. PMD is read-only analytics and alerting. It never places trades."
  },
  {
    title: "How do Telegram alerts work?",
    content:
      "After you link your Telegram account, PMD sends alerts and digests based on your plan and filters."
  },
  {
    title: "Why do I sometimes see \"skipped\"?",
    content:
      "Copilot and caps filter alerts to keep noise low. Skipped reasons help you understand what was filtered."
  },
  {
    title: "Can I cancel anytime?",
    content: "Yes. Manage or cancel your subscription in the billing portal."
  },
  {
    title: "What is the refund policy?",
    content: "Refunds are reviewed case by case. Reach out if you need help."
  },
  {
    title: "Is this financial advice?",
    content: "No. PMD provides analytics only and does not offer financial advice."
  }
];
