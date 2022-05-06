import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ApplicationConstants } from '../../constants/application.constants';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  public currentUser = new Subject();

  constructor(
  ) {

  }

  getAttribute(key: string) {
    let response: any = localStorage.getItem(key) || null;
    return JSON.parse(response);
  }

  setAttribute(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  clearStorage() {
    localStorage.clear();
  }

  getSessionAttribute(key: string) {
    let response: any = sessionStorage.getItem(key);
    return JSON.parse(response);
  }

  setSessionAttribute(key: string, value: any) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  clearSession() {
    sessionStorage.clear();
  }

  deleteAttribute(key: string) {
    localStorage.removeItem(key);
    sessionStorage.removeItem(key);
  }


}
