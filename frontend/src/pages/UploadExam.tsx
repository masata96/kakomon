import React, { useState } from 'react';
import { postExam } from '../services/api';

export const UploadExam: React.FC = () => {
    const [form, setForm] = useState({ title: '', year: '', file_url: '', course_id: '', uploader_id: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        postExam({ exam: {
        title: form.title,
        year: Number(form.year),
        file_url: form.file_url,
        course_id: Number(form.course_id),
        uploader_id: Number(form.uploader_id),
    }}).then(() => alert('アップロード完了'));
    };

    return (
        <form onSubmit={handleSubmit}>
        <input name="title" placeholder="タイトル" onChange={handleChange} />
        <input name="year" placeholder="年度" onChange={handleChange} />
        <input name="file_url" placeholder="ファイルURL" onChange={handleChange} />
        <input name="course_id" placeholder="講義ID" onChange={handleChange} />
        <input name="uploader_id" placeholder="ユーザーID" onChange={handleChange} />
        <button type="submit">アップロード</button>
        </form>
    );
};