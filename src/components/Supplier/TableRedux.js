import * as Action from "../../Utils/actions";
import {Map, fromJS} from "immutable";

const initialState = fromJS({
    list: [],
    loading: true,
    error: false,
    query: "",
    bean: null,
    data: null,
    page: 0,
    state: null
});

export function loadDate(page = 0, query = '', state = null) {
    return {
        type: Action.SUPPLIER_LOAD,
        payload: {
            page: page,
            query: query,
            state: state
        }
    };
}

export function deleteSupplier(ID) {
    return {
        type: Action.SUPPLIER_DELETE,
        payload: {
            ID: ID
        }
    };
}

export function changeQuery(e) {
    return {
        type: Action.SUPPLIER_QUERY,
        payload:
            {
                query: e.target.value.trim()
            }
    }
}


export function quickEdit(index, bean) {
    return {
        type: Action.SUPPLIER_QUICK_EDIT,
        payload:
            {
                index,
                bean
            }
    }
}

export function quickEditSubmit(index, bean) {
    bean.state = bean.state === 0;
    return {
        type: Action.SUPPLIER_QUICK_EDIT_SUBMIT,
        payload:
            {
                index,
                bean,
                data: bean
            }
    }
}

export function quickEditCancel(index, bean) {
    return {
        type: Action.SUPPLIER_QUICK_EDIT_CANCEL,
        payload:
            {
                index,
                bean
            }
    }
}

export function reset(cb) {
    cb ? cb.call() : null;
    return loadDate();
}

export default function datas(state = initialState, action) {
    switch (action.type) {
        case Action.SUPPLIER_QUERY: {
            return Map({
                ...state,
                ...action.payload,
                loading: true
            });
        }

        case Action.SUPPLIER_LOAD: {
            return state.merge(action.payload).set('loading', true);
        }

        case Action.SUPPLIER_LOAD_SUCCESS: {
            return state.merge({
                ...action.data,
                loading: false,
                error: false
            });
        }

        case Action.SUPPLIER_LOAD_ERROR: {
            return state.set('error', true);
        }

        case Action.CHANGE_QUERY: {
            return state.merge({
                query: action.payload.query,
                loading: true,
                error: false
            });
        }

        case Action.SUPPLIER_DELETE: {
            return state.set('loading', true);
        }

        case Action.SUPPLIER_QUICK_EDIT: {
            state = state.set('list', state.get('list').map((val, index) => {
                if (index == action.payload.index) {
                    return val.set('status', null).set('editable', true);
                } else if (val.get('editable')) {
                    return val.set('status', 'cancel').set('editable', false);
                } else {
                    return val.set('editable', false);
                }
            }));
            return state;
        }

        case Action.SUPPLIER_QUICK_EDIT_SUBMIT: {
            state = state
                .set('list', state.get('list').set(action.payload.index, Map(action.payload.bean).set('status', 'save').set('editable', false)))
                .set('loading', true);
            return state;
        }

        case Action.SUPPLIER_QUICK_EDIT_CANCEL: {
            state = state.set('list', state.get('list').set(action.payload.index, Map(action.payload.bean).set('status', 'cancel').set('editable', false)));
            return state;
        }
        default:
            return state;
    }
}
