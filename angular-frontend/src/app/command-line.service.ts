import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommandLine } from './models/command-line.model';

@Injectable({
  providedIn: 'root'
})
export class CommandLineService {
  private baseUrl = 'http://localhost:8080/api/ligneCMDs';

  constructor(private http: HttpClient) { }

  getCommandLines(): Observable<CommandLine[]> {
    return this.http.get<CommandLine[]>(this.baseUrl);
  }

  getCommandLine(id: number): Observable<CommandLine> {
    return this.http.get<CommandLine>(`${this.baseUrl}/${id}`);
  }

  createCommandLine(commandLine: CommandLine): Observable<CommandLine> {
    return this.http.post<CommandLine>(this.baseUrl, commandLine);
  }

  updateCommandLine(id: number, commandLine: CommandLine): Observable<CommandLine> {
    return this.http.put<CommandLine>(`${this.baseUrl}/${id}`, commandLine);
  }

  deleteCommandLine(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  getCommandLinesByCommand(idCMD: number): Observable<CommandLine[]> {
    return this.http.get<CommandLine[]>(`${this.baseUrl}/commande/${idCMD}`);
  }
}
