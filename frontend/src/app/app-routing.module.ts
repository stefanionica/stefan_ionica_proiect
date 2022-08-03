import { NgModule } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { StoreComponent } from './store/store.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'about', component: AboutComponent, title: 'About Us' },
  { path: 'store', component: StoreComponent, title: 'Store' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [Title],
  exports: [RouterModule]
})
export class AppRoutingModule { }
