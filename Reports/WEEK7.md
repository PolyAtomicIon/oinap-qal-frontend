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

### Zhanbolat Bekmaganbetov
This week we implemented endpoints for homepage and base structure for main models of home page such as game and category. We implemented base CRUD for each of them using viewsets, updated structure of project, we made it folder structure much more understadanble, and clear. Then we maintained filters and created filters for games and categories. Also were updated routes in core and games apps. We also started to implement rating system for games and discussing and researching implementation methods for rating system and views counting

## Frontend
### Altazhanov Abylai
* my task was to create a home page and an authentication page
* I made these pages and added some feature  features and changed some components.
  but i think i will have to change and add a lot of things in the future
  



**Registration page:**\
![layouts](week5/auth1.PNG)

![layouts](week5/auth2.PNG)

![layouts](week5/auth3.PNG)

#

**Home page:**\
![layouts](week5/homepage.PNG)

![layouts](week5/homepage2.PNG)

### Yernat Bekzat
* SDK -  software development kit. In our case is a boilerplate to connect to our services and allows to integrate ads, reward for watching ads, communicate parent node to save progress, manipulate with html5 from external sources etc. 
* I researched ready solutions on the market, for example GameArt platform offers their developrs to intergrate their html5 game to pre-written boilerplate file, with all neccessary manipulations and ad integrations. Example, https://www.gamearter.com/developers/html5/packages
*  It could save a lot vulnerabilities in security and do not require extra business logic from both sides, from marketplace owners ans game developers, however we'd like to re-use our UI-library, services and in this case we should handle complex configurations to build **SDK** separately or code all UI-library again in other stack or duplicate code in to other project, which will be difficult to synchronize.
* So I come up with a 3 layered solution: APP, Control, Game. From any level I have access data through APIs. This is achieved by **Window.postMessage.**
* Here is the 3 layers: 
  
    ![alt week7-3-layers](./week7/three-layers.png)
  
* Link to API List for SDK
    https://github.com/SuleymanDemirelKazakhstan/diploma-project-graduaders/blob/sdk-demo/Project/frontend/src/components/API%20list%20for%20SDK.md 
* Demo video of the working prototype
    https://youtu.be/WiuGbPpEut8
* here is the link to source code for SDK in **demo-sdk** branch
    https://github.com/SuleymanDemirelKazakhstan/diploma-project-graduaders/tree/sdk-demo/Project/frontend
