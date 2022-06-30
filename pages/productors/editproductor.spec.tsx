import EditProductorss from "./[id]";
import configureStore from "redux-mock-store";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "../_app";

describe("Wrapper component testing with testing-library", () => {
  const component = render(<EditProductorss />);

  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store, wrapper;

  it("renders without crashing", () => {
    expect(component).toBeTruthy();
  });

  it('Shows "Hello world!"', () => {
    store = mockStore(initialState);
    const { getByText } = render(
      <Provider store={store}>
        <App pageProps={undefined} Component={undefined} router={undefined} />
      </Provider>
    );
    expect(getByText("Hello Worldd!")).not.toBeNull();
  });
});
