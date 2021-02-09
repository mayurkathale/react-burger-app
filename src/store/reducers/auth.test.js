import reducer from './auth';
import * as actionTypes from '../actions/actionTypes';


describe('Auth reducer', () => {
    it('Should intiate the state', () => {
        expect(reducer(undefined, {}))
        .toEqual(
            {
                token: null,
                userId: null,
                error: null,
                loading: false,
                authRedirectPath: '/'
            });
    });

    it('Should store token on login', () => {
        expect(
            reducer(
                {
                    token: null,
                    userId: null,
                    error: null,
                    loading: false,
                    authRedirectPath: '/'
                },
                {
                    type: actionTypes.AUTH_SUCCESS,
                    idToken: 'somee-token',
                    userId: 'user-id'
                }
            )
        )
        .toEqual(
            {
                token: 'somee-token',
                userId: 'user-id',
                error: null,
                loading: false,
                authRedirectPath: '/'
            }
        );
    });
})