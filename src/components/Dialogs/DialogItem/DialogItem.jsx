import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";
import classes from "../../Navbar/Navbar.module.css";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path} id={props.id} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    );
};

export default DialogItem;