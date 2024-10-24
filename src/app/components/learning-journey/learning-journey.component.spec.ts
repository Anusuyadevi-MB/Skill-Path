import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LearningJourneyComponent } from './learning-journey.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('LearningJourneyComponent', () => {
  let component: LearningJourneyComponent;
  let fixture: ComponentFixture<LearningJourneyComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule], // Import RouterTestingModule
      declarations: [], // No declarations needed for standalone components
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningJourneyComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router); // Inject the Router
    fixture.detectChanges(); // Trigger change detection
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Test if the component is created successfully
  });

  it('should set active tab and navigate when setActiveTab is called', () => {
    const navigateSpy = spyOn(router, 'navigate'); // Spy on the navigate method

    component.setActiveTab('roles'); // Call the method to set the active tab to 'roles'

    expect(component.activeTab).toBe('roles'); // Check if the active tab is updated
    expect(navigateSpy).toHaveBeenCalledWith(['/roles']); // Check if the router navigated to the correct path
  });

  it('should return true for isActiveTab if the tab is active', () => {
    component.activeTab = 'learning-journey'; // Set the active tab

    expect(component.isActiveTab('learning-journey')).toBeTrue(); // Check if the active tab matches
    expect(component.isActiveTab('roles')).toBeFalse(); // Check if a different tab returns false
  });
});
