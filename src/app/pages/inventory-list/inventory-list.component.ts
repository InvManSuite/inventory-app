import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

export interface Item {
  name: string;
  quantity: number;
  description?: string;
}

@Component({
  selector: "app-inventory-list",
  templateUrl: "./inventory-list.component.html",
  styleUrls: ["./inventory-list.component.css"]
})
export class InventoryListComponent implements OnInit {
  inventoryForm = new FormGroup({
    name: new FormControl(""),
    quantity: new FormControl("")
  });

  constructor() {}

  public itemList: Item[] = [
    { name: "shirt", quantity: 5, description: '' },
    { name: "top", quantity: 2, description: '' }
  ];

  onSubmit() {
    console.log(this.inventoryForm);

    this.itemList.push({
      name: this.inventoryForm.value['name'],
      quantity: this.inventoryForm.value['quantity']
    });
  }
  ngOnInit() {}
}
