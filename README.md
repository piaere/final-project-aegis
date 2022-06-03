#aegis
Concordia U full-stack web dev bootcamp - final project : aegis

aegis is a non-custodial open plateforme for independent journalists, writers and readers to interact directly. Users can support their favourite creators with a p2p tipping function. Log in and paiements are done using MetaMask. 
Think Medium or Substack with web3 functionnalities, similar to [mirror.xyz](http://mirror.xyz) but simpler.

*Important note : no need for any real crypto monies nor to access any public blockchain, it will all be done via localhost and dummy wallets using* [Ganache](https://trufflesuite.com/docs/ganache/).

Features: 

- Log in and Sign up via the [MetaMask wallet API](https://docs.metamask.io/guide/ethereum-provider.html#table-of-contents) (no email or any personal infos required).
- User can publish articles containing text and images.
- Users can customize their profile with avatars, pseudonym and bio on their profile page.
- User can follow each other and see posts preview in their own feed or the creator’s feed.
- If user clicks on a preview User can read full article in dedicated page.
- User can Tip a creator if he enjoys the content. (using fake money).

4 distinct sections :

1. Home - landing pages describing the plateform, users will log in from there
2. Feed - where you see the recent posts from the accounts you follow.
3. Profile - User personal pages with their info recent writings and tipping functionality
4. Article - Where articles are fully displayed, with a tipping functionality
