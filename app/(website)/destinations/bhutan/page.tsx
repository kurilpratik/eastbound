import SubHero from "@/components/SubHero";
import DestinationSpace from "@/components/destinations/DestinationSpace";

const BhutanPage = () => {
  return (
    <div>
      <SubHero
        title="Bhutan"
        description="Bhutan is a landlocked country in South Asia, located in the Eastern Himalayas. It is known for its stunning landscapes, rich cultural heritage, and commitment to Gross National Happiness."
        backgroundVideo="/videos/Bhutan2.mp4"
        eyebrow={{
          text: "< Destinations",
          href: "/destinations",
        }}
        button={{
          label: "Download our Bhutan Profile",
          href: "https://drive.google.com/file/d/1a9ibZnTLNt6w6F2UGf-AA5AOj2DZzibV/view?usp=sharing",
          variant: "default",
          size: "lg",
        }}
      />
      <DestinationSpace destinationId="bhutan" />
    </div>
  );
};

export default BhutanPage;
