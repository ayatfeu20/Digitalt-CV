import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    
    
    {
        path: 'experience',
        loadChildren: './professional-experience/professional-experience.module#ProfessionalExperienceModule'
    },
        
    
    {
        path: 'contact',
        loadChildren: './contact/contact.module#ContactModule'
    },
    { path: '**', redirectTo: '/home' }
    
]


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}