export class TreeNode {
    name: string;
    selected : boolean;
    childs : TreeNode[];

    constructor(name: string, childs: TreeNode[]){
        this.name = name;
        this.childs = childs;
    }
}