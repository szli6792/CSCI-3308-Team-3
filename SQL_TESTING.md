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
- Use case name

- Description

- Pre-conditions

- Test steps

- Expected result

- Actual result

- Status (Pass/Fail)

- Notes

- Post-conditions


## Farms Table

Table Description: 
- Summary table of all the farms that can be bought from/where items can be sold from, which contains the basic information
on each farm that users should be able to freely view.

For each field of the table, provide name and short description:
- FarmID: ID of the farm.
- Name: Official name of the farm.
- About: More detailed information about the farm including where it's located, who it's run by and the style of oepration.

List of tests for verifying each table:
- Use case name

- Description

- Pre-conditions

- Test steps

- Expected result

- Actual result

- Status (Pass/Fail)

- Notes

- Post-conditions

## Subscriptions Table

Table Description: 
- Table that tracks users that have hcosen to subscribe to the paltforms email list.

For each field of the table, provide name and short description:
- Email: The given email of a user.

List of tests for verifying each table:
- Use case name

- Description

- Pre-conditions

- Test steps

- Expected result

- Actual result

- Status (Pass/Fail)

- Notes

- Post-conditions

## Users Table 

Table Description: Table that stores all the most important user information.

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
- Use case name

- Description

- Pre-conditions

- Test steps

- Expected result

- Actual result

- Status (Pass/Fail)

- Notes

- Post-conditions

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

- Description

- Pre-conditions

- Test steps

- Expected result

- Actual result

- Status (Pass/Fail)

- Notes

- Post-conditions

## Query methods

Home Page:
 - Name: Display special products
 - Description: Render basic summary information on all the items in our product table that have a special value of: Featured deal, Most popular, Highest rated.
 - Parameters: For all the items in in the product table with a special value of: Featured deal, Most popular, Highest rated.
 - return values: Product Table (Name, Category, Picture, Price, Review, Name), Farm Table (Name).
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
  
  - Description

  - Pre-conditions

  - Test steps

  - Expected result

  - Actual result

  - Status (Pass/Fail)

  - Notes

  - Post-conditions

