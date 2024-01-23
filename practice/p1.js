function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function inorderTraversal(root) {
  const stack = [];
  const res = [];

  while (root || stack.length) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      root = stack.pop();
      res.push(root.val);
      root = root.right;
    }
  }

  return res;
}

// Create a proper binary tree
let root = new TreeNode(1);
root.left = null;
root.right = new TreeNode(2);
root.right.left = new TreeNode(3);

console.log("In-order Traversal:", inorderTraversal(root));
