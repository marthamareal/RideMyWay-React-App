
import React from 'react';
import configureMockStore from 'redux-mock-store';
import Enzyme, { mount,shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from "../../components/base/Header";

Enzyme.configure({ adapter: new Adapter() });

describe('Header Tests', () => {
  let store;

  beforeEach(() => {
    const mockStore = configureMockStore();
    store = mockStore({ register_user: jest.fn(), rides:jest.fn()});
  });

    it('should render without crashing', function () {
        shallow(<Header store={store}/>)
    });


});