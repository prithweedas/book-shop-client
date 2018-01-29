import { IItem } from './../models/items.model';
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { RESOURCE_URL } from '../MagicString';

@Injectable()
export class ItemsService {
  constructor(private http: HttpClient) {}

  getAllItems() {
    return this.http
      .get(RESOURCE_URL + '/items', { observe: 'response' })
      .map((res: HttpResponse<any>) => {
        res.body.items = res.body.items.map((e: IItem) => {
          e.image = RESOURCE_URL + '/' + e.image;
          return e;
        });
        return res.body;
      })
      .catch((err: HttpErrorResponse) => Observable.throw(err));
  }

  addItem(data) {
    const addItemFormData = new FormData();
    Object.keys(data).forEach(key => addItemFormData.append(key, data[key]));
    return this.http
      .post(RESOURCE_URL + '/items', addItemFormData, {
        observe: 'response'
      })
      .map((res: HttpResponse<any>) => res.body)
      .catch((err: HttpErrorResponse) => Observable.throw(err));
  }
}
