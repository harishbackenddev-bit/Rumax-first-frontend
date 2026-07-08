import { useSearchParams } from "react-router-dom";

import {
  ContactVariantForm,
  ResourcePage,
} from "@/components/pages/ExpandedPages";
import { complaintsVariants } from "@/data/expanded-pages";

export default function FeedbackPage() {
  const [searchParams] = useSearchParams();

  const type = searchParams.get("type");

  const active =
    complaintsVariants.find((item) => item.id === type) ??
    complaintsVariants[0];

  return (
    <ResourcePage
      eyebrow={active.eyebrow}
      title={active.title}
      description={active.description}
    >
      <section className="page-section variant-tabs-section">
        <div className="container variant-tabs">
          {complaintsVariants.map((variant) => (
            <a
              key={variant.id}
              href={`/complaints-concerns-feedback?type=${variant.id}`}
              className={variant.id === active.id ? "is-active" : undefined}
            >
              {variant.label}
            </a>
          ))}
        </div>
      </section>

      <ContactVariantForm
        title={active.title}
        description={active.description}
      />
    </ResourcePage>
  );
}