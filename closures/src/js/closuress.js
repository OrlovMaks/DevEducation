// 1 Task
function tickets(person) {
    let cashbox = {
        25: 0,
        50: 0,
        100: 0
    }
    for (let i = 0; i < person.length; i++) {
        if (person[i] === 25) {
            cashbox[25] += 1;
        }
        else if (person[i] === 50 && cashbox[25] > 0) {
            cashbox[50] += 1;
            cashbox[25] -= 1;

        }
        else if (person[i] === 100 && cashbox[25] > 0 && cashbox[50] > 0) {
            cashbox[100] += 1;
            cashbox[25] -= 1;
            cashbox[50] -= 1;

        }
        else if (person[i] === 100 && cashbox[25] > 2) {
            cashbox[100] += 1;
            cashbox[25] -= 3;

        }
        else {
            return 'NO, Vasya will not have enough money to give change to ' + person[i] + ' dollars!';
        }
    }
    return 'YES, Vasya can give change!';
}
console.log(tickets([25, 50, 25, 100,]));

// 2 Task
function getSum(str1, str2) {
    str1 = str1.split('');
    str2 = str2.split('');
    let answer = '';
    let maxLength = Math.max(str1.length, str2.length);
    for (let i = 0; i < maxLength; i++) {
        let result = parseInt(str1[i]) + parseInt(str2[i]);
        if (str1[i] && !str2[i]) {
            result = parseInt(str1[i]);

        }
        else if (!str1[i] && str2[i]) {
            result = parseInt(str2[i]);
        }
        else {
            answer += result.toString();
        }
    }
    answer = answer.split('').join('');
    return answer;
}
console.log(getSum('111111111111111111111111111111111111111111111111111', '233333333333333333333333333333333333333333333333333'));

// 3 Task
const posts = [
    {
        id: 1,
        post: 'some post1',
        title: 'title',
        author: 'Ivanov',
        comments: [
            {
                id: 1.1,
                comment: 'some comment1',
                title: 'title 1',
                author: 'Rimus'
            },
            {
                id: 1.2,
                comment: 'some comment2',
                title: 'title 2',
                author: 'Uncle'
            }
        ]
    },
    {
        id: 2,
        post: 'some post2',
        title: 'title 2',
        author: 'Ivanov',
        comments: [
            {
                id: 1.1,
                comment: 'some comment1',
                title: 'title 1',
                author: 'Rimus'
            },
            {

                id: 1.2,
                comment: 'some comment2',
                title: 'title 2',
                author: 'Uncle'
            },
            {
                id: 1.3,
                comment: 'some comment3',
                title: 'title 3',
                author: 'Rimus'
            }
        ]
    },
    {
        id: 3,
        post: 'some post3',
        title: 'title 3',
        author: 'Rimus'
    },
    {
        id: 4,
        post: 'some post4',
        title: 'title 4',
        author: 'Uncle'
    }
]

function getQuntityPodtdByAuthor(list, surname) {
    let counterPosts = 0, counterComments = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i].author === surname) {
            counterPosts++;
        }
        if (list[i].comments) {
            for (let j = 0; j < list[i].comments.length; j++) {
                if (list[i].comments[j].author === surname) {
                    counterComments++;
                }
            }
        }
    }
    return 'posts = ' + counterPosts + ', coments = ' + counterComments;
}

console.log(getQuntityPodtdByAuthor(posts, 'Rimus'));