import { Component, OnInit, Output } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  ptbr?: boolean;
  constructor(private language: LanguageService) { }

  ngOnInit(): void {
    this.language.ptbrObservable.subscribe( ptbrObservable => this.ptbr = ptbrObservable);
  }

  changeLanguage() {
    this.language.changeLanguage(this.ptbr? true : false);
  }

  scroll() {
    const x = document.getElementById('links');
    x?.scrollIntoView();
  }
}
