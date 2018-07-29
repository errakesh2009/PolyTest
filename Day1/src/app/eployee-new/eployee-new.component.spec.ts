import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EployeeNewComponent } from './eployee-new.component';

describe('EployeeNewComponent', () => {
  let component: EployeeNewComponent;
  let fixture: ComponentFixture<EployeeNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EployeeNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EployeeNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
