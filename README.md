# aegis
Concordia U full-stack web developer bootcamp - final project : aegis

aegis is a non-custodial open plateform for  writers and readers to interact directly. Users can support their favourite creators with a p2p tipping function. Log in and paiements are done using MetaMask and the Ethereum blockchain. 

Watch demo here : https://youtu.be/twCqmOA_QwQ

<img width="1296" alt="Screen Shot 2022-06-23 at 06 41 21" src="https://user-images.githubusercontent.com/98769814/175210770-7ae93bf1-051f-4f22-bc32-ab7007ce3ae0.png">

The front-end has been built using React, the backend with Node.js and I’m using Mongodb for the database.

Thanks to the characteristics of blockchain technology, high security is maintain for authentification and paiements thruout the website. No sensitive personal data, email, password needs to be stored, to the exception of the articles themselves, the users public addresses as well as public informations provided by the Ethereum Name Service API if the user has its account registered.

The publication section is using a block-styled editor, Editor.js : https://editorjs.io/

4 distinct sections :

1. Home - Landing pages describing the plateform, users connect their wallet and log in from there
2. Journal - Where you can scroll thru the feed and see of all articles thumbnails
3. Publish - Where the user can write, save, edit and publish their article
4. Article - Where an article is fully displayed, with a tipping functionality

Update : Journal now has a search bar!
