import { Header } from "./components/Header";
import { Outlet } from "react-router-dom";
import FloatButton from "antd/es/float-button/FloatButton";
import { App } from "antd";

function RootLayout() {
	return (
		<App>
			<div className="flex flex-col min-h-svh bg-slate-300">
				<Header />
				<Outlet />
				<FloatButton.BackTop />
			</div>
		</App>
	);
}

export { RootLayout };
