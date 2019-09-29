import {Component, OnInit, Input} from '@angular/core';
import {Item} from '../../shared/items.model';

@Component({
  selector: 'app-inventory-item',
  templateUrl: './inventory-item.component.html',
  styleUrls: ['./inventory-item.component.css']
})
export class InventoryItemComponent implements OnInit {
  @Input() item: Item;

  constructor() {
  }

  ngOnInit() {
  }
}
