import React from 'react';
import './ueditor.config';
import './ueditor.all.min';
import './zh-cn';
import {immutableRenderDecorator} from 'react-immutable-render-mixin';
import styles from './UEditor.css';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);
let ueEditor;
@immutableRenderDecorator
export default class UEditor extends React.Component {
    static defaultProps = {
        onChange: () => {
        },
        value:undefined
    };

    componentDidMount() {
        //setTimeout( this.initEditor,500);
        this.initEditor();
    }

    componentWillUnmount() {
        UE.delEditor('ueditor');
    }

    initEditor() {
        ueEditor = UE.getEditor('ueditor');
        const self = this;
        ueEditor.ready((ueditor) => {
            if (!ueditor) {
                UE.delEditor('ueditor');
                self.initEditor();
            }
            ueEditor.addListener('contentChange', self.contentChangeHanler);
            this.props.value && ueEditor.setContent(this.props.value);
        })
    }

    contentChangeHanler = () => {
        this.props.onChange(ueEditor.getContent());
    };

    render() {
        let {className} = this.props;
        const ueditorClass = cx({
            className: true,
            ueditor: true
        });
        //console.log(this.props);
        return (
            <div className={ueditorClass}>
                <script id="ueditor" name="content" type="text/plain"></script>
            </div>
        );
    }
}