import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import classes from './Item.css';

class Item extends Component {

    setHds = (status, index) => {
        switch (status) {
            case 'OK':
                return (
                    <div key={index}>
                        <li>{index}
                            <ul className={classes.OK}>
                                <li><div></div></li>
                            </ul>
                        </li>
                    </div>
                );
             case 'SMART':
                return (
                    <div key={index}>
                        <li>{index}
                            <ul className={classes.SMART}>
                                <li><div></div></li>
                            </ul>
                        </li>
                    </div>
                );
            case 'FAULT':
                return (
                    <div key={index}>
                        <li>{index}
                            <ul className={classes.FAULT}>
                                <li><div></div></li>
                            </ul>
                        </li>
                    </div>
                );
            case 'NOT':
                return (
                    <div key={index}>
                        <li>{index}
                            <ul className={classes.NOT}>
                                <li><div></div></li>
                            </ul>
                        </li>
                    </div>
                );
        }
    }

    render () {
        const newHd = Object.entries(this.props.hd).map((hd, index) => (
            this.setHds(hd[1], index)
        ));
        return (
            <div>
                <div className={classes.item}>
                    <div className={classes.item__title}>
                        <h3><Link to={{
                            pathname: '/visualiza-vt',
                            hash: `#${this.props.id}`
                        }}>{this.props.nomevt} - {this.props.apelido}</Link></h3>
                        <p><span>Migrada: </span>{this.props.migrada}</p>
                    </div>
                    <div className={classes.item__content}>
                        <ul className={classes.item__content_list}>
                            {newHd}
                        </ul>
                    </div>
                    </div>
            </div>
        );
    }
};

export default Item;