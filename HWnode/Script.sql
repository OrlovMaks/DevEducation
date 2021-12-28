create table universities (
 id serial primary key,
 country varchar,
 city varchar,
 name varchar,
 accreditation varchar
);

create table users (
 id serial primary key,
 role varchar,
 name varchar,
 age integer,
 university_id integer,
 foreign key (university_id) references universities(id)
);

create table courses (
 id serial primary key,
 name varchar,
 age integer,
 university_id integer,
 teachers_id integer,
 foreign key (university_id) references universities(id),
 foreign key (teachers_id) references users(id)
);

create table students_courses (
 students_id int,
 courses_id int,
 foreign key (students_id) references users(id),
 foreign key (courses_id) references courses(id)
);

create table marks (
 id serial primary key,
 mark integer,
 student_id int,
 course_id int,
 university_id int,
 foreign key (university_id) references universities(id),
    foreign key (student_id) references users(id),
    foreign key (course_id) references courses(id)
);
insert into universities (country, city, name, accreditation)
values('Ukraine', 'Dnipro', 'UMSf', 3),
('Ukraine', 'Dnipro', 'Nobel', 3),
('Ukraine', 'Dnipro', 'DNU', 5);

insert into users (role, name, age, university_id)
values('teacher', 'Maria', 56, 1),
('teacher', 'Kirill',45, 2),
('teacher', 'Ivan', 53, 3),
('student', 'Nikolai', 34, 1),
('student', 'Petya', 53, 1),
('student', 'Vasya', 12, 1),
('student', 'Nastya', 23, 1),
('student', 'Arsen', 34, 2),
('student', 'Andrey', 45, 2),
('student', 'Max', 43, 2),
('student', 'Slava', 12, 2),
('student', 'Danil', 23, 3),
('student', 'Nikita', 42, 3),
('student', 'Alexander', 21, 3),
('student', 'Anton', 19, 3);

insert into courses (name, university_id, teachers_id)
values('Eanglish course', 1, 1),
('IT course', 2, 2),
('Russian course', 3, 3);

insert into students_courses (students_id, courses_id)
values(4, 1),
(5, 1),
(6, 1),
(7, 1),
(8, 2),
(9, 2),
(10, 2),
(11, 2),
(12, 3),
(13, 3),
(14, 3),
(15, 3);

insert into marks (mark, student_id, course_id, university_id)
values(74, 4, 1, 1),
(35, 4, 1, 1),
(57, 4, 1, 1),
(34, 5, 1, 1),
(68, 5, 1, 1),
(87, 5, 1, 1),
(65, 6, 1, 1),
(67, 6, 1, 1),
(78, 6, 1, 1),
(56, 7, 1, 1),
(76, 7, 1, 1),
(94, 7, 1, 1),
(34, 8, 2, 2),
(76, 8, 2, 2),
(85, 8, 2, 2),
(46, 9, 2, 2),
(78, 9, 2, 2),
(96, 9, 2, 2),
(45, 10, 2, 2),
(56, 10, 2, 2),
(78, 10, 2, 2),
(56, 11, 2, 2),
(67, 11, 2, 2),
(45, 11, 2, 2),
(68, 12, 3, 3),
(79, 12, 3, 3),
(56, 12, 3, 3),
(44, 13, 3, 3),
(45, 13, 3, 3),
(94, 13, 3, 3),
(84, 14, 3, 3),
(58, 14, 3, 3),
(75, 14, 3, 3),
(47, 15, 3, 3),
(57, 15, 3, 3),
(86, 15, 3, 3);