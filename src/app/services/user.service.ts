import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 customer: any; // parsed object
  customerId: number | null = null; //

  constructor(private http: HttpClient) {
    const storedCustomer = localStorage.getItem('customer');
    if (storedCustomer) {
      // parse the JSON string
      this.customer = JSON.parse(storedCustomer);
      this.customerId= this.customer.id;
    }
  }

  baseUrl="http://52.4.81.107/api/bigcommerce/"


validateToken(token: string): Observable<any> {
    return this.http.post(`${this.baseUrl}sso/validate-token`, { token });
  }

  getCustomer(){
     return this.http.get(`${this.baseUrl}customers/${this.customerId}`);
  }


  getRecetView(){
     return this.http.get(`${this.baseUrl}recently-viewed/${this.customerId}`);
  }

  getWishList(){
     return this.http.get(`${this.baseUrl}wishlists?customer_id=${this.customerId}&include_products=true&page=1&limit=100`);
  }

    updateWishlist(id: number, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}wishlists/${id}`, data);
  }
    newWishlist(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}wishlists`, data);
  }



}
