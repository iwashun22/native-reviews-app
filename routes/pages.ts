import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { ReviewProps } from "../screens/ReviewDetails";

import Home from "../screens/Home";
import About from "../screens/About";
import ReviewDetails from "../screens/ReviewDetails";

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