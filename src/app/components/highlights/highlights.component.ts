import { Component, OnInit } from '@angular/core';
import { Highlight } from '../../models/highlight';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.css']
})

export class HighlightsComponent implements OnInit {

  title:string;
  highlights:Highlight[] = [];
  selectedHighlight:Highlight;

  constructor( private dataService:DataService ) { }

  ngOnInit() {
    this.dataService.fetchHighlights()
                    .subscribe(data => {
                      this.highlights = data;
                      this.selectedHighlight = this.highlights[0];
                    });

    this.title = 'Highlights about me';  
  }

  selectHighlight(highlight:Highlight){
    this.selectedHighlight = highlight
  }

  getSelectedHighlightColor(){
    return this.selectedHighlight.color;
  }
}
