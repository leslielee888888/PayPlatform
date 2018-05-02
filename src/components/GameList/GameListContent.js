import React from 'react';
import styles from './GameListContent.css';
import {immutableRenderDecorator} from 'react-immutable-render-mixin';
import CssModules from 'react-css-modules';
import {Card, Icon, Table, Tag, Form, Input, Select, Button} from 'antd';
import GameListModal from './GameListModal'
import moment from 'moment';


const data = [
    {
        ID: '1',
        appid: 3201702281766787,
        name: 'leslie',
        platform: 32,
        from: '国连测试账号',
        createdate: moment(new Date().getTime()).format('YYYY-MM-DD HH:mm:ss'),
        state: 1
    }, {
        ID: '2',
        appid: 3201702281766787,
        name: 'leslie',
        platform: 32,
        from: '国连测试账号',
        createdate: moment(new Date().getTime()).format('YYYY-MM-DD HH:mm:ss'),
        state: 0
    }, {
        ID: '3',
        appid: 3201702281766787,
        name: 'leslie',
        platform: 32,
        from: '国连测试账号',
        createdate: moment(new Date().getTime()).format('YYYY-MM-DD HH:mm:ss'),
        state: 1
    }];

@immutableRenderDecorator
@Form.create()
@CssModules(styles)
export default class GameAddContent extends React.Component {
    state = {
        visible: false
    };
    handleSearch = (record) => {
        this.setState({
            visible: true,
            record
        });
    };
    handleOk = () => {
        this.setState({
            visible: false,
        });
    };
    handleCancel = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        const columns = [
            {
                title: 'ID',
                dataIndex: 'ID',
                key: 'ID'
            }, {
                title: 'appid',
                dataIndex: 'appid',
                key: 'appid',
            }, {
                title: '应用名称',
                dataIndex: 'name',
                key: 'name',
            }, {
                title: '平台',
                dataIndex: 'platform',
                key: 'platform',
            }, {
                title: '产商归属',
                dataIndex: 'from',
                key: 'from',
            }, {
                title: '创建时间',
                dataIndex: 'createdate',
                key: 'createdate',
            }, {
                title: '状态',
                dataIndex: 'state',
                key: 'state',
                render: (text, record) => (
                    /*<Tag color={text===1?'#87d068':'#f50'}>{text===1?'正常':'冻结'}</Tag>*/
                    <Tag color={text === 1 ? 'green' : 'red'}>{text === 1 ? '正常' : '冻结'}</Tag>
                )
            }, {
                title: 'Action',
                key: 'action',
                render: (text, record) => (
                    <span>
                      <a onClick={this.handleSearch.bind(this, record)}>查看 一 {record.name}</a>
                      <span className="ant-divider"/>
                      <a onClick={this.handleSearch.bind(this, record)}>修改</a>
                    </span>
                ),
            }];
        return (
            <div className="Content-Box">
                <GameListModal visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel}/>
                <Card>
                    <Form layout="inline" style={{marginBottom: 10}}>
                        <Form.Item
                        >
                            {getFieldDecorator('name', {})(
                                <Input prefix={<Icon type="mobile" style={{fontSize: 13}}/>} placeholder="搜索应用名称"/>
                            )}
                        </Form.Item>
                        <Form.Item
                        >
                            {getFieldDecorator('appid', {})(
                                <Input prefix={<Icon type="idcard" style={{fontSize: 13}}/>} placeholder="搜索appid"/>
                            )}
                        </Form.Item>
                        <Form.Item
                        >
                            {getFieldDecorator('state', {
                                initialValue: "-1"
                            })(
                                <Select style={{width: 80}}>
                                    <Select.Option value="-1">所有状态</Select.Option>
                                    <Select.Option value="1">正常</Select.Option>
                                    <Select.Option value="0">关闭</Select.Option>
                                </Select>
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" icon="search">搜索</Button>
                        </Form.Item>
                    </Form>
                    <Table rowKey="ID" columns={columns} dataSource={data}/>
                </Card>
            </div>
        );
    }
}