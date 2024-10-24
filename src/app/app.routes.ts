import { Routes } from '@angular/router';
import { LearningJourneyComponent } from './components/learning-journey/learning-journey.component';
import { RolesComponent } from './components/roles/roles.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: 'learning-journey', component: LearningJourneyComponent },
    { path: 'roles', component: RolesComponent },
    { path: '', redirectTo: '/learning-journey', pathMatch: 'full' },];
    @NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
    export class AppRoutingModule {}