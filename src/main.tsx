import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RootLayout } from "./App.tsx";
import { RouterProvider, createBrowserRouter, json } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";
import PokemonDetailsPage from "./features/Pokemon/PokemonPage.tsx";
import { ErrorElement } from "./components/ErrorElement.tsx";
import RootListPage from "./pages/RootList/index.tsx";
import { PokemonClient } from "pokenode-ts";
import "@total-typescript/ts-reset";

const client = new PokemonClient({ logs: true });
// TODO move client to Provider
// TODO folder structure for providers: theme, api
const root = document.getElementById("root");
if (!root) throw "There is no root element";

const router = createBrowserRouter([
	{
		element: <RootLayout />,
		errorElement: <ErrorElement />,
		children: [
			{
				path: "/",
				index: true,
				element: <RootListPage />,
			},
			{
				//TODO TypeListingPage
				// TODO loader for typePage
				path: "/type/:type",
				element: <div>Type</div>,
				loader: async ({ params }) => {
					const res = await client.getTypeByName(`${params.type}`);
					return json(res);
				},
			},
			{
				path: "/name/:name",
				element: <PokemonDetailsPage />,
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
	</React.StrictMode>,
);
