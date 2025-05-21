import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonButton, IonToolbar, IonItem, IonList, IonLabel } from '@ionic/angular/standalone';
import { SupabaseService } from "../supabase.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonList, IonItem, IonButton, IonContent, IonHeader ,IonLabel, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class LoginPage {

  email = ''
  constructor(private readonly supabase: SupabaseService) {}
  async handleLogin(event: any) {
    event.preventDefault()
    const loader = await this.supabase.createLoader()
    await loader.present()
    try {
      const { error } = await this.supabase.signIn(this.email)
      if (error) {
        throw error
      }
      await loader.dismiss()
      await this.supabase.createNotice('Check your email for the login link!')
    } catch (error: any) {
      await loader.dismiss()
      await this.supabase.createNotice(error.error_description || error.message)
    }
  }

}
