import React, { useEffect, useState } from 'react';
import { Card, Row, Col } from 'antd';
import { fetchCourses, Course } from '../services/api';
import { Link } from 'react-router-dom';

export const CourseList: React.FC = () => {
    const [courses, setCourses] = useState<Course[]>([]);

    useEffect(() => {
    fetchCourses().then(res => setCourses(res.data));
    }, []);

    return (
    <div>
        <h2>講義一覧</h2>
        <Row gutter={[16, 16]}>
            {courses.map(course => (
            <Col xs={24} sm={12} md={8} lg={6} key={course.id}>
                <Link to={`/courses/${course.id}`}>
                <Card hoverable title={course.name} style={{ textAlign: 'center' }}>
                    ID: {course.id}
                </Card>
                </Link>
            </Col>
            ))}
        </Row>
    </div>
    );
};