import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// pour faire fonctionner les appels HTTP
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from './core/core.module';



// decorator
@NgModule({
  declarations: [
    // liste tous les composants rattachés à ce module
    AppComponent,
    // déclarations
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CoreModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
