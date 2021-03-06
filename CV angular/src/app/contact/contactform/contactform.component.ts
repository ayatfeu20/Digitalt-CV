import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-contact',
	templateUrl: './contactform.component.html',
	styleUrls: ['./contactform.component.scss']
})
export class ContactComponent implements OnInit {

	form: FormGroup;
	name: FormControl = new FormControl("", [Validators.required]);
	email: FormControl = new FormControl("", [Validators.required, Validators.email]);
	message: FormControl = new FormControl("", [Validators.required, Validators.maxLength(256)]);
	honeypot: FormControl = new FormControl(""); // för spam
	submitted: boolean = false; // success meddelande
	isLoading: boolean = false; // disable submit button när vi lada
	responseMessage: string; // svar meddelande till användare
	constructor(private formBuilder: FormBuilder, private http: HttpClient) {
		this.form = this.formBuilder.group({
			name: this.name,
			email: this.email,
			message: this.message,
			honeypot: this.honeypot
		});
	}
	ngOnInit(): void {
	}
	onSubmit() {
		if (this.form.status == "VALID" && this.honeypot.value == "") {
			this.form.disable(); 
			var formData: any = new FormData();
			formData.append("name", this.form.get("name").value);
			formData.append("email", this.form.get("email").value);
			formData.append("message", this.form.get("message").value);
			this.isLoading = true; 
			this.submitted = false;
			this.http.post("YOUR GOOGLE WEB APP URL HERE", formData).subscribe(
				(response) => {
					// välja medelande
					if (response["result"] == "success") {
						this.responseMessage = "Tack för ditt meddelande!";
					} else {
						this.responseMessage = "Oops! Något gick fel... lädda om sidan och försök igen";
					}
					this.form.enable(); 
					this.submitted = true;
					this.isLoading = false;
					console.log(response);
				},
				(error) => {
					this.responseMessage = "Oops! förkomma fel... lädda om sidan och försök igen";
					this.form.enable(); 
					this.submitted = true;
					this.isLoading = false;
					console.log(error);
				}
			);
		}
	}
}