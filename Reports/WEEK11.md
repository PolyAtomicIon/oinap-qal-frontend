
## Backend
### Yerlan Negmetulla

This week we have implemented password reset and recovery endpoints. implemented endpoints for the admin panel. And code refactoring.

When you are logged in, you can enter your old password for confirmation and change your password to a new one:

![Reset password](./week11/reset_pass.png)
If you are not logged in and have forgotten your current password, you can recover your password using the email address you provided during registration:

![Forgot password](./week11/forgot_pass.png)

![Forgot password error](./week11/forgot_pass_err.png)

Through the letter that came to your mail, you can follow the link and send a request to restore your password:

![Restore password message](./week11/msg_restore_pass.png)

![Restore password](./week11/restore_pass.png)

### Zhanbolat Bekmaganbetov

For this week I was working on code refactoring and finishing the rest endpoints. I optimized code related to games filters, removed all filter logic from viewsets to special filter classes, added filtering base on game rating, views count, creation date. Then I added additional endpoints for admin and developer pages, where it's possible to get full information with such data as game feedbacks_count, total_rate. I worked on integration of S3 with Django, and researched for ways to safely pass confidential data to Docker environment in production environment, but stuck a little bit, due to problems with Github Actions and AWS, also I researched for ways of query optimizations in Django, learned about such methods like select_prefetch, prefetch_related, only and keyset pagination. I also discussed with Bekzat about game uploading and the ways its implementation. 

See branches:
https://github.com/180107180/diplom-backend/tree/feat/statistics
https://github.com/180107180/diplom-backend/tree/refactor/games-filters

## Frontend
### Abylay Altazhanov
### Yernat Bekzat

This week I developed Admin's Page, where admin can accept, reject new games, and also can view game itself.

Developer's page:
![Admin page](./week11/admin.png)

Also refactored and fixed bugs in other components.


## UX/UI Design
### Aimzhan Sytdykova

The arrows that you see in the screenshot are the user's flow, in other words, a prototype so that you can clearly see the user's path, it is possible to correct the shortcomings during its construction and testing. With it, I can test on the users themselves and see the ux problems and complement the design.

In the prototype, for example, there is a path where it shows how the player gets to the game page itself, or the developer enters the studio and downloads the game developed by him.

![alt image0](https://github.com/SuleymanDemirelKazakhstan/diploma-project-graduaders/blob/main/Design/week11_image0.png?raw=true)
