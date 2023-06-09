# MIT GitHub Portfolio Project - Front End Banking Application:

![bank-services-concept.jpg](Pics%2Fbank-services-concept.jpg)

## I. Description:

This **front-end banking application** was built using **React** which features a range of technologies that contributed to its functionality and user experience. **Routing** was implemented using **React Router**, allowing seamless navigation between different pages within the application. It ensures smooth transitions and a consistent user experience throughout the banking features.

To manage the application's state and facilitate data sharing, **React's Context API** was utilized. A banking context was created to store critical information, including account balances, user details, and transaction data. This enabled components to access and update the shared data, ensuring real-time and accurate information across the application.

**Bootstrap**, a **CSS framework**, was employed to enhance the visual design and responsiveness of the banking application. Its responsive grid system, pre-designed components, and utilities were used to create a sleek and professional interface. Combining Bootstrap's CSS classes with custom styles which resulted in an aesthetically pleasing and user-friendly application.

**HTML, CSS, JavaScript, and JSX** formed the foundation of the front-end banking application. HTML provided the structure of the user interface, CSS handled the styling, and JavaScript offered the necessary logic for interactive functionality. JSX, a syntax extension of JavaScript, facilitated the seamless integration of HTML-like code within JavaScript, resulting in more readable and maintainable code.

Overall, the **front-end banking application** showcases the successful implementation of these technologies. With routing, context, states, Bootstrap, HTML, CSS, JavaScript, and JSX, the application delivers a user-friendly banking experience. However, it should be noted that security hasn't been built into the web application yet and is part of future developments.

The **web application** consists of the following pages:


* **Homepage:** this is the main landing page that just displays a welcome message. 
* **Create Account:** this page allows the user to enter their information such as name, email, and password.
* **Deposit:** this page allows the user to enter a deposit amount with some minimal input validation.
* **Withdraw:** this page allows the user to enter a withdrawal amount with some minimal input validation.
* **AllData:** this page displays a table of all current users with their information such as email, password, and balance. It should be noted that the passwords are NOT hashed and in plaintext. Hashing the passwords are part of future developments.


Link to AWS Deployment: **[Bad Bank Web Application]()**

## II.A. How to Run (Locally):

To run the **web application** locally from **source code** obtained from **GitHub**, you can follow these general steps:

**1. Clone the Repository:**
  - Visit the GitHub repository hosting the web application's source code.
  - Click on the "Code" button and copy the repository's URL.
  - Open a terminal or command prompt on your local machine.
  - Use the `git clone` command followed by the repository URL to clone the repository to your local machine.

**2. Install Dependencies:**
  - Navigate to the project's root directory in the terminal or command prompt.
  - Check for any dependency files like `package.json` or `requirements.txt`.
  - If there is a `package.json` file, run `npm install` to install JavaScript dependencies using Node Package Manager (NPM).
  - If there is a `requirements.txt` file, run `pip install -r requirements.txt` to install Python dependencies using pip.

**3. Configure Environment Variables:**
  - Look for any configuration files or documentation mentioning environment variables.
  - Set any required environment variables for the web application, such as API keys, database credentials, or other configuration settings.
  - Create a `.env` file in the project's root directory if needed and populate it with the necessary variables.

**4. Build the Application:**
  - If the web application requires a build step, follow the instructions provided in the project's documentation.
  - Typically, this involves running a build command, such as `npm run build`, to generate the optimized and compiled version of the application.

**5. Start the Local Server:**
  - Execute the appropriate command to start the local server.
  - This could be something like `npm start`, `http-server -c1-1`, or any custom command mentioned in the project's documentation.
  - Once the server starts successfully, it will typically provide a local URL (e.g., `http://localhost:3000`) where you can access the web application in your browser.

**6. Access the Web Application:**
  - Open your web browser and visit the local URL provided by the server.
  - The web application should now be running locally, allowing you to interact with it as if it were hosted online.

It's important to note that these steps may vary depending on the specific web application, programming languages, frameworks, or build tools used. Always refer to the project's documentation or README file for any specific instructions or requirements.

## II.B. How to Run (AWS S3 Stand Alone Static Web Page):

Deployment For React Standalone

If you’re using the standalone version of the app (not create-react-app), you can still deploy your application to an S3 bucket. The same rules still apply, you have to upload all your application files to the bucket and make it publicly accessible.

You can make your S3 bucket publicly accessible by [following these steps](https://docs.aws.amazon.com/pdfs/AmazonS3/latest/userguide/s3-userguide.pdf#EnableWebsiteHosting):

* Go to your S3 bucket and locate the “Permissions” tab
* Once on that tab, scroll down to the “Bucket Policy” section and click “edit” 
* Paste the following JSON into the box, making sure you change FIRSTNAME_LASTNAMEBANKINGAPP to your actual bucket name:

```json
{
    "Version": "2008-10-17",

    "Statement": [
        {
            "Sid": "AllowPublicRead",
            "Effect": "Allow",
            "Principal": {
                "AWS": "*"
            },

            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::FIRSTNAME_LASTNAMEBANKINGAPP/*"
        }
    ]
}
```

* Click save.

* Your bucket should now be publicly accessible.


## III. Future Additions:

To enhance the security and functionality of the front-end web-based banking application, future development code can be implemented to support features such as login functionality, password hashing, and overall application security.

For login functionality, a user authentication system can be incorporated, which includes capturing and validating user credentials, managing user sessions, and providing secure access to protected areas of the application. Password hashing techniques, like bcrypt or Argon2

Incorporating a backend framework and database are also planned for future updates.

## IV. Online Resources:

### Bootstrap Resource pages:
* [Introduction to Bootstrap](https://getbootstrap.com/docs/4.3/getting-started/introduction/)
* [Bootstrap NavBar](https://getbootstrap.com/docs/5.3/components/navbar/)
* [Bootstrap Cards](https://getbootstrap.com/docs/5.3/components/card/#about)
* [Bootstrap Tooltips](https://getbootstrap.com/docs/4.0/components/tooltips/)
* [Bootstrap Tables](https://getbootstrap.com/docs/4.0/content/tables/)
* [Background color](https://getbootstrap.com/docs/5.0/utilities/background/)

### React Resource Pages:
* [React \<input> Component](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)
* [Conditional Rendering](https://legacy.reactjs.org/docs/conditional-rendering.html)

### MDN Web Docs:
* [HTML elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
  * [\<p>: The Paragraph element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p)
* [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event)
* [HashChangeEvent](https://developer.mozilla.org/en-US/docs/Web/API/HashChangeEvent)
* [isNaN()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN)

### Other Sources:

* [Bank Icon Pics](https://www.freepik.com/search?format=search&page=2&query=Bank+Icons)

## V. License information:

### Author: Paul Estipona

Student at MIT - Fullstack Development with MERN

### MIT License:

Copyright (c) 2023 Paul Estipona

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.