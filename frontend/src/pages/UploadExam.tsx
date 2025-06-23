import React, { useState } from 'react';
import { postExam } from '../services/api';
import { Form, Input,Cascader, InputNumber, Button } from 'antd';

    const exerciseOptions = [
        { value: '授業内演習', label: '授業内演習' },
        { value: '中間試験', label: '中間試験' },
        { value: '期末試験', label: '期末試験' },
    ];

export const UploadExam: React.FC = () => {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        const [title] = values.title;
        postExam({ exam: {
            title,
            year: values.year,
            file_url: values.file_url,
            course_id: values.course_id,
            uploader_id: values.uploader_id,
        }}).then(() => {
        form.resetFields();
        alert('アップロード完了');
        });
    };

    return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item
            name="title"
            label="試験種別"
            rules={[{ required: true, message: '試験種別を選択してください' }]}
        >
            <Cascader options={exerciseOptions} placeholder="試験種別を選択" />
        </Form.Item>
        <Form.Item name="year" label="年度" rules={[{ required: true }]}>
            <InputNumber style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item name="file_url" label="ファイルURL" rules={[{ required: true }]}>
            <Input />
        </Form.Item>
        <Form.Item name="course_id" label="講義ID" rules={[{ required: true }]}>
            <InputNumber style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item name="uploader_id" label="ユーザーID" rules={[{ required: true }]}>
            <InputNumber style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item>
        <Button type="primary" htmlType="submit">
            アップロード
        </Button>
        </Form.Item>
    </Form>
    );
};