import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports:[CommonModule, RouterModule],
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  selectedRole: string | null = null;  // Store the selected role

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Fetch the role from query parameters (if navigated from Learning Journey or Roles tab)
    this.route.queryParams.subscribe(params => {
      if (params['role']) {
        this.selectedRole = params['role'];
      }
    });
  }
}
