import React from 'react';
import styles from './CompanyInfoContent.css';
import {immutableRenderDecorator} from 'react-immutable-render-mixin';
import {Button, Form, Input, Icon} from 'antd';
import CssModules from 'react-css-modules';
import {Redirect, Route, Switch} from 'react-router-dom';

@Form.create()
@immutableRenderDecorator
@CssModules(styles)
export default class EditPasswordPopover extends React.Component {
    state = {
        confirmDirty: false
    };

    handleSubmit = (e) => {
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.props.onClick(values);
                this.props.form.resetFields();
            }
        });
    };
    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({confirmDirty: this.state.confirmDirty || !!value});
    };
    checkRepassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('两次输入不相同');
        }
        else {
            callback();
        }
    };
    checkPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['repassword'], {force: true});
        }else if(value && value === this.props.defaultPassword){
            callback('不能与原密码相同');
        }
        callback();
    };
    render() {
        const {getFieldDecorator} = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 10},
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 14},
            },
        };
        return (
            <Form style={{width: 200}}>
                <Form.Item
                    label="密码"
                    hasFeedback
                    style={{marginBottom: 10}}
                    {...formItemLayout}
                >
                    {getFieldDecorator('password', {
                        rules: [
                            {
                                required: true, min: 6, message: "请输入至少6位密码"
                            }, {
                                validator: this.checkPassword,
                            }]
                    })(<Input type="password"
                              placeholder="请输入密码"/>)}
                </Form.Item>
                <Form.Item
                    label="确认密码"
                    hasFeedback
                    style={{marginBottom: 10}}
                    {...formItemLayout}
                >
                    {getFieldDecorator('repassword', {
                        rules: [{
                            required: true, message: '请再次输入密码',
                        }, {
                            validator: this.checkRepassword,
                        }],
                    })(
                        <Input type="password" placeholder="请输入确认密码" onBlur={this.handleConfirmBlur}/>
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