import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DashComponent } from './dashboard/dash/dash.component';
import { LoginComponent } from './auth/login/login.component';
import { SurveysComponent } from "./surveys/surveys/surveys.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DashComponent, LoginComponent, SurveysComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'EquiSurveyAI';
}
