
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
        shallow(<Home store={store}/>)
    });


});