import { inject } from '@angular/core';
import {
  ActivatedRoute,
  CanActivateFn,
  Router,
  UrlTree,
} from '@angular/router';
import { ShortenService } from '../components/services/shorten.service';

export const redirectDestinationGuard: CanActivateFn = (route, state) => {
  const shortenService = inject(ShortenService);
  const router = inject(Router);
  let shortUrl = route.params['shortUrl'];
  shortenService.CheckProtected(shortUrl).subscribe((res) => {
    if (res.data) {
      router.navigate(['/password', shortUrl]);
    } else {
      shortenService.GetUrlDestination(shortUrl).subscribe((res) => {
        if (res.success) {
          window.location.href = res.data;
        } else {
          window.location.href = '/';
        }
      });
    }
  });
  return false;
};
