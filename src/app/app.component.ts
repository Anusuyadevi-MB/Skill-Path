import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeTab: string = 'learning-journey';  // Default to "Learning Journey"

  // Method to set the active tab, but no need to manually navigate since routerLink handles it
  setActiveTab(tab: string): void {
    this.activeTab = tab;  // Only update the active tab
  }

  // Method to check if the provided tab is currently active
  isActiveTab(tab: string): boolean {
    return this.activeTab === tab;
  }
}
