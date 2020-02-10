import React from 'react';
import { UsernameContext } from "../App";
import { Button } from 'react-bootstrap';

function Login(props) {
    const [name, setName] = React.useState("");
    const { username, updateUsername } = React.useContext(UsernameContext);

    function onUsernameChanged(event) {
        setName(event.target.value);
    }

    function onDisconnectClicked(event) {
        updateUsername("");
    }

    function onFormSubmit(event) {
        event.preventDefault();
        updateUsername(name);
        
    }

    return (
        <div>
            {!username &&
            <form onSubmit={onFormSubmit}>
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={onUsernameChanged} />
                <Button variant="info" type="submit">Enter</Button>
            </form>}
            {username &&
            <div>
                <Button onClick={onDisconnectClicked}>Disconnect</Button>
            </div>}
        </div>
    );
}

export default Login;