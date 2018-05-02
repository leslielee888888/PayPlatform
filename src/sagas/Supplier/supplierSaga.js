import * as Actions from "../../Utils/actions"
import * as URL from "../../Utils/url";
import {put, call} from 'redux-saga/effects';
import loadDecorator from "../../Utils/loadingUtil"
function *getList(params) {
    return yield fetch(URL.SUPPLIER_LIST, {
        method: 'post',
        body: `limited=0&keyword=${params&&params.query?params.query:''}&pageindex=${params&&params.page?params.page:0}&state=${params&&params.state?params.state:''}`,
        headers: {
            "Content-type": "application/x-www-form-urlencoded"
        }
    })
        .then((data) => (data.json()));
}
function *Delete(params){
    return yield fetch(URL.SUPPLIER_DELETE, {
        method: 'post',
        body: `action=EDIT&vSTATE=-1&vID=${params.ID}`,
        headers: {
            "Content-type": "application/x-www-form-urlencoded"
        }
    })
        .then((data) => (data.json()));
}

export function* getSupplier(action) {
    const data = yield call(getList,action.payload);
    try {
        yield put({type: Actions.SUPPLIER_LOAD_SUCCESS, data});
    }
    catch (error) {
        yield put({type: Actions.SUPPLIER_LOAD_ERROR});
    }
}

export function* deleteSupplier(action) {
    const data = yield call(loadDecorator('正在删除')(Delete),action.payload);
    try {
        yield put({type: Actions.SUPPLIER_LOAD});
    }
    catch (error) {
        yield put({type: Actions.SUPPLIER_LOAD_ERROR});
    }
}