import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import {Challenge} from "../challenge";
import {ChallengeService} from "../challenge.service";

@Component({
  selector: 'app-challenge-detail',
  templateUrl: './challenge-detail.component.html',
  styleUrls: ['./challenge-detail.component.css']
})
export class ChallengeDetailComponent implements OnInit {
  challenge: Challenge | undefined;
  constructor(
    private route: ActivatedRoute,
    private challengeService: ChallengeService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getChallenge();
  }

  getChallenge(): void {
    const challengeId = (this.route.snapshot.paramMap.get('id')!);
    this.challengeService.getChallenge(challengeId)
      .subscribe(challenge => this.challenge = challenge);
  }

  goBack(): void {
    this.location.back();
  }
}
