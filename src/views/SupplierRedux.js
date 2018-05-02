import { combineReducers } from 'redux-immutable';

// 引入 reducer 及 actionCreator
import supplierList from '../components/Supplier/TableRedux';
import supplierModal from '../components/Supplier/ModalRedux';

export default combineReducers({
    supplierList,supplierModal
});
export * as supplierActions from '../components/Supplier/TableRedux';
export * as supplierModalActions from '../components/Supplier/ModalRedux';
