class Node {
    constructor(data) {
        this.data = data;
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    
    addAtHead(data) {
        let newNode = new Node(data)
        newNode.head = this.head;
        this.head = newNode
    }
    
    display() {
        console.log(this.head)
    }
}

let ll = new LinkedList
ll.addAtHead(5)
ll.addAtHead(4)
ll.addAtHead(3)
ll.addAtHead(2)
ll.addAtHead(1)
ll.display()