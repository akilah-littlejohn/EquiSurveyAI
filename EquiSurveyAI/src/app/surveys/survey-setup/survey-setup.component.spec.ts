import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveySetupComponent } from './survey-setup.component';

describe('SurveySetupComponent', () => {
  let component: SurveySetupComponent;
  let fixture: ComponentFixture<SurveySetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SurveySetupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SurveySetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
