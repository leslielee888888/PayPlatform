import React from 'react';
import {supplierActions, supplierModalActions} from './SupplierRedux';
import {immutableRenderDecorator} from 'react-immutable-render-mixin';
import {Breadcrumb} from 'antd';
import {Redirect, Route, Switch} from 'react-router-dom';
import OrderFixContent from '../components/OrderFix/OrderFixContent'

@immutableRenderDecorator
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
                        <Breadcrumb.Item>订单管理</Breadcrumb.Item>
                        <Breadcrumb.Item>支付跨天挂账</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <OrderFixContent/>
            </div>
        );
    }
}