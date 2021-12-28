const URL = require('url');

const { UPDATE_STUDENT_DATA, DELETE_STUDENT_FROM_COURSE, SET_MARKS_FOR_STUDENTS, GET_USER, CREATE_TEACHER, GET_STUDENT_BY_COURSE, GET_COURSES_BY_UNIV_ID, GET_ALL_USERS, CREATE_UNIVERSITY, GET_UNIVERSITY, GET_ALL_UNIVERSITIES, CREATE_STUDENT, GET_TEACHER_BY_UNIV_ID, CREATE_COURSE, DELETE_STUDENT, SET_COURSE_FOR_STUDENT, GET_STUDENT_RATE, GET_ALL_DATA, GET_ALL_STUDENTS } = require('../constants/routes');
const { updateStudent, getStudentRate, getSingleUser, createTeacher, createStudent, getUsers, getTeachersByUnivId, deleteStudent, getStudentByCourse, setCourseForStudent } = require('../controllers/user.controller');
const { createUniversity, getSingleUniversity, getAllUniversities } = require('../controllers/university.controller');
const { createCourses, getCoursesByUnivId, deleteFromCourse } = require('../controllers/courses.controller');
const { createMarks } = require('../controllers/marks.controller');
const { getAllData } = require('../controllers/allData.controller');

const router = async ({ req, res, body }) => {
    let result, error;
    const { method, url } = req;
    const { query, pathname } = URL.parse(url, true);

    switch (true) {
        case method === 'POST' && pathname === CREATE_UNIVERSITY:
            ({ result, error } = await createUniversity(body));
            break;
        case method === 'GET' && pathname === GET_UNIVERSITY:
            ({ result, error } = await getSingleUniversity(query));
            break;
        case method === 'GET' && pathname === GET_ALL_UNIVERSITIES:
            ({ result, error } = await getAllUniversities(query));
            break;
        case method === 'GET' && pathname === GET_USER:
            ({ result, error } = await getSingleUser(query));
            break;
        case method === 'GET' && pathname === GET_ALL_STUDENTS:
            ({ result, error } = await getUsers());
            break;
        case method === 'POST' && pathname === CREATE_TEACHER:
            ({ result, error } = await createTeacher(body));
            break;
        case method === 'POST' && pathname === CREATE_STUDENT:
            ({ result, error } = await createStudent(body));
            break;
        case method === 'GET' && pathname === GET_TEACHER_BY_UNIV_ID:
            ({ result, error } = await getTeachersByUnivId(query));
            break;
        case method === 'POST' && pathname === CREATE_COURSE:
            ({ result, error } = await createCourses(body));
            break;
        case method === 'GET' && pathname === GET_COURSES_BY_UNIV_ID:
            ({ result, error } = await getCoursesByUnivId(query));
            break;
        case method === 'GET' && pathname === GET_STUDENT_BY_COURSE:
            ({ result, error } = await getStudentByCourse(query));
            break;
        case method === 'DELETE' && pathname === DELETE_STUDENT:
            ({ result, error } = await deleteStudent(body));
            break;
        case method === 'POST' && pathname === SET_COURSE_FOR_STUDENT:
            ({ result, error } = await setCourseForStudent(query));
            break;
        case method === 'GET' && pathname === GET_STUDENT_RATE:
            ({ result, error } = await getStudentRate(query));
            break;
        case method === 'POST' && pathname === SET_MARKS_FOR_STUDENTS:
            ({ result, error } = await createMarks(body));
            break;
        case method === 'DELETE' && pathname === DELETE_STUDENT_FROM_COURSE:
            ({ result, error } = await deleteFromCourse(query));
            break;
        case method === 'PUT' && pathname === UPDATE_STUDENT_DATA:
            ({ result, error } = await updateStudent(body));
            break;
        case method === 'GET' && pathname === GET_ALL_DATA:
            ({ result, error } = await getAllData(query));
            break;
        default:
            res.statusCode = 404;
            return res.end(JSON.stringify({ error: 'Route Not Found' }));
    }

    if (error) {
        res.statusCode = error.status;
        return res.end(JSON.stringify({ error }));
    }
    res.statusCode = result.status;
    res.end(JSON.stringify(result.data));
};

module.exports = { router };
