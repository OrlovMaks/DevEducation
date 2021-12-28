const pgClient = require('../index');

exports.createCourse = async (name, university_id, teachers_id) => {
    try {
        await pgClient.query(`INSERT into courses(name, university_id, teachers_id) values('${name}', '${university_id}', '${teachers_id}');`);
        return { result: true };
    } catch (e) {
        return { error: e.message };
    }
};

exports.getCoursesList = async (id, page, perPage, courseName) => {
    try {
        switch (true) {
            case (!!id && !!page && !!perPage && !!courseName): {
                const firstElem = page * perPage - perPage
                const coursesList = await pgClient.query(`SELECT * FROM (SELECT * FROM courses WHERE university_id = ${id}) course WHERE course.name ILIKE '%${courseName}%' OFFSET ${firstElem} LIMIT ${perPage};`);
                return { result: coursesList.rows };
            }
            case (!!id && !!page && !!perPage): {
                const firstElem = page * perPage - perPage
                const coursesList = await pgClient.query(`SELECT * FROM courses WHERE university_id = ${id} OFFSET ${firstElem} LIMIT ${perPage};`);
                return { result: coursesList.rows };
            }
            case (!!id && !!page && !!courseName): {
                const firstElem = page * 10 - 10
                const coursesList = await pgClient.query(`SELECT * FROM (SELECT * FROM courses WHERE university_id = ${id}) course WHERE course.name ILIKE '%${courseName}%' OFFSET ${firstElem} LIMIT ${10};`);
                return { result: coursesList.rows };
            }
            case (!!id && !!perPage && !!courseName): {
                const coursesList = await pgClient.query(`SELECT * FROM (SELECT * FROM courses WHERE university_id = ${id}) course WHERE course.name ILIKE '%${courseName}%' LIMIT ${perPage};`);
                return { result: coursesList.rows };
            }
            case (!!id && !!courseName): {
                const coursesList = await pgClient.query(`SELECT * FROM (SELECT * FROM courses WHERE university_id = ${id}) course WHERE course.name ILIKE '%${courseName}%';`);
                return { result: coursesList.rows };
            }
            case (!!id && !!page): {
                const firstElem = page * 10 - 10
                const coursesList = await pgClient.query(`SELECT * FROM courses WHERE university_id = ${id} OFFSET ${firstElem} LIMIT ${10};`);
                return { result: coursesList.rows };
            }
            case (!!id && !!perPage): {
                const coursesList = await pgClient.query(`SELECT * FROM courses WHERE university_id = ${id} LIMIT ${perPage};`);
                return { result: coursesList.rows };
            } default:
            case (!!id): {
                const coursesList = await pgClient.query(`SELECT * FROM courses WHERE university_id = ${id};`);
                return { result: coursesList.rows };
            }
        }
    } catch (e) {
        return { error: e.message };
    }
};
exports.deleteFromCourse = async (id) => {
    try {
        await pgClient.query(`DELETE FROM marks WHERE student_id = ${id};
        DELETE FROM students_courses WHERE students_id = ${id};`);
        return { result: true };
    } catch (e) {
        return { error: e.message };
    }
};