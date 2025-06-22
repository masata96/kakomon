import React, { useEffect, useState } from 'react';
import { fetchExams, Exam } from '../services/api';

export const ExamList: React.FC = () => {
  const [exams, setExams] = useState<Exam[]>([]);

  useEffect(() => {
    fetchExams().then(res => setExams(res.data));
  }, []);

  return (
    <div>
      <h1>過去問一覧</h1>
      <ul>
        {exams.map(e => (
          <li key={e.id}>
            {e.course.name} ({e.year}) - 
            <a href={e.file_url} target="_blank" rel="noreferrer">
              {e.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};