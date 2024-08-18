import { render, screen } from "@testing-library/react";
import App from "./App";

test("", async () => {
	render(<App />);
	const hello = screen.getByText("");
	expect(hello).toBeInTheDocument();
});
