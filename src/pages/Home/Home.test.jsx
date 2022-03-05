import Home from "./Home";
import { customRender } from "../../utils/testutils";

it("The home page", () => {
  const { container } = customRender(<Home />);
  expect(container).toMatchSnapshot();
});
