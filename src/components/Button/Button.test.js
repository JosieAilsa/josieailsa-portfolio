import { customRender } from "../../utils/testutils";
import Button from "./Button";

test("Button should render", () => {
  const { container } = customRender(<Button />);
  expect(container).toMatchSnapshot();
});
