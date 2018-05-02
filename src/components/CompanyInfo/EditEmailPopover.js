import React from 'react';
import styles from './CompanyInfoContent.css';
import {immutableRenderDecorator} from 'react-immutable-render-mixin';
import {Button, Form, Input, Row, Col, Icon} from 'antd';
import CssModules from 'react-css-modules';
import {Redirect, Route, Switch} from 'react-router-dom';

@Form.create()
@immutableRenderDecorator
@CssModules(styles)
export default class EditEmailPopover extends React.Component {
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
            <Form style={{width: 210}}>
                <Form.Item style={{marginBottom: 0, textAlign: "center"}} hasFeedback>
                    {getFieldDecorator('email', {
                        rules: [{
                            type: 'email', message: '请输入正确的邮件格式（****@**.***）',
                        }, {
                            required: true, message: '请输入邮箱地址',
                        }],
                    })(
                        <Input prefix={<Icon type="mail" style={{fontSize: 13}}/>} placeholder="请输入联系邮箱"/>
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