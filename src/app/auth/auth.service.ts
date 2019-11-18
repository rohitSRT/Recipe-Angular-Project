import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";
//import { throwError } from "rxjs";



interface AuthResponseData{
    idToken:	string//A Firebase Auth ID token for the newly created user.
email	:string	//The email for the newly created user.
refreshToken	:string	//A Firebase Auth refresh token for the newly created user.
expiresIn	:string	//The number of seconds in which the ID token expires.
localId	:string	//The uid of the newly created user.
}
@Injectable()
export class AuthService{

    constructor(private httpClient:HttpClient){}

    onSignUp(email:string,password:string)
    {

       return this.httpClient.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDKyY-6d_9FU-nDXLyuQsfWQLGad3fFb4M',
    {
        email:email,
        password:password,
        returnSecureToken:true
    }).pipe(catchError (errorRes=>{

        let errorMessage = 'An error Occured';
        

        if(!errorRes.error || !errorRes.error.error)
         {
                return (errorMessage);
         }
         else{
            errorMessage = errorRes.error.error.message;
         }
         

        // return throwError(errorMessage);
    }))

    }

}