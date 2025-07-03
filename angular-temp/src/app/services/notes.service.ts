import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class NotesService {
  private apiUrl = 'http://localhost:3000/api/notes';

  constructor(private http: HttpClient) {}

  getNotes() {
    return this.http.get(this.apiUrl);
  }

  addNote(text: string) {
    return this.http.post(this.apiUrl, { text });
  }
}