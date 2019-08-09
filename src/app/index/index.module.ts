import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IndexPage } from './index.page';
import { IndexRouter } from './index.router';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, IndexRouter],
  declarations: [IndexPage]
})
export class IndexPageModule {}
