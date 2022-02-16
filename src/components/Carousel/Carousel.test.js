import { customRender } from "../../utils/testutils";
import Carousel from "./Carousel";

test("Carousel should render", () => {
    const { container } = customRender(<Carousel/>);
    expect(container).toMatchSnapshot();
  });
  