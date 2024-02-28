import React from "react";
import ReactDOM from "react-dom/client";
import { RootLayout, RootPage } from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";

const root = document.getElementById("root");
if (!root) throw "There is no root element";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				path: "",
				element: <RootPage />,
			},
			{
				path: "/type/:type",
				element: <div>Type</div>,
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
