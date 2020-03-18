import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayconsoleListComponent } from './playconsole-list.component';

describe('PlayconsoleListComponent', () => {
  let component: PlayconsoleListComponent;
  let fixture: ComponentFixture<PlayconsoleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayconsoleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayconsoleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
