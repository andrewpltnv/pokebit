import { Link } from "react-router-dom";
import { Card, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

export const ErrorElement = () => {
	return (
		<Card className="">
			<CardHeader>
				<CardTitle>Sorry, the page you visited does not exist.</CardTitle>
			</CardHeader>
			<CardFooter>
				<Button asChild>
					<Link to={".."}>Back Home</Link>
				</Button>
			</CardFooter>
		</Card>
	);
};
