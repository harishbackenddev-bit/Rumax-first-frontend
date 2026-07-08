
import { CareProcessSection } from "@/components/common/CareProcessSection";
import { CareCta } from "@/components/common/CareCta";
import { ReasonsGrid } from "@/components/common/ReasonsGrid";
import { AssetImage } from "@/components/ui/AssetImage";
import { FaqSection, InnerHero, PageShell } from "@/components/pages/InnerPages";
import { careFaqs, careSteps } from "@/data/pages";



const serviceDetails = [
  {
    icon: "home",
    iconAsset: "dom-care-service-personal.svg",
    title: "Personal Care & Daily Living",
    summary: "Respectful, dignified support with everyday tasks to help clients maintain independence and wellbeing.",
    items: ["Washing, bathing, showering and personal hygiene", "Dressing and undressing", "Continence care and catheter management", "Oral hygiene", "Grooming and appearance", "Preparation of meals and nutrition support", "Assistance with mobility and transfers"]
  },
  {
    icon: "heart",
    iconAsset: "dom-care-service-dementia.svg",
    title: "Dementia Care",
    summary: "Specialist support for individuals living with dementia and their families, focused on safety, familiarity and quality of life.",
    items: ["Person-centred dementia care planning", "Cognitive stimulation and meaningful activity", "Behavioural support and de-escalation", "Safe home environment assessment", "Carer respite and family liaison", "End of life dementia care"]
  },
  {
    icon: "medical",
    iconAsset: "dom-care-service-medication-a.svg",
    title: "Medication Administration & Management",
    summary: "Safe, accurate medication support delivered by trained staff under a robust medication management policy.",
    items: ["Oral medication prompting and administration", "Topical medication application", "Medication ordering liaison with community pharmacies", "MAR (Medication Administration Record)", "Grooming and appearance", "Preparation of meals and nutrition support"]
  },
  {
    icon: "clock",
    iconAsset: "dom-care-service-respite.svg",
    title: "Respite & 24-Hour / Live-In Care",
    summary: "Flexible respite cover for family carers, and continuous live-in support for clients who require around-the-clock care.",
    items: ["Short-break respite care (day, overnight, weekly)", "24-hour waking or sleeping night support", "Live-in care packages", "Hospital discharge support and short-term step-down care", "Emergency cover at short notice"]
  },
  {
    icon: "medical",
    iconAsset: "dom-care-service-medication-b.svg",
    title: "Medication Administration & Management",
    summary: "Safe, accurate medication support delivered by trained staff under a robust medication management policy.",
    items: ["Oral medication prompting and administration", "Topical medication application", "Medication ordering liaison with community pharmacies", "MAR (Medication Administration Record)", "Grooming and appearance", "Preparation of meals and nutrition support"]
  },
  {
    icon: "users",
    iconAsset: "dom-care-service-supported.svg",
    title: "Supported Living",
    summary: "Empowering adults with learning disabilities, autism, mental health needs, or physical disabilities to live independently in their own home or supported accommodation.",
    items: ["Daily living skills and personal routines", "Community access and meaningful activities", "Medication support", "Tenancy support and independent living skills", "Budgeting and financial skills support", "Collaboration with families, social workers, and support networks"]
  }
];

const careReasons = [
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

const assessmentFields = [
  { label: "First Name *", placeholder: "Enter first name" },
  { label: "Last Name *", placeholder: "Enter last name" },
  { label: "Phone Number *", placeholder: "Enter Phone Number" },
  { label: "Email Address *", placeholder: "Enter email address" },
  { label: "Postcode of care recipient *", placeholder: "Enter Phone Number" },
  { label: "Your relationship to the person needing care *", placeholder: "Select", as: "select" },
  { label: "Type of care needed (tick all that apply) *", placeholder: "Enter Phone Number" },
  { label: "How soon is care needed? *", placeholder: "Select", as: "select" },
  { label: "Funding type", placeholder: "Select", as: "select", wide: true }
];

export default function DomiciliaryCarePage() {
  return (
    <PageShell>
      <InnerHero
        actions={[
          { label: "Calculate Your Care Costs", href: "/care-calculator" },
          { label: "Start a Self-Assessment", href: "/self-assessment", variant: "secondary" }
        ]}
        className="inner-hero--domiciliary"
        title="Domiciliary & Personal Care"
        description={"Our domiciliary care services are designed for individuals who wish to remain in their own homes, maintaining their independence, routines, and quality of life.\n\nWe provide care across the full spectrum - from a few hours per week through to 24-hour live-in support."}
        backgroundImage="rumax-team-hero.png"
        showCallback
        showScrollCue
      />
      <DomiciliaryCqcStrip />
      <DomiciliaryServices />
      <CareProcessSection
        title="How We Work"
        intro="Our person-centred approach ensures you receive the right support at the right time."
        image="rumax-domiciliary-team.png"
        imageAlt="Rumax care worker with client"
        steps={careSteps}
      />
      <ReasonsGrid title="Why Choose Rumax for Personal Care" items={careReasons} />
      <DomiciliaryAssessment />
      <FaqSection items={careFaqs} />
      <CareCta />
    </PageShell>
  );
}

function DomiciliaryAssessment() {
  return (
    <section className="page-section dom-care-assessment">
      <div className="container">
        <div className="dom-care-assessment__heading">
          <div>
            <span aria-hidden="true" />
            <h2>Care Clients & Families</h2>
          </div>
          <p>If you are looking for homecare for yourself or a family member, please use this form. We will be in touch within one working day to arrange a free initial assessment.</p>
        </div>
        <form className="dom-care-assessment__form">
          <div className="dom-care-assessment__grid">
            {assessmentFields.map((field) => (
              <label className={field.wide ? "is-wide" : undefined} key={field.label}>
                <span>{field.label}</span>
                {field.as === "select" ? (
                  <select defaultValue="">
                    <option value="" disabled>{field.placeholder}</option>
                  </select>
                ) : (
                  <input placeholder={field.placeholder} type="text" />
                )}
              </label>
            ))}
          </div>
          <label className="dom-care-assessment__message">
            <span>Additional information or questions (optional)</span>
            <textarea placeholder="Enter Phone Number" rows={7} />
          </label>
          <label className="dom-care-assessment__consent">
            <input type="checkbox" />
            <span>I consent to RUMAX LIMITED contacting me regarding my enquiry in accordance with their Privacy Policy. *</span>
          </label>
          <button type="submit">Request a Free Assessment</button>
        </form>
      </div>
    </section>
  );
}

function DomiciliaryCqcStrip() {
  return (
    <section className="dom-care-cqc">
      <div className="container dom-care-cqc__inner">
        <div className="dom-care-cqc__provider">
          <AssetImage className="dom-care-cqc__mark" name="dom-care-cqc-mark.png" alt="CQC" />
          <div>
            <h2>CQC Registered Provider</h2>
            <p>Personal Care &middot; Treatment of Disease, Disorder or Injury &middot; Nursing Care</p>
            <small>location ID No. 1-1162554428</small>
          </div>
        </div>
        <div className="dom-care-cqc__rating">
          <AssetImage name="dom-care-cqc-rating-logo.svg" alt="Care Quality Commission" />
          <i aria-hidden="true" />
          <span>Overall: <strong>Good</strong></span>
          <AssetImage className="dom-care-cqc__external" name="dom-care-cqc-external.svg" alt="" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

function DomiciliaryServices() {
  return (
    <section className="page-section dom-care-services">
      <div className="container">
        <div className="page-section__heading">
          <span className="section-spark" aria-hidden="true" />
          <h2>Our Care Services</h2>
        </div>
        <div className="dom-care-service-grid">
          {serviceDetails.map((service) => (
            <article className="dom-care-service-card" key={service.iconAsset}>
              <span aria-hidden="true">
                <AssetImage name={service.iconAsset} alt="" aria-hidden="true" />
              </span>
              <h3>{service.title}</h3>
              <p>{service.summary}</p>
              <ul>
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

