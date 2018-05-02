import React from 'react';
import styles from './CompanyMeansContent.css';
import {immutableRenderDecorator} from 'react-immutable-render-mixin';
import CssModules from 'react-css-modules';
import {Card, Col, Popover, Row, Tag, Input} from 'antd';
import img1 from '../../images/1.jpg';
@immutableRenderDecorator
@CssModules(styles)
export default class CompanyMeansContent extends React.Component {

    render() {
        return (
            <div className="Content-Box">
                <Row>
                    <Col span={24}>
                        <Card title="商户基本资料">
                            <Row styleName="Card-Row">
                                <Col span={6}>
                                    <strong>商品编号:</strong>
                                </Col>
                                <Col span={6}>
                                    31
                                </Col>
                                <Col span={6}>
                                    <strong>登录账号:</strong>
                                </Col>
                                <Col span={6}>
                                    test@bbnpay.com
                                </Col>
                            </Row>
                            <Row styleName="Card-Row">
                                <Col span={6}>
                                    <strong>商户类型:</strong>
                                </Col>
                                <Col span={6}>
                                    应用提供商
                                </Col>
                                <Col span={6}>
                                    <strong>商户性质:</strong>
                                </Col>
                                <Col span={6}>
                                    企业
                                </Col>
                            </Row>
                            <Row styleName="Card-Row">
                                <Col span={6}>
                                    <strong>经营类目:</strong>
                                </Col>
                                <Col span={6}>
                                    - -
                                </Col>
                                <Col span={6}>
                                    <strong>行业类型:</strong>
                                </Col>
                                <Col span={6}>
                                    数娱
                                </Col>
                            </Row>
                            <Row styleName="Card-Row">
                                <Col span={6}>
                                    <strong>公司名称:
                                    </strong>
                                </Col>
                                <Col span={6}>
                                    国连测试账号
                                </Col>
                                <Col span={6}>
                                    <strong>公司简称:</strong>
                                </Col>
                                <Col span={6}>

                                </Col>
                            </Row>
                            <Row styleName="Card-Row">
                                <Col span={6}>
                                    <strong>银行类型: </strong>
                                </Col>
                                <Col span={6}>
                                    私人银行账户
                                </Col>
                                <Col span={6}>
                                    <strong>开户银行:</strong>
                                </Col>
                                <Col span={6}>
                                    招商银行
                                </Col>
                            </Row>
                            <Row styleName="Card-Row">
                                <Col span={6}>
                                    <strong>联行号: </strong>
                                </Col>
                                <Col span={6}>
                                    308581002345
                                </Col>
                                <Col span={6}>
                                    <strong>收款户名:</strong>
                                </Col>
                                <Col span={6}>
                                    常乐
                                </Col>
                            </Row>
                            <Row styleName="Card-Row">
                                <Col span={6}>
                                    <strong>收款账号: </strong>
                                </Col>
                                <Col span={6}>
                                    6214850206155282
                                </Col>
                                <Col span={6}>
                                    <strong>国家:</strong>
                                </Col>
                                <Col span={6}>
                                    赞比亚
                                </Col>
                            </Row>
                            <Row styleName="Card-Row">
                                <Col span={6}>
                                    <strong>公司网址: </strong>
                                </Col>
                                <Col span={18}>
                                </Col>
                            </Row>
                            <Row styleName="Card-Row">
                                <Col span={6}>
                                    <strong>核心业务简介: </strong>
                                </Col>
                                <Col span={18}>
                                </Col>
                            </Row>
                            <Row styleName="Card-Row">
                                <Col span={6}>
                                    <strong>商务联系人： </strong>
                                </Col>
                                <Col span={6}>
                                    测试商务联系人
                                </Col>
                                <Col span={6}>
                                </Col>
                                <Col span={6}>
                                </Col>
                            </Row>
                            <Row styleName="Card-Row">
                                <Col span={6}>
                                    <strong>QQ: </strong>
                                </Col>
                                <Col span={6}>
                                    12345678
                                </Col>
                                <Col span={6}>
                                    <strong>联系电话:</strong>
                                </Col>
                                <Col span={6}>
                                    13426490273
                                </Col>
                            </Row>
                            <Row styleName="Card-Row">
                                <Col span={6}>
                                    <strong>客服联系人: </strong>
                                </Col>
                                <Col span={6}>
                                    测试客服联系人
                                </Col>
                                <Col span={6}>
                                </Col>
                                <Col span={6}>
                                </Col>
                            </Row>
                            <Row styleName="Card-Row">
                                <Col span={6}>
                                    <strong>QQ: </strong>
                                </Col>
                                <Col span={6}>
                                    12345678
                                </Col>
                                <Col span={6}>
                                    <strong>联系电话:</strong>
                                </Col>
                                <Col span={6}>
                                    13426490273
                                </Col>
                            </Row>
                            <Row styleName="Card-Row">
                                <Col span={6}>
                                    <strong>结算联系人: </strong>
                                </Col>
                                <Col span={6}>
                                    测试结算联系人
                                </Col>
                                <Col span={6}>
                                </Col>
                                <Col span={6}>
                                </Col>
                            </Row>
                            <Row styleName="Card-Row">
                                <Col span={6}>
                                    <strong>QQ:
                                    </strong>
                                </Col>
                                <Col span={6}>
                                    12345678
                                </Col>
                                <Col span={6}>
                                    <strong>联系电话:</strong>
                                </Col>
                                <Col span={6}>
                                    13426490273
                                </Col>
                            </Row>
                            <Row styleName="Card-Row">
                                <Col span={6}>
                                    <strong>营业执照:</strong>
                                </Col>
                                <Col span={6}>
                                    <img src={img1} width="90%" alt=""/>
                                </Col>
                                <Col span={6}>
                                    <strong>法人身份证:</strong>
                                </Col>
                                <Col span={6}>
                                    <img src={img1} width="90%" alt=""/>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}