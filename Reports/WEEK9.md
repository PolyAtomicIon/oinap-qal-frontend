## UX/UI Design
### Aimzhan Sytdykova

This week I made two necessary pages and their states in the web and mobile versions. This is the profile and settings.

In the mobile version, as well as in the web version, I decided to make an upper side menu to go to the profile and settings from the main page. Also in this menu there is an opportunity to log out of your account. In the mobile version of the profile, the user must go to the friends and rating tab to view the information he needs, and in the web version, this information can be seen immediately when entering his page. The mobile version was made so that there was no overload of information on one page. If we talk about the settings, then everything is simple there. A person can change their email or account password by clicking on "Edit".

* Web Version
    * Upper Side Menu\
    ![alt upper_side_menu](https://github.com/SuleymanDemirelKazakhstan/diploma-project-graduaders/blob/main/Design/upper_side_menu.png?raw=true)
    * Friends and Ratings page\
    ![alt friends_and_ratings_web](https://github.com/SuleymanDemirelKazakhstan/diploma-project-graduaders/blob/main/Design/friends_and_ratings_web.png?raw=true)

* Mobile Version
    * Settings page
        * Change Name\
        ![alt settings_name](https://github.com/SuleymanDemirelKazakhstan/diploma-project-graduaders/blob/main/Design/settings_name.png?raw=true)
        * Change Email\
        ![alt settings_email](https://github.com/SuleymanDemirelKazakhstan/diploma-project-graduaders/blob/main/Design/settings_email.png?raw=true)
        * Change Password\
        ![alt settings_password](https://github.com/SuleymanDemirelKazakhstan/diploma-project-graduaders/blob/main/Design/settings_password.png?raw=true)
    * Friends and Ratings
        * Friends page\
        ![alt friends_menu_mobile](https://github.com/SuleymanDemirelKazakhstan/diploma-project-graduaders/blob/main/Design/friends_menu_mobile.png?raw=true)
        * Ratings page\
        ![alt ratings_menu_mobile](https://github.com/SuleymanDemirelKazakhstan/diploma-project-graduaders/blob/main/Design/ratings_menu_mobile.png?raw=true)

## Backend
### Zhanbolat Bekmaganbetov

This week I refactored code and wrote the configuration for the project, i was working on wrapping an application in docker and prepared django configuration for these purposes. I made a research on using transactions and atomic transactions in Django, async operations in python and discuss with Yerlan about business logic and it's improvement points. I also researched existed business logic in a project in order to find vulnerabilities and parts where some logic could be broken or was't took into account, such as acceptipting rules by user and discussed about it with Yerlan on the need of validation for that on out part. We also discussed about UserProfile and structure of interfaces of rest apis, as the result we decided to standartize our exception requests by creating a custom universal exception handler, which i'm working on. I with Yerlan were been spoken on the role validations for user  entities, how to handle it, what should and must be there, and what should not
