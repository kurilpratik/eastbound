import SubHero from "@/components/SubHero";
import DestinationSpace from "@/components/destinations/DestinationSpace";

const UAEPage = () => {
  return (
    <div>
      <SubHero
        title="United Arab Emirates"
        description="United Arab Emirates is a country in Western Asia, located on the southeastern corner of the Arabian Peninsula. It is known for its modern architecture, luxury shopping, and vibrant cultural scene."
        backgroundVideo="/Xs4ztoyiKFNU402WaHxhGG9akn02MRyE3BGb1kYzOesus"
        eyebrow={{
          text: "< Destinations",
          href: "/destinations",
        }}
        button={{
          label: "Download our UAE Profile",
          href: "https://drive.google.com/file/d/15vfmtnRgHV8QyD79_lilozmS96tUiIiG/view?usp=sharing",
          variant: "default",
          size: "lg",
        }}
      />
      <DestinationSpace destinationId="uae" />
    </div>
  );
};

export default UAEPage;
