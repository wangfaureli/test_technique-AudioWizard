import React from 'react';
import NavBar from './NavBar';
import SideBar from './SideBar';

function Layout(props) {
    return (
        <div>
            <NavBar />
            <SideBar>
                {props.children}
            </SideBar>
        </div>
    );
}

export default Layout;