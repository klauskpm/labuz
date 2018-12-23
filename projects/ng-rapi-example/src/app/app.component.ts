import { Component } from '@angular/core';
import { FakeApiService } from './fake-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private fakeApi: FakeApiService) {}

  title = 'ng-rapi-example';
}
