import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';

const Material = [ 
  MatSidenavModule,
  MatToolbarModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule
];


@NgModule({

  imports: [Material],
  exports: [Material]
})
export class MaterialModule { }
