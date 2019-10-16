import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { NotFoundComponent } from './components/notfound/notfound.component';

const APP_ROUTES: Routes = [
    { path: '', component: BodyComponent },
    { path: 'body', component: BodyComponent },
    { path: 'notfound', component: NotFoundComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'notfound' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
