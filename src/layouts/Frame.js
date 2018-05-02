import React from 'react';
import {Layout, Menu} from 'antd';
import {Link, Route, Switch} from 'react-router-dom'
import SiderNavi from './SiderNavi'
import Header from './Header'
import Footer from './Footer'
import {connect} from 'react-redux';

const {SubMenu} = Menu;
const {Sider, Content} = Layout;
@connect(state => {
    return {
        routing: state.get('routing')
    };
})
export default class Frame extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collapsed: false,
        };
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        const pathname = this.props.routing.location.pathname;
        return (
            <Layout>
                <Sider trigger={null}
                       collapsible
                       collapsed={this.state.collapsed}
                       style={{background: '#fff'}}>
                    <SiderNavi OpenKey={pathname.match(/^\/[A-Za-z]*/)[0]}
                               SelectedKey={pathname.match(/\/[A-Za-z]*$/)[0]}/>
                </Sider>
                <Layout>
                    <Header collapsed={this.state.collapsed} toggle={this.toggle}/>
                    <Content style={{background: '#eee'}}>
                        {this.props.children}
                    </Content>
                    <Footer/>
                </Layout>
            </Layout>
        );
    }
}