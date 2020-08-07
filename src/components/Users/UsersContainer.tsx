import React from 'react'
import {useSelector} from 'react-redux'
import Preloader from '../common/Preloader/Preloader'
import {getIsFetching} from '../../redux/users-selectors'
import {Users} from './Users'

type UsersPagePropsType = {
    pageTitle: string
}

export const UsersPage: React.FC<UsersPagePropsType> = (props) => {
    const isFetching = useSelector(getIsFetching)
    return <>
        <h2>{props.pageTitle}</h2>
        {isFetching ? <Preloader/> : null}
        <Users />
    </>
}
