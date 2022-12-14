
## Backend
### Yerlan Negmetulla

This week I implemented the endpoints for the Developer's dashboard. In the Developer's studio (dashboard), the developer has the ability to view the games that he/she/it has uploaded to the platform, their status, such as how many people have played a particular game during its existence, feedback left by users, and the rating of the game at the moment. It is also possible to sort the games according to different criteria. It is possible to add a game and details about it, such as titles, descriptions, covers, genres and tags for games. It is also possible to edit and delete the game. We also changed the backend folder in the project to submodule into a separate repository.

Fixed errors that occurred after the transfer of the project; Moved changes to the new repository; Changed the Game entity by bringing a user with the developer role to it; Added property for counting the number of reviews; Changed property for calculating total_rate from sum to average; For GameSerializer added options and fields for users and feedbacks; Register new router for Developer's studio (dashboard); Added DevGamesViewSet for developer studio (dashboard) and rewritten all methods for CRUD; Added sorting by different options for developers on the developer's studio page; And fixed minor errors found when viewing the project;

## Backend
### Zhanbolat Bekmaganbetov

This week i was working on game feedback system and game endpoints such game comments crud, game uploading. I started to refactor rating system, due to discussions on feedback system. It was decided to merge rating system into feedback, such as it's the same. After the game user can evaluate his game exprience and leave some comment. The comment may be empty, while the rating not. I also was working on file system and uploading file on server, at this point I tested connection with AWS S3 bucket, that provides us during the free tier 5Gb. But we are still thinking and considering about the other possible places where we could store and upload our files, we also have other options such as Yandex Object Storage and the same solution from Google Cloud and Microsoft Azure where it's also possible to store the data. This week I was also worked on the preparations for deployment and ci/cd and troubles related to restrictions on this repository (we are not able to configure ci/cd, set secrets and so one). Finally we decided to use Git submodules (info: https://git-scm.com/book/en/v2/Git-Tools-Submodules) for solving our troubles. Was created separated repository that duplicated the content of Project/backend/ folder. This main repository was syncronized with the submodule's repository. Were fixed issues related to syncronizing repositories and some small bugs were also fixed

## Frontend
### Abylay Altazhanov

This week I created some components and pages "settings", "profile", then reworked the code, fixed some bugs

Profile page:
![Profile page](./week10/Profile.jpg)

Settings page:
![Settings page](./week10/settingpage.jpg)
### Yernat Bekzat

This week I developed Developer's Page, where developer can upload games, edit, see statistics of his game.

It has inconvinient to style some components and I had override quasar's style and in the it looks not satisfactory, but on the otherhand it saves a lot of time. 

Developer's page:
![Developers page](./week10/dev.png)

![Developers page](./week10/dev1.png)
![Developers page](./week10/dev2.png)


## UX/UI Design
### Aimzhan Sytdykova

This week, pages such as: sdk and its status with description, comments, leaderboard and share were made. There is also their mobile adaptation. From the rest of the pages, this is for game developers with their profile, game list and game statistics.

![alt image0](https://github.com/SuleymanDemirelKazakhstan/diploma-project-graduaders/blob/main/Design/w10image0.png?raw=true)

![alt image1](https://github.com/SuleymanDemirelKazakhstan/diploma-project-graduaders/blob/main/Design/w10image1.png?raw=true)

![alt image2](https://github.com/SuleymanDemirelKazakhstan/diploma-project-graduaders/blob/main/Design/w10image2.png?raw=true)

![alt image3](https://github.com/SuleymanDemirelKazakhstan/diploma-project-graduaders/blob/main/Design/w10image3.png?raw=true)

![alt image4](https://github.com/SuleymanDemirelKazakhstan/diploma-project-graduaders/blob/main/Design/w10image4.png?raw=true)

![alt image5](https://github.com/SuleymanDemirelKazakhstan/diploma-project-graduaders/blob/main/Design/w10image5.png?raw=true)

![alt image6](https://github.com/SuleymanDemirelKazakhstan/diploma-project-graduaders/blob/main/Design/w10image6.png?raw=true)

![alt image7](https://github.com/SuleymanDemirelKazakhstan/diploma-project-graduaders/blob/main/Design/w10image7.png?raw=true)

![alt image8](https://github.com/SuleymanDemirelKazakhstan/diploma-project-graduaders/blob/main/Design/w10image8.png?raw=true)

![alt image9](https://github.com/SuleymanDemirelKazakhstan/diploma-project-graduaders/blob/main/Design/w10image9.png?raw=true)

![alt image10](https://github.com/SuleymanDemirelKazakhstan/diploma-project-graduaders/blob/main/Design/w10image10.png?raw=true)

![alt image11](https://github.com/SuleymanDemirelKazakhstan/diploma-project-graduaders/blob/main/Design/w10image11.png?raw=true)

![alt image12](https://github.com/SuleymanDemirelKazakhstan/diploma-project-graduaders/blob/main/Design/w10image12.png?raw=true)

# Jacky Chan
* Learn kung-fu
* Invented kung-fu
