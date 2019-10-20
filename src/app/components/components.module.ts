import { FeedUpdateComponent } from './feed-update/feed-update.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FeedCardComponent } from './feed-card/feed-card.component';
import { SlidesComponent } from './slides/slides.component';
import { StartButtonComponent } from './start-button/start-button.component';

@NgModule({
  declarations: [SlidesComponent, StartButtonComponent, FeedCardComponent, FeedUpdateComponent],
  exports: [SlidesComponent, StartButtonComponent, FeedCardComponent, FeedUpdateComponent],
  imports: [CommonModule, FormsModule, IonicModule]
})
export class ComponentsModule {}
