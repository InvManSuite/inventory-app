import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ItemsService} from 'src/app/shared/items.repository';

export interface Item {
  name: string;
  quantity: number;
  description: string;
  id?: string;
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

  public items: Item[] = [
    {name: 'shirt', quantity: 5, description: 'White shirt for men'},
    {name: 'top', quantity: 2, description: 'Nice sweater for outdoors'}
  ];

  constructor(private itemService: ItemsService) {
  }

  get() {
    this.itemService.GetAll()
      .subscribe(console.log);
    this.itemService.GetById('11d5364e-ee22-4c6f-9919-c055774e1566')
      .subscribe(console.log);
  }

  save() {
    const item = {
      name: 'testName',
      quantity: 3,
      description: 'testDescription'
    };
    this.itemService.Create(item)
      .subscribe(console.log);
  }

  onSubmit() {
    console.log(this.inventoryForm);

    this.items.push({
      name: this.inventoryForm.controls.name.value,
      quantity: this.inventoryForm.controls.quantity.value,
      description: this.inventoryForm.controls.description.value
    });
  }

  ngOnInit() {
  }
}
