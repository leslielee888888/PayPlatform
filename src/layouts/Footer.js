import React from 'react';
import {Layout, Icon} from 'antd';
import styles from './Footer.css';
import CssModules from 'react-css-modules';

const Footer = Layout.Footer;

const footer = (props) => {
    return (
        <Footer styleName="Footer-Box" >
            <strong>Copyright 2016-2017 bbnpay.com, All Rights Reserved. 神豆有限公司</strong>
        </Footer>
    )
}
export default CssModules(styles)(footer);
