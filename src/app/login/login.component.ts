import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
 selector: 'app-login',
 templateUrl: './login.component.html',
 styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
 user = {
   email: '',
   password: '',
 };

 constructor(
   private authService: AuthService,
   private router: Router,
   private toastr: ToastrService
 ) {}
 

 onSubmit() {
   this.authService.login(this.user.email, this.user.password).subscribe(
     (response: any) => {
      const userRole=response.msg;
      console.log(response.msg);
       if (userRole=== 'manager') {
         this.router.navigate(['/inventory']); // Redirect to the inventory component
       } else if (userRole === 'officer') {
         this.router.navigate(['/procurement']); // Redirect to the procurement component
       } else if (userRole === 'planner') {
         this.router.navigate(['/planner']); // Redirect to the planner component
       } else {
         // Handle other user types or scenarios here
       }
     }, 
     (error) => {
       console.error('Login failed:', error);
       // Show a toastr notification for login failure
       this.toastr.error('Login failed. Please check your credentials.', 'Error');
     }
   );
 }
}