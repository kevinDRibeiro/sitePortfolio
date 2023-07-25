import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  ptbr?: boolean;
  constructor(private language: LanguageService) { }

  ngOnInit(): void {
    this.language.ptbrObservable.subscribe( ptbrObservable => this.ptbr = ptbrObservable);
  }

}
