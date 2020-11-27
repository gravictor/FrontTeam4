import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatesInfoComponent } from './gates-info.component';

describe('GatesInfoComponent', () => {
  let component: GatesInfoComponent;
  let fixture: ComponentFixture<GatesInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GatesInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GatesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
