import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-christmas-tree',
  templateUrl: './christmas-tree.component.html',
  styleUrls: ['./christmas-tree.component.scss']
})
export class ChristmasTreeComponent implements OnInit {
  treeRows: string[][] = [];
  ornaments = ['🎄', '🎁', '🎀', '⚡', '❄️', '🔔'];

  ngOnInit() {
    this.generateTree();
  }

  private generateTree() {
    const height = 7;
    for (let i = 0; i < height; i++) {
      const row: string[] = [];
      const width = (i * 2) + 1;
      for (let j = 0; j < width; j++) {
        row.push(this.ornaments[Math.floor(Math.random() * this.ornaments.length)]);
      }
      this.treeRows.push(row);
    }
  }
}
