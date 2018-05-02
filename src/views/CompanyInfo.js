import React from 'react';
import styles from './CompanyInfo.css';
import {supplierActions, supplierModalActions} from './SupplierRedux';
import {immutableRenderDecorator} from 'react-immutable-render-mixin';
import {Breadcrumb} from 'antd';
import CssModules from 'react-css-modules';
import {Redirect, Route, Switch} from 'react-router-dom';
import CompanyInfoContent from '../components/CompanyInfo/CompanyInfoContent'

@immutableRenderDecorator
@CssModules(styles)
/*@connect(state => {
    return {
        list: state.get('supplier').get('supplierList').toObject(),
        modal: state.get('supplier').get('supplierModal').toObject()
    };
}, dispatch => ({
    supplierActions: bindActionCreators(supplierActions, dispatch),
    supplierModalActions: bindActionCreators(supplierModalActions, dispatch)
}))*/
export default class Frame extends React.Component {
    render() {
        return (
            <div>
                <div className="Breadcrumb-Box">
                    <Breadcrumb>
                        <Breadcrumb.Item>账户管理</Breadcrumb.Item>
                        <Breadcrumb.Item>个人资料</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <CompanyInfoContent/>
            </div>
        );
    }
}