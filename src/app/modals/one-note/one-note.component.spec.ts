import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneNoteComponent } from './one-note.component';

describe('OneNoteComponent', () => {
  let component: OneNoteComponent;
  let fixture: ComponentFixture<OneNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
