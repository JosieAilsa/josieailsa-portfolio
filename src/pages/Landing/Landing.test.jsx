import Landing from "./Landing"
import { customRender } from "../../utils/testutils";

test("The landing page", () => {
    const { container } = customRender(<Landing/>);
    expect(container).toMatchSnapshot();
  });
  