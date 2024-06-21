import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { CommandService } from '../command.service';
import { Client } from '../models/client.model';
import { Command } from '../models/command.model';

@Component({
  selector: 'app-commands',
  templateUrl: './commands.component.html',
  styleUrls: ['./commands.component.css']
})
export class CommandsComponent implements OnInit {
  commands: Command[] = [];
  clients: Client[] = [];
  selectedCommand: Command | null = null;
  selectedClient: Client | null = null;

  constructor(private commandService: CommandService, private clientService: ClientService) { }

  ngOnInit(): void {
    this.loadCommands();
    this.loadClients();
  }

  loadCommands(): void {
    this.commandService.getCommands().subscribe(commands => this.commands = commands);
  }

  loadClients(): void {
    this.clientService.getClients().subscribe(clients => this.clients = clients);
  }

  selectCommand(command: Command): void {
    this.selectedCommand = command;
  }

  addCommand(command: Command): void {
    this.commandService.createCommand(command).subscribe(() => this.loadCommands());
  }

  updateCommand(command: Command): void {
    if (command.idCMD) {
      this.commandService.updateCommand(command.idCMD, command).subscribe(() => this.loadCommands());
    }
  }

  deleteCommand(id: number): void {
    this.commandService.deleteCommand(id).subscribe(() => this.loadCommands());
  }

  filterCommandsByClient(idClient: number): void {
    this.commandService.getCommandsByClient(idClient).subscribe(commands => this.commands = commands);
  }
}
