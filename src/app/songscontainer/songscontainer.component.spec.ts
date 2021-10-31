import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongscontainerComponent } from './songscontainer.component';

describe('SongscontainerComponent', () => {
  let component: SongscontainerComponent;
  let fixture: ComponentFixture<SongscontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongscontainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SongscontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
