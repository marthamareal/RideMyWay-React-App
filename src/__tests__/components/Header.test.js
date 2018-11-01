import React from 'react';
import configureMockStore from 'redux-mock-store';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from "../../components/base/Header";
import {BrowserRouter as Router} from 'react-router-dom'
import sinon from 'sinon'

Enzyme.configure({adapter: new Adapter()});

describe('Header Tests', () => {
    let store;
    let spy = sinon.spy(window.localStorage, "setItem");
    function storageMock() {
    let storage = {};

    return {
      setItem: function(key, value) {
        storage[key] = value || '';
      },
      getItem: function(key) {
        return key in storage ? storage[key] : null;
      },
      removeItem: function(key) {
        delete storage[key];
      },
      get length() {
        return Object.keys(storage).length;
      },
      key: function(i) {
        var keys = Object.keys(storage);
        return keys[i] || null;
      }
    };
  }


    beforeEach(() => {
        const mockStore = configureMockStore();
        store = mockStore({register_user: jest.fn(), rides: jest.fn()});
    });

    it('should render without crashing', function () {
        const wrapper = mount(<Router><Header store={store}/></Router>);
        localStorage.setItem('token', 'tokenValue');
        // wrapper.find("#logout").simulate('click')
    });


});