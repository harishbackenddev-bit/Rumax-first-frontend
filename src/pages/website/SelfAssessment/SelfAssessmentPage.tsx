
import { ProcessBand, ResourcePage } from "@/components/pages/ExpandedPages";



export default function SelfAssessmentPage() {
  return (
    <ResourcePage
      eyebrow="Self Assessment"
      title="Is It Time for Home Care? A Quick Readiness Assessment"
      description="Figuring out if a loved one needs help at home can be overwhelming. This quick assessment focuses on everyday safety, wellbeing and Activities of Daily Living."
      cards={[
        { title: "Personal Care", icon: "heart", description: "Look at bathing, dressing, grooming and daily routines." },
        { title: "Mobility & Safety", icon: "shield", description: "Review fall risks, transfers and confidence moving around the home." },
        { title: "Health & Medication", icon: "medical", description: "Consider medication, appointments and ongoing health management." }
      ]}
    >
      <ProcessBand title="How The Assessment Works" items={["Answer five quick care-readiness questions", "Add contact details if you want the result sent to you", "Book a free consultation with a Rumax advisor"]} />
    </ResourcePage>
  );
}
