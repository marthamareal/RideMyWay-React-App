
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AboutUs from "../../components/base/AboutUs";

Enzyme.configure({ adapter: new Adapter() });

describe('About Tests', () => {

    it('should render without crashing', function () {
        shallow(<AboutUs />)
    });


});