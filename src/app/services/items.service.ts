import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { RESOURCE_URL } from '../MagicString';

@Injectable()
export class ItemsService {
  constructor(private http: HttpClient) {}

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
