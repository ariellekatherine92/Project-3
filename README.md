# Project 3 Local Nomad:

In a post pandemic era, our group decided that the focus of our application should be local businesses in our communities. 
As a group of avid travelers we wanted an application where we could plan trips and travel around the USA
ensuring we could use local businesses and accomendations. Hence Local Nomad was born. As we mapped out what our applcation would 
look like we decided to break down the data and categories into three main topics 
entertainment, restaurauts, and lodging. 
Below is our user stories for how we wanted users to interact with our application:

![User-Story-Image](https://github.com/ariellekatherine92/Project-3-front-end/blob/main/Photos/userstory.png?raw=true)

We began our project by mapping out a flow chart of how we would want these categories to be separated out to ensure fluidity for the user. Below is the flow chart used to separate out our categories and what subcategories we would place into those main components:

![Flow-Chart-Image](https://github.com/ariellekatherine92/Project-3-front-end/blob/main/Photos/flowchart.png?raw=true)

# Yelp Api Usage

We really wanted our application to have an emphasis on local attractions so we decided on the yelp api as well as the google api to locate where are users are 
and to locate local attractions in their current area. Click here for the link for our  [Yelp](https://www.yelp.com/developers/documentation/v3/get_started) API!

# Wireframes for our routes

Of course, in the beginning of every project everyone wants the world and everyone has great ideas. What is truly achievable and what we want want are usually two
very different concepts. Below is how we narrowed down our goals to create a more cohesive flow throughout our front and back ends. 
![cohesive](https://github.com/ariellekatherine92/Project-3-front-end/blob/main/Photos/cohesive.png?raw=true)

# Initial issues/dependency work arounds

As we continued to build out this project we realized that the yelp api does not allow calls to be made from the front end. By the time that was realized it was too late to search and find another api without completely scrapping our current project. To be able to make calls from our api for now this [link](https://cors-anywhere.herokuapp.com/corsdemo) should be used to access the data. When cloning down this project you should run npm install as well as npm install axios to ensure that the data will run properly. We also used react when creating this app so npm create-react-app . should also be ran before adding or running our project.

# Frontend Code 
As front end developers we wanted to ensure that we had a clean user experience with as little code as possible. When we first started making our seaarch pages we realized that we could condense it down to one page and function vs. making multiple pages with three separate functions. The code snippet below shows how we used one axios call to retrieve data from all the business endpoints for each of our categories. 

![pagesfunction](https://github.com/ariellekatherine92/Project-3-front-end/blob/main/Photos/pagesfunction.png?raw=true)

We used a simple clean style for the home and search pages. In the future, as a group, we would like to build upon the styling and user experience of the design. In such a short timeframe there was not a whole lot we could do, however, we tried to keep the styling as clean as possible. The code below shows how we implimented some images behind our search links.

![csshomepage](https://github.com/ariellekatherine92/Project-3-front-end/blob/main/Photos/csshomepage.png?raw=true)
![homepageimage](https://github.com/ariellekatherine92/Project-3-front-end/blob/main/Photos/homepageimage.png?raw=true)

# Backend Code
Our back end team made sure we could properly get our api calls from yelp from the front end so our users could save them as favorites. In the future if you look at our back end code we would like to add comments, reviews, and be able to make the api calls from back vs. the front so we no longer have to use our work around to make our calls. Below is a code snippet of our favorites.js to show the CRUD operations used to create our favorite routes:
![backendcode]()
![backendcode2]()

# Future Considerations 

As a group we would really like to expand on this idea and polish it especially on the front end. We would like to add more features such as social media pages, blogs, comments, reviews and a location service. We would also like it to add a google api for location services and make it more phone friendly. We also would need to find a way to revise the backend so we do not have to use our work around to make api calls. Yelp does not allow api calls from the front end so we would need to impliment this on the backend. Our group really had to overcome a lot this past week, managing each other's schedules, really planning out what our app was going to do, and scaling back to ensure we had something to deploy in time. 





