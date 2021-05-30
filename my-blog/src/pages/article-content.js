const articles = [
    {
        name : 'learn-react',
        title : 'Learn react here',
        content : [
            `We will build a small game during this tutorial. You might be tempted to skip it because you’re not building games — but give it a chance. The techniques you’ll learn in the tutorial are fundamental to building any React app, and mastering it will give you a deep understanding of React.

            Tip
            
            This tutorial is designed for people who prefer to learn by doing. If you prefer learning concepts from the ground up, check out our step-by-step guide. You might find this tutorial and the guide complementary to each other.
            
            The tutorial is divided into several sections:
            
            Setup for the Tutorial will give you a starting point to follow the tutorial.
            Overview will teach you the fundamentals of React: components, props, and state.
            Completing the Game will teach you the most common techniques in React development.
            Adding Time Travel will give you a deeper insight into the unique strengths of React.
            You don’t have to complete all of the sections at once to get the value out of this tutorial. Try to get as far as you can — even if it’s one or two sections.
            ReactJS is JavaScript library used for building reusable UI components. According to React official documentation, following is the definition −

React is a library for building composable user interfaces. It encourages the creation of reusable UI components, which present data that changes over time. Lots of people use React as the V in MVC. React abstracts away the DOM from you, offering a simpler programming model and better performance. React can also render on the server using Node, and it can power native apps using React Native. React implements one-way reactive data flow, which reduces the boilerplate and is easier to reason about than traditional data binding.

React Features
JSX − JSX is JavaScript syntax extension. It isn't necessary to use JSX in React development, but it is recommended.

Components − React is all about components. You need to think of everything as a component. This will help you maintain the code when working on larger scale projects.

Unidirectional data flow and Flux − React implements one-way data flow which makes it easy to reason about your app. Flux is a pattern that helps keeping your data unidirectional.

License − React is licensed under the Facebook Inc. Documentation is licensed under CC BY 4.0.

React Advantages
Uses virtual DOM which is a JavaScript object. This will improve apps performance, since JavaScript virtual DOM is faster than the regular DOM.

Can be used on client and server side as well as with other frameworks.

Component and data patterns improve readability, which helps to maintain larger apps.

React Limitations
Covers only the view layer of the app, hence you still need to choose other technologies to get a complete tooling set for development.

Uses inline templating and JSX, which might seem awkward to some developers.
            `
        ]
    },
    {
        name: 'building react',
        title : 'What Are We Building?',
        content : [
            `
            In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.
            
            You can see what we’ll be building here: Final Result. If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry! The goal of this tutorial is to help you understand React and its syntax.
            
            We recommend that you check out the tic-tac-toe game before continuing with the tutorial. One of the features that you’ll notice is that there is a numbered list to the right of the game’s board. This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.
            
            You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial. Our next step is to set you up so that you can start building the game.
            
            `
        ]
    },
    {
        name : 'prerequisites',
        title : 'Prerequisites',
        content : [
             
            `
            We’ll assume that you have some familiarity with HTML and JavaScript, but you should be able to follow along even if you’re coming from a different programming language. We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.
            
            If you need to review JavaScript, we recommend reading this guide. Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements. You can use the Babel REPL to check what ES6 code compiles to.
            
            `
        ]
    },
];

export default articles;