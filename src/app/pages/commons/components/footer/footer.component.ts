import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  //implements OnInit
  networkStatus: boolean = false;


  constructor() {}

  //   ngOnInit(): void {
  //     (async () => {
  //       this.networkStatus = await isOnline();
  // })();
  //   }
}
