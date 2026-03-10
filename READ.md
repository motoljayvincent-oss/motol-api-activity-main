Markdown
# RESTful API Activity - Jay Vincent G. MOtol
## Best Practices Implementation
**1. Environment Variables:**
 -Why did we put `BASE_URI` in `.env` instead of hardcoding it?
    -Answer: We put BASE_URI in .env to allow easy configuration without modifying the source code and support different environments. 

**2. Resource Modeling:**
 - Why did we use plural nouns (e.g., `/dishes`) for our routes?
    - Answer: We use plural nouns for routes becuase they represent collection of resources and follow RESTful API standards.

**3. Status Codes:**
 - When do we use `201 Created` vs `200 OK`?
    - Answer: We use 201 Created when a new resources is added and 200 OK when a request succeeds without creating one.

 - Why is it important to return `404` instead of just an empty array or a generic error?
    - Answer: Returning 404 clearly indicates that the requested resource does not exist, improving cllient side error handling.
**4. Testing:**
![Successful GET Request](Screenshot%202026-01-29%20204739.png)

## Why did I choose to Embed the [Review/Tag/Log]?
- I chose to Embed the Dish because it is a part of the Chef's identity that you want to load instantly in a single query, ensuring high performance for read-heavy displays.

## Why did I choose to Reference the [Chef/User/Guest]?
- I chose to Reference the Chef because the Chef is a standalone entity whose information shouldn't be duplicated, allowing you to update their details in one place without affecting thousands of individual dish records.

## Authentication vs Authorization:
What is the difference between Authentication and Authorization in our code?
- Authentication verifies the identity of the user by checking their login credentials such as username and password. Authorization determines what actions or resources the authenticated user is allowed to access in the system.

## Security (bcrypt):
Why did we use bcryptjs instead of saving passwords as plain text in MongoDB?
- We used bcryptjs to hash passwords before storing them in MongoDB to ensure security. This prevents attackers from seeing the actual passwords if the database is compromised, unlike plain text passwords which can be easily read.

## JWT Structure:
What does the protect middleware do when it receives a JWT from the client?
- The protect middleware verifies the JWT sent by the client to ensure that the request comes from an authenticated user. If the token is valid, it decodes the user information and allows access to protected routes.
