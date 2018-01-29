import { IItem } from './../models/items.model';
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { RESOURCE_URL } from '../MagicString';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ItemsService {
  constructor(private http: HttpClient) {}

  getAllItems() {
    return this.http
      .get(RESOURCE_URL + '/items', { observe: 'response' })
      .map((res: HttpResponse<any>) => {
        console.log(res.body.items)
        res.body.items = res.body.items.map((e:IItem) => {
          e.image = RESOURCE_URL + '/' +  e.image; 
          return e;
        });

        console.log(res.body.items)
        
        return res.body;
      })
      .catch((err: HttpErrorResponse) => Observable.throw(err));
  }
}
