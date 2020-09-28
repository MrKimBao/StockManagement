import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loadedFeature = 'recipe'
  title = 'stock-management';
  onNavigate(featureSelected: string){
    this.loadedFeature = featureSelected
  }
}
