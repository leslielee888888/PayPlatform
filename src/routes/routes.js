import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';
import Frame from '../layouts/Frame';
import CompanyInfo from '../views/CompanyInfo';
import CompanyMeans from '../views/CompanyMeans';
import GameAdd from '../views/GameAdd';
import GameList from '../views/GameList';
import OrderList from '../views/OrderList';
import OrderFix from '../views/OrderFix';
import BillFix from '../views/BillFix';
import OrderCount from '../views/OrderCount';
import OrderExport from '../views/OrderExport';
import RebateApply from '../views/RebateApply';
import RebateList from '../views/RebateList';

/*export const routeConfig = [
    {
        path: "/CompanyInfo",
        component: CompanyInfo,
        exact: false,
        breadcrumb: [
            {
                path: "",
                name: "账户管理"
            },
            {
                path: "/CompanyInfo",
                name: "个人资料"
            }
        ]
    }
];*/
const routes = (props) => {
    return (
        <ConnectedRouter history={props.history}>
            <div>
                <Frame>
                    <Switch>
                        <Route exact path="/" component={() => (<Redirect to="/Company/Info"/>)}/>
                        {/*{routeConfig.map((val, index) => {
                            return (
                                <Route exact={val.exact} path={val.path} key={index} component={val.component}/>
                            )
                        })}*/}
                        <Route path="/Company/Info"  component={CompanyInfo}/>
                        <Route path="/Company/Means"  component={CompanyMeans}/>
                        <Route path="/Game/Add"  component={GameAdd}/>
                        <Route path="/Game/List"  component={GameList}/>
                        <Route path="/Game/OrderList"  component={OrderList}/>
                        <Route path="/Game/OrderFix"  component={OrderFix}/>
                        <Route path="/Game/BillFix"  component={BillFix}/>
                        <Route path="/Order/OrderCount"  component={OrderCount}/>
                        <Route path="/Order/OrderExport"  component={OrderExport}/>
                        <Route path="/Rebate/RebateApply"  component={RebateApply}/>
                        <Route path="/Rebate/RebateList"  component={RebateList}/>
                    </Switch>
                </Frame>
            </div>
        </ConnectedRouter>

    );
};

const App = () => {
    return (
        <Breadcrumb>
            <Breadcrumb.Item>账户管理</Breadcrumb.Item>
            <Breadcrumb.Item>个人资料</Breadcrumb.Item>
        </Breadcrumb>
    )
};
export default routes;


