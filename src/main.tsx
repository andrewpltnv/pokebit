import "@fontsource-variable/pixelify-sans";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RootLayout } from "./App.tsx";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { RouterProvider, createBrowserRouter, json } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";
import { ErrorElement } from "./components/ErrorElement.tsx";
import RootListPage from "./pages/RootList/index.tsx";
import { PokemonClient } from "pokenode-ts";
import "@total-typescript/ts-reset";
import PokemonProfilePage from "./pages/PokemonProfile/index.tsx";
import ByTypeListPage from "./pages/ByTypeList/index.tsx";

const root = document.getElementById("root");
if (!root) throw "There is no root element";

const client = new PokemonClient({ logs: false });

const router = createBrowserRouter([
	{
		element: <RootLayout />,
		children: [
			{
				path: "/",
				index: true,
				errorElement: <ErrorElement />,
				element: <RootListPage />,
			},
			{
				path: "/type/:type",
				errorElement: <ErrorElement />,
				element: <ByTypeListPage />,
				loader: async ({ params }) => {
					const typeInfo = await client.getTypeByName(`${params.type}`);

					return json(typeInfo);
				},
			},
			{
				//TODO PokemonProfilePage
				path: "/name/:name",
				errorElement: <ErrorElement />,
				element: <PokemonProfilePage />,
				loader: async ({ params }) => {
					const res = await client.getPokemonByName(`${params.name}`);
					return json(res);
				},
			},
			{
				path: "*",
				element: <ErrorElement />,
			},
		],
	},
]);

ReactDOM.createRoot(root).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
		<Analytics />
		<SpeedInsights />
	</React.StrictMode>,
);
