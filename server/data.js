const users = {
  "0x20ce772c4ef862fF022E9dd0931b0c331e29715e": {
    displayName: "Bitalik's Newsletter",
    avatarSrc: "/assets/bitalik-avatar.jpg",
    publicKey: "0x20ce772c4ef862fF022E9dd0931b0c331e29715e",
    joined: "2022-02-02T12:00",
    bio: "Newsletter by me bitalik.eth. Public goods and eternal life",
    followingKeys: [
      "0xeF231E7c58d2aF23b380884840614411B2eD4FD2",
      "0xF9614b726727087C56c9045Fc0613c498e5B7f64",
      "0x5Ae488390a369ad446d4eff61103e0fbDbABdE01",
    ],
    followerKeys: [
      "0xeF231E7c58d2aF23b380884840614411B2eD4FD2",
      "0xF9614b726727087C56c9045Fc0613c498e5B7f64",
    ],
  },

  "0xF9614b726727087C56c9045Fc0613c498e5B7f64": {
    displayName: "The Chris Edgy Report",
    avatarSrc: "/assets/chrisedgy-avatar.jpg",
    bannerSrc: "/assets/chrisedgy-banner.jpeg",
    publicKey: "0xF9614b726727087C56c9045Fc0613c498e5B7f64",
    joined: "2021-10-12T12:00",
    bio: "Independent journalist. Opinions my own",
    followingIds: [
      "0xeF231E7c58d2aF23b380884840614411B2eD4FD2",
      "0x5Ae488390a369ad446d4eff61103e0fbDbABdE01",
    ],
    followerIds: [
      "0xeF231E7c58d2aF23b380884840614411B2eD4FD2",
      "0x5Ae488390a369ad446d4eff61103e0fbDbABdE01",
    ],
  },
  "0x5Ae488390a369ad446d4eff61103e0fbDbABdE01": {
    displayName: "Edward Snodamn",
    avatarSrc: "/assets/edwardsnodamn-avatar.jpg",
    bannerSrc: "/assets/edwardsnodamn-banner.jpg",
    publicKey: "0x5Ae488390a369ad446d4eff61103e0fbDbABdE01",
    joined: "2021-09-01T18:00",
    bio: "I research, write and blow the whistle",
    followingIds: ["0x20ce772c4ef862fF022E9dd0931b0c331e29715e"],
    followerIds: ["0x20ce772c4ef862fF022E9dd0931b0c331e29715e"],
  },
  "0x16496589b001541701B6806a8870C4d9d7F459EF": {
    displayName: "Astral Codex Eleven",
    avatarSrc: "/assets/astralcodex11-avatar.jpg",
    bannerSrc: "/assets/astralcodex11-banner.jpg",
    publicKey: "0x16496589b001541701B6806a8870C4d9d7F459EF",
    joined: "2022-03-01T18:00",
    bio: "What is Astral Codex Eleven? \nI'm happy to finally have a clear answer to this question: Astral Codex Ten is a blog about ṛta",
    followingIds: ["0x5Ae488390a369ad446d4eff61103e0fbDbABdE01"],
    followerIds: ["0x56611e15b75aBE1818827747F933Bc132f3C54c3"],
  },
  "0x56611e15b75aBE1818827747F933Bc132f3C54c3": {
    displayName: "Holy Horndon",
    avatarSrc: "/assets/holyhordon-avatar.jpg",
    bannerSrc: "/assets/holyhordon-banner.jpg",
    publicKey: "0x56611e15b75aBE1818827747F933Bc132f3C54c3",
    joined: "2022-05-01T18:00",
    bio: "music, art, technology",
    followingIds: [
      "0x16496589b001541701B6806a8870C4d9d7F459EF",
      "0xF9614b726727087C56c9045Fc0613c498e5B7f64",
    ],
    followerIds: ["0x5Ae488390a369ad446d4eff61103e0fbDbABdE01"],
  },
};

const previews = {
  // Bitalik
  "05c05f6e-dde3-4fd4-af82-7ef85d935062": {
    id: "05c05f6e-dde3-4fd4-af82-7ef85d935062",
    author: "0x20ce772c4ef862fF022E9dd0931b0c331e29715e",
    timestamp: "2020-01-19T09:14:00+00:00",
    sortedTimestamp: "2020-01-19T09:14:00+00:00",
    echoOf: "1209791721099411456",
    echoBy: [],
  },
  "f7834ae4-2799-448e-bd3f-97f768ea2a68": {
    id: "f7834ae4-2799-448e-bd3f-97f768ea2a68",
    author: "0x20ce772c4ef862fF022E9dd0931b0c331e29715e",
    timestamp: "2020-01-12T09:14:00+00:00",
    sortedTimestamp: "2020-01-12T09:14:00+00:00",
    echoBy: [],
    title:
      "The roads not taken",
    summary:
      "Ok people #backtowork you go. Cats...just carry on lounging around as usual.",
    media: [
      {
        type: "img",
        url: "/assets/ENRXDPKWwAEJqFu.jpeg",
      },
    ],
  },

  // chrisedgy
  "1209791721099411456": {
    id: "1209791721099411456",
    author: "diplomog",
    timestamp: "2019-12-26T14:38:00+00:00",
    sortedTimestamp: "2019-12-26T14:38:00+00:00",
    likedBy: [],
    echoBy: ["treasurymog"],
    status:
      "If you're a 🇬🇧 diplomat abroad today, let me know where you are and what you're up to!",
    media: [],
  },

  "1215324598067245056r2": {
    id: "1215324598067245056r2",
    author: "diplomog",
    timestamp: "2020-01-19T09:14:00+00:00",
    sortedTimestamp: "2020-01-19T09:14:00+00:00",
    echoOf: "1215324598067245056",
    likedBy: [],
    echoBy: [],
  },

  "1214624813723136002": {
    id: "1214624813723136002",
    author: "diplomog",
    timestamp: "2020-01-12T04:31:00+00:00",
    sortedTimestamp: "2020-01-12T04:31:00+00:00",
    likedBy: [],
    echoBy: [],
    status: `Sometimes I wonder... am I playing with the ribbon or is the ribbon playing with me?

Maybe a more diplomatic approach will work 🤔`,
    media: [
      {
        type: "img",
        url: "/assets/diplomog-yarn.png",
      },
    ],
  },
  "1209788222324256768": {
    id: "1209788222324256768",
    author: "diplomog",
    timestamp: "2019-12-25T21:53:00+00:00",
    sortedTimestamp: "2019-12-25T21:53:00+00:00",
    likedBy: [],
    echoBy: [],
    status: `Moggy Christmas to all!

Special wishes to all my diplomats, far from home at this time of year, serving 🇬🇧 all over the 🌍.`,
    media: [
      {
        type: "img",
        url: "/assets/EMoH94cXYAAM5Jj.jpeg",
      },
    ],
  },
  "1212021009320161280": {
    id: "1212021009320161280",
    author: "diplomog",
    timestamp: "2019-12-30T19:23:00+00:00",
    sortedTimestamp: "2019-12-30T19:23:00+00:00",
    likedBy: [],
    echoBy: [],
    status: `2019 has a been a wonderful year, but I definitely deserve some rest!

I would love to know what my 🇬🇧diplomats have been getting up to! What’s been your highlight or biggest achievement of the year?

My highlight has been coming back to work with my very own Palmy HQ 🤩`,
    media: [
      {
        type: "img",
        url: "/assets/ENH2rRrWwAARmsZ.jpeg",
      },
      // {
      //   type: 'img',
      //   url: '/assets/ENH2rTvWwAYTqQW.jpeg',
      // },
      // {
      //   type: 'img',
      //   url: '/assets/ENH2rYeXYAEAIk7.jpeg',
      // },
    ],
  },
  // Giant Military Cats
  "1215337574526525440": {
    id: "1215337574526525440",
    author: "giantcat9",
    timestamp: "2020-01-09T13:20:00+00:00",
    sortedTimestamp: "2020-01-09T13:20:00+00:00",
    likedBy: [],
    echoBy: [],
    status: `Olifant / Rooikat`,
    media: [
      {
        type: "img",
        url: "/assets/giant-cats.jpg",
      },
    ],
  },
  "1215324598067245056": {
    id: "1215324598067245056",
    author: "giantcat9",
    timestamp: "2020-01-06T09:20:00+00:00",
    sortedTimestamp: "2020-01-06T09:20:00+00:00",
    likedBy: [],
    echoBy: ["diplomog"],
    status: `JAS 39 Gripen`,
    media: [
      {
        type: "img",
        url: "/assets/giant-cat-running.jpg",
      },
    ],
  },
  "1215288136026284032": {
    id: "1215288136026284032",
    author: "giantcat9",
    timestamp: "2019-12-24T14:02:00+00:00",
    sortedTimestamp: "2019-12-24T14:02:00+00:00",
    likedBy: [],
    echoBy: [],
    status: `FGS Frankfurt Am Main (A 1412)`,
    media: [
      {
        type: "img",
        url: "/assets/giant-cat-on-ship.jpg",
      },
    ],
  },
  "1215286068716736512": {
    id: "1215286068716736512",
    author: "giantcat9",
    timestamp: "2019-12-29T22:19:00+00:00",
    sortedTimestamp: "2019-12-29T22:19:00+00:00",
    likedBy: [],
    echoBy: [],
    status: `"The principle of giant military cats deterrence states that a country’s possession of giant military cats discourages other countries from using giant military cats".`,
    media: [],
  },
  "1215277385404309504": {
    id: "1215277385404309504",
    author: "giantcat9",
    timestamp: "2020-01-01T11:53:00+00:00",
    sortedTimestamp: "2020-01-01T11:53:00+00:00",
    likedBy: [],
    echoBy: [],
    status: `Come adopt Storm #Philadelphia
He needs you to storm the enemy lines and find his new #ForeverHome
#AdoptDontShop
https://morrisanimalrefuge.org/adopt/storm `,
    media: [
      {
        type: "img",
        url: "/assets/giant-cat-with-tanks.jpg",
      },
    ],
  },
  "1216044243980095488": {
    id: "1216044243980095488",
    author: "giantcat9",
    timestamp: "2020-01-11T12:08:00+00:00",
    sortedTimestamp: "2020-01-11T12:08:00+00:00",
    likedBy: [],
    echoBy: [],
    status: `USNS Comfort (T-AH-20)`,
    media: [
      {
        type: "img",
        url: "/assets/EOBBt4RWsAE9dBn.jpg",
      },
    ],
  },
  "1215996774806106114": {
    id: "1215996774806106114",
    author: "giantcat9",
    timestamp: "2020-01-11T08:59:00+00:00",
    sortedTimestamp: "2020-01-11T08:59:00+00:00",
    likedBy: [],
    echoBy: [],
    status: `"Scotland Forever!"
by Lady Butler / 1881`,
    media: [
      {
        type: "img",
        url: "/assets/EOAWiDjX0AA8JR-.jpg",
      },
    ],
  },
  "1215991148579315713": {
    id: "1215991148579315713",
    author: "giantcat9",
    timestamp: "2020-01-11T08:37:00+00:00",
    sortedTimestamp: "2020-01-11T08:37:00+00:00",
    likedBy: [],
    echoBy: [],
    status: `M1128 Stryker MGS`,
    media: [
      {
        type: "img",
        url: "/assets/EOARYNrX4AE1qTN.jpg",
      },
    ],
  },
  "1215953505451638784": {
    id: "1215953505451638784",
    author: "giantcat9",
    timestamp: "2020-01-12T17:27:00+00:00",
    sortedTimestamp: "2020-01-12T17:27:00+00:00",
    likedBy: [],
    echoBy: [],
    status: `Stridsbåt 90H (CB90)`,
    media: [
      {
        type: "img",
        url: "/assets/EN_vOBvW4AAnbML.jpg",
      },
    ],
  },
};

module.exports = {
  users,
  tweets,
};
