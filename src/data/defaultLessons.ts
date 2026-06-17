import { Chapter, Lesson, QuizQuestion } from '../types';

export const DEFAULT_CHAPTERS: Chapter[] = [
  {
    id: 'ch-html',
    slug: 'html',
    title: 'HTML Fundamentals',
    order: 1
  },
  {
    id: 'ch-css',
    slug: 'css',
    title: 'CSS Mastery',
    order: 2
  },
  {
    id: 'ch-js',
    slug: 'js',
    title: 'Modern JavaScript',
    order: 3
  },
  {
    id: 'ch-git',
    slug: 'git',
    title: 'Git & GitHub',
    order: 4
  },
  {
    id: 'ch-react',
    slug: 'react',
    title: 'React.js',
    order: 5
  },
  {
    id: 'ch-api',
    slug: 'api',
    title: 'API Integration',
    order: 6
  },
  {
    id: 'ch-node',
    slug: 'node',
    title: 'Node & Express',
    order: 7
  },
  {
    id: 'ch-mongodb',
    slug: 'mongodb',
    title: 'MongoDB & Mongoose',
    order: 8
  },
  {
    id: 'ch-final',
    slug: 'final',
    title: 'Final MERN Project',
    order: 9
  }
];

export const DEFAULT_LESSONS: Lesson[] = [
  // CHAPTER 1: HTML Fundamentals
  {
    id: 'html-intro',
    chapterId: 'ch-html',
    slug: 'introduction',
    title: 'Introduction to HTML',
    order: 1,
    description: 'Learn the basic building blocks of the web and how to structure a webpage.',
    objectives: [
      'Understand what HTML is and how browsers render it.',
      'Learn the basic structure of an HTML5 document.',
      'Write your first HTML headings and paragraphs.'
    ],
    theory: `HTML stands for HyperText Markup Language. It is the standard markup language for documents designed to be displayed in a web browser. 

An HTML document consists of a tree structure of nested elements. Every document begins with a DOCTYPE declaration indicating that the page uses HTML5 features. It is followed by the html, head, and body tags. The head contains page metadata like the title and character set, while the body contains the visible layout content.`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My First Webpage</title>
</head>
<body>
  <h1>Welcome to MERN Workshop</h1>
  <p>HTML is the structure of all websites.</p>
</body>
</html>`,
    practiceTask: 'Modify the header to say "Hello World" and add a paragraph of text below it.',
    practiceInitialCode: `<h1>Welcome</h1>
<p>Start coding...</p>`,
    practiceSolution: `<h1>Hello World</h1>
<p>My first HTML paragraph.</p>`,
    quizQuestions: [
      {
        id: 'q-html-1',
        question: 'What does HTML stand for?',
        options: [
          'HighText Markup Language',
          'HyperText Markup Language',
          'HyperTabular Markdown Language',
          'Home Tool Markup Language'
        ],
        correctAnswerIndex: 1,
        explanation: 'HTML stands for HyperText Markup Language, the standard formatting system for creating web layouts.'
      }
    ]
  },
  {
    id: 'html-elements',
    chapterId: 'ch-html',
    slug: 'elements',
    title: 'HTML Elements',
    order: 2,
    description: 'Deep dive into nested tags, block versus inline elements, and content tags.',
    objectives: [
      'Differentiate between block-level and inline elements.',
      'Use nested list structures, formatting tags, and links.',
      'Understand elements and attributes.'
    ],
    theory: `HTML elements consist of a start tag, content, and an end tag. Attributes provide extra information about elements and are defined in the start tag (e.g. href in a tags or src in img tags).

Block-level elements (like div, p, h1, ul) always start on a new line and take up the full width available. Inline elements (like span, a, strong, em) do not start on a new line and only take up as much width as necessary.`,
    codeExample: `<!-- Block element container -->
<div>
  <p>This is a paragraph with an <a href="https://google.com">inline link</a>.</p>
</div>`,
    practiceTask: 'Create an unordered list containing 3 items representing core elements: headings, forms, and lists.',
    practiceInitialCode: `<ul>
  <!-- Add items here -->
</ul>`,
    practiceSolution: `<ul>
  <li>Headings</li>
  <li>Forms</li>
  <li>Lists</li>
</ul>`,
    quizQuestions: [
      {
        id: 'q-html-2',
        question: 'Which of the following is an inline element?',
        options: ['<div>', '<p>', '<span>', '<h1>'],
        correctAnswerIndex: 2,
        explanation: '<span> is an inline element. It is used to style or isolate parts of a text inline.'
      }
    ]
  },
  {
    id: 'html-forms',
    chapterId: 'ch-html',
    slug: 'forms',
    title: 'Forms and Inputs',
    order: 3,
    description: 'Learn how to construct data forms and validate user input.',
    objectives: [
      'Build forms with text fields, radio buttons, checkboxes, and select menus.',
      'Set form attributes like action, method, and input validations.',
      'Understand input types like email, password, and number.'
    ],
    theory: `HTML Forms are used to collect user input. The form element acts as a container for input elements.

Input types are critical for validation. By setting type="email", type="password", or adding attributes like required, the browser automatically prevents invalid submissions.`,
    codeExample: `<form action="/submit" method="POST">
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" required>
  <button type="submit">Register</button>
</form>`,
    practiceTask: 'Add a submit button and an email field with client-side required validation to the form.',
    practiceInitialCode: `<form>
  <label>Email:</label>
  <input type="text" name="email">
</form>`,
    practiceSolution: `<form>
  <label>Email:</label>
  <input type="email" name="email" required>
  <button type="submit">Submit</button>
</form>`,
    quizQuestions: [
      {
        id: 'q-html-3',
        question: 'Which input type is best suited for secure passwords?',
        options: ['type="text"', 'type="password"', 'type="secure"', 'type="number"'],
        correctAnswerIndex: 1,
        explanation: 'type="password" masks entered characters, ensuring privacy.'
      }
    ]
  },
  {
    id: 'html-semantic',
    chapterId: 'ch-html',
    slug: 'semantic-html',
    title: 'Semantic HTML',
    order: 4,
    description: 'Improve search engine rankings and screen reader accessibility with semantic layout tags.',
    objectives: [
      'Explain the difference between non-semantic and semantic elements.',
      'Use layouts: header, nav, main, article, section, aside, footer.',
      'Optimize HTML for SEO and Accessibility (A11y).'
    ],
    theory: `A semantic element clearly describes its meaning to both the browser and the developer. Non-semantic elements (div and span) say nothing about their content.

HTML5 introduces elements like article, section, header, and footer to define structural layout blocks, improving search indexing and assistive tools (like screen readers).`,
    codeExample: `<header>
  <nav>
    <a href="/">Home</a>
  </nav>
</header>
<main>
  <article>
    <h2>Introduction to React</h2>
    <p>React is a UI library...</p>
  </article>
</main>`,
    practiceTask: 'Wrap the mock content with semantic main and footer tags.',
    practiceInitialCode: `<div>
  <p>Main content area.</p>
</div>
<div>
  <p>© 2026 MERN Workshop</p>
</div>`,
    practiceSolution: `<main>
  <p>Main content area.</p>
</main>
<footer>
  <p>© 2026 MERN Workshop</p>
</footer>`,
    quizQuestions: [
      {
        id: 'q-html-4',
        question: 'Which HTML5 element is used for primary navigation links?',
        options: ['<nav>', '<navbar>', '<navigation>', '<header>'],
        correctAnswerIndex: 0,
        explanation: 'The <nav> element is semantic and designated specifically for page navigation links.'
      }
    ]
  },

  // CHAPTER 2: CSS Mastery
  {
    id: 'css-basics',
    chapterId: 'ch-css',
    slug: 'css-basics',
    title: 'CSS Basics',
    order: 1,
    description: 'Learn how to apply styles, use colors, and master the CSS Box Model.',
    objectives: [
      'Learn three ways to add styles to HTML files.',
      'Understand the parts of the CSS Box Model (margin, border, padding, content).',
      'Set color properties using Hex, RGB, and HSL.'
    ],
    theory: `CSS (Cascading Style Sheets) describes how HTML elements are to be displayed. Styles can be loaded via External files, Internal style tags, or Inline styles directly in tags.

The CSS Box Model is a container that wraps around every HTML element. It consists of:
- Content: The text or image itself.
- Padding: Space directly around the content (inside the border).
- Border: A line surrounding the padding.
- Margin: Space outside the border separating elements.`,
    codeExample: `.card {
  width: 300px;
  padding: 16px;
  border: 1px solid #ccc;
  margin: 20px;
}`,
    practiceTask: 'Create a box with a red background, 20px of padding, and a black border.',
    practiceInitialCode: `<div style="background-color: transparent;">Box</div>`,
    practiceSolution: `<div style="background-color: red; padding: 20px; border: 1px solid black;">Box</div>`,
    quizQuestions: [
      {
        id: 'q-css-1',
        question: 'What elements are included in the CSS box model?',
        options: [
          'Width, Height, Border',
          'Padding, Border, Margin, Content',
          'Font, Color, Background',
          'Relative, Absolute, Fixed'
        ],
        correctAnswerIndex: 1,
        explanation: 'The CSS Box Model comprises Content, Padding, Border, and Margin.'
      }
    ]
  },
  {
    id: 'css-selectors',
    chapterId: 'ch-css',
    slug: 'selectors',
    title: 'CSS Selectors',
    order: 2,
    description: 'Learn how to target elements, use classes, and master selector specificity.',
    objectives: [
      'Target elements by tag, class, and ID.',
      'Use compound selectors and pseudo-classes.',
      'Understand cascading order and specificity rules.'
    ],
    theory: `CSS selectors define the HTML elements to which a set of CSS rules apply. 
- Element Selector: targets tags directly (e.g. h1).
- Class Selector: targets elements with a class attribute using a dot prefix (e.g. .button).
- ID Selector: targets unique elements with an id using a hash prefix (e.g. #header).

Specificity determines which style rules are applied when multiple selectors match the same element. IDs are highly specific, followed by classes, and lastly tags.`,
    codeExample: `/* Class Selector */
.nav-link {
  color: blue;
}
/* Pseudo-class */
.nav-link:hover {
  text-decoration: underline;
}`,
    practiceTask: 'Style all paragraphs with the class "info" to display in blue.',
    practiceInitialCode: `<style>
  /* Write selector here */
</style>
<p class="info">This is blue.</p>`,
    practiceSolution: `<style>
  .info {
    color: blue;
  }
</style>
<p class="info">This is blue.</p>`,
    quizQuestions: [
      {
        id: 'q-css-2',
        question: 'Which selector has the highest specificity?',
        options: ['div', '.card', '#main-header', '*'],
        correctAnswerIndex: 2,
        explanation: 'ID selectors (#) have the highest CSS specificity weighting.'
      }
    ]
  },
  {
    id: 'css-flexbox',
    chapterId: 'ch-css',
    slug: 'flexbox',
    title: 'CSS Flexbox',
    order: 3,
    description: 'Build responsive 1-dimensional layouts using Flex containers.',
    objectives: [
      'Create flex containers and direct flex items.',
      'Align items horizontally and vertically.',
      'Distribute items using flex-wrap and justify-content.'
    ],
    theory: `Flexbox is a 1-dimensional layout model. It makes it easier to design flexible responsive layout structures without using floats.

By setting display: flex on a parent container, children automatically become flex items. Main properties include justify-content (to align items along the main horizontal axis) and align-items (to align items along the cross vertical axis).`,
    codeExample: `.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}`,
    practiceTask: 'Arrange three boxes side-by-side with equal spacing between them.',
    practiceInitialCode: `<div style="display: block;">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`,
    practiceSolution: `<div style="display: flex; justify-content: space-between;">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`,
    quizQuestions: [
      {
        id: 'q-css-3',
        question: 'Which property aligns flex items along the cross axis?',
        options: ['justify-content', 'align-items', 'flex-direction', 'align-content'],
        correctAnswerIndex: 1,
        explanation: 'align-items defines how items are aligned vertically/cross-axially inside a flex container.'
      }
    ]
  },
  {
    id: 'css-grid',
    chapterId: 'ch-css',
    slug: 'grid',
    title: 'CSS Grid',
    order: 4,
    description: 'Build complex 2-dimensional layouts using Grid columns and rows.',
    objectives: [
      'Initialize grid layouts using display: grid.',
      'Define templates for grid rows and columns.',
      'Use properties like grid-gap and grid-template-areas.'
    ],
    theory: `CSS Grid Layout is a 2-dimensional layout system, handling both columns and rows. It provides precise control over structural web layouts.

Setting display: grid enables grid layouts. You can specify columns using grid-template-columns: repeat(3, 1fr) (creating 3 equal columns) and gaps using gap: 16px.`,
    codeExample: `.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}`,
    practiceTask: 'Create a grid wrapper featuring 2 equal-width columns and a 10px gap.',
    practiceInitialCode: `<div style="display: block;">
  <div>Left Col</div>
  <div>Right Col</div>
</div>`,
    practiceSolution: `<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px;">
  <div>Left Col</div>
  <div>Right Col</div>
</div>`,
    quizQuestions: [
      {
        id: 'q-css-4',
        question: 'What does the fractional unit (1fr) represent in CSS Grid?',
        options: ['1 unit of fixed pixels', '1 fraction of the remaining free space', '1 percentage of absolute viewport', '1 border-box width'],
        correctAnswerIndex: 1,
        explanation: 'fr units allocate flexible fractional shares of the remaining space in grid layouts.'
      }
    ]
  },
  {
    id: 'css-responsive',
    chapterId: 'ch-css',
    slug: 'responsive-design',
    title: 'Responsive Design',
    order: 5,
    description: 'Master media queries, fluid sizing, and mobile-first responsive design.',
    objectives: [
      'Write mobile-first media queries.',
      'Use fluid layout units like em, rem, vh, vw.',
      'Implement responsive breakpoints for cards.'
    ],
    theory: `Responsive web design makes web layouts render beautifully on all device viewports. 

Media queries are css structures targeting device profiles (such as @media (min-width: 768px)). Responsive values include relative units like rem (relative to root font-size) and vw/vh (viewport width/height).`,
    codeExample: `/* Mobile default style */
.sidebar {
  display: none;
}
/* Desktop breakpoint screen style */
@media (min-width: 768px) {
  .sidebar {
    display: block;
  }
}`,
    practiceTask: 'Write a stylesheet rule to change the background to lightblue on viewports wider than 600px.',
    practiceInitialCode: `<style>
  /* Add query here */
</style>`,
    practiceSolution: `<style>
  @media (min-width: 600px) {
    body {
      background-color: lightblue;
    }
  }
</style>`,
    quizQuestions: [
      {
        id: 'q-css-5',
        question: 'Which syntax implements responsive css breakpoint filters?',
        options: ['@import font', '@media (min-width: 768px)', '@viewport display', '@supports grid'],
        correctAnswerIndex: 1,
        explanation: '@media constructs filter styles targeting viewport sizes and characteristics.'
      }
    ]
  },

  // CHAPTER 3: Modern JavaScript
  {
    id: 'js-variables',
    chapterId: 'ch-js',
    slug: 'variables',
    title: 'Variables & Data Types',
    order: 1,
    description: 'Learn let, const, block scope, and primitive versus object types.',
    objectives: [
      'Differentiate between var, let, and const.',
      'Understand primitive types (String, Number, Boolean, Null, Undefined).',
      'Identify object types and arrays.'
    ],
    theory: `JavaScript is dynamic. ES6 introduced let and const to declare variables.
- let allows re-assigning values and is block-scoped.
- const prevents re-assignment and is block-scoped.
- var is function-scoped and hoisted. Use of var is discouraged.`,
    codeExample: `const name = 'Alice'; // Read-only
let count = 0; // Mutable
count += 1;`,
    practiceTask: 'Declare a const variable username containing "Rishav" and log it to the console.',
    practiceInitialCode: `// Write code here`,
    practiceSolution: `const username = 'Rishav';
console.log(username);`,
    quizQuestions: [
      {
        id: 'q-js-1',
        question: 'Which keyword defines a read-only variable in JS?',
        options: ['var', 'let', 'const', 'def'],
        correctAnswerIndex: 2,
        explanation: 'const prevents re-assignment of the variable name reference.'
      }
    ]
  },
  {
    id: 'js-functions',
    chapterId: 'ch-js',
    slug: 'functions',
    title: 'Functions',
    order: 2,
    description: 'Learn function declarations, expressions, arrow functions, and scopes.',
    objectives: [
      'Write function declarations and expressions.',
      'Understand parameter bounds and return values.',
      'Synthesize ES6 arrow functions.'
    ],
    theory: `Functions group lines of code. 

ES6 introduces Arrow Functions which offer a shorter syntax and bind the value of "this" lexically.`,
    codeExample: `// Arrow function expression
const add = (a, b) => a + b;
console.log(add(5, 3)); // 8`,
    practiceTask: 'Convert the function to an arrow function: function double(x) { return x * 2; }',
    practiceInitialCode: `function double(x) {
  return x * 2;
}`,
    practiceSolution: `const double = x => x * 2;`,
    quizQuestions: [
      {
        id: 'q-js-2',
        question: 'Which syntax defines a valid ES6 arrow function?',
        options: [
          'const f = function() {}',
          'const f = () => {}',
          'function f() {}',
          'const f = arrow() {}'
        ],
        correctAnswerIndex: 1,
        explanation: '() => {} is the standard shorthand for ES6 arrow expressions.'
      }
    ]
  },
  {
    id: 'js-arrays',
    chapterId: 'ch-js',
    slug: 'arrays',
    title: 'Arrays & Array Methods',
    order: 3,
    description: 'Master arrays and higher-order methods: map, filter, and reduce.',
    objectives: [
      'Initialize array lists.',
      'Manipulate arrays with push, pop, shift, unshift.',
      'Use higher-order methods map, filter, find, and reduce.'
    ],
    theory: `Arrays store ordered list elements. JavaScript arrays are dynamic.

Higher-order methods map, filter, and reduce are the core building blocks of functional React programming.`,
    codeExample: `const prices = [10, 20, 30];
const doublePrices = prices.map(price => price * 2); // [20, 40, 60]
const largePrices = prices.filter(price => price > 15); // [20, 30]`,
    practiceTask: 'Given an array of ages, filter out ages below 18.',
    practiceInitialCode: `const ages = [15, 22, 16, 45, 18];
const adults = // filter here`,
    practiceSolution: `const ages = [15, 22, 16, 45, 18];
const adults = ages.filter(age => age >= 18);`,
    quizQuestions: [
      {
        id: 'q-js-3',
        question: 'Which array method returns a brand new array containing transformed items?',
        options: ['forEach', 'find', 'map', 'filter'],
        correctAnswerIndex: 2,
        explanation: 'map loops over items and outputs a new array containing the results of the callback.'
      }
    ]
  },
  {
    id: 'js-objects',
    chapterId: 'ch-js',
    slug: 'objects',
    title: 'Objects & JSON',
    order: 4,
    description: 'Learn object literals, property accessors, destructuring, and JSON formatting.',
    objectives: [
      'Create object literals with keys and values.',
      'Access attributes using dot notation and bracket notation.',
      'Use destructuring on objects.'
    ],
    theory: `Objects store key-value collections. JSON (JavaScript Object Notation) is a data format derived from object properties.`,
    codeExample: `const user = { name: 'Alice', role: 'admin' };
// Object Destructuring
const { name, role } = user;
console.log(name); // 'Alice'`,
    practiceTask: 'Destructure the title and order from the chapter object.',
    practiceInitialCode: `const chapter = { title: 'JS', order: 3 };
// Destructure here`,
    practiceSolution: `const chapter = { title: 'JS', order: 3 };
const { title, order } = chapter;`,
    quizQuestions: [
      {
        id: 'q-js-4',
        question: 'Which expression accesses the name property on a user object?',
        options: ['user.name', 'user["name"]', 'Both of the above', 'None of the above'],
        correctAnswerIndex: 2,
        explanation: 'Both dot and bracket accessors are fully valid syntax in JavaScript.'
      }
    ]
  },
  {
    id: 'js-es6',
    chapterId: 'ch-js',
    slug: 'es6-features',
    title: 'ES6+ Features',
    order: 5,
    description: 'Learn template literals, spread/rest operators, modules, and promises.',
    objectives: [
      'Use template string interpolation.',
      'Apply spread and rest (...) operators.',
      'Import and export modules.'
    ],
    theory: `ES6 features include template literals (using backticks) and spread/rest syntax to expand array lists or merge object keys.`,
    codeExample: `const nums = [1, 2];
const newNums = [...nums, 3, 4]; // [1, 2, 3, 4]
const name = 'Alice';
console.log(\`Hello \${name}\`); // Template literal`,
    practiceTask: 'Merge the two objects into a single object named fullProfile using spread syntax.',
    practiceInitialCode: `const base = { id: 1 };
const details = { name: 'Alice' };
const fullProfile = // Merge here`,
    practiceSolution: `const base = { id: 1 };
const details = { name: 'Alice' };
const fullProfile = { ...base, ...details };`,
    quizQuestions: [
      {
        id: 'q-js-5',
        question: 'Which symbol is used for the ES6 spread operator?',
        options: ['...', '&&', '||', '==='],
        correctAnswerIndex: 0,
        explanation: 'The three dots (...) denote the spread/rest operator.'
      }
    ]
  },

  // CHAPTER 4: Git & GitHub
  {
    id: 'git-basics',
    chapterId: 'ch-git',
    slug: 'git-basics',
    title: 'Git Basics',
    order: 1,
    description: 'Learn version control, git init, add, and repository status checks.',
    objectives: [
      'Initialize Git repositories.',
      'Check tracking status and add files to stage.',
      'Configure global git name and email parameters.'
    ],
    theory: `Git is a distributed version control system. It tracks code modifications.

Key commands:
- git init: Initializes a new local Git repository.
- git status: Checks the status of files (untracked, modified, or staged).
- git add <file>: Adds files to the staging index.`,
    codeExample: `$ git init
$ git status
$ git add .`,
    practiceTask: 'Write the command to add all modified files to the Git staging index.',
    practiceInitialCode: `# Write git command`,
    practiceSolution: `git add .`,
    quizQuestions: [
      {
        id: 'q-git-1',
        question: 'Which command initializes a new local Git repository?',
        options: ['git create', 'git init', 'git start', 'git setup'],
        correctAnswerIndex: 1,
        explanation: 'git init creates a new local .git directory in the root of the project.'
      }
    ]
  },
  {
    id: 'git-commit',
    chapterId: 'ch-git',
    slug: 'commit-push',
    title: 'Commit & Push',
    order: 2,
    description: 'Learn how to commit local edits and push updates to remote GitHub repositories.',
    objectives: [
      'Write git commit messages.',
      'Connect local repositories to remote endpoints (GitHub).',
      'Push local commits upstream.'
    ],
    theory: `Committing saves staged changes. Pushing transmits commits from your local repository to a remote site like GitHub.`,
    codeExample: `$ git commit -m "feat: add user login page"
$ git remote add origin <url>
$ git push -u origin main`,
    practiceTask: 'Write the command to create a commit with the message "Fix bug".',
    practiceInitialCode: `# Write command`,
    practiceSolution: `git commit -m "Fix bug"`,
    quizQuestions: [
      {
        id: 'q-git-2',
        question: 'What is the purpose of the -m flag in git commit?',
        options: ['Specifies modified files', 'Adds a commit description message', 'Forces merge overrides', 'Creates master branch'],
        correctAnswerIndex: 1,
        explanation: '-m passes a inline descriptive commit message.'
      }
    ]
  },
  {
    id: 'git-branches',
    chapterId: 'ch-git',
    slug: 'branches',
    title: 'Git Branches',
    order: 3,
    description: 'Learn how to create, navigate, merge, and clean branch trackers.',
    objectives: [
      'Create and switch branches.',
      'Merge features into root branches.',
      'Check branch status lists.'
    ],
    theory: `Branches isolate workspace changes without affecting the production trunk.`,
    codeExample: `$ git checkout -b feature/auth
$ git checkout main
$ git merge feature/auth`,
    practiceTask: 'Write the command to switch to an existing branch named feature/login.',
    practiceInitialCode: `# Write switch command`,
    practiceSolution: `git checkout feature/login`,
    quizQuestions: [
      {
        id: 'q-git-3',
        question: 'Which command creates and immediately switches to a new branch?',
        options: ['git branch <name>', 'git checkout -b <name>', 'git checkout <name>', 'git branch -new <name>'],
        correctAnswerIndex: 1,
        explanation: 'git checkout -b creates the branch and switches your active index to it.'
      }
    ]
  },
  {
    id: 'git-prs',
    chapterId: 'ch-git',
    slug: 'pull-requests',
    title: 'Pull Requests',
    order: 4,
    description: 'Learn repository collaboration workflows and Pull Requests (PRs).',
    objectives: [
      'Create pull requests on GitHub.',
      'Perform peer review merges.',
      'Resolve merge conflict indicators.'
    ],
    theory: `Pull requests let you tell others about changes you have pushed to a branch in a repository on GitHub. Once a pull request is opened, you can discuss and review the potential changes.`,
    codeExample: `# Push branch upstream first
$ git push origin feature/auth
# Open pull request on GitHub web UI.`,
    practiceTask: 'List the keyword used to request merging features on Github.',
    practiceInitialCode: `// Enter term here`,
    practiceSolution: `Pull Request`,
    quizQuestions: [
      {
        id: 'q-git-4',
        question: 'What is a Pull Request?',
        options: ['A git command to fetch commits', 'A github request to merge a branch into main', 'A branch delete protocol', 'A pull merge override'],
        correctAnswerIndex: 1,
        explanation: 'PRs are requests to review and merge custom feature branches into main.'
      }
    ]
  },

  // CHAPTER 5: React.js
  {
    id: 'react-intro',
    chapterId: 'ch-react',
    slug: 'introduction',
    title: 'Introduction to React',
    order: 1,
    description: 'Learn component UI rendering and Virtual DOM fundamentals.',
    objectives: [
      'Understand React component architecture.',
      'Explain declarative versus imperative programming.',
      'Learn standard Single Page Application (SPA) lifecycles.'
    ],
    theory: `React is a declarative, component-based frontend UI library built by Facebook. It renders markup efficiently using a Virtual DOM, which only updates browser nodes when necessary.`,
    codeExample: `import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => <h1>Hello React</h1>;
ReactDOM.createRoot(document.getElementById('root')).render(<App />);`,
    practiceTask: 'Create a simple function component named Heading returning a title.',
    practiceInitialCode: `// Write function component here`,
    practiceSolution: `const Heading = () => <h1>Welcome to React</h1>;`,
    quizQuestions: [
      {
        id: 'q-react-1',
        question: 'Which of the following describes the Virtual DOM?',
        options: [
          'A browser utility package',
          'A memory representation of the real DOM nodes',
          'An offline database layer',
          'A style sheet compiler'
        ],
        correctAnswerIndex: 1,
        explanation: 'React compares the virtual DOM with the real DOM to apply minimal structural edits.'
      }
    ]
  },
  {
    id: 'react-jsx',
    chapterId: 'ch-react',
    slug: 'jsx',
    title: 'JSX Syntax',
    order: 2,
    description: 'Learn JavaScript XML expression formatting inside components.',
    objectives: [
      'Mix XML/HTML markup inside JavaScript.',
      'Bind variables, styles, and events in JSX.',
      'Understand class vs className and style structures.'
    ],
    theory: `JSX stands for JavaScript XML. It allows us to write HTML in React. JSX makes it easier to write and add HTML in React.

Because JSX gets compiled into JavaScript, we cannot use reserved terms like class (we use className) or style="color:red" (we use object style={{ color: 'red' }}).`,
    codeExample: `const name = 'Alice';
const profile = (
  <div className="card" style={{ color: 'blue' }}>
    <h1>Hello {name}</h1>
  </div>
);`,
    practiceTask: 'Correct the error in this JSX expression: <div class="box" style="margin-top:10px">Box</div>',
    practiceInitialCode: `<div class="box" style="margin-top:10px">Box</div>`,
    practiceSolution: `<div className="box" style={{ marginTop: '10px' }}>Box</div>`,
    quizQuestions: [
      {
        id: 'q-react-2',
        question: 'How do you embed JavaScript expressions inside JSX tags?',
        options: ['Using parenthese ()', 'Using curly braces {}', 'Using angle brackets <>', 'Using string quotes ""'],
        correctAnswerIndex: 1,
        explanation: 'Curly braces {} evaluate variables and JS code inline in JSX structures.'
      }
    ]
  },
  {
    id: 'react-components',
    chapterId: 'ch-react',
    slug: 'components',
    title: 'Functional Components',
    order: 3,
    description: 'Learn reusable components and nested layouts.',
    objectives: [
      'Create stateless and stateful functional components.',
      'Import, export, and nest sub-components.',
      'Separate visual components from layout wrappers.'
    ],
    theory: `Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.`,
    codeExample: `const Header = () => <header>Logo</header>;
const Layout = () => (
  <div>
    <Header />
    <main>Content</main>
  </div>
);`,
    practiceTask: 'Define a custom Footer component returning copyright text, and nest it inside the main App.',
    practiceInitialCode: `const App = () => {
  return (
    <div>
      <h1>My App</h1>
      {/* Nest Footer here */}
    </div>
  );
};`,
    practiceSolution: `const Footer = () => <footer>© 2026</footer>;
const App = () => {
  return (
    <div>
      <h1>My App</h1>
      <Footer />
    </div>
  );
};`,
    quizQuestions: [
      {
        id: 'q-react-3',
        question: 'Which of the following is true for React component names?',
        options: [
          'Must begin with lowercase letters',
          'Must begin with uppercase letters',
          'Must be wrapped in script blocks',
          'Must inherit class features'
        ],
        correctAnswerIndex: 1,
        explanation: 'React components must start with an uppercase letter to distinguish them from standard HTML tags.'
      }
    ]
  },
  {
    id: 'react-props',
    chapterId: 'ch-react',
    slug: 'props',
    title: 'Props',
    order: 4,
    description: 'Learn data propagation, attributes mapping, and children elements.',
    objectives: [
      'Pass properties from parents down to children.',
      'Destructure props in arguments.',
      'Render children elements using props.children.'
    ],
    theory: `Props (properties) are arguments passed into React components. Props are passed to components via HTML attributes. React props are read-only!`,
    codeExample: `const UserBadge = ({ name, role }) => (
  <div>{name} is an {role}</div>
);
const Main = () => <UserBadge name="Alice" role="Admin" />;`,
    practiceTask: 'Create a component named Welcome that accepts a user prop and displays "Welcome, [user]!".',
    practiceInitialCode: `// Write component here`,
    practiceSolution: `const Welcome = ({ user }) => <h1>Welcome, {user}!</h1>;`,
    quizQuestions: [
      {
        id: 'q-react-4',
        question: 'Can a child component directly modify its incoming props?',
        options: ['Yes', 'No', 'Only if props contain strings', 'Only in class components'],
        correctAnswerIndex: 1,
        explanation: 'Props are strictly read-only (immutable) parameters.'
      }
    ]
  },
  {
    id: 'react-usestate',
    chapterId: 'ch-react',
    slug: 'usestate',
    title: 'useState Hook',
    order: 5,
    description: 'Master functional state variables, hooks, array destructuring, and re-renders.',
    objectives: [
      'Declare local state variables inside components.',
      'Use state handlers to trigger layout updates.',
      'Ensure immutability when setting array/object state.'
    ],
    theory: `State refers to tracking local component parameters that trigger re-rendering when they change. 

The useState hook returns two items: the active state variable and the setter function.`,
    codeExample: `import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
};`,
    practiceTask: 'Add a button that sets the state to "React" when clicked.',
    practiceInitialCode: `const [text, setText] = useState("Hello");
return <button>Change</button>;`,
    practiceSolution: `const [text, setText] = useState("Hello");
return <button onClick={() => setText("React")}>Change</button>;`,
    quizQuestions: [
      {
        id: 'q-react-5',
        question: 'What is the return value of the useState hook?',
        options: [
          'An object containing state parameters',
          'An array containing the current state value and a setter function',
          'A boolean indicating rendering status',
          'A DOM node reference'
        ],
        correctAnswerIndex: 1,
        explanation: 'useState returns a tuple: [stateValue, setterFunction].'
      }
    ]
  },
  {
    id: 'react-useeffect',
    chapterId: 'ch-react',
    slug: 'useeffect',
    title: 'useEffect Hook',
    order: 6,
    description: 'Understand component lifecycle side-effects, dependency arrays, and resource cleanups.',
    objectives: [
      'Trigger side effects (fetching, listeners) inside useEffect.',
      'Configure empty vs populated dependency arrays.',
      'Implement clean-up return methods.'
    ],
    theory: `The useEffect Hook allows you to perform side effects in functional components. Side effects include data fetching, manual DOM updates, and timers.

The dependency array tells React when to trigger the effect:
- No array: Runs on every render.
- Empty array []: Runs once on mount.
- [dependencies]: Runs when any dependency changes.`,
    codeExample: `import React, { useEffect, useState } from 'react';

const UserLoader = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch('https://api.github.com/users/github')
      .then(res => res.json())
      .then(data => setUser(data));
  }, []); // Run once
  return <div>User: {user?.login}</div>;
};`,
    practiceTask: 'Write a useEffect block that logs "Mounted" only once when the component renders.',
    practiceInitialCode: `useEffect(() => {
  // Log here
});`,
    practiceSolution: `useEffect(() => {
  console.log("Mounted");
}, []);`,
    quizQuestions: [
      {
        id: 'q-react-6',
        question: 'When does a useEffect hook run if its dependency array is empty ([])?',
        options: [
          'On every single render',
          'Only once when the component mounts',
          'Only when props change',
          'Never'
        ],
        correctAnswerIndex: 1,
        explanation: 'An empty dependency array makes the effect trigger only once upon mount.'
      }
    ]
  },
  {
    id: 'react-context',
    chapterId: 'ch-react',
    slug: 'context-api',
    title: 'Context API',
    order: 7,
    description: 'Manage global application state and eliminate prop drilling.',
    objectives: [
      'Create state contexts using createContext.',
      'Inject properties using Context.Provider.',
      'Read context scopes using useContext.'
    ],
    theory: `React Context provides a way to pass data through the component tree without having to pass props down manually at every level (avoiding "prop drilling").`,
    codeExample: `import React, { createContext, useContext } from 'react';

const ThemeContext = createContext('light');

const ThemeBox = () => {
  const theme = useContext(ThemeContext);
  return <div className={theme}>Theme is {theme}</div>;
};`,
    practiceTask: 'Wrap the component tree with a ThemeContext Provider setting theme to "dark".',
    practiceInitialCode: `<ThemeContext.Provider>
  <ThemeBox />
</ThemeContext.Provider>`,
    practiceSolution: `<ThemeContext.Provider value="dark">
  <ThemeBox />
</ThemeContext.Provider>`,
    quizQuestions: [
      {
        id: 'q-react-7',
        question: 'What problem does the Context API primarily solve?',
        options: ['Browser storage access', 'Prop drilling across deep trees', 'CSS compilation speed', 'REST API integrations'],
        correctAnswerIndex: 1,
        explanation: 'Context API solves prop drilling by exposing states directly to consumers regardless of component nesting depth.'
      }
    ]
  },
  {
    id: 'react-custom',
    chapterId: 'ch-react',
    slug: 'custom-hooks',
    title: 'Custom Hooks',
    order: 8,
    description: 'Encapsulate and reuse common logic in standalone functions.',
    objectives: [
      'Extract duplicate component state logic.',
      'Write custom hooks prefixing hooks with use...',
      'Share functional logic across components.'
    ],
    theory: `Custom hooks allow you to extract component logic into reusable functions. Custom hooks are simple JS functions whose names start with "use" and call other hooks.`,
    codeExample: `import { useState, useEffect } from 'react';

const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return width;
};`,
    practiceTask: 'Create a custom hook named useToggle that tracks and toggles a boolean state value.',
    practiceInitialCode: `const useToggle = (initial = false) => {
  // Write hook
};`,
    practiceSolution: `const useToggle = (initial = false) => {
  const [state, setState] = useState(initial);
  const toggle = () => setState(prev => !prev);
  return [state, toggle];
};`,
    quizQuestions: [
      {
        id: 'q-react-8',
        question: 'What prefix must custom hooks use?',
        options: ['get', 'use', 'handle', 'fetch'],
        correctAnswerIndex: 1,
        explanation: 'Custom hooks must start with "use" to let React audit compliance with Hook rules.'
      }
    ]
  },

  // CHAPTER 6: API Integration
  {
    id: 'api-fetch',
    chapterId: 'ch-api',
    slug: 'fetch-api',
    title: 'Fetch API',
    order: 1,
    description: 'Learn native browser promise-based HTTP operations.',
    objectives: [
      'Call GET endpoints using fetch.',
      'Handle JSON response promises.',
      'Configure POST request headers.'
    ],
    theory: `The Fetch API provides a native interface for fetching resources asynchronously. It uses Promises.`,
    codeExample: `fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => console.log(data));`,
    practiceTask: 'Write a fetch call to GET data from "/api/users" and log the response.',
    practiceInitialCode: `fetch(// url here)`,
    practiceSolution: `fetch('/api/users')
  .then(res => res.json())
  .then(data => console.log(data));`,
    quizQuestions: [
      {
        id: 'q-api-1',
        question: 'What data structure does the fetch() function return?',
        options: ['JSON Object', 'Promise', 'XML Node', 'String Array'],
        correctAnswerIndex: 1,
        explanation: 'fetch() returns a Promise resolving to a Response object.'
      }
    ]
  },
  {
    id: 'api-axios',
    chapterId: 'ch-api',
    slug: 'axios',
    title: 'Axios Library',
    order: 2,
    description: 'Learn the features of the Axios library for API requests.',
    objectives: [
      'Explain benefits of Axios over native Fetch.',
      'Perform GET, POST, PUT, and DELETE operations.',
      'Configure request interceptors.'
    ],
    theory: `Axios is a popular, promise-based HTTP client. Unlike Fetch, it automatically parses JSON data, supports progress tracking, and enables custom request/response Interceptors.`,
    codeExample: `import axios from 'axios';

axios.get('/api/users')
  .then(response => console.log(response.data))
  .catch(err => console.error(err));`,
    practiceTask: 'Perform a POST request to "/api/users" sending { name: "Rishav" } using axios.',
    practiceInitialCode: `axios.post(// fill arguments)`,
    practiceSolution: `axios.post('/api/users', { name: "Rishav" })
  .then(res => console.log(res.data));`,
    quizQuestions: [
      {
        id: 'q-api-2',
        question: 'Does Axios parse JSON responses automatically?',
        options: ['Yes', 'No', 'Only for POST queries', 'Only when configured'],
        correctAnswerIndex: 0,
        explanation: 'Axios automatically transforms response payloads to JSON objects.'
      }
    ]
  },
  {
    id: 'api-crud',
    chapterId: 'ch-api',
    slug: 'crud-operations',
    title: 'CRUD Operations',
    order: 3,
    description: 'Understand the HTTP methods that map to Create, Read, Update, and Delete operations.',
    objectives: [
      'Map CRUD to POST, GET, PUT/PATCH, and DELETE.',
      'Implement form submissions to create database objects.',
      'Update UI items after DELETE operations.'
    ],
    theory: `CRUD operations are the core database interactions:
- Create: POST method
- Read: GET method
- Update: PUT/PATCH methods
- Delete: DELETE method`,
    codeExample: `// Delete item API call
const deleteUser = async (id) => {
  await axios.delete(\`/api/users/\${id}\`);
};`,
    practiceTask: 'Identify the HTTP method used to modify or replace an existing user profile.',
    practiceInitialCode: `const method = "// Method name";`,
    practiceSolution: `const method = "PUT";`,
    quizQuestions: [
      {
        id: 'q-api-3',
        question: 'Which HTTP method maps to the Update (CRUD) operation?',
        options: ['POST', 'GET', 'PUT or PATCH', 'DELETE'],
        correctAnswerIndex: 2,
        explanation: 'PUT (replacing) and PATCH (partial updates) represent the CRUD Update action.'
      }
    ]
  },
  {
    id: 'api-error',
    chapterId: 'ch-api',
    slug: 'error-handling',
    title: 'Error Handling',
    order: 4,
    description: 'Implement robust API try/catch blocks and visual loading indicators.',
    objectives: [
      'Prevent app crashes using try/catch blocks.',
      'Show error alerts to users based on HTTP status codes.',
      'Implement loading states during network latency.'
    ],
    theory: `Network requests can fail due to offline connections, bad payloads, or server errors. Always wrap async operations in try/catch blocks, and manage isError and isLoading states in component structures.`,
    codeExample: `const [loading, setLoading] = useState(false);
const loadData = async () => {
  try {
    setLoading(true);
    const res = await axios.get('/api');
  } catch (error) {
    alert(error.message);
  } finally {
    setLoading(false);
  }
};`,
    practiceTask: 'Write a try/catch wrapper around an API call to handle errors.',
    practiceInitialCode: `const run = async () => {
  const data = await axios.get('/api');
};`,
    practiceSolution: `const run = async () => {
  try {
    const data = await axios.get('/api');
  } catch (err) {
    console.error(err);
  }
};`,
    quizQuestions: [
      {
        id: 'q-api-4',
        question: 'What is the purpose of the finally block in try/catch handlers?',
        options: [
          'Triggers only on success',
          'Triggers only on errors',
          'Always runs regardless of success or failure outcomes',
          'Prevents compiler alerts'
        ],
        correctAnswerIndex: 2,
        explanation: 'finally is perfect for turning off loading states since it is guaranteed to execute at the end.'
      }
    ]
  },

  // CHAPTER 7: Node & Express
  {
    id: 'node-basics',
    chapterId: 'ch-node',
    slug: 'node-basics',
    title: 'Node Basics',
    order: 1,
    description: 'Learn about Node.js runtime, modules, NPM, and events.',
    objectives: [
      'Understand Node.js architecture.',
      'Use CommonJS (require) module imports.',
      'Manage packages using package.json and npm.'
    ],
    theory: `Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside a web browser, on the server.`,
    codeExample: `const fs = require('fs');
fs.writeFileSync('test.txt', 'Hello Server');`,
    practiceTask: 'Import the fs module using Node CommonJS require format.',
    practiceInitialCode: `// Import fs here`,
    practiceSolution: `const fs = require('fs');`,
    quizQuestions: [
      {
        id: 'q-node-1',
        question: 'What engine does Node.js use to execute JavaScript?',
        options: ['SpiderMonkey', 'V8', 'Chakra', 'Gecko'],
        correctAnswerIndex: 1,
        explanation: 'Node.js is powered by Google Chrome\'s V8 high-performance JavaScript engine.'
      }
    ]
  },
  {
    id: 'node-express',
    chapterId: 'ch-node',
    slug: 'express-setup',
    title: 'Express Setup',
    order: 2,
    description: 'Learn how to create a basic web server using Express.js.',
    objectives: [
      'Initialize Express applications.',
      'Listen on server ports.',
      'Serve static text paths.'
    ],
    theory: `Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.`,
    codeExample: `const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('API Online'));
app.listen(5000, () => console.log('Server running'));`,
    practiceTask: 'Create an Express app instance and define a port variable.',
    practiceInitialCode: `const express = require('express');
// Instantiate app`,
    practiceSolution: `const express = require('express');
const app = express();
const PORT = 5000;`,
    quizQuestions: [
      {
        id: 'q-node-2',
        question: 'Which Express method configures server listening ports?',
        options: ['listen()', 'start()', 'run()', 'serve()'],
        correctAnswerIndex: 0,
        explanation: 'app.listen() boots the server and listens for incoming HTTP requests on a port.'
      }
    ]
  },
  {
    id: 'node-middleware',
    chapterId: 'ch-node',
    slug: 'middleware',
    title: 'Middleware',
    order: 3,
    description: 'Understand the request-response cycle and Express middleware functions.',
    objectives: [
      'Explain the purpose of middleware.',
      'Use standard middleware like express.json().',
      'Write custom error-handling middleware.'
    ],
    theory: `Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle.`,
    codeExample: `app.use(express.json()); // Parses JSON bodies

// Custom logger middleware
app.use((req, res, next) => {
  console.log(\`\${req.method} \${req.url}\`);
  next();
});`,
    practiceTask: 'Write a basic custom logging middleware that calls next().',
    practiceInitialCode: `app.use((req, res, next) => {
  // Log message here
});`,
    practiceSolution: `app.use((req, res, next) => {
  console.log("Logged");
  next();
});`,
    quizQuestions: [
      {
        id: 'q-node-3',
        question: 'What function parameter must be executed inside middleware to continue request handling?',
        options: ['res.send()', 'next()', 'return()', 'req.stop()'],
        correctAnswerIndex: 1,
        explanation: 'next() passes control to the next middleware function in the stack.'
      }
    ]
  },
  {
    id: 'node-routing',
    chapterId: 'ch-node',
    slug: 'routing',
    title: 'Routing',
    order: 4,
    description: 'Define express routes, handle path variables, and structure controllers.',
    objectives: [
      'Define GET, POST, PUT, DELETE routes.',
      'Read path parameters using req.params.',
      'Read query variables using req.query.'
    ],
    theory: `Routing refers to determining how an application responds to a client request to a particular endpoint (such as /users).`,
    codeExample: `app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  res.json({ id: userId });
});`,
    practiceTask: 'Define a route to catch POST requests on the "/api/posts" path.',
    practiceInitialCode: `app.post(// define route)`,
    practiceSolution: `app.post('/api/posts', (req, res) => {
  res.send("Post Created");
});`,
    quizQuestions: [
      {
        id: 'q-node-4',
        question: 'How do you read parameters from dynamic path tokens like "/users/:id"?',
        options: ['req.body', 'req.query', 'req.params', 'req.headers'],
        correctAnswerIndex: 2,
        explanation: 'Dynamic path variables are mapped to the req.params object.'
      }
    ]
  },
  {
    id: 'node-apis',
    chapterId: 'ch-node',
    slug: 'rest-apis',
    title: 'REST APIs',
    order: 5,
    description: 'Build robust REST APIs returning structured JSON payloads.',
    objectives: [
      'Follow REST API design conventions.',
      'Return HTTP status codes (200, 201, 400, 404, 500).',
      'Format unified JSON api responses.'
    ],
    theory: `REST APIs leverage HTTP requests to GET, PUT, POST, and DELETE data. They use standard status codes to indicate request outcomes (e.g. 200 OK, 201 Created, 404 Not Found, 500 Server Error).`,
    codeExample: `app.post('/api/items', (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({ error: 'Name is required' });
  }
  res.status(201).json({ id: 1, name: req.body.name });
});`,
    practiceTask: 'Return a 404 status code with a JSON error payload if a requested user is missing.',
    practiceInitialCode: `app.get('/user', (req, res) => {
  // Return 404 error here
});`,
    practiceSolution: `app.get('/user', (req, res) => {
  res.status(404).json({ error: "User not found" });
});`,
    quizQuestions: [
      {
        id: 'q-node-5',
        question: 'Which status code indicates that a record has been successfully created?',
        options: ['200', '201', '400', '500'],
        correctAnswerIndex: 1,
        explanation: '201 represents "Created", the standard code for successful POST actions.'
      }
    ]
  },

  // CHAPTER 8: MongoDB & Mongoose
  {
    id: 'mongo-basics',
    chapterId: 'ch-mongodb',
    slug: 'mongodb-basics',
    title: 'MongoDB Basics',
    order: 1,
    description: 'Learn about NoSQL document databases, collections, and cluster configurations.',
    objectives: [
      'Contrast SQL vs NoSQL document storage models.',
      'Understand MongoDB structures (BSON documents).',
      'Set up local servers and remote clusters (MongoDB Atlas).'
    ],
    theory: `MongoDB is a document database designed for ease of development and scaling. It stores data as BSON (Binary JSON) documents grouped into Collections (instead of Tables).`,
    codeExample: `// Sample document structure
{
  "_id": "603f90b9b32c6b3cfc000001",
  "username": "rishav",
  "email": "rishav@example.com"
}`,
    practiceTask: 'Name the basic storage unit of data in MongoDB.',
    practiceInitialCode: `const dataUnit = "// Enter term";`,
    practiceSolution: `const dataUnit = "Document";`,
    quizQuestions: [
      {
        id: 'q-mongo-1',
        question: 'How is data organized inside MongoDB?',
        options: [
          'In rows and tables',
          'In key-value documents and collections',
          'In graph columns',
          'In text CSV files'
        ],
        correctAnswerIndex: 1,
        explanation: 'MongoDB groups NoSQL JSON-like documents into collections.'
      }
    ]
  },
  {
    id: 'mongo-collections',
    chapterId: 'ch-mongodb',
    slug: 'collections',
    title: 'Collections',
    order: 2,
    description: 'Understand indexes, queries, and document collections.',
    objectives: [
      'Query collections in MongoDB.',
      'Implement indexing to speed up searches.',
      'Check collections layouts.'
    ],
    theory: `Collections are equivalent to tables in relational databases. They contain documents. Collections do not enforce a strict schema, meaning documents inside can have different formats.`,
    codeExample: `// Fetch documents in Mongo shell
db.users.find({ role: 'student' });`,
    practiceTask: 'Identify the command used to query all items in the database.',
    practiceInitialCode: `const cmd = "// Write command";`,
    practiceSolution: `const cmd = "db.collection.find()";`,
    quizQuestions: [
      {
        id: 'q-mongo-2',
        question: 'What SQL equivalent matches a MongoDB Collection?',
        options: ['Row', 'Table', 'Database', 'Column'],
        correctAnswerIndex: 1,
        explanation: 'A Collection is the equivalent of a Table in SQL databases.'
      }
    ]
  },
  {
    id: 'mongo-schemas',
    chapterId: 'ch-mongodb',
    slug: 'schemas',
    title: 'Schemas',
    order: 3,
    description: 'Learn how to model data structure boundaries in Mongoose.',
    objectives: [
      'Connect Express apps to MongoDB using Mongoose.',
      'Define data model boundaries.',
      'Add validations and custom types.'
    ],
    theory: `Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages data relationships and provides schema validation out of the box.`,
    codeExample: `const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, min: 18 }
});`,
    practiceTask: 'Complete the schema to require an email string field.',
    practiceInitialCode: `const userSchema = new mongoose.Schema({
  // Add email property here
});`,
    practiceSolution: `const userSchema = new mongoose.Schema({
  email: { type: String, required: true }
});`,
    quizQuestions: [
      {
        id: 'q-mongo-3',
        question: 'What is Mongoose in the context of a MERN application?',
        options: [
          'A routing middleware',
          'An Object Data Modeling (ODM) library for MongoDB',
          'A package manager',
          'A react hook'
        ],
        correctAnswerIndex: 1,
        explanation: 'Mongoose is an ODM that provides schema validations for MongoDB models.'
      }
    ]
  },
  {
    id: 'mongo-models',
    chapterId: 'ch-mongodb',
    slug: 'models',
    title: 'Models',
    order: 4,
    description: 'Instantiate and register query interfaces using Mongoose models.',
    objectives: [
      'Compile Mongoose schemas into database models.',
      'Expose query methods like find and findById.',
      'Implement indexing configurations.'
    ],
    theory: `Models are compiled from Schema definitions. An instance of a model is called a document. Models are responsible for creating and reading documents from the underlying MongoDB database.`,
    codeExample: `const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({ name: String });
const User = mongoose.model('User', UserSchema);

module.exports = User;`,
    practiceTask: 'Export a Mongoose model named Book using the bookSchema.',
    practiceInitialCode: `const Book = mongoose.model('Book', bookSchema);
// Export here`,
    practiceSolution: `const Book = mongoose.model('Book', bookSchema);
module.exports = Book;`,
    quizQuestions: [
      {
        id: 'q-mongo-4',
        question: 'Which method compiles a Mongoose Schema into a queryable Model?',
        options: ['mongoose.compile()', 'mongoose.model()', 'mongoose.schema()', 'mongoose.create()'],
        correctAnswerIndex: 1,
        explanation: 'mongoose.model(modelName, schema) creates the data query model wrapper.'
      }
    ]
  },
  {
    id: 'mongo-crud',
    chapterId: 'ch-mongodb',
    slug: 'crud-operations',
    title: 'CRUD Operations in Mongoose',
    order: 5,
    description: 'Use model methods to perform queries, inserts, updates, and deletes.',
    objectives: [
      'Insert documents using save() and create().',
      'Query using find(), findOne(), and findById().',
      'Update using findByIdAndUpdate() and delete using findByIdAndDelete().'
    ],
    theory: `Mongoose models provide robust CRUD functions:
- Create: const user = new User({ name: 'Alice' }); await user.save();
- Read: const users = await User.find({ age: { $gt: 18 } });
- Update: await User.findByIdAndUpdate(id, { name: 'Bob' });
- Delete: await User.findByIdAndDelete(id);`,
    codeExample: `// Query then update database document
const updateUser = async (id, payload) => {
  return await User.findByIdAndUpdate(id, payload, { new: true });
};`,
    practiceTask: 'Write a line to delete a document using findByIdAndDelete.',
    practiceInitialCode: `const deleteUser = async (id) => {
  // Delete here
};`,
    practiceSolution: `const deleteUser = async (id) => {
  await User.findByIdAndDelete(id);
};`,
    quizQuestions: [
      {
        id: 'q-mongo-5',
        question: 'Which option returns the updated document instead of the old one in findByIdAndUpdate?',
        options: ['{ update: true }', '{ new: true }', '{ upsert: true }', '{ fetch: true }'],
        correctAnswerIndex: 1,
        explanation: '{ new: true } instructs Mongoose to return the modified document.'
      }
    ]
  },

  // CHAPTER 9: Final MERN Project
  {
    id: 'final-planning',
    chapterId: 'ch-final',
    slug: 'project-planning',
    title: 'Project Planning',
    order: 1,
    description: 'Design requirements, schema models, and interface routing maps.',
    objectives: [
      'Create entity relationship diagrams.',
      'Define API endpoints.',
      'Configure task milestones.'
    ],
    theory: `Planning is key. Map your database schema models, define endpoints, specify user roles, and outline UI routing flows before writing code.`,
    codeExample: `// Task Manager Endpoints Map:
// POST   /api/auth/register
// POST   /api/auth/login
// GET    /api/tasks
// POST   /api/tasks`,
    practiceTask: 'List the typical first phase of building MERN applications.',
    practiceInitialCode: `const phase1 = "// Phase here";`,
    practiceSolution: `const phase1 = "Planning & Schema Design";`,
    quizQuestions: [
      {
        id: 'q-final-1',
        question: 'Why is schema design done first in full-stack projects?',
        options: [
          'It compiles the CSS variables',
          'It establishes the data structures and relationships for backend and frontend data integration',
          'It is required by Vite',
          'It runs the mock server'
        ],
        correctAnswerIndex: 1,
        explanation: 'Establishing the schema models avoids breaking data mismatches during API integration.'
      }
    ]
  },
  {
    id: 'final-backend',
    chapterId: 'ch-final',
    slug: 'backend-development',
    title: 'Backend Development',
    order: 2,
    description: 'Implement Express servers, database schemas, and secure authentication controllers.',
    objectives: [
      'Implement Express routers.',
      'Secure passwords using bcrypt hashing.',
      'Expose sign-in sessions using JWT tokens.'
    ],
    theory: `Set up your server and database connection, define models, secure passwords, configure JSON Web Token (JWT) sessions, and structure routers to expose secure paths.`,
    codeExample: `// Generate JWT login payload token
const jwt = require('jsonwebtoken');
const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });`,
    practiceTask: 'Name the standard library used to encrypt user passwords.',
    practiceInitialCode: `const cryptoLib = "// Write library";`,
    practiceSolution: `const cryptoLib = "bcrypt";`,
    quizQuestions: [
      {
        id: 'q-final-2',
        question: 'Which method signs JWT tokens to verify sessions?',
        options: ['jwt.sign()', 'jwt.verify()', 'jwt.create()', 'jwt.token()'],
        correctAnswerIndex: 0,
        explanation: 'jwt.sign() encodes payloads with a private signature to generate authorization tokens.'
      }
    ]
  },
  {
    id: 'final-frontend',
    chapterId: 'ch-final',
    slug: 'frontend-development',
    title: 'Frontend Development',
    order: 3,
    description: 'Build React components, context providers, and consume APIs.',
    objectives: [
      'Consume Express endpoints using Axios.',
      'Configure JWT interceptor token authentication.',
      'Design modern dashboards using Tailwind.'
    ],
    theory: `Install the React framework, establish router pages, connect Axios routes, append credentials in headers, and configure dashboards using Tailwind utility structures.`,
    codeExample: `// Interceptor appending headers
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = \`Bearer \${token}\`;
  }
  return config;
});`,
    practiceTask: 'Identify the header field used to carry authorization tokens.',
    practiceInitialCode: `const authHeader = "// Header name";`,
    practiceSolution: `const authHeader = "Authorization";`,
    quizQuestions: [
      {
        id: 'q-final-3',
        question: 'How does the client authenticate subsequent API requests after logging in?',
        options: [
          'By resending usernames',
          'By attaching the JWT token inside the Authorization header',
          'By query strings',
          'By raw passwords'
        ],
        correctAnswerIndex: 1,
        explanation: 'The client provides its token inside the Authorization bearer header to identify requests.'
      }
    ]
  },
  {
    id: 'final-deploy',
    chapterId: 'ch-final',
    slug: 'deployment',
    title: 'Deployment',
    order: 4,
    description: 'Learn production build bundling, environment configs, and host deployment.',
    objectives: [
      'Build production static bundles using npm run build.',
      'Configure environment variables (.env) on servers.',
      'Deploy applications to hosts (Render, Vercel, Netlify).'
    ],
    theory: `Compile the client using npm run build, serve static client folders from the backend Express server, set up environment secrets (database URLs, JWT keys), and deploy to cloud platforms (such as Render or Heroku).`,
    codeExample: `$ npm run build
# Serve static files in Express
app.use(express.static(path.join(__dirname, 'dist')));`,
    practiceTask: 'Enter the command used to compile Vite React projects for deployment.',
    practiceInitialCode: `# Write command`,
    practiceSolution: `npm run build`,
    quizQuestions: [
      {
        id: 'q-final-4',
        question: 'Which server environment variable should never be committed to public GitHub files?',
        options: ['PORT', 'NODE_ENV', 'GEMINI_API_KEY or DATABASE_URL', 'All of the above'],
        correctAnswerIndex: 3,
        explanation: 'Secrets, keys, and credentials must remain restricted in local environment files (.env).'
      }
    ]
  }
];
