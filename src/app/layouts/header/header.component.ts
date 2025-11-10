import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  
  sHeaderData:any;
  customerDetails: any;

  constructor(private master:MasterService,private user:UserService){}

  ngOnInit(): void {
    this.categoriesData();
    this.userData();
  }

  userData(){
    this.user.getCustomer().subscribe((res:any)=>{
          this.customerDetails = res.data;
    })
  }

categoriesData(){
  this.master.getCategories().subscribe((res:any)=>{

    // this.sHeaderData = res.data.data;
    this.sHeaderData = res.data.data.filter((item: any) => 
      item.children && item.children.length > 0
    );
    console.log(res);
  })
}
menuItems = [
  { key: 'profile', label: 'PROFILE' ,path: '/profile'},
  { key: 'order', label: 'ORDER',path: '/profile' },
  { key: 'recent', label: 'RECENTLY VIEWED',path: '/recently-viewed' },
  { key: 'wishlist', label: 'WISHLIST' },
  { key: 'account', label: 'ACCOUNT SETTING' },
];

activeItem = 'profile'; // default selected

setActive(key: string) {
  this.activeItem = key;
}


// isDropdownOpen = false;

//   openDropdown() {
//     this.isDropdownOpen = true;
//   }

//   closeDropdown() {
//     this.isDropdownOpen = false;
//   }

 activeDropdown: string | null = null;

  openDropdown(name: string) {
    this.activeDropdown = name;
  }

  closeDropdown(name: string) {
    if (this.activeDropdown === name) {
      this.activeDropdown = null;
    }
  }

  isDropdownOpen(name: string): boolean {
    return this.activeDropdown === name;
  }
}
