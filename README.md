# Ar-KYC

# Index

- [Ar-KYC](#ar-kyc)
- [Index](#index)
- [About](#about)
  - [Techstack](#techstack)
- [How to setup](#how-to-setup)
  - [Clone the repo](#clone-the-repo)
  - [Install dependencies](#install-dependencies)
- [Finally run the webapp](#finally-run-the-webapp)
- [License](#license)

# About

Ar-KYC is an KYC (Know your customer) platform on the Arweave Blokchain for easy and faster evaluate individual identity

## Techstack

    - ReactJS
    - Javascript

# How to setup

## Clone the repo

Fork and clone the repo

```bash
git clone git:github@<YOUR_USERNAME>/Arweave.git
cd Arweave
```

## Install dependencies

```bash
npm install 
```

```bash
npm install arweave-wallet-connector
```

Arlocal is a tool for quickly setting up and running a local Arweave testing environment.
```bash
npm install arlocal --save-dev
```

Arweave Kit combines tools and resources into one easy to use library, to get started building with Arweave.
```bash
npm install arweavekit
```

# Finally run the webapp

```bash
npm start
```

The webapp will be running on `localhost:3000`

To open the same application of another device for testing purposes, make sure that the device is connected to the same network as the device on which the webapp is running. Then visit `http://<IP_ADDRESS_OF_THE_DEVICE_RUNNING_THE_WEBAPP>:3000`

# License

The projects is licensed under [MIT](https://choosealicense.com/licenses/mit/)


