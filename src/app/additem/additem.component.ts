import { Component, OnInit } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';

declare var Materialize;

@Component({
  selector: 'app-aditem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.scss']
})
export class AdditemComponent implements OnInit {
  addItemFormData = new FormData();

  constructor() {}

  add(data) {
    Object.keys(data).forEach(key =>
      this.addItemFormData.append(key, data[key])
    );
    console.log(this.addItemFormData.get('image'));
    console.log(this.addItemFormData.get('name'));
    console.log(this.addItemFormData.get('price'));
    console.log(this.addItemFormData.get('publishYear'));
    console.log(this.addItemFormData.get('description'));
    console.log(this.addItemFormData.get('author'));
  }

  onFileSelection(e) {
    const imgPattern = new RegExp('^image*');
    if (!imgPattern.test(e.target.files[0].type)) {
      Materialize.toast(
        `<i class="material-icons">warning</i><p>Not an Image</p>`,
        4000,
        'toast-styles'
      );
      return;
    }
    this.addItemFormData.append('image', e.target.files[0]);
  }

  ngOnInit() {}
}
