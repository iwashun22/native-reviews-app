import { ReactElement } from "react";

import Home from "../screens/Home";
import About from "../screens/About";
import ReviewDetails from "../screens/ReviewDetails";

export const pages = {
  home: { name: "Home", component: Home },
  about: { name: "About", component: About },
  reviewDetails: { name: "ReviewDetails", component: ReviewDetails },
} as const;

export type PagesName = typeof pages[keyof typeof pages]["name"];