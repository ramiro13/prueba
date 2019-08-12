import { Component, OnInit } from '@angular/core';
import { PeticionesServices } from '../../services/res.service';

@Component({
  selector: 'app-extern',
  templateUrl: './extern.component.html',
  styleUrls: ['./extern.component.scss'],
  providers: [PeticionesServices]
})
export class ExternComponent implements OnInit {

  public userList: any[];
  
  constructor(
    private _peticionesService: PeticionesServices
  ) { }

  ngOnInit() {
    this._peticionesService.getUSers().subscribe(
      (res) => {
        this.userList=res.data;
        console.log(this.userList);
      },
      (error) => {
        console.warn(error);
      })
  }

}
