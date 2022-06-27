import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThulamformComponent } from './thulamform.component';

describe('ThulamformComponent', () => {
  let component: ThulamformComponent;
  let fixture: ComponentFixture<ThulamformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThulamformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThulamformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
