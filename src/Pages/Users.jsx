import React from 'react';
import { UsernameContext } from "../App";

function Users(props) {
    const { username } = React.useContext(UsernameContext);
    return (
        <div>
            {username &&
            <div>Hello, I'm {username} and I'm using this app!</div>}
            {!username &&
            <div>Hello, I'm an anonymous user using this app!</div>}
        </div>
    );
}

export default Users;