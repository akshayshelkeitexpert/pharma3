export class ApplicationConstants {

  public static CONTENT_TYPE = 'application/json;charset=UTF-8';
  public static CONTENT_TYPE_BLOB = 'application/blob;charset=UTF-8';
  public static ACCEPT = '*/*; charset=UTF-8';
  public static ACCEPT_HEADERS = "Origin, Content-Type, Accept";
  public static ACCEPT_METHODS = "GET, POST, OPTIONS";
  public static ACCESS_CONTROL_ORIGIN = '*';

  public static ACCESS_TOKEN: string = "accessToken";

  public static REFRESH_TOKEN: string = "refreshToken";

  public static REQUEST_TYPE: string = "C";

  public static AT_EXPIRES_IN: string = "expiresIn";

  public static AT_LAST_REFRESH_TIME: string = "accessTokenLastRefreshTime";

  public static KEY_LANG_TO_USE: string = 'langToUse';

  public static DATE_FORMAT = "yyyy-MM-ddTHH:mm:ssZ";

  public static LOGGED_IN_USER = 'loggedInUser';

  public static USER_DETAILS = 'userDetails';

  public static ALLOW_FILES_EXTENSION = ['JPEG', 'JPG', 'PNG', 'BMP', 'PDF'];
  public static ALLOW_FILES_EXTENSION_MANIFEST = ['JPEG', 'JPG', 'PNG', 'PDF', 'CSV', 'DOCX', 'DOC', 'XLS'];
}


export enum ROLES_MASTER {
  SELLER = "SELLER",
  BUYER = "BUYER"
}

export const SELLER_MENUS = [
  { title: 'Account Settings', url: '/admin/accountsetting', icon: 'assets/icon/profile-menu-ico.svg' },
  { title: 'Offers', url: '/admin/offers', icon: 'assets/icon/offer-ico.svg' },
  { title: 'My Quotes', url: '/admin/quotenotification', icon: 'assets/icon/quotes-ico.svg' },
  { title: 'Associates', url: '/admin/associates', icon: 'assets/icon/assocites-ico.svg' },
  { title: 'Notification', url: '/admin/notification', icon: 'assets/icon/notification-ico.svg' },
  { title: 'Quote Given History', url: '/admin/quotehistory', icon: 'assets/icon/quotes-his-ico.svg' },
  { title: 'Want to Buy/Sell', url: 'admin/selection', icon: 'assets/icon/notification-ico.svg' },
  { title: 'Request to Admin', url: '/admin/requestadmin', icon: 'assets/icon/admin-menu-ico.svg' },
  { title: 'Reports', icon: 'assets/icon/report-menu-ico.svg' },
  {
    title: 'Logout', url: '/auth', icon: 'assets/icon/logout-ico.svg'
  },
]


export const BUYER_MENUS = [

  { title: 'Account Settings', url: '/admin/accountsetting', icon: 'assets/icon/profile-menu-ico.svg' },
  { title: 'My Requested Quote', url: '/admin/quotes', icon: 'assets/icon/quotes-ico.svg' },
  { title: 'Selected Vendor', url: '/admin/authorizedvendor', icon: 'assets/icon/vendor-ico.svg' },
  // { title: 'quoterequest', url: '/admin/quoterequest', icon: 'warning' },
  { title: 'Want to Buy/Sell', url: 'admin/selection', icon: 'assets/icon/notification-ico.svg' },
  { title: 'Associates', url: '/admin/associates', icon: 'assets/icon/assocites-ico.svg' },
  { title: 'Notification', url: '/admin/notification', icon: 'assets/icon/notification-ico.svg' },

  { title: 'Offers', url: '/admin/offers', icon: 'assets/icon/offer-ico.svg' },
  { title: 'Request to Admin', url: '/admin/requestadmin', icon: 'assets/icon/admin-menu-ico.svg' },
  { title: 'comments', url: '/admin/comments', icon: 'warning' },
  {
    title: 'Logout', url: '/auth', icon: 'assets/icon/logout-ico.svg'
  }
]
