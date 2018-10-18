import { Component } from '@angular/core';
import {FakeApiService} from './fake-api.service';

@Component({
  selector: 'lbz-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'labuz';

  constructor(
    private fakeApi: FakeApiService
  ) {}

  getPath() {
    this.fakeApi.getPath()
      .subscribe((response) => {
        console.log('Get Path', response);
      });
  }
}
