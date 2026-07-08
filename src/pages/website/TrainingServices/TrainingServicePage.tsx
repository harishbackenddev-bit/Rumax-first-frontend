
import { CareCta } from "@/components/common/CareCta";
import { QualityGovernanceStrip } from "@/components/common/QualityGovernanceStrip";
import { ReasonsGrid } from "@/components/common/ReasonsGrid";
import { FaqSection, InnerHero, PageShell } from "@/components/pages/InnerPages";
import { useSearchParams } from "react-router-dom";


type TrainingProps = {
  searchParams?: Promise<{ step?: string }>;
};

const trainingIntro =
  "Kickstart your journey in the care sector with Rumax Limited.\nBased in Basildon, Essex, we offer modern, streamlined training services designed to equip you with the practical skills and confidence you need to thrive. Whether you are taking your first steps into healthcare or looking to upskill, our expert-led programs are built around your success. Start building a career with purpose today.";

const trainingFeatures = [
  {
    iconAsset: "dom-care-reason-plans.svg",
    title: "Person-Centred Support",
    description: "Build confident, respectful care practice around individual needs, preferences and outcomes."
  },
  {
    iconAsset: "dom-care-reason-compassion.svg",
    title: "Health & Wellbeing",
    description: "Understand how to support appointments, medication routines, physical health and emotional wellbeing."
  },
  {
    iconAsset: "dom-care-reason-trained.svg",
    title: "Skill Development",
    description: "Develop practical care skills through clear instruction, guided practice and competency evidence."
  },
  {
    iconAsset: "dom-care-reason-cqc.svg",
    title: "Safety & Safeguarding",
    description: "Recognise concerns, reduce risk and respond through the correct safeguarding pathway."
  },
  {
    iconAsset: "dom-care-reason-flexible.svg",
    title: "Flexible Learning",
    description: "Training can be shaped around team needs, refresher requirements and practical role expectations."
  },
  {
    iconAsset: "dom-care-reason-availability.svg",
    title: "Ongoing Confidence",
    description: "Support workers leave with clearer expectations, stronger records and safer day-to-day practice."
  }
];

const trainingReasons = [
  {
    iconAsset: "dom-care-reason-cqc.svg",
    title: "CQC Registration",
    description: "Fully regulated and compliant with all Care Quality Commission standards."
  },
  {
    iconAsset: "dom-care-reason-trained.svg",
    title: "Trained Professionals",
    description: "All carers are DBS checked, fully trained, and experienced in person-centred care."
  },
  {
    iconAsset: "dom-care-reason-compassion.svg",
    title: "Compassionate Care",
    description: "We treat every individual with kindness, dignity, and respect they deserve."
  },
  {
    iconAsset: "dom-care-reason-flexible.svg",
    title: "Flexible Support",
    description: "From a few hours a week to full-time care, we adapt to your needs and schedule."
  },
  {
    iconAsset: "dom-care-reason-plans.svg",
    title: "Personalised Plans",
    description: "No two people are the same. Your care plan is uniquely yours and regularly reviewed."
  },
  {
    iconAsset: "dom-care-reason-availability.svg",
    title: "24/7 Availability",
    description: "Our office team is always available to support you, your family, and our care team."
  }
];

const portfolioItems = [
  ["Vendor Companies", "North America and EU companies requiring UK home-visit delivery"],
  ["CROs & Sponsors", "Seeking scalable decentralised trial operations"],
  ["Investigator Sites", "Needing additional capacity and scheduling support"],
  ["NHS Trusts", "Healthcare partners delivering research activity"]
];

const trainingSteps = [
  {
    id: "1",
    label: "Personal & Contact",
    title: "Learner Details",
    description: "Tell us who is booking training and how we can contact them.",
    fields: [
      ["Full Legal Name (as it appears on ID)*", "e.g. Margaret Anne Davies"],
      ["Preferred Name", "e.g. Maggie"],
      ["Date of Birth*", "Select"],
      ["Duration at this address*", "Select"],
      ["Current UK Address*", "Street address, town/city, postcode", "wide"],
      ["Email Address*", "e.g. m.davies@gmail.com"],
      ["Phone Number *", "e.g. 07700 900000"],
      ["National Insurance (NI) Number*", "AB123456C", "wide"]
    ]
  },
  {
    id: "2",
    label: "Emergency Contacts",
    title: "Emergency Contacts",
    description: "Add the best contact routes and emergency contact information.",
    fields: [
      ["Contact Phone Number*", "Enter phone number"],
      ["Alternative Email", "Enter email address"],
      ["Emergency Contact Name*", "Enter full name"],
      ["Emergency Contact Number*", "Enter phone number"],
      ["Relationship to learner", "Select"],
      ["Preferred contact method", "Select"]
    ]
  },
  {
    id: "3",
    label: "Eligibility & Vetting",
    title: "Eligibility & Vetting",
    description: "Help us confirm the checks required before training begins.",
    fields: [
      ["Right to work status*", "Select"],
      ["DBS status*", "Select"],
      ["Photo ID available*", "Select"],
      ["Proof of address available*", "Select"],
      ["National Insurance (NI) Number*", "AB123456C", "wide"]
    ]
  },
  {
    id: "4",
    label: "Experience & Quals",
    title: "Experience & Qualifications",
    description: "Tell us about your current experience and learning goals.",
    fields: [
      ["Training course required*", "Select"],
      ["Current role", "Select"],
      ["Previous care experience", "Select"],
      ["Existing qualifications", "Enter details"],
      ["Preferred training date", "Select"],
      ["Training location preference", "Select"]
    ]
  },
  {
    id: "5",
    label: "Health & Accessibility",
    title: "Health & Accessibility",
    description: "Let us know about any adjustments needed for your training.",
    fields: [
      ["Health condition affecting training?", "Select"],
      ["Accessibility requirements", "Enter details", "wide"],
      ["Learning support needs", "Enter details", "wide"],
      ["Can attend practical sessions?", "Select"],
      ["Additional notes", "Tell us anything else we should know", "wide"]
    ]
  },
  {
    id: "6",
    label: "Declarations & Consents",
    title: "Declarations & Consents",
    description: "Your personal and sensitive data will be stored securely and processed for training administration purposes. It may be shared with regulated bodies as required by law.",
    fields: [
      ["Full Name *", "Enter full name"],
      ["Phone Number *", "Enter Phone Number"],
      ["Consent confirmation*", "Select"],
      ["Signature name*", "Enter full name"]
    ]
  }
];

const trainingFaqs = [
  "Can I pause my application if I don't have all my documents on hand?",
  "What documents can I use to prove my Right to Work in the UK?",
  "What happens if I do not have an Enhanced DBS certificate registered on the Update Service?",
  "Why do I need to provide information about my health and fitness to work?",
  "How is my personal data and criminal record declaration handled?"
];



export default function TrainingServicePage() {
  const [searchParams] = useSearchParams();

  const step = searchParams.get("step");

  const currentStep =
    trainingSteps.find((item) => item.id === step) ?? trainingSteps[0];

  return (
    <PageShell>
      <InnerHero
        actions={[{ href: "/training-service?step=1#book-training", label: "Book a Training" }]}
        className="inner-hero--supported-living inner-hero--training"
        title="Training Services"
        description={trainingIntro}
        backgroundImage="rumax-team-hero.png"
        showCallback
        showScrollCue
      />
      <QualityGovernanceStrip />
      <ReasonsGrid title="Key Features of Our Service" items={trainingFeatures} />
      <TrainingPortfolio />
      <ReasonsGrid title="Why Choose Rumax for Personal Care" items={trainingReasons} />
      <TrainingBookingForm active={currentStep} />
      <FaqSection items={trainingFaqs} />
      <CareCta />
    </PageShell>
  );
}

function TrainingBookingForm({ active }: { active: (typeof trainingSteps)[number] }) {
  const currentIndex = trainingSteps.findIndex((step) => step.id === active.id);
  const previous = trainingSteps[Math.max(0, currentIndex - 1)];
  const next = trainingSteps[Math.min(trainingSteps.length - 1, currentIndex + 1)];

  return (
    <section className="page-section training-booking" id="book-training">
      <div className="container">
        <div className="training-booking__heading">
          <span aria-hidden="true" />
          <h2>Start Your Journey today</h2>
        </div>
        <form className="training-booking__form">
          <div className="training-booking__stepper" aria-label="Training booking progress">
            {trainingSteps.map((step) => (
              <a className={step.id === active.id ? "is-active" : undefined} href={`/training-service?step=${step.id}#book-training`} key={step.id}>
                <span>{step.id}</span>
                <em>{step.label}</em>
              </a>
            ))}
          </div>
          <div className="training-booking__copy">
            <small>Step {active.id} of {trainingSteps.length}</small>
            <h3>{active.title}</h3>
            <p>{active.description}</p>
          </div>
          <div className="training-booking__grid">
            {active.fields.map(([label, placeholder, width]) => (
              <label className={width === "wide" ? "is-wide" : undefined} key={label}>
                <span>{label}</span>
                {placeholder === "Select" ? (
                  <select defaultValue="">
                    <option value="" disabled>Select</option>
                  </select>
                ) : (
                  <input placeholder={placeholder} type="text" />
                )}
              </label>
            ))}
          </div>
          <div className="training-booking__actions">
            <a href={`/training-service?step=${previous.id}#book-training`}>Previous Step</a>
            <a className="is-primary" href={`/training-service?step=${next.id}#book-training`}>
              {active.id === "6" ? "Submit" : active.id === "1" ? "Next Step" : "Save & Continue"}
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}

function TrainingPortfolio() {
  return (
    <section className="page-section training-portfolio">
      <div className="container training-portfolio__inner">
        <div className="training-portfolio__copy">
          <div className="dom-care-reasons__heading">
            <span aria-hidden="true" />
            <h2>Our Training Portfolio</h2>
          </div>
          <p>We offer a robust selection of mandatory and specialized training courses. Explore our current portfolio below:</p>
          <div className="training-portfolio__grid">
            {portfolioItems.map(([title, description]) => (
              <article key={title}>
                <img src="/assets/figma-exported/dom-care-reason-trained.svg" alt="" aria-hidden="true" />
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="training-portfolio__media">
          <img src="/assets/figma-exported/training-about.png" alt="Rumax training support" />
        </div>
      </div>
    </section>
  );
}
