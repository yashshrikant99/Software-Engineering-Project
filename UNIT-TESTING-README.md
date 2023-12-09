# Testing Node.js/Express APIs with Jest and SuperTest
Ever wondered how to ensure your Node.js/Express API is working as it should? Testing is the answer! This guide will show you how to test your API using Jest and SuperTest, two powerful tools for developers.

# Why Unit Test?

Testing isn't just a suggestion, it's a crucial skill for any developer. It helps you:

Catch bugs early: Identify and fix problems before they reach users.
Prevent regressions: Ensure changes don't break existing functionality.
Build confidence: Gain trust in your code's quality and stability.

It ensures you are building the thing, right.


# What You'll Need:

- React
- Jest
- SuperTest
- Getting Started:

# Install the tools:

- Terminal : install the Jest and Supertest framework library

 npm install -g --save-dev jest supertest

 # How to run the tests
 - Terminal write the command 

npm test



# Add a test script:
JSON
// package.json
{
  "scripts": {
    "test": "jest --verbose --coverage"
  }
}

# Use code with caution. Learn more
Create a directory for your tests.
Preparing Your Tests:

# Export your Express app without listening:
JavaScript
const express = require('express');
const app = express();

// ... your middlewares and routes ...

module.exports = app;


JavaScript
const app = require("../server");
const mongoose = require("mongoose");
const supertest = require("supertest");

beforeEach(() => mongoose.connect("mongodb://localhost:27017/JestDB"));
afterEach(() => mongoose.connection.db.dropDatabase().then(() => mongoose.connection.close()));
Use code with caution. Learn more
Testing Your Routes:

# Send requests to your app using SuperTest:
JavaScript
test("GET /api/posts", async () => {
  // ... create some data ...

  await supertest(app)
    .get("/api/posts")
    .expect(200)
    // ... verify the response ...
});


# Use Jest matchers to confirm the expected behavior:
JavaScript
expect(response.status).toBe(200);
expect(Array.isArray(response.body)).toBeTruthy();
// ... more assertions ...


# Screenshot

![image](https://github.com/yashshrikant99/Software-Engineering-Project/assets/58352099/7601d363-4b35-438d-a5ee-66521aa06ed5)



- We are calculating code coaverage using command "jest --coverage"
![alt text](https://github.com/yashshrikant99/Software-Engineering-Project/blob/Backend-unit-testing/screenshots/coverage.png)
  
- We have created 3-4 test modules for user, user_holdings, user_watchlists, stock_data and testing all the routes within them 
![alt text](https://github.com/yashshrikant99/Software-Engineering-Project/blob/Backend-unit-testing/screenshots/test1.png)
- ![alt text](https://github.com/yashshrikant99/Software-Engineering-Project/blob/Backend-unit-testing/screenshots/test2.png)
- ![alt text](https://github.com/yashshrikant99/Software-Engineering-Project/blob/Backend-unit-testing/screenshots/test3.png)



# Exploring Further:

This guide provides a basic foundation for testing Node.js/Express APIs. As you gain experience, you can explore more advanced features of Jest and SuperTest, such as:

Mocking and stubbing dependencies.
Writing end-to-end tests.
Using snapshots to capture expected data.
By incorporating testing into your workflow, you'll be well on your way to building robust and reliable APIs.



# How to run the Unit Test
npm test


User Registration Test: We test the registration form using post requests to create a new user and then check the response and the database to ensure that the user was created successfully.
User Sign Test: It sends a POST request to simulate a user login and checks the response to ensure the login was successful.
User Details Fetch Test: It creates a user in the database, sends a GET request to fetch the user details, and then checks the response to ensure that the correct user details are returned.
these tests are designed to validate the functionality of the User API, including user registration, user login, and fetching user details. They also involve checking the interaction with the underlying database.

Registration Test: The test cases will fail if the user already exists in the database. 
User Sign-in test: the test cases will fail if the user does not exist in the database. 
User details: the test case will fail if the user does not exist. 


Search Stock Test: The test case (test('GET Stock name /api/stockData', ...)) sends a GET request to the /api-stockdata/stock-name/tesla endpoint. The expected output is a list of all stocks that match the user-inputted string. 

Fetch Stock Data Test: The test case (test('GET Stock name /api/stockdata/stockName', ...)) sends a GET request to the /api-stockdata/stock-data endpoint with query parameters for symbol, start date (from), end date (to), and period. The expected output is the stock open high low close data for the duration specified.

Top Gainers Test: The test case (test('GET Stock name /api/stockData/top-gainers', ...)) sends a GET request to the /api-stockdata/top-gainers endpoint. The expected output is the list of all stocks which have the highest gain for the given day.

these test cases cover different aspects of the stock-related functionality in the API, including searching for stock by name, fetching historical stock data, and retrieving the top gainers. The tests use super test to make HTTP requests to the specified endpoints and include assertions to ensure that the API responses match the expected data structures. 

These test cases will fail :
- if the calling rates to the stock data API increase the rate limit set by Yahoo Finance increases. 
- For the fetch stock data: if from date > to date or when the from date = to date


Watchlist Test:
The first test case (test("POST Add Holdings api-watchlists/add_watchlist/:uid", async() => {...}) tests the functionality of adding a watchlist for a user. It sends a POST request to the /api-watchlists/add_watchlist/:uid endpoint, providing watchlist data. The expected output is a stock name along with its current market price and is added to the watchlist

These test cases will fail:
- If the particular stock already exists in the watchlist.

Holdings Test:
The first test case (test("POST Add funds /api/users/:uid/modify-funds", async() => {...}) tests the functionality of adding funds to a user's account. It sends a POST request to the /api/users/:uid/modify-funds endpoint, providing the number of funds to add.

The second test case (test("POST Add Holdings api-holdings/holdings/:uid", async() => {...}) tests the functionality of adding holdings for a user. It sends a POST request to the /api-holdings/holdings/:uid endpoint, providing holding data.

This test case will fail:
- if the calling rates to the stock data API increase the rate limit set by yahoo finance increases. 

The third test case (test("GET USER /api-holdings/holdings/:uid/formatted", async () => {...}) tests the API for fetching user holdings in a formatted way. It sends a GET request to the /api-holdings/holdings/:uid/formatted endpoint, using the user ID obtained in the previous tests. 

This test case will fail:
- if the calling rates to the stock data API increase the rate limit set by yahoo finance increases.


ALL THE TEST CASES MENTIONED ABOVE ARE SUCCESSFULLY PASSING.





