import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Counter App';
  name: string = 'Yogesh Salve';

  count: number = 0;



  handleIncrease = () => {
    this.count = this.count + 1;
    // if (this.count === 10){
    //   this.count = 10
    // }
    
    // else
    // this.count = this.count + 1;
  };

  handleDecrease = () => {
    this.count = this.count - 1;

    // if (this.count === 0){
    //   this.count = 0
    // }
    
    // else
    // this.count = this.count - 1;

  };

  handleReset = () => {
    this.count = 0;
  };
}
