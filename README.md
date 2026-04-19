# React Q/A

## 1. What is JSX, and why is it used?
JSX (JavaScript XML) is a syntax extension that allows writing HTML-like code inside JavaScript.  
It is used in React because it makes UI code easier to read, write, and maintain. React converts JSX into JavaScript behind the scenes.

---

## 2. What is the difference between State and Props?

### State
- Managed inside a component  
- Can be updated  
- Changing state re-renders the component  

### Props
- Passed from parent to child  
- Read-only  
- Used to send data or functions between components  

---

## 3. What is the useState Hook, and how does it work?
`useState` is a React Hook used to store and update state in functional components.  
It returns:
- A state value  
- A function to update that value  

Updating the state automatically re-renders the component.

---

## 4. How can you share state between components in React?
State can be shared using:
- **Lifting state up** (move the state to a common parent)
- **Context API** (for global shared state)
- **State management libraries** like Redux or Zustand

---

## 5. How is event handling done in React?
React handles events using **camelCase syntax** and **functions**.  

Example:
```jsx
<button onClick={handleClick}>Click</button>
