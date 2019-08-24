import { Component, OnInit, Input } from "@angular/core";
import { Item } from "../inventory-list/inventory-list.component";

@Component({
  selector: "app-inventory-item",
  templateUrl: "./inventory-item.component.html",
  styleUrls: ["./inventory-item.component.css"]
})
export class InventoryItemComponent implements OnInit {
  @Input() item: Item;

  constructor() {}

  ngOnInit() {}
}
