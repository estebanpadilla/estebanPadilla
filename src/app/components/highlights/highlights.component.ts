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

    this.title = 'Highlights';  
  }

  selectHighlight(highlight:Highlight){
    this.selectedHighlight = highlight
  }

  getSelectedHighlightColor(value:string){
    if (value === this.selectedHighlight.title) { 
        return "#ee3344";
    } else  {
        return "#4d64ad";
    }
  }
}
