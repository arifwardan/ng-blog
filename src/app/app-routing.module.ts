import { Covid19Component } from './covid19/covid19.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatesComponent } from './covid19/states/states.component';
import { CountriesComponent } from './covid19/countries/countries.component';
import { ContinentsComponent } from './covid19/continents/continents.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'covid19', component: Covid19Component},
  {path: 'covid19/states', component: StatesComponent},
  {path: 'covid19/continents', component: ContinentsComponent},
  {path: 'covid19/countries', component: CountriesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
