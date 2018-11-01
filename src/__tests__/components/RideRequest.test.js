
import React from 'react';
import configureMockStore from 'redux-mock-store';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RideRequests from "../../components/rides/RideRequests";
import store from "../../store";


Enzyme.configure({ adapter: new Adapter() });

describe('Profile Tests', () => {
  // let store;

  beforeEach(() => {
    const mockStore = configureMockStore();
    // store = mockStore({ register_user: jest.fn(), rides:jest.fn()});
  });

    it('should render without crashing', function () {
        const wrapper = mount(<RideRequests store={store} />);

        // wrapper.find("#approval").simulate('click')
    });


});