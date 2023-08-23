import {
  Injectable,
  ErrorHandler,
  Inject,
  Injector,
  NgZone,
} from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ExceptionHandlerService implements ErrorHandler {
  constructor(
    @Inject(Injector) private readonly injector: Injector,
    private zone: NgZone,
  ) {}

  private get toastService() {
    return this.injector.get(ToastrService);
  }

  handleError(error: any): void {
    let statusCode = error.status;
    switch (statusCode) {
      case 400:
        this.zone.run(() =>
        this.toastService.error(error.error.message, 'Error')
        );
        break;
        case 404:
          window.location.href = '/'
          break;
      default:
        this.zone.run(() =>
          this.toastService.error(error.error.Message, 'Server error')
        );
    }
  }
}
