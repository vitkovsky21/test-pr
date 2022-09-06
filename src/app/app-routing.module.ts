import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './views/settings/settings.component';
import { ViewComponent } from './views/view/view.component';

const routes: Routes = [
 { path: 'view-mode', component: ViewComponent },
 { path: 'settings', component: SettingsComponent },
 { path: '', redirectTo: 'view-mode', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
