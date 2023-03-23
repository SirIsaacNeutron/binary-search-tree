export default class BST {
    constructor(array) {
        this.root = buildTree(array, 0, array.length - 1)
    }
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
