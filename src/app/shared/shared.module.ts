import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableLightComponent } from './components/table-light/table-light.component';

// decorateur
@NgModule({
  // liste tous les composants attachés à ce module
  declarations: [TableLightComponent],
  imports: [CommonModule],
  exports: [TableLightComponent],
})
export class SharedModule {}
