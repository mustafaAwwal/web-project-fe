import { Component, OnInit } from '@angular/core';
import {AuthserviceService} from '../../../../services/auth/authservice.service'
import {Router} from '@angular/router';
import {DataService} from '../../../../services/dataService/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  firstName = "";
  lastName  = "";
  status    = "";
  constructor(private auth: AuthserviceService, private router: Router, private data: DataService) { 
    this.getUser();
  }

  ngOnInit() {
  }
  accountApproval():boolean {
    if(this.auth.isToken()) {
      return true;
    }
    else {
      return false;
    }
  }
  checkActive = (match, location) => {
    //some additional logic to verify you are in the home URI
    if(!location) return false;
    const {pathname} = location;
    console.log(pathname);
    return pathname === "/";
  }
  signOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("type");
    this.router.navigate([''])
  }
  goToProfile(){
    console.log('profile login');
    this.auth.goToProfile();
   
  }
  getUser() {
    if(this.auth.isToken()){
    this.data.getUserData().subscribe((data)=>{
      this.auth.setToken(data.token);
      if (data.user != null){
      this.firstName = data.user.firstName;
      this.lastName  = data.user.lastName;
      this.status    = data.user.accountType;
    
    }});
    
  }
  }

}
