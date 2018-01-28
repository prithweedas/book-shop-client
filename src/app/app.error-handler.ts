import { ErrorHandler } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';

declare var Materialize;

export class AppErrorHandler implements ErrorHandler {
  handleError(err: any): void {
    // Oh My God! error.error.error.... :/
    if (err && err.error && err.error.error && err.error.error.message) {
      console.log(err.error.error.message);
      Materialize.toast(
        `<i class="material-icons">warning</i>${'<p>' +
          err.error.error.message +
          '</p>'}`,
        4000,
        'toast-styles'
      );
    }

    console.log('Handled By GLOBAL', err);
  }
}
