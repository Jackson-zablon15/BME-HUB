import {
  community,
  events,
  expert,
  galley,
  home,
  library,
  questions,
} from "../public/assets";

export const navLinks = [
  {
    imgURL: home,
    route: "/",
    label: "Home",
  },
  {
    imgURL: community,
    route: "/community",
    label: "Community",
  },
  {
    imgURL: events,
    route: "/news",
    label: "News",
  },
  {
    imgURL: library,
    route: "/library",
    label: "Library",
  },
  {
    imgURL: questions,
    route: "/chat",
    label: "Chat",
  },
  {
    imgURL: galley,
    route: "/galley",
    label: "galley",
  },
  /*{
      imgURL: "/assets/index/menu.svg",
      label: "More",
    }, */
];

export const profileTabs = [
  { value: "threads", label: "Threads", icon: "/assets/reply.svg" },
  { value: "replies", label: "Replies", icon: "/assets/members.svg" },
  { value: "tagged", label: "Tagged", icon: "/assets/tag.svg" },
];
