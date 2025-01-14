import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule], // Import RouterTestingModule
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router); // Inject the Router
    fixture.detectChanges(); // Trigger change detection
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Test if the component is created successfully
  });

  it('should return true for isActiveTab if the tab is active', () => {
    component.activeTab = 'learning-journey'; // Set the active tab

    expect(component.isActiveTab('learning-journey')).toBeTrue(); // Check if the active tab matches
    expect(component.isActiveTab('roles')).toBeFalse(); // Check if a different tab returns false
  });
});
