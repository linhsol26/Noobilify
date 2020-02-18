import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent  {
  items = [
    {
      title: 'Profile',
      expanded: true,
      children: [
        {
          title: 'Change Password',
          link: [], // goes into angular `routerLink`
        },
        {
          title: 'Privacy Policy',
          url: '#', // goes directly into `href` attribute
        },
        {
          title: 'Logout',
          link: [],
        },
      ],
    },
    {
      title: 'Playlist',
      children: [
        {
          title: 'pls1',
          link: [], // goes into angular `routerLink`
        },
        {
          title: 'pls2',
          url: '#', // goes directly into `href` attribute
        },
        {
          title: 'pls3',
          link: [],
        },
      ],
    },
    {
      title: 'Favorite Songs',
      // children: [
      //   {
      //     title: 'First Order',
      //     link: [], // goes into angular `routerLink`
      //   },
      //   {
      //     title: 'Second Order',
      //     url: '#', // goes directly into `href` attribute
      //   },
      //   {
      //     title: 'Third Order',
      //     link: [],
      //   },
      // ],
    },
  ];
}
