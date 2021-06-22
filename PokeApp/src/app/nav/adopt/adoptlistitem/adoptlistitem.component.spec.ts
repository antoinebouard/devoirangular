import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptlistitemComponent } from './adoptlistitem.component';

describe('AdoptlistitemComponent', () => {
  let component: AdoptlistitemComponent;
  let fixture: ComponentFixture<AdoptlistitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdoptlistitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptlistitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
