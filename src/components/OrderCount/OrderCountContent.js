import React from 'react';
import ReactDOM from 'react-dom';
import {immutableRenderDecorator} from 'react-immutable-render-mixin';
import CssModules from 'react-css-modules';
import {Button, Card, Col, Form, Row, Select, Table} from 'antd';
import styles from './OrderCountContent.css';
import createG2 from 'g2-react';
import {Stat} from 'g2';

let Chart = null;
const Line = createG2(chart => {
    chart.line().position('time*order').color('#108ee9').shape('smooth').size(2);
    chart.col('time', {alias: '日期'});
    chart.col('order', {alias: '订单数'});
    chart.axis('time', {
        title: {
            fontSize: '12', // 文本大小
            textAlign: 'center', // 文本对齐方式
            fill: '#999', // 文本颜色
            fontFamily: 'microsoft YaHei'
        }
    });
    chart.axis('order', {
        title: {
            fontSize: '12', // 文本大小
            textAlign: 'center', // 文本对齐方式
            fill: '#999', // 文本颜色
            fontFamily: 'microsoft YaHei'
        }
    });
    Chart = chart;
});
const dataSource = [];
for (let i = 0, j = 10; i < j; i++) {
    dataSource.push({
        ID: i,
        time: `2017-9-${i + 10}`,
        order: Math.ceil(Math.random() * 100),
        company: `国连测试账号${i + 1}`,
        app: '',
        bill: Math.ceil(Math.random() * 10),
        refund: Math.ceil(Math.random() * 10),
        total: Math.ceil(Math.random() * 100),
        trade: Math.ceil(Math.random() * 100),
        price: Math.ceil(Math.random() * 100),
    })
}
console.log(dataSource);
@immutableRenderDecorator
@Form.create()
@CssModules(styles)
export default class OrderCountContent extends React.Component {
    state = {
        dataSource: dataSource,
        width: 0
    };

    constructor() {
        super();
    };

    componentDidMount() {
        this.setState({
            width: ReactDOM.findDOMNode(this.Line).clientWidth
        }, () => Chart.render());
    };

    handleSubmit = () => {
        if (this.props.form.isFieldsTouched()) {
            const dataSource = this.state.dataSource.map((val, index) => {
                return {
                    ...val,
                    order: Math.ceil(Math.random() * 100),
                    bill: Math.ceil(Math.random() * 10),
                    refund: Math.ceil(Math.random() * 10),
                    total: Math.ceil(Math.random() * 100),
                    trade: Math.ceil(Math.random() * 100),
                    price: Math.ceil(Math.random() * 100),
                }
            });
            this.setState({
                dataSource
            });
        }
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        const formItemLayout = {
            labelCol: {span: 8},
            wrapperCol: {span: 16},
        };
        const columns = [
            {
                title: '日期',
                dataIndex: 'time',
                key: 'time'
            }, {
                title: '产商',
                dataIndex: 'company',
                key: 'company',
            }, {
                title: '应用',
                dataIndex: 'app',
                key: 'app',
            }, {
                title: '付款订单数',
                dataIndex: 'order',
                key: 'order',
            }, {
                title: '付款总金额',
                dataIndex: 'bill',
                key: 'bill',
            }, {
                title: '退款订单数',
                dataIndex: 'refund',
                key: 'refund',
            }, {
                title: '退款总金额',
                dataIndex: 'total',
                key: 'total'
            }, {
                title: '交易总金额',
                dataIndex: 'trade',
                key: 'trade',
            }, {
                title: '应得金额',
                dataIndex: 'price',
                key: 'price',
            }];
        return (
            <div className="Content-Box">
                <Card ref={card => this.card = card}>
                    <Form ref={form => this.form = form} onSubmit={this.handleSubmit}>
                        <Row gutter={10}>
                            <Col span={3}>
                                <Form.Item>
                                    {getFieldDecorator('app', {
                                        initialValue: "所有应用"
                                    })(
                                        <Select>
                                            <Select.Option value="所有应用">所有应用</Select.Option>
                                            <Select.Option value="cf">cf</Select.Option>
                                        </Select>
                                    )}
                                </Form.Item>
                            </Col>
                            <Col span={3}>
                                <Form.Item>
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
                            </Col>
                            <Col span={6}>
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
                            </Col>
                            <Col span={3}>
                                <Form.Item
                                >
                                    <Button htmlType="submit" type="primary" icon="search">搜索</Button>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                    <div ref={(Line)=>this.Line = Line}>
                        <Line
                            data={this.state.dataSource}
                            width={this.state.width}
                            height={300}
                        />
                    </div>
                    <Table rowKey='ID' columns={columns} dataSource={this.state.dataSource}/>
                </Card>
            </div>
        );
    }
}