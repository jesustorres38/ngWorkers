import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerDetailComponent } from './worker-detail.component';

describe('WorkerDetailComponent', () => {
  let component: WorkerDetailComponent;
  let fixture: ComponentFixture<WorkerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
