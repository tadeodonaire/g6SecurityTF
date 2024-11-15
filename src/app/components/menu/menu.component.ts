import { Component, ElementRef, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, AfterViewInit {


  constructor() {}

  @ViewChild('hamburger') hamburger!: ElementRef;
  @ViewChild('navLinks') navLinks!: ElementRef;

  @ViewChild('testimonialsContainer') testimonialsContainer!: ElementRef;
  @ViewChild('indicators') indicators!: ElementRef;

  currentSlideIndex = 0;

  ngOnInit(): void {}

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
}
