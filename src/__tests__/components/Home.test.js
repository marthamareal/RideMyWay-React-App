
import React from 'react';
import configureMockStore from 'redux-mock-store';
import Enzyme, { mount,shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from "../../components/Home";

Enzyme.configure({ adapter: new Adapter() });

describe('Home Tests', () => {
  let store;

  beforeEach(() => {
    const mockStore = configureMockStore();
    store = mockStore({ register_user: jest.fn()});
  });

    it('should render without crashing', function () {
        const wrapper = mount(<Home store={store}/>);
        wrapper.find('#login_form').simulate('submit');
        wrapper.find('#email').simulate('change');
        wrapper.find('#password').simulate('change');
    });


});