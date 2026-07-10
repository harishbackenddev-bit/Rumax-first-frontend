import React, { useState } from "react";
import { CareCta } from "@/components/common/CareCta";
import { FormInputField, FormTextareaField } from "@/components/pages/PageFormControls";
import { InnerHero, PageIcon, PageShell } from "@/components/pages/InnerPages";
import { asset, locationCards } from "@/data/site";
import { Link, useLocation } from "react-router-dom";

// Types
type ReferralFormStep = {
  id: string;
  label: string;
  title: string;
  fields: string[];
  textarea?: string;
};

// Data
const referralAudiences = [
  {
    title: "Healthcare Professionals",
    icon: "medical",
    description: "GPs, community nurses, and clinical specialists seeking reliable care for their patients"
  },
  {
    title: "Hospital Discharge Teams",
    icon: "document",
    description: "Facilitating safe, timely, and efficient hospital-to-home or facility transitions"
  },
  {
    title: "Social Workers",
    icon: "users",
    description: "Sourcing appropriate support for vulnerable individuals in the community"
  },
  {
    title: "Commissioners & Local Authorities",
    icon: "shield",
    description: "Securing cost-effective, high-standard care packages for local residents"
  }
];

const commitments = [
  {
    title: "Rapid Acknowledgement",
    icon: "clock",
    description: "We guarantee an acknowledgement of all referrals within one working day"
  },
  {
    title: "Swift Action",
    icon: "calendar",
    description: "We will arrange an initial, comprehensive care assessment within 48 hours wherever possible"
  }
];

const referralForms: ReferralFormStep[] = [
  {
    id: "1",
    label: "Referral Info",
    title: "Step 1: Referrer Information (About You)",
    fields: [
      "First Name *",
      "Last Name *",
      "Phone Number *",
      "Email Address *",
      "Job Title / Role *",
      "Organization / Trust / Local Authority *"
    ]
  },
  {
    id: "2",
    label: "Client Details",
    title: "Step 2: Client Details",
    fields: ["Client First Name *", "Client Last Name *", "Date of Birth", "Postcode", "Primary Contact", "Relationship to Client"]
  },
  {
    id: "3",
    label: "Care Needs",
    title: "Step 3: Care Needs",
    fields: ["Type of Support", "Current Risks", "Mobility Notes", "Medication Needs", "Preferred Start Date", "Visit Frequency"]
  },
  {
    id: "4",
    label: "Documents",
    title: "Step 4: Documents",
    fields: ["Discharge Summary", "Care Plan Available", "Medication Record", "Risk Assessment", "Funding Route", "Upload Notes"]
  },
  {
    id: "5",
    label: "Consent",
    title: "Step 5: Consent",
    fields: ["Consent Confirmed", "Referrer Name", "Organisation", "Referrer Email", "Referrer Phone"],
    textarea: "Additional Notes"
  }
];

// Helper function
const placeholderFor = (field: string) => {
  if (field.includes("Email")) {
    return "name@example.com";
  }
  if (field.includes("Phone")) {
    return "00 23 456 7890";
  }
  if (field.includes("Date")) {
    return "DD/MM/YYYY";
  }
  if (field.includes("Postcode")) {
    return "Enter postcode";
  }
  return "Enter details";
};

// Stepper Component - Now with click handler
const ReferralStepper = ({ 
  activeStep, 
  onStepChange 
}: { 
  activeStep: string; 
  onStepChange: (stepId: string) => void;
}) => {
  return (
    <nav className="referral-stepper" aria-label="Referral steps">
      {referralForms.map((step) => (
        <button
          key={step.id}
          className={`referral-step${step.id === activeStep ? " is-active" : ""}`}
          onClick={() => onStepChange(step.id)}
          type="button"
        >
          <span>{step.id}</span>
          <b>{step.label}</b>
        </button>
      ))}
    </nav>
  );
};

// Form Component - Updated with navigation
const ReferralForm = ({ 
  step, 
  onNext, 
  onPrevious,
  isFirstStep,
  isLastStep
}: { 
  step: ReferralFormStep; 
  onNext: () => void;
  onPrevious: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLastStep) {
      // Submit the form
      alert("Form submitted successfully!");
    } else {
      onNext();
    }
  };

  return (
    <form className="referral-form-card" onSubmit={handleSubmit}>
      <h3>{step.title}</h3>
      <div className="form-grid">
        {step.fields.map((field) => (
          <FormInputField key={field} label={field} placeholder={placeholderFor(field)} />
        ))}
      </div>
      {step.textarea ? (
        <FormTextareaField label={step.textarea} rows={6} placeholder="Please share any relevant details..." />
      ) : null}
      <div className="referral-form-card__actions">
        {!isFirstStep && (
          <button type="button" onClick={onPrevious} className="btn-secondary">
            Previous
          </button>
        )}
        <button type="submit">
          {isLastStep ? "Submit Referral" : "Save & Continue"}
        </button>
      </div>
    </form>
  );
};

// Main Page Component
const ReferralPage = () => {
  const [activeStepId, setActiveStepId] = useState<string>("1");

  const activeStep = referralForms.find((step) => step.id === activeStepId) ?? referralForms[0];
  const activeIndex = referralForms.findIndex((step) => step.id === activeStep.id);
  const isFirstStep = activeIndex === 0;
  const isLastStep = activeIndex === referralForms.length - 1;

  const handleStepChange = (stepId: string) => {
    setActiveStepId(stepId);
    // Scroll to top of form
    const formElement = document.querySelector('.referral-portal');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (!isLastStep) {
      const nextStep = referralForms[activeIndex + 1];
      setActiveStepId(nextStep.id);
      // Scroll to top of form
      const formElement = document.querySelector('.referral-portal');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handlePrevious = () => {
    if (!isFirstStep) {
      const prevStep = referralForms[activeIndex - 1];
      setActiveStepId(prevStep.id);
      // Scroll to top of form
      const formElement = document.querySelector('.referral-portal');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <PageShell>
      <InnerHero
        eyebrow="Referral"
        title="Make A Referral"
        description="Fast & secure patient referrals to RUMAX LIMITED. We guarantee a 1-day response and 48-hour assessments."
        backgroundImage="rumax-team-hero.png"
      />

      <section className="page-section referral-intro">
        <div className="container referral-intro__grid">
          <div className="referral-intro__copy">
            <h2>Fast & Secure Patient Referrals</h2>
            <p>
              We provide a streamlined referral process for healthcare professionals, social workers, and other partners looking to arrange care for their clients.
            </p>
          </div>
          <div className="referral-intro__media">
            <img src={asset("rumax-referral-secure.png")} alt="Healthcare professional supporting a referral conversation" />
          </div>
        </div>
      </section>

      <section className="page-section referral-audience">
        <div className="container">
          <div className="page-section__heading">
            <h2>Who Can Make A Referral?</h2>
          </div>
          <div className="referral-card-grid">
            {referralAudiences.map((item) => (
              <article className="referral-info-card" key={item.title}>
                <span aria-hidden="true">
                  <PageIcon name={item.icon} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section referral-commitment">
        <div className="container">
          <div className="page-section__heading">
            <h2>Our Commitment To You And Your Clients</h2>
          </div>
          <div className="referral-commitment-grid">
            {commitments.map((item) => (
              <article className="referral-info-card referral-info-card--wide" key={item.title}>
                <span aria-hidden="true">
                  <PageIcon name={item.icon} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section referral-portal">
        <div className="container">
          <div className="page-section__heading">
            <h2>Secure Online Referral Portal</h2>
            <p>Complete the form below to submit your referral securely</p>
          </div>
          <ReferralStepper 
            activeStep={activeStep.id} 
            onStepChange={handleStepChange}
          />
          <ReferralForm 
            step={activeStep}
            onNext={handleNext}
            onPrevious={handlePrevious}
            isFirstStep={isFirstStep}
            isLastStep={isLastStep}
          />
        </div>
      </section>

      <section className="page-section locations referral-locations">
        <div className="container">
          <div className="locations__title">
            <img className="section-mark section-mark--locations" src={asset("rumax-locations-mark.svg")} alt="" />
            <h2>Care Services Across The UK</h2>
          </div>
          <div className="location-grid">
            {locationCards.map((location) => (
              <a key={location} href="/locations">
                <img src={asset("rumax-location-card-icon.svg")} alt="" />
                {location}
              </a>
            ))}
          </div>
          <Link className="button-primary locations__button" href="/locations">
            View All Locations
          </Link>
        </div>
      </section>

      <CareCta />
    </PageShell>
  );
};

export default ReferralPage;
