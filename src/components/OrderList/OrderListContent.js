import React from 'react';
import {immutableRenderDecorator} from 'react-immutable-render-mixin';
import CssModules from 'react-css-modules';
import {Card, Icon, Table, Row, Col, Form, Input, Select, Button, InputNumber, DatePicker} from 'antd';
import moment from 'moment';
import OrderPriceInputNumber from './OrderPriceInputNumber';
import styles from './OrderListContent.css';

const data = [];

@immutableRenderDecorator
@Form.create()
@CssModules(styles)
export default class OrderListContent extends React.Component {
    render() {
        const {getFieldDecorator} = this.props.form;
        const columns = [
            {
                title: "ID",
                key: "ID",
                dataIndex: "ID"
            }, {
                title: "订单id",
                key: "orderid",
                dataIndex: "orderid"
            }, {
                title: "所属应用",
                key: "app",
                dataIndex: "app"
            }, {
                title: "金额",
                key: "price",
                dataIndex: "price"
            }, {
                title: "下单时间",
                key: "createdate",
                dataIndex: "createdate"
            }, {
                title: "渠道状态",
                key: "state",
                dataIndex: "state"
            }, {
                title: "CP状态",
                key: "CP",
                dataIndex: "CP"
            }, {
                title: "操作",
                key: "action",
                dataIndex: "action"
            }
        ];
        const formItemLayout = {
            labelCol: {span: 6},
            wrapperCol: {span: 18},
        };
        return (
            <div className="Content-Box">
                <Card>
                    <Form style={{marginBottom: 10}}>
                        <Row styleName="Form-Row" gutter={10}>
                            <Col span={3}>
                                <Form.Item
                                >
                                    {getFieldDecorator('orderid', {})(
                                        <Input prefix={<Icon type="qrcode" style={{fontSize: 13}}/>}
                                               placeholder="搜索订单码"/>
                                    )}
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item
                                    label="订单金额"
                                    {...formItemLayout}
                                >
                                    {getFieldDecorator('Price', {
                                        initialValue: {startPrice: 1000, endPrice: 1001}
                                    })(
                                        <OrderPriceInputNumber/>
                                    )}
                                </Form.Item>
                            </Col>
                            <Col span={2}>
                                <Form.Item
                                >
                                    {getFieldDecorator('app', {})(
                                        <Select showSearch  placeholder="选择应用">
                                            <Select.Option value="cf">cf
                                            </Select.Option>
                                            <Select.Option value="IOS测试">IOS测试
                                            </Select.Option>
                                            <Select.Option value="Android测试">Android测试
                                            </Select.Option>
                                            <Select.Option value="lumi_test">lumi_test
                                            </Select.Option>
                                            <Select.Option value="yxg_h5测试">yxg_h5测试
                                            </Select.Option>
                                        </Select>
                                    )}
                                </Form.Item>
                            </Col>
                            <Col span={2}>
                                <Form.Item
                                >
                                    {getFieldDecorator('pay', {})(
                                        <Select showSearch  placeholder="支付方式">
                                            <Select.Option value="微信">微信</Select.Option>
                                            <Select.Option value="支付宝">支付宝</Select.Option>
                                            <Select.Option value="京东支付">京东支付</Select.Option>
                                            <Select.Option value="财付通">财付通</Select.Option>
                                        </Select>
                                    )}
                                </Form.Item>
                            </Col>
                            <Col span={2}>
                                <Form.Item
                                >
                                    {getFieldDecorator('state', {})(
                                        <Select showSearch  placeholder="扣款状态">
                                            <Select.Option value="所有扣款状态">所有扣款状态</Select.Option>
                                            <Select.Option value="等待支付">等待支付</Select.Option>
                                            <Select.Option value="扣款成功">扣款成功</Select.Option>
                                            <Select.Option value="付款失败">付款失败</Select.Option>
                                            <Select.Option value="订单取消">订单取消</Select.Option>
                                            <Select.Option value="支付超时">支付超时</Select.Option>
                                        </Select>
                                    )}
                                </Form.Item>
                            </Col>
                            <Col span={2}>
                                <Form.Item
                                >
                                    {getFieldDecorator('companystate', {})(
                                        <Select showSearch  placeholder="产商状态">
                                            <Select.Option value="所有支付方式">所有支付方式</Select.Option>
                                            <Select.Option value="待通知">待通知</Select.Option>
                                            <Select.Option value="通知成功">通知成功</Select.Option>
                                            <Select.Option value="通知失败">通知失败</Select.Option>
                                            <Select.Option value="订单取消">订单取消</Select.Option>
                                            <Select.Option value="支付超时">支付超时</Select.Option>
                                        </Select>
                                    )}
                                </Form.Item>
                            </Col>
                            <Col span={3}>
                                <Form.Item
                                >
                                    {getFieldDecorator('date-picker', {})(
                                        <DatePicker placeholder="下单时间"/>
                                    )}
                                </Form.Item>
                            </Col>
                            <Col span={4}>
                                <Form.Item >
                                    <Button type="primary" icon="search">搜索</Button>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                    <Table rowKey="ID" columns={columns} dataSource={data}/>
                </Card>
            </div>
        );
    }
}