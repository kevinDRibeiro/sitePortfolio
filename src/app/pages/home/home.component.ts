import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ptbr?: boolean;
  constructor(private language: LanguageService) { }

  ngOnInit(): void {
    this.language.ptbrObservable.subscribe( ptbrObservable => this.ptbr = ptbrObservable);
  }

  scrollTop() : void {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }

}
