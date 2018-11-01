
import React from 'react';
import Enzyme, { mount,shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ContactUs from "../../components/base/ContactUs";

Enzyme.configure({ adapter: new Adapter() });

describe('ContactUs Tests', () => {


    it('should render without crashing', function () {
        shallow(<ContactUs />)
    });


});