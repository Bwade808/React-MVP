# React-MVP
Exercise to demonstrate ability to utilize React concepts in creating a full stack application utilizing the PERN stack. 

# An Application for children who want to earn money doing chores
For my React MVP I decided to build a chore app. My 7-yr-old son has been bugging me about earning 'Robux', the virtual currency of Roblox, so why not build him something cool to keep track of all the hard work he does?

## First feature
The first thing I did was create a react app with npx create-react-app and deleted all the unnecessary react files.  Next, I created a backend folder and in it I created an express server that is configured for a development or production environment.  Once my server was up and listening I created my database folder containing migration and seeds files to be ran in a postgreSQL database in a docker container.  

I set up a quick route to verify everything was working and after a little bit of troubleshooting and finetuning, all three stacks were good to go!

After making sure everything was communicating I started to create some of my initial components and have them render on my app.
***Currently, I can view the full plan, remaining chores, and chores that have been completed***

