import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating App';
  users: any;
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.getUsers();
  }


  getUsers() {

    this.http.get('https://localhost:44353/api/Users').subscribe({
      next: (v) => { this.users = v; },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    }
    )
  }
}
