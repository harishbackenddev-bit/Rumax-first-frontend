import { useSearchParams } from "react-router-dom";

import { ResultPage, WizardPage } from "@/components/pages/ExpandedPages";
import { careCalculatorSteps } from "@/data/expanded-pages";

export default function CareCalculatorPage() {
  const [searchParams] = useSearchParams();

  const step = searchParams.get("step") ?? "1";

  if (step === "result") {
    return <ResultPage />;
  }

  if (step === "booked") {
    return <ResultPage booked />;
  }

  if (step === "details") {
    return (
      <WizardPage
        eyebrow="Care Readiness Tool"
        title="Add Your Personal Details"
        description="We'll use this information to contact you with your assessment result."
        stepLabel="Final step"
        stepTitle="Add Your Personal Details"
        stepDescription="Tell us where to send your result and how our team can reach you."
        fields={[
          "Full Name",
          "Email Address",
          "Phone Number",
          "Postcode",
        ]}
        backHref="/care-calculator?step=5"
        nextHref="/care-calculator?step=result"
        submitLabel="Get Results"
      />
    );
  }

  const current =
    careCalculatorSteps.find((item) => item.id === step) ??
    careCalculatorSteps[0];

  const currentIndex = careCalculatorSteps.findIndex(
    (item) => item.id === current.id
  );

  const nextStep =
    current.id === "5" ? "details" : String(Number(current.id) + 1);

  const previousStep =
    current.id === "1" ? undefined : String(Number(current.id) - 1);

  return (
    <WizardPage
      eyebrow="Care Readiness Tool"
      title="Care Readiness Tool"
      description="Answer five short questions to understand the level of support that may be helpful."
      stepLabel={`Step ${current.id} of ${careCalculatorSteps.length}`}
      stepTitle={current.title}
      stepDescription={current.description}
      options={current.options}
      backHref={
        previousStep
          ? `/care-calculator?step=${previousStep}`
          : undefined
      }
      nextHref={`/care-calculator?step=${nextStep}`}
      submitLabel={
        currentIndex === careCalculatorSteps.length - 1
          ? "Continue"
          : "Next"
      }
    />
  );
}