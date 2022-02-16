import { customRender } from "../../utils/testutils";
import Nav from "./Nav";

test("Nav should render", () => {
    const { container } = customRender(<Nav/>);
    expect(container).toMatchSnapshot();
  });
  