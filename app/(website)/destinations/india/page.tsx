import DestinationSpace from "@/components/destinations/DestinationSpace";
import SubHero from "@/components/SubHero";

const IndiaPage = () => {
  return (
    <div>
      <SubHero
        title="India"
        description="India is a country in South Asia. It is the seventh-largest country by land area, the second-most populous country, and the most populous democracy in the world."
        backgroundVideo="/videos/Amer.mp4"
        eyebrow={{
          text: "< Destinations",
          href: "/destinations",
        }}
        button={{
          label: "Download our India Profile",
          href: "https://drive.google.com/file/d/1BWSRpBShhr44-Kcmjtkl7RpvWM_TKD8q/view?usp=sharing",
          variant: "default",
          size: "lg",
        }}
      />
      <DestinationSpace destinationId="india" />
    </div>
  );
};

export default IndiaPage;
