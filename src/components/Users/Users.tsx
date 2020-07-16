import React, {FC} from 'react'
import Paginator from '../common/Paginator/Paginator'
import User from './User'
import {UserType} from '../../types/types'
import {UsersSearchForm} from './UsersSearchForm'
import {FilterType} from '../../redux/users-reducer'

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    onFilterChanged: (filter: FilterType) => void
    users: Array<UserType>
    followingInProgress: Array<number>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}


let Users: FC<PropsType> = ({
                                currentPage, totalUsersCount, pageSize, onPageChanged, users,
                                ...props
                            }) => {
    return <div>

        <UsersSearchForm onFilterChanged={props.onFilterChanged}/>

        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                   totalItemsCount={totalUsersCount} pageSize={pageSize}/>
        <div>
            {
                users.map(u => <User user={u}
                                     followingInProgress={props.followingInProgress}
                                     key={u.id}
                                     unfollow={props.unfollow}
                                     follow={props.follow}
                    />
                )
            }
        </div>
    </div>
}


export default Users
