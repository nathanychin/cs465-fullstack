# CS465 Full Stack Development - MEAN

## Architecture

### Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).

While developing the full stack project, various front-end codes were utilized in different areas of the application. To create the customer-facing site, Express HTML was initially used, but it was later switched to a .hbs view to enhance rendering speeds. HTML is static and only serves the client-side, preventing it from interacting with backend databases to update information dynamically. Conversely, Javascript, which is both a front-end and back-end language, was employed to add dynamic elements to the webpage. It was used to extract trip information from the MongoDB database, enabling the page to change based on user interaction. In contrast to an HTML page, a single-page application does not completely refresh the page in response to user actions, providing the website with a native application-like experience when using the application itself.

### Why did the backend use a NoSQL MongoDB database?

Due to its non-relational nature and flexibility in modifying schema based on scaling and functionality changes, a NoSQL MongoDB database was utilized in the backend. It also provided the ability to horizontally scale quickly, making it a suitable choice.

## Functionality

### How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?

JSON is a standardized format for organizing object data that can be conveniently read by Javascript and converted into a Javascript object. This facilitates the formation of objects in the Javascript language, establishing a connection between front-end and back-end development by enabling data and Javascript objects to be saved on the backend and utilized in various contexts as requested by the front-end. As a result, data only needs to be saved once but can be retrieved and employed in multiple ways.

### Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.

An example of code refactoring to enhance functionality and efficiency is the refinement of the trip card and trip list components. Maintaining two separate components that exhibit the same data is inefficient, whereas rendering each trip as a distinct but interconnected entity is more effective in achieving the website's overall functionality. Reusing UI components offers several advantages, such as decreasing the overall size of the application, hastening the development process, and lowering the likelihood of introducing system errors and vulnerabilities, provided the component is secure.

## Testing

### Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security.

Several methods exist for testing endpoints before implementing security measures. One approach involves navigating to the localhost web address of the API endpoint to determine if the page can successfully load the data or identify the type of error it generates in case of a failure. Although using an application such as Postman, which can include security measures and inputs to test endpoints that might be safeguarded from unauthorized users, is the preferred option for testing HTTP requests.

### Explain your understanding of methods, endpoints, and security in a full stack application.

The methods used in a full-stack application determine the functionality and dynamics of a webpage. HTTP requests such as GET, POST, PUT, and DELETE can be utilized to obtain or modify the database to implement the necessary features. On the backend, the database functions (.create, .findOne, .find, .findOneAndUpdate) are employed to alter the database in accordance with the client's requirements. Endpoints are the outcomes of the methods as observed by the client side or admin of the application. It is important to test endpoints to ensure that they operate correctly, display data accurately, and report errors if any occur. Security is another layer of code that is added to prevent unauthorized or unauthenticated users from accessing or modifying the database. For example, adding or modifying a trip in the database requires safeguarding the API endpoints to prevent unauthorized users from tampering with the database.

## Reflection

### How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

This course was a good introduction to what can be expected professionally. I already knew how to use Express with the personal projects I've done, but I never used Angular; I usually used React for my frontend. I also don't think I've ever used passport either for handling authentication. This was definitely helpful for me to build this application from scratch. Going back to previously made files showed how code can be maintained. Using tools like Postman helped to show the processes that the browser didn't always show, for instance, when creating new users.
