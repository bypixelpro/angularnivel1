import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderdemoComponent } from './renderdemo.component';

describe('RenderdemoComponent', () => {
  let component: RenderdemoComponent;
  let fixture: ComponentFixture<RenderdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenderdemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
