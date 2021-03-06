import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ClientContentComponent } from './client-content.component';

describe('ClientContentComponent', () => {
  let component: ClientContentComponent;
  let fixture: ComponentFixture<ClientContentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
