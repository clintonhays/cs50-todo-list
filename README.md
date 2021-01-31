# Project 0

The goal of this project is to practice JavaScript and its paradigms by creating
a TODO app. This app should be able to add TODOs and track the number of total
TODOs as well as the number of unchecked TODOs.

## Instructions

Inside of [index.html](/index.html), you'll find some starter HTML. You shouldn't
need to edit this file at all. Open this file on your computer into any browser
to run the project. Make sure that [script.js](/script.js) and [styles.css](/styles.css)
are in the same local directory. With the file open in your browser, you should
see a `New TODO` button, which `alert`s when clicked. Your goal will be to get
this button to create new TODOs.

Inside [styles.css](/styles.css), you'll find some pre-written CSS for your
convenience. You shouldn't need to edit this file at all, but feel free to if
desired.

[script.js](/script.js) is where most of your work will be done. There is some
starter code for you in the file. The `classNames` variable can be used to link
any elements you create in js with the associated CSS class names. The next 3
lines of code are the HTML elements that you'll need to update when creating new
TODOs. Lastly, you'll see the `addTodo()` function. This gets executed when
creating a new TODO. You should replace the `alert()` call with logic to create
new TODOs.

Good luck!

## Challenge! (Not Required)

If you finish early and are up for a challenge, try adding delete functionality.
This should be in the form of a button within each TODO that removes that TODO
when clicked.

## Solution

I revamped most of the starter code in this project. Since I am only auditing the class, I decided to take the opportunity to make a more robust todo list. I'm happy with the end result.

### Challenges

This was a pretty simple app to put together. The most challenging part was deciding how to implement the button that would mark a task complete, but not remove it. I decided to hide the finish and remove buttons and replace them with a single checkmark button. This button provides a visual indicator that the task is complete, but also allows you to click it again to mark it incomplete and reveal the finish and delete buttons once more.

I used the ES6 for...of loop along with the .entries() method to compare the index of the clicked target to the index of the buttons that needed to be toggled. This combo of for...of and .entries() made it simpler to iterate and compare the indices.

### Takeaways

This was a great refresher and an excellent practice project to remind me of DOM traversal methods and array methods. It was also a great reminder of the depth and complexity even a small web app can contain. This will be a great project to revisit and update to a React App.
