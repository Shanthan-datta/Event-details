import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  countdown: CountdownTime = { days: 0, hours: 0, minutes: 0, seconds: 0 };
  private timer: any;
  private eventDate = new Date('2026-06-16T17:00:00+01:00'); // 5 PM Ireland time (IST/GMT+1)

  programs = [
    {
      icon: 'bi-book',
      title: 'Hanuman Chalisa Parayana',
      description: 'Join the sacred collective recitation of the Hanuman Chalisa, invoking the blessings of Lord Hanuman for strength, devotion, and divine grace.',
      image: 'swamiji-5.jpeg'
    },
    {
      icon: 'bi-music-note-beamed',
      title: 'Bhajans',
      description: 'Experience the divine vibrations of devotional music and bhajans that uplift the soul and fill the heart with spiritual bliss.',
      image: 'swamiji-7.jpeg'
    },
    {
      icon: 'bi-stars',
      title: 'Anugraha Bhashana',
      description: 'Receive the divine discourse and blessings from His Holiness Sri Ganapathi Sachchidananda Swamiji — a rare and precious opportunity.',
      image: 'swamiji-6.jpeg'
    },
    {
      icon: 'bi-heart',
      title: 'Satsang Program',
      description: 'Come together in the spirit of devotion, unity, and spiritual harmony to receive Swamiji\'s divine blessings and guidance.',
      image: 'swamiji-8.jpeg'
    }
  ];

  ngOnInit() {
    this.updateCountdown();
    this.timer = setInterval(() => this.updateCountdown(), 1000);

    // Scroll reveal observer
    setTimeout(() => this.initScrollReveal(), 100);
  }

  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  private updateCountdown() {
    const now = new Date().getTime();
    const distance = this.eventDate.getTime() - now;

    if (distance > 0) {
      this.countdown = {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      };
    }
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

  padZero(num: number): string {
    return num.toString().padStart(2, '0');
  }
}
