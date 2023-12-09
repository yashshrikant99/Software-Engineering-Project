# Setup:

- Node.js
- Express
- Jest
- SuperTest

# Getting Started:

## Install the tools:

install the Jest and Supertest framework library: 
`npm install -g --save-dev jest supertest`

## How to run the tests
Command to run the test: `npm test`

# Screenshot

- We are calculating code coaverage using command "jest --coverage"
![alt text](https://github.com/yashshrikant99/Software-Engineering-Project/blob/Backend-unit-testing/screenshots/coverage.png)
  
- We have created 3-4 test modules for user, user_holdings, user_watchlists, stock_data and testing all the routes within them 
![alt text](https://github.com/yashshrikant99/Software-Engineering-Project/blob/Backend-unit-testing/screenshots/test1.png)
- ![alt text](https://github.com/yashshrikant99/Software-Engineering-Project/blob/Backend-unit-testing/screenshots/test2.png)
- ![alt text](https://github.com/yashshrikant99/Software-Engineering-Project/blob/Backend-unit-testing/screenshots/test3.png)

# List of Unit Tests being run:
- `User Registration Test`: We test the registration form using post requests to create a new user and then check the response and the database to ensure that the user was created successfully.
- `User Sign Test` : It sends a POST request to simulate a user login and checks the response to ensure the login was successful.
- `User Details Fetch Test` : It creates a user in the database, sends a GET request to fetch the user details, and then checks the response to ensure that the correct user details are returned. These tests are designed to validate the functionality of the User API, including user registration, user login, and fetching user details. They also involve checking the interaction with the underlying database.
- `Registration Test` : The test cases will fail if the user already exists in the database. 
- `User Sign-in test` : the test cases will fail if the user does not exist in the database. 
- `User details` : the test case will fail if the user does not exist. 
- `Search Stock Test` : The test case (test('GET Stock name /api/stockData', ...)) sends a GET request to the /api-stockdata/stock-name/tesla endpoint. The expected output is a list of all stocks that match the user-inputted string. 
- `Fetch Stock Data Test` : The test case (test('GET Stock name /api/stockdata/stockName', ...)) sends a GET request to the /api-stockdata/stock-data endpoint with query parameters for symbol, start date (from), end date (to), and period. The expected output is the stock open high low close data for the duration specified.
- `Top Gainers Test` : The test case (test('GET Stock name /api/stockData/top-gainers', ...)) sends a GET request to the /api-stockdata/top-gainers endpoint. The expected output is the list of all stocks which have the highest gain for the given day.


ALL THE TEST CASES MENTIONED ABOVE ARE SUCCESSFULLY PASSING.