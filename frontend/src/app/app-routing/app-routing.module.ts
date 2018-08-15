import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../user/login/login.component';
import { HomeComponent } from '../home/home.component';
import { SubjectlistComponent } from '../admin/subjectlist/subjectlist.component';
import { NotfoundComponent } from '../notfound/notfound.component';
import { ProfileComponent } from '../user/profile/profile.component';
import { DashboardComponent } from '../admin/dashboard/dashboard.component';
import { StudentlistComponent } from '../admin/studentlist/studentlist.component';
import { ReportComponent } from '../admin/report/report.component';
import { AuthGuardService } from '../auth-guard.service';
import { AdminGuardService } from '../admin-guard.service';

const appRoute: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] },
  { path: 'user/:id', component: ProfileComponent, canActivate: [AuthGuardService] },
  { path: 'signup', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService, AdminGuardService] },
  { path: 'dashboard/subjects', component: SubjectlistComponent, canActivate: [AuthGuardService] },
  { path: 'dashboard/students', component: StudentlistComponent, canActivate: [AuthGuardService] },
  { path: 'dashboard/report', component: ReportComponent, canActivate: [AuthGuardService] },
  { path: 'notfound', component: NotfoundComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/notfound' }
];

export const appRoutes = RouterModule.forRoot(appRoute);
