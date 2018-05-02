import React from 'react';
import {immutableRenderDecorator} from 'react-immutable-render-mixin';
import CssModules from 'react-css-modules';
import {Row, Col, Table, Tag, Form, Input, Tabs, Modal,Switch} from 'antd';
import styles from './GameListModal.css'

@immutableRenderDecorator
export default class GameListModal extends React.Component {
    render() {
        const dataSource = [];
        const columns = [
            {
                title: '商品编号',
                key: 'ID',
                dataIndex: 'ID'
            }, {
                title: '商品名称',
                key: 'name',
                dataIndex: 'name'
            }, {
                title: '销售方式',
                key: 'method',
                dataIndex: 'method'
            }, {
                title: '销售价格',
                key: 'price',
                dataIndex: 'price'
            }
        ];
        for (let i = 0, j = 20; i < j; i++) {
            dataSource.push(
                {
                    ID: i + 1,
                    name: '游戏APP',
                    method: '消费型_应用转入价格',
                    price: 10
                }
            )
        }
        const dataSource1 = [];
        const columns1 = [
            {
                title: '排序',
                key: 'ID',
                dataIndex: 'ID'
            }, {
                title: '支付方式',
                key: 'name',
                dataIndex: 'name'
            }, {
                title: '折扣率',
                key: 'promotionRate',
                dataIndex: 'promotionRate'
            }, {
                title: '操作',
                key: 'action',
                dataIndex: 'action',
                render: (text, record) => {
                    return (
                        <Switch/>
                    )
                }
            }
        ];
        for (let i = 0, j = 20; i < j; i++) {
            dataSource1.push(
                {
                    ID: i + 1,
                    name: '微信',
                    promotionRate: '100%',
                }
            )
        }
        return (
            <div>
                <Modal width={800} title="Leslie" visible={this.props.visible} onOk={this.props.onOk}
                       onCancel={this.props.onCancel}>
                    <Tabs defaultActiveKey="1" tabPosition="left">
                        <Tabs.TabPane tab="应用信息" key="1">
                            <Row className={styles['Tabs-Row']}>
                                <Col span={4}><strong>应用名称：</strong></Col>
                                <Col span={20}>Leslie</Col>
                            </Row>
                            <Row className={styles['Tabs-Row']}>
                                <Col span={4}><strong>应用包名：</strong></Col>
                                <Col span={20}>14.23.90.101</Col>
                            </Row>
                            <Row className={styles['Tabs-Row']}>
                                <Col span={4}><strong>appid：</strong></Col>
                                <Col span={20}>3201702281766787</Col>
                            </Row>
                            <Row className={styles['Tabs-Row']}>
                                <Col span={4}><strong>appkey：</strong></Col>
                                <Col span={20}>7196bda0f6460da267b9a2810fd792a3</Col>
                            </Row>
                            <Row className={styles['Tabs-Row']}>
                                <Col span={4}><strong>设备市场：</strong></Col>
                                <Col span={20}>手机</Col>
                            </Row>
                            <Row className={styles['Tabs-Row']}>
                                <Col span={4}><strong>通知地址：</strong></Col>
                                <Col span={20}>是</Col>
                            </Row>
                            <Row className={styles['Tabs-Row']}>
                                <Col span={4}><strong>url地址：</strong></Col>
                                <Col span={20}>http://14.23.90.101:80/paycenter/v2.0/getoi.do</Col>
                            </Row>
                            <Row className={styles['Tabs-Row']}>
                                <Col span={4}><strong>应用类型：</strong></Col>
                                <Col span={20}>重度网游</Col>
                            </Row>
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="商品信息" key="2">
                            <Table size="small" dataSource={dataSource} rowKey="ID" columns={columns}/>
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="支付方式" key="3">
                            <Table size="small" dataSource={dataSource1} rowKey="ID" columns={columns1}/>
                        </Tabs.TabPane>
                    </Tabs>
                </Modal>
            </div>
        );
    }
}