export type HighlightPlace = {
  name: string;
  image: string;
  description: string;
};

export type DestinationDetail = {
  id: string;
  name: string;
  about: string;
  image: string;
  highlightPlaces: HighlightPlace[];
  experiences: string[];
};

export const allDestinations: DestinationDetail[] = [
  {
    id: "india",
    name: "India",
    about:
      "India is a realm of layered history, vibrant cities, sacred rivers, and deeply immersive cultural experiences. From royal Rajasthan to the misty hills of the Himalayas and the serene backwaters of Kerala, every journey can be shaped around heritage, food, wildlife, and local life.",
    image: "/images/destinations/india/1.jpg",
    highlightPlaces: [
      {
        name: "Jaipur",
        image: "/images/destinations/india/2.jpg",
        description:
          "The Pink City brings palace courtyards, fort views, artisan bazaars, and slow luxury at every turn.",
      },
      {
        name: "Varanasi",
        image: "/images/destinations/india/3.jpg",
        description:
          "A sunrise on the ghats reveals the spiritual rhythm of the Ganges in one of India’s most unforgettable cities.",
      },
      {
        name: "Kerala Backwaters",
        image: "/images/destinations/india/4.jpg",
        description:
          "Houseboats, spice gardens, and quiet canals offer a peaceful contrast to India’s busiest cities.",
      },
    ],
    experiences: [
      "Private palace stays in Rajasthan",
      "Tiger safari in Central India",
      "Sunrise boat ride on the Ganges",
      "Ayurvedic wellness retreat",
      "Heritage walk through Old Delhi",
    ],
  },
  {
    id: "nepal",
    name: "Nepal",
    about:
      "Nepal blends dramatic mountain landscapes with deeply rooted spiritual traditions and warm, welcoming hospitality. Whether travellers are looking for a classic Himalayan trek, a cultural circuit, or a wildlife escape, the country offers a wide range of mountain and village experiences.",
    image: "/images/destinations/nepal/1.jpg",
    highlightPlaces: [
      {
        name: "Kathmandu Valley",
        image: "/images/destinations/nepal/2.jpg",
        description:
          "Ancient courtyards, UNESCO heritage sites, and temples that shape daily life across the valley.",
      },
      {
        name: "Pokhara",
        image: "/images/destinations/nepal/3.jpg",
        description:
          "Lakeside views, sunrise over the Annapurna range, and adventurous outdoor activities in a relaxed setting.",
      },
      {
        name: "Chitwan National Park",
        image: "/images/destinations/nepal/4.jpg",
        description:
          "A jungle safari destination for rhinos, elephants, and birdlife amid the Terai plains.",
      },
    ],
    experiences: [
      "Scenic Himalayan trekking",
      "Mountain flight over Everest",
      "White-water rafting in the Trishuli",
      "Monastery and heritage circuit",
      "Wildlife safari in Chitwan",
    ],
  },
  {
    id: "bhutan",
    name: "Bhutan",
    about:
      "Bhutan is defined by its measured pace, mountain serenity, and deep cultural identity. The kingdom offers a rare blend of monastery visits, gentle trekking, wellness, and sustainable luxury, all shaped by a philosophy that values experience over excess.",
    image: "/images/destinations/bhutan/1.jpg",
    highlightPlaces: [
      {
        name: "Paro",
        image: "/images/destinations/bhutan/2.jpg",
        description:
          "Home to the iconic Tiger’s Nest monastery and a striking valley framed by dramatic peaks.",
      },
      {
        name: "Thimphu",
        image: "/images/destinations/bhutan/3.jpg",
        description:
          "The capital offers dzongs, craft heritage, and a refined cultural scene rooted in tradition.",
      },
      {
        name: "Punakha",
        image: "/images/destinations/bhutan/4.jpg",
        description:
          "A scenic river valley with grand architecture, riverside landscapes, and peaceful hiking routes.",
      },
    ],
    experiences: [
      "Trekking in the eastern Himalaya",
      "Bhutanese hot stone bath and wellness ritual",
      "Festival and monastery visits",
      "Farmhouse dining in mountain villages",
      "River valley scenic walks",
    ],
  },
  {
    id: "srilanka",
    name: "Sri Lanka",
    about:
      "Sri Lanka is compact, varied, and endlessly rewarding. Within a short journey, travellers can move from ancient cultural capitals and tea estates to coastal escapes and wildlife-rich national parks, creating a balanced itinerary with contrast at every stop.",
    image: "/images/destinations/srilanka/1.jpg",
    highlightPlaces: [
      {
        name: "Kandy",
        image: "/images/destinations/srilanka/2.jpg",
        description:
          "A cultural heartland with temples, lake views, and the legendary temple of the Tooth Relic.",
      },
      {
        name: "Ella",
        image: "/images/destinations/srilanka/3.jpg",
        description:
          "Tea country scenery, dramatic train rides, and panoramic viewpoints across the highlands.",
      },
      {
        name: "Galle",
        image: "/images/destinations/srilanka/1.jpg",
        description:
          "A colonial-era coastal town with forts, café culture, and a scenic shoreline setting.",
      },
    ],
    experiences: [
      "Cultural triangle discovery",
      "Leopard safari in Yala",
      "Tea estate stay in the highlands",
      "Beach break in the south coast",
      "Scenic rail journey through the hills",
    ],
  },
  {
    id: "uae",
    name: "UAE",
    about:
      "The UAE brings an elegant, contemporary layer to the region, combining sleek city stays, desert adventure, and event-ready infrastructure. It works beautifully as a luxury stopover or as a polished counterpoint to more heritage-heavy itineraries in South Asia.",
    image: "/images/destinations/uae/1.jpg",
    highlightPlaces: [
      {
        name: "Dubai",
        image: "/images/destinations/uae/2.jpg",
        description:
          "High-design hotels, waterfront experiences, and a blend of modern glamour and easy luxury.",
      },
      {
        name: "Abu Dhabi",
        image: "/images/destinations/uae/3.jpg",
        description:
          "Cultural landmarks, polished hospitality, and strong options for corporate or private group programmes.",
      },
      {
        name: "Al Marmoom Desert",
        image: "/images/destinations/uae/4.jpg",
        description:
          "Dune safaris, desert dining, overnight camps, and off-road experiences under the stars.",
      },
    ],
    experiences: [
      "Desert camp overnight",
      "Private city and waterfront escape",
      "Falconry and dune adventure",
      "Luxury stopover itinerary",
      "MICE and incentive-ready venue access",
    ],
  },
];
