import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  ptbr: BehaviorSubject<boolean> = new BehaviorSubject(true);
  public ptbrObservable = this.ptbr.asObservable(); 
  
  constructor() { 
    this.setPtbr();
  }

  setPtbr() {
    this.ptbr.next(true);
  }

  getLanguage(): Observable<boolean> {
    return this.ptbrObservable;
  }

  changeLanguage(ptbr: boolean): void {
    this.ptbr.next(ptbr? false : true);
  }
}