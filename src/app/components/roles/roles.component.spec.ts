import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RolesComponent } from './roles.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('RolesComponent', () => {
  let component: RolesComponent;
  let fixture: ComponentFixture<RolesComponent>;
  let activatedRoute: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [], // No declarations needed for standalone components
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of({}) // Provide a mock for the ActivatedRoute with no query params
          }
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RolesComponent);
    component = fixture.componentInstance;
    activatedRoute = TestBed.inject(ActivatedRoute); // Inject the ActivatedRoute
    fixture.detectChanges(); // Trigger change detection
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Test if the component is created successfully
  });

  it('should set selectedRole to null if no role in query params', () => {
    expect(component.selectedRole).toBeNull(); // Expect selectedRole to be null when no role is in query params
  });
});
