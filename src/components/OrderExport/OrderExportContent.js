import React from 'react';
import ReactDOM from 'react-dom';
import {immutableRenderDecorator} from 'react-immutable-render-mixin';
import CssModules from 'react-css-modules';
import {Card, Col, Form, Row, Select, Button, Table} from 'antd';
import styles from './OrderExportContent.css';

@immutableRenderDecorator
@Form.create()
@CssModules(styles)
export default class OrderListContent extends React.Component {
    render() {
        const {getFieldDecorator} = this.props.form;
        const formItemLayout = {
            labelCol: {span: 8},
            wrapperCol: {span: 16},
        };
        return (
            <div className="Content-Box">
                <Card style={{width:500}}  ref={card => this.card = card}>
                    <Form style={{width: 300, margin: 'auto'}}>
                        <Form.Item
                            label='应用名称'  {...formItemLayout}
                        >
                            {getFieldDecorator('app', {
                                initialValue: "所有应用"
                            })(
                                <Select>
                                    <Select.Option value="所有应用">所有应用</Select.Option>
                                    <Select.Option value="cf">cf</Select.Option>
                                </Select>
                            )}
                        </Form.Item>
                        <Form.Item label='渠道'  {...formItemLayout}>
                            {getFieldDecorator('pay', {
                                initialValue: "所有渠道"
                            })(
                                <Select>
                                    <Select.Option value="所有渠道">所有渠道</Select.Option>
                                    <Select.Option value="微信">微信</Select.Option>
                                    <Select.Option value="支付宝">支付宝</Select.Option>
                                </Select>
                            )}
                        </Form.Item>
                        <Form.Item
                            label="订单完成时间:"
                            {...formItemLayout}
                        >
                            {getFieldDecorator('date', {
                                initialValue: "今日"
                            })(
                                <Select>
                                    <Select.Option value="今日">今日</Select.Option>
                                    <Select.Option value="昨日">昨日</Select.Option>
                                    <Select.Option value="最近7日">最近7日</Select.Option>
                                </Select>
                            )}
                        </Form.Item>
                        <Form.Item style={{textAlign:'center'}}
                        >
                            <Button htmlType="submit" type="primary" icon="download">导出</Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        );
    }
}