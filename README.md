# Todo List Web3 App

## Introduction

This is a simple Todo List app that allows you to manage your todos. You can add, edit, and delete todos with a title, description, and date. Additionally, the app includes Web3 features that allow you to connect your MetaMask wallet, view your BNB balance, and check the current epoch from a Pancake Prediction smart contract.

## Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/download/) (version 14 or higher)
- [npm](https://www.npmjs.com/get-npm) (version 6 or higher)
- [MetaMask](https://metamask.io/) browser extension

## Cloning the Repository

To clone the repository, run the following command in your terminal:

```bash
git clone https://github.com/mezger75/todo-list-web3.git
```

Installing Dependencies
Navigate to the project directory and install the required dependencies:

```bash
npm install
```

Starting the Project Locally
First, start the json-server to serve the local database:

```bash
json-server --watch db.json --port 3000
```

In a new terminal, start the dev server:

```bash
npm run dev
```

Your application should now be running on http://localhost:5173

### Web3 Features

- **Connect MetaMask Wallet**: Click the "Connect Wallet" button to connect your MetaMask wallet to the app.
- **View Wallet Balance**: Once connected, your BNB balance will be displayed. If you are not on the BNB mainnet, you will be prompted to change the network.
- **Show Current Epoch**: Click the "Show Current Epoch" button to read the current epoch of Pancake Prediction from the smart contract (0x18B2A687610328590Bc8F2e5fEdDe3b582A49cdA).

## Technologies Used

- **Vite**: Fast development build tool.
- **TypeScript**: Typed superset of JavaScript.
- **React**: Library for building user interfaces.
- **Web3**: Library for interacting with the Ethereum blockchain.
- **Tailwind CSS**: Utility-first CSS framework.
- **json-server**: Fake REST API for testing.
- **Axios**: Promise-based HTTP client.
- **React Hot Toast**: Notifications for React applications.
