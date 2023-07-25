import { Component, OnInit } from '@angular/core';
import { Skill } from '../../shared/model/skill';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  ptbr? : boolean;
  front: Skill[] = [{name: 'Angular', level: 4},{name: 'React', level: 3},{name: 'Typescript', level: 4}];
  back: Skill[] = [{name: 'Java', level: 3}, {name: 'SpringBoot', level: 2}, {name: 'Nodejs', level: 3}];
  utilities: Skill[] = [{name: 'Bootstrap', level: 4}, {name: 'Inglês', level: 4}, {name: 'Figma', level: 4}];
  constructor(private language: LanguageService) { }

  ngOnInit(): void {
    this.language.ptbrObservable.subscribe( ptbrObservable => this.ptbr = ptbrObservable);
  }

}
