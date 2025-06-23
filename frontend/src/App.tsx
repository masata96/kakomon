import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { Menu, Button, Layout } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ContainerOutlined,
  FileTextOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { CourseList } from './pages/CourseList';
import { CourseDetail } from './pages/CourseDetail';
import { ExamList } from './pages/ExamList';
import { UploadExam } from './pages/UploadExam';
import { Home } from './pages/Home';

const { Sider, Content } = Layout;

type MenuItem = Required<React.ComponentProps<typeof Menu>>['items'][number];

const getMenuItems = (navigate: (path: string) => void): MenuItem[] => [
  {
    key: '/courses',
    icon: <ContainerOutlined />,
    label: '講義一覧',
    onClick: () => navigate('/courses'),
  },
  {
    key: '/exams',
    icon: <FileTextOutlined />,
    label: '過去問一覧',
    onClick: () => navigate('/exams'),
  },
  {
    key: '/upload',
    icon: <UploadOutlined />,
    label: 'アップロード',
    onClick: () => navigate('/upload'),
  },
];

const AppLayout: React.FC = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed} theme="dark">
        <div style={{ color: '#fff', textAlign: 'center', margin: '16px 0' }}>
          {collapsed ? 'K' : 'Kakomon'}
        </div>
        <Menu theme="dark" mode="inline" items={getMenuItems(navigate)} />
      </Sider>
      <Layout>
        <Content style={{ margin: '16px' }}>
          <Routes>
            <Route path="/courses" element={<CourseList />} />
            <Route path="/courses/:id" element={<CourseDetail />} />
            <Route path="/exams" element={<ExamList />} />
            <Route path="/upload" element={<UploadExam />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

const App: React.FC = () => (
  <BrowserRouter>
    <AppLayout />
  </BrowserRouter>
);

export default App;