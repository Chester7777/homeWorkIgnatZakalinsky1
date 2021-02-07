import React from "react";
import s from "./Message.module.css";

type MessageDataType = {
    avatar: string
    name: string
    message: string
    time: string

}

function Message(props: MessageDataType) {
    return (
        <div className={s.messageAll}>
            <img className={s.img} src={props.avatar}/>
            <div className={s.message}>
                <p className={s.name}>{props.name}</p>
                <p className={s.question}>{props.message}</p>
                <p className={s.time}>{props.time}</p>
                <div className={s.triangular}></div>
            </div>
        </div>
    );
}

export default Message;

// <Message
//     avatar={messageDataType.avatar}
//     name={messageDataType.name}
//     message={messageDataType.message}
//     time={messageDataType.time}
// />