import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NgblogCovid19Service } from 'src/app/ngblog-covid19.service';
import { CountryReports } from 'src/countryReport';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.css']
})
export class StatesComponent implements OnInit {

  ELEMENT_DATA!: CountryReports[];
  displayedColumns:string[] = ["country","cases","todayCases","deaths","todayDeaths","recovered","todayRecovered","active","critical","casesPerOneMillion","deathsPerOneMillion","tests","testsPerOneMillion"];
  dataSource = new MatTableDataSource<CountryReports>(this.ELEMENT_DATA);

  constructor(private service:NgblogCovid19Service) { }

  ngOnInit(): void {
    this.getAllStateReports()
  }

  public getAllStateReports()
  {
    let resp=this.service.covid19Reports('states');
    resp.subscribe(report=>this.dataSource.data = report as CountryReports[]);
  }

}
