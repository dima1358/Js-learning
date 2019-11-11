import React from 'react'
import s from "./User.module.css"
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import ProfileStatusWithHook from "./ProfileStatus/ProfileStatusWithHook";

class User extends React.Component {
    render() {
        return (
            <div className={s.user__wrap}>
                <div className={s.user__avatar}>
                    <img src={this.props.userData.photos.small || 'https://www.washingtonpost.com/resizer/kPkFQsQjvSIjfXG-mFXDEpxq6-4=/767x0/smart/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/HB4AT3D3IMI6TMPTWIZ74WAR54.jpg'} alt="avatar"/>
                    <ProfileStatusWithHook statusText={this.props.statusText} updateStatus={this.props.updateStatus}/>
                </div>
                <div className={s.user__info}>
                    <h3 className={s.user__name}>{this.props.userData.fullName || "Default Name"}</h3>
                    <ul className={s.user__info_list}>
                        <li>
                            <span className={s.key}>User's ID</span>:
                            <span className={s.value}>{this.props.userData.userId}</span>
                        </li>
                        <li>
                            <span className={s.key}>About Me</span>:
                            <span className={s.value}>{this.props.userData.aboutMe}</span>
                        </li>
                        <li>
                            <span className={s.key}>Date of Birth</span>:
                            <span className={s.value}>8 November</span>
                        </li>
                        <li>
                            <span className={s.key}>City</span>:
                            <span className={s.value}>Kiev</span>
                        </li>
                        <li>
                            <span className={s.key}>Education</span>:
                            <span className={s.value}>NTU `14</span>
                        </li>
                        <li>
                            <span className={s.key}>Looking for a job</span>:
                            <span className={s.value}>{this.props.userData.lookingForAJob ? 'Yes' : 'No'}</span>
                        </li>
                        <li>
                            <span className={s.key}>Job description</span>:
                            <span className={s.value}>{this.props.userData.lookingForAJobDescription}</span>
                        </li>
                        <li>
                            <span className={s.key}>Web Site</span>:
                            <span className={s.value}>
								<a href="#">{this.props.userData.contacts.website || 'default.com'}</a>
							</span>
                        </li>
                        <li>
                            <span className={s.key}>Facebook</span>:
                            <span className={s.value}>{this.props.userData.contacts.facebook}</span>
                        </li>
                        <li>
                            <span className={s.key}>Twitter</span>:
                            <span className={s.value}>{this.props.userData.contacts.twitter}</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default User
