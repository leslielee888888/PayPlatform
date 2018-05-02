import React from 'react';
import styles from './GameAddContent.css';
import {immutableRenderDecorator} from 'react-immutable-render-mixin';
import CssModules from 'react-css-modules';
import {Button, Card, Cascader, Col, Form, Icon, Input, Radio, Row, Steps, Switch} from 'antd';
import StepOne from './StepOne';
import StepTwo from './StepTwo';

@immutableRenderDecorator
@CssModules(styles)
export default class GameAddContent extends React.Component {
    state = {
        step: 1
    };
    nextStep = () => {
        this.setState({
            step: ++this.state.step
        })
    };
    preStep = () =>{
        this.setState({
            step: --this.state.step
        })
    };
    render() {
        return (
            <div className="Content-Box">
                <Row>
                    <Col span={24}>
                        <Card>
                            <Steps style={{marginBottom: 30}} current={this.state.step}>
                                <Steps.Step title="填写应用信息" icon={<Icon type="laptop"/>}/>
                                <Steps.Step title="填写商品信息" icon={<Icon type="appstore-o"/>}/>
                                <Steps.Step title="设置支付方式" icon={<Icon type="pay-circle"/>}/>
                                <Steps.Step title="下载应用资料" icon={<Icon type="cloud-download-o"/>}/>
                            </Steps>
                            <Row>
                                <Col span={12} offset={6}>
                                    {this.state.step === 0 && <StepOne nextStep={this.nextStep}/>}
                                    {this.state.step === 1 && <StepTwo preStep={this.preStep} nextStep={this.nextStep}/>}
                                </Col>
                            </Row>

                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}