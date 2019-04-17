import React, { Component } from 'react';

import classes from './Item.css';

class Item extends Component {

    setHds = (status) => {
        switch (status) {
            case 'OK':
                return (
                    <div></div>
                );
             case 'SMART':
                return (
                    <div></div>
                );
            case 'FAULT':
                return (
                    <div></div>
                );
            case 'NOT':
                return (
                    <div></div>
                );
        }
    }

    render () {
        return (
            <div>
                <div className={classes.item}>
                    <div className={classes.item__title}>
                        <h3>Pederneiras</h3>
                        <p><span>Migrada: </span>Sim</p>
                    </div>
                    <div className={classes.item__content}>
                        <ul className={classes.item__content_list}>
                            <li>1
                                <ul className={classes.item__content_hd}>
                                    <li><div></div></li>
                                </ul>
                            </li>
                            <li>2
                                <ul className={classes.item__content_hd}>
                                    <li><div></div></li>
                                </ul>
                            </li>
                            <li>3
                                <ul className={classes.item__content_hd}>
                                    <li><div></div></li>
                                </ul>
                            </li>
                            <li>4
                                <ul className={classes.item__content_hd}>
                                    <li><div></div></li>
                                </ul>
                            </li>
                            <li>5
                                <ul className={classes.item__content_hd}>
                                    <li><div></div></li>
                                </ul>
                            </li>
                            <li>6
                                <ul className={classes.item__content_hd}>
                                    <li><div></div></li>
                                </ul>
                            </li>
                            <li>7
                                <ul className={classes.item__content_hd}>
                                    <li><div></div></li>
                                </ul>
                            </li>
                            <li>8
                                <ul className={classes.item__content_hd}>
                                    <li><div></div></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    </div>
            </div>
        );
    }
};

export default Item;