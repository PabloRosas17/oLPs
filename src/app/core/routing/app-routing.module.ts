import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from '../../components/blog/blog.component';
import { DashboardComponent } from '../authenticated/dashboard/dashboard.component';
import { AuthGuard } from '../fireauth/auth.guard';
import { FrontComponent } from '../../components/front/front.component';
import { PortalComponent } from '../../modules/authorized/portal/portal.component';

export const mAppRoutes: Routes = [
    { path: '', component: FrontComponent },
    { path: '#', component: FrontComponent },
    { path: 'front', component: FrontComponent },
    { path: 'blog', component: BlogComponent},
    { path: 'portal', component: PortalComponent},
    { path: 'mdashboard', component: DashboardComponent, canActivate: [AuthGuard]},
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [ RouterModule.forRoot(mAppRoutes)],
    exports: [ RouterModule ]
})

export class AppRoutingModule { }
