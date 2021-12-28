const user = {
    age: 21,
    value: [3, 4, 5]
}
user.age = 45;
user.value.splice(1, 2)

console.log(user)

const obj = {
    key: 'id_1',
    name: 'some',
    values: [{ value: 2 }, { value: 100 }, { value: 456 }]
}

const { key: myKey, values: [, , myValue] } = obj;
console.log(myKey)
console.log(myValue.value)

const arr = [1, 40, 100]
console.log(arr.map(item => ({ key: item })))

class Person {
    #name = null;
    #age = null;
    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }
    get name() {
        return this.#name
    }
}

const person = new Person('Max', 10)
console.log(person.name)

const values = {
    nullValue: null,
    numberValue: 400,
    zeroValue: null,
    emptyText: "",
    falseValue: false
}

const value1 = values.undefinedValue ?? "some default";
const value2 = values.nullValue ?? "some other default";
const value3 = values.emptyText ?? "Hello";
const value4 = values.zeroValue ?? 300;
const value5 = values.falseValue ?? true;
console.log(value5);