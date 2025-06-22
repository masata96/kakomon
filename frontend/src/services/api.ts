import axios from 'axios';

export interface Course { id: number; name: string; }
export interface User { id: number; email: string; }
export interface Exam { id: number; title: string; year: number; file_url: string; course: Course; uploader: User; }

export type NewExamPayload = {
    exam: {
    title: string;
    year: number;
    file_url: string;
    course_id: number;
    uploader_id: number;
    };
};

const api = axios.create({
    baseURL: 'http://localhost:3001/api/v1',
});

export const fetchExams = () => api.get<Exam[]>('/exams');
export const postExam = (data: NewExamPayload) => api.post<Exam>('/exams', data);
export const fetchCourses = () => api.get<Course[]>('/courses');
export const postCourse = (data: { course: Pick<Course, 'name'> }) => api.post<Course>('/courses', data);
export const fetchUsers = () => api.get<User[]>('/users');
export const postUser = (data: { user: Pick<User, 'email'> & { password: string } }) => api.post<User>('/users', data);