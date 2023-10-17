import hotel1 from "./images/hote1.jpg";
import hotel2 from "./images/hotel2.jpg";
import hotel3 from "./images/hotel3.jpg";
import hotel4 from "./images/hotel4.jpg";
import hotel5 from "./images/hotel5.jpg";
import london from "./images/london.jpg";
import portugal from "./images/portugal.jpg";
import france from "./images/france.jpg";
import turkey from "./images/turkey.jpg";

// Icons
import { FaRegEnvelopeOpen } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { MdFavoriteBorder } from "react-icons/md";
import { TbGridDots, TbSettings2 } from "react-icons/tb";

export const dLink = [
  {
    id: 1,
    link: "Dashboard",
    path: "/",
    icon: <GoHomeFill size={20} />,
  },
  {
    id: 2,
    link: "Explore City",
    path: "/explore_city",
    icon: <TbGridDots size={20} />,
  },
  {
    id: 3,
    link: "Ticket",
    path: "/ticket",
    icon: <FaRegEnvelopeOpen size={19} />,
  },
  {
    id: 4,
    link: "Favorites",
    path: "/favorites",
    icon: <MdFavoriteBorder size={21} />,
  },
  {
    id: 5,
    link: "Settings",
    path: "/settings",
    icon: <TbSettings2 size={19}/>,
  },
];

export const location = [
  {
    id: 1,
    image: france,
    location: "monmartre, france",
    rating: "4/5",
    comment: "Visiting the best tourist areas chosen by the audience.",
    cost: "450,000,00",
  },
  {
    id: 2,
    image: turkey,
    location: "Instanbul, turkey",
    rating: "5/5",
    comment: "One of our best-selling tours to Turkey and visiting its region",
    cost: "600,000,00",
  },
  {
    id: 3,
    image: london,
    location: "London, UK",
    rating: "5/5",
    comment: "One of the most beautiful to visit during summer Holiday.",
    cost: "360,000,00",
  },
  {
    id: 4,
    image: portugal,
    location: "Benfica/Portugal",
    rating: "5/5",
    comment: "One of the most beautiful to visit during summer Holiday.",
    cost: "320,000,00",
  },
];

export const bestOffers = [
  {
    id: 1,
    image: hotel1,
    title: "7seasons Apartment",
    location: "Kensington/London",
    cost: "65,00",
  },
  {
    id: 2,
    image: hotel2,
    title: "Along with the Villa",
    location: "Hungary/Budapest",
    cost: "65,00",
  },
  {
    id: 3,
    image: hotel3,
    title: "Resort and Recreation",
    location: "Williamstreet/Boxon",
    cost: "65,00",
  },
  {
    id: 4,
    image: hotel4,
    title: "Beautiful and Classy",
    location: "Citadines Paris/France",
    cost: "65,00",
  },
  {
    id: 5,
    image: hotel5,
    title: "Permanent Peace",
    location: "Sugar Apartments/Brazil",
    cost: "79,00",
  },
];
