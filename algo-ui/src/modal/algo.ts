import { TreeNode } from "./TreeNode";

export const main = () => {
    let input = [5,3,4,6];
    console.log(input);
    let root: TreeNode | null = null;
    input.forEach(data => root = insert(root, data));
    return formTree(root, "");
}

export const insert = (root: TreeNode | null, data: number): TreeNode => {
    if(!root){

        return new TreeNode(data);
    }
    if(data < root.value) {
        root.left = insert(root.left, data);
    } else {
        root.right = insert(root.right, data);
    }
    return root;
}

export const formTree = (root: TreeNode | null, currentHtml: string) => {
    if(root == null) {
        return currentHtml;
    } else {
        return "<ul>" + addLI(root, "") + "</ul>";
    }
}

function addLI(treeNode: TreeNode | null, currentHtml: string): any {
    if(treeNode == null){
        return "<li></li>"; //for empty branch
    }
    console.log("addLI", treeNode.value);
    currentHtml += "<li>" + addAnchor(treeNode.value);
    console.log("addLI => currentHtml:", currentHtml);
    if(treeNode.left || treeNode.right){
        console.log("left or right of:", treeNode.value);
        return currentHtml + "<ul>" + addLI(treeNode.left, "") + addLI(treeNode.right, "") + "</ul></li>"
    } else{
        return currentHtml + "</li>";
    }
}

function addAnchor(value: number): string {
    return `<a href="#">${value}</a>`
}

main();
