import React from 'react';
import {Modal, Form, Input, Upload, Icon, Select, Button, message, Cascader, Switch} from 'antd';
import UEditor from '../Utils/UEditor/UEditor';
import {immutableRenderDecorator} from 'react-immutable-render-mixin';
import styles from './Modal.css';
import classnames from 'classnames/bind';
import {options} from '../../Utils/addressOptions';

const FormItem = Form.Item;
let cx = classnames.bind(styles);
@immutableRenderDecorator
@Form.create({
    mapPropsToFields(props) {
        return props.bean ? props.bean.toJSON() : {};
    },
    onValuesChange: (props, values) => {
    }
})
export default class ModalBox extends React.Component {
    state = {
        confirmDirty: false
    };

    normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        //return e && e.file && e.file.response && e.file.response.filePath;
        return e && e.fileList;
    };
    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({confirmDirty: this.state.confirmDirty || !!value});
    };
    checkRepassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('两次输入不相同');
        } else {
            callback();
        }
    };
    checkPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['repassword'], {force: true});
        }
        callback();
    };
    handleSubmit = (e) => {
        const {action} = this.props;
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                if (action === 'EDIT') {
                    //this.props.addSupplier(values);
                    this.props.updateSupplier(values);
                } else if (action === 'ADD') {
                    this.props.addSupplier(values);
                }
            }
        });
    };

    render() {
        //console.log('Modal', this.props);
        const form = this.props.form;
        const {getFieldDecorator} = form;
        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 5},
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 19},
            },
        };
        /*const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
        })(
            <Select style={{width: 60}}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        );*/
        const uploadProps = {
            name: 'files',
            multiple: false,
            showUploadList: false,
            action: '/shendou/uphold/api/uploadPic.jsp?path=upload/supplier',
            listType: 'picture',
            onSuccess: (info) => {
                //console.log("info",info);
                message.success('上传成功');
                form.setFieldsValue({
                    logo: info.filepath
                })
            }
        };
        const uploaderClassName = cx({
            'avatar-uploader': true
        });
        return (
            <div>
                <Modal
                    title="添加供应商"
                    visible={this.props.visible}
                    footer={[
                        <Button key="back" size="large" onClick={this.props.hideModal}>取消</Button>,
                        <Button key="submit" type="primary" size="large" disabled={!form.isFieldsTouched()}
                                loading={this.props.loading} onClick={this.handleSubmit}>
                            提交
                        </Button>
                    ]
                    }
                    onCancel={this.props.hideModal}
                    width={700}
                >
                    <Form>
                        {
                            this.props.action === 'EDIT' &&
                            <FormItem
                                {...formItemLayout}
                                label="ID"
                            >
                                {getFieldDecorator('id', {})(
                                    <Input disabled={true}/>
                                )}
                            </FormItem>}
                        <FormItem
                            {...formItemLayout}
                            label="供应商名称"
                            hasFeedback
                        >
                            {getFieldDecorator('name', {
                                rules: [{required: true, message: '请输入供应商名称'}]
                            })(
                                <Input placeholder="请输入供应商名字"/>
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="供应商Logo"
                        >
                            <div className="dropbox">
                                {getFieldDecorator('logo', {
                                    valuePropName: 'file',
                                    getValueFromEvent: this.normFile,
                                    rules: [{required: true, message: "请上传供应商logo"}]
                                })(
                                    <Upload {...uploadProps} className={uploaderClassName}>
                                        {
                                            /*this.state.imageUrl ?
                                                <img src={this.state.imageUrl} alt=""
                                                     className={styles.avatar}/> :
                                                <Icon type="plus" className={styles['avatar-uploader-trigger']}/>*/
                                            form.getFieldValue('logo') ?
                                                <img src={form.getFieldValue('logo')} alt=""
                                                     className={styles.avatar}/> :
                                                <Icon type="plus" className={styles['avatar-uploader-trigger']}/>
                                        }
                                    </Upload>
                                )}
                            </div>
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="负责人"
                            hasFeedback
                        >
                            {getFieldDecorator('manager', {
                                rules: [{required: true, message: '请输入负责人'}]
                            })(
                                <Input placeholder="请输入负责人"/>
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="负责人电话"
                            hasFeedback
                        >
                            {getFieldDecorator('mobile', {
                                rules: [
                                    {
                                        required: true, len: 11, message: "请输入11位数字"
                                    }]
                            })(<Input style={{width: '100%'}} type="number"
                                      placeholder="请输入负责人电话"/>)}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="省市区"
                            hasFeedback
                        >
                            {getFieldDecorator('pcd', {
                                rules: [
                                    {
                                        required: true, message: "请选择省市区"
                                    }]
                            })(<Cascader
                                options={options}
                                placeholder="省市区"
                                showSearch
                                onChange={(value, selectedOptions) => {

                                }}
                            />)}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="地址"
                            hasFeedback
                        >
                            {getFieldDecorator('address', {
                                rules: [
                                    {
                                        required: true, message: "请输入地址"
                                    }]
                            })(<Input type="text"
                                      placeholder="请输入地址"/>)}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="账号"
                            hasFeedback
                        >
                            {getFieldDecorator('account', {
                                rules: [
                                    {
                                        required: true, message: "请输入账号"
                                    }]
                            })(<Input type="text"
                                      placeholder="请输入账号"/>)}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="密码"
                            hasFeedback
                        >
                            {getFieldDecorator('password', {
                                rules: [
                                    {
                                        required: true, min: 6, message: "请输入至少6位密码"
                                    }, {
                                        validator: this.checkPassword,
                                    }]
                            })(<Input type="password"
                                      placeholder="请输入密码"/>)}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="确认密码"
                            hasFeedback
                        >
                            {getFieldDecorator('repassword', {
                                rules: [{
                                    required: true, message: '请再次输入密码',
                                }, {
                                    validator: this.checkRepassword,
                                }],
                            })(
                                <Input type="password" placeholder="请输入确认密码" onBlur={this.handleConfirmBlur}/>
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="状态"
                        >
                            {getFieldDecorator('state', {
                                valuePropName: 'checked',
                                initialValue: true
                            })(
                                <Switch checkedChildren="开" unCheckedChildren="关"/>
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="公司介绍"
                        >
                            {getFieldDecorator('descr', {
                            })(
                                <UEditor/>
                            )}
                            </FormItem>
                    </Form>
                </Modal>

            </div>
    );
    }
    }

    //export default Form.create()(ModalBox);