import {AppStateType} from './redux-store'

export const selectIsAuth = (state: AppStateType) => {
    return state.auth.isAuth
}

export const selectCurrentUserLogin = (state: AppStateType) => {
    return state.auth.login
}


