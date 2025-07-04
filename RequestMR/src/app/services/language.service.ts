import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private currentLanguageSubject = new BehaviorSubject<string>('en');
  currentLanguage$ = this.currentLanguageSubject.asObservable();


  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'th']);
    this.translate.setDefaultLang('en');
  }

  switchLanguage(lang: string): void {
    this.translate.use(lang);
    this.currentLanguageSubject.next(lang);
  }
}
