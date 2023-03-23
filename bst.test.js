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