import { ThemeProvider } from "@/components/themeProvider";
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { twc } from "react-twc";

const Layout = twc(ThemeProvider).attrs({
	defaultTheme: "light",
	storageKey: "vite-ui-theme",
})``;

function RootLayout() {
	return (
		<Layout>
			<Header />
			<Outlet />
		</Layout>
	);
}

export { RootLayout };
