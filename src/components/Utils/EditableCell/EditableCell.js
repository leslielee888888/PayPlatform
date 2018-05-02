import React from 'react';
import {Input} from 'antd';

export default class EditableCell extends React.Component {
    state = {
        value: this.props.value,
        editable: this.props.editable || false,
    };

    static defaultProps = {
        onChange: () => {
        },
        render: undefined,
        editable: false
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.editable !== this.state.editable) {
            this.setState({editable: nextProps.editable});
            if (nextProps.editable) {
                this.cacheValue = this.state.value;
            }
        }
        if (nextProps.status && nextProps.status !== this.props.status) {
            if (nextProps.status === 'save') {
                this.props.onChange(this.state.value);
            } else if (nextProps.status === 'cancel') {
                this.setState({value: this.cacheValue});
                this.props.onChange(this.cacheValue);
            }
        }
        if (nextProps.value !== this.state.value) {
            this.setState({value:nextProps.value});
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.editable !== this.state.editable ||
            nextState.value !== this.state.value;
    }

    handleChange(e) {
        const value = e.target.value;
        this.setState({value});
        this.props.onChange(value);
    }

    render() {
        const {value, editable} = this.state;
        return (
            <div>
                {
                    editable ?
                        <div>
                            {this.props.render ? this.props.render : <Input
                                value={value}
                                onChange={e => this.handleChange(e)}
                            />}
                        </div>
                        :
                        <div>
                            {value.toString() || ' '}
                        </div>
                }
            </div>
        );
    }
}