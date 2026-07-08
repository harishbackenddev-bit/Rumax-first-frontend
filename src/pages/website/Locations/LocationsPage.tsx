import { ResourcePage } from "@/components/pages/ExpandedPages";
import { locations } from "@/data/expanded-pages";



export default function LocationsPage() {
  return (
    <ResourcePage
      eyebrow="Locations"
      title="Our Essex County Locations"
      description="Rumax provides home care and clinical services across multiple Essex locations."
      cards={locations.map((location) => ({
        title: location.name,
        icon: "location",
        description: location.description,
        href: `/locations/${location.slug}`
      }))}
    />
  );
}
