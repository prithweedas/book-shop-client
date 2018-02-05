import { Component, OnInit, Input } from '@angular/core';
import { IItem } from '../models/items.model';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {
  @Input('item') item: IItem;

  constructor() {}

  ngOnInit() {}
}
