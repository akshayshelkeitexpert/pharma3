import { Component } from '@angular/core';
import { BUYER_MENUS, ROLES_MASTER, SELLER_MENUS } from './core/constants/application.constants';
import { SharedDataService } from './core/services/shared-data/shared-data.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public appPages: any[] = BUYER_MENUS;

  // ------------- buyer----------------


  // { title: 'replyquotation', url: '/admin/replyquotation', icon: 'mail' },
  // { title: 'accountsetting', url: '/admin/accountsetting', icon: 'paper-plane' },
  // { title: 'search', url: '/admin/search', icon: 'heart' },
  // { title: 'authorizedvendor', url: '/admin/authorizedvendor', icon: 'archive' },
  // { title: 'offers', url: '/admin/offers', icon: 'trash' },
  // { title: 'associateslist', url: '/admin/associateslist', icon: 'warning' },
  // { title: 'associatesDetails', url: '/admin/associatesDetails', icon: 'warning' },
  // { title: 'associates', url: '/admin/associates', icon: 'warning' },
  // { title: 'comments', url: '/admin/comments', icon: 'warning' },
  // { title: 'offersone', url: '/admin/offersone', icon: 'warning' },
  // { title: 'authdescription', url: '/admin/authdescription', icon: 'warning' },
  // { title: 'documentview', url: '/admin/documentview', icon: 'warning' },
  // { title: 'quotenotification', url: '/admin/quotenotification', icon: 'warning' },
  // { title: 'quotedetails', url: '/admin/quotedetails', icon: 'warning' },
  // { title: 'replyquotation', url: '/admin/replyquotation', icon: 'warning' },
  // { title: 'quotes', url: '/admin/quotes', icon: 'warning' },
  // { title: 'quotehistory', url: '/admin/quotehistory', icon: 'warning' },
  // { title: 'quoterequest', url: '/admin/quoterequest', icon: 'warning' },
  // { title: 'offerdetails', url: '/admin/offerdetails', icon: 'warning' },
  // { title: 'selectvendor', url: '/admin/selectvendor', icon: 'warning' },

  // { title: 'requestadmin', url: '/admin/requestadmin', icon: 'warning' },
  // { title: 'Logout', url: '/auth', icon: 'warning' },

  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(
    private sharedData: SharedDataService
  ) { }

  ngOnInit(): void {
    this.sharedData.currentUser.subscribe((resp: any) => {
      this.setMenus(resp.role);
    })
  }

  setMenus(role: ROLES_MASTER.SELLER | ROLES_MASTER.BUYER) {
    if (role == ROLES_MASTER.BUYER) {
      this.appPages = BUYER_MENUS;
    } else if (role == ROLES_MASTER.SELLER) {
      this.appPages = SELLER_MENUS
    }
  }
}
// { title: 'Offers', url: '/admin/offers', icon: 'assets/icon/offer-ico.svg' },
// { title: 'My Quotes', url: '/admin/quotes', icon: 'assets/icon/quotes-ico.svg' },