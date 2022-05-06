import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime } from "rxjs/operators";

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  showNotFound: boolean = false;

  searchMedicineFrm: FormGroup;
  products = [
    { name: 'Lisinopril' },
    { name: 'Levothyroxine' },
    { name: 'Gabapentin' },
    { name: 'Amlodipine' },
  ]

  constructor(private fb: FormBuilder) {
    this.searchMedicineFrm = this.fb.group({
      productName: []
    })
  }




  ngOnInit() {
    this.searchMedicineFrm.controls.productName.valueChanges.pipe(
      debounceTime(1000)
    ).subscribe((res) => {
      if (res) {
        this.showNotFound = this.products.some((e) => e.name.includes(res));
      }
    })
  }

}