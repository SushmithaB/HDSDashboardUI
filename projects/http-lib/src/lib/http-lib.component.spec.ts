import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpLibComponent } from './http-lib.component';

describe('HttpLibComponent', () => {
  let component: HttpLibComponent;
  let fixture: ComponentFixture<HttpLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
