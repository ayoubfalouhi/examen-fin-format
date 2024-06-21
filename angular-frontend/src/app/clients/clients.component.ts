import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Client } from '../models/client.model';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients: Client[] = [];
  filteredClients: Client[] = [];
  searchTerm: string = '';

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients(): void {
    this.clientService.getClients().subscribe(clients => {
      this.clients = clients;
      this.filteredClients = clients;
    });
  }

  searchClients(): void {
    if (this.searchTerm) {
      this.filteredClients = this.clients.filter(client =>
        client.nom.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        client.prenom.toLowerCase().includes(this.searchTerm.toLowerCase()));
    } else {
      this.filteredClients = this.clients;
    }
  }
}
