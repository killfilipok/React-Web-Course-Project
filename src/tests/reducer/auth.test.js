import authReducer from '../../reducers/auth'

const uid = 'some uid'

test('should login', () => {
    const action = {
        type: "LOGIN",
        uid
    }
    const state = authReducer({}, action)

    expect(state.uid).toBe(uid)
})

test('should logout', () => {
    const action = {
        type: "LOGOUT"
    }
    const state = authReducer({ uid }, action)

    expect(state).toEqual({})
})