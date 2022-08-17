import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from "@angular/router";
import { loadRemoteModule } from '@angular-architects/module-federation';
import { environment } from '../environments/environment';

// const routes: Routes =[
//   {
//     path: 'remote',
//     loadChildren: () =>
//       import('remote/Module').then((m) => m.AbcModule),
//   }
// ];

const routes: Routes = [
  {
    path: 'microfrontend',
    loadChildren: () => loadRemoteModule({
      //remoteEntry: "https://inquisitive-tiramisu-ef621c.netlify.app/remoteEntry.js",
      remoteEntry: environment.remoteUrl,
      type: 'module',
      exposedModule: './Module'
    })
    .then(m => m.AbcModule)
  }
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

