import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page implements OnInit, OnDestroy {

  images = [
    'assets/Soporte_Técnico.png',
    'assets/servers_support.png',
    'assets/operating_systems.png',
    'assets/active_directory.png',
    'assets/relational_databases.png',
    'assets/nosql_databases.png',
    'assets/dev_web_tools.png',
  ];

  currentIndex = 0;
  private intervalId: any;

  constructor() {}

  ngOnInit() {
    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  prev() {
    this.stopAutoPlay();
    this.currentIndex = this.currentIndex === 0 ? this.images.length - 1 : this.currentIndex - 1;
    this.startAutoPlay();
  }

  next() {
    this.stopAutoPlay();
    this.currentIndex = this.currentIndex === this.images.length - 1 ? 0 : this.currentIndex + 1;
    this.startAutoPlay();
  }

  goTo(index: number) {
    this.stopAutoPlay();
    this.currentIndex = index;
    this.startAutoPlay();
  }

  private startAutoPlay() {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 4000);
  }

  private stopAutoPlay() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

}
