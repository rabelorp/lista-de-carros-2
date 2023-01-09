import { Component } from '@angular/core';
import { Cars } from 'src/app/models/cars.model';
import { CarsService } from 'src/app/services/cars.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  cars: Cars[] | undefined;
  total: number | undefined;
  sum = 24;
  page = 1;
  currentList!: any | undefined;

  constructor(
    private carsService: CarsService,
    public loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.retrieveCars(this.page);
  }

  retrieveCars(page: number): void {
    this.carsService.getAll(page).subscribe({
      next: (data) => {
        this.total = data.total;
        this.currentList = data.products;
        if (page > 1) {
          return this.cars?.push(...this.currentList);
        } else {
          return (this.cars = data.products);
        }
      },
      error: (e) => console.error(e),
    });
  }

  onScrollDown() {
    this.page = this.page + 1;
    this.sum = this.sum + 24;
    this.retrieveCars(this.page);
  }
}
