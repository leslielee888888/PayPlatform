import React from 'react';
import styles from './GameAddContent.css';
import {immutableRenderDecorator} from 'react-immutable-render-mixin';
import CssModules from 'react-css-modules';
import {Button, Card, Cascader, Col, Form, Icon, Input, Radio, Row, Steps, Switch} from 'antd';

const AppTypes = [
    {
        value: '重度网游',
        label: '重度网游',
        children: [{
            value: '角色扮演',
            label: '角色扮演',
        }, {
            value: '策略',
            label: '策略',
        }, {
            value: '格斗',
            label: '格斗',
        }, {
            value: '卡牌',
            label: '卡牌',
        }, {
            value: '模拟养成',
            label: '模拟养成',
        }, {
            value: '其他',
            label: '其他',
        }],
    },
    {
        value: '轻度网游',
        label: '轻度网游',
        children: [{
            value: '社交',
            label: '社交',
        }, {
            value: '经营策略',
            label: '经营策略',
        }, {
            value: '体育',
            label: '体育',
        }, {
            value: '棋牌',
            label: '棋牌',
        }, {
            value: '其他',
            label: '其他',
        }],
    },
    {
        value: '单机',
        label: '单机',
        children: [{
            value: '休闲益智',
            label: '休闲益智',
        }, {
            value: '模拟经营',
            label: '模拟经营',
        }, {
            value: '角色扮演',
            label: '角色扮演',
        }, {
            value: '格斗',
            label: '格斗',
        }, {
            value: '体育',
            label: '体育',
        }, {
            value: '飞行射击',
            label: '飞行射击',
        }, {
            value: '棋牌',
            label: '棋牌',
        }, {
            value: '塔防',
            label: '塔防',
        }, {
            value: '竞速',
            label: '竞速',
        }, {
            value: '动作冒险',
            label: '动作冒险',
        }, {
            value: '其他',
            label: '其他',
        }],
    },
    {
        value: '阅读',
        label: '阅读',
        children: [{
            value: '文库类',
            label: '文库类',
        }, {
            value: '单本',
            label: '单本',
        }, {
            value: '漫画',
            label: '漫画',
        }, {
            value: '语音阅读',
            label: '语音阅读',
        }, {
            value: '教育',
            label: '教育',
        }, {
            value: '其他',
            label: '其他',
        }],
    },
    {
        value: '视频',
        label: '视频',
        children: [{
            value: '视频',
            label: '视频',
        }, {
            value: '单本',
            label: '单本',
        }, {
            value: '其他',
            label: '其他',
        }],
    },
    {
        value: '音乐',
        label: '音乐',
        children: [{
            value: '音乐',
            label: '音乐',
        }, {
            value: '其他',
            label: '其他',
        }],
    },
    {
        value: '应用工具',
        label: '应用工具',
        children: [{
            value: '手机助手',
            label: '手机助手',
        }, {
            value: '模拟经营',
            label: '模拟经营',
        }, {
            value: '地图导航',
            label: '地图导航',
        }, {
            value: '票务查询',
            label: '票务查询',
        }, {
            value: '旅游出行',
            label: '旅游出行',
        }, {
            value: '聊天通讯',
            label: '聊天通讯',
        }, {
            value: '网络购物',
            label: '网络购物',
        }, {
            value: '支付理财',
            label: '支付理财',
        }, {
            value: '商务办公',
            label: '商务办公',
        }, {
            value: '儿童亲子',
            label: '儿童亲子',
        }, {
            value: '系统输入',
            label: '系统输入',
        }, {
            value: '图片处理',
            label: '图片处理',
        }, {
            value: '壁纸主体',
            label: '壁纸主体',
        }, {
            value: '婚恋交友',
            label: '婚恋交友',
        }, {
            value: '其他',
            label: '其他',
        }],
    }

];
@immutableRenderDecorator
@Form.create()
@CssModules(styles)
export default class GameAddContent extends React.Component {
    handleClick = () => {
        this.props.form.validateFields((err, values)=>{
            if (!err) {
                this.props.nextStep();
            }
        });

    };

    render() {
        const {getFieldDecorator} = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 4},
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 20},
            },
        };
        return (
            <Form>
                <Form.Item {...formItemLayout} hasFeedback label="应用名称">
                    {getFieldDecorator('Name', {
                        rules: [{
                            required: true, message: "请输入应用名"
                        }]
                    })(
                        <Input placeholder="请输入应用名"/>
                    )}
                </Form.Item>
                <Form.Item {...formItemLayout} hasFeedback label="应用包名"
                           extra="此为应用标识，是应用版本更新的唯一识别，应用包和后台填写的必须一致，如：com.xx.xx.yxg。运营平台为H5时，此处需填写使用bbnpay支付的应用域名。如xxx.com 的一级域名">
                    {getFieldDecorator('Container', {
                        rules: [{
                            required: true, message: "请输入应用包名"
                        }]
                    })(
                        <Input placeholder="请输入应用包名"/>
                    )}
                </Form.Item>
                <Form.Item {...formItemLayout} label="设备市场">
                    {getFieldDecorator('Market', {
                        initialValue: '手机'
                    })(
                        <Radio.Group>
                            <Radio value="手机">手机</Radio>
                            <Radio value="电视">电视</Radio>
                        </Radio.Group>
                    )}
                </Form.Item>
                <Form.Item {...formItemLayout} label="运营平台">
                    {getFieldDecorator('Platform', {
                        initialValue: 'android'
                    })(
                        <Radio.Group>
                            <Radio value="android">android</Radio>
                            <Radio value="ios">ios</Radio>
                            <Radio value="html5">html5</Radio>
                        </Radio.Group>
                    )}
                </Form.Item>
                <Form.Item {...formItemLayout} label="通知地址">
                    {getFieldDecorator('notify', {
                        initialValue: true,
                        valuePropName: 'checked'
                    })(
                        <Switch checkedChildren="开" unCheckedChildren="关"/>
                    )}
                </Form.Item>
                <Form.Item {...formItemLayout} hasFeedback label="URL地址">
                    {getFieldDecorator('URL', {
                        rules: [{
                            required: true, message: "URL地址不能为空"
                        }]
                    })(
                        <Input placeholder="请输入URL地址"/>
                    )}
                </Form.Item>
                <Form.Item {...formItemLayout} hasFeedback label="应用类型">
                    {getFieldDecorator('type', {})(
                        <Cascader showSearch={true} options={AppTypes} placeholder="请选择应用类型"
                                  popupPlacement="topLeft"/>
                    )}
                </Form.Item>
                <Form.Item {...formItemLayout} style={{textAlign: 'center'}}>
                    <Button type="primary" onClick={this.handleClick}
                            disabled={!this.props.form.isFieldsTouched()}>下一步</Button>
                </Form.Item>
            </Form>
        );
    }
}