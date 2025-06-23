import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Table } from 'antd';
import { fetchExams, Exam } from '../services/api';

export const CourseDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [data, setData] = useState<Exam[]>([]);

    useEffect(() => {
        if (!id) return;
        fetchExams().then(res => {
        const filtered = res.data.filter(e => e.course.id === Number(id));
        setData(filtered);
        });
    }, [id]);

    const columns = [
        { title: '年度', dataIndex: 'year', key: 'year', sorter: (a: Exam, b: Exam) => a.year - b.year },
        { title: 'タイトル', dataIndex: 'title', key: 'title' },
        { title: 'ファイル', dataIndex: 'file_url', key: 'file_url', render: (url: string) => <a href={url} target="_blank" rel="noreferrer">ダウンロード</a> },
    ];

    return (
    <div>
        <h2>講義 ID: {id} の過去問一覧</h2>
        <Table<Exam>
            rowKey="id"
            dataSource={data}
            columns={columns}
            pagination={{ pageSize: 10 }}
        />
    </div>
    );
};