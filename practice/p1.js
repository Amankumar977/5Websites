function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let root = new TreeNode(15);
root.left = new TreeNode(10);
root.right = new TreeNode(20);
root.left.left = new TreeNode(8);
root.left.right = new TreeNode(12);
root.right.left = new TreeNode(16);
root.right.right = new TreeNode(25);
let searchNumber = (root, key) => {
  if (root != null) {
    if (root.val == key) {
      return true;
    } else if (root.val > key) {
      return searchNumber(root.left, key);
    } else if (root.val < key) {
      return searchNumber(root.right, key);
    }
  }
  return false;
};
console.log(searchNumber(root, 8586));
