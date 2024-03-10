import { ThemeConfig } from "antd";

export const theme: ThemeConfig = {
  token: {
    colorSuccess: "#1a75f9c7",
    colorWarning: "#5b6e2ed8",
    colorError: "#6139aadc",
    colorLink: "#5586fee3",
    colorTextBase: "#140000",
    colorBgBase: "#fff6ef0d",
    fontSize: 18,
    borderRadius: 16,
    wireframe: false,
    sizeUnit: 5,
    sizeStep: 5,
    controlPaddingHorizontal: 10,
    colorPrimary: "#d6280df2",
    colorInfo: "#d6280df2",
  },
  components: {
    Card: {
      actionsBg: "rgba(0, 0, 0, 1)",
      algorithm: true,
      paddingLG: 18,
      padding: 16,
      marginXXS: 10,
      borderRadiusLG: 18,
      headerHeightSM: 28,
      marginXS: 12,
      tabsMarginBottom: 0,
      headerHeight: 50,
      colorBgContainer: "rgba(234, 233, 237, 0.66)",
      colorBorderSecondary: "rgba(180, 179, 156, 0.66)",
      colorFillAlter: "rgba(254, 38, 1, 0.8)",
      colorText: "rgba(0, 0, 0, 0.94)",
      colorTextDescription: "rgb(3, 2, 2)",
      lineWidth: 1,
      fontSizeLG: 18,
      colorTextHeading: "rgba(65, 70, 61, 0.96)",
      colorPrimary: "rgb(138, 0, 0)",
    },
  },
};
export function upperCaseName(name: string) {
  return name[0].toUpperCase() + name.slice(1);
}

export function faviconHref(id: number) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${id}.gif`;
}
