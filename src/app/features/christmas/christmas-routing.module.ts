import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChristmasTreeComponent } from './components/christmas-tree/christmas-tree.component';
import { CountdownComponent } from './components/countdown/countdown.component';
import { SecretSantaComponent } from './components/secret-santa/secret-santa.component';

const routes: Routes = [
  {
    path: '',
    component: ChristmasTreeComponent
  },
  {
    path: 'countdown',
    component: CountdownComponent
  },
  {
    path: 'secret-santa',
    component: SecretSantaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChristmasRoutingModule { }
