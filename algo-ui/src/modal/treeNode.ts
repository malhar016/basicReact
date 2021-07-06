export class TreeNode {
    value: number;
    isCurrent: boolean = false;
    left: TreeNode | null = null;
    right: TreeNode | null = null;

    constructor(value: number){
        this.value = value;
    }
}


// export const inOrder = (root: TreeNode, arr: number[]): number[] => {
//     if(root == null){
//         return arr;
//     }
//     inOrder(root.left, arr);
//     arr.push(root.value);
//     inOrder(root.right, arr);
//     return arr;
// }

// export const levelOrder = (root: TreeNode) => {
//     const stack: TreeNode[] = [];
//     stack.push(root);
//     while(stack.length){
//         let [{value, left, right}] = stack.splice(0,1);
//         process.stdout.write(value + " ");
//         if(left){
//             stack.push(left);
//         }
//         if(right){
//             stack.push(right);
//         }
//     }    
// }

