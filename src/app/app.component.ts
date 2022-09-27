import { Component } from '@angular/core';
import { environment } from '@sight-fe/shared/environments';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'sight-fe';
  isProd = environment.production;
}
