import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface RegistrationForm {
  fullName: string;
  email: string;
  phone: string;
  numberOfGuests: number;
  message: string;
  agreeToTerms: boolean;
}

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  form: RegistrationForm = {
    fullName: '',
    email: '',
    phone: '',
    numberOfGuests: 1,
    message: '',
    agreeToTerms: false
  };

  isSubmitted = false;
  isSubmitting = false;

  ngOnInit() {
    window.scrollTo(0, 0);
    setTimeout(() => this.initScrollReveal(), 100);
  }

  onSubmit() {
    if (!this.form.fullName || !this.form.email || !this.form.agreeToTerms) {
      return;
    }

    this.isSubmitting = true;

    // Simulate submission (replace with actual backend call)
    setTimeout(() => {
      this.isSubmitting = false;
      this.isSubmitted = true;
      console.log('Registration submitted:', this.form);
    }, 1500);
  }

  resetForm() {
    this.form = {
      fullName: '',
      email: '',
      phone: '',
      numberOfGuests: 1,
      message: '',
      agreeToTerms: false
    };
    this.isSubmitted = false;
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
