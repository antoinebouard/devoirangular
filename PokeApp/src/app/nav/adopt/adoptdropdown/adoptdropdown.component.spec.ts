import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptdropdownComponent } from './adoptdropdown.component';

describe('AdoptdropdownComponent', () => {
  let component: AdoptdropdownComponent;
  let fixture: ComponentFixture<AdoptdropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdoptdropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptdropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
