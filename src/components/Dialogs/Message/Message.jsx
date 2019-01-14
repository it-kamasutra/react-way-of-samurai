import React from 'react';
import s from './../Dialogs.module.css';

const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}

export default Message;