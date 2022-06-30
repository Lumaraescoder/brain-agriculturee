import {render} from '@testing-library/react'

import { Container } from "./index";

describe("Wrapper component testing with testing-library", () => {

    const component = render(<Container children={undefined}  />);

    it("renders without crashing", () => {
        expect(component).toBeTruthy();
    });
});
