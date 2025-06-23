import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

export const Home: React.FC = () => {
    const navigate = useNavigate();
    return (
    <div style={{ textAlign: 'center', padding: '100px 0' }}>
        <h1>過去問シェアアプリへようこそ</h1>
        <p>大学の授業の過去問をみんなで共有しましょう！</p>
        <Button type="primary" onClick={() => navigate('/courses')} size="large">
            講義一覧を見る
        </Button>
    </div>
    );
};