const pgClient = require('../index');

exports.setMark = async (mark, student_id, course_id, university_id) => {
    try {
        await pgClient.query(`insert into marks (mark, student_id, course_id, university_id) values(${mark}, ${student_id}, ${course_id}, ${university_id});`);
        return { result: 'Mark set' };
    } catch (e) {
        return { error: e.message };
    }
};