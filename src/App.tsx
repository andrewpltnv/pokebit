import { ThemeProvider } from "@/components/themeProvider";
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { twc } from "react-twc";

const Layout = twc(ThemeProvider).attrs({
  defaultTheme: "dark",
  storageKey: "vite-ui-theme",
})``;

function RootLayout() {
  return (
    <Layout>
      <Header />
      <Outlet />
      <Footer />
    </Layout>
  );
}

export { RootLayout };
