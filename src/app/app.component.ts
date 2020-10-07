import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'hw7';
  users: any[];
  users$: Observable<any[]>;

  constructor(private http: HttpClient) {

  }

ngOnInit(): void {
  this.http.get<any[]>('https://jsonplaceholder.typicode.com/users').subscribe(value => this.users = value);
  this.users$ = this.http.get<any[]>(`https://jsonplaceholder.typicode.com/users`);
}


}
