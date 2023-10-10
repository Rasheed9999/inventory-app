import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'; // Import your login component
import { InventoryComponent } from './inventory/inventory.component'; // Import your inventory component
import { ProcurementComponent } from './procurement/procurement.component'; // Import your procurement component
import { PlannerComponent } from './planner/planner.component'; // Import your planner component
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
 { path: 'login', component: LoginComponent }, // Route to the login component
 { path: 'registration' , component: RegistrationComponent},
 { path: 'inventory', component: InventoryComponent }, // Route to the inventory component
 { path: 'procurement', component: ProcurementComponent }, // Route to the procurement component
 { path: 'planner', component: PlannerComponent }, // Route to the planner component
 { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to login by default
 { path: '**', redirectTo: '/login' }, // Redirect to login for unknown routes
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule],
})
export class AppRoutingModule {}