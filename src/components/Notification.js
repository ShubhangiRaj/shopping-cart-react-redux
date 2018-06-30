import React, {Component} from 'react';

class Notification extends Component{
    render(){
        return(
            <div className="notifcation">{this.props.notification ? this.props.notification.msg : '' }</div>
        )
    }
}

export default Notification;