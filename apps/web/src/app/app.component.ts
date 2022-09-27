import { Component } from '@angular/core';
import { environment } from '@product-fe/shared/environments';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'product-fe';
  isProd = environment.production;
}
