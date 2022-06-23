/**
 * TreeNode - each node can have zero or more children
 */
class TreeNode {
  constructor(value) {
    this.value = value;
    this.descendants = [];
  }
}
module.exports = TreeNode;
