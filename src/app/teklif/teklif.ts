import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-teklif',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './teklif.html',
  styleUrl: './teklif.scss'
})
export class TeklifComponent {
  teklifForm: FormGroup;
  submitted = false;
  successMessage = false;

  emlakTipleri = [
    { value: 'satilik', label: 'Satılık Konut' },
    { value: 'kiralik', label: 'Kiralık Konut' },
    { value: 'ticari', label: 'Ticari Gayrimenkul' },
    { value: 'arsa', label: 'Arsa / Arazi' },
    { value: 'yatirim', label: 'Yatırım Danışmanlığı' }
  ];

  constructor(private fb: FormBuilder) {
    this.teklifForm = this.fb.group({
      adSoyad: ['', [Validators.required, Validators.minLength(3)]],
      telefon: ['', [Validators.required, Validators.pattern(/^[0-9]{10,11}$/)]],
      email: ['', [Validators.required, Validators.email]],
      emlakTipi: ['', Validators.required],
      mesaj: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get f() {
    return this.teklifForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.teklifForm.invalid) {
      return;
    }

    // Form geçerli - burada API'ye gönderilebilir
    console.log('Form Değerleri:', this.teklifForm.value);
    
    // Başarı mesajı göster
    this.successMessage = true;
    this.teklifForm.reset();
    this.submitted = false;

    // 5 saniye sonra mesajı gizle
    setTimeout(() => {
      this.successMessage = false;
    }, 5000);
  }
}
