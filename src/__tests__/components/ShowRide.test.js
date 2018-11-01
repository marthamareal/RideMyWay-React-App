
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ShowRide from "../../components/rides/ShowRide";
import store from "../../store";

Enzyme.configure({ adapter: new Adapter() });

describe('ShowRide Tests', () => {

  beforeEach(() => {
  });

    it('should render without crashing', function () {
        const wrapper = mount(<Router><ShowRide store={store}/></Router>);
        wrapper.find("#close").simulate('click');
        wrapper.find("#edit").simulate('click');
        wrapper.find("#delete").simulate('click');
        wrapper.find("#request").simulate('click');
    });


});