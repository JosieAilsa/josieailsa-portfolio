import { customRender } from "../../utils/testutils";
import Main from "./Main";

test("Main page should render", () => {
  const { container } = customRender(<Main />);
  expect(container).toMatchSnapshot();
});
