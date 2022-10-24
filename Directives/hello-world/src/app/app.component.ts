import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EvenBinding';
  #name="Shilpa";
public val:any;
  greet(event:any){
    this.val = event.target.innerHTML;
    
  }
}