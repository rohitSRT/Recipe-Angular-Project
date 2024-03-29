import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "./auth.service";

@Component({
    selector : 'app-auth',
    templateUrl : './auth.component.html'
})
export class AuthComponent{

    constructor(private authService:AuthService){}
    isLoginMode=true;
    isLoading = false;
    error:string= null;

    OnSwitch(){
        this.isLoginMode=!this.isLoginMode;
    }
    onSubmit(form:NgForm){

        if(!form.valid){
            return
        }
        else{
            
        const email = form.value.email;
        const password = form.value.password;
        this.isLoading=true;
        if(this.isLoginMode){

        }else{
            this.authService.onSignUp(email,password).subscribe(
                responseData =>{
                    console.log(responseData);
                    this.isLoading=false;
                },
                errorMessage =>{
                     console.log(errorMessage);

                   this.error=errorMessage;
                    this.isLoading=false;
                }
            );
        }
        

        }
        form.reset();
    }

}