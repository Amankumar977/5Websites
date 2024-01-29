function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let root = new TreeNode(5);
root.left = new TreeNode(2); // Create a new TreeNode for the left child
root.right = new TreeNode(6); // Create a new TreeNode for the right child

let isNotABst = false;
let prevNodeValue = 0;

var isValidBST = function (root) {
  if (root == null) {
    return true;
  }
  isValidBST(root.left);
  if (prevNodeValue >= root.val) {
    isNotABst = true;
  }
  prevNodeValue = root.val;
  isValidBST(root.right);
  return !isNotABst;
};

console.log(isValidBST(root));
