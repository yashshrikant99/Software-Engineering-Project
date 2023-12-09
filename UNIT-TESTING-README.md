# Testing Node.js/Express APIs with Jest and SuperTest
Ever wondered how to ensure your ReactJS is working as it should? Testing is the answer! This guide will show you how to test your API using Jest and SuperTest, two powerful tools for developers.

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

# Checkout to following branch before testing:

  git checkout frontend-test

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
    "test": "react-scripts test --transformIgnorePatterns \"node_modules/(?!axios)/\" --coverage"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
}

# Use code with caution. Learn more
Create a directory for your tests.
Preparing Your Tests:
<img width="843" alt="Screenshot 2023-12-08 at 11 45 25 PM" src="https://github.com/yashshrikant99/Software-Engineering-Project/assets/23173443/f339d807-861a-44e5-aa46-4242d3a5c459">

- We are comparing with the snapshot created and check if the components are rendered properly like registrationForm, Watchlist







# Use Jest matchers to confirm the expected behavior:
JavaScript
expect(response.status).toBe(200);
expect(Array.isArray(response.body)).toBeTruthy();
// ... more assertions ...


# Screenshot
frontend testing coverage
![image](https://github.com/yashshrikant99/Software-Engineering-Project/assets/58352099/7601d363-4b35-438d-a5ee-66521aa06ed5)




# Exploring Further:

This guide provides a basic foundation for testing Node.js/Express APIs. As you gain experience, you can explore more advanced features of Jest and SuperTest, such as:

Mocking and stubbing dependencies.
Writing end-to-end tests.
Using snapshots to capture expected data.
By incorporating testing into your workflow, you'll be well on your way to building robust and reliable APIs.



# How to run the Unit Test
npm test




ALL THE TEST CASES MENTIONED ABOVE ARE SUCCESSFULLY PASSING.





