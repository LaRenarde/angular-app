import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-admin-app';
  items: NbMenuItem[] = [
    {
      title: 'accueil',
      link: '/',
      icon: 'home-outline'
    },
    {
      title: 'S\'identifier',
      link: '/auth/login',
      icon: 'log-in-outline'
    },
    {
      title: 'service',
      link: '/service',
      icon: 'settings-2-outline'
    },
    {
      title: 'contact',
      link: '/contact',
      icon: 'at-outline'
    },
    {
      title: 'customers',
      link: '/customers',
      icon: 'smiling-face-outline',
      expanded: true,
      children: [
        {
          title: 'index',
          link: '/customers/listecustomers',
          icon: 'list-outline',
        },
        {
          title: 'Ajouter un client',
          link: '/customers/gestion-customers',
          icon: 'plus-circle-outline',
        }
      ],
    },
    {
      title: 'users',
      link: '/users',
      icon: 'person-outline',
      expanded: true,
      children: [
        {
          title: 'index',
          link: '/users/liste',
          icon: 'list-outline',
        },
        {
          title: 'Ajouter un utilisateur',
          link: '/users/gestion',
          icon: 'plus-circle-outline',
        }
      ],
    }
   ];

}
