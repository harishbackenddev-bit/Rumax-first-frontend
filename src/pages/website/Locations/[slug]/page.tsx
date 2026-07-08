import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProcessBand, ResourcePage } from "@/components/pages/ExpandedPages";
import { locations } from "@/data/expanded-pages";

type LocationDetailProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({ params }: LocationDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const location = locations.find((item) => item.slug === slug);
  return {
    title: location ? `${location.name} Care Services | Rumax` : "Location | Rumax",
    description: location?.description
  };
}

export default async function LocationDetailPage({ params }: LocationDetailProps) {
  const { slug } = await params;
  const location = locations.find((item) => item.slug === slug);
  if (!location) notFound();

  return (
    <ResourcePage
      eyebrow="Location"
      title={`${location.name} Care Services`}
      description={location.description}
      cards={[
        { title: "Personal Care", icon: "heart", description: `Support at home across ${location.name}, tailored around daily routines.` },
        { title: "Medication Support", icon: "medical", description: "Prompts and administration support within agreed care plans." },
        { title: "Family Communication", icon: "mail", description: "Clear updates and responsive office support." }
      ]}
    >
      <ProcessBand title={`Care In ${location.name}`} items={["Free initial conversation", "Personalised care planning", "Matched local care team", "Regular reviews as needs change"]} />
    </ResourcePage>
  );
}
