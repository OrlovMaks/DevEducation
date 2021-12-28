exports.idValidator = require('./id.validator').idValidator;
exports.userValidator = require('./user.validator').userValidator;
exports.deleteUserValidator = require('./user.validator').deleteUserValidator;
exports.universityValidator = require('./university.validator').universityValidator;
exports.coursesValidator = require('./courses.validator').coursesValidator;
exports.coursesListValidator = require('./courses.validator').coursesListValidator;
exports.studentValidator = require('./user.validator').studentValidator;
exports.rateValidator = require('./user.validator').rateValidator;
exports.studentCourseValidator = require('./user.validator').studentCourseValidator;
exports.setMarksValidator = require('./marks.validator').setMarksValidator;
exports.studentUpdateValidator = require('./user.validator').studentUpdateValidator;
exports.teacherValidator = require('./user.validator').teacherValidator;
exports.pageValidator = require('./page.validator').pageValidator;

exports.validate = (data, schema) => {
  const result = schema.validate(data, { abortEarly: false });

  if (result.error) {
    const error = { status: 400, data: result.error.message };
    return { error };
  }
  return { value: result.value };
};
