import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameComponent } from './game.component';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should set MatchCount to a random number', () => {
    expect(component.matchesCount >= 7).toBeTruthy;
    expect(component.matchesCount <= 15).toBeTruthy;
  })

  it('Choice should be between 1 and 3', () => {
    component.matchesCount = 4
    let giveHandSpy = spyOn<any>(component, 'giveHand').and.callThrough();
    component.onChoiceDone(4);
    expect(giveHandSpy).toHaveBeenCalledTimes(0);
    expect(component.matchesCount).toEqual(4);
  })

  it('Should give hand after playing', () => {
    let giveHandSpy = spyOn<any>(component, 'giveHand').and.callThrough();
    component.onChoiceDone(3);
    expect(giveHandSpy).toHaveBeenCalled();
  })

});
