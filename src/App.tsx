import { Header } from "./components/Header";
import Filters, { Pagination } from "./components/Filters";
import { List } from "./components/List";

function App() {
	return (
		<div className="flex flex-col ">
			<Header />
			<Filters />
			<List />
			<Pagination />
		</div>
	);
}

export default App;
