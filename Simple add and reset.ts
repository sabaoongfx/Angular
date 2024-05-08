// import required packages
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

// describe component
@Component({
  selector: 'add-one-button', // component name used in markup
  standalone: true, // component is self-contained
  template: // the component's markup
  `
   <button (click)="addone()">Add one</button> 
   
   <p>{{ countone }}</p>
   

   <button (click)="resetzero()">Reset</button> 
  `,
})

// export component
export class AddOneButtonComponent {
countone: any = 0;


addone(){

  this.countone++;
}

resetzero(){
  this.countone = 0;
  }


}

bootstrapApplication(AddOneButtonComponent);
