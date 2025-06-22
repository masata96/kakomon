import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ExamList } from './pages/ExamList';
import { UploadExam } from './pages/UploadExam';

const App: React.FC = () => (
  <BrowserRouter>
    <nav>
      <Link to="/">一覧</Link> |
      <Link to="/upload">アップロード</Link>
    </nav>
    <Routes>
      <Route path="/" element={<ExamList />} />
      <Route path="/upload" element={<UploadExam />} />
    </Routes>
  </BrowserRouter>
);

export default App;