import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { changeOffset, handlePag } from "../app/paginationSlice";
import { useRef } from "react";
import { useGetPokemonsPerPageQuery } from "../app/api";

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

export const Pagination = () => {
	const pagination = useSelector((state: RootState) => state.pagination);
	const { isLoading, data } = useGetPokemonsPerPageQuery(pagination.offset);

	if (isLoading) return "Loading";

	return (
		<div className=" m-4 p-2 text-center border-2">
			<form className=" flex justify-evenly m-4 p-2 border-2">
				<button type="button" onClick={() => handlePag("prev")}>
					Previous
				</button>
				<p>{JSON.stringify(data?.count)}</p>
				<button type="button" onClick={() => handlePag("next")}>
					Next
				</button>
			</form>
		</div>
	);
};
