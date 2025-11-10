import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-main-layout',
  standalone: false,
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent implements OnInit {

    constructor(private user: UserService) { }

   ngOnInit(): void {
    let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI2cW1vY2VtaTc5Znkzb2tvb2dqMHB2Y2lnempzZmQ3IiwiaWF0IjoxNzYyNjI4OTY4LCJqdGkiOiI2OTBmOTU2ODQwMWUzNy4zMzk4MDg4NCIsIm9wZXJhdGlvbiI6ImN1c3RvbWVyX2xvZ2luIiwic3RvcmVfaGFzaCI6Imd5bmhtaWp0d2kiLCJjdXN0b21lcl9pZCI6OCwicmVkaXJlY3RfdG8iOiJodHRwOi8vbG9jYWxob3N0L3Nzby9jb25zdW1lIn0.VxeuQ74OqsUehWQxsgcxDpK3xZ1uPnJCgsgXiGAkshk"
    this.validToken(token);
   }
    validToken(userToken:any){
    this.user.validateToken(userToken).subscribe({
  next: (res) => {
    if (res.success) {
      console.log(res.customer.customer,"idU");
      
      localStorage.setItem('auth_token', userToken);
      localStorage.setItem('customer', JSON.stringify(res.customer.customer));
      // this.router.navigate(['/dashboard']); // redirect user
    }
  },
  error: (err) => console.error('Token validation failed', err)
});

  }

}
