
import React from 'react';
import configureMockStore from 'redux-mock-store';
import Enzyme, { mount,shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Signup from "../../components/auth/Signup";

Enzyme.configure({ adapter: new Adapter() });

describe('Signup Tests', () => {
  let store;

  beforeEach(() => {
    const mockStore = configureMockStore();
    store = mockStore({ register_user: jest.fn(), rides:jest.fn()});
  });

    it('should render without crashing', function () {
        const wrapper = mount(<Signup store={store} />);
        wrapper.find('#signup_form').simulate('submit');
        wrapper.find('#fname').simulate('change');
        wrapper.find('#lname').simulate('change');
        wrapper.find('#email').simulate('change');
        wrapper.find('#city').simulate('change');
        wrapper.find('#phone').simulate('change');
        wrapper.find('#password').simulate('change');
    });


});