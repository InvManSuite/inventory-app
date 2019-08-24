import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

export interface Item {
  name: string;
  quantity: number;
}

@Component({
  selector: "app-inventory-list",
  templateUrl: "./inventory-list.component.html",
  styleUrls: ["./inventory-list.component.css"]
})
export class InventoryListComponent implements OnInit {
  name = new FormControl("");
  quantity = new FormControl("");

  constructor() {}

  public itemList: Item[] = [
    { name: "shirt", quantity: 5 },
    { name: "top", quantity: 2 }
  ];

  ngOnInit() {}

  // TODO: Implement a dynamic list of inventory items (name, description, quantity)
}
