# Registry-form-validation-using-RegEx

A simple registration form made with labels and inputs which changes colour if the field value is unacceptable .<br />
Try at:https://shreyajana2001.github.io/Registry-form-validation-using-RegEx/

Validations:
*  **Full Name** : Accepts texts with two or three parts.(min length:2 max length:20 each)
```
Accepted Formats Examples : Shreya Jana
                            Shreya Jana Student
```
*  **Phone** : A 10 digit numeric phone number or a (3+3+4) number separated by ('-'/'.'/' ') is acceptable.
```
Accepted Formats Examples : 9876543210
                            555-444-3540
                            555.444.3540
                            555 444 3540
```
*  **Zip Code** : A numeric zip code of length 5 or (5+4) separated by '-' is accepted.
```
Accepted Formats Examples : 55555
                            55555-4444
 ```
*  **Email** : An email Id made with (a-z/A-Z/0-9/-/_/.) @ (a-z/A-Z/0-9/-/_/.).( a-z/A-Z{length - min:2 max:5} )is acceptable.
 ```
 Accepted Format Examples : S.hreya_123@gmail.com
                            cache-mkil@jik.io
                            windo.w@10.media
 ```
*  **Password** : A password made with (a-z/A-Z/0-9) with length of 10 is accepted.
```
Accepted Formats Examples : uhshAHbhx9
```

If input other than the accepted formats is entered then it makes the input red for the user to notice and make correction. Also if any of the inputs is invalid or left blank and submit button is clicked then it sends an alert to the user.  

 
