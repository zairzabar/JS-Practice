class Node {
    constructor(d) {
        this.data = d;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null
    }

    insertHelper(x, root) {
        if (root == null) {
            return new Node(x)
        }
        if (x < root.data) {
            // x should go to the left
            root.left = this.insertHelper(x, root.left)
        } else {
            // x should go to the right
            root.right = this.insertHelper(x, root.right)
        }
        return root
    }

    insert(x) {
        if(this.root == null) {
            this.root = new Node(x)
            return
        }
        this.insertHelper(x, this.root)
    }

    preorderhelper(root) {
        if (root == null) return
        console.log(root.data)
        this.preorderhelper(root.left)
        this.preorderhelper(root.right)
    }

    preorder() {
        this.preorderhelper(this.root)
    }

    inorderhelper(root) {
        if (root == null) return
        this.inorderhelper(root.left)
        console.log(root.data)
        this.inorderhelper(root.right)
    }

    inorder() {
        this.inorderhelper(this.root)
    }

    removeHelper(root, x) {
        if (root == null) return null;
        if (root.data = x) {
            //case 1
            if (root.left == null && root.right == null) return null

            //case 2
            if (root.left == null && root.right !== null) {
                let temp = root.right
                root.right = null;
                return temp
            }

            if (root.left !== null && root.right == null) {
                let temp = root.left
                root.left = null;
                return temp
            }

            let temp = root.left;
            while (temp.right !== null) temp = temp.right
            root.data = temp.data;
            this.removeHelper(root.left, temp.data)
            return root
        }
        
        if (x < root.data) {
            root.left = this.removeHelper(root.left. x)
        } else {
            root.right = this.removeHelper(root.right. x)
        }
    }

    remove(x) {
        this.removeHelper(this.root, x)
    }
}


let bst = new BST()
bst.insert(10)
bst.insert(5)
bst.insert(45)
bst.insert(19)
bst.insert(3)
bst.insert(7)

bst.preorder()
// console.log('***');
// bst.inorder()