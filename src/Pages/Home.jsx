import React from 'react';
import { UsernameContext } from "../App";


function Home(props) {
    const { username } = React.useContext(UsernameContext);
    return (
        <div>
            {username &&
            <div>You're connected as {username}</div>}
            {!username &&
            <div>You're offline, make sure to login from the navbar or menu</div>}
        </div>
    );
}

export default Home;