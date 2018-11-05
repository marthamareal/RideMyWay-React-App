import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import Enzyme, {mount, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ShowRide, {RideAction} from "../../components/rides/ShowRide";
import store from "../../store";

Enzyme.configure({adapter: new Adapter()});

describe("ShowRide Tests", () => {
    beforeEach(() => {
    });

    it("should render without crashing", function () {

        const wrapper = mount(
            <Router>
                <ShowRide store={store}/>
            </Router>);

        wrapper.find("#close").simulate("click");
        wrapper.find("#request").simulate("click");

    });


    it("should test ride actions", function () {
        const wrapper1 = shallow(<RideAction
            isOwner={true} onRequest={jest.fn()}
            onEdit={jest.fn()} ride={jest.fn()}
            onDelete={jest.fn()}
        />);
        wrapper1.find('#edit').simulate('click');

    });


});
