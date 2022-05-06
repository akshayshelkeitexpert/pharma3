import { Injectable } from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class Utility {

  public static isNull(data: string | number | boolean | Date | any): string | number | boolean | Date | any {
    if (data === null || data === '' || data === undefined) {
      return '';
    } else {
      return data;
    }
  }

}