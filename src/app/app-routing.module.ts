import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RecentlyViewComponent } from './pages/recently-view/recently-view.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    // canActivate: [AuthGuard],
    children: [
      { path: '', component: ProfileComponent },
      { path: 'profile', component: ProfileComponent },
      // { path: 'wishlist', component: WishlistComponent },
      // { path: 'orders', component: OrdersComponent },
      // { path: 'settings', component: SettingsComponent },
      { path: 'recently-viewed', component: RecentlyViewComponent },
      // { path: '', redirectTo: 'profile', pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
