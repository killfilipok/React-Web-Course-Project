import { login, logout } from '../../actions/auth'

const uid = "some uid"

test('should return login action obj', () => {
    expect(login(uid))
        .toEqual({ type: 'LOGIN', uid })
})

test('should return logout action obj', () => {
    expect(logout())
        .toEqual({ type: 'LOGOUT' })
})