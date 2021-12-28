const pgClient = require('../index');

exports.getUserById = async (id) => {
    try {
        const user = await pgClient.query(`SELECT * FROM users WHERE id = ${id} LIMIT 1`);
        return { result: user.rows[0] };
    } catch (e) {
        return { error: e.message };
    }
};

exports.getEvery = async () => {
    try {
        const user = await pgClient.query(`SELECT * FROM users WHERE role = 'student';`);
        return { result: user.rows };
    } catch (e) {
        return { error: e.message };
    }
};
exports.createTeacher = async (name, age, university_id) => {
    try {
        await pgClient.query(`INSERT into users(role, name, age, university_id) values('teacher', '${name}', '${age}', '${university_id}');`);
        return { result: true };
    } catch (e) {
        return { error: e.message };
    }
};
exports.createStudent = async (name, age, university_id) => {
    try {
        await pgClient.query(`INSERT into users(role, name, age, university_id) values('student', '${name}', '${age}', '${university_id}');`);
        return { result: true };
    } catch (e) {
        return { error: e.message };
    }
};
exports.getTeachersList = async (id, page, perPage, teacherName) => {
    try {
        switch (true) {
            case (!!id && !!page && !!perPage && !!teacherName): {
                const firstElem = page * perPage - perPage
                const TeachersList = await pgClient.query(`SELECT * FROM (SELECT * FROM users WHERE role = 'teacher' AND university_id = ${id}) teacher WHERE teacher.name ILIKE '%${teacherName}%' OFFSET ${firstElem} LIMIT ${perPage};`);
                return { result: TeachersList.rows };
            }
            case (!!id && !!page && !!perPage): {
                const firstElem = page * perPage - perPage
                const TeachersList = await pgClient.query(`SELECT * FROM users WHERE role = 'teacher' AND university_id = ${id} OFFSET ${firstElem} LIMIT ${perPage};`);
                return { result: TeachersList.rows };
            }
            case (!!id && !!page): {
                const firstElem = page * 10 - 10
                const TeachersList = await pgClient.query(`SELECT * FROM users WHERE role = 'teacher' AND university_id = ${id} OFFSET ${firstElem} LIMIT ${10};`);
                return { result: TeachersList.rows };
            }
            case (!!id && !!page && !!teacherName): {
                const firstElem = page * 10 - 10
                const TeachersList = await pgClient.query(`SELECT * FROM (SELECT * FROM users WHERE role = 'teacher' AND university_id = ${id}) teacher WHERE teacher.name ILIKE '%${teacherName}%' OFFSET ${firstElem} LIMIT ${10};`);
                return { result: TeachersList.rows };
            }
            case (!!id && !!perPage && !!teacherName): {
                const TeachersList = await pgClient.query(`SELECT * FROM (SELECT * FROM users WHERE role = 'teacher' AND university_id = ${id}) teacher WHERE teacher.name ILIKE '%${teacherName}%' LIMIT ${perPage};`);
                return { result: TeachersList.rows };
            }
            case (!!id && !!teacherName): {
                const TeachersList = await pgClient.query(`SELECT * FROM (SELECT * FROM users WHERE role = 'teacher' AND university_id = ${id}) teacher WHERE teacher.name ILIKE '%${teacherName}%';`);
                return { result: TeachersList.rows };
            }
            case (!!id && !!perPage): {
                const TeachersList = await pgClient.query(`SELECT * FROM users WHERE role = 'teacher' AND university_id = ${id} LIMIT ${perPage};`);
                return { result: TeachersList.rows };
            } default:
            case (!!id): {
                const TeachersList = await pgClient.query(`SELECT * FROM users WHERE role = 'teacher' AND university_id = ${id};`);
                return { result: TeachersList.rows };
            }
        }
    } catch (e) {
        return { error: e.message };
    }
};

exports.deleteStudent = async (id) => {
    try {
        await pgClient.query(`DELETE FROM marks WHERE student_id = ${id};
        DELETE FROM students_courses WHERE students_id = ${id}; 
        DELETE FROM users WHERE role = 'student' and id = ${id};`);
        return { result: true };
    } catch (e) {
        return { error: e.message };
    }
};

exports.getStudentByCourse = async (id, page, perPage, studentName) => {
    try {
        switch (true) {
            case (!!id && !!page && !!perPage && !!studentName): {
                const firstElem = page * perPage - perPage
                const studentList = await pgClient.query(`SELECT * FROM (SELECT users.* from users, students_courses where students_courses.students_id = users.id AND users.role = 'student' and students_courses.courses_id = ${id}) student WHERE student.name ILIKE '%${studentName}%' OFFSET ${firstElem} LIMIT ${perPage};`);
                return { result: studentList.rows };
            }
            case (!!id && !!page && !!perPage): {
                const firstElem = page * perPage - perPage
                const studentList = await pgClient.query(`SELECT users.* from users, students_courses where students_courses.students_id = users.id AND users.role = 'student' and students_courses.courses_id = ${id} OFFSET ${firstElem} LIMIT ${perPage};`);
                return { result: studentList.rows };
            }
            case (!!id && !!page): {
                const firstElem = page * 10 - 10
                const studentList = await pgClient.query(`SELECT users.* from users, students_courses where students_courses.students_id = users.id AND users.role = 'student' and students_courses.courses_id = ${id} OFFSET ${firstElem} LIMIT 10;`);
                return { result: studentList.rows };
            }
            case (!!id && !!page && !!studentName): {
                const firstElem = page * 10 - 10
                const studentList = await pgClient.query(`SELECT * FROM (SELECT users.* from users, students_courses where students_courses.students_id = users.id AND users.role = 'student' and students_courses.courses_id = ${id}) student WHERE student.name ILIKE '%${studentName}%' OFFSET ${firstElem} LIMIT ${10};`);
                return { result: studentList.rows };
            }
            case (!!id && !!perPage && !!studentName): {
                const studentList = await pgClient.query(`SELECT * FROM (SELECT users.* from users, students_courses where students_courses.students_id = users.id AND users.role = 'student' and students_courses.courses_id = ${id}) student WHERE student.name ILIKE '%${studentName}%' LIMIT ${perPage};`);
                return { result: studentList.rows };
            }
            case (!!id && !!studentName): {
                const studentList = await pgClient.query(`SELECT * FROM (SELECT users.* from users, students_courses where students_courses.students_id = users.id AND users.role = 'student' and students_courses.courses_id = ${id}) student WHERE student.name ILIKE '%${studentName}%';`);
                return { result: studentList.rows };
            }
            case (!!id && !!perPage): {
                const studentList = await pgClient.query(`SELECT users.* from users, students_courses where students_courses.students_id = users.id AND users.role = 'student' and students_courses.courses_id = ${id} LIMIT ${perPage};`);
                return { result: studentList.rows };
            } default:
            case (!!id): {
                const studentList = await pgClient.query(`SELECT users.* FROM users, students_courses WHERE students_courses.students_id = users.id AND users.role = 'student' AND students_courses.courses_id = ${id};`);
                return { result: studentList.rows };
            }
        }
    } catch (e) {
        return { error: e.message };
    }
};

exports.getStudentRate = async (id, perPage) => {
    try {
        switch (true) {
            case (!!id && !!perPage): {
                const studentRate = await pgClient.query(`SELECT u.id, u.name, avg_mark.rating FROM
                (SELECT m.student_id , avg(m.mark) AS rating FROM marks m WHERE m.university_id = ${id} GROUP BY m.student_id LIMIT ${perPage})
                avg_mark, users u WHERE u.id = avg_mark.student_id
                ORDER BY avg_mark.rating DESC;`);
                return { result: studentRate.rows };
            }
            default:
            case (!!id): {
                const studentRate = await pgClient.query(`SELECT u.id, u.name, avg_mark.rating FROM
                (SELECT m.student_id , avg(m.mark) AS rating FROM marks m WHERE m.university_id = ${id} GROUP BY m.student_id LIMIT 100)
                avg_mark, users u WHERE u.id = avg_mark.student_id
                ORDER BY avg_mark.rating DESC;`);
                return { result: studentRate.rows };
            }
        }
    } catch (e) {
        return { error: e.message };
    }
};

exports.setCourseForStudent = async (student_id, course_id) => {
    try {
        pgClient.query(`INSERT INTO students_courses (students_id, courses_id) select ${student_id}, ${course_id} where exists (select 1 from users, courses where users.university_id = courses.university_id and users."role" = 'student')
        returning students_id, courses_id;`);
        return { result: 'Set course' };
    } catch (e) {
        return { error: e.message };
    }
};

exports.updateStudent = async (student_id, name, age, university_id) => {
    try {
        pgClient.query(`UPDATE users SET name='${name}', age='${age}', university_id='${university_id}' where id=${student_id} and role='student';`);
        return { result: `Student ${name} updated` };
    } catch (e) {
        return { error: e.message };
    }
};