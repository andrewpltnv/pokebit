import { Input } from "antd";

export function SearchByName() {
	return (
		<div className="flex gap-6 m-4">
			<Input.Search
				placeholder="Search pokemon by name"
				enterButton="Search"
				size="large"
				loading={false}
			/>
		</div>
	);
}
