## Verify Email and Passwords Formats

To use this plugin to validate email and password inside a form, we need to add class and it will work on submit of form. 
It will verify that either email is correct or not i.e. format of email should be <b>example@mail.com</b> and for registeration
form the password are same or not and also password length is valid or not. Find example 
<a href="https://rawgit.com/asdkazmi/Email-Password-Validation/master/example/example.html">here</a>


### Download File

Now to use this plugin first of all we need to download javscript file 
<a href="https://rawgit.com/asdkazmi/Email-Password-Validation/master/js/eltaframe-validation.js">Right click and save the link</a>
Now add this javascript file to your webpage. You can edit this file as you want.

### Use Plugin

Now to use this plugin we need to add class <b>validate-form</b> to your form which you want to validate. This class fire the
event to validate email and password. e.g.
````
<form class="validate-form">
<!-- form goes here -->
</form>
````

#### Email Validation

To validate email we need to add attribute **data-validate="email"** to your input which you want to validate for email format.
It will just validate email format but not check either your email exist in your database or not (Underprocess). This attribute
will fire javascript to validate email. If email is in valid form then it will fire success message otherwise error message.
e.g.
````
<form class="validate-form">
<!-- form goes here -->
  <input type="input" name="email" data-validate="email" />
</form>
````
To show messages on validation we need to add html element to show the messages. The main element will have class 
**validate-email** where we will add messages. Next we need to add child element for different type of messages.

````
<div class="validate-email">
<!-- Messages goes here -->
</div>
````
There are three types of messages for email validation i.e.
* Empty input message

When input will be empty then this message will be display. To add this message we need to add element inside element having
class **validate-email** with class **empty-error**. e.g.
````
<div class="validate-email">
	<span class="empty-error">Email address is empty</span>
</div>
````

* Not Valid Email message

When email will not be in valid format then this message will display. To add this message we need to add element inside 
element having class **validate-email** with class **not-valid-error**. e.g.

````
<div class="validate-email">
	<span class="empty-error">Email address is empty</span>
	<span class="not-valid-error">Address not valid</span>
</div>
````


* Success message

When email will be in valid format then success message will display. To add this message we need to add element inside 
element having class **validate-email** with class **success**. e.g.
 
Here are all the email validation messages
````
<div class="validate-email">
	<span class="empty-error">Email address is empty</span>
	<span class="not-valid-error">Address not valid</span>
  <span class="success">You have successfuly entered Email</span>
</div>
````

#### Password Validation

To validate password we need to add attribut **data-validate='password'** to password input to validate either the password
input is empty/valid-length or not. If there is one password input with attribut **data-validate='password'** then it will
just find either password input is empty/valid-length or not. If there are two or more input for password as we use during
registeration form, then firstly it will find that either input are empty/valid-length or not, if input are not empty and
there is in valid length then it will find that either password input has same password or not. If password are same then 
it will fire success message otherwise error message.

````
<input type="password" data-validate='password' />
````
To show messages on validation we need to add html element to show these messages. The main element will have class 
**validate-password** where we will add messages. Next we need to add child element for different type of messages.

````
<div class="validate-password">
<!-- Messages goes here -->
</div>
````
There are three types of messages for password validation i.e.
* Empty input message

When input will be empty then this message will be display. To add this message we need to add element inside element having
class **validate-password** with class **empty-error**. e.g.
````
<div class="validate-password">
	<span class="empty-error">Password is empty</span>
</div>
````

* Length Error Message

This error will be display when the length of message is not valid. For this first we need to add length
of password. For this we will add attribute **data-length='n'** where n is replaced by length of 
password. Next we will add error message for not valid length, for this we need to add element inside element having class **validate-password** with class **length-error**. e.g.
````
<input type="password" data-validate='password' data-length='8' />
<div class="validate-password">
	<span class="empty-error">Please enter your password</span>
	<span class="length-error">There must be atleast 8 characters</span>
</div>
````

* Password Not Same message

When there are two password inputs and password are not same then this message will be fired. To add
this message we need to add element inside element having class **validate-password** with class
**not-valid-error**. e.g.

````
<div class="validate-password">
	<span class="empty-error">Please enter your password</span>
	<span class="length-error">There must be atleast 8 characters</span>
	<span class="not-valid-error">Password should be same</span>
</div>
````

* Success message

When password will be valid i.e. non-empty/required-length/same (when there are two password input) then
success message will display. To add this message we need to add element inside 
element having class **validate-password** with class **success**. e.g.
 
Here are all the Password validation messages
````
<div class="validate-password">
	<span class="empty-error">Email address is empty</span>
	<span class="length-error">There must be atleast 8 characters</span>
	<span class="not-valid-error">Password should be same</span>
  	<span class="success">You have successfuly entered Email</span>
</div>
````

The complete form will be displayed as

````
<form class="validate-form">
	<input type="input" data-validate="email" />
	<div class="validate-email">
		<span class="empty-error">Email address is empty</span>
		<span class="not-valid-error">Address not valid</span>
		<span class="success">You have successfuly entered Email</span>
	</div>
	<input type="password" data-validate='password' data-length='8' />
	<div class="validate-password">
		<span class="empty-error">Please enter your password</span>
		<span class="length-error">There must be atleast 8 characters</span>
		<span class="not-valid-error">Password should be same</span>
		<span class="success">You have successfuly entered password</span>
	</div>
	<button type="submit">Submit</button>
</form>
````
In a little work your validations will be done.



My aim is to make programming easy and easy and easy. Enjoy it.
