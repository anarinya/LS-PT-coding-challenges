/*
 * Write a function that accepts a tree data structure and a value to search for.
 * Search for the value using a breadth-first search algorithm.
 * Example:
 * const tree = {
 *	x: 1,
 *	y: 1,
 *	z: {
 *		x: 1,
 *		y: 1,
 *		z: 1,
 *		},
 *	a: 2,
 * };
 * breadthFirstSearch(tree, 2);// will return true before it recursively searches `z`
 */
const tree = { x: 1, y: 1, z: { x: 1, y: 1, z: 1 }, a: 2 };
const tree2 = {x: {x: 1, y: 1, z: {x: 1, y: {a: 2}}}, y: {x: 1, y: 1, z: {}}, z: {x: 1}}

const breadthFirstSearch = (tree, value) => {
  let found = false;
  
  const searchBranch = (branch) => {
    const leaves = Object.keys(branch);
    const totalLeaves = leaves.length;
    
    for (let i = 0; i < totalLeaves; i++) {
      if (branch[leaves[i]] === value) {
        found = true;
        return;
      }
    }
    
    for (let i = 0; i < totalLeaves; i++) {
      if (typeof branch[leaves[i]] === 'object') {
        return searchBranch(branch[leaves[i]]);
      }
    }
  };
  
  searchBranch(tree);
  return found;
}

console.log(breadthFirstSearch(tree2, 2));