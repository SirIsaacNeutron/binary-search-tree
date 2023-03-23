import BST, { prettyPrint } from "./bst"

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
    const randoms = []
    for (let i = 0; i < 100; ++i) {
        const randomNumber = Math.floor(Math.random(101))
        randoms.push(randomNumber)
    }
    const bst = new BST(randoms)
    expect(bst.isBalanced(bst.root)).toEqual(true)

    bst.insert(200)
    bst.insert(300)
    bst.insert(1000)
    bst.insert(350)
    bst.insert(1500)
    bst.insert(400)

    expect(bst.isBalanced(bst.root)).toEqual(false)

    bst.rebalance()
    expect(bst.isBalanced(bst.root)).toEqual(true)
})