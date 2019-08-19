import { Component, OnInit } from "@angular/core";
interface Item {
  name: string;
  quantity: number;
}
@Component({
  selector: "app-inventory-item",
  templateUrl: "./inventory-item.component.html",
  styleUrls: ["./inventory-item.component.css"]
})
export class InventoryItemComponent implements OnInit {
  public itemList: Item[] = [
    { name: "shirt", quantity: 5 },
    { name: "top", quantity: 2 }
  ];

  constructor() {}

  ngOnInit() {}
}
