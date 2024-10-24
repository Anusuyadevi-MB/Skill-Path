import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Import the Router to handle navigation
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-learning-journey',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './learning-journey.component.html',
  styleUrls: ['./learning-journey.component.css']
})
export class LearningJourneyComponent {
  activeTab: string = 'learning-journey'; // Default tab

  constructor(private router: Router) {}
  setActiveTab(tab: string): void {
    this.activeTab = tab;
    this.router.navigate([`/${tab}`]);  // Navigate to the selected tab route
  }
  // Check if the tab is active
  isActiveTab(tab: string): boolean {
    return this.activeTab === tab;
  }

  // Navigate to the specified role
  goToRole(role: string): void {
    // You can set a route for roles and pass the role name as a query parameter
    this.router.navigate(['/roles'], { queryParams: { role: role } });
  }
}
