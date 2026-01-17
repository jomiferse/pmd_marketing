export type PlanId = "basic" | "pro" | "elite";

export type PlanDefinition = {
  id: PlanId;
  name: string;
  price: string;
  description: string;
  entitlements: {
    digestWindow: string;
    maxThemes: string;
    strengths: string;
    copilot: string;
    fastMode: string;
  };
  cta: string;
};

export const plans: PlanDefinition[] = [
  {
    id: "basic",
    name: "Basic",
    price: "$10/mo",
    description: "Foundational signal access with room to explore.",
    entitlements: {
      digestWindow: "60 min",
      maxThemes: "3 themes",
      strengths: "Low + medium",
      copilot: "Off",
      fastMode: "Off"
    },
    cta: "Start Basic"
  },
  {
    id: "pro",
    name: "Pro",
    price: "$29/mo",
    description: "Higher cadence, wider theme coverage, and Copilot on.",
    entitlements: {
      digestWindow: "30 min",
      maxThemes: "5 themes",
      strengths: "Low + medium + high",
      copilot: "On",
      fastMode: "Watch"
    },
    cta: "Go Pro"
  },
  {
    id: "elite",
    name: "Elite",
    price: "$99/mo",
    description: "Always-on monitoring with FAST mode and premium caps.",
    entitlements: {
      digestWindow: "15 min",
      maxThemes: "10 themes",
      strengths: "All strengths",
      copilot: "Always-on",
      fastMode: "Full"
    },
    cta: "Unlock Elite"
  }
];
