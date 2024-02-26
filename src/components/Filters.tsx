import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { changeOffset } from "../app/paginationSlice";
import { useRef } from "react";
import { Pagination } from "antd";

export default function Filters() {
	const dispatch = useDispatch();
	const inputRef = useRef<HTMLInputElement>(null);

	return (
		<div className="flex gap-6 m-4">
			<input ref={inputRef} type="number" />
			<button
				type="button"
				onClick={() => {
					dispatch(changeOffset(parseInt(inputRef.current?.value ?? "")));
				}}
			>
				Search
			</button>
		</div>
	);
}

export const PokemonListPagination = () => {
	const { limit, offset } = useSelector((state: RootState) => state.pagination);

	return (
		<div>
			<Pagination current={offset / limit} total={1200 / limit} />;
		</div>
	);
};
