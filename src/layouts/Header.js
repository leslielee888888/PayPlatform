import React from 'react';
import {Layout, Icon} from 'antd';
import styles from './Header.css';
import CssModules from 'react-css-modules';
const Header = Layout.Header;

const header = (props) => {
    return (
        <Header styleName="Header-Box" style={{background: '#fff', padding: 0}}>
            <Icon
                className={styles.trigger}
                type={props.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={props.toggle}
            />
        </Header>
    )
}
export default CssModules(styles)(header);
