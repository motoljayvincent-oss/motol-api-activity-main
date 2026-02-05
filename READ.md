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