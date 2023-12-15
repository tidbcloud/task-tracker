![Task Tracker Application](./banner.png)

# TiDB Cloud Data Service - Task Tracker Application.

Task Tracker is an efficient and user-friendly application designed to manage your daily tasks with ease.

**live demo: [https://task-tracker-two-ashen.vercel.app/](https://task-tracker-two-ashen.vercel.app/)**

**Watch On Youtube: [](?)**

---

## Project Description

The Task Tracker Application will feature functionality for adding, deleting, editing, and querying tasks. Additionally, it will boast a simple and user-friendly interface.
For the backend, there is no need to write program code; instead, you can utilize the powerful interface capabilities of TCDS to accomplish the implementation of backend CRUD (Create, Read, Update, Delete) api. As for the frontend, it will be developed using React.js technology. Ultimately, the application will be deployed on the Vercel platform.
Hope you enjoy it.

## Getting Started

The recommended way to get started with the project is to follow the [ blog ](?) or the [vlog tutorial](?). You will find all the step-by-step guides.

First, deploy the necessary endpoints using TCDS for the backend development. Next, utilize the frontend code available in this repository for the frontend development. Lastly, proceed to deploy the frontend through the Vercel platform.

If you have deployed endpoints from TCDS and you want deploy it locally, you need to replace some variables and run

Find the variables in ./frontend/src/slices/todoSlice.js
```shell
const apiUrl = process.env.REACT_APP_APIURL;
const publicKey = process.env.REACT_APP_PUBLICKEY;
const privateKey = process.env.REACT_APP_PRIVATEKEY;
```

Replace real value to the variables
``` shell
const apiUrl = <Open the endpoint page, then copy the Endpoint URL from the properties>;
const publicKey = <The public key is generated when creating the API key>;
const privateKey = <The private key is generated when creating the API key.>;
```

Go to directory ./frontend
```shell
cd frontend
```

Install packages.
```shell
npm install
```

and after that start the local server.

```shell
npm start
```

---

## Feedback

If you have any feedback, please reach out to us at [Support](https://tidbcloud.com/console/support)

## Citation

This project is based on the original work by Shaif Arfan available at [react-todo-app](https://github.com/ShaifArfan/react-todo-app).
Modifications were made to The modifications include replacing the original frontend storage for the to-dos with backend API calls to a TCDS. Additionally, some adjustments have been made to the UI to accommodate our existing data set.

Happy Coding! 🚀
