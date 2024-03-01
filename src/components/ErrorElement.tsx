import Result from "antd/es/result/index";
import Button from "antd/es/button/button";
import { useNavigate } from "react-router-dom";

export const ErrorElement = () => {
	const navigate = useNavigate();

	return (
		<Result
			status="404"
			title="404"
			subTitle="Sorry, the page you visited does not exist."
			extra={
				<Button onClick={() => navigate(-1)} type="primary">
					Back Home
				</Button>
			}
		/>
	);
};
