import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Award {
  image: string;
  title: string;
  description: string;
  year: string;
  location: string;
}

@Component({
  selector: 'app-awards',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './awards.component.html',
  styleUrl: './awards.component.css'
})
export class AwardsComponent implements OnInit {
  selectedAward: Award | null = null;

  awards: Award[] = [
    {
      image: 'awards/award-1.jpg',
      title: 'Most People Chanting at a Single Venue',
      description: 'Guinness World Record for leading 1,28,918 participants in Hanuman Chalisa chanting for world peace. By end of day, 2,20,000 people attended the event in a 15-acre field.',
      year: '2015',
      location: 'Tenali, Andhra Pradesh, India'
    },
    {
      image: 'awards/award-2.jpg',
      title: 'Largest Music Therapy Lesson',
      description: 'Guinness World Record for the largest music therapy lesson with 1,814 people at the Sydney Opera House, conducted by Sri Swamiji.',
      year: '2015',
      location: 'Sydney Opera House, Australia'
    },
    {
      image: 'awards/award-3.jpg',
      title: 'Longest Chanting Marathon (Team)',
      description: 'Guinness World Record for the longest chanting marathon lasting 24 hours, 10 minutes and 8 seconds at Karya Siddhi Hanuman Temple.',
      year: '2015',
      location: 'Frisco, Texas, USA'
    },
    {
      image: 'awards/award-4.jpg',
      title: 'Largest Breathing Lesson',
      description: 'Guinness World Record for the "Largest breathing lesson" (Pranayama) at India Community Center, organized by Dashavatara Yoga Center (USA).',
      year: '2016',
      location: 'Milpitas, California, USA'
    },
    {
      image: 'awards/award-5.jpg',
      title: 'Largest Online Video Album of People Chanting',
      description: 'Guinness World Record for the largest online video album of people chanting with 40,976 videos of devotees chanting Hanuman Chalisa from around the world.',
      year: '2016',
      location: 'Carapichaima, Trinidad and Tobago'
    },
    {
      image: 'awards/award-6.jpg',
      title: 'Largest Display of Bonsai Trees',
      description: 'Guinness World Record for the largest display of Bonsai trees — 2,649 trees exhibited at the World Bonsai Convention at Mysuru Ashram.',
      year: '2016',
      location: 'Mysuru, India'
    },
    {
      image: 'awards/award-7.jpg',
      title: 'Most Bird Species in an Aviary',
      description: 'Guinness World Record for the most bird species in a single aviary — 468 species housed at Shuka Vana, the sacred bird sanctuary at Avadhoota Datta Peetham.',
      year: '2017',
      location: 'Mysuru, India'
    },
    {
      image: 'awards/award-8.jpg',
      title: 'Largest Hindu Smriti (Bhagavad Gita)',
      description: 'Guinness World Record for the largest Hindu Smriti — a magnificent Bhagavad Gita book measuring 2.24m × 1.56m, unveiled on Sri Swamiji\'s 75th birthday.',
      year: '2017',
      location: 'Mysuru, India'
    },
    {
      image: 'awards/award-9.jpg',
      title: 'World\'s Largest Special Stamp',
      description: 'Guinness World Record for the world\'s largest special stamp measuring 2.87 m² (30.9 sq ft), issued by the Indian Postal Department.',
      year: '2018',
      location: 'Avadhoota Datta Peetham, Mysuru'
    },
    {
      image: 'awards/award-10.jpg',
      title: 'Largest Online Video Album of Birthday Wishes',
      description: 'Guinness World Record for the largest online video album of birthday wishes/greetings with 7,651 video submissions from devotees worldwide on Sri Swamiji\'s 80th birthday.',
      year: '2022',
      location: 'Mysuru, India'
    },
    {
      image: 'awards/award-11.jpg',
      title: 'Largest Simultaneous Hindu Text Recital',
      description: 'Guinness World Record for the largest simultaneous Hindu text recital organized by devotees in Dallas, USA.',
      year: '2022',
      location: 'Dallas, Texas, USA'
    },
    {
      image: 'awards/award-12.jpg',
      title: 'Largest Carnatic Band',
      description: 'Guinness World Record for the largest Carnatic Band consisting of 955 participants, organized at Karya Siddhi Hanuman Temple.',
      year: '2025',
      location: 'Allen, Texas, USA'
    },
    {
      image: 'awards/award-13.jpg',
      title: 'Largest Carnatic Band',
      description: 'On July 9, 2025, Sri Swamiji was honoured with a Guinness World Record for "Largest Carnatic Band" at the CUTX Event Center, Allen, TX, USA. Sri Swamiji led a Grand Nama Sankeertana titled "Sri Venkateshwara Vaibhavam" in which 955 artists, vocalists, and instrumentalists participated.',
      year: '2025',
      location: 'Mysuru, India'
    },
    {
      image: 'awards/award-14.jpg',
      title: 'Largest Display of Bonsai Trees (10,836)',
      description: 'On June 14, 2025, Sri Swamiji was honoured with a Guinness World Records title for "The Largest Display of Bonsai Trees", consisting of 10,836 trees across 257 species.',
      year: '2025',
      location: 'Mysuru, India'
    }
  ];

  ngOnInit() {
    window.scrollTo(0, 0);
    setTimeout(() => this.initScrollReveal(), 100);
  }

  openLightbox(award: Award) {
    this.selectedAward = award;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.selectedAward = null;
    document.body.style.overflow = '';
  }

  navigateAward(direction: number) {
    if (!this.selectedAward) return;
    const currentIndex = this.awards.indexOf(this.selectedAward);
    const newIndex = (currentIndex + direction + this.awards.length) % this.awards.length;
    this.selectedAward = this.awards[newIndex];
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
      { threshold: 0.1 }
    );
    reveals.forEach((el) => observer.observe(el));
  }
}
