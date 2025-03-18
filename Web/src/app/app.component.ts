import { Component } from '@angular/core';
import { LoginComponent } from './pages/login.component';
import { FormsModule } from '@angular/forms';  


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [LoginComponent,FormsModule]
})
export class AppComponent {
  title = 'Web';
}
