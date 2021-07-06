import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeComponent } from './welcome.component';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`should have a title 'Hello! Welcome'`, () => {
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.debugElement.componentInstance;
    expect(component.title).toEqual('Hello! Welcome');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});
