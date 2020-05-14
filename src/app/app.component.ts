import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'interview';
  categories$: Observable<any>
  selectedCategory = "Pick a category!"
  constructor(private service: ServiceService) {}

  ngOnInit() {
    this.categories$=this.service.getData()
  }

  onSelect(selectedCategory) {
    this.selectedCategory = selectedCategory
  }
}
