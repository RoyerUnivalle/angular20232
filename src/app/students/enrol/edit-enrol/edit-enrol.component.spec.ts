import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEnrolComponent } from './edit-enrol.component';

describe('EditEnrolComponent', () => {
  let component: EditEnrolComponent;
  let fixture: ComponentFixture<EditEnrolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEnrolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEnrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
