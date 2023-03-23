import BST from "./bst"

const traversals = new BST([1, 5, 6, 9, 12])

test("inorder traversal", () => {
    expect(traversals.inorder()).toEqual([1, 5, 6, 9, 12])
})

test("preorder traversal", () => {
    expect(traversals.preorder()).toEqual([6, 1, 5, 9, 12])
})

test("postorder traversal", () => {
    expect(traversals.postorder()).toEqual([5, 1, 12, 9, 6])
})

test("levelorder traversal", () => {
    expect(traversals.levelorder()).toEqual([6, 1, 9, 5, 12])
})

test("height", () => {
    expect(traversals.height(traversals.root)).toEqual(2)
})

test("depth", () => {
    expect(traversals.depth(traversals.find(12))).toEqual(2)
})

test("balancing", () => {
    const bst = new BST([1, 5, 6, 9, 12])
    expect(bst.isBalanced(bst.root)).toEqual(true)

    bst.insert(21)
    bst.insert(22)
    bst.insert(19)
    bst.insert(7)

    expect(bst.isBalanced(bst.root)).toEqual(false)

    bst.rebalance()
    expect(bst.isBalanced(bst.root)).toEqual(true)
})