# MIT GitHub Portfolio Project - Front End Banking Application:

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

# How to run it


## Online Resources:

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
## License information
MIT License

Copyright (c) 2023 Paul Estipona

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.