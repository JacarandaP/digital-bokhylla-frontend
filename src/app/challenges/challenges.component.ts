import { Component, OnInit } from '@angular/core';
import {Challenge} from "../challenge";
import {ChallengeService} from "../challenge.service";

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.css']
})
export class ChallengesComponent implements OnInit {
  challenges: Challenge[] = [];

  constructor(private challengeService: ChallengeService) { }

  ngOnInit(): void {
    this.getActiveChallenges();
  }

  getActiveChallenges(): void{
    this.challengeService.getActiveChallenges()
      .subscribe(challenges => this.challenges = challenges);
  }

}
