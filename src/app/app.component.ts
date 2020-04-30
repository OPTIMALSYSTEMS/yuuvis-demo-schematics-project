import { Component } from '@angular/core';
import { SearchQuery } from '@yuuvis/framework';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  query: SearchQuery;
  selected: string;
  chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: '#42A5F5',
        borderColor: '#1E88E5',
        data: [65, 59, 80, 81, 56, 55, 40],
      },
      {
        label: 'My Second dataset',
        backgroundColor: '#9CCC65',
        borderColor: '#7CB342',
        data: [28, 48, 40, 19, 86, 27, 90],
      },
    ],
  };
  
  onQuickSearchQuery(q: SearchQuery) {
    this.query = new SearchQuery(q.toQueryJson());
  }

  select(e: string[]) {
    this.selected = e[0];
    // generate random chart data everytime the selection changes
    this.generateChartData();
  }

  private generateChartData() {    
    const d1 = [];
    const d2 = [];
    this.chartData.labels.forEach(l => {
      d1.push((Math.random() * (100 - 1) + 1))
      d2.push((Math.random() * (100 - 1) + 1))
    })
    this.chartData.datasets[0].data = d1;    
    this.chartData.datasets[1].data = d2;
    this.chartData = {...this.chartData};    
  }
}
