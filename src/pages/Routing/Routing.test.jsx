import { customRender } from "../../utils/testutils";
import Routing from "./Routing";

test("Main page should render", () => {
  const { container } = customRender(<Routing />);
  expect(container).toMatchSnapshot();
});
