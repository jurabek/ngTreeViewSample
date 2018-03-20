import { Component, OnInit, Input } from '@angular/core';
import { TreeNode } from 'models/tree-node';

@Component({
  selector: 'tree-view',
  template:`
  <ul>
    <li *ngFor="let item of items">
      {{item.name}}
      <tree-view [items]="item.childs"></tree-view>
    </li>
</ul>`
})
export class TreeView {

  @Input() items: TreeNode [];
  constructor() { }
}
