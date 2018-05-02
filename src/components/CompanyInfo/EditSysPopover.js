import React from 'react';
import styles from './CompanyInfoContent.css';
import {immutableRenderDecorator} from 'react-immutable-render-mixin';
import {Button, Form, Select, Icon} from 'antd';
import CssModules from 'react-css-modules';
import {Redirect, Route, Switch} from 'react-router-dom';

@Form.create()
@immutableRenderDecorator
@CssModules(styles)
export default class EditSysPopover extends React.Component {
    handleSubmit = (e) => {
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.props.onClick(values);
                this.props.form.resetFields();
            }
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <Form style={{width: 130}}>
                <Form.Item style={{marginBottom: 0, textAlign: "center"}} hasFeedback>
                    {getFieldDecorator('sys', {
                        rules: [
                            {required: true, message: '请选择你的日常工作系统'},
                        ],
                        initialValue:this.props.defaultValue
                    })(
                        <Select getPopupContainer={triggerNode => triggerNode.parentNode}  placeholder="选择日常工作系统">
                            <Select.Option value="应用管理">应用管理</Select.Option>
                            <Select.Option value="账户管理">账户管理</Select.Option>
                            <Select.Option value="支付统计报表">支付统计报表</Select.Option>
                        </Select>
                    )}
                </Form.Item>
                <Form.Item style={{marginBottom: 0, textAlign: "center"}}>
                    <Button type="primary" size="small" onClick={this.handleSubmit}>确定</Button>
                    <Button size="small" style={{marginLeft: 8}} onClick={() => {
                        this.props.Cancel();
                        this.props.form.resetFields();
                    }}>取消</Button>
                </Form.Item>
            </Form>
        );
    }
}