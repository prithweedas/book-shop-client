import { ItemsService } from './../services/items.service';
import { Component, OnInit } from '@angular/core';
import { IItem } from '../models/items.model';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {
  items: IItem[];

  constructor(private ItemsService: ItemsService) {}

  ngOnInit() {
    this.ItemsService.getAllItems().subscribe(
      data => (this.items = data.items)
    );
  }
}
