import { Routes } from '@angular/router';
import { AboutUs } from './about-us/about-us';
import { Home } from './home/home';
import { Current } from './current/current';
import { Watsapp } from './watsapp/watsapp';
import { Goals } from './goals/goals';

export const routes: Routes = [
	{ path: '', component: Home },
	{ path: 'wer-mir-sind', component: AboutUs },
	{ path: 'usi-ziel', component: Goals },
	{ path: 'aktuell', component: Current },
	{ path: 'watsapp', component: Watsapp },
	{ path: '**', redirectTo: '' },
];
