import type { DrawerScreenProps } from "@react-navigation/drawer";

export type DrawerPagesParamList = {
  HomeDrawer: undefined,
  AboutDrawer: undefined
}
type Drawers = keyof DrawerPagesParamList;

export type DrawerPageProps<Screen extends Drawers> = DrawerScreenProps<DrawerPagesParamList, Screen>;