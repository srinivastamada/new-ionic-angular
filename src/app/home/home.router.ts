import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { HomeGuard } from '../guards/home.guard';
import { UserDataResolver } from '../resolvers/user-data.resolver';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    canActivate: [HomeGuard],
    resolve:{
      userData: UserDataResolver
    },
    children: [
      {
        path: 'feed',
        loadChildren: () =>
          import('../pages/feed/feed.module').then(m => m.FeedPageModule)
      },
      {
        path: 'messages',
        loadChildren: () =>
          import('../pages/messages/messages.module').then(
            m => m.MessagesPageModule
          )
      },
      {
        path: 'notifications',
        loadChildren: () =>
          import('../pages/notifications/notifications.module').then(
            m => m.NotificationsPageModule
          )
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('../pages/settings/settings.module').then(
            m => m.SettingsPageModule
          )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRouter {}
