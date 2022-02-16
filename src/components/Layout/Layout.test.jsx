import { customRender } from "../../utils/testutils";
import Layout from "./Layout";

test("Home page should render", () => {
    const { container } = customRender(<Layout/>);
    expect(container).toMatchSnapshot();
  });
  