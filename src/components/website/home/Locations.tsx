import { locationCards } from "@/data/site";
import { AssetImage } from "@/components/ui/AssetImage";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Locations() {
  return (
    <section className="locations section">
      <SectionTitle
        className="locations__title"
        mark="rumax-locations-mark.svg"
        markClass="section-mark--locations"
        title="Care Services Across The UK"
      >
        <p>We provide home care and clinical services across multiple locations, bringing quality care to communities nationwide</p>
      </SectionTitle>
      <div className="container location-grid">
        {locationCards.map((location) => (
          <a href="#" key={location}>
            <AssetImage name="rumax-location-card-icon.svg" aria-hidden="true" />
            <span>{location}</span>
          </a>
        ))}
      </div>
      <a className="primary-btn locations__button" href="#">
        View All Locations
      </a>
    </section>
  );
}
