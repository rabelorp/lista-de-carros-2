import { Component } from '@angular/core';
import { Cars } from 'src/app/models/cars.model';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  cars?: Cars[];
  total: number | undefined;

  constructor(private carsService: CarsService) {}

  ngOnInit(): void {
    this.retrieveCars();
  }

  retrieveCars(): void {
    this.carsService.getAll().subscribe({
      next: (data) => {
        this.total = data.resultados.total;
        this.cars = data.resultados.data;
      },
      error: (e) => console.error(e),
    });
  }
}
