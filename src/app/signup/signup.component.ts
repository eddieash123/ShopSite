import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserRole } from '../models/UserRole';
import { Users } from '../models/Users';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signupObj = {
    name: '',
    email: '',
    password: ''
  }

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    localStorage.setItem('user', "")
  }

  onSubmit() {
    this.http.post<any>(`http://localhost:8080/users/signup`, this.signupObj)
      .subscribe((res) => {
          this.router.navigateByUrl("/login")
        });
  }
}
