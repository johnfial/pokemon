# Pokemon Pokedex Play Kit

I'm from Hawaii, where Japanese influence is almost equal to mainland-US influence, and have always been curious why I never got into pokeman in any way. As a kid, everyone else had a tamagotchi, and I played others' a little, but never pokemon... 

Anyway, this "lab" began as class homework for a programming course I was TA-ing, and the idea kind of grew on me as an exercise connecting the database, Django, DOM manipulation via Vue.JS and basic CSS. Pokemon are growing on me!


<!-- Ryan W  12:57 PM
And a person (player/whatever) catches them?
In the Pokemon universe people catch pokemon (like taming an animal). The influence from the creator started when he caught bugs outside.
Are there infinite instances of each pokemon, or once someone catches it, they own it until released/whatever?
The universe is designed like so:
Common - Lots of these pokemon exist in the wild
Uncommon - less of these pokemon exist in the wild
Rare - Few of these pokemon exist in the wild
legendary - only one of these exist
Is the word pokemon both singular and plural, or is the plural pokemen, or pokemaans?
both singular and plural - pokemon
Are there more attributes to pokemon than in this database, than height and weight, like in a huge magic- or D&D-card deck?
depends on what you're referring to. there are stats in the video games (attack, defense, hit points( health), special attack, etc)
card game only has health and energy cost
the simplified model nowadays is Attack, Defense, and Health - each stat have a 0-15 randomly generated number. (ie 10 attack, 7 defense, and 12 health). These are also called IV's. Combined, these create a CP(combat point), which determines the overall strength of a pokemon
Any links to a quick* online web-based game I could play to catch some pokemon? (*Seriously, like non-addictive for 5-15 minutes. I played Blizzard's digital card game Hearthstone years ago and don't want something addictive like that! I have no smartphone, so no risk trying to catch an augmented-reality pokemon in the middle of a busy intersection for me, thankfully!)
Doesn't exist that im aware of. You'd have to ROM and Emulate it. or get a nintendo console.  Nintendo is serious on this trademark. 
Is this list all the pokemon? Regardless, is there just one list or are there like extra-pokemon addon sets over the years/decades, official and unofficial?
This list consists of the original 151 released in 1996. Theres 898 now. Every couple years they release a half hearted clone of the previous list. Mostly same or similar in nature to the previous generation but with new names, faces, and some moves. but the types are what is cloned.
Is arcanine the highest density pokemon? I haven't calculated yet, but I think that's a good database exercise to do (calculate a new field density based on weight / height.) EDIT: no, I already see seel is >> arcanine.
dont know what you mean here
What units are height and weight in? That's important!
freedom units if you're an american. or the confusing units if you're anywhere else. -->

<!--  -->


<!-- Following from the main Pokedex Starter kit (151 pokemon with basic stats: name/image/etc.) -->

<!-- # Pokedex Starter

## Installation

Make sure you have Python and Pipenv installed on your computer.

Download the repo and save it to your code folder in the class repo. *make sure you download it, don't clone it or it won't upload to the class repo correctly*

If you are not running Python 3.8, edit the last line of the `Pipfile` to refer to your version instead.

Navigate to the pokedex folder in the terminal and do the following:

- `pipenv install` Create the virtual enviroment and install dependencies.
- `pipenv shell` Enter the new virtual enviroment.
- `python manage.py migrate users` Migrate the user model. *this django project uses a custom user model, you MUST migrate the users app before migrating the rest!*
- `python manage.py migrate` Migrate all other models.
- `python manage.py createsuperuser` Create yourself a super user.
- `python manage.py load_pokemon` Load Pokemon into the database.

You're good to go! This Django project comes with a database full of Pokemon, login/logout/registration pages, and a `home.html` template for you to create your Vue app. -->
