import { customRender } from "../../utils/testutils";
import NavDraw from "./NavDraw";

test("Nav Draw page should render", () => {
  const { container } = customRender(<NavDraw />);
  expect(container).toMatchSnapshot();
});
