import * as Action from "../../Utils/actions";
import {transfer} from "../../Utils/formUtil"
import {Map} from "immutable";

const initialState = Map({
    visible: false
});

export function showModal() {
    return {
        type: Action.SUPPLIER_MODAL_ADD
    };
}

export function hideModal() {
    return {
        type: Action.SUPPLIER_MODAL_HIDE
    };
}

export function showEditModal(bean = {}) {
    let obj = Object.assign({}, bean);
    obj.state = !bean.state;
    obj.pcd = [
        bean.province ? bean.province : "",
        bean.city ? bean.city : "",
        bean.district ? bean.district : ""
    ];
    obj.repassword = bean.password;
    return {
        type: Action.SUPPLIER_MODAL_EDIT,
        payload: {
            bean: obj
        }
    };
}

export function updateSupplier(data) {
    return {
        type: Action.SUPPLIER_UPDATE,
        payload: {
            data
        }
    };
}

export function addSupplier(data) {
    return {
        type: Action.SUPPLIER_ADD,
        payload: {
            data
        }
    };
}

export default function modal(state = initialState, action) {
    switch (action.type) {
        case Action.SUPPLIER_MODAL_ADD: {
            return state.merge({
                visible: true,
                action: 'ADD',
                bean: null
            });
        }
        case Action.SUPPLIER_MODAL_HIDE: {
            return state.merge({
                visible: false
            });
        }
        case Action.SUPPLIER_MODAL_EDIT: {
            return state.merge({
                visible: true,
                action: 'EDIT',
                bean: transfer(action.payload.bean)
            });
        }
        case Action.SUPPLIER_UPDATE: {
            return state.merge({
                visible: false
            });
        }
        case Action.SUPPLIER_ADD: {
            return state.merge({
                bean: transfer(action.payload.data),
                visible: true
            });
        }
        default:
            return state;
    }
}
