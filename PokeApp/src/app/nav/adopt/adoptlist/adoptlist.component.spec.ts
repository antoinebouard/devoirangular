import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptlistComponent } from './adoptlist.component';

describe('AdoptlistComponent', () => {
  let component: AdoptlistComponent;
  let fixture: ComponentFixture<AdoptlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdoptlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
