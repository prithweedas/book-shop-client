import { AuthService } from './../services/auth.service';
import { IItem } from './../models/items.model';
import { ItemsService } from './../services/items.service';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.scss']
})
export class ItemViewComponent implements OnInit {
  item: IItem;
  actions = new EventEmitter<string>();

  constructor(
    public authService: AuthService,
    private itemsService: ItemsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.itemsService.getItem(id).subscribe(data => (this.item = data.item));
  }
}
