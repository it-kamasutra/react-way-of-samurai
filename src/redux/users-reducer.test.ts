import usersReducer, {actions, InitialState} from './users-reducer'

let state: InitialState;

beforeEach(() => {
    state = {
        users: [
            {
                id: 0, name: 'Dimych 0', followed: false,
                photos: {small: null, large: null}, status: 'status 0'
            },
            {
                id: 1, name: 'Dimych 1', followed: false,
                photos: {small: null, large: null}, status: 'status 1'
            },
            {
                id: 2, name: 'Dimych 2', followed: true,
                photos: {small: null, large: null}, status: 'status 2'
            },
            {
                id: 3, name: 'Dimych 3', followed: true,
                photos: {small: null, large: null}, status: 'status 3'
            },
        ],
        pageSize: 10,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: false,
        followingInProgress: []
    }
})

test('follow success', () => {
    const newState = usersReducer(state, actions.followSuccess(1))

    expect(newState.users[0].followed).toBeFalsy();
    expect(newState.users[1].followed).toBeTruthy();
})

test('unfollow success', () => {
    const newState = usersReducer(state, actions.unfollowSuccess(3))

    expect(newState.users[2].followed).toBeTruthy();
    expect(newState.users[3].followed).toBeFalsy();
})
