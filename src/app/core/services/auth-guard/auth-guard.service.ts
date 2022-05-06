import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ApplicationConstants, Lang } from '../../constants/application.constants';
import { MessageType } from '../../constants/errors.constatnts';
import { NavigationService } from '../app-navigation/navigation.service';
import { AuthService } from '../auth/auth.service';
import { NotificationService } from '../notification/notification.service';
import { SharedDataService } from '../shared-data/shared-data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(
    private sharedService: SharedDataService,
    private nav: NavigationService,
    private authService: AuthService,
    private notificationService: NotificationService,
    public translate: TranslateService,
  ) { }

  canActivate(
    activatedRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.checkIsAuthorized(ApplicationConstants.USER_DETAILS, activatedRoute);
  }

  checkIsAuthorized(key: string, activateSnp: ActivatedRouteSnapshot): boolean {
    let flag = this.sharedService.getSessionAttribute(key)
    let roles = activateSnp.data.roles;
    if (flag) {
      // this will be true if user is logged in 
      if (!!roles) {
        // this is to check is roles provided to the route
        if (this.authService.checkAuthRole(roles)) {
          // if roles are provided validate the requested roles
          return true; // if roles are available then can redirect
        } else {
          // if roles are not available then redirect false
          this.showUnathorise();
          return false;
        }
      } else {
        // if roles are not provided no need to check them as theirs availability
        return true;
      }
    } else { // if user is not logged in redirect to un-auth and return false
      this.nav.navigateTo(['/'])
      return false
    }

  }

  showUnathorise() {
    const lang = this.sharedService.getAttribute(ApplicationConstants.LANGUAGE) || Lang.EN;
    this.translate.use(lang);
    this.translate.getTranslation(lang).subscribe(currentLangObj => {
      const msg = currentLangObj[''];
      this.notificationService.showMessage(msg, MessageType.ERROR);
    });
  }

}
