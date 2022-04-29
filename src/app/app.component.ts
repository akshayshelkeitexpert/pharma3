import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'notification', url: '/admin/notification', icon: 'warning' },
    { title: 'quoterequest', url: '/admin/quoterequest', icon: 'warning' },
    { title: 'replyquotation', url: '/admin/replyquotation', icon: 'mail' },
    { title: 'accountsetting', url: '/admin/accountsetting', icon: 'paper-plane' },
    { title: 'search', url: '/admin/search', icon: 'heart' },
    { title: 'authorizedvendor', url: '/admin/authorizedvendor', icon: 'archive' },
    { title: 'offers', url: '/admin/offers', icon: 'trash' },
    { title: 'associateslist', url: '/admin/associateslist', icon: 'warning' },
    { title: 'associatesDetails', url: '/admin/associatesDetails', icon: 'warning' },
    { title: 'associates', url: '/admin/associates', icon: 'warning' },
    { title: 'comments', url: '/admin/comments', icon: 'warning' },
    { title: 'offersone', url: '/admin/offersone', icon: 'warning' },
    { title: 'authdescription', url: '/admin/authdescription', icon: 'warning' },
    { title: 'documentview', url: '/admin/documentview', icon: 'warning' },
    { title: 'quotenotification', url: '/admin/quotenotification', icon: 'warning' },
    { title: 'quotedetails', url: '/admin/quotedetails', icon: 'warning' },
    { title: 'replyquotation', url: '/admin/replyquotation', icon: 'warning' },
    { title: 'quotes', url: '/admin/quotes', icon: 'warning' },
    { title: 'quotehistory', url: '/admin/quotehistory', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() { }
}
