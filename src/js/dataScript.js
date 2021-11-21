const nodeData = document.querySelector('.nodeData')
const nodeDataAfter = document.querySelector('.nodeDataAfter')
const addNode = document.querySelector('.addNode')
const lengthArr = document.querySelector('.length')
const delNode = document.querySelector('.delNode')
const delLastNode = document.querySelector('.delLastNode')
const addNodeHead = document.querySelector('.addNodeHead')
const addNodeAfter = document.querySelector('.addNodeAfter')
const outputNode = document.querySelector('.output')
const getInd = document.querySelector('.getInd');
const getIndVal = document.querySelector('.getIndVal');
const getElem = document.querySelector('.getElem');
const getElemVal = document.querySelector('.getElemVal');

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    append(data) {
        const node = new Node(data);
        if (this.tail) {
            this.tail.next = node;
        }
        if (!this.head) {
            this.head = node;
        }
        this.tail = node
    }
    prepend(data) {
        const node = new Node(data, this.head);
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
    }
    insertAfter(after, data) {
        const found = this.find(after)
        if (!found) {
            return
        }
        const node = new Node(data, found.next);
        found.next = node;
    }
    find(data) {
        if (!this.head) {
            return
        }
        let current = this.head;
        while (current) {
            if (current.data === data) {
                return current;
            }
            current = current.next;
        }
    }
    toArray() {
        const output = []
        let current = this.head

        while (current) {
            output.push(current)
            current = current.next
        }

        return output
    }
    remove(data) {
        if (!this.head) {
            return
        }

        while (this.head && this.head.data === data) {
            this.head = this.head.next
        }

        let current = this.head
        while (current.next) {
            if (current.next.data === data) {
                current.next = current.next.next
            } else {
                current = current.next
            }
        }

        if (this.tail.data === data) {
            this.tail = current
        }
    }
}
const list = new LinkedList()

function update() {
    for (let i = 0; i < list.toArray().length; i++) {
        if (list.toArray()[i] == list.toArray()[list.toArray().length - 1]) {
            outputNode.innerHTML += `<div class="list"><span class="data">Data: ${list.toArray()[i].data}</span><span class="next">Next:${list.toArray()[i].next}</span> ===> ${list.toArray()[i].next} </div>`
        }
        else {
            outputNode.innerHTML += `<div class="list"><span class="data">Data: ${list.toArray()[i].data}</span><span class="next">Next:${list.toArray()[i].next.data}</span> ===> </div>`
        }
    }
    lengthArr.innerHTML = `<p>Количество елементов: ${list.toArray().length} </p>`
}

addNode.addEventListener('click', function () {
    if (nodeData.value === '') {
        return
    }
    outputNode.innerHTML = ''
    list.append(nodeData.value)
    list.toArray()
    update()
})

addNodeHead.addEventListener('click', function () {
    if (nodeData.value === '') {
        return
    }
    outputNode.innerHTML = ''
    list.prepend(nodeData.value)
    list.toArray()
    update()
})
addNodeAfter.addEventListener('click', function () {
    if (nodeData.value === '') {
        return
    }
    outputNode.innerHTML = ''
    list.insertAfter(nodeDataAfter.value, nodeData.value)
    list.toArray()
    update()
})
delNode.addEventListener('click', function () {
    outputNode.innerHTML = ''
    list.remove(nodeData.value)
    list.toArray()
    update()
})
delLastNode.addEventListener('click', function () {
    outputNode.innerHTML = ''
    list.remove(list.toArray()[list.toArray().length - 1].data)
    list.toArray()
    update()
})
getInd.addEventListener('click', function () {
    let searchdata = nodeData.value;
    let index = list.toArray().findIndex(el => el.data === searchdata);
    for (let i = 0; i < list.toArray().length; i++) {
        getIndVal.innerHTML = `<span>Индекс:${index}</span>`
    }
    if (index === -1) {
        getIndVal.innerHTML = `<span>такого индекса нет</span>`
    }
})
getElem.addEventListener('click', function () {
    if (nodeData.value >= list.toArray().length) {
        getElemVal.innerHTML = `<span>такого елемента нет</span>`
    }
    else {
        getElemVal.innerHTML = `<span>Елемент:${list.toArray()[nodeData.value].data}`
    }
})
