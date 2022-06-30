import {render} from '@testing-library/react'

import { Main } from "./index";

describe("Wrapper component testing with testing-library", () => {

    const component = render(<Main />);

    it("renders without crashing", () => {
        expect(component).toBeTruthy();
    });
});
