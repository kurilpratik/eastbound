import SubHero from "@/components/SubHero";
import DestinationSpace from "@/components/destinations/DestinationSpace";

const UAEPage = () => {
  return (
    <div>
      <SubHero
        title="United Arab Emirates"
        description="United Arab Emirates is a country in Western Asia, located on the southeastern corner of the Arabian Peninsula. It is known for its modern architecture, luxury shopping, and vibrant cultural scene."
        backgroundVideo="/videos/UAE.mp4"
        eyebrow="Destinations"
      />
      <DestinationSpace destinationId="uae" />
    </div>
  );
};

export default UAEPage;
