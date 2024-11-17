import { Component, ElementRef, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, AfterViewInit {

  isLoggedIn: boolean = false; // Initialize with false
  rol: string | null = null; // Store the user's role

  constructor(private loginService: LoginService) {}

  @ViewChild('hamburger') hamburger!: ElementRef;
  @ViewChild('navLinks') navLinks!: ElementRef;

  @ViewChild('testimonialsContainer') testimonialsContainer!: ElementRef;
  @ViewChild('indicators') indicators!: ElementRef;

  currentSlideIndex = 0;

  ngOnInit(): void {
    this.isLoggedIn = this.verificar();
    this.rol = this.loginService.showRole(); // Set role if needed
  }

  ngAfterViewInit() {
    if (this.hamburger && this.hamburger.nativeElement) {
      this.hamburger.nativeElement.addEventListener('click', () => this.toggleMenu());
    }
    this.showSlide(this.currentSlideIndex);
  }

  toggleMenu() {
    if (this.hamburger?.nativeElement && this.navLinks?.nativeElement) {
      console.log('Hamburger menu clicked');
      this.hamburger.nativeElement.classList.toggle('active');
      this.navLinks.nativeElement.classList.toggle('show');
    }
  }

  showSlide(index: number) {
    const slides = this.testimonialsContainer?.nativeElement.querySelectorAll(".testimonial-card");
    const indicators: NodeListOf<HTMLElement> | null = this.indicators?.nativeElement.querySelectorAll(".indicator");

    if (!slides || !indicators) {
      console.error("Slides or indicators not found.");
      return;
    }

    // Asegurarse de que el índice esté dentro del rango
    if (index >= slides.length) {
      this.currentSlideIndex = 0;
    } else if (index < 0) {
      this.currentSlideIndex = slides.length - 1;
    } else {
      this.currentSlideIndex = index;
    }

    // Actualiza la propiedad `transform` para mostrar la diapositiva seleccionada
    this.testimonialsContainer.nativeElement.style.transform = `translateX(-${this.currentSlideIndex * 100}%)`;

    // Convierte `NodeList` a un arreglo para usar `forEach` (si es necesario)
    Array.from(indicators).forEach((indicator, idx) => {
      indicator.classList.toggle("active", idx === this.currentSlideIndex);
    });
  }

  currentSlide(index: number) {
    this.showSlide(index);
  }


  // Handle login/logout button click
  handleLogin() {
    if (this.isLoggedIn) {
      this.cerrar(); // Log out if already logged in
    } else {
      // Perform any additional login logic if needed
    }
  }

  // Clear session on logout
  cerrar() {
    sessionStorage.clear(); // Clear session storage
    this.isLoggedIn = false; // Update login state
  }

  // Verify if the user is logged in
  verificar(): boolean {
    return this.loginService.verificar();
  }
}
