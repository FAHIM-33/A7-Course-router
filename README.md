# 3 features in this website:
1. It avoids adding any duplicate courses in purchases.
2. Shows you the total price of the courses you've purchased.
3. It calculates and shows you the remaining and added credit of your purchased courses.


# Discussion about how I managed the states in this project:

The project was seperated as different components. Each components represents a small part of the website. I used these components to avoid repetetive code. I used hooks to fetch data form JSON file.
One function was enough for all the functionality. This funciton ckecks all conditions and This funciton was passed to other components by props drilling to trigger it on a click event. There is another function that is used to maintains the toast showing machanism. 
 I took only 3 useState hook in total. For maintaining Credit value, Courses (array of object) and price value.
 I managed the stated by "State lifting".
 I used the updater function of the state in the handleCourse function that handles all the click events, passed the function to proper component which updated the values on event, and I also passed the state values to the other Components that required it, by "Props drilling" and then set the values dynamically.

 Shortly, by decalring all the common hooks and funcitons in the parent component, I managed the states of thsi project.