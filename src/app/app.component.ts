import { Component } from '@angular/core';
import { TreeNode } from 'models/tree-node';

@Component({
  selector: 'app-root',
  template:`<h1>TreeView</h1>
  <tree-view [items]="myData"></tree-view>`
})

export class AppComponent {
  myData : TreeNode[];
 
  constructor(){
    
    let firstChild = new TreeNode("Foods", [new TreeNode("Osh", null), new TreeNode("Qaburdoq", null)]);

    let secondChild = new TreeNode("Drinks", [new TreeNode("Pivacha", null), new TreeNode("Araqcha", null)]);

    this.myData = [firstChild,secondChild]
  }
}
