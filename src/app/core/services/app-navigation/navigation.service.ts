import { Injectable, Inject } from '@angular/core';
import { Location, DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(
    private location: Location,
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {

  }

  back() {
    return this.location.back();
  }

  forward() {
    return this.location.forward();
  }

  navigateTo(routeName: any[] | string[]) {
    this.router.navigate(routeName);
  }

  navigateByUrl(url: string) {
    this.router.navigateByUrl(url);
  }
  navigateByUrlWithState(url: string, data : any) {
    this.router.navigateByUrl(url,data);
  }

  goToURL(url: string) {
    this.document.location.href = url;
  }

  navigateToWindow(url:string, target: '_blank' | '_self') {
    window.open(url, target);
  }

}
