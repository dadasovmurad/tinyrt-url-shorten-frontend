import { CanActivateFn, UrlTree } from '@angular/router';

export const passwordValidationGuard: CanActivateFn = (route, state) => {
  const parameter = route.paramMap.get('shortUrl');
  if (parameter && parameter.length >= 3){
    return true;
  }

  return new UrlTree();
};
