# CSCI-3308-Team-3: Final Report


## Project Title

Farmerize

## Team members' names

Matthew Fournier, Szymon Ligas, Ethan Brown

## Project tracker link (Instructor can access)

https://freedcamp.com/dashboard/home (Invitation link should have been sent to your email. Please let us know if you have trouble acessing.)

## Project Tracker Calendar Overview

<img width="1598" alt="Screen Shot 2022-08-07 at 15 46 00" src="https://user-images.githubusercontent.com/97766930/183308540-0ae91180-9a32-4a35-a3a2-83fa66a4f0c8.png">
<img width="1604" alt="Screen Shot 2022-08-07 at 15 46 14" src="https://user-images.githubusercontent.com/97766930/183308546-6158938d-0120-4253-b351-e3e8ab090298.png">
<img width="1603" alt="Screen Shot 2022-08-07 at 15 46 37" src="https://user-images.githubusercontent.com/97766930/183308557-2370bba1-8b5a-4798-81cd-34cc6c2b1be1.png">

## Link to 5 minute video: a demo for a potential customer (could be same one you used in the presentation)

https://drive.google.com/file/d/1r-SABk8GW4mblS_mccoUw2N0H33FIApU/view?usp=sharing

## Project presentation files

https://docs.google.com/presentation/d/1lMfzGQqIOhj78yvzT8kkuzWAV1jibJ5z/edit?usp=sharing&ouid=110902220729003558546&rtpof=true&sd=true

## Include a Final Status Report

What you completed:   
- Front/back end of home page linked to database (displays items & summary info from products table where special = featured, highest rated or most popular).    
- <img width="1859" alt="Screen Shot 2022-08-07 at 17 50 59" src="https://user-images.githubusercontent.com/97766930/183312313-551625b6-81ed-4599-9eb6-e28f5a05fe4e.png">    
- Front/back end of abut us page linked to database (user can enter email into subscription bar, which is stored in subscriptions table).   
- <img width="1439" alt="Screen Shot 2022-08-07 at 17 52 39" src="https://user-images.githubusercontent.com/97766930/183312359-bebce66a-4758-4245-afbd-6de12ddc0533.png">    
- Front/back end of Results page linked to database (uer can enter text into search bar and results page will display matching items from products table).   
- <img width="1440" alt="Screen Shot 2022-08-07 at 17 53 57" src="https://user-images.githubusercontent.com/97766930/183312404-c1823645-8dd0-4dc5-b797-faa91adde740.png">   
- Front/back end of product pages linked to database (displays detailed info about specific item from products table, users can enter review that is stores in reviews table).    
- <img width="1438" alt="Screen Shot 2022-08-07 at 17 54 31" src="https://user-images.githubusercontent.com/97766930/183312436-9862dde8-be3b-4a06-9ea1-89c25c96a8d5.png">       
- Front/back end of sign up page linked to database (uer can enter their personal details into fields bars, which is stores in users table).    
- <img width="1444" alt="Screen Shot 2022-08-07 at 17 55 40" src="https://user-images.githubusercontent.com/97766930/183312494-1233196b-bde3-4ad0-81b3-5fa79eb99683.png">   
- Built database with Products, Reviews, Farms, Users and Subscriptions table.     
- <img width="1248" alt="Screen Shot 2022-08-07 at 17 48 21" src="https://user-images.githubusercontent.com/97766930/183312268-8ed363ec-550e-4ebf-a46a-4ba377e24a80.png">    
- Selenium testing of website & database current pages/features.   
- Manual documentation of current pages/features.   
  
What you were in the middle of implementing:   
- Implementing sign in page.
- Improving cross platform functionality/UI of website.
- Finishing building out review system with dynamic ability to update the indiivdual products rating.

What you had planned for the future:
- Building my cart and wishlist pages with ability for users to add items to either page.
- Implementing check out page with payment system API for users to purchase items.
- Putting together sell product page for users to list items to sell.

Any known problems (bugs, issues):
- UI of website can be inconsistent across different search engines / devices / screen sizes.
- Overall rating for each product does not update dynamically with each new review.
- Rating stars backwards.

## Version control repository link (make sure the instructor(s) have access)

https://github.com/szli6792/CSCI-3308-Team-3.git 

## Source code

Up to date source code present within GIT repo at location: CSCI-3308-Team-3/Farmerize/

## Test cases

Up to date test cases present within GIT repo at location: CSCI-3308-Team-3/farmerize/client/tests/

## Source documentation

### Up to date documentation present within GIT repo starting at location: CSCI-3308-Team-3/farmerize/client/src/App.js/
   
/*    
PRIMARY STRUCTURE OF CODE BASE   

APP (This page): CSCI-3308-Team-3/farmerize/client/src/App.js --> Directory of pages within the website.

PAGES: CSCI-3308-Team-3/farmerize/client/src/pages/ --> Contains all the website pages broken down into javascript (page.jsx) and css (page.css) files.
- Home page: CSCI-3308-Team-3/farmerize/client/src/pages/Home.jsx /
- About us page: CSCI-3308-Team-3/farmerize/client/src/pages/AboutUsPage.jsx /
- Results page: CSCI-3308-Team-3/farmerize/client/src/pages/Results.jsx /
- Product page: CSCI-3308-Team-3/farmerize/client/src/pages/Product.jsx /
- Sign up page: CSCI-3308-Team-3/farmerize/client/src/pages/MyAccount.jsx /

COMPONENTS: CSCI-3308-Team-3/farmerize/client/src/components/ --> Contains sections of code that is likely to be reused in multiple places to save space
and time, broken down into javascript (component.jsx) and css (component.css) files.
- Header bar: CSCI-3308-Team-3/farmerize/client/src/components/NavBar.jsx /
- Footer bar: CSCI-3308-Team-3/farmerize/client/src/components/Footer.jsx /
- Sub bar: CSCI-3308-Team-3/farmerize/client/src/components/SubBar.jsx /
- Search bar: CSCI-3308-Team-3/farmerize/client/src/components/SearchBar.jsx /
- Results bar: CSCI-3308-Team-3/farmerize/client/src/components/ResBar.jsx /
- Card: CSCI-3308-Team-3/farmerize/client/src/components/Card.jsx /
- Card row: CSCI-3308-Team-3/farmerize/client/src/components/CardRow.jsx /

IMAGES: CSCI-3308-Team-3/farmerize/client/public/images/ --> Contains image files used throughout website dynamically.

ASSETS: CSCI-3308-Team-3/farmerize/client/src/assets/ --> Contains image files used throughout website staticly.

TESTS: CSCI-3308-Team-3/farmerize/client/tests/ --> Contains selenium Python testing files.

SERVER: CSCI-3308-Team-3/farmerize/server/index.js / --> Contains code interfacing front end with database / back end.

UTILITIES: CSCI-3308-Team-3/farmerize/client/src/utils/ --> Contains code connecting website to database.

PROXY: CSCI-3308-Team-3/farmerize/client/src/setupProxy.js / --> Contains code connecting website to proxy server.    
*/   
  
## List your public hosting site and make sure that it is available

http://ec2-54-183-139-130.us-west-1.compute.amazonaws.com/


