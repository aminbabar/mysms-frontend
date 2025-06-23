import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = () => {
    const router = inject(Router);
    const token = localStorage.getItem('auth_token');
    return token ? true : router.parseUrl('/');
};

export const guestGuard: CanActivateFn = () => {
    const router = inject(Router);
    const token = localStorage.getItem('auth_token');
    return token ? router.parseUrl('/message') : true;
};
