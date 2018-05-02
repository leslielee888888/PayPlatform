import React from 'react';
import styles from './GameAddContent.css';
import {immutableRenderDecorator} from 'react-immutable-render-mixin';
import CssModules from 'react-css-modules';
import {Button, Table} from 'antd';

@immutableRenderDecorator
@CssModules(styles)
export default class GameAddContent extends React.Component {
    handleClick = () => {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.nextStep();
            }
        });

    };

    render() {
        const dataSource = [
            {
                key: '1',
                name: '胡彦斌',
                age: 32,
                address: '西湖区湖底公园1号'
            }, {
                key: '2',
                name: '胡彦祖',
                age: 42,
                address: '西湖区湖底公园1号'
            }];
        const columns = [
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
            }, {
                title: '年龄',
                dataIndex: 'age',
                key: 'age',
            }, {
                title: '住址',
                dataIndex: 'address',
                key: 'address',
            }];

        return (
            <div>
                <Button style={{marginBottom: 10}} type="primary">添加商品</Button>
                <Table dataSource={dataSource} columns={columns}/>
                <div style={{textAlign: "right"}}>
                    <Button type="danger" onClick={this.props.preStep} style={{marginRight: 8}}>上一步</Button>
                    <Button onClick={this.props.nextStep} type="primary">下一步</Button>
                </div>
            </div>
        );
    }
}