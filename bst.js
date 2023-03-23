export default class BST {
    constructor(array = null) {
        if (array === null) {
            this.root = null
        }
        else {
            this.root = buildTree(array, 0, array.length - 1)
        }
    }

    insert = value => {
        this.root = insertRecursive(this.root, value)
    }

    delete = value => {
        this.root = deleteRecursive(this.root, value)
    }

    find = value => {
        return findRecursive(this.root, value)
    }

    inorder = () => {
        return inorderRecursive(this.root)
    }

    preorder = () => {
        return preorderRecursive(this.root)
    }

    postorder = () => {
        return postorderRecursive(this.root)
    }
}

// Doesn't insert duplicates!
function insertRecursive(root, value) {
    if (root === null) {
        root = new Node(value)
        return root
    }
    if (value < root.data) {
        root.left = insertRecursive(root.left, value)
    }
    else if (value > root.data) {
        root.right = insertRecursive(root.right, value)
    }

    return root
}

function deleteRecursive(root, value) {
    if (root === null) {
        return root
    }

    if (value < root.data) {
        root.left = deleteRecursive(root.left, value)
    }
    else if (value > root.data) {
        root.right = deleteRecursive(root.right, value)
    }
    else {
        // If node has only one child
        if (root.left === null) {
            return root.right
        }
        else if (root.right === null) {
            return root.left
        }

        // If node has two children, then we need the smallest value in the right
        // subtree
        root.data = minTreeValue(root.right)
        root.right = deleteRecursive(root.right, root.data)
    }
    return root
}

function minTreeValue(root) {
    let minValue = root.data
    // Elements less than the root are always to its left
    while (root.left !== null) {
        minValue = root.left.data
        root = root.left
    }
    return minValue
}

function findRecursive(root, value) {
    if (root === null) {
        return null
    }
    if (value < root.data) {
        return findRecursive(root.left, value)
    }
    else if (value > root.data) {
        return findRecursive(root.right, value)
    }
    // If root is not null, and value is not less than or greater than root's data,
    // it must be equal to it
    return root
}

function inorderRecursive(root, array = []) {
    if (root === null) { 
        return 
    }
    inorderRecursive(root.left, array)
    array.push(root.data)
    inorderRecursive(root.right, array)
    return array
}

function preorderRecursive(root, array = []) {
    if (root === null) {
        return
    }
    array.push(root.data)
    preorderRecursive(root.left, array)
    preorderRecursive(root.right, array)
    return array
}

function postorderRecursive(root, array = []) {
    if (root === null) {
        return
    }
    postorderRecursive(root.left, array)
    postorderRecursive(root.right, array)
    array.push(root.data)
    return array
}

function buildTree(array, start, end) {
    if (start > end) {
        return null
    }

    const mid = Math.floor((start + end) / 2)
    const node = new Node(array[mid])

    node.left = buildTree(array, start, mid - 1)
    node.right = buildTree(array, mid + 1, end)
    return node
}

// Pass in root node to print entire tree
function prettyPrint(node, prefix = "", isLeft = true) {
    if (node === null) {
        return
    }
    if (node.right !== null) {
        prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false)
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`)
    if (node.left !== null) {
        prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true)
    }
}

class Node {
    constructor(data, left = null, right = null) {
        this.data = data
        this.left = left
        this.right = right
    }
}
