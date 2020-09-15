import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-listecustomers',
  templateUrl: './listecustomers.component.html',
  styleUrls: ['./listecustomers.component.scss']
})
export class ListecustomersComponent implements OnInit {

  liste = {}
  constructor(private client: ApiService) { }

  ngOnInit(): void {
    this.client.getListeUsers().subscribe(
      (data) => {
        this.liste = data;
      },
      (error) => console.log(`Erreur dans la souscription famillies ${error}`)
    );
  }

}
