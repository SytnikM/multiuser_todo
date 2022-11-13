import React from "react";

const User = (props) => {
    return(
        <div>
            <h3>
                {props.name}
            </h3>
            <p>
                {props.accessRights}
            </p>
            <button onClick={props.qwe}>ReNAme</button>
        </div>
    )
}

export default User