/* Sorted linked list [1, 2, 2, 3, 3, 3, 4]
Remove duplicates => [1, 2, 3, 4]
*/


// Create a new node using the class Node
class Node {
	constructor(d) {
		this.data = d; // data parameter represents the actual data stored in node
		this.next = null; // this will be a ref to the next node connected to the curr node
	}
}

// Logic for linked list
// Linking the nodes from head to tail
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

	addAtTail(data) {
        /**
         * Time: O(n)
         * Space: O(1)
         */
		if(this.head == null) { // if ll is empty, addattail is equal to addathead
			this.addAtHead(data);
			return;
		}
		let tail = this.head;
		while(tail.next != null) tail = tail.next;
		let newNode = new Node(data);
		tail.next = newNode;
	}

	removeAtAtail() {
        /**
         * Time: O(n)
         * Space: O(1)
         */
		if(this.head == null) return; // empty ll
		if(this.head.next == null) { // only one node in the list
			this.head = null;
			return;
		}
		let temp = this.head;
		while(temp.next.next != null) {
			// the above condition gives us access to second last node
			temp = temp.next;
		}
		temp.next = null;
	}

	addAt(pos, data) {
        /**
         * Time: O(n)
         * Space: O(1)
         */
		if(this.head == null) {
			this.addAtHead(data);
			return;
		}
		let temp = this.head;
		for(let i = 0; i < pos && temp.next != null; i++) {
			temp = temp.next;
		}
		// now inside temp we have access to the node at pos
		let newNode = new Node(data);
		newNode.next = temp.next;
		temp.next = newNode;
	}

	removeAt(pos) {
        /**
         * Time: O(n)
         * Space: O(1)
         */
		if(this.head == null) return; // LL was empty
		if(this.head.next == null || pos == 0) {
			// either you have a single node or pos is 0
			this.removeAtHead();
			return;
		}
		let prev = this.head;
		for(let i = 0; i < pos - 1 && prev != null; i++) {
			prev = prev.next;
		}
		if(prev.next == null) {
			// it's a tail removal
			this.removeAtAtail();
			return;
		}
		let nodeToBeDeleted = prev.next;
		prev.next = nodeToBeDeleted.next;
		nodeToBeDeleted.next = null;
	}

	display() {
        /**
         * Time: O(n)
         * Apace: O(1)
         */
		let temp = this.head;
		while(temp != null) {
			console.log(temp.data);
			temp = temp.next;
		}
	}
}

function removeDuplicates() {
    let temp = head
    while (temp != null && temp.next != null) {
        let nextNode = temp.next
        while (nextNode != null && temp.data === nextNode.data) {
            temp.next = nextNode.next
            nextNode.next = null;
            nextNode = temp.next
        }
        if (temp == null) break 
        temp = temp.next
    }
    return head
}

/*
Problem 3: Middle  of the linked list
*/

function middleNode(head) {
    let slow = head, fast = head;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next
    }
    return slow
}

/*
Remove K digits to minimize the digits
*/

var removeKdigits = function(num, k) {
    if(num.length <= k) return "0";
    if(k == 0) return num;
    let st = []; // stack
    st.push(num[0]);
    for(let i = 1; i < num.length; i++) {
        while(k > 0 && st.length != 0 && num[i] < st[st.length - 1]) {
            k--;
            st.pop();
        }
        st.push(num[i]);
        if(st.length == 1 && num[i] == 0) {
            st.pop();
        }
    }
    
    while(k > 0 && st.length > 0) {
        k--;
        st.pop();
    }
    
    let res = "";
    for(let i = 0; i < st.length; i++) {
        res += st[i];
    }
    if(res.length == 0) return "0";
    return res;
};