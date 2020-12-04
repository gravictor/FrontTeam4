import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogContentExampleDialogComponentComponent } from './dialog-content-example-dialog-component.component';

describe('DialogContentExampleDialogComponentComponent', () => {
  let component: DialogContentExampleDialogComponentComponent;
  let fixture: ComponentFixture<DialogContentExampleDialogComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogContentExampleDialogComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogContentExampleDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
