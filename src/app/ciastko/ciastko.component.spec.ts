import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiastkoComponent } from './ciastko.component';

describe('CiastkoComponent', () => {
  let component: CiastkoComponent;
  let fixture: ComponentFixture<CiastkoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiastkoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiastkoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
