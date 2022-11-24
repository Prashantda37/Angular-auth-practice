import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _authService: AuthService) { }
  users:any = []; 
  displayedColumns:any[] = ['firstName', 'lastName', 'username', 'getDetails']
  // Button 
  editBtn = {
    color: 'primary',
  };
  deleteBtn = {
    color: 'danger',
  }
  //'firstName', 'lastName', 'username', 'getDetails'
  // headerTable:any[] = [] 
  ngOnInit(): void {
    this._authService.getUsers()
    .subscribe((data: any) => {
      this.users = data;
    })

    // this._authService.userUpdate('1', {name: "new name"})
    // .subscribe((res:any) => {
    //   console.log('res', res)
    //   this.users = res.results;
    // })
  }

  getDetails(value: any) {
    console.log('====',value);
  }

  removeColoum(value: any) {
    console.log('removed coloum')
  }
}
