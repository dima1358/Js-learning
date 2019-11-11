import React from 'react'
import s from './Profile.module.css'
import Preloader from "../common/Preloader/Preloader";
import User from "./User/User";
import Posts from "./Posts/Posts";

class Profile extends React.Component {
    render() {
        if (!this.props.userData) {
            return <Preloader/>
        }
        return (
			<div className={s.profile__wrap}>
				<div className={s.banner}>
					<img src="https://artwalls.com.ua/image/catalog/priroda/artwalls-00186.jpg" alt="image"/>
				</div>
				<User {...this.props}/>
				<Posts postsDataBase={this.props.postsDataBase}
					   newPostsText={this.props.newPostsText}
					   onAddPost={this.props.onAddPost}/>
			</div>
		)
    }
}

export default Profile