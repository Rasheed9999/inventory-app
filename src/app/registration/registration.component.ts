import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
 selector: 'app-registration',
 templateUrl: './registration.component.html',
 styleUrls: ['../login/login.component.scss'],
})
export class RegistrationComponent {
 user = {
   firstname: '',
   lastname: '',
   email: '',
   password: '',
   role: '',
 };

 constructor(private authService: AuthService,
  private router: Router,
   private toastr: ToastrService
  ) {}

 onSubmit() {
  this.authService.register(this.user).subscribe(
    (response) => {
      // Registration successful
      this.toastr.error('Registration successful');
      this.router.navigateByUrl('/login'); // Redirect to the login page
    },
    (error) => {
      console.error('Registration failed:', error);
      // Show a toastr notification for registration failure
      this.toastr.error('Registration unsuccessful', 'Error');
    }
  );
 }
}
