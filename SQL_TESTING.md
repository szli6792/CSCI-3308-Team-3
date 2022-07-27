# Project Milestone 5: Web Pages Design


## Products Table

Table Description: 
- Summary table of all the products that can be bought/sold on our platform, which contains the most important product information 
in order for customers make informed purchases.

For each field of the table, provide name and short description:
- ProductID: ID of the product.
- FarmID: ID of the farm that produces the product.
- Category: Type of food (Vegetable, Fruit, Meat).
- Name: Name of the product.
- Img: Summary image of the product.
- Price: Official current price of the product without relevant taxes/duties/delivery.
- Description: 1 paragraph long (approx) brief explanation of what the product is.
- About: More detailed information about the where the product comes from, what it's made out of and how it's made.
- Special: Category of deal properties (Featured deal, Most popular, Highest rated).

List of tests for verifying each table:
- Use case name: Test integrity of products table data displayed.
- Description: Verify that the correct product table data is listed for a given product, page of products, category of products, search of product.
- Pre-conditions: N/A
- Test steps:
    1. Navigate to a specified page with products displayed.
    2. Record for each listed product:  Product ID, Farm ID, Category, Name, Img, Price, Description, About and Special.
    3. Check that the recorded data from step 2 matches the data stored within each respective Product ID in the database.
- Expected result: User displayed appropriate products table data as given by the data within the products table.
- Actual result: User shown product and product summary data for a given page, category, search, etc.
- Status (Pass/Fail): Pass
- Notes: N/A
- Post-conditions: The webpage currently visited by a user should be recorded in the database.

## Farms Table

Table Description: 
- Summary table of all the farms that can be bought from/where items can be sold from, which contains the basic information
on each farm that users should be able to freely view.

For each field of the table, provide name and short description:
- FarmID: ID of the farm.
- Name: Official name of the farm.
- About: More detailed information about the farm including where it's located, who it's run by and the style of oepration.

List of tests for verifying each table:
- Use case name: Test integrity of farms table data displayed.
- Description: Verify that the correct farms table data is listed for a given product, page of products, category of products, search of product.
- Pre-conditions: N/A
- Test steps:
    1. Navigate to a specified page with products displayed.
    2. Record for each listed product:  Farm ID, Name and About.
    3. Check that the recorded data from step 2 matches the data stored within each respective Farm ID in the database.
- Expected result: User displayed appropriate farms table data as given by the data within the farms table.
- Actual result: User shown product and product summary data for a given page, category, search, etc.
- Status (Pass/Fail): Pass
- Notes: N/A
- Post-conditions: The webpage currently visited by a user should be recorded in the database.

## Subscriptions Table

Table Description: 
- Table that tracks users that have hcosen to subscribe to the paltforms email list.

For each field of the table, provide name and short description:
- Email: The given email of a user.

List of tests for verifying each table:
- Use case name: Test accurate recording of emails in subscriptions table.
- Description: Verify that if a correctly formatted email that is not subscribed to the email list is inputted, it is added to the subscriptions table.
- Pre-conditions: User enters text into the subscription bar.
- Test steps:
    1. Navigate to the about us page.
    2. Enter a collection of emails that are either valid, in incorrect format or already exist within the subscriptions table into the subscription bar.
    3. Check for each email inputted, whether the subscription table was appropriately updated/not updated.
- Expected result: For inputted correctly formatted emails that dont already exist within the usbscriptions tabe, the subscriptions table should be updated with the inputted email. Alternatively, the subscriptions table should not be updated.
- Actual result: User inputs email into subscriptions bar then recieves a notification that their email has been added to the subscriptions table.
- Status (Pass/Fail): Pass
- Notes: N/A
- Post-conditions: The webpage currently visited by a user should be recorded in the database. The subcription database should be updated. Pop up notifications informing user that heir email has been added to the subscription list.

## Users Table 

Table Description: Table that stores all the required user information in order to make an account.

For each field of the table, provide name and short description.
- UserID: ID of the user.
- First: First name of the given user.
- Last: Last name of the given user.
- Phone: Primary telephone number of the given user.
- Email: Primary email adress of the given user.
- Address: Primary/delivery adress of the given user.
- Age: Current age of the user.
- Password: Valid password of the given users account.

List of tests for verifying each table:
- Use case name: Test accurate recording of user information in users table.
- Description: Verify that if a correctly formatted set of user data is inputted, it is added tot he users table.
- Pre-conditions: Users enter text into all the user info fields.
- Test steps:
    1. Navigate to the my account page.
    2. Enter into all user info fields, a collection of data that is either valid, incorrectly formatted or already exists within the users table.
    3. Check the for each collection of inputted user data, whether the users table was appropriately updated/not updated.
- Expected result: For inputted correctly formatted user infothat dont already exist within the users table, the users table should be uppdated witht he inputted user data. Alternatively, the user table should not be updated.
- Actual result: User inputs their info into the respective fields then recieves a notification that their account has been create.
- Status (Pass/Fail): Pass
- Notes: N/A
- Post-conditions: The webpage currently visited by a user should be recorded in the database. Ther user table should be updated. Pop up notifications informing user that their account has been created.

## Reviews Table 

Table Description:
- Summary table of the user reviews for all the products that are bought/sold on the platform.

For each field of the table, provide name and short description:
- ReviewID: ID of the review.
- ProductID: ID of the product.
- Review: Individual users recorded experience with the given product purchase.
- Rating: Overall score (1-5) of a prodict based on a review by a single customer.

List of tests for verifying each table:
- Use case name
    get reviews
- Description
    returns all reviews for a given product id
- Pre-conditions
    databse already has reviews for each product
- Test steps
    * navigate to the getreivew api in our express server
    * receive query feedback
    * test with test set
- Expected result
    * query matches pre compiled test expectations
- Actual result
    * returns correct reviews
- Status (Pass/Fail)
    * pass
- Notes
    N/A
- Post-conditions
    * reviews can be added to database or products can be deleted
    
- Use case name
    post review
- Description
    posts review to the reviews table after input
- Pre-conditions
    use is on a specific proudct page
- Test steps
    * insert product rating
    * insert product review
    * send to database
- Expected result
    * review is inserted into database
- Actual result
    * correct review is inserted to database
- Status (Pass/Fail)
    * pass
- Notes
    N/A
- Post-conditions
    * reviews can be added to database or products can be deleted

## Query methods

Home Page:
 - Name: Display special products
 - Description: Render basic summary information on all the items in our product table that have a special value of: Featured deal, Most popular, Highest rated.
 - Parameters: For all the items in in the product table with a special value of: Featured deal, Most popular, Highest rated.
 - return values: Product Table (Name, Category, Picture, Price, Review, Name), Farm Table (Name).
 - List of tests for verifying each access method:
  - Use case name
        Test of special product display
  - Description
        This test will make sure that when we query the database for the special products that the proper items are displayed at the proper place.
  - Pre-conditions
        The special products are already marked corretcly in the database and the user accessess the homepage
  - Test steps
        * navigate to homepage
  - Expected result
        * the user should see three seperate rows of 5 products
            - Featured
            - Most Popular
            - Highest Rated
  - Actual result
        * The page is rendered with 15 items in their respective category
  - Status (Pass/Fail)
        * pass
  - Notes
        N/A
  - Post-conditions
        The data is refreshed when the databse is updated for special products
        
About Us Page:
 - Name: Subscribe feature
 - Description: Insert query involving users entering their email adresses into the subscriptions table.
 - Parameters: Email.
 - return values: None.
 - List of tests for verifying each access method:
  - Use case name
  
  - Description

  - Pre-conditions

  - Test steps

  - Expected result

  - Actual result

  - Status (Pass/Fail)

  - Notes

  - Post-conditions

My Account Page:
 - Name: Sign up feature
 - Description: Insert query involving users entering their firstname, lastname, phone, email adress, phone, adress, age, password.
 - Parameters: User Table (First, Last, Phone, Email, Address, Age, Password).
 - return values: Status 200.
 - List of tests for verifying each access method:
  - Use case name
  
  - Description

  - Pre-conditions

  - Test steps

  - Expected result

  - Actual result

  - Status (Pass/Fail)

  - Notes

  - Post-conditions

Product Page:
 - Name: Displaying detailed product informaiton
 - Description: Rendering detailed summary information of a specific product/seller. Insert query involving users entering a number rating and string review.
 - Parameters: Reviews Table (Rating, Review), Products Table (Name, Category, Picture, Price, Review, Name, About), Farms Table (Name, About).
 - return values: Status 200.
 - List of tests for verifying each access method:
  - Use case name
  
  - Description

  - Pre-conditions

  - Test steps

  - Expected result

  - Actual result

  - Status (Pass/Fail)

  - Notes

  - Post-conditions

Results Page:
 - Name: Display matching products
 - Description: Render basic summary information on all the items in our product table that match the user entered string within the search bar.
 - Parameters: User entered string within the search bar.
 - return values: Product Table (Name, Category, Picture, Price, Review, Name), Farm Table (Name).
 - List of tests for verifying each access method:
  - Use case name
        Return search check
  - Description
        Makes sure that the search feature displays the proper products
  - Pre-conditions
        The database is pre loaded with products that a user can search including category price and other information =
  - Test steps
        * Navigate to homepage
        * Search for meat
        * get ridirected to results page
        * see all meat products on the screen
  - Expected result
        * get all meats displayed including their information on the results page
  - Actual result
        * all meats are displayed
  - Status (Pass/Fail)
        * pass
  - Notes
        N/A
  - Post-conditions
        Product information can change overtime including but not limited to category change and even product deletion
