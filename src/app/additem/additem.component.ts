import { Component, OnInit } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';

import { ItemsService } from '../services/items.service';
import { Router } from '@angular/router';

declare var Materialize;

@Component({
  selector: 'app-aditem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.scss']
})
export class AdditemComponent implements OnInit {
  image;

  constructor(private itemService: ItemsService, private router: Router) {}
  ngOnInit() {}
  add(data) {
    data.image = this.image;
    this.itemService.addItem(data).subscribe(result => {
      console.log(result);
      Materialize.toast(
        `<i class="material-icons">check</i><p>Item Added</p>`,
        4000,
        'toast-styles-success'
      );
      this.router.navigateByUrl('/'); // this url will change later
    });
  }

  onFileSelection(e) {
    const imgPattern = new RegExp('^image*');
    if (!imgPattern.test(e.target.files[0].type)) {
      Materialize.toast(
        `<i class="material-icons">warning</i><p>Not an Image</p>`,
        4000,
        'toast-styles-warning'
      );
      return;
    }
    this.image = e.target.files[0];
  }
}
