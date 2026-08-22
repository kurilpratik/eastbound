import DestinationSpace from "@/components/destinations/DestinationSpace";
import SubHero from "@/components/SubHero";

const IndiaPage = () => {
  return (
    <div>
      <SubHero
        title="India"
        description="India is a country in South Asia. It is the seventh-largest country by land area, the second-most populous country, and the most populous democracy in the world."
        backgroundVideo="/videos/Amer.mp4"
        eyebrow="Destinations"
      />
      <DestinationSpace />
    </div>
  );
};

export default IndiaPage;
