import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeploymentsUiComponent } from './deployments-ui.component';

describe('DeploymentsUiComponent', () => {
  let component: DeploymentsUiComponent;
  let fixture: ComponentFixture<DeploymentsUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeploymentsUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeploymentsUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
