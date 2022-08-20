//Stacks using linked list
class Node {
    constructor(d) {
        this.data = d
        this.next = null
    }
}

class LinkedList {
	// singly
	constructor() {
		// when we initialise a new linked list head will be empty because there is no node at this point
		this.head = null;
	}

	addAtHead(data) {
        /**
         * Time: O(1)
         * Space: O(1)
         */
		let newNode = new Node(data); // created a new node by calling the Node class mentioned previously
		newNode.next = this.head; // pointing to the current head since we are adding the new node at head
		this.head = newNode; // update the head to the new node
	}

	removeAtHead() {
        /**
         * Time: O(1)
         * Space: O(1)
         */
		if(this.head == null) return; // no node to remove so returning
		let temp = this.head.next; // stored access to new head
		this.head.next = null; // de linked the old head
		this.head = temp; // updated the head
	}

	getAtHead() {
        if (this.head != null) {
            return this.ll.head.data
        }
        return undefined
    }
}

class Stack {
    constructor() {
        this.ll = new LinkedList()
    }

    push(x) {
        this.ll.addAtHead(x)
    }

    pop() {
        this.ll.removeAtHead()
    }

    top() {
        return this.ll.getAtHead()
    }
}

let st = new Stack()
st.push(1)
st.push(2)
st.push(3)
st.push(4)

console.log(st.top())