React hooks are a feature introduced in React 16.8 that allow you to use state and other React features without writing a class. Here are some fundamental rules for using hooks in React:

Call Hooks at the Top Level: Hooks should always be called at the top level of your React function components. Do not call Hooks inside loops, conditions, or nested functions. This ensures that hooks are called in the same order each time a component renders, which is necessary for React to correctly preserve the state of hooks between multiple useState and useEffect calls.

Call Hooks from React Functions: You can only call Hooks from React function components or from custom hooks. Do not call Hooks from regular JavaScript functions, classes, or any other non-React function.

Only Call Hooks from React Components or Custom Hooks: You should not call Hooks from any place other than a function component or a custom hook. This includes calling Hooks from regular JavaScript functions, event handlers, setTimeout or setInterval callbacks, and side effects within useEffect.

Custom Hooks Must Follow the Same Rules as Built-in Hooks: When you create your own custom hooks, they must also follow the rules of Hooks. Custom hooks should have a name starting with "use" and should encapsulate hook logic. (we will see How to create custom hooks in later classes)

Check Rules with ESLint Plugin: To help follow these rules, you can use the ESLint plugin called eslint-plugin-react-hooks that enforces these rules when using hooks in your code.

These rules are designed to ensure that components behave consistently and that hooks work as expected. They help manage state and side effects in React's functional UI paradigm.

Now as we have seen all the basic stuff with react, We will put our learning into use from the next class by creating a Project! but before that we will akso see what is Reacct-Router and what is client side Routing!