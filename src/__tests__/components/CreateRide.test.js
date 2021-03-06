import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CreateRide from "../../components/rides/CreateRide";
import { Provider } from "react-redux";
import store from "../../store";

Enzyme.configure({ adapter: new Adapter() });

describe("CreateRide Tests", () => {
  beforeEach(() => {});

  it("should render without crashing", function() {
    const wrapper = mount(
      <Provider store={store}>
        <CreateRide />
      </Provider>
    );
    wrapper.find("#createRide").simulate("click");
    wrapper.find("#date").simulate("change");
    wrapper.find("#time").simulate("change");
    wrapper.find("#source").simulate("change");
    wrapper.find("#destination").simulate("change");
    wrapper.find("#price").simulate("change");
  });
});
