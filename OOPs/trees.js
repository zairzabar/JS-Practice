class Node {
    constructor(d) {
        this.data = d;
        this.left = null;
        this.right = null;
    }
}

function pre(node) {
    if (node == null) return;
    console.log(node.data)
    pre(node.left)
    pre(node.right)
}

function ino(node) {
    if (node == null) return;
    ino(node.left)
    console.log(node.data)
    ino(node.right)
}

function post(node) {
    if (node == null) return;
    post(node.left)
    post(node.right)
    console.log(node.data)
}

// Hardcode binary tree

let root = new Node(10); // root node
root.left = new Node(5) 
root.right = new Node(6)
root.left.left = new Node(1) // leaf node
root.left.right = new Node(7)
root.right.left = new Node(33) // leaf node
root.right.right = new Node(24) // leaf node

pre(root);
console.log('***');
ino(root)
console.log('***');
post(root)

