import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsFormShellComponent } from './details-form-shell.component';

describe('DetailsFormShellComponent', () => {
  let component: DetailsFormShellComponent;
  let fixture: ComponentFixture<DetailsFormShellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsFormShellComponent]
    });
    fixture = TestBed.createComponent(DetailsFormShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
