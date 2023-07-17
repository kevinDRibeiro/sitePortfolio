import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillBulletsComponent } from './skill-bullets.component';

describe('SkillBulletsComponent', () => {
  let component: SkillBulletsComponent;
  let fixture: ComponentFixture<SkillBulletsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillBulletsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillBulletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
