import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Command } from './models/command.model';

@Injectable({
  providedIn: 'root'
})
export class CommandService {
  private baseUrl = 'http://localhost:8080/api/commandes';

  constructor(private http: HttpClient) { }

  getCommands(): Observable<Command[]> {
    return this.http.get<Command[]>(this.baseUrl);
  }

  getCommand(id: number): Observable<Command> {
    return this.http.get<Command>(`${this.baseUrl}/${id}`);
  }

  createCommand(command: Command): Observable<Command> {
    return this.http.post<Command>(this.baseUrl, command);
  }

  updateCommand(id: number, command: Command): Observable<Command> {
    return this.http.put<Command>(`${this.baseUrl}/${id}`, command);
  }

  deleteCommand(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  getCommandsByClient(idClient: number): Observable<Command[]> {
    return this.http.get<Command[]>(`${this.baseUrl}/client/${idClient}`);
  }
}
