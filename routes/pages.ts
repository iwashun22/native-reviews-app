import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { DrawerScreenProps } from "@react-navigation/drawer";
import type { ReviewProps } from "../screens/ReviewDetails";

import Home from "../screens/Home";
import About from "../screens/About";
import ReviewDetails from "../screens/ReviewDetails";

import HomeStack from "./HomeStack";
import AboutStack from "./AboutStack";
import { ReactElement } from "react";

export type RootStackParamList = {
  HomePage: undefined;
  ReviewDetailsPage: ReviewProps;
  AboutPage: undefined;
}
type Stacks = keyof RootStackParamList;

export type PageProps<Screen extends Stacks> = NativeStackScreenProps<RootStackParamList, Screen>;
export const pages = {
  home: { name: "HomePage", Component: Home },
  about: { name: "AboutPage", Component: About },
  reviewDetails: { name: "ReviewDetailsPage", Component: ReviewDetails },
} as const;

export type DrawerPagesParamList = {
  HomeDrawer: undefined,
  AboutDrawer: undefined
}
type Drawers = keyof DrawerPagesParamList;

export type DrawerPageProps<Screen extends Drawers> = DrawerScreenProps<DrawerPagesParamList, Screen>;
export const drawerPages = {
  home: { name: "HomeDrawer", Component: HomeStack },
  about: { name: "AboutDrawer", Component: AboutStack }
} as const;