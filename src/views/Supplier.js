import React from 'react';
import Table from '../components/Supplier/Table';
import Modal from '../components/Supplier/Modal';
import style from './Supplier.css';
import {supplierActions, supplierModalActions} from './SupplierRedux';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {immutableRenderDecorator} from 'react-immutable-render-mixin';

@immutableRenderDecorator
@connect(state => {
    return {
        list: state.get('supplier').get('supplierList').toObject(),
        modal: state.get('supplier').get('supplierModal').toObject()
    };
}, dispatch => ({
    supplierActions: bindActionCreators(supplierActions, dispatch),
    supplierModalActions: bindActionCreators(supplierModalActions, dispatch)
}))
export default class Frame extends React.Component {
    render() {
        return (
            <div className={style.homePage}>
                {/*this.props.modal.visible && */<Modal {...this.props.modal} {...this.props.supplierModalActions}/>}
                <Table {...this.props.list} {...this.props.supplierActions} {...this.props.supplierModalActions}/>
            </div>
        );
    }
}