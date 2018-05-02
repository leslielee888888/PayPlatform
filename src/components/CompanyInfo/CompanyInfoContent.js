import React from 'react';
import styles from './CompanyInfoContent.css';
import {immutableRenderDecorator} from 'react-immutable-render-mixin';
import {Card, Col, Popover, Row, Tag, Input} from 'antd';
import CssModules from 'react-css-modules';
import EditEmailPopover from './EditEmailPopover'
import EditSysPopover from './EditSysPopover'
import EditPasswordPopover from './EditPasswordPopover'

@immutableRenderDecorator
@CssModules(styles)
export default class CompanyInfoContent extends React.Component {
    state = {
        email: 'test@bbnpay.com',
        emailPopoverVisible: false,
        sys: '应用管理',
        sysPopoverVisible: false,
        password: '123456',
        passwordPopoverVisible: false,
    };
    handleEmailVisibleChange = (visible) => {
        this.setState({
            emailPopoverVisible: visible
        })
    };
    handleEmailChangeSubmit = (key) => {
        this.setState({
            emailPopoverVisible: false,
            ...key
        })
    };
    handleSysVisibleChange = (visible) => {
        this.setState({
            sysPopoverVisible: visible
        })
    };
    handleSysChangeSubmit = (key) => {
        this.setState({
            sysPopoverVisible: false,
            ...key
        })
    };
    handlePasswordVisibleChange = (visible) => {
        this.setState({
            passwordPopoverVisible: visible
        })
    };
    handlePasswordChangeSubmit = (key) => {
        this.setState({
            passwordPopoverVisible: false,
            ...key
        })
    };

    render() {
        return (
            <div className="Content-Box">
                <Row>
                    <Col span={12}>
                        <Card title="个人信息">
                            <Row styleName="Card-row" align="middle" type="flex">
                                <Col span={4} offset={7} styleName="Card-left-span"><span>账号：</span></Col>
                                <Col span={5}><span>test@bbnpay.com</span></Col>
                            </Row>
                            <Row styleName="Card-row" align="middle" type="flex">
                                <Col span={4} offset={7} styleName="Card-left-span"><span>日常工作系统：</span></Col>
                                <Col span={5}>
                                    <Popover placement="right" trigger="click" visible={this.state.sysPopoverVisible}
                                             onVisibleChange={this.handleSysVisibleChange}
                                             content={(
                                                 <EditSysPopover defaultValue={this.state.sys}
                                                                 onClick={this.handleSysChangeSubmit}
                                                                 Cancel={() => {
                                                                     this.setState({
                                                                         sysPopoverVisible: false
                                                                     })
                                                                 }}/>)}>
                                        <Tag color="grey">{this.state.sys}</Tag>
                                    </Popover>
                                </Col>
                            </Row>
                            <Row styleName="Card-row" align="middle" type="flex">
                                <Col span={4} offset={7} styleName="Card-left-span"><span>联系邮箱：</span></Col>
                                <Col span={5}>
                                    <Popover placement="right" trigger="click" visible={this.state.emailPopoverVisible}
                                             onVisibleChange={this.handleEmailVisibleChange}
                                             content={(
                                                 <EditEmailPopover onClick={this.handleEmailChangeSubmit}
                                                                   Cancel={() => {
                                                                       this.setState({
                                                                           emailPopoverVisible: false
                                                                       })
                                                                   }}/>)}>
                                        <Tag
                                            color="grey">{this.state.email}</Tag>
                                    </Popover>
                                </Col>
                            </Row>
                            <Row styleName="Card-row" align="middle" type="flex">
                                <Col span={4} offset={7} styleName="Card-left-span"><span>密码：</span></Col>
                                <Col span={5}>
                                    <Popover placement="right" trigger="click"
                                             visible={this.state.passwordPopoverVisible}
                                             onVisibleChange={this.handlePasswordVisibleChange}
                                             content={(
                                                 <EditPasswordPopover defaultPassword={this.state.password}
                                                     onClick={this.handlePasswordChangeSubmit}
                                                     Cancel={() => {
                                                         this.setState({
                                                             passwordPopoverVisible: false
                                                         })
                                                     }}/>)}>
                                        <Tag color="grey">{this.state.password.replace(/.+/, '******')}</Tag>
                                    </Popover>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}