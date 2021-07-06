import * as React from "react";
import { insert, main, formTree } from "../modal/algo";
import "./../assets/scss/Tree.scss";
import parse from "html-react-parser";
import { useState, useEffect } from "react";
import { TreeNode } from "../modal/TreeNode";

const Tree = (props: any) => {
  const [currentHtml, setCurrentHtml] = useState("");
  const [treeData, setTreeData] = useState("");

  const renderTree = () => {
    let root: TreeNode = null;
    treeData
      .split(",")
      .forEach((data) => (root = insert(root, Number.parseInt(data))));
    setCurrentHtml(formTree(root, ""));
  };

  return (
    <>
      <label>Please enter comma-seperated data: </label>
      <input
        name="TreeData"
        value={treeData}
        onChange={(e) => setTreeData(e.currentTarget.value)}
      ></input>
      <button onClick={renderTree}>Render</button>
      <div className="tree">{parse(currentHtml)}</div>
    </>
  );
};

export default Tree;
