import { ThemeProvider } from "@/components/themeProvider";
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { twc } from "react-twc";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

const Layout = twc(ThemeProvider).attrs({
	defaultTheme: "light",
	storageKey: "vite-ui-theme",
})``;

function RootLayout() {
	return (
		<Layout>
			<Header />
			<Outlet />
			<Analytics />
			<SpeedInsights />
		</Layout>
	);
}

export { RootLayout };
