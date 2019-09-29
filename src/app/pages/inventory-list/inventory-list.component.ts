import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ItemsService} from 'src/app/shared/items.repository';
import {Item} from 'src/app/shared/items.model';
import {Observable} from 'rxjs';

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

  public items$: Observable<Item[]>;
  public items: Item[];

  constructor(private itemService: ItemsService) {
    this.items$ = this.itemService.GetAll();
    this.items$.subscribe(console.log);
  }

  get() {
    this.items$.subscribe(console.log);
  }

  onSubmit() {
    console.log(this.inventoryForm);
    const item: Item = {
      name: this.inventoryForm.value.name,
      description: this.inventoryForm.value.description,
      quantity: this.inventoryForm.value.quantity
    };
    console.log(item);
    this.itemService.Create(item)
      .subscribe();
  }

  // save() {
  //   const item = {
  //     name: 'testName',
  //     quantity: 3,
  //     description: 'testDescription'
  //   };
  //   this.itemService.Create(item)
  //     .subscribe(console.log);
  // }
  public save() {

  }

  public update() {

  }

  public delete() {

  }

  // update() {
  //   const item = {
  //     id: '11d5364e-ee22-4c6f-9919-c055774e1566',
  //     name: 'testNameUpdated2',
  //     quantity: 2,
  //     description: 'testDescriptionUpdated2'
  //   };
  //   this.itemService.Update(item)
  //     .subscribe(console.log);
  // }
  //
  // delete() {
  //   const id = '6a0de265-9dfc-4c24-809d-b0ab6fc8e6c9';
  //   this.itemService.Delete(id)
  //     .subscribe(console.log);
  // }


  ngOnInit() {
  }
}
