import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent implements OnInit {

  liste = {};
  constructor(private client: ApiService) { }

  ngOnInit(): void {
    this.client.getListeCustomers().subscribe(
      (data) =>  this.liste = data,
      (error) => console.log(`Erreur dans la souscription transactions ${error}`)
    );
  }

}
