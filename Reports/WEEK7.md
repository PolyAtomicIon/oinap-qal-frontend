## UX/UI Design
### Aimzhan Sytdykova

**Wireframes:**\
I started creating design from wireframes. It is speeds up the work because you think over the whole structure in advance. Also it is better for developers too.

![alt wireframe](https://github.com/SuleymanDemirelKazakhstan/diploma-project-graduaders/blob/main/Design/wireframe1.png?raw=true)

**Main/home page:**\
How you can see I completed with design of homepage which is home page where users can to return by clicking on logo. Also I created components like header, categories, "cards" of games and so on. I will help me if I want to change something in one element everywhere at a time just by changing the obscene component.

![alt main/home page 1](https://github.com/SuleymanDemirelKazakhstan/diploma-project-graduaders/blob/main/Design/main_home1.png?raw=true)

![alt main/home page 2](https://github.com/SuleymanDemirelKazakhstan/diploma-project-graduaders/blob/main/Design/main_home2.png?raw=true)

**Registration/authorization page:**\
With these page I did the same things as in the previous one like elements or components. But this page has different states like reset password or inactive buttons until the user enters all the data correctly.

![alt sign in/sign up](https://github.com/SuleymanDemirelKazakhstan/diploma-project-graduaders/blob/main/Design/sign_in_up.png?raw=true)

## Backend
### Yerlan Negmetulla
This week we implemented endpoints for authentication and authorization, home page. Web application security is critical. The user sends a POST request with a login username and password, after which the server will generate an access_token which is a short lifetime jwt (maybe 5 minutes) and refresh_token is a long lifetime jwt (days) and send it in the response body.
In users.models we defined the user model and in users.admin we registered the new user model on the admin site.
We declared in the settings that all endpoints will require authentication by default, we can override this in certain views. Now if you try to access some endpoint you will get a 403 error. We need to login and then send the access_token in the request header.
The login endpoint will be a post request with username and password in the body of the request. If the login is successful, we will have: access_token and refresh_token in the response body.
Now that we have the access_token, this time we set the Authorization header to the endpoint.
Whenever a token has expired or you need a new token for whatever reason, we need a refresh_token endpoint.
If the refresh_token is invalid or expired, the user will need to re-login.

![image](/Proposal/Backend/1.png)
![image](/Proposal/Backend/2.png)

# Jacky Chan
* Learn kung-fu
* Invented kung-fu