//singly-linked list

// list node
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addToFront(value) {
        let newNode = new ListNode(value);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        return `added node ${JSON.stringify(newNode)}`
    }

    addToBack() {
        let newNode = new ListNode(value);
        if (this.tail === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        return `added node ${JSON.stringify(newNode)}`
    }

    size() {
        let count = 0;
        let runner = this.head;
        while (runner) {
            count++;
            runner = runner.next
        }
        return count;
    }

    removeFromFront() {
        if (this.head === null) {
            return undefined;
        }
        if (this.head === this.tail) {
            let temp = this.head;
            this.head = null;
            this.tail = null;
            return temp.value;
        }
        let temp = this.head;
        this.head = this.head.next;
        this.next = null;
        return `removed ${temp.value}`;
    }

    removeFromBack() {
        if (this.head === null) {
            return undefined;
        }
        if (this.head === this.tail) {
            let temp = this.head;
            this.head = null;
            this.tail = null;
            return temp.value;
        }
        let runner = this.head;
        while (runner.next !== this.tail) {
            runner = runner.next;
        }
        let temp = this.tail;
        this.tail = runner;
        this.tail.next = null;
        return `removed ${temp.value}`;
    }
}

let sll = new SinglyLinkedList();
console.log(sll.addToFront(4));
console.log(sll.addToBack(5));
console.log(sll.addToFront(3));