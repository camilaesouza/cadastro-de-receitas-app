import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundErrorComponentComponent } from './not-found-error-component.component';

describe('NotFoundErrorComponentComponent', () => {
  let component: NotFoundErrorComponentComponent;
  let fixture: ComponentFixture<NotFoundErrorComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotFoundErrorComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotFoundErrorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
