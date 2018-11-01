import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import RideRequests from "../../components/rides/RideRequests";
import store from "../../store";

Enzyme.configure({ adapter: new Adapter() });

describe("Profile Tests", () => {
  // let store;

  beforeEach(() => {});

  it("should render without crashing", function() {
    mount(<RideRequests store={store} />);
  });
});
