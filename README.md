# React-MVP
Exercise to demonstrate ability to utilize React concepts in creating a full stack application utilizing the PERN stack. 

# An Application for children who want to earn money doing chores
For my React MVP I decided to build a chore app. My 7-yr-old son has been bugging me about earning 'Robux', the virtual currency of Roblox, so why not build him something cool to keep track of all the hard work he does?

## First feature
The first thing I did was create a react app with npx create-react-app and deleted all the unnecessary react files.  Next, I created a backend folder and in it I created an express server that is configured for a development or production environment.  Once my server was up and listening I created my database folder containing migration and seeds files to be ran in a postgreSQL database in a docker container.  

I set up a quick route to verify everything was working and after a little bit of troubleshooting and finetuning, all three stacks were good to go!

After making sure everything was communicating I started to create some of my initial components and have them render on my app.
***Currently, I can view the full plan, remaining chores, and chores that have been completed***

## Second feature
After setting up a get route to fetch data for the chore list, I setup a create page component with a form to create/add new chores to the list.  In addition to the post functionality, I edited the options on the right by replacing the words "Done" and "Edit" with a trash can icon and an edit icon.  

Passing down props allowed me to attach each chores id on the Options component, making it easier for me to create the delete functionality.  Another thing I added was a Header component with brand name on the left and nav icons on the right (Create, List-icon, Home-icon, Settings-icon) with respective routes using 'react-router'.  Lastly, I did a little bit of styling on the page. 

***Currently, I have a header with Create, View List, Home and Settings routes; Create, Read, and Delete functionality***

