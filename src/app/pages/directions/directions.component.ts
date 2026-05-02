import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-directions',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './directions.component.html',
  styleUrl: './directions.component.css'
})
export class DirectionsComponent implements OnInit {
  googleMapsUrl = 'https://maps.app.goo.gl/pUavcZNQjuqfEGYv7';

  ngOnInit() {
    window.scrollTo(0, 0);
    setTimeout(() => this.initScrollReveal(), 100);
  }

  private initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    reveals.forEach((el) => observer.observe(el));
  }
}
