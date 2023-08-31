# Node Template

By: Stella Marie

Template repo for Node.js project with Webpack, ESLint, Babel, and Jest.

View on [Github Pages](https://smkou.github.io/power-planter/)

## **Technologies Used**

- HTML5
- CSS3
- Skeleton 2.0.4 by Dave Gamache
- Node.js
  - Webpack
  - ESLint
  - Jest, Jest-Each
  - Babel

## **Description**

Power Planter is a numbers game, where a player cares for three plants, feeding, hydrating and giving them light. Every plant has a name, type, color(s) and health and each type of plant has a different reaction to food, water and light, as well as needs for food, water and light, and rate of growth. Plants will wilt over time unless cared for and if their health reaches zero, they will die. If a player cares for a plant long enough successfully, the type will be revealed in their color(s).

### Details

Plant
- name
- type
- color
- health

Types:
- Color: red, yellow, blue
- Pattern: plain, spotted, striped

Metrics:
- food, water, and light
- growth (how many turns before )

Player has three randomly generated plants. They can see plant stats for colors and patterns. Their plants will be of tertiary colors and will transition over time as they are cared for to reveal patterns and their primary colors.

## **Complete Setup**

- Navigate to your new repo
- Clone it

```bash
git clone .../.git
git pull origin main
```

The git pull command is only if necessary, such as choosing to add a README or LICENSE file when filling out the create repo form. You may encounter conflicts, since this template already comes with a README and LICENSE.

Optionally, you can remove .DS_Store from .gitignore, if you are not using a Mac.

**Do not forget:**

- Remove unwanted fonts from assets/fonts
- Remove sample img from assets/img

### **Change project references**

package.json
- Line 2 project name

webpack.config.js
- Line 23 title in HtmlWebpackPlugin

README.md
- Line 1 title of project
- Line 3 developer(s) of project
- Line 7 username and repo name in link

index.html
- Line 6 title in head

Change this readme to reflect your project's purpose and setup. Also, do not forget to change the copyright. It's best to produce a license when creating the repo, hence the initial pull.

### **Change imports, exports and component files and tests**

Component.js is just a sample. Rename it and use it to contain just the logic of a single component. Components can be seen as handlers of an object, feature, or state.

Component.test.js is just a sample with a single test and describe. Each component should have a corresponding test file with the same name, but with an extension of .test.js, and the test file should only test the functionality of its corresponding component. Make sure you're importing what is needed for it to run.

## **Features**

To run the test suite, use the command ```npm run test``` in the terminal. You can also use ```npx jest```.

To create the production ready code for your project, use the command ```npm run build``` in the terminal.

To build and preview your project, use either ```npm run start``` or ```npm start``` in the terminal.

## **Rendering**

Before publishing your website, app, or api, delete the rules in .eslintrc, "no-console": "off" and "no-unused-vars": "off", then run ```npm run lint```

**Github Pages**

```bash
git add .
git commit -m "Save final changes"
git push origin main
git checkout -b gh-pages
git push origin gh-pages
```

**To update Github Pages**

```bash
git add .
git commit -m "Save changes in main"
git push origin main
git checkout gh-pages
git merge main
git push origin gh-pages
```

### **How to render from dist/**

1. Remove dist/ from .gitignore

2.  
```bash
git add dist
git commit -m "Initial dist subtree commit"
```

3.  
```bash
git subtree push --prefix dist origin gh-pages
```

## **Known Bugs**

Please report any issues in using this template.

## **License**

[MIT](https://choosealicense.com/licenses/mit/)

Copyright (c) 2023 Sm Kou
