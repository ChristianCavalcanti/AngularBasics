import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../services/notes.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-suggestions',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './suggestions.html',
  styleUrls: ['./suggestions.css']
})
export class Suggestions implements OnInit {
  notes: any[] = [];
  newNote = '';

  constructor(private notesService: NotesService) {}

  ngOnInit() {
    this.loadNotes();
  }

  loadNotes() {
    this.notesService.getNotes().subscribe((data: any) => {
      this.notes = data;
    });
  }

  submitNote() {
    if (this.newNote.trim()) {
      this.notesService.addNote(this.newNote).subscribe(() => {
        this.newNote = '';
        this.loadNotes();
      });
    }
  }
}
