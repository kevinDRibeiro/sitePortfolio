import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'skill-bullets',
  templateUrl: './skill-bullets.component.html',
  styleUrls: ['./skill-bullets.component.scss']
})
export class SkillBulletsComponent implements OnInit {
  
  @Input() level: number = 0;
  levelArray: number[] = [];
  emptyArray: number[] = [];

  constructor() { }

  ngOnInit(): void {
    this.levelArray = Array(this.level).map((x,i) => i);
    this.emptyArray = Array(this.getEmpty()).map((x,i) => i);
  }

  getEmpty(): number {
    return  5 - this.level;
  }

}
