import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import RidesList from "../../components/rides/RidesList";
import store from "../../store";
Enzyme.configure({ adapter: new Adapter() });

describe("RidesList Tests", () => {
  beforeEach(() => {});

  it("should render without crashing", function() {
    mount(
      <Router>
        <RidesList store={store} />
      </Router>
    );
  });
});
