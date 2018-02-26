import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IncidentService} from "../incident.service";

@Component({
  selector: 'app-incident-list',
  templateUrl: './incident-list.component.html',
  styleUrls: ['./incident-list.component.css']
})
export class IncidentListComponent implements OnInit {

  listIncidents = [];

  constructor(private route: ActivatedRoute, private incidentService: IncidentService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.incidentService.list().subscribe(data => {
        this.listIncidents = data;
        console.log('listIncidents = ' + this.listIncidents );
      });
    });
  }
}
