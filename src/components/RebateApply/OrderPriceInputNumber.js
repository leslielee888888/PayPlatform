import React from 'react';
import {Icon, InputNumber} from 'antd';

export default class OrderPriceInputNumber extends React.Component {
    constructor(props) {
        super(props);

        const value = this.props.value || {};
        this.state = {
            startPrice: value.startPrice || 0,
            endPrice: value.endPrice || 0,
        };
    }
    state = {
        startPrice: 1000,
        endPrice: 1000
    };

    render() {
        return (
            <span>
                <InputNumber
                    defaultValue={this.state.startPrice}
                    prefix={<Icon type="idcard" style={{fontSize: 13}}/>} style={{margin: 0}}
                    formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    parser={value => value.replace(/\$\s?|(,*)/g, '')}
                />
                &emsp;<strong>-</strong>&emsp;
                <InputNumber
                    defaultValue={this.state.endPrice} prefix={<Icon type="idcard" style={{fontSize: 13}}/>}
                    style={{margin: 0}}
                    formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    parser={value => value.replace(/\$\s?|(,*)/g, '')}
                />
            </span>
        )
    }
}