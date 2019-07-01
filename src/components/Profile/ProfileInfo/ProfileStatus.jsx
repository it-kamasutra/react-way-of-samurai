import React from 'react';
import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        title: 'Yo'
    }

    activateEditMode = () => {
        debugger;
        console.log("this:", this);
        this.setState( {
            editMode: true
        } );
    }
    deactivateEditMode() {
        this.setState( {
            editMode: false
        } );
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={ this.activateEditMode }>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input  autoFocus={true} onBlur={ this.deactivateEditMode.bind(this) } value={this.props.status}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;