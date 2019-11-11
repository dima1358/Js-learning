import React from 'react'
import s from "../User.module.css";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        statusText: this.props.statusText
    }
    onChangeStatus = (e) => {
        this.setState({
            statusText: e.target.value
        })
    }
    activateEdit = () => {
        this.setState({editMode: true})
    }
    deactivateEdit = () => {
        this.setState({editMode: false})
        this.props.updateStatus(this.state.statusText)
    }
    componentDidUpdate(prevProps) {
        if (prevProps.statusText !== this.props.statusText) {
            this.setState({
                statusText: this.props.statusText
            })
        }
    }
    render() {
        return (
            <div className={s.status__wrap}>
                {!this.state.editMode && <p onDoubleClick={this.activateEdit}>{this.state.statusText || '------'}</p>}
                {this.state.editMode && <input autoFocus={true} onChange={this.onChangeStatus} onBlur={this.deactivateEdit} type="text" value={this.state.statusText}/>}
            </div>
        )
    }
}

export default ProfileStatus