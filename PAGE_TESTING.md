# Project Milestone 4: Web Pages Design


# Page 1:

Page Title: 

- Home Page

Page Description (include a mockup or hand drawn image of the page): 

- The home page is the first page users should be directed to when acessing the website. This page briefly communicates the mission of the platform and displays a snapshot of the types of products users can purchase.

- It contains banners at the top and bottom of the page that are consistent throughout the website. The top banner has a picture of the websites name/logo (Farmerize), a search bar to conveniently look for a desired food product and links to a wish list and my cart page. The bottom banner has a picture of the website name/logo (Farmerize), our contact information (adress, phone, email) and a directory that links to commonly visited pages (about us, categories, my cart, my wish list and my account). Occupying the top portion of this page is our mission statement as well as a subscription bar for users to enter their email adresses for future promotions. Occupying the bottom portion of this page are products categorised under featured deals, most popular and highest rated.

###
(https://github.com/szli6792/CSCI-3308-Team-3/files/9079663/2.pdf)
![Screen Shot 2022-07-04 at 18 08 03](https://user-images.githubusercontent.com/97766930/177220886-b2bbd440-c3bb-47bc-b199-76d0dc2a3c6c.png)
![Screen Shot 2022-07-04 at 18 08 44](https://user-images.githubusercontent.com/97766930/177220928-325b7a5b-5aa8-43a1-9ca2-55e438b84bf9.png)
![Screen Shot 2022-07-04 at 18 09 08](https://user-images.githubusercontent.com/97766930/177220954-bcf98e0b-c01a-4c67-bb0e-db1ec2aa474d.png)

Parameters needed for the page: 

- Featued deal products, Most popular products, Highest rated products, User login status, Is user subscribed status.

Data needed to render the page: 

- Food data (Name, Rating, Farm that produced, Price, Picture), User information data (Logged in status, subscription status), Home page image.

Link destinations for the page: 

- Home page, About us page, Categories page, My cart page, My wish list page, My account page.

List of tests for verifying the rendering of the page: 

- (Test 1)   
- Use case name: Test integrity of products displayed.
- Description: Verify that the correct products and product summary data are listed under the categories: featured deals, most popular and highest rated.
- Pre-conditions: A product and it's product summary data is displayed for the given categories.
- Test steps: 
 1. Navigate to Home page. 
 2. Record for each listed product: Name, Rating, Farm that produced, Price, Picture.
 3. Check that the recorded data from step 2 is the same as the data stored within these categories of the database.
- Expected result: User displayed appropriate products and summary product data as given by the database.
- Actual result: User shown product and product summary data on the home page for the categories: Name, Rating, Farm that produced, Price, Picture.
- Status (Pass/Fail): Pass
- Notes: N/A
- Post-conditions: The webpage currently visited by a user should be recorded in the database.

- (Test 2)  
- Use case name: Test linked pages.
- Description: Verify that the following linked pages brings users to the correct places: About us page, Categories page, My cart page, My wish list page, My account page.
- Pre-conditions: A given link redirects a user from one webpage to another webpage.
- Test steps: 
1. Navigate to Home page. 
2. For each of the linked pages, click on them and record the webpage arrived at.
3. Check that the recorded webpage from step 2 is the same as the expected location for each linked page.
- Expected result: User is redirected from the home page to the known location of a given linked webpage.
- Actual result: User is redirected from the homepage to a linked webpage.
- Status (Pass/Fail): Pass
- Notes: N/A
- Post-conditions: The webpage currently visited by a user should be recorded in the database.


# Page 2:

Page Title: 

- About Us Page

Page Description (include a mockup or hand drawn image of the page):

- The about us page is where users can find detailed information about the platform and why exactly one should use it. This page provides a thorough yet concise description of Farmerize's purpose, it's story and mission. 

- This page like every page contains top and bottom page banners consistent across the platform. There is also a subscription bar for users to enter their email adresses for any future promotions.

###
(https://github.com/szli6792/CSCI-3308-Team-3/files/9079666/5.pdf)
![Screen Shot 2022-07-10 at 23 31 55](https://user-images.githubusercontent.com/97766930/178183634-97bf2d02-a281-4617-b1e0-63b576314fe7.png)
![Screen Shot 2022-07-10 at 23 32 25](https://user-images.githubusercontent.com/97766930/178183641-057808e7-c892-4cb6-99cc-13b91fd30618.png)
![Screen Shot 2022-07-10 at 23 32 41](https://user-images.githubusercontent.com/97766930/178183672-87f06c91-639a-4270-a0cc-fc323ed23164.png)

Parameters needed for the page: 

- User login status, Is user subscribed status.

Data needed to render the page: 

-  User information data (Logged in status, subscription status), Images illustrating the websites purpose, story and mission.

Link destinations for the page: 

- Home page, About us page, Categories page, My cart page, My wish list page, My account page.

List of tests for verifying the rendering of the page:

- (Test 3)     
- Use case name: Test subscription bar.
- Description: Verify that when users input their email adresses in the subscription bar that our subscriber database is updated with the correct info.
- Pre-conditions: User enters text into the subscription bar.
- Test steps: 
1. Navigate to About Us page. 
2. Input into the Subscription bar "test@Farmerize.com" as well as a collection of predefined invalid email adresses.
3. Check that the subscriber database contains "test@Farmerize.com" and none of the predefined list of invalid email adresses.
- Expected result: User inputted valid email adress is added to the subscriber database and the inputted invalid email adresses are not. 
- Actual result: User inputs email adresses into the subscription bar.
- Status (Pass/Fail): Pass
- Notes: N/A
- Post-conditions: The webpage currently visited by a user should be recorded in the database. The subcription database should be updated.

- (Test 4)     
- Use case name: Test pictures displayed.
- Description: Verify that the desired pictures are displayed on this webpage.
- Pre-conditions: Pictures are displayed on the webpage.
- Test steps: 
1. Navigate to About Us page. 
2. For each image, record it's ID number.
3. Check that the list of recorded image ID numbers match the stored image ID's in the image database for the given page.
- Expected result: User is displayed the appropriate selection of images for this webpage as stored in the image database (for the about us page).
- Actual result: User visualizes the about us webpage with a set of images throughout. 
- Status (Pass/Fail): Pass
- Notes: N/A
- Post-conditions: The webpage currently visited by a user should be recorded in the database.


# Page 3: 

Page Title: 

- Results Page

Page Description (include a mockup or hand drawn image of the page):

- The results page displays a list of currently available products offered by farmers for purchase that match the users search and is prioritised primarily according to product name match, rating and price.

- Most of this page is dedicated to displayng a vertically oriented list of matched products with summary product data as well as a brief description of each item. This page like every page contains top and bottom page banners consistent across the platform.

###
(https://github.com/szli6792/CSCI-3308-Team-3/files/9079679/5.pdf)
![Screen Shot 2022-07-10 at 23 35 54](https://user-images.githubusercontent.com/97766930/178183972-15981f26-56d5-4e46-9955-5c2cb510953d.png)
![Screen Shot 2022-07-10 at 23 36 22](https://user-images.githubusercontent.com/97766930/178183975-92f36f6b-0105-4217-b407-fc1e38cf006c.png)
![Screen Shot 2022-07-10 at 23 37 53](https://user-images.githubusercontent.com/97766930/178184081-9f8de8ee-dd94-4f1e-a14e-6fdf24a72b29.png)

Parameters needed for the page: 

- User search variable, Results variables from database based on user search variable, User login status, Is user subscribed status. 

Data needed to render the page: 

- Specific food data (Pictures, Food name, Rating, Price, Description, Farm selling product), User information data (Logged in status, subscription status).

Link destinations for the page: 

- Home page, About us page, Categories page, My cart page, My wish list page, My account page.

List of tests for verifying the rendering of the page:

- (Test 5)     
- Use case name: Test search bar.
- Description: Verify that the results page for a given product search lists appropriate items in the appropriate order.
- Pre-conditions: User enters text into the search bar.
- Test steps: 
1. Navigate to the search bar in the top banner of the page.
2. Input a list of valid product test cases and invalid product test cases.
3. For all test cases, if product test case is within product database, check that the reuslts page lists matching products. Also check that higher items have closer matching names and/or higher rating and/or lower price then lower items.
4. Else, check that the results page lists no products.
- Expected result: User is redirected to a results page with a list of matching items as stored in the product database in a reasonable order.
- Actual result: User is redirected to a results page with a listing of products in a given order.
- Status (Pass/Fail): Pass
- Notes: N/A
- Post-conditions: The webpage currently visited by a user should be recorded in the database.


# Page 4:

Page Title: 

- Product Page

Page Description (include a mockup or hand drawn image of the page):

- The product page displays in-detail information on any given product a user chooses. This page dispays in addition to the previously shown food data, detailed information about the product, detailed information about the farmer and all the product reviews from verified users. 

- This page has additional catalogies of photos of a product and the farm that produced the photo. This page like every page contains top and bottom page banners consistent across the platform.

###
(https://github.com/szli6792/CSCI-3308-Team-3/files/9079682/6.pdf)
![Screen Shot 2022-07-10 at 23 42 22](https://user-images.githubusercontent.com/97766930/178184554-aa99341f-3acc-4993-901e-940e741fd9b2.png)
![Screen Shot 2022-07-10 at 23 42 38](https://user-images.githubusercontent.com/97766930/178184557-e3dd4f92-f4ee-4223-af20-e119c3d04a76.png)
![Screen Shot 2022-07-10 at 23 42 47](https://user-images.githubusercontent.com/97766930/178184575-107281fc-e2c0-49d8-8404-2d14a839ba88.png)


Parameters needed for the page: 

- Food ID, User login information, WIsh list, My cart, Search

Data needed to render the page: 

- Extended food properties (Picture of food and farm, Information about food and farm, Rating and in depth review information from verified customers, Price).

Link destinations for the page: 

- Home page, About us page, Categories page, My cart page, My wish list page, My account page.

List of tests for verifying the rendering of the page:

 1. Pick a food ID to test to make sure the components are correctly displaying the appropriate text and pictures in the correct locations.
 2. Test that the correct rating/reviews are displayed for a range of randomly chosen products.
 

# Page 5: 

- Page Title: My Account Page

- Page Description (include a mockup or hand drawn image of the page):

###
(https://github.com/szli6792/CSCI-3308-Team-3/files/9080772/7.pdf)
![Screen Shot 2022-07-10 at 23 44 19](https://user-images.githubusercontent.com/97766930/178184770-2184585c-d310-4b5e-aeb7-00e85b05f68a.png)
![Screen Shot 2022-07-10 at 23 45 07](https://user-images.githubusercontent.com/97766930/178184773-309d684f-2d18-4879-9fe7-357e363371c7.png)
![Screen Shot 2022-07-10 at 23 45 21](https://user-images.githubusercontent.com/97766930/178184780-c0a5c525-7e5c-44db-b299-f4780c8d9631.png)


- Parameters needed for the page: Username, Password, Email, Sign up/ Log in, Confirm passwrod, First name, Last name, Age, Adress (Country, State, Zip code, Street, Street number), Phone number, Conscent to terms of agreement of website, Farmer information (Farm location, Product, Quantity, .

- Data needed to render the page: User input, Correct / incorrect username and password

- Link destinations for the page: Reviews, Farm biography (if available), About us page, Results page,

- List of tests for verifying the rendering of the page:
 1. Create a user and farmer, then test to check that the inputted user details were inputted into the appropriate databases 
 2. Create a user and farmer with sign up detaisl that are not valid and check that an error is raised in the fields that were not valid.
 3. Checking to make sure page displays as expected (different devices, different browsers)
 4. Checking to make sure page links bring user to the correct pages.
