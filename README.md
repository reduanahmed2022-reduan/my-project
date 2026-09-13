My Project Name: Dev Stack Builder.
Dev Stack Builder is a simple web tool for developers to discover tools and frameworks, pick their favorites, and manage their personal tech stack in one place.

Technology that you use :

React.js (Frontend Library)

Tailwind CSS & DaisyUI (Styling & Component Library)

JavaScript (ES6+) / TypeScript (Programming Language)

Vite (Build Tool)

JSON (Local Data Source)

React-Toastify (Notification Alerts)

3 Features About My Project:

Interactive Stack Management: Easily add technologies to the sidebar stack by clicking the "Add to Stack" button. Duplicate entries are automatically prevented, and the button gets disabled once an item is added.

Dynamic Data Fetching & Loading State: Fetches technology data asynchronously from a local JSON file while displaying a smooth loading spinner or message until the data is fully loaded.

Custom Toast Notifications: Integrates the react-toastify package to show real-time alert notifications whenever an item is added, removed, or when the entire stack is cleared.


           React Conceptual Questions & Answers
           
 
What is JSX, and why is it used in React?

JSX: JSX stands for JavaScript XML. It allows you to write HTML-like code inside JavaScript.

Why it is used: It makes writing and understanding React UI components much easier and cleaner.

What is the difference between props and state?

Props: Data passed from a parent component to a child component. It is read-only (cannot be modified by the child).

State: Data managed inside the component that can change over time. When state changes, the component re-renders.

What does the useState hook do, and where did you use it in this project?

What it does: It stores and updates local data/state inside a functional component.

Where I used it: I used it to store the array of selected technologies (myStack) and to manage the loading state (isLoading).

What does the useEffect hook do, and why did you need it to load the JSON data?

What it does: It handles side effects in components, such as fetching data or setting up timers.

Why it was needed: To fetch and load the technology data from the local JSON file automatically when the page first loads.

Why does every item in a .map() list need a unique key prop?

It helps React identify which items have changed, been added, or removed. This improves performance and avoids unnecessary re-rendering.

What is conditional rendering? Show one place you used it.

Definition: Displaying different UI elements based on specific conditions or boolean values.

Example: Showing an empty message when no items are selected, and displaying the item list when technologies are added (myStack.length === 0 ? <EmptyState/> : <StackList/>).

How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

Parent to Child: The parent passes data as custom attributes (props) to the child component.

Child to Parent: The parent passes a callback function as a prop, and the child calls that function with data as arguments (e.g., onAddToCart(tech)).
