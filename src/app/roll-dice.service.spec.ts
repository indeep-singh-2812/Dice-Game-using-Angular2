/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RollDiceService } from './roll-dice.service';

describe('RollDiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RollDiceService]
    });
  });

  it('should ...', inject([RollDiceService], (service: RollDiceService) => {
    expect(service).toBeTruthy();
  }));
});
