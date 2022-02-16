import { customRender } from "../../utils/testutils";
import Projects from "./Projects";

test("Projects page should render", () => {
    const { container } = customRender(<Projects/>);
    expect(container).toMatchSnapshot();
  });
  