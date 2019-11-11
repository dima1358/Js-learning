import React from 'react'
import {connect} from 'react-redux'
import Users from './Users'
import {follow, getUsers, setFollowingProgress, unfollow} from '../../redux/usersReducer'
import Preloader from '../common/Preloader/Preloader'
import {
    getCurrentPage,
    getFollowingProgressStatus,
    getIsFetching,
    getPageSize,
    getTotalCount,
    getUsersData
} from "../../redux/usersSelectors";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.currentPage)
    }

    onPageChanged = (p) => {
        this.props.getUsers(this.props.pageSize, p)
    }

    followUser = (userId) => {
        this.props.follow(userId)
    }

    unfollowUser = (userId) => {
        this.props.unfollow(userId)
    }

    render() {
        return <>
            {
                this.props.isFetching ? <Preloader/> : null
            }
            <Users totalCount={this.props.totalCount}
                   pageSize={this.props.pageSize}
                   usersData={this.props.usersData}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   followUser={this.followUser}
                   unfollowUser={this.unfollowUser}
                   followingProgressStatus={this.props.followingProgressStatus}/>
        </>
    }
}

// let MapStateToProps = (state) => {
//     return {
//         usersData: state.usersPage.usersData,
//         totalCount: state.usersPage.totalCount,
//         currentPage: state.usersPage.currentPage,
//         pageSize: state.usersPage.pageSize,
//         isFetching: state.usersPage.isFetching,
//         followingProgressStatus: state.usersPage.followingProgressStatus
//     }
// }

let MapStateToProps = (state) => {
    return {
        usersData: getUsersData(state),
        totalCount: getTotalCount(state),
        currentPage: getCurrentPage(state),
        pageSize: getPageSize(state),
        isFetching: getIsFetching(state),
        followingProgressStatus: getFollowingProgressStatus(state)
    }
}

export default connect(MapStateToProps, {follow, unfollow, setFollowingProgress, getUsers})(UsersContainer)