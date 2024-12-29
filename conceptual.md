### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
JWT stands for JSON Web Token. It is used for authentication when dealing with users or admins or passwords in Express.

- What is the signature portion of the JWT?  What does it do?
The signature shows the version of the header and payload. It is signed with a SECRET_KEY.

- If a JWT is intercepted, can the attacker see what's inside the payload?
Yes. The information is not encrypted.

- How can you implement authentication with a JWT?  Describe how it works at a high level.
You can use JSON Web Token and Bcrypt to store credentials in a hashed format that needs to be decrypted in order to read. After verifying the credentials, a token is generated and stored for the user. That token contains login information for the user and allows them to have access  to certain pages. They can also be denied of certain pages if the token does not permit that level of user to enter the page.

- Compare and contrast unit, integration and end-to-end tests.
A unit test can be used to select a single function to be tested rather than everything at once. Integration tests are used to ensure all the functions can run properly in the program without an error. End-to-end tests runs through entire application from start to finish and verifies that everything works.

- What is a mock? What are some things you would mock?
A mock is a sample test. It is used mostly with unit testing, isolating a single function to test. A mock can be used to simulate certain aspects of the code that may not be written yet.

- What is continuous integration?
Continuous integration involves many, small merges instead of merging the whole thing at the end of the development cycle. It is great for large projects, running many smaller functions will tests whether the larger project as a whole runs smoothly.

- What is an environment variable and what are they used for?
An enviornment variable stores information such as user keys and passwords. They allow you to login to PSQL databases. You usually do not share this portion of the project with others.

- What is TDD? What are some benefits and drawbacks?
TDD stands for Test Driven Development. It involves creating tests, then creating the minimum amount of code required to pass the test. After simpler tests are passed, more complex tests can be added. It is a method that sometimes developers approach first when they want to start a project. Create tests they would face in order to properly run the project.

- What is the value of using JSONSchema for validation?
JSONSchema ensures data is passed exactly as the developer intended. Helps user properly format their data with what the developer wanted.

- What are some ways to decide which code to test?
All code should be tested. You have to think of scenarios that are relevant to your project. Think of any factors that might impede the ability for your code to run properly. Think of any factors another users may contribute that may break your program.

- What does `RETURNING` do in SQL? When would you use it?
This is used with Express. RETURNING retrieves values from an SQL query that the program may need to store or return.

- What are some differences between Web Sockets and HTTP?
Websockets are smaller that HTTP and are used to update the browser. HTTP helps running the page, using headers and information provided by the HTML.

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
Personally, I ran into many problems with Flask. The methods I were taught with Flask was accessing it through a venv, which is time consuming in itself to setup for every project. Express was much quicker to access and get ready for use. The amount of tests was also much clearer to use. With Flask, I would not know if my server broke unless I refreshed the page. Express worked in real time and would provide better information on what exactly broke the page. It is also easier to jump into and reset an Express server. Overall I much preferred Express.