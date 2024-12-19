import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ChristmasRoutingModule } from './christmas-routing.module';
import { ChristmasTreeComponent } from './components/christmas-tree/christmas-tree.component';
import { CountdownComponent } from './components/countdown/countdown.component';
import { SecretSantaComponent } from './components/secret-santa/secret-santa.component';

@NgModule({
  declarations: [
    ChristmasTreeComponent,
    CountdownComponent,
    SecretSantaComponent
  ],
  imports: [
    CommonModule,
    ChristmasRoutingModule,
    FormsModule
  ]
})
export class ChristmasModule { }
