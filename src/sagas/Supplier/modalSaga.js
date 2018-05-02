import * as Actions from "../../Utils/actions"
import * as URL from "../../Utils/url"
import {put, call} from 'redux-saga/effects';
import loadDecorator from '../../Utils/loadingUtil';

function *Update(params){
    return yield fetch(URL.SUPPLIER_UPDATE, {
        method: 'post',
        body: `bean=${JSON.stringify(params.data)}`,
        headers: {
            "Content-type": "application/x-www-form-urlencoded"
        }
    })
        .then((data) => (data.json()));
}
function *Add(params){
    return yield fetch(URL.SUPPLIER_ADD, {
        method: 'post',
        body: `bean=${JSON.stringify(params.data)}`,
        headers: {
            "Content-type": "application/x-www-form-urlencoded"
        }
    })
        .then((data) => (data.json()));
}
export function* updateSupplier(action) {
    console.log("updateSupplier");
    yield call(loadDecorator("正在上传")(Update),action.payload);
    try {
        yield put({type: Actions.SUPPLIER_MODAL_HIDE});
        yield put({type: Actions.SUPPLIER_LOAD});
    }
    catch (error) {
        yield put({type: Actions.SUPPLIER_LOAD_ERROR});
    }
}
export function* addSupplier(action) {
    yield call(loadDecorator("正在添加")(Add),action.payload);
    try {
        yield put({type: Actions.SUPPLIER_MODAL_HIDE});
        yield put({type: Actions.SUPPLIER_LOAD});
    }
    catch (error) {
        yield put({type: Actions.SUPPLIER_LOAD_ERROR});
    }
}
