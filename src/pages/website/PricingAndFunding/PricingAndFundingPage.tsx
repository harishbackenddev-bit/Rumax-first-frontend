
import { ProcessBand, ResourcePage } from "@/components/pages/ExpandedPages";



export default function PricingAndFundingPage() {
  return (
    <ResourcePage
      eyebrow="Pricing & Funding"
      title="Pricing & Funding"
      description="Understand care costs, funding options and how Rumax helps families plan support with clarity."
      cards={[
        { title: "Private Funding", icon: "money", description: "Transparent care planning for families arranging private support." },
        { title: "Local Authority", icon: "document", description: "Guidance where support may involve assessments or council funding." },
        { title: "Clinical Support", icon: "medical", description: "Costing support for research nursing and specialist service needs." }
      ]}
    >
      <ProcessBand title="How We Help" items={["Understand your care needs", "Agree visit frequency and support level", "Explain funding routes", "Confirm next steps in writing"]} />
    </ResourcePage>
  );
}
