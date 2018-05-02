import React from 'react';
import {Input, Icon, Table, Dropdown, Menu, Button, Pagination, Modal, Avatar, Popconfirm} from 'antd';
import style from './Table.css';
import moment from 'moment';
import {immutableRenderDecorator} from 'react-immutable-render-mixin';
import EditableCell from '../Utils/EditableCell/EditableCell'

const confirm = Modal.confirm;
const {Column} = Table;
@immutableRenderDecorator
export default class TableBox extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.loadDate();
    }

    emitEmpty = () => {
        this.userNameInput.focus();
    };
    handleChange = (item, key, keyPath) => {
        console.log(item);
    };
    onChange = (e) => {
        console.log(e);
    };
    showConfirm = (id) => {
        let self = this;
        confirm({
            title: '是否确定删除?',
            content: '删除后无法恢复',
            onOk() {
                self.props.deleteSupplier(id);
            }
        });
    };

    render() {
        const {query} = this.props;
        const suffix = query ? <Icon type="close-circle" onClick={this.props.reset.bind(this, this.emitEmpty)}/> : null;
        const menu = (
            <Menu onClick={(e) => {
                this.props.loadDate(0, this.props.query, e.key)
            }}>
                <Menu.Item key="0">
                    正常
                </Menu.Item>
                <Menu.Divider/>
                <Menu.Item key="1">
                    冻结
                </Menu.Item>
            </Menu>
        );
        const paginationOption = {
            showQuickJumper: true,
            defaultCurrent: 1,
            total: parseInt(this.props.total ? this.props.total : 0, 10),
            onChange: (page, pageSize) => {
                this.props.loadDate(page, this.props.query);
            }
        };
        return (
            <div>
                <div className={style.box}>
                    <Input
                        placeholder="请输入关键字"
                        prefix={<Icon type="search"/>}
                        suffix={suffix}
                        value={this.props.query}
                        style={{width: 200}}
                        onChange={(e) => (this.props.loadDate(0, e.target.value.trim()))}
                        ref={node => this.userNameInput = node}
                    />
                    <Dropdown overlay={menu} trigger={['click']}>
                        <Button style={{marginLeft: 8, verticalAlign: "bottom"}}>
                            状态 <Icon type="down"/>
                        </Button>
                    </Dropdown>
                    <Button type="primary" icon="plus" style={{marginLeft: 8}}
                            onClick={this.props.showModal}>添加供应商</Button>
                </div>
                <Table rowKey={(record) => (record.id)} pagination={paginationOption} loading={this.props.loading}
                       dataSource={this.props.list.toJSON()} scroll={{x: 1800, y: 500}}>
                    <Column
                        title="ID"
                        dataIndex="id"
                        width={50}
                        fixed="left"
                    />
                    <Column
                        title="供应商名称"
                        dataIndex="name"
                        width={150}
                        fixed="left"
                        render={(text, record) => (<EditableCell onChange={(value) => {
                            record.name = value
                        }} editable={record.editable} value={text} status={record.status}/>)}
                    />
                    <Column
                        title="账号"
                        dataIndex="account"
                        width={150}
                        render={(text, record) => (<EditableCell onChange={(value) => {
                            record.account = value
                        }} editable={record.editable} value={text} status={record.status}/>)}
                    />
                    <Column
                        title="供应商Logo"
                        dataIndex="logo"
                        width={150}
                        render={(text, record) => (record.logo ?
                            <Avatar style={{'cursor': 'pointer'}} shape="square" onClick={() => {
                                Modal.info({
                                    title: '预览图片',
                                    content: (<img src={record.logo} width='100%' alt=""/>),
                                    iconType: "picture"
                                })
                            }} src={record.logo}/> :
                            <Avatar shape="square" icon="user"/>)}
                    />
                    <Column
                        title="负责人"
                        dataIndex="manager"
                        width={150}
                        render={(text, record) => (<EditableCell onChange={(value) => {
                            record.manager = value
                        }} editable={record.editable} value={text} status={record.status}/>)}
                    />
                    <Column
                        title="负责人电话"
                        dataIndex="mobile"
                        width={150}

                    />
                    <Column
                        title="省市区"
                        key="province"
                        render={(text, record) => (<span>{record.province + record.city + record.district}</span>)}
                        width={150}
                    />
                    <Column
                        title="工厂地址"
                        dataIndex="address"
                        render={(text, record) => (<EditableCell onChange={(value) => {
                            record.address = value
                        }} editable={record.editable} value={text} status={record.status}/>)}

                    />
                    <Column
                        title="商品数"
                        dataIndex="products"
                        width={80}
                        sorter={(a, b) => a.products - b.products}
                    />
                    <Column
                        title="状态"
                        dataIndex="state"
                        render={(text, record) => (<span color="pink">{record.state == 0 ? '正常' : "冻结"}</span>)}
                        width={100}
                        filters={[
                            {
                                text: '正常',
                                value: '0',
                            }, {
                                text: '冻结',
                                value: '1',
                            }
                        ]}
                        onFilter={(value, record) => record.state == value}
                    />
                    <Column
                        title="创建时间"
                        dataIndex="createdate"
                        render={(text, record) => (
                            <span>{moment(record.createdate.time).format('YYYY-MM-DD HH:mm:ss')}</span>
                        )}
                        sorter={(a, b) => a.createdate.time - b.createdate.time}
                        width={150}
                    />
                    <Column
                        title="操作"
                        key="action"
                        render={(text, record, index) => (
                            <span>
                                <span className={style['editable-row-operations']}>
                                    {
                                        record.editable ?
                                            <span>
                                                <a onClick={this.props.quickEditSubmit.bind(this, index, record)}
                                                   className={style['editable-row-operations_save']}>保存</a>
                                                  <Popconfirm title="确定取消?"
                                                              onConfirm={() => this.props.quickEditCancel(index, record)}>
                                                    <a>取消</a>
                                                  </Popconfirm>
                                                </span>
                                            :
                                            <span>
                                          <a onClick={this.props.quickEdit.bind(this, index, record)}>快速修改</a>
                                        </span>
                                    }
                                  </span>
                                <span className="ant-divider"/>
                                <a onClick={this.props.showEditModal.bind(this, record)}>编辑</a>
                                <span className="ant-divider"/>
                                <a onClick={this.showConfirm.bind(this, record.id)}>删除</a>
                            </span>
                        )}
                        width={200}
                        fixed="right"
                    />
                </Table>
            </div>
        );
    }
}