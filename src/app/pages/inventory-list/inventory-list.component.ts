import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

export interface Item {
  name: string;
  quantity: number;
  description: string;
}

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent implements OnInit {
  inventoryForm = new FormGroup({
    name: new FormControl(''),
    quantity: new FormControl(''),
    description: new FormControl('')
  });

  private httpClient: HttpClient;

  constructor(private http: HttpClient) {
    this.httpClient = http;
  }

  public items: Item[] = [
    {name: 'shirt', quantity: 5, description: 'White shirt for men'},
    {name: 'top', quantity: 2, description: 'Nice sweater for outdoors'}
  ];

  get() {
    this.httpClient
      .get('https://localhost:44309/api/items')
      .subscribe((data) => console.log(data));
  }

  onSubmit() {
    console.log(this.inventoryForm);

    // this.httpClient
    //   .post('url');

    this.items.push({
      name: this.inventoryForm.controls.name.value,
      quantity: this.inventoryForm.controls.quantity.value,
      description: this.inventoryForm.controls.description.value
    });
  }

  ngOnInit() {
  }
}
