import {message} from 'antd';
import {call} from 'redux-saga/effects';

export default function loadDecorator(content = '正在加载', duration = 3, onClose) {
    return function (fn) {
        return function* (action) {
            const hide = message.loading(content, duration, onClose);
            try {
                const rs = yield call(fn, action);
                message.success("操作成功");
                return rs;
            } catch (e) {
                message.error("操作失败");
            } finally {
                hide()
                //setTimeout(hide, 1000);
            }
        }
    }
};