import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEnrolComponent } from './new-enrol.component';

describe('NewEnrolComponent', () => {
  let component: NewEnrolComponent;
  let fixture: ComponentFixture<NewEnrolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewEnrolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewEnrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
