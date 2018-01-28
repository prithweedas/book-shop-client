import { ErrorHandler } from '@angular/core';

export class AppErrorHandler implements ErrorHandler {
  handleError(err: any): void {
    // Oh My God! error.error.error.... :/
    if (err && err.error && err.error.error && err.error.error.message) {
      console.log(err.error.error.message);
    }

    console.log('Handled By GLOBAL', err);
  }
}
