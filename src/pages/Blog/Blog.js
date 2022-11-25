import React from 'react';

const Blog = () => {
    return (
        <div className='mx-auto'>
            <h2 className='md:text-5xl sm:text-3xl text-2xl text-blue-900 my-12 '>There are some questions and answers, which is beneficial for you.</h2>
            <div className="my-4 p-5 bg-cyan-300 text-left rounded-lg">
                <h2 className='text-2xl mb-2'>What are the different ways to manage a state in a React application?</h2>
                <h3 className='text-xl'>The Four Kinds of React State to Manage</h3>
                <ol type="1">
                    <li>Local state.</li>
                    <li>Global state.</li>
                    <li>Server state.</li>
                    <li>URL state.</li>
                </ol>

            </div>
            <div className="my-4 p-4 bg-cyan-200 text-left rounded-lg">
                <h3 className='text-2xl mb-2'>How does prototypical inheritance work?</h3>
                <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.
                </p>
            </div>
            <div className="my-4 p-4 bg-cyan-300 text-left rounded-lg">
                <h3 className='text-2xl mb-2'>What is a unit test? Why should we write unit tests?</h3>
                <p>Unit testing, a testing technique using which individual modules are tested to determine if there are any issues by the developer himself.</p>
                <p>when you write test you take the perspective of the one that will consume your code. It forces you to have an holistic approach of the behavior to implement. This way ambiguities you get from requirements become obvious and are immediately taken account when code is written the first time.</p>
            </div>
            <div className="my-4 p-4 bg-cyan-200 text-left rounded-lg">
                <h3 className='text-2xl mb-2'> React vs. Angular vs. Vue</h3>
                <p>React is a UI library, Angular is a fully-fledged front-end framework, while Vue.js is a progressive framework. <br />They can be used almost interchangeably to build front-end applications, but they’re not 100 percent the same, so it makes sense to compare them and understand their differences. <br />Each framework is component-based and allows the rapid creation of UI features. </p>
            </div>
        </div>
    );
};

export default Blog;
