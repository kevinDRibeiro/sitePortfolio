import { Component, Input, OnInit } from '@angular/core';
import { Skill } from '../model/skill';

@Component({
  selector: 'skill-set',
  templateUrl: './skill-set.component.html',
  styleUrls: ['./skill-set.component.scss']
})
export class SkillSetComponent implements OnInit {

  @Input() skills: Skill[] = [];
  @Input() title: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
