import { CityComponent } from './city/city.component';
import {Routes} from '@angular/router'
import { CityDetailComponent } from './city-detail/city-detail.component';
import { CityAddComponent } from './city/city-add/city-add.component';
//routing 
export const appRoutes:Routes = [
    { path: "city", component: CityComponent },
    { path: "citydetail/:cityId", component: CityDetailComponent },
    { path: "cityadd", component: CityAddComponent },
    { path: "**", redirectTo: "city", pathMatch: "full" },//default açılan sayfa city
 

];