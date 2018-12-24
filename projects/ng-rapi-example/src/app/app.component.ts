import {Component, OnInit} from '@angular/core';
import { FakeApiService } from './fake-api.service';
import {HttpClient, HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private fakeApi: FakeApiService,
    private http: HttpClient
  ) {}

  title = 'ng-rapi-example';

  ngOnInit(): void {
    const options = {
      params: new HttpParams().set('vai', 'cavalo')
    };

    this.http.get('http://httpsta.tus/200', options)
      .subscribe(() => {});
  }
}
