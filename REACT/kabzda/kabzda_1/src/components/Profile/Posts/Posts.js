import React from 'react'
import Post from './Post/Post.js'
import s from './Posts.module.css'
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength5 = maxLength(5)

const PostForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<Field validate={[required, maxLength5]} placeholder="Post text" component={Textarea} name='postText'/>
			<button className='btn'>Send</button>
		</form>
	)
}

const ReduxPostForm = reduxForm({form: 'PostForm'})(PostForm)

// shouldComponentUpdate(nextProps, nextState, nextContext) {
// 	return  nextProps !== this.props || nextState !== this.state
// }

const Posts = React.memo(props => {
	console.log("RENDER!")
	return (
		<div className={s.posts__wrap}>
			<h3 className={s.posts__title}>My posts</h3>
			<div className={s.posts__chat}>
				<div className={s.form}>
					<ReduxPostForm onSubmit={props.onAddPost}/>
				</div>
				<ul className={s.posts__chat_list}>
					{props.postsDataBase.map(post => <Post postObj={post}/>)}
				</ul>
			</div>
		</div>
	)
})

export default Posts