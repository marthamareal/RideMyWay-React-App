import React from "react";
import configureMockStore from "redux-mock-store";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Header from "../../components/base/Header";
import { BrowserRouter as Router } from "react-router-dom";

Enzyme.configure({ adapter: new Adapter() });

describe("Header Tests", () => {
  let store;

  beforeEach(() => {
    const mockStore = configureMockStore();
    store = mockStore({ register_user: jest.fn(), rides: jest.fn() });
  });

  it("should render without crashing", function() {
    mount(
      <Router>
        <Header store={store} />
      </Router>
    );
  });
});
