# abcx Task

Live Link : https://abcx-task.netlify.app/

# Description

## Step 1 - Login Page

!["Login Page"](https://i.ibb.co/FK8JL2y/image.png 'Login')

This is the login page which has the routing of `/login` and it has two fields email and password, and both had validations which is done using _YUP_ and used _react-hook-form_ for form integrations and used custom component for Inputs, used _Form Context_ to show the errors (show in the next image)

!["Erros"](https://i.ibb.co/X5G1hwB/image.png 'Errors')

Have Email validation and show, hide button for password

!["Validation"](https://i.ibb.co/gMsw8hr/image.png 'Validation')

## step 2 - Cards

!["cards"](https://i.ibb.co/VtFjBnT/image.png 'cards')

As we can see here this page has the routing of `/cards` which contains two cards with content _A_ and _B_, upon click any one of this we will redirected to the details page where it will show which card is selected.

## step 3 - card detail

!["Card Detail"](https://i.ibb.co/4R12KpW/image.png 'A selected')

And here is the details page where it is showing a is selected as we clicked on _A_ and the routing is `/details?selected=A`, so the data is basically coming from query params rather than storing it in a state unnecessarily.

!["Card Detail"](https://i.ibb.co/JjgWQ5L/image.png 'A selected')

It is basically the same page, only difference is _B_ is selected

##### Also Both the pages have a back button on clicking that we will be redirected to Cards Page
