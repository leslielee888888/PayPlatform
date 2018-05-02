import {takeEvery,takeLatest} from 'redux-saga/effects';
import * as ACTIONS from '../Utils/actions';
import {deleteSupplier, getSupplier} from './Supplier/supplierSaga';
import {updateSupplier,addSupplier} from './Supplier/modalSaga';

export default function* rootSagas() {
    yield takeLatest(ACTIONS.SUPPLIER_LOAD, getSupplier);
    yield takeEvery(ACTIONS.SUPPLIER_DELETE, deleteSupplier);
    yield takeEvery(ACTIONS.SUPPLIER_UPDATE, updateSupplier);
    yield takeEvery(ACTIONS.SUPPLIER_QUICK_EDIT_SUBMIT, updateSupplier);
    yield takeEvery(ACTIONS.SUPPLIER_ADD, addSupplier);
}