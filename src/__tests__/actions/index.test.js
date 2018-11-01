import configureMockStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import {axiosInstance} from '../../globals';
import {loginUser, registerUser} from "../../actions/Signup";
import {
    approveRequest,
    createRide,
    deleteRide,
    getRequests,
    getRide,
    getRides,
    requestRide,
    updateRide
} from "../../actions/Rides";
import {REGISTER_ERRORS, REGISTER_USER, RIDES_LIST} from "../../actions/Types";

describe('test actions', () => {
    let store;
    let httpMock;
    let loginUrl, registerUrl;

    const flushAllPromises = () => new Promise(resolve => setImmediate(resolve));

    beforeEach(() => {
        httpMock = new MockAdapter(axiosInstance);
        const mockStore = configureMockStore();
        store = mockStore({register_user:jest.fn(), rides: jest.fn()});
        loginUrl = '/auth/login';
        registerUrl = '/auth/signup';
    });

    it('should register user', async () => {
        const responseData = {
            "id": 1,
            "first name": "test",
            "last name": "martha",
            "email": "test@gmail.com",
            "city": "kampala",
            "phone_no": "+256 7556663367",
            "password": "passworder"
        };

        httpMock.onPost(registerUrl).reply(201, responseData);
        registerUser()(store.dispatch);
        await flushAllPromises();

    });

    it('should login user', async () => {
        const data = {
            "email": "test@gmail.com",
            "password": "passworder"
        };

        httpMock.onPost(loginUrl).reply(200, data);

        loginUser()(store.dispatch);
        await flushAllPromises();
    });


    // Rides actions

    it('should get rides', async () => {

        httpMock.onGet('/rides').reply(200,{'Ride offers':[]});
        getRides()(store.dispatch);
        await flushAllPromises();
        expect(store.getActions()).toEqual([{ type: RIDES_LIST, payload: [] }]);


    });
    it('should create ride', async () => {

        httpMock.onPost('/rides/create').reply(201);

        createRide()(store.dispatch);
        await flushAllPromises();

        httpMock.onPost('/rides/create').reply(400);

        createRide()(store.dispatch);
        await flushAllPromises();
    });

    it('should get ride', async () => {

        httpMock.onGet('/rides/1').reply(200);

        getRide()(store.dispatch);
        await flushAllPromises();
    });
    it('should delete ride', async () => {

        httpMock.onDelete('/rides/delete/1').reply(200);

        deleteRide()(store.dispatch);
        await flushAllPromises();
    });
    it('should update ride', async () => {

        httpMock.onPut('/rides/update/1').reply(200);

        updateRide()(store.dispatch);
        await flushAllPromises();
    });
    it('should request ride', async () => {

        httpMock.onPost('/rides/requests/create/1').reply(200);

        requestRide()(store.dispatch);
        await flushAllPromises();
    });
    it('should get requests', async () => {

        httpMock.onGet('/rides/requests/1').reply(200);

        getRequests()(store.dispatch);
        await flushAllPromises();
    });
    it('should approve request', async () => {

        httpMock.onPost('/rides/requests/approve/1').reply(201);

        approveRequest({postData:{}})(store.dispatch);
        await flushAllPromises();
    });

});
