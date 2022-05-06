import { Injectable } from "@angular/core";
import { SharedDataService } from "../shared-data/shared-data.service";
import { NavigationService } from "../app-navigation/navigation.service";
import { ApplicationConstants } from "../../constants/application.constants";
import { Subject } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public authError = new Subject<string>();

  constructor(
    private sharedData: SharedDataService,
    private nav: NavigationService,
  ) { }

  get getUserDetail() {
    const userDetails = this.sharedData.getAttribute(
      ApplicationConstants.USER_DETAILS
    );
    return userDetails;
  }

  /**
   * Responsible to check the user roles
   * @param requestedRoles accept roles from
   * @returns
   */
  public checkAuthRole(requestedRoles: string[]): boolean {
    let userDetails = this.sharedData.getAttribute(ApplicationConstants.USER_DETAILS);
    let isRole: boolean = false;
    if (userDetails && null != userDetails) {
      let userRolesArray: string[] = userDetails.roles.split(",");
      isRole = this.hasRoles(userRolesArray, requestedRoles)
    }
    return isRole
  }

  /**
   * HELPER method fot checkAuthRoles()
   * @param text
   * @param values
   * @returns
   */
  private hasRoles(text: string[], values: string[]) {
    return values.some(function (val: string) {
      return text.includes(val);
    });
  }

  /**
   * @param result to save the token info at client side
   */
  async saveUserDetail(userDtls: any) {
    this.sharedData.setAttribute(ApplicationConstants.USER_DETAILS, userDtls);
    this.sharedData.currentUser.next(userDtls);
  }


  /**
   * Used to redirect after login by his role or
   */
  redirectByRole(): boolean {
    // if wants to redirect
    if (this.isLoggedIn()) { // check is logged-in
      this.nav.navigateTo(['/admin'])
      return true;
    } else {
      this.nav.navigateTo(['/auth'])
      return false;
    }
  }



  /**
   * @returns the is_user_logged_in or not
   */
  isLoggedIn(): Boolean {
    return Boolean(
      this.sharedData.getSessionAttribute(ApplicationConstants.USER_DETAILS)
    );
  }

  /**
   * logout the user
   * this should clear all localStorage
   */
  logout() {
    this.clearAuthDetails();
    //this.sharedData.deleteAttribute(ApplicationConstants.USER_DETAILS);
    this.nav.navigateTo(["/"]);
  }



  /**
   * delete all current user data before fresh login
   */
  clearAuthDetails() {
    this.sharedData.clearStorage();
    this.sharedData.clearSession();
  }

}
