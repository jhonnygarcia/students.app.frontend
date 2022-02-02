import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authSrv: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(form: any) {
    const { login, password } = form.value;
    this.authSrv.login(login, password).subscribe(res => {
      this.router.navigateByUrl('/reports');
    });
  }
}
