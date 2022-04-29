import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {

  public notifications = [
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor leo ornare cras varius eget sit lacus. Condimentum eros, sit aenean nunc vestibulum in adipiscing viverra porta.Aliquet quam molestie vehicula sed.", date: "22nd Feb, 01:26 PM", isGreen: true
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor leo ornare cras varius eget sit lacus. Condimentum eros, sit aenean nunc vestibulum in adipiscing viverra porta.Aliquet quam molestie vehicula sed.", date: "22nd Feb, 01:26 PM", isGreen: false
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor leo ornare cras varius eget sit lacus. Condimentum eros, sit aenean nunc vestibulum in adipiscing viverra porta.Aliquet quam molestie vehicula sed.", date: "22nd Feb, 01:26 PM", isGreen: true
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor leo ornare cras varius eget sit lacus. Condimentum eros, sit aenean nunc vestibulum in adipiscing viverra porta.Aliquet quam molestie vehicula sed.", date: "22nd Feb, 01:26 PM", isGreen: true
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor leo ornare cras varius eget sit lacus. Condimentum eros, sit aenean nunc vestibulum in adipiscing viverra porta.Aliquet quam molestie vehicula sed.", date: "22nd Feb, 01:26 PM", isGreen: false
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor leo ornare cras varius eget sit lacus. Condimentum eros, sit aenean nunc vestibulum in adipiscing viverra porta.Aliquet quam molestie vehicula sed.", date: "22nd Feb, 01:26 PM", isGreen: true
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor leo ornare cras varius eget sit lacus. Condimentum eros, sit aenean nunc vestibulum in adipiscing viverra porta.Aliquet quam molestie vehicula sed.", date: "22nd Feb, 01:26 PM", isGreen: false
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
