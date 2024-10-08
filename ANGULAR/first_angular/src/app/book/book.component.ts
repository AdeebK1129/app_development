import { Component } from '@angular/core';
import { BookRepository } from './repository.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  model:BookRepository = new BookRepository()
}
