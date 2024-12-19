import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Participant {
  id: number;
  name: string;
}

export interface SecretSantaPair {
  giver: Participant;
  receiver: Participant;
}

@Injectable({
  providedIn: 'root'
})
export class SecretSantaService {
  private participants = new BehaviorSubject<Participant[]>([]);
  private pairs = new BehaviorSubject<SecretSantaPair[]>([]);

  participants$ = this.participants.asObservable();
  pairs$ = this.pairs.asObservable();

  addParticipant(name: string) {
    const currentParticipants = this.participants.value;
    const newParticipant: Participant = {
      id: Date.now(),
      name: name.trim()
    };
    this.participants.next([...currentParticipants, newParticipant]);
  }

  removeParticipant(id: number) {
    const currentParticipants = this.participants.value;
    this.participants.next(currentParticipants.filter(p => p.id !== id));
  }

  generatePairs() {
    const participants = [...this.participants.value];
    if (participants.length < 2) {
      throw new Error('Need at least 2 participants');
    }

    const pairs: SecretSantaPair[] = [];
    const receivers = [...participants];

    participants.forEach(giver => {
      let availableReceivers = receivers.filter(r => 
        r.id !== giver.id && !pairs.some(p => p.receiver.id === r.id)
      );

      // If no valid receiver found, swap with an existing pair
      if (availableReceivers.length === 0) {
        const lastPair = pairs[pairs.length - 1];
        availableReceivers = [lastPair.receiver];
        lastPair.receiver = giver;
      }

      const randomIndex = Math.floor(Math.random() * availableReceivers.length);
      const receiver = availableReceivers[randomIndex];

      pairs.push({ giver, receiver });
    });

    this.pairs.next(pairs);
    return pairs;
  }

  clearAll() {
    this.participants.next([]);
    this.pairs.next([]);
  }
}
