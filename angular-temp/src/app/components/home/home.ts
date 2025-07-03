import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; 

import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule], 
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
  newNote = '';

  constructor(private notesService: NotesService) {}

  submitNote() {
    if (this.newNote.trim()) {
      this.notesService.addNote(this.newNote).subscribe(() => {
        this.newNote = '';
      });
    }
  }
}
