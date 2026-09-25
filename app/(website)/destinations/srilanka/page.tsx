import SubHero from "@/components/SubHero";
import DestinationSpace from "@/components/destinations/DestinationSpace";

const SriLankaPage = () => {
  return (
    <div>
      <SubHero
        title="Sri Lanka"
        description="Sri Lanka is an island country in South Asia, located in the Indian Ocean. It is known for its diverse landscapes, rich cultural heritage, and unique wildlife."
        backgroundVideo="Pj00J01gQoe2K7rCFYTEw02iEOYbuxM7usCAbe01M8BGNrA"
        eyebrow={{
          text: "< Destinations",
          href: "/destinations",
        }}
      />
      <DestinationSpace destinationId="srilanka" />
    </div>
  );
};

export default SriLankaPage;
