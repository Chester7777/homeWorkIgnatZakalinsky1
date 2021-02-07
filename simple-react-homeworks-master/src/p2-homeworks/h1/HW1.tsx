import React from "react";
import Message from "./Message";
import s from "./Message.module.css";

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function HW1() {
    const MesJS: MessageType = {
        avatar:
            "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",
        name: "Some Name",
        message: "some text",
        time: "22:00"
    }
    return (
        <div>
            <hr/>


            {/*should work (должно работать)*/}

            <Message avatar={MesJS.avatar}
                     name={"Artem"}
                     message={"npm start нажимал?"}
                     time={"20:00"}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    );
}


export default HW1;
