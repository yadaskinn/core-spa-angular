import { CityComponent } from './city/city.component';
import {Routes} from '@angular/router'
import { CityDetailComponent } from './city-detail/city-detail.component';
//routing 
export const appRoutes:Routes = [
    { path: "city", component: CityComponent },
    { path: "cityDetail/:cityId", component: CityDetailComponent },
    { path: "**", redirectTo: "city", pathMatch: "full" },//default açılan sayfa city
 

];