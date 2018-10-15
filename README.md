# Uithuis

> ** disclaimer ** : There will be some bad english and some not translatable dutch. I'll try to fix it later on

This readme is not only a guide trough the process of creating the "Uithuis risico taxatie app" as a journey to the process of creating my very first full grown `React-native` app.

## Day by day

Here you will find a day by day overview of the progress i made. Since this information was lacking the first week, i will do a overview of what i've stumbled across the first few days:

### Day one: The project

The first day was about the project itself. A quick summary will follow later. The most important thing learned that day; **choose your own framework.** 🎉 🎊

As I learned the possibility to choose your own js framework, my first thought was that this project was the perfect opportunity to choose `react-native`.

#### Problem:

There is a app, somewhere on a ip address that contains a set of questions that when filled result in a percentage of chance that someone will be placed 'uithuis'. Our job is to translate this unreadable piece of code and very business like styled 'app' to something new. To put in in a new jacket one could say.

### Day two: "Uithuis"

I started looking around for `create-react-app` but for `react-native` and quicly discovered [https://github.com/react-community/create-react-native-app](CRNA). This day furthered in checking components and possibilities

### Day three: "React-native"

Day three was mainly filled with Arjan speaking on problems and me thinking about possibilities for these problems. My app was receiving more and more ideas, but what i needed was seeing what would be possible in our 2 week timespan. My focus went to the first and probably the biggest need in the app; the router.

The existing form may not have made the best design choices, or the best ux choices but it was there and it was fast. The last thing you want from filling a form is that it takes a long time. This peaked my concerns, is mobile a good option for this?

#### Yes, thanks to react-navigation

The app quickly got form (haha, get it? 😄) with `react-navigation`. By adding a stacknavigator that could handle the pages dynamically,

### Day four "The form(ula)"

Day four was spent creating the form and thinking about what else was needed for my app. The formula was still somewhat of a question for me in terms of how it would work, so that will have to wait for now

### Day five "The youth"

Day five was were it got hard, but interesting.

One of the things heard was that our target users have quite the trouble with discussing cases. I've thought of a solution that could work for them and immediately thought of a qr-code. One that can contain all possibilities while keeping the user as anonymous as possible.

#### The weekend

My problem with thinking of something new just before the weekend is that it occupies my weekend, either in my head or on my laptop. So i took a head-dive in working with qr-codes in `react-native`.
