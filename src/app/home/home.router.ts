import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: 'feed',
        loadChildren: () =>
          import('../pages/feed/feed.module').then(m => m.FeedPageModule)
      },
      {
        path: 'about',
        loadChildren: () =>
          import('../pages/about/about.module').then(m => m.AboutPageModule)
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('../pages/contact/contact.module').then(
            m => m.ContactPageModule
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
