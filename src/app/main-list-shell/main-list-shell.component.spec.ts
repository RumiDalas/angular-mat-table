import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainListShellComponent } from './main-list-shell.component';

describe('MainListShellComponent', () => {
  let component: MainListShellComponent;
  let fixture: ComponentFixture<MainListShellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainListShellComponent]
    });
    fixture = TestBed.createComponent(MainListShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
