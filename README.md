# 3 features in this website:
1. It avoids adding any duplicate courses in purchases.
2. Shows you the total price of the courses you've purchased.
3. It calculates and shows you the remaining and added credit of your purchased courses.


# Discussion about how I managed the states in this project:

 I took only 3 states in total. One for maintaining Credit value, Courses array of object and price value.
 I managed the stated by "State lifting".
 I used the updater function of the state in the handleCourse function that handles all the click events, passed the function to proper component which updated the values on event, and I also passed the state values to the other Components that required it, by "Props drilling" and then set the values dynamically.

 Shortly, by decalring all the common states and funcitons in the parent component, I managed the states.