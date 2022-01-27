Если вы смотрите эти курсы в 2022, то, скорее всего, у вас может не работать npm start в файле Димы.
Как я понял, это происходит из-за того, что его версия npm старее нынешних, и его проект подточен под старую версию.
Именно поэтому, чтобы вы, как я, не сидели у компа чуть ли не день, чтобы выяснить в чем проблема, предлагаю решение):
1) Проверяете версию при помощи "npm -v";
2) В случае если версия не 6, устанавливаете ту самую версию при помощи "npm install -g npm@6.14.10";
3) Снова проверяете версию при помощи "npm -v";
4) Если показывает 6.14.10, то удаляете имеющуюся папку node_modules;
5) Переустанавливаете node_modules под 6 версию при помощи "npm install";
6) После установки вводете "npm fix audit";
7) Запускаете npm "npm start".

Удачи) Готово).


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
