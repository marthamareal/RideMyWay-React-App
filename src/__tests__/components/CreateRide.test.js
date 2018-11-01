
import React from 'react';
import configureMockStore from 'redux-mock-store';
import Enzyme, { mount,shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CreateRide from "../../components/rides/CreateRide";
import {Provider} from "react-redux";
import store from "../../store";

Enzyme.configure({ adapter: new Adapter() });

describe('CreateRide Tests', () => {
  // let store, props;

  beforeEach(() => {
    const mockStore = configureMockStore();
    // store = mockStore({ register_user: jest.fn(), rides:jest.fn()});

  });

    it('should render without crashing', function () {
       const wrapper = mount(<Provider store={store}><CreateRide/></Provider>);
        wrapper.find("#create-ride").simulate('click');
        wrapper.find("#date").simulate('change');
        const onEditForm = mount(<Provider store={store}><CreateRide /></Provider>);
        onEditForm.find("#create-ride").simulate('click');
    });


});