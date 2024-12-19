import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SecretSantaService, Participant, SecretSantaPair } from '../../services/secret-santa.service';

@Component({
  selector: 'app-secret-santa',
  templateUrl: './secret-santa.component.html',
  styleUrls: ['./secret-santa.component.scss']
})
export class SecretSantaComponent {
  newParticipantName: string = '';
  participants$ = this.secretSantaService.participants$;
  pairs$ = this.secretSantaService.pairs$;
  errorMessage: string = '';
  showResults: boolean = false;

  constructor(private secretSantaService: SecretSantaService) {}

  addParticipant() {
    if (this.newParticipantName.trim()) {
      this.secretSantaService.addParticipant(this.newParticipantName);
      this.newParticipantName = '';
      this.errorMessage = '';
    }
  }

  removeParticipant(id: number) {
    this.secretSantaService.removeParticipant(id);
    this.showResults = false;
  }

  generatePairs() {
    try {
      this.secretSantaService.generatePairs();
      this.showResults = true;
      this.errorMessage = '';
    } catch (error) {
      this.errorMessage = error instanceof Error ? error.message : 'An error occurred';
      this.showResults = false;
    }
  }

  clearAll() {
    this.secretSantaService.clearAll();
    this.showResults = false;
    this.errorMessage = '';
  }
}
