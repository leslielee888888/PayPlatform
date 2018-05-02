import React from 'react';
import {Menu, Icon} from 'antd';
import {Link} from 'react-router-dom'
import style from "./SiderNavi.css";

const {SubMenu} = Menu;
const siderNavi = (props) =>{
    const defaultSelected = {
        defaultSelectedKeys:[props.SelectedKey==='/'?'/Info':props.SelectedKey],
        defaultOpenKeys:[props.OpenKey==='/'?'/Company':props.OpenKey]
    };
    return (
        <Menu
            mode="inline"
            {...defaultSelected}
            style={{height: document.documentElement.clientHeight}}
        >
            <SubMenu key="/Company" title={<span><Icon type="user" style={{fontSize:13}}/><span className={style.text}>账号管理</span></span>}>
                <Menu.Item key="/Info"><Link to="/Company/Info">个人资料</Link></Menu.Item>
                <Menu.Item key="/Means"><Link to="/Company/Means">商户资料</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="/Game" title={<span><Icon type="laptop" style={{fontSize:13}}/><span className={style.text}>应用管理</span></span>}>
                <Menu.Item key="/Add"><Link to="/Game/Add">创建应用</Link></Menu.Item>
                <Menu.Item key="/List"><Link to="/Game/List">应用列表</Link></Menu.Item>
                <Menu.Item key="/OrderList"><Link to="/Game/OrderList">订单管理</Link></Menu.Item>
                <Menu.Item key="/OrderFix"><Link to="/Game/OrderFix">通知失败挂账</Link></Menu.Item>
                <Menu.Item key="/BillFix"><Link to="/Game/BillFix">支付跨天挂账</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="/Order"
                     title={<span><Icon type="pay-circle-o" style={{fontSize:13}}/><span className={style.text}>支付统计</span></span>}>
                <Menu.Item key="/OrderCount"><Link to="/Order/OrderCount">报表分析</Link></Menu.Item>
                <Menu.Item key="/OrderExport"><Link to="/Order/OrderExport">报表导出</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="/Rebate"
                     title={<span><Icon type="credit-card" style={{fontSize:13}}/><span className={style.text}>退货管理</span></span>}>
                <Menu.Item key="/RebateApply"><Link to="/Rebate/RebateApply">退货申请</Link></Menu.Item>
                <Menu.Item key="/RebateList"><Link to="/Rebate/RebateList">退货列表</Link></Menu.Item>
            </SubMenu>
        </Menu>
    )
};
export default siderNavi;
