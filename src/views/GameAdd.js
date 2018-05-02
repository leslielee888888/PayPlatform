import React from 'react';
import {supplierActions, supplierModalActions} from './SupplierRedux';
import {immutableRenderDecorator} from 'react-immutable-render-mixin';
import {Breadcrumb} from 'antd';
import {Redirect, Route, Switch} from 'react-router-dom';
import GameAddContent from '../components/GameAdd/GameAddContent'

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
                        <Breadcrumb.Item>应用管理</Breadcrumb.Item>
                        <Breadcrumb.Item>创建应用</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <GameAddContent/>
            </div>
        );
    }
}