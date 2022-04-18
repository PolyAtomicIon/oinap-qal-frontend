
## Backend
### Yerlan Negmetulla and Zhanbolat Bekmaganbetov

This week we have been working on the development of a telegram bot that can be used to play games from our platform. The bot was written in NodeJs. For now it's just a prototype version, that we are used for testing the Telegram APIs and our system, for testing purposes we used open source HTML5 games in order to research the behavior of the bot and how it will works with games from our platform and it can be improved:

![Telegram bot 1](./week12/telegram_bot_1.jpg)
![Telegram bot 2](./week12/telegram_bot_2.jpg)

### Yerlan Negmetulla

This week we are in addition to the implementation of telegram bot, i implemented unique fields for the roles of gamers and developers. Added tags for games and search by them. And code refactoring.

When you sign up as a gamer, in addition to basic user data, you will need to select at least 3 categories for the games you like:

![gamer reg](./week12/yn1.png)

When you sign up as a developer, in addition to basic user data, you will need to fill in your phone contact information and a link to portfolio:

![developer reg](./week12/yn2.png)

For tags, we created a table with word stem and foreign key games. For the table of games, a tag field was added where all tags with the full word will be stored. When we create a game, we save tags with a full word in the tags field of the Game table and pass each word through a stemmer in the nltk python library that pulls out the stem of the word and saves it in the TagGame table in the place with the game. We implemented it this way for the reason that when the user searches for a game by tag, they will not need to somehow mess up how to spell the word correctly, the application will search for this word by its stem word and therefore the search should be convenient and useful:

![tags](./week12/yn3.png)


# Jet Lee
* Made kung-fu
* Learned kung-fu
# Jacky Chan
* Learn kung-fu
* Invented kung-fu