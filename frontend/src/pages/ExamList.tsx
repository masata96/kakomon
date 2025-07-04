﻿import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { fetchExams, Exam } from '../services/api';

export const ExamList: React.FC = () => {
    const [data, setData] = useState<Exam[]>([]);

    useEffect(() => {
        fetchExams().then(res => setData(res.data));
    }, []);

    const columns = [
        { title: '講義名', dataIndex: ['course', 'name'], key: 'course', sorter: (a: Exam, b: Exam) => a.course.name.localeCompare(b.course.name) },
        { title: '年度', dataIndex: 'year', key: 'year', sorter: (a: Exam, b: Exam) => a.year - b.year },
        { title: 'タイトル', dataIndex: 'title', key: 'title' },
        { title: 'ファイル', dataIndex: 'file_url', key: 'file_url', render: (url: string) => <a href={url} target="_blank" rel="noreferrer">ダウンロード</a> },
    ];

    return (
    <div>
        <h2>過去問一覧</h2>
        <Table<Exam>
            rowKey="id"
            dataSource={data}
            columns={columns}
            pagination={{ pageSize: 10 }}
        />
    </div>
    );
};