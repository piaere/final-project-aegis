const users = [
  {
    publicKey: "0x20ce772c4ef862fF022E9dd0931b0c331e29715e",
    displayName: "Bitalik's Newsletter",
    avatarSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx59oIapHiIZk4v1UL6B5-syhFm6qoZZtO4g&usqp=CAU",
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

  {
    publicKey: "0xF9614b726727087C56c9045Fc0613c498e5B7f64",
    displayName: "The Chris Edgy Report",
    avatarSrc:
      "https://www.truthdig.com/wp-content/uploads/2017/06/Chris_500.jpg",
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
  {
    publicKey: "0x5Ae488390a369ad446d4eff61103e0fbDbABdE01",
    displayName: "Edward Snodamn",
    avatarSrc:
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4d7eeb42945255.57ddb3fb7b1d1.png",
    joined: "2021-09-01T18:00",
    bio: "I research, write and blow the whistle",
    followingIds: ["0x20ce772c4ef862fF022E9dd0931b0c331e29715e"],
    followerIds: ["0x20ce772c4ef862fF022E9dd0931b0c331e29715e"],
  },
  {
    publicKey: "0x16496589b001541701B6806a8870C4d9d7F459EF",
    displayName: "Astral Codex Eleven",
    avatarSrc:
      "https://bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com/public/images/430241cb-ade5-4316-b1c9-6e3fe6e63e5e_256x256.png",
    joined: "2022-03-01T18:00",
    bio: "What is Astral Codex Eleven? \nI'm happy to finally have a clear answer to this question: Astral Codex Ten is a blog about ṛta",
    followingIds: ["0x5Ae488390a369ad446d4eff61103e0fbDbABdE01"],
    followerIds: ["0x56611e15b75aBE1818827747F933Bc132f3C54c3"],
  },
  {
    publicKey: "0x56611e15b75aBE1818827747F933Bc132f3C54c3",
    displayName: "Shoshanna",
    avatarSrc:
      "https://torontolife.com/wp-content/uploads/2019/08/TLSidewalk_ShoshanaZuboff.jpg",
    joined: "2022-05-01T18:00",
    bio: "surveillance, capital and technology",
    followingIds: [
      "0x16496589b001541701B6806a8870C4d9d7F459EF",
      "0xF9614b726727087C56c9045Fc0613c498e5B7f64",
    ],
    followerIds: ["0x5Ae488390a369ad446d4eff61103e0fbDbABdE01"],
  },
];

const articles = [
  //Bitalik
  {
    id: "b7594732-ce9e-4e2f-91ee-4d740fda7219",
    author: "0x20ce772c4ef862fF022E9dd0931b0c331e29715e",
    data: {
      time: 1654656858816,
      blocks: [
        {
          id: "btCn45u76_",
          type: "header",
          data: { text: "The roads not taken", level: 1 },
        },
        {
          id: "iAMED_24yt",
          type: "paragraph",
          data: {
            text: '2022 Mar 29<a href="https://vitalik.ca/index.html">See all posts</a>',
          },
        },
        {
          id: "jAh7l8osjX",
          type: "paragraph",
          data: {
            text: "The Ethereum protocol development community has made a lot of decisions in the early stages of Ethereum that have had a large impact on the project's trajectory. In some cases, Ethereum developers made conscious decisions to improve in some place where we thought that Bitcoin erred. In other places, we were creating something new entirely, and we simply had to come up with&nbsp;something&nbsp;to fill in a blank - but there were many somethings to choose from. And in still other places, we had a tradeoff between something more complex and something simpler. Sometimes, we chose the simpler thing, but sometimes, we chose the more complex thing too.",
          },
        },
        {
          id: "_klPuNfI5o",
          type: "paragraph",
          data: {
            text: "This post will look at some of these forks-in-the-road as I remember them. Many of these features were seriously discussed within core development circles; others were barely considered at all but perhaps really should have been. But even still, it's worth looking at what a different Ethereum might have looked like, and what we can learn from this going forward.",
          },
        },
        {
          id: "EvNthNP-KF",
          type: "header",
          data: {
            text: "Should we have gone with a much simpler version of proof of stake?",
            level: 2,
          },
        },
        {
          id: "lyT1hTGfpc",
          type: "paragraph",
          data: {
            text: 'The&nbsp;<a href="https://arxiv.org/abs/2003.03052">Gasper</a>&nbsp;proof of stake that Ethereum is very soon going to merge to is a complex system, but a very powerful system. Some of its properties include:',
          },
        },
        {
          id: "1sOCBK3nxu",
          type: "list",
          data: {
            style: "unordered",
            items: [
              'Very strong single-block confirmations&nbsp;- as soon as a transaction gets included in a block,&nbsp;<a href="https://ethresear.ch/t/high-confidence-single-block-confirmations-in-casper-ffg/8909">usually</a>&nbsp;within a few seconds that block gets solidified to the point that it cannot be reverted unless either a large fraction of nodes are dishonest or there is extreme network latency.',
              "Economic finality&nbsp;- once a block gets&nbsp;finalized, it cannot be reverted without the attacker having to lose millions of ETH to being slashed.",
              "Very predictable rewards&nbsp;- validators reliably earn rewards every epoch (6.4 minutes), reducing incentives to pool",
              'Support for very high validator count&nbsp;- unlike most other chains with the above features, the Ethereum beacon chain supports&nbsp;hundreds of thousands&nbsp;of validators (eg. Tendermint offers even faster finality than Ethereum, but it&nbsp;<a href="https://forum.cosmos.network/t/performance-of-tendermint-in-case-of-large-number-of-nodes/3442/2">only supports a few hundred</a>&nbsp;validators)',
            ],
          },
        },
        {
          id: "T4W_XQRoS3",
          type: "paragraph",
          data: {
            text: 'But making a system that has these properties is&nbsp;hard. It took&nbsp;<a href="https://twitter.com/vitalikbuterin/status/1029900695925706753">years of research</a>, years of&nbsp;<a href="https://github.com/ethereum/research/tree/master/casper4">failed</a>&nbsp;<a href="https://github.com/ethereum/casper/blob/master/casper/contracts/simple_casper.v.py">experiments</a>, and generally took a huge amount of effort. And the final output was pretty complex.',
          },
        },
        {
          id: "ehtFTjdgb9",
          type: "image",
          data: {
            url: "https://vitalik.ca/images/road/image1.png",
            caption: "",
            withBorder: false,
            withBackground: false,
            stretched: false,
          },
        },
        {
          id: "5T_i-OYH7E",
          type: "paragraph",
          data: {
            text: 'If our researchers did not have to worry so much about consensus and had more brain cycles to spare, then maybe, just maybe,&nbsp;<a href="https://vitalik.ca/general/2021/01/05/rollup.html">rollups</a>&nbsp;could have been invented in 2016. This brings us to a question:&nbsp;should we really have had such high standards for our proof of stake, when even a much simpler and weaker version of proof of stake would have been a large improvement over the proof of work status quo?',
          },
        },
        {
          id: "y7PgEDzKiV",
          type: "paragraph",
          data: {
            text: 'Many have the misconception that proof of stake is&nbsp;<a href="https://www.lynalden.com/proof-of-stake/">inherently complex</a>, but in reality there are plenty of proof of stake algorithms that are almost as simple as Nakamoto PoW.&nbsp;<a href="https://nxtdocs.jelurida.com/Nxt_Whitepaper#:~:text=Nxt%20is%20a%20100%25%20proof,called%20nothing%20at%20stake%20attacks.">NXT proof of stake</a>&nbsp;existed since 2013 and would have been a natural candidate; it had issues but those issues could easily have been patched, and we could have had a reasonably well-working proof of stake from 2017, or even from the beginning. The reason why Gasper is more complex than these algorithms is simply that it&nbsp;tries to accomplish much more than they do. But if we had been more modest at the beginning, we could have focused on achieving a more limited set of objectives first.',
          },
        },
        {
          id: "ly0YIIgjQq",
          type: "paragraph",
          data: {
            text: 'Proof of stake from the beginning would in my opinion have been a mistake; PoW was helpful in expanding the initial&nbsp;<a href="https://etherscan.io/stat/supply">issuance distribution</a>&nbsp;and making Ethereum accessible, as well as encouraging a hobbyist community. But switching to a simpler proof of stake in 2017, or even 2020, could have led to much less environmental damage (and anti-crypto mentality as a result of environmental damage) and a lot more research talent being free to think about scaling. Would we have had to spend a lot of resources on making a better proof of stake eventually? Yes. But it\'s increasingly looking like we\'ll&nbsp;<a href="https://notes.ethereum.org/@vbuterin/single_slot_finality">end up doing that anyway</a>.',
          },
        },
        {
          id: "d7m4dPiw-v",
          type: "header",
          data: { text: "The de-complexification of sharding", level: 2 },
        },
        {
          id: "CMvLE6_W7Z",
          type: "paragraph",
          data: {
            text: 'Ethereum sharding has been on a very consistent trajectory of becoming less and less complex since the ideas started being&nbsp;<a href="https://blog.ethereum.org/2014/09/17/scalability-part-1-building-top/">worked on in 2014</a>. First, we had complex sharding with built-in execution and cross-shard transactions. Then, we simplified the protocol by moving more responsibilities to the user (eg. in a cross-shard transaction, the user would have to separately pay for gas on both shards). Then, we switched to the&nbsp;<a href="https://ethereum-magicians.org/t/a-rollup-centric-ethereum-roadmap/4698">rollup-centric roadmap</a>&nbsp;where, from the protocol\'s point of view, shards are just blobs of data. Finally, with&nbsp;<a href="https://www.youtube.com/watch?v=e9oudTr5BE4">danksharding</a>, the shard fee markets are merged into one, and the final design just looks like a non-sharded chain but where some data availability sampling magic happens behind the scenes to make sharded verification happen.',
          },
        },
        {
          id: "HMivAk2eh8",
          type: "image",
          data: {
            url: "https://vitalik.ca/images/road/sharding2015.png",
            caption: "",
            withBorder: false,
            withBackground: false,
            stretched: false,
          },
        },
        {
          id: "Y0FKo4d3ZG",
          type: "image",
          data: {
            url: "https://vitalik.ca/images/road/sharding2022.png",
            caption: "",
            withBorder: false,
            withBackground: false,
            stretched: false,
          },
        },
        {
          id: "fDdoUe_MaN",
          type: "paragraph",
          data: { text: "<b>Sharding in 2015</b><b>Sharding in 2022</b>" },
        },
        {
          id: "WTCKAzNCpM",
          type: "paragraph",
          data: {
            text: 'But what if we had gone the opposite path? Well, there actually are Ethereum researchers who&nbsp;<a href="https://www.youtube.com/watch?v=lC-CNzWllKA">heavily explored</a>&nbsp;a much more sophisticated sharding system: shards would be chains, there would be fork choice rules where child chains depend on parent chains, cross-shard messages would get routed by the protocol, validators would be rotated between shards, and even applications would get automatically load-balanced between shards!',
          },
        },
        {
          id: "KGb39ORNkO",
          type: "paragraph",
          data: {
            text: 'The problem with that approach: those forms of sharding are largely just ideas and mathematical models, whereas Danksharding is a complete and almost-ready-for-implementation&nbsp;<a href="https://github.com/ethereum/consensus-specs#sharding">spec</a>. Hence, given Ethereum\'s circumstances and constraints, the simplification and de-ambitionization of sharding was, in my opinion, absolutely the right move. That said, the more ambitious research also has a very important role to play: it identifies promising research directions, even the very complex ideas often have "reasonably simple" versions of those ideas that still provide a lot of benefits, and there\'s a good chance that it will significantly influence Ethereum\'s protocol development (or even layer-2 protocols) over the years to come.',
          },
        },
        {
          id: "jaEbwCawH_",
          type: "header",
          data: { text: "More or less features in the EVM?", level: 2 },
        },
        {
          id: "DYqeZlU44A",
          type: "paragraph",
          data: {
            text: "Realistically, the specification of the EVM was basically, with the exception fo security auditing, viable for launch by mid-2014. However, over the next few months we continued actively exploring new features that we felt might be really important for a decentralized application blockchain. Some did not go in, others did.",
          },
        },
        {
          id: "mAUCI9E3XH",
          type: "list",
          data: {
            style: "unordered",
            items: [
              'We&nbsp;considered&nbsp;<a href="https://blog.ethereum.org/2014/08/27/state-ethereum-august-edition/">adding a&nbsp;POST&nbsp;opcode</a>, but decided against it.&nbsp;The&nbsp;POST&nbsp;opcode would have made an&nbsp;asynchronous&nbsp;call, that would get executed after the rest of the transaction finishes.',
              'We&nbsp;considered&nbsp;<a href="https://github.com/ethereum/go-ethereum/issues/117">adding an&nbsp;ALARM&nbsp;opcode</a>, but decided against it.&nbsp;ALARM&nbsp;would have functioned like&nbsp;POST, except executing the asynchronous call in some future block, allowing contracts to schedule operations.',
              'We&nbsp;added&nbsp;<a href="https://medium.com/mycrypto/understanding-event-logs-on-the-ethereum-blockchain-f4ae7ba50378">logs</a>, which allow contracts to output records that do not touch the state, but could be interpreted by dapp interfaces and wallets. Notably, we also&nbsp;considered making ETH transfers emit a log, but decided against it&nbsp;- the rationale being that "people will soon switch to smart contract wallets anyway".',
              'We&nbsp;considered expanding&nbsp;<a href="https://github.com/ethereum/EIPs/issues/97">SSTORE to support byte arrays</a>, but decided against it, because of concerns about complexity and safety.',
              'We&nbsp;added&nbsp;<a href="https://ethereum.stackexchange.com/questions/15479/list-of-pre-compiled-contracts">precompiles</a>, contracts which execute specialized cryptographic operations with native implementations at a much cheaper gas cost than can be done in the EVM.',
              'In the months right after launch,&nbsp;state rent was&nbsp;<a href="https://github.com/ethereum/EIPs/issues/35">considered</a>&nbsp;<a href="https://github.com/ethereum/EIPs/issues/88">again</a>&nbsp;and&nbsp;<a href="https://github.com/ethereum/EIPs/issues/87">again</a>, but was never included. It was just too complicated. Today, there are much better&nbsp;<a href="https://notes.ethereum.org/@vbuterin/state_expiry_eip">state expiry schemes</a>&nbsp;being actively explored, though&nbsp;<a href="https://dankradfeist.de/ethereum/2021/02/14/why-stateless.html">stateless verification</a>&nbsp;and&nbsp;<a href="https://ethresear.ch/t/two-slot-proposer-builder-separation/10980">proposer/builder separation</a>&nbsp;mean that it is now a much lower priority.',
            ],
          },
        },
        {
          id: "7suO7MLs2M",
          type: "paragraph",
          data: {
            text: "Looking at this today, most of the decisions to&nbsp;not&nbsp;add more features have proven to be very good decisions. There was no obvious reason to add a&nbsp;POST&nbsp;opcode. An&nbsp;ALARM&nbsp;opcode is actually very difficult to implement safely: what happens if everyone in blocks 1...99999 sets an&nbsp;ALARM&nbsp;to execute a lot of code at block 100000? Will that block take hours to process? Will some scheduled operations get pushed back to later blocks? But if that happens, then what guarantees is&nbsp;ALARM&nbsp;even preserving?&nbsp;SSTORE&nbsp;for byte arrays is difficult to do safely, and would have greatly expanded worst-case witness sizes.",
          },
        },
        {
          id: "wJZEnCZv7x",
          type: "paragraph",
          data: {
            text: 'The state rent issue is more challenging: had we actually implemented some kind of state rent from day 1, we would not have had a smart contract ecosystem evolve around a normalized assumption of persistent state. Ethereum would have been harder to build for, but it could have been more scalable and sustainable. At the same time, the state expiry schemes we had back then really were much worse than&nbsp;<a href="https://notes.ethereum.org/@vbuterin/state_expiry_eip">what we have now</a>. Sometimes, good ideas just take years to arrive at and there is no better way around that.',
          },
        },
        {
          id: "1LYSEoRH3c",
          type: "header",
          data: { text: "Alternative paths for&nbsp;LOG", level: 3 },
        },
        {
          id: "gZGcQqurWP",
          type: "paragraph",
          data: {
            text: "LOG&nbsp;could have been done differently in two different ways:",
          },
        },
        {
          id: "GSuTMkYvPT",
          type: "list",
          data: {
            style: "ordered",
            items: [
              "We could have made ETH transfers auto-issue a&nbsp;LOG. This would have saved a&nbsp;lot&nbsp;of effort and software bug issues for exchanges and many other users, and would have accelerated everyone relying on logs that would have ironically&nbsp;helped&nbsp;smart contract wallet adoption.",
              'We could have not bothered with a&nbsp;LOG&nbsp;opcode&nbsp;at all, and instead made it an ERC: there would be a standard contract that has a function&nbsp;submitLog&nbsp;and uses the&nbsp;<a href="https://github.com/ethereum/consensus-specs/blob/dev/specs/phase0/deposit-contract.md#solidity-code">technique from the Ethereum deposit contract</a>&nbsp;to compute a Merkle root of all logs in that block. Either&nbsp;<a href="https://eips.ethereum.org/EIPS/eip-2929">EIP-2929</a>&nbsp;or block-scoped storage (equivalent to&nbsp;<a href="https://eips.ethereum.org/EIPS/eip-1153">TSTORE</a>&nbsp;but cleared after the block) would have made this cheap.',
            ],
          },
        },
        {
          id: "u7hOLLPhEh",
          type: "paragraph",
          data: {
            text: "We strongly considered (1), but rejected it. The main reason was simplicity: it's easier for logs to&nbsp;just&nbsp;come from the&nbsp;LOG&nbsp;opcode. We also (very wrongly!) expected most users to quickly migrate to smart contract wallets, which could have logged transfers explicitly using the opcode.",
          },
        },
        {
          id: "8J5-WoTa65",
          type: "list",
          data: {
            style: "ordered",
            items: [
              'was not considered, but in retrospect it was always an option. The main downside of (2) would have been the lack of a Bloom filter mechanism for quickly scanning for logs. But as it turns out, the Bloom filter mechanism is too slow to be user-friendly for dapps anyway, and so these days more and more people&nbsp;<a href="https://thegraph.com/en/">use TheGraph</a>&nbsp;for querying anyway.',
            ],
          },
        },
        {
          id: "MsrxAxY7AT",
          type: "paragraph",
          data: {
            text: "On the whole, it seems very possible that&nbsp;either one&nbsp;of these approaches would have been superior to the status quo. Keeping&nbsp;LOG&nbsp;outside the protocol would have kept things simpler, but if it was inside the protocol auto-logging all ETH transfers would have made it&nbsp;more useful.",
          },
        },
        {
          id: "GhfLZQhvEW",
          type: "paragraph",
          data: {
            text: "Today, I would probably favor the eventual abolition of the&nbsp;LOG&nbsp;opcode from the EVM.",
          },
        },
        {
          id: "WpqNz2Nz5V",
          type: "header",
          data: {
            text: "What if the EVM was something totally different?",
            level: 3,
          },
        },
        {
          id: "R6j_p6gTNY",
          type: "paragraph",
          data: {
            text: "There were two natural very different paths that the EVM could have taken:",
          },
        },
        {
          id: "XxsqcHWRqu",
          type: "list",
          data: {
            style: "ordered",
            items: [
              "Make the EVM be a&nbsp;higher-level language, with built-in constructs for variables, if-statements, loops, etc.",
              "Make the EVM be a&nbsp;copy of some existing VM&nbsp;(LLVM, WASM, etc)",
            ],
          },
        },
        {
          id: "I31A2joViW",
          type: "paragraph",
          data: {
            text: 'The first path was never really considered. The attraction of this path is that it could have made compilers simpler, and allowed more developers to code in EVM directly. It could have also made ZK-EVM constructions simpler. The weakness of the path is that it would have made EVM code&nbsp;structurally&nbsp;more complicated: instead of being a simple list of opcodes in a row, it would have been a more complicated data structure that would have had to be stored somehow. That said, there was a missed opportunity for a best-of-both-worlds: some EVM changes could have given us a lot of those benefits while keeping the basic EVM structure roughly as is:&nbsp;<a href="https://github.com/ethereum/aleth/issues/3404">ban dynamic jumps and add some opcodes designed to support subroutines</a>&nbsp;(see also:&nbsp;<a href="https://eips.ethereum.org/EIPS/eip-2315">EIP-2315</a>), allow memory access only on 32-byte word boundaries, etc.',
          },
        },
        {
          id: "n5JTmbbeTp",
          type: "paragraph",
          data: {
            text: "The second path was suggested many times, and rejected many times. The usual argument for it is that it would allow programs to compile from existing languages (C, Rust, etc) into the EVM. The argument against has always been that given Ethereum's unique constraints it would not actually provide any benefits:",
          },
        },
        {
          id: "jvsQCnHRxG",
          type: "list",
          data: {
            style: "unordered",
            items: [
              "Existing compilers from high-level languages tend to not care about total code size, whereas blockchain code must optimize heavily to cut down every byte of code size",
              "We need multiple implementations of the VM with a hard requirement that two implementations&nbsp;never&nbsp;process the same code differently. Security-auditing and verifying this on code that we did not write would be much harder.",
              "If the VM specification changes, Ethereum would have to either always update along with it or fall more and more out-of-sync.",
            ],
          },
        },
        {
          id: "wwPQaOQx2B",
          type: "paragraph",
          data: {
            text: "Hence, there probably was never a viable path for the EVM that's&nbsp;radically&nbsp;different from what we have today, though there are lots of smaller details (jumps, 64 vs 256 bit, etc) that could have led to much better outcomes if they were done differently.",
          },
        },
        {
          id: "vqSdBMGjZ8",
          type: "header",
          data: {
            text: "Should the ETH supply have been distributed differently?",
            level: 2,
          },
        },
        {
          id: "H0m7_Yi-M5",
          type: "paragraph",
          data: {
            text: 'The current ETH supply is approximately represented by this&nbsp;<a href="https://etherscan.io/stat/supply">chart from Etherscan</a>:',
          },
        },
        {
          id: "MHX7sK0H66",
          type: "image",
          data: {
            url: "https://vitalik.ca/images/road/supplychart.png",
            caption: "",
            withBorder: false,
            withBackground: false,
            stretched: false,
          },
        },
        {
          id: "9WVsi19x9y",
          type: "paragraph",
          data: {
            text: 'About half of the ETH that exists today was sold in an open public&nbsp;<a href="https://blog.ethereum.org/2014/07/22/launching-the-ether-sale/">ether sale</a>, where anyone could send BTC to a standardized bitcoin address, and the initial ETH supply distribution was computed by an&nbsp;<a href="https://github.com/ethereum/genesis_block_generator/blob/master/mk_genesis_block.py">open-source script</a>&nbsp;that scans the Bitcoin blockchain for transactions going to that address. Most of the remainder was mined. The slice at the bottom, the 12M ETH marked "other", was the "premine" - a piece distributed between the Ethereum Foundation and ~100 early contributors to the Ethereum protocol.',
          },
        },
        {
          id: "BA4U_IbBFK",
          type: "paragraph",
          data: { text: "There are two main criticisms of this process:" },
        },
        {
          id: "iofHt27ZOi",
          type: "list",
          data: {
            style: "unordered",
            items: [
              'The premine, as well as the fact that the Ethereum Foundation received the sale funds, is not&nbsp;<a href="https://nakamoto.com/credible-neutrality/">credibly neutral</a>. A few recipient addresses were hand-picked through a closed process, and the Ethereum Foundation had to be trusted to not take out loans to recycle funds received furing the sale back into the sale to give itself more ETH (we did not, and no one seriously claims that we have, but even the requirement to be trusted at all offends some).',
              "The premine over-rewarded very early contributors, and left too little for later contributors. 75% of the premine went to rewarding contributors for their work before launch, and post-launch the Ethereum Foundation only had 3 million ETH left. Within 6 months, the need to sell to financially survive decreased that to around 1 million ETH.",
            ],
          },
        },
        {
          id: "AXvefa8uBE",
          type: "paragraph",
          data: {
            text: "In a way, the problems were related: the desire to minimize perceptions of centralization contributed to a smaller premine, and a smaller premine was exhausted more quickly.",
          },
        },
        {
          id: "zt2b-JZ4XB",
          type: "paragraph",
          data: {
            text: 'This is not the only way that things could have been done.&nbsp;<a href="https://z.cash/">Zcash</a>&nbsp;has a different approach: a constant 20% of the block reward goes to a set of recipients hard-coded in the protocol, and the set of recipients gets re-negotiated every 4 years (so far this has&nbsp;<a href="https://electriccoin.co/blog/dev-fund-poll-shows-consensus/">happened once</a>). This would have been much more sustainable, but it would have been much more heavily criticized as centralized (the Zcash community seems to be more openly okay with more technocratic leadership than the Ethereum community).',
          },
        },
        {
          id: "fptV4kdLDo",
          type: "paragraph",
          data: {
            text: 'One possible alternative path would be something similar to the "DAO from day 1" route popular among some defi projects today. Here is a possible strawman proposal:',
          },
        },
        {
          id: "-pK9agEoiZ",
          type: "list",
          data: {
            style: "unordered",
            items: [
              "We agree that for 2 years, a block reward of&nbsp;2 ETH per block goes into a dev fund.",
              'Anyone who purchases ETH in the ether sale could specify a&nbsp;vote for their preferred distribution&nbsp;of the dev fund (eg. "1 ETH per block to the Ethereum Foundation, 0.4 ETH to the Consensys research team, 0.2 ETH to Vlad Zamfir...")',
              "Recipients that got voted for get a share from the dev fund&nbsp;equal to the&nbsp;median of everyone's votes, scaled so that the total equals 2 ETH per block (median is to prevent self-dealing: if you vote for yourself you get nothing unless you get at least half of other purchasers to mention you)",
            ],
          },
        },
        {
          id: "eg5NsMAYQf",
          type: "paragraph",
          data: {
            text: 'The sale could be run by a legal entity that promises to distribute the&nbsp;bitcoin&nbsp;received during the sale along the same ratios as the ETH dev fund (or burned, if we really wanted to make bitcoiners happy). This probably would have led to the Ethereum Foundation getting a lot of funding, non-EF groups also getting a lot of funding (leading to more ecosystem decentralization), all without breaking credible neutrality one single bit. The main downside is of course that&nbsp;<a href="https://vitalik.ca/general/2021/08/16/voting3.html">coin voting really sucks</a>, but pragmatically we could have realized that 2014 was still an early and idealistic time and the most serious downsides of coin voting would only start coming into play long after the sale ends.',
          },
        },
        {
          id: "AkG8Dc9hGF",
          type: "paragraph",
          data: {
            text: "Would this have been a better idea and set a better precedent? Maybe! Though realistically even if the dev fund had been fully credibly neutral, the people who yell about Ethereum's premine today may well have just started yelling twice as hard about the DAO fork instead.",
          },
        },
        {
          id: "ljBMADjy2n",
          type: "header",
          data: { text: "What can we learn from all this?", level: 2 },
        },
        {
          id: "8y0IWhZSbK",
          type: "paragraph",
          data: {
            text: "In general,&nbsp;it sometimes feels to me like Ethereum's biggest challenges come from balancing between two visions - a pure and simple blockchain that values safety and simplicity, and a highly performant and functional platform for building advanced applications. Many of the examples above are just aspects of this: do we have fewer features and be more Bitcoin-like, or more features and be more developer-friendly? Do we worry a lot about making development funding credibly neutral and be more Bitcoin-like, or do we just worry first and foremost about making sure devs are rewarded enough to make Ethereum great?",
          },
        },
        {
          id: "fNv6W0gH7D",
          type: "paragraph",
          data: {
            text: "My personal dream is to try to achieve both visions at the same time&nbsp;- a base layer where the specification becomes&nbsp;smaller&nbsp;each year than the year before it, and a powerful developer-friendly advanced application ecosystem centered around layer-2 protocols. That said, getting to such an ideal world takes a long time, and&nbsp;a more explicit realization that it would take time and we need to think about the roadmap step-by-step would have probably helped us a lot.",
          },
        },
        {
          id: "O41QslSXIB",
          type: "paragraph",
          data: {
            text: "Today, there are a lot of things we cannot change, but there are many things that we still can, and there is still a path solidly open to improving both functionality and simplicity. Sometimes the path is a winding one: we need to add some more complexity first to enable sharding, which in turn enables lots of layer-2 scalability on top. That said, reducing complexity is possible, and Ethereum's history has already demonstrated this:",
          },
        },
        {
          id: "BeC9mJq1L7",
          type: "list",
          data: {
            style: "unordered",
            items: [
              '<a href="https://eips.ethereum.org/EIPS/eip-150">EIP-150</a>&nbsp;made the call stack depth limit no longer relevant, reducing security worries for contract developers.',
              '<a href="https://eips.ethereum.org/EIPS/eip-161">EIP-161</a>&nbsp;made the concept of an "empty account" as something separate from an account whose fields are zero no longer exist.',
              '<a href="https://eips.ethereum.org/EIPS/eip-3529">EIP-3529</a>&nbsp;removed part of the refund mechanism and made gas tokens no longer viable.',
            ],
          },
        },
      ],
      version: "2.24.3",
    },
  },

  {
    id: "9fb54e39-ab2e-48f2-b546-b780fdd21b94",
    author: "0x20ce772c4ef862fF022E9dd0931b0c331e29715e",
    data: {
      time: 1654657175441,
      blocks: [
        {
          id: "hu4m42plNV",
          type: "header",
          data: {
            text: "Encapsulated vs systemic complexity in protocol design",
            level: 1,
          },
        },
        {
          id: "jRb_1w3qhP",
          type: "paragraph",
          data: {
            text: '2022 Feb 28<a href="https://vitalik.ca/index.html">See all posts</a>',
          },
        },
        {
          id: "F-3oVGCYWP",
          type: "paragraph",
          data: {
            text: 'One of the main&nbsp;<a href="https://notes.ethereum.org/@vbuterin/serenity_design_rationale#Principles">goals of Ethereum protocol design</a>&nbsp;is to minimize complexity: make the protocol as simple as possible, while still making a blockchain that can&nbsp;<a href="https://vitalik.ca/general/2019/12/26/mvb.html">do what an effective blockchain needs to do</a>. The Ethereum protocol is far from perfect at this, especially since much of it was designed in 2014-16 when we understood much less, but we nevertheless make an active effort to reduce complexity whenever possible.',
          },
        },
        {
          id: "X1XFjg-zfm",
          type: "paragraph",
          data: {
            text: "One of the challenges of this goal, however, is that complexity is difficult to define, and sometimes, you have to trade off between two choices that introduce different kinds of complexity and have different costs. How do we compare?",
          },
        },
        {
          id: "tEgIk6D1Yw",
          type: "paragraph",
          data: {
            text: "One powerful intellectual tool that allows for more nuanced thinking about complexity is to draw a distinction between what we will call&nbsp;encapsulated complexity&nbsp;and&nbsp;systemic complexity.",
          },
        },
        {
          id: "w3yeSueuEt",
          type: "image",
          data: {
            url: "https://vitalik.ca/images/complexity-files/encapsulated_systemic.png",
            caption: "",
            withBorder: false,
            withBackground: false,
            stretched: false,
          },
        },
        {
          id: "IEFX3u1B2X",
          type: "paragraph",
          data: {
            text: 'Encapsulated complexity occurs when there is a system with sub-systems that are internally complex, but that present a simple "interface" to the outside. Systemic complexity occurs when the different parts of a system can\'t even be cleanly separated, and have complex interactions with each other.',
          },
        },
        {
          id: "SwiBd44e4W",
          type: "paragraph",
          data: { text: "Here are a few examples." },
        },
        {
          id: "uppU-nDNAY",
          type: "header",
          data: { text: "BLS signatures vs Schnorr signatures", level: 3 },
        },
        {
          id: "FLG-MtWK6v",
          type: "paragraph",
          data: {
            text: '<a href="https://en.wikipedia.org/wiki/BLS_digital_signature">BLS signatures</a>&nbsp;and&nbsp;<a href="https://en.wikipedia.org/wiki/Schnorr_signature">Schnorr signatures</a>&nbsp;are two popular types of cryptographic signature schemes that can be made with elliptic curves.',
          },
        },
        {
          id: "O8izqChqCW",
          type: "paragraph",
          data: { text: "BLS signatures appear mathematically very simple:" },
        },
        {
          id: "5E-OuAdaGt",
          type: "paragraph",
          data: { text: "Signing:&nbsp;σ=H(m)∗k" },
        },
        {
          id: "9Kp5U_jClJ",
          type: "paragraph",
          data: { text: "Verifying:&nbsp;e([1],σ)=?e(H(m),K)" },
        },
        {
          id: "zVleXZPMK2",
          type: "paragraph",
          data: {
            text: 'H&nbsp;is a hash function,&nbsp;m&nbsp;is the message, and&nbsp;k&nbsp;and&nbsp;K&nbsp;are the private and public keys. So far, so simple. However, the true complexity is hidden inside the definition of the&nbsp;e&nbsp;function:&nbsp;<a href="https://vitalik.ca/general/2017/01/14/exploring_ecp.html">elliptic curve pairings</a>, one of the most devilishly hard-to-understand pieces of math in all of cryptography.',
          },
        },
        {
          id: "ACNQbEJpaN",
          type: "paragraph",
          data: {
            text: 'Now, consider Schnorr signatures. Schnorr signatures rely only on basic&nbsp;<a href="https://blog.cloudflare.com/a-relatively-easy-to-understand-primer-on-elliptic-curve-cryptography/">elliptic curves</a>. But the signing and verification logic is somewhat more complex:',
          },
        },
        {
          id: "dCBlfs3tdM",
          type: "image",
          data: {
            url: "https://vitalik.ca/images/complexity-files/schnorr_def.png",
            caption: "",
            withBorder: false,
            withBackground: false,
            stretched: false,
          },
        },
        {
          id: "noHqmkMJqz",
          type: "paragraph",
          data: {
            text: 'So... which type of signature is "simpler"? It depends what you care about! BLS signatures have a huge amount of technical complexity, but the complexity is all buried within the definition of the&nbsp;e&nbsp;function. If you treat the&nbsp;e&nbsp;function as a black box, BLS signatures are actually really easy. Schnorr signatures, on the other hand, have less&nbsp;total&nbsp;complexity, but they have more pieces that could interact with the outside world in tricky ways.',
          },
        },
        { id: "MdTxK7LT3L", type: "paragraph", data: { text: "For example:" } },
        {
          id: "CfauwW2oTx",
          type: "list",
          data: {
            style: "unordered",
            items: [
              'Doing a BLS multi-signature (a combined signature from two keys&nbsp;k1&nbsp;and&nbsp;k2) is easy: just take&nbsp;σ1+σ2. But a Schnorr multi-signature requires two rounds of interaction, and there are tricky&nbsp;<a href="https://tlu.tarilabs.com/cryptography/introduction-schnorr-signatures#key-cancellation-attack">key cancellation attacks</a>&nbsp;that need to be dealt with.',
              "Schnorr signatures require random number generation, BLS signatures do not.",
            ],
          },
        },
        {
          id: "5t0V1Xahdh",
          type: "paragraph",
          data: {
            text: 'Elliptic curve pairings in general are a powerful "complexity sponge" in that they contain large amounts of encapsulated complexity, but enable solutions with much less systemic complexity. This is also true in the area of polynomial commitments: compare the&nbsp;<a href="https://dankradfeist.de/ethereum/2020/06/16/kate-polynomial-commitments.html">simplicity of KZG commitments</a>&nbsp;(which require pairings) to the much more complicated internal logic of&nbsp;<a href="https://vitalik.ca/general/2021/11/05/halo.html#background-how-do-inner-product-arguments-work">inner product arguments</a>&nbsp;(which do not).',
          },
        },
        {
          id: "uJJX8k0sZG",
          type: "header",
          data: { text: "Cryptography vs cryptoeconomics", level: 3 },
        },
        {
          id: "E42Kj7tULd",
          type: "paragraph",
          data: {
            text: 'One important design choice that appears in many blockchain designs is that of cryptography versus cryptoeconomics. Often (eg. in&nbsp;<a href="https://vitalik.ca/general/2021/01/05/rollup.html">rollups</a>) this comes in the form of a choice between&nbsp;validity proofs&nbsp;(aka. ZK-SNARKs) and&nbsp;fraud proofs.',
          },
        },
        {
          id: "Xv5FoZcSQU",
          type: "paragraph",
          data: {
            text: 'ZK-SNARKs are complex technology. While&nbsp;<a href="https://vitalik.ca/general/2021/01/26/snarks.html">the basic ideas</a>&nbsp;behind how they work can be explained in a single post, actually implementing a ZK-SNARK to verify some computation involves many times more complexity than the computation itself (hence why ZK-SNARKs for the EVM are&nbsp;<a href="https://ethresear.ch/t/a-zk-evm-specification/11549">still under development</a>&nbsp;while fraud proofs for the EVM are&nbsp;<a href="https://github.com/ethereum-optimism/cannon/">already in the testing stage</a>). Implementing a ZK-SNARK effectively involves circuit design with special-purpose optimization, working with unfamiliar programming languages, and many other challenges. Fraud proofs, on the other hand, are inherently simple: if someone makes a challenge, you just directly run the computation on-chain. For efficiency, a binary-search scheme is sometimes added, but even that doesn\'t add too much complexity.',
          },
        },
        {
          id: "3s2aD5778q",
          type: "paragraph",
          data: {
            text: "But while ZK-SNARKs are complex, their complexity is&nbsp;encapsulated complexity. The relatively light complexity of fraud proofs, on the other hand, is&nbsp;systemic. Here are some examples of systemic complexity that fraud proofs introduce:",
          },
        },
        {
          id: "ZYyJuZZC3c",
          type: "list",
          data: {
            style: "unordered",
            items: [
              'They require careful incentive engineering to avoid the&nbsp;<a href="https://eprint.iacr.org/2015/702.pdf">verifier\'s dilemma</a>.',
              "If done in-consensus, they require extra transaction types for the fraud proofs, along with reasoning about what happens if many actors compete to submit a fraud proof at the same time.",
              "They depend on a synchronous network.",
              "They allow censorship attacks to be also used to commit theft.",
              "Rollups based on fraud proofs require liquidity providers to support instant withdrawals.",
            ],
          },
        },
        {
          id: "MtgFtWxmZK",
          type: "paragraph",
          data: {
            text: "For these reasons, even from a complexity perspective purely cryptographic solutions based on ZK-SNARKs are likely to be long-run safer: ZK-SNARKs have are more complicated parts that&nbsp;some&nbsp;people have to think about, but they have fewer dangling caveats that&nbsp;everyone&nbsp;has to think about.",
          },
        },
        {
          id: "rkbQS-PPnN",
          type: "header",
          data: { text: "Miscellaneous examples", level: 3 },
        },
        {
          id: "JsYdxTBcUB",
          type: "list",
          data: {
            style: "unordered",
            items: [
              'Proof of work (Nakamoto consensus)&nbsp;- low encapsulated complexity, as the mechanism is extremely simple and easy to understand, but higher systemic complexity (eg.&nbsp;<a href="https://www.cs.cornell.edu/~ie53/publications/btcProcFC.pdf">selfish mining attacks</a>).',
              "Hash functions&nbsp;- high encapsulated complexity, but very easy-to-understand properties so low systemic complexity.",
              'Random shuffling algorithms&nbsp;- shuffling algorithms can either be internally complicated (as in&nbsp;<a href="https://ethresear.ch/t/whisk-a-practical-shuffle-based-ssle-protocol-for-ethereum/11763">Whisk</a>) but lead to easy-to-understand guarantees of strong randomness, or internally simpler but lead to randomness properties that are weaker and more difficult to analyze (systemic complexity).',
              'Miner extractable value (<a href="https://medium.com/umbrella-network/miner-extractable-value-mev-101-why-what-and-how-4bec3bc3bb2a">MEV</a>)&nbsp;- a protocol that is powerful enough to support complex transactions can be fairly simple internally, but those complex transactions can have complex systemic effects on the protocol\'s incentives by contributing to the incentive to propose blocks in very irregular ways.',
              'Verkle trees&nbsp;-&nbsp;<a href="https://vitalik.ca/general/2021/06/18/verkle.html">Verkle trees</a>&nbsp;do have some encapsulated complexity, in fact quite a bit more than plain Merkle hash trees. Systemically, however, Verkle trees present the exact same relatively clean-and-simple interface of a key-value map. The main systemic complexity "leak" is the possibility of an attacker manipulating the tree to make a particular value have a very long branch; but this risk is the same for both Verkle trees and Merkle trees.',
            ],
          },
        },
        {
          id: "-iyvCjV9rh",
          type: "header",
          data: { text: "How do we make the tradeoff?", level: 3 },
        },
        {
          id: "gEXjyWutpf",
          type: "paragraph",
          data: {
            text: "Often, the choice with less encapsulated complexity is also the choice with less systemic complexity, and so there is one choice that is obviously simpler. But at other times, you have to make a hard choice between one type of complexity and the other. What should be clear at this point is that&nbsp;complexity is less dangerous if it is encapsulated. The risks from complexity of a system are not a simple function of how long the specification is; a small 10-line piece of the specification that interacts with every other piece adds more complexity than a 100-line function that is otherwise treated as a black box.",
          },
        },
        {
          id: "c-wG1_gkiC",
          type: "paragraph",
          data: {
            text: "However, there are limits to this approach of preferring encapsulated complexity. Software bugs can occur in any piece of code, and as it gets bigger the probability of a bug approaches 1. Sometimes, when you need to interact with a sub-system in an unexpected and new way,&nbsp;complexity that was originally encapsulated can become systemic.",
          },
        },
        {
          id: "tyG-QLf1Gb",
          type: "paragraph",
          data: {
            text: "One example of the latter is Ethereum's current two-level state tree, which features a tree of account objects, where each account object in turn has its own storage tree.",
          },
        },
        {
          id: "SMo4uVwhHJ",
          type: "image",
          data: {
            url: "https://vitalik.ca/images/complexity-files/2Ltree.png",
            caption: "",
            withBorder: false,
            withBackground: false,
            stretched: false,
          },
        },
        {
          id: "Fnfg6mkIOo",
          type: "paragraph",
          data: {
            text: "This tree structure is complex, but at the beginning the complexity seemed to be well-encapsulated: the rest of the protocol interacts with the tree as a key/value store that you can read and write to, so we don't have to worry about how the tree is structured.",
          },
        },
        {
          id: "OYzcQjAv6v",
          type: "paragraph",
          data: {
            text: 'Later, however, the complexity turned out to have systemic effects: the ability of accounts to have arbitrarily large storage trees meant that there was no way to reliably expect a particular slice of the state (eg. "all accounts starting with 0x1234") to have a predictable size. This makes it harder to split up the state into pieces, complicating the design of syncing protocols and attempts to&nbsp;<a href="https://www.portal.network/#/">distribute the storage process</a>.&nbsp;Why did encapsulated complexity become systemic? Because the interface changed.&nbsp;The fix? The current&nbsp;<a href="https://notes.ethereum.org/@vbuterin/verkle_tree_eip">proposal to move to Verkle trees</a>&nbsp;also includes a move to a well-balanced single-layer design for the tree,',
          },
        },
      ],
      version: "2.24.3",
    },
  },
  //Chris Edgy
  {
    id: "92be9c32-e44a-45e0-907f-9178dd2a4333",
    author: "0xF9614b726727087C56c9045Fc0613c498e5B7f64",
    data: {
      time: 1654657469367,
      blocks: [
        {
          id: "2nM5mrdE4D",
          type: "header",
          data: { text: "America’s Gun Fetish", level: 1 },
        },
        {
          id: "oLO9kjucCa",
          type: "header",
          data: {
            text: "There will be no gun control, not only because of the gun lobby and a corrupt political class, but because for many white Americans the idea of the gun is the only power they have left.",
            level: 3,
          },
        },
        {
          id: "vzMTRPYcZR",
          type: "image",
          data: {
            url: "https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F667ed472-1b6d-4bdc-a399-da89f09ec9e8_4713x3787.jpeg",
            caption: "",
            withBorder: false,
            withBackground: false,
            stretched: false,
          },
        },
        {
          id: "iF7-AlPI7m",
          type: "paragraph",
          data: { text: "“White Light/White Heat” - by Mr. Fish" },
        },
        {
          id: "0Q9TfWp4mE",
          type: "paragraph",
          data: {
            text: '<a href="https://chrishedges.substack.com/subscribe?utm_medium=web&amp;utm_source=subscribe-widget&amp;utm_content=58117687">Subscribe now</a>',
          },
        },
        {
          id: "w2rvdAwxzh",
          type: "paragraph",
          data: {
            text: "Guns were a ubiquitous part of my childhood. My grandfather, who had been a master sergeant in the army, had a small arsenal in his house in Mechanic Falls, Maine. He gave me a 2020 bolt action Springfield rifle when I was 7. By the time I was 10, I had graduated to a Winchester lever action 30-30. I moved my way up the National Rifle Association’s (NRA) Marksmanship Qualification Program, helped along by a summer camp where riflery was mandatory. Like many boys in rural America, I was fascinated by guns, although I disliked hunting. Two decades as a reporter in war zones, however, resulted in a deep aversion to weapons. I saw what they did to human bodies. I inherited my grandfather’s guns and gave them to my uncle.",
          },
        },
        {
          id: "8OMaAMFmAR",
          type: "paragraph",
          data: {
            text: "Guns made my family, lower working-class people in Maine, feel powerful, even when they were not. Take away their guns and what was left? Decaying small towns, shuttered textile and paper mills, dead-end jobs, seedy bars where veterans, nearly all the men in my family were veterans, drank away their trauma. Take away the guns, and the brute force of squalor, decline, and abandonment hit you in the face like a tidal wave.&nbsp;",
          },
        },
        {
          id: "sisNbD-Sxq",
          type: "paragraph",
          data: {
            text: 'Yes, the gun lobby and weapons manufacturers fuel the violence with easily available assault-style weapons, whose small caliber 5.56 mm cartridges make them largely useless for hunting. Yes, the lax gun laws and risible background checks are partially to blame. But America also fetishizes guns. This fetish has intensified among white working-class men, who have seen everything slip beyond their grasp: economic stability, a sense of place within the society, hope for the future and political empowerment. The fear of losing the gun is the final crushing blow to self-esteem and dignity, a surrender to the economic and political forces that have destroyed their lives. They cling to the gun as an idea, a belief that with it they are strong, unassailable, and independent. The shifting sands of demographics, with white people&nbsp;<a href="https://www.brookings.edu/blog/the-avenue/2018/03/14/the-us-will-become-minority-white-in-2045-census-projects/">projected</a>&nbsp;to become a minority in the U.S. by 2045, intensifies this primal desire, they would say need, to own a weapon.',
          },
        },
        {
          id: "yuN9_8FzDz",
          type: "paragraph",
          data: {
            text: 'There have been&nbsp;<a href="https://www.washingtonpost.com/nation/2022/06/02/mass-shootings-in-2022/">over 200</a>&nbsp;mass shootings this year. There are nearly 400 million guns in the U.S., some&nbsp;<a href="https://www.bbc.com/news/world-us-canada-41488081">120 guns</a>&nbsp;for every 100 Americans. Half of the privately-owned guns are owned by&nbsp;<a href="https://news.northeastern.edu/2016/09/26/study-70m-more-firearms-added-to-us-gun-stock-over-past-20-years/#_ga=2.130490438.814604189.1654280320-254802065.1654280320">3 percent</a>&nbsp;of the population,&nbsp;<a href="https://www.rsfjournal.org/content/rsfjss/3/5/38.full.pdf">according to</a>&nbsp;a 2016 study. Our neighbor in Maine had 23 guns. Restrictive gun laws, and gun laws that are inequitably enforced, block gun ownership for many Blacks, especially in urban neighborhoods. Federal law, for example, prohibits gun ownership for most people with felony convictions, effectively barring legal gun ownership for a third of Black men. The outlawing of guns for Blacks is part of a long continuum. Blacks were denied the right to own guns under the antebellum Slave Codes, the post-Civil War Black Codes, and the Jim Crow laws.&nbsp;',
          },
        },
        {
          id: "eFAo_dEQjt",
          type: "paragraph",
          data: {
            text: "White people built their supremacy in America and globally with violence. They massacred Native Americans and stole their land. They kidnapped Africans, shipped them as cargo to the Americas, and then enslaved, lynched, imprisoned, and impoverished Black people for generations. They have always gunned down Black people with impunity, a historical reality only recently discernable to most white people because of cell phone videos of killings.&nbsp;",
          },
        },
        {
          id: "xTDxG0Iv-N",
          type: "paragraph",
          data: {
            text: '“The essential American soul is hard, isolate, stoic and a killer,” D.H. Lawrence&nbsp;<a href="https://www.amazon.com/dp/1107457505/?tag=fopo-20">writes</a>. “It has never yet melted.”',
          },
        },
        {
          id: "ai2WEbeVAn",
          type: "paragraph",
          data: {
            text: "White society, sometimes overtly and sometimes unconsciously, deeply fears Black retribution for its four centuries of murderous assaults.",
          },
        },
        {
          id: "dbcFoeRPi0",
          type: "paragraph",
          data: {
            text: '“Again, I say that each and every Negro, during the last 300 years, possesses from that heritage a greater burden of hate for America than they themselves know,” Richard Wright notes in his&nbsp;<a href="https://archives.yale.edu/repositories/11/resources/972">journal</a>. “Perhaps it is well that Negroes try to be as unintellectual as possible, for if they ever started really thinking about what happened to them, they’d go wild. And perhaps that is the secret of whites who want to believe that Negroes really have no memory; for if they thought that Negroes remembered they would start out to shoot them all in sheer self-defense.”&nbsp;',
          },
        },
        {
          id: "BiKX_7PGn6",
          type: "paragraph",
          data: {
            text: 'The Second Amendment, as the historian Roxanne Dunbar-Ortiz writes in&nbsp;<a href="https://www.rt.com/shows/on-contact/452901-amendment-supremacy-immigrants-constitution/">Loaded: A Disarming History of the Second Amendment</a>,”&nbsp;<a href="https://www.thecanary.co/feature/2019/08/06/amid-mass-shootings-leading-historian-says-white-supremacy-is-baked-into-the-us-constitution/">was designed</a>&nbsp;to solidify the rights, often demanded under state law, of whites to carry weapons. Southern white men were not only required&nbsp;to own guns but serve in slave patrols. These weapons were used to exterminate the indigenous population, hunt down enslaved people who escaped bondage and violently crush slave revolts, strikes and other uprisings by oppressed groups. Vigilante violence is wired into our DNA.',
          },
        },
        {
          id: "D6NWLe6dyM",
          type: "paragraph",
          data: {
            text: '&nbsp;“Most American violence – and this also illuminates its relationship to state power – has been initiated with a ‘conservative’ bias,” the historian Richard Hofstadter&nbsp;<a href="https://books.google.com/books?id=BRVbcJGS_BUC&amp;pg=PT29&amp;lpg=PT29&amp;dq=%E2%80%9CMost+American+violence+%E2%80%93+and+this+also+illuminates+its+relationship+to+state+power+%E2%80%93+has+been+initiated+with+a+%E2%80%98conservative%E2%80%99+bias&amp;source=bl&amp;ots=9UiBN8NbNv&amp;sig=ACfU3U1TQdKWh7kPr7wLvTnYSfxip403qg&amp;hl=en&amp;sa=X&amp;ved=2ahUKEwiAobyjnJT4AhVmsIQIHfQqBbMQ6AF6BAgEEAM#v=onepage&amp;q=%E2%80%9CMost%20American%20violence%20%E2%80%93%20and%20this%20also%20illuminates%20its%20relationship%20to%20state%20power%20%E2%80%93%20has%20been%20initiated%20with%20a%20%E2%80%98conservative%E2%80%99%20bias&amp;f=false">writes</a>. “It has been unleashed against abolitionists, Catholics, radicals, workers and labor organizers, Negroes, Orientals, and other ethnic or racial or ideological minorities, and has been used ostensibly to protect the American, the Southern, the white Protestant, or simply the established middle-class way of life and morals. A high proportion of our violent actions has thus come from the top dogs or the middle dogs. Such has been the character of most mob and vigilante movements. This may help to explain why so little of it has been used against state authority, and why in turn it has been so easily and indulgently forgotten.”',
          },
        },
        {
          id: "HNNzHa_tp2",
          type: "paragraph",
          data: {
            text: 'Payton Gendron, the 18-year-old white shooter in Buffalo who killed ten Black people and wounded three others, one of them Black, at the Tops Friendly Markets in a Black neighborhood, gave expression in a 180-page manifesto to this white fear, or “great replacement theory.” Gendron repeatedly cited Brenton Tarrant, the 28-year-old mass shooter who in 2019<a href="https://www.nbcnews.com/news/world/new-zealand-mosque-shootings">&nbsp;killed 51 people and injured 40 others at two mosque</a>s in&nbsp;<a href="https://www.nbcnews.com/news/world/new-zealand-mosque-shootings">Christchurch, New Zealand</a>. Tarrant, like Gendron, live streamed his attack so, he believed, he could be cheered on by a virtual audience. Robert Bowers, 46,&nbsp;<a href="https://www.nbcnews.com/news/us-news/active-shooter-reported-near-pittsburgh-synagogue-n925211">killed 11 people at the Tree of Life Synagogue in Pittsburgh</a>&nbsp;in 2018.&nbsp;<a href="https://www.npr.org/2019/10/10/769013051/el-paso-walmart-shooting-suspect-pleads-not-guilty">Patrick Crusius</a>, a 21-year-old, in 2019 drove more than 11 hours to target Hispanics, leaving 22 people dead and 26 injured in a Walmart in El Paso.&nbsp;<a href="https://www.nbcnews.com/news/us-news/california-synagogue-shooter-pleads-guilty-deadly-attack-will-spend-life-n1274564">John Earnest, who pleaded guilty</a>&nbsp;to murdering one and injuring three others in 2019 at a synagogue in Poway, California, saw the “white race” being supplanted by other races. Dylann Roof in 2015 fired 77 shots from his .45-caliber Glock pistol at parishioners attending a Bible study at the Black Emanuel AME Church in Charleston, South Carolina. He murdered nine of them. “You Blacks are killing white people on the streets everyday and raping white women everyday,” he&nbsp;<a href="https://www.nytimes.com/2017/01/10/us/dylann-roof-trial-charleston.html">shouted</a>&nbsp;at his victims as he was firing, according to a journal he kept in jail.',
          },
        },
        {
          id: "ZkIvaspNig",
          type: "paragraph",
          data: {
            text: "The gun enforced white supremacy. It should not be surprising that it is embraced as the instrument that will prevent whites from being dethroned.",
          },
        },
        {
          id: "0ujUEh-E9V",
          type: "paragraph",
          data: {
            text: "The specter of societal collapse, less and less a conspiracy theory as we barrel to climate breakdown, reinforces the gun fetish. Survivalist cults, infused with white supremacy, paint the scenario of gangs of marauding Black and brown people fleeing the chaos of lawless cities and ravaging the countryside. These hordes of Black and brown people, the survivalists believe, will only be kept at bay with guns, especially assault-style weapons. This is not far removed from calling for their extermination.",
          },
        },
        {
          id: "4ngH5tg0dM",
          type: "paragraph",
          data: {
            text: 'Historian&nbsp;<a href="https://en.wikipedia.org/wiki/Richard_Slotkin">Richard Slotkin&nbsp;</a>calls our national lust for blood sacrifice the “structuring metaphor of the American experience,” a belief in “regeneration through violence.” Blood sacrifice, he writes in his trilogy&nbsp;<a href="https://www.oupress.com/9780806132297/regeneration-through-violence/">Regeneration Through Violence: The Mythology of the American Frontier,</a>&nbsp;&nbsp;<a href="https://www.oupress.com/9780806130309/the-fatal-environment/">The Fatal Environment: The Myth of the Frontier in the Age of Industrialization</a><a href="https://www.oupress.com/9780806130309/the-fatal-environment/">,</a>&nbsp;and&nbsp;<a href="https://www.oupress.com/9780806130316/">Gunfighter Nation: The Myth of the Frontier in Twentieth-Century America</a><a href="https://www.oupress.com/9780806130316/">,</a>&nbsp;is celebrated as the highest form of good. Sometimes it requires the blood of heroes, but most often it requires the blood of enemies.&nbsp;',
          },
        },
        {
          id: "_GmgYjumlC",
          type: "paragraph",
          data: {
            text: 'This blood sacrifice, whether at home or in foreign wars, is racialized. The U.S. has slaughtered millions of the globe’s inhabitants, including women and children, in Korea, Vietnam, Afghanistan, Somalia, Iraq, Syria and Libya, as well as in numerous proxy wars, the latest in Ukraine, where the Biden administration will ship another&nbsp;<a href="https://www.usnews.com/news/world/articles/2022-06-01/u-s-rocket-systems-for-ukraine-not-meant-to-strike-russia-white-house-official">$ 700 million</a>&nbsp;in weapons to supplement&nbsp;<a href="https://www.nytimes.com/interactive/2022/05/20/upshot/ukraine-us-aid-size.html">$54 billion&nbsp;</a>in military and humanitarian aid.',
          },
        },
        {
          id: "WITGA7a0q4",
          type: "paragraph",
          data: {
            text: '<a href="https://chrishedges.substack.com/subscribe?utm_medium=web&amp;utm_source=subscribe-widget&amp;utm_content=58117687">Subscribe now</a>',
          },
        },
        {
          id: "9j5TY7GjpH",
          type: "paragraph",
          data: {
            text: 'When the national mythology inculcates into a population that it has the divine right to kill others to purge the earth of evil, how can this mythology not be ingested by naïve and alienated individuals? Kill them overseas. Kill them at home. The more&nbsp;<a href="https://chrishedges.substack.com/p/no-way-out-but-war?s=r">the empire deteriorates</a>, the more the impetus to kill grows. Violence, in desperation, becomes the only route to salvation.',
          },
        },
        {
          id: "7CNK6rHH5O",
          type: "paragraph",
          data: {
            text: "“A people unaware of its myths is likely to continue living by them, though the world around that people may change and demand changes in their psychology, their world view, their ethics, and their institutions,” Slotkin writes.",
          },
        },
        {
          id: "ZbK1_yHEsU",
          type: "paragraph",
          data: {
            text: "America’s gun fetish and culture of vigilante violence makes the U.S. very different from other industrialized nations. This is the reason there will never be serious gun control. It does not matter how many mass shootings take place, how many children are butchered in their classrooms, or how high the homicide rate climbs.",
          },
        },
        {
          id: "x2ckFML-GC",
          type: "paragraph",
          data: {
            text: "The longer we remain in a state of political paralysis, dominated by a corporate oligarchy that refuses to respond to the mounting misery of the bottom half of the population, the more the rage of the underclass will find expression through violence. People who are Black, Muslim, Asian, Jewish, and LGBTQ, along with the undocumented, liberals, feminists and intellectuals, already branded as contaminants, will be slated for execution. Violence will spawn more violence.",
          },
        },
        {
          id: "lC6qrwJC5I",
          type: "paragraph",
          data: {
            text: '“People pay for what they do, and, still more, for what they have allowed themselves to become,” James Baldwin&nbsp;<a href="https://www.amazon.com/James-Baldwin-Collected-Library-America/dp/1883011523/ref=sr_1_1?crid=4TIF4R2M8YBK&amp;keywords=james+baldwin+collected+essays&amp;qid=1654449402&amp;s=books&amp;sprefix=james+baldwin+collected+essays%2Cstripbooks%2C138&amp;sr=1-1">writes&nbsp;</a>of the American South. “The crucial thing, here, is that the sum of these individual abdications menaces life all over the world. For, in the generality, as social and moral and political and sexual entities, white Americans are probably the sickest and certainly the most dangerous people, of any color, to be found in the world today.” He added that he “was not struck by their wickedness, for that wickedness was but the spirit and the history of America. What struck me was the unbelievable dimension of their sorrow. I felt as though I had wandered into hell.”',
          },
        },
        {
          id: "oF0Gg10-gd",
          type: "paragraph",
          data: {
            text: "Those who cling to the mythology of white supremacy cannot be reached through rational discussion. Mythology is all they have left. When this mythology appears under threat it triggers a ferocious backlash, for without the myth there is an emptiness, an emotional void, a crushing despair.",
          },
        },
        {
          id: "kVErV3bVEG",
          type: "paragraph",
          data: {
            text: "America has two choices. It can reintegrate the dispossessed back into the society through radical New Deal types of reforms, or it can leave its underclass to wallow in the toxins of poverty, hate and resentment, fueling the blood sacrifices that afflict us. This choice, I fear, has already been made. The ruling oligarchy doesn’t take the subway or fly on commercial jets. It is protected by the FBI, Homeland Security, police escorts, and bodyguards. Its children attend private schools. It lives in gated communities with elaborate surveillance systems. We don’t matter.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
          },
        },
      ],
      version: "2.24.3",
    },
  },
  {
    id: "b0d6ed82-038b-41f7-bc78-8f5dd01daf90",
    author: "0xF9614b726727087C56c9045Fc0613c498e5B7f64",
    data: {
      time: 1654657644864,
      blocks: [
        {
          id: "hwvzrYX0WK",
          type: "header",
          data: { text: "The Age of Self-Delusion", level: 1 },
        },
        {
          id: "6a2vPHZxRK",
          type: "header",
          data: {
            text: "The US and Russia, faded relics of the Cold War, unable to accept their terminal decline, launch futile and self-defeating wars to reclaim their lost imperial power.",
            level: 3,
          },
        },
        {
          id: "7q2S5lHyyy",
          type: "image",
          data: {
            url: "https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F84252aaf-7be3-4ff0-9005-080190a71d01_3825x2785.jpeg",
            caption: "",
            withBorder: false,
            withBackground: false,
            stretched: false,
          },
        },
        {
          id: "V3KL_Od1KN",
          type: "paragraph",
          data: { text: "“Portion Control” by Mr. Fish" },
        },
        {
          id: "O8jj-cyF2Y",
          type: "paragraph",
          data: {
            text: '<a href="https://chrishedges.substack.com/subscribe?utm_medium=web&amp;utm_source=subscribe-widget&amp;utm_content=53206702">Subscribe now</a>',
          },
        },
        {
          id: "SILIM3LlGK",
          type: "paragraph",
          data: {
            text: "Blinded by what Barbara Tuchman calls “the bellicose frivolity of senile empires,” we are marching ominously towards war with Russia. How else might we explain Secretary of Defense Lloyd Austin’s public declaration that the US goal is to “weaken Russia” and Joe Biden’s request for another $33 billion in “emergency” military and economic aid (half of what Russia spent on its military in 2021) for Ukraine?",
          },
        },
        {
          id: "zfm9yIhTrR",
          type: "paragraph",
          data: {
            text: "The same cabal of generals and politicians that drained the state of trillions of dollars in the debacles in Afghanistan, Iraq, Syria, Libya, and Somalia and learned nothing from the nightmare of Vietnam, revel in the illusion of their omnipotence. They have no interest in a diplomatic solution. There are billions in profits to be made in arms sales. There is political posturing to be done. There are generals itching to pull the trigger. Why have all these high-priced and technologically advanced weapons systems if you can’t use them? Why not show the world this time around that the US still dominates the globe?&nbsp;",
          },
        },
        {
          id: "e9DQmrpbW5",
          type: "paragraph",
          data: {
            text: "The masters of war require an enemy. When an enemy cannot be found, as George Orwell understood in&nbsp;Nineteen Eighty-Four, an enemy is manufactured. That enemy can become an ally overnight – we allied ourselves with Iran in the Middle East to fight the Taliban and later the Caliphate – before instantly reinstating Iran as the incarnation of evil. The enemy is not about logic or geopolitical necessity. It is about stoking the fear and hatred that fuels perpetual war.&nbsp;",
          },
        },
        {
          id: "siYSLFy0I9",
          type: "paragraph",
          data: {
            text: "In 1989, I covered the revolutions that toppled the communist dictatorships in Central and Eastern Europe.&nbsp; President Mikhail Gorbachev, like his successor Boris Yeltsin and Vladimir Putin in the early stages of his rule, hoped to integrate Russia into the western alliance. But the war industry places profits before national defense. It needed an antagonistic Russia to push the expansion of NATO beyond the borders of a unified Germany in violation of a promise made to Moscow. There were billions of dollars to be made from a Russian enemy, as there are billions more to be made from the proxy war in Ukraine. There would be no “peace dividend” at the end of the Cold War. The war industry was determined to continue to bleed the US dry and amass its obscene profits. They provoked and antagonized Russia until Russia filled its preordained role.",
          },
        },
        {
          id: "O2RYlMaUmW",
          type: "paragraph",
          data: {
            text: "The humiliating withdrawal from Afghanistan and two decades of military disasters in the Middle East have magically been atoned for in Ukraine, although we have yet to place any troops on Ukrainian soil. We have taken ownership of the Ukrainians, as we did with the mujahideen we funded to fight the Soviets in Afghanistan.",
          },
        },
        {
          id: "xVxcXvgEPE",
          type: "paragraph",
          data: {
            text: '“For the first time in decades, an American president is showing that he, and only he, can lead the free world,” wrote George Packer, one of the most ardent cheerleaders for the invasion of Iraq, in&nbsp;<a href="https://www.theatlantic.com/ideas/archive/2022/02/ukraine-crisis-test-democracy-realist/622932/">The</a><a href="https://www.theatlantic.com/ideas/archive/2022/02/ukraine-crisis-test-democracy-realist/622932/">&nbsp;</a><a href="https://www.theatlantic.com/ideas/archive/2022/02/ukraine-crisis-test-democracy-realist/622932/">Atlantic</a>&nbsp;magazine.',
          },
        },
        {
          id: "izlmebtIu8",
          type: "paragraph",
          data: {
            text: '“NATO has been revitalized, the United States has reclaimed a mantle of leadership that some feared had vanished in Iraq and Afghanistan, and the European Union has found a unity and purpose that eluded it for most of its existence,”&nbsp;<a href="https://www.nytimes.com/2022/03/05/world/europe/russia-ukraine-invasion-sanctions.html">The New York Times</a>&nbsp;crowed.',
          },
        },
        {
          id: "XSXGn0f9rc",
          type: "paragraph",
          data: {
            text: "Gen. Mark A. Milley, the chairman of the Joint Chiefs of Staff,&nbsp;The New York Times&nbsp;wrote, carries around a map of Ukraine, marked with tactical details. “With aides, he drills down for details about the location and combat readiness of specific Russian ground units and ship movements,” the paper noted.",
          },
        },
        {
          id: "LMbdVUSt_X",
          type: "paragraph",
          data: {
            text: 'Former NATO commander Richard Shirreff told<a href="https://www.bbc.com/news/live/world-europe-61252785">&nbsp;BBC Radio 4’s “Today” program</a>&nbsp;the West should prepare to fight Russia.',
          },
        },
        {
          id: "kZWd7Qesol",
          type: "paragraph",
          data: {
            text: "“The worst case is war with Russia,” he said. “By gearing itself up for the worst case, it is most likely to deter Putin because ultimately Putin respects strength.”",
          },
        },
        {
          id: "jSX2mIn06s",
          type: "paragraph",
          data: {
            text: "War is a drug. It cripples your body. It fogs your brain. It reduces you to poverty. But each new hit sends you back to the euphoric heights where you began.&nbsp;&nbsp;",
          },
        },
        {
          id: "b4ZH2zSNMY",
          type: "paragraph",
          data: {
            text: "More weapons mean more fighting. More fighting means more death and destruction. More death and destruction mean more antagonization of Moscow. More antagonization of Moscow means we circle closer and closer to open warfare with Russia. Following Ukraine’s strikes on Russian military and energy facilities, Moscow threatened to attack incoming NATO weapons shipments. Reeling from sanctions, Moscow halted gas supplies to two European countries. It warned that the risk of a nuclear war is very “real” and that any direct foreign intervention in Ukraine would provoke a “lightning fast” response. As Finland and Sweden debate joining NATO, Russia has called further expansion of NATO another dangerous act of aggression, which of course it is. There is mounting pressure for a no-fly zone, a move that would trigger direct confrontation between Russia and NATO, as would a Russian attack on a NATO arms convoy in a Ukrainian neighbor country. Putin’s revanchism is matched by our own.",
          },
        },
        {
          id: "dQil3VTr5k",
          type: "paragraph",
          data: {
            text: "The disorganization, ineptitude, and low morale of the Russian army conscripts, along with the repeated intelligence failures by the Russian high command, apparently convinced Russia would roll over Ukraine in a few days, exposes the lie that Russia is a global menace. Russia’s forty-mile long convoy​ of stalled tanks and trucks, broken down and out of fuel, on the muddy road to Kyiv was not an image of cutting-edge military prowess. Russia has been unable to overwhelm a poorly equipped and numerically inferior force in Ukraine, many of whose troops have little or no military training. Russia poses no threat to the NATO alliance or the United States, barring a nuclear attack.",
          },
        },
        {
          id: "-4AZBHYv2C",
          type: "paragraph",
          data: {
            text: "“The Russian bear has effectively defanged itself,” historian Andrew Bacevich writes.",
          },
        },
        {
          id: "CbcmKlY-8E",
          type: "paragraph",
          data: {
            text: "But this is not a truth the war makers impart to the public. Russia must be inflated to become a global menace, despite nine weeks of humiliating military failures. A Russian monster is the raison d'être for increased military spending and the further projection of American power abroad, especially against China. Militarists need a mortal enemy. That enemy may be a chimera, but it will always be led by the new Hitler. The new Hitler was once Saddam Hussein. Today it is Vladimir Putin. Tomorrow it will be Xi Jinping. You can’t drain and impoverish the nation to feed an insatiable military machine unless you make its people afraid, even of phantoms.",
          },
        },
        {
          id: "vSTJyWOAuU",
          type: "paragraph",
          data: {
            text: "The war in Ukraine is intimately linked to the real existential crisis we face – the climate crisis. The latest UN Intergovernmental Panel on Climate Change (IPCC) report warns that greenhouse gas emissions must peak by 2025, and be nearly halved this decade, to thwart global catastrophe. UN Secretary General António Guterres characterized the report as “an atlas of human suffering and a damning indictment of failed climate leadership.” Triggered by war in Ukraine, soaring energy prices have pushed the US and other countries to call on domestic oil producers to increase fossil fuel extraction and exacerbate the climate crisis. Oil and gas lobbyists are demanding the Biden administration lift prohibitions on offshore drilling and on federal lands.",
          },
        },
        {
          id: "G0Ol0f9k-3",
          type: "paragraph",
          data: {
            text: "Black and brown people, who suffered in the brutal wars in Yemen, Iraq, Somalia, Afghanistan, and Syria, without the western support and sympathy shown white Ukrainians, will again be targeted. The Indian subcontinent is currently plagued with temperatures as high as 116.6 degrees, power outages of 10 to 14 hours a day and dying fields of crops. An estimated 143 million people will be displaced over the next thirty years, nearly all from Africa, South Asia and Latin America, the IPCC writes.",
          },
        },
        {
          id: "EjXVig62_B",
          type: "paragraph",
          data: {
            text: '<a href="https://chrishedges.substack.com/subscribe?utm_medium=web&amp;utm_source=subscribe-widget&amp;utm_content=53206702">Subscribe now</a>',
          },
        },
        {
          id: "-BqwVPaoXE",
          type: "paragraph",
          data: {
            text: "These endless conflicts will inevitably militarize our response to the climate breakdown. Absent measures and resources to halt the rise in global temperatures, curtail our reliance on fossil fuels, foster a plant-based diet and curb profligate consumption, nations will increasingly use their militaries to hoard diminishing natural resources, including food and water. Russia and Ukraine account for 30 per cent of all wheat traded on world markets. Since the invasion, the price of wheat has gone up by between 50 and 65 per cent in commodities exchanges. This is a hint of what is to come.",
          },
        },
        {
          id: "v5pj0wIZbg",
          type: "paragraph",
          data: {
            text: "The Ukraine war is part of a world order where the rule of law has been jettisoned for aggressive, preemptive war, a criminal act of aggression. These wars bring with them black sites, kidnapping, torture, targeted assassinations, censorship, and arbitrary detention. Rogue private contractors, along with covert intelligence paramilitary units, carry out off-the-book-war crimes. Russia’s Wagner Group (The name Wagner is supposedly the call sign of its founder and commander, an ex-GRU officer called Dmitry Utkin, who reportedly has Waffen-SS insignia tattooed on his collarbones) or the US mercenary group Academi, founded by the Christian Right leader Erik Prince, function as little more than death squads.&nbsp;",
          },
        },
        {
          id: "RMDyvvzPZf",
          type: "paragraph",
          data: {
            text: "War is a spectacular form of social control. It secures a blind, unquestioning mass consent propped up by what Pankaj Mishra calls an “infotainment media” that “works up citizens into a state of paranoid patriotism,” while “a service class of intellectuals talks up the American Revolution and the international liberal order.”",
          },
        },
        {
          id: "TsnQja1C7s",
          type: "paragraph",
          data: {
            text: "In&nbsp;The London Review of Books,&nbsp;Mishra wrote:",
          },
        },
        {
          id: "qEcZ0j-ym3",
          type: "paragraph",
          data: {
            text: "Humiliation in Iraq and Afghanistan, and at home by Trump, demoralised the exporters of democracy and capitalism. But Putin’s atrocities in Ukraine have now given them an opportunity to make America seem great again. The Russian bear has long guaranteed, more reliably than ‘Islamofascism’ or China, income, and identity to many in the military-industrial and intellectual-industrial complex. An aging centrist establishment – battered by the far right, harangued by post-Occupy and post-BLM young leftists, frustrated by legislative stalemate in Washington – seems suddenly galvanised by the prospect of defining themselves through a new cold war.",
          },
        },
        {
          id: "Agh0LdkB6o",
          type: "paragraph",
          data: {
            text: "This world of fantasy is sustained by myths - the myth that the people of Afghanistan and Iraq would welcome us as liberators, that Ukraine is not a real nation, that Ukrainians see themselves as pan-Russians, that all that stands between Iraqis, Afghans, Syrians, Somalis, Yemenis and Libyans and ourselves are terrorists, that all that stands between Putin and Ukrainians are neo-Nazis and their supporters in the West.",
          },
        },
        {
          id: "nIKy5UB7I0",
          type: "paragraph",
          data: {
            text: "Those that challenge these fantasies, whether in Russia or the US, are attacked, marginalized, and censored. Few notice. The dream is more appealing than reality. Step-by-step these blinded, bloodied cyclops of war stumble forward leaving mounds of corpses in their wake.",
          },
        },
      ],
      version: "2.24.3",
    },
  },
  //Edward Snodamn
  {
    id: "dc1af04f-e917-4b2d-89ed-4cb2cd511994",
    author: "0x5Ae488390a369ad446d4eff61103e0fbDbABdE01",
    data: {
      time: 1654657822174,
      blocks: [
        {
          id: "E8-gjSLeTO",
          type: "header",
          data: { text: "Cultural Revolutions", level: 1 },
        },
        {
          id: "qKHvGlXOjK",
          type: "header",
          data: { text: "Freedom is not a goal, but a direction", level: 3 },
        },
        {
          id: "XWh0t_cqes",
          type: "image",
          data: {
            url: "https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F28bc047f-1a51-45f5-90e6-8bce6ed71973_1920x1065.jpeg",
            caption: "",
            withBorder: false,
            withBackground: false,
            stretched: false,
          },
        },
        {
          id: "lgLFJgUT6Y",
          type: "paragraph",
          data: {
            text: "For a long time now, I’ve wanted to write to you, but found myself unable. Not from illness—although that came and went—but because I refuse to put something in your inbox that I feel isn’t worth your time.&nbsp;",
          },
        },
        {
          id: "ILq1wqnthX",
          type: "paragraph",
          data: {
            text: "The endless stream of events that the world provides to remark upon has the tendency to take on an almost physical weight, and robs me of what I can only describe as origination energy: the creative spark that empowers us not simply to do something, but to do something&nbsp;new. Without it, even the best of what I can produce feels derivative and workmanlike—good enough for government, perhaps, but not good enough for you.&nbsp;",
          },
        },
        {
          id: "Z_XnFnYeqq",
          type: "paragraph",
          data: {
            text: "I suspect you may know a similar struggle—you can tell me how you fight it below, if you like—but my only means for overcoming it is an aimless wandering in search of the unknown catalyst that might help me to refill my emptied well. Where once I might have had a good chance of walking away inspired by the empathy I felt while watching a sad, sad film, achieving such inspiration feels harder now, somehow. I have to search farther, and wander longer, across centuries of painting and music until at last, when passing by a dumpster, yesterday’s internet comment might suddenly pop into my head and blossom there, as if a poem. The thing—the artifact itself—doesn’t matter, so much as what it does for me—it&nbsp;enlivens&nbsp;me.",
          },
        },
        {
          id: "JcY6p6R3E8",
          type: "paragraph",
          data: { text: "This, to me, is art.&nbsp;" },
        },
        { id: "eUi5bEwXjS", type: "paragraph", data: { text: "<b>✓</b>" } },
        {
          id: "v5MGqsiYm3",
          type: "paragraph",
          data: {
            text: 'I was most recently enlivened by a book, so I can’t think of anything more fitting for my return to this format than an account of it:&nbsp;<a href="https://www.penguinrandomhouse.com/books/246165/1000-years-of-joys-and-sorrows-by-ai-weiwei/">1000 Years of Joys and Sorrows</a>, by the great Chinese artist&nbsp;<a href="https://en.wikipedia.org/wiki/Ai_Weiwei">Ai Wei-Wei</a>.',
          },
        },
        {
          id: "MKRlcqu_2f",
          type: "image",
          data: {
            url: "https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fb72b02f1-517a-4aeb-a77b-2d44f34399fe_296x450.jpeg",
            caption: "",
            withBorder: false,
            withBackground: true,
            stretched: false,
          },
        },
        {
          id: "3HAqdNNQmc",
          type: "paragraph",
          data: { text: "You don’t need me to tell you where to find books." },
        },
        {
          id: "T3iHioaY6w",
          type: "paragraph",
          data: {
            text: 'I never expected to find so much of my own story—of my own country’s story—in Ai Weiwei’s book, mostly because Ai’s life and mine could not have been more different. I grew up as the (old) Red Scare was in its death-throes, and until the cusp of my thirties I lived a comfortable existence as part of the newly ascendant clerisy of the computer. Ai, on the other hand, spent his childhood sleeping in a dugout amidst the frozen wastes of “<a href="https://en.wikipedia.org/wiki/Gurbant%C3%BCngg%C3%BCt_Desert">Little Siberia</a>” after his father, a politically-connected but free-thinking poet by the name of Ai Qing, was branded a “<a href="https://en.wikipedia.org/wiki/Five_Black_Categories">rightist</a>” and banished by the Maoists for “re-education.”',
          },
        },
        {
          id: "iPorGpG6t3",
          type: "paragraph",
          data: {
            text: 'The first half of Ai’s memoir is a moving testament to his father, resurrecting for all of us a man who, despite&nbsp;<a href="https://en.wikipedia.org/wiki/Cultural_Revolution#Humanitarian_crisis">the terrors of the Cultural Revolution</a>, retained an ineradicable sense of self.&nbsp;',
          },
        },
        {
          id: "Lt1Mutc6To",
          type: "paragraph",
          data: {
            text: "Ai’s dual structure—of an account of his life, yes, but also and perhaps more importantly an account of his times—was familiar to me, despite the exotic settings. He uses the classic dialectical frame (which I used in my own memoir), allowing him to bring intimacy to the political and historical context to the personal. In the case of&nbsp;1000 Years of Joys and Sorrows, choosing to include a deeply readable record of&nbsp;how&nbsp;and&nbsp;how quickly&nbsp;China’s violent intolerance became normalized into national policy is tremendously valuable and frequently alarming.&nbsp;",
          },
        },
        { id: "AsSVpNymJW", type: "paragraph", data: { text: "Ai writes:" } },
        {
          id: "qEVZr14xZu",
          type: "paragraph",
          data: {
            text: "Under the pressure to conform, everyone sank into an ideological swamp of “criticism” and “self-­criticism.” My father repeatedly wrote self-­critiques, and when controls on thought and expression rose to the level of threatening his very survival, he, like others, wrote an essay denouncing Wang Shiwei, the author of “Wild Lilies,” taking a public stand that went against his inner convictions.",
          },
        },
        {
          id: "Bev3_uwjfW",
          type: "paragraph",
          data: {
            text: "Situations such as this occurred in Yan’an in the 1940s, occurred in China after 1949, and still occur in the present day.&nbsp;Ideological cleansing, I would note, exists not only under totalitarian regimes—­it is also present, in a different form, in liberal Western democracies.&nbsp;Under the influence of politically correct extremism, individual thought and expression are too often curbed and too often replaced by empty political slogans.&nbsp;",
          },
        },
        {
          id: "AQZGYYX5tU",
          type: "paragraph",
          data: { text: "The bolding is mine, but the boldness is Ai’s." },
        },
        {
          id: "zCALV3iX9L",
          type: "paragraph",
          data: {
            text: "From the time I began studying China’s quest to&nbsp;intermediate&nbsp;the information space of its domestic internet, as part of my classified work at the NSA, I’d experience an unpleasant spinal tingle whenever I came across a new report indicating that the United States government, was, piece by piece, building out a similar technological and political infrastructure, using similar the justifications of countering terrorism, misinformation, sedition, and subjective “social harms.” I don’t want to be misunderstood as saying “East” and “West” were, or are, the same; rather, it is my belief that market forces, democratic decline, and a toxic obsession with “national security”—a euphemism for state supremacy—are drawing the US and China to meet in the middle: a common extreme. A consensus-challenging internet is perceived by both governments as a threat to central authority, and the pervasive surveillance and speech restrictions they’ve begun to mutually embrace will produce an authoritarian center of gravity that over time will compress every aspect of individual and national political differences until little distance remains.",
          },
        },
        { id: "_XaFDK5MDw", type: "paragraph", data: { text: "<b>✓</b>" } },
        {
          id: "00uCAfKpf5",
          type: "paragraph",
          data: {
            text: "If this theory strikes you as ridiculous, it is enough for now to bear in mind that no matter how different you believe China to be from the United States, there are lessons from Ai’s history that are uncomfortably easy to recognize: “If you try to understand your country,” he writes, “it’s enough to put you on a collision course with the law.”",
          },
        },
        {
          id: "WR97w2quvn",
          type: "image",
          data: {
            url: "https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F6709e755-f349-4d40-9637-37c8d7662e83_640x465.jpeg",
            caption: "",
            withBorder: false,
            withBackground: false,
            stretched: false,
          },
        },
        {
          id: "n90KV-0azk",
          type: "paragraph",
          data: {
            text: 'One need not nail&nbsp;<a href="https://en.wikipedia.org/wiki/Ninety-five_Theses">Ninety-five Theses</a>to the door for the church to perceive in them a threat; literacy alone may be enough to invite heresy.',
          },
        },
        {
          id: "bkYZI12f3m",
          type: "paragraph",
          data: {
            text: "1000 Years of Joys and Sorrows is a memoir of a man attempting to understand his country, even as his country is trying, or purporting to try, to understand&nbsp;him—through surveillance and investigations, interrogations and detentions. It is also a reminder that, as during the (last) Cultural Revolution, the political battle with the highest stakes will always be waged against the imposition of a monoculture. Within a monoculture, there is tremendous pressure to participate in the enforcement of&nbsp;consensus&nbsp;as if it were&nbsp;truth, which alienates members from the possibility that truth can often stand in opposition to consensus.&nbsp;&nbsp;",
          },
        },
        {
          id: "yAwz8Rq7au",
          type: "paragraph",
          data: { text: "The vaccine against monoculture is tolerance." },
        },
        {
          id: "t-f_BhtCHv",
          type: "paragraph",
          data: {
            text: 'The message that emerges from Ai’s work is that the truest resistance to the oppression of conformity is the riot of human diversity, the singular nature of the individual and their individual expression, the non-deterministic variability of things we—all of us—think and do and make.&nbsp;Difference is the&nbsp;<a href="https://en.wikipedia.org/wiki/Random_seed">seed value</a>&nbsp;of our human process.',
          },
        },
        {
          id: "exu1V9EAdv",
          type: "paragraph",
          data: {
            text: 'The public body is like Ai Weiwei’s&nbsp;<a href="https://en.wikipedia.org/wiki/Sunflower_Seeds_(artwork)">Sunflower Seeds</a>.&nbsp;Millions of handmade, ceramic seeds—identical from afar, but unique if you stopped to look, unique if you stopped to care—were poured into the bank-like lobby of the Tate Modern in London. Visitors could lie in them, they could touch them, they could roll around in their bounty and be renewed.&nbsp;',
          },
        },
        {
          id: "l_J2ENOlKd",
          type: "image",
          data: {
            url: "https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Ff25fdfff-c0fd-4d0f-9db2-b27f85639555_1600x1086.jpeg",
            caption: "",
            withBorder: false,
            withBackground: false,
            stretched: false,
          },
        },
        {
          id: "kb8_CnfY0H",
          type: "paragraph",
          data: { text: "Ai Weiwei amidstSunflower Seeds" },
        },
        {
          id: "IfX2fFEBh2",
          type: "paragraph",
          data: { text: "I wish I could have been there to experience it." },
        },
        {
          id: "vuoFl4GQwf",
          type: "paragraph",
          data: {
            text: "But in consolation I have a book that has touched me, a book that I’ve been reading to my son. Though he’s not old enough to understand a word yet, I know he feels the sound, the vibrations of my chest, and the warmth of being held within the mystery of language.&nbsp;",
          },
        },
        {
          id: "h7k8xcMJOi",
          type: "paragraph",
          data: {
            text: "In the final pages, Ai writes a phrase that I let hang in the air: “Freedom is not a goal, but a direction.”",
          },
        },
        {
          id: "i1DowsC4zO",
          type: "paragraph",
          data: { text: "And, I might add, wherever it leads you is home." },
        },
      ],
      version: "2.24.3",
    },
  },
  {
    id: "2c8b4646-cff5-4d99-9128-c8fe917cd412",
    author: "0x5Ae488390a369ad446d4eff61103e0fbDbABdE01",
    data: {
      time: 1654657967084,
      blocks: [
        {
          id: "HW9JC2XJVQ",
          type: "header",
          data: {
            text: 'The All-Seeing "i": Apple Just Declared War on Your Privacy',
            level: 1,
          },
        },
        {
          id: "XNil0LYNET",
          type: "header",
          data: {
            text: "“Under His Eye,” she says. The right farewell. “Under His Eye,” I reply, and she gives a little nod.",
            level: 3,
          },
        },
        {
          id: "8rU3k5VopF",
          type: "image",
          data: {
            url: "https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F55dcab7a-3977-479f-a522-60238ab2f895_1918x1345.png",
            caption: "",
            withBorder: false,
            withBackground: false,
            stretched: false,
          },
        },
        {
          id: "VwUgRh0oDl",
          type: "paragraph",
          data: {
            text: "By now you've probably heard that Apple&nbsp;<a href=\"https://www.eff.org/deeplinks/2021/08/apples-plan-think-different-about-encryption-opens-backdoor-your-private-life\">plans to push a new and uniquely intrusive surveillance system</a>&nbsp;out to many of the more than&nbsp;one billion&nbsp;iPhones it has sold, which all run the behemoth's proprietary, take-it-or-leave-it software. This new offensive is tentatively slated to begin with the launch of iOS 15⁠—almost certainly in mid-September⁠—with the devices of its US user-base designated as the initial targets. We’re told that other countries will be spared, but not for long.",
          },
        },
        {
          id: "0U8y3QuTNT",
          type: "paragraph",
          data: {
            text: "You might have noticed that I haven’t mentioned which problem it&nbsp;is that Apple is purporting to solve. Why? Because it doesn’t matter.",
          },
        },
        {
          id: "MuOnQjwVp7",
          type: "paragraph",
          data: {
            text: 'Having read thousands upon thousands of remarks on this growing scandal,&nbsp;it has become clear to me that many understand it doesn\'t matter, but few if any have been willing to actually say it. Speaking candidly, if that’s still allowed, that’s the way it always goes when someone of institutional significance launches a campaign to defend an indefensible intrusion into our private spaces. They make a mad dash to the supposed high ground, from which they speak in low, solemn tones about their moral mission before fervently invoking the dread spectre of the&nbsp;<a href="https://en.wikipedia.org/wiki/Four_Horsemen_of_the_Infocalypse">Four Horsemen of the Infopocalypse</a>, warning that only a&nbsp;<a href="https://en.wikipedia.org/wiki/Clipper_chip">dubious amulet</a>—or suspicious software update—can save us from the most threatening members of our species.',
          },
        },
        {
          id: "rq4eoaw_4M",
          type: "paragraph",
          data: {
            text: "Suddenly, everybody with a principled objection is forced to preface their concern with apologetic throat-clearing and the establishment of bonafides:&nbsp;I lost a friend when the towers came down, however... As a parent, I understand this is a real problem, but...",
          },
        },
        {
          id: "OjIJUZTEz-",
          type: "image",
          data: {
            url: "https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Ff80765b6-ed05-4973-9988-967f2951b7c5_680x617.png",
            caption: "",
            withBorder: false,
            withBackground: false,
            stretched: false,
          },
        },
        {
          id: "jVHB_30sVj",
          type: "paragraph",
          data: {
            text: "As a parent, I’m here to tell you that sometimes it doesn’t matter&nbsp;why&nbsp;the man in the handsome suit is doing something. What matters are the consequences.",
          },
        },
        {
          id: "F08qybzZ1s",
          type: "paragraph",
          data: {
            text: "Apple’s new system, regardless of how anyone tries to justify it,&nbsp;will permanently redefine what belongs to you, and what belongs to them.",
          },
        },
        { id: "D-yhQRfl4a", type: "paragraph", data: { text: "How?" } },
        {
          id: "iuuS2Ym81w",
          type: "paragraph",
          data: {
            text: "The task Apple intends its new surveillance system to perform—preventing their cloud systems from being used to store digital contraband, in this case unlawful images uploaded by their customers—is&nbsp;traditionally performed by searching&nbsp;their systems. While it’s still problematic for anybody to search through a billion people’s private files, the fact that they can only see the files you gave them is a crucial limitation.",
          },
        },
        {
          id: "XWtmX7q4CE",
          type: "paragraph",
          data: {
            text: 'Now, however, that’s all set to change. Under the new design,&nbsp;your phone&nbsp;will now perform these searches on Apple’s behalf before your photos have even reached their iCloud servers, and—yada, yada, yada—if enough "forbidden content" is discovered, law-enforcement will be notified.',
          },
        },
        {
          id: "iczHqPemtj",
          type: "image",
          data: {
            url: "https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F346523c1-14f2-472d-badc-95fd3f2f5a12_1536x864.jpeg",
            caption: "",
            withBorder: false,
            withBackground: false,
            stretched: false,
          },
        },
        {
          id: "d3TewydZyA",
          type: "paragraph",
          data: {
            text: "I intentionally wave away the technical and procedural details of Apple’s system here, some of which are quite clever, because they, like our man in the handsome suit, merely&nbsp;distract from the most pressing fact—the fact that, in just a few weeks, Apple plans to erase the boundary dividing which devices work for you, and which devices work for them.",
          },
        },
        {
          id: "YO-yI1wf-A",
          type: "paragraph",
          data: {
            text: 'Why is this so important? Once the precedent has been set that it is fit and proper&nbsp;for even a "pro-privacy" company like Apple to make products that betray their users and owners, Apple itself will lose all control over how that precedent is applied.&nbsp;​​​​​​As soon as the public first came to learn&nbsp;of the “spyPhone” plan, experts began investigating its technical weaknesses, and the many ways it could be abused, primarily&nbsp;within the parameters of Apple’s design.&nbsp;Although these valiant vulnerability-research efforts have produced&nbsp;<a href="https://thishashcollisionisnotporn.com/">compelling evidence</a>&nbsp;that the system is seriously flawed, they also seriously miss&nbsp;the point: Apple gets to decide whether or not their phones will monitor their owners’ infractions for the government, but it\'s&nbsp;the government&nbsp;that gets to decide what constitutes an infraction... and how to handle it.',
          },
        },
        {
          id: "JkjEv5_Vfk",
          type: "image",
          data: {
            url: "https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F5567553e-8047-4170-985b-6c94595669df_1172x1200.jpeg",
            caption: "",
            withBorder: false,
            withBackground: false,
            stretched: false,
          },
        },
        {
          id: "0yy6P6D5tO",
          type: "paragraph",
          data: {
            text: "For its part, Apple says their system, in its initial, v1.0 design, has a narrow focus: it only scrutinizes photos intended to be uploaded to iCloud (although for 85% of its customers, that means&nbsp;EVERY&nbsp;photo), and it does not scrutinize them beyond a simple comparison against a database of specific examples of previously-identified child sexual abuse material (CSAM).",
          },
        },
        {
          id: "F3zOchmGNR",
          type: "paragraph",
          data: {
            text: "If you’re an enterprising pedophile with a basement full of CSAM-tainted iPhones, Apple welcomes you to entirely exempt yourself from these scans&nbsp;by simply flipping the “Disable iCloud Photos” switch, a bypass which reveals that&nbsp;this system was never designed to protect children, as they would have you believe, but rather to protect their brand. As long as you keep that material off their servers, and so keep Apple out of the headlines, Apple doesn’t care.",
          },
        },
        {
          id: "8_Dbp4R93X",
          type: "paragraph",
          data: {
            text: 'So what happens when, in a few years at the latest, a politician points that out, and—in order&nbsp;to protect the children—bills are passed in the legislature to prohibit this "Disable"&nbsp;bypass, effectively compelling Apple to scan photos that&nbsp;aren’t&nbsp;backed up to iCloud? What happens when a party in India demands they start scanning for memes associated with a separatist movement? What happens when the UK demands they scan for a library of terrorist imagery? How long do we have left before the iPhone in your pocket begins quietly filing reports about encountering “extremist” political material, or about your presence at a "civil disturbance"?&nbsp;Or simply about your iPhone\'s possession of a video clip that contains, or maybe-or-maybe-not contains, a blurry image of a passer-by who resembles, according to an algorithm, "a person of interest"?',
          },
        },
        { id: "mjEmLkO9uy", type: "paragraph", data: { text: "<b>✓</b>" } },
        {
          id: "MI8hFiOHcU",
          type: "paragraph",
          data: {
            text: "If Apple demonstrates the capability and willingness to continuously, remotely search every phone for evidence of one particular type of crime,&nbsp;these are questions for which they will have no answer.&nbsp;And yet an answer will come—and it will come from the worst lawmakers of the worst governments.",
          },
        },
        {
          id: "B4pg4N0nQW",
          type: "paragraph",
          data: { text: "This is not a slippery slope. It’s a cliff." },
        },
        {
          id: "0mB_sPeOhb",
          type: "image",
          data: {
            url: "https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F06de0f57-7c4f-4186-bdbe-f18764927f48_900x664.jpeg",
            caption: "",
            withBorder: false,
            withBackground: false,
            stretched: false,
          },
        },
        {
          id: "vdyr-QrJme",
          type: "paragraph",
          data: {
            text: 'One particular frustration&nbsp;for me is that I know some people at Apple, and I even like some people at Apple—bright, principled people who should know better. Actually, who&nbsp;do&nbsp;know better. Every security expert in the world is screaming themselves hoarse now, imploring Apple to stop, even those experts who in more normal circumstances&nbsp;reliably argue&nbsp;in favor&nbsp;of censorship. Even&nbsp;<a href="https://www.twitter.com/elizableu/status/1424062486433648640">some survivors of child exploitation are against it</a>. And yet, as the OG designer Galileo&nbsp;<a href="https://en.wikipedia.org/wiki/And_yet_it_moves">once said</a>, it moves.',
          },
        },
        {
          id: "Wb1nauJkHI",
          type: "paragraph",
          data: {
            text: 'Faced with a blistering torrent of global condemnation, Apple has responded not by addressing any concerns or making any changes, or, more sensibly, by just scrapping the plan altogether, but by deploying their man-in-the-handsome-suit software chief, who resembles the well-moisturized villain from a movie about Wall Street, to give quotes to, yes, the&nbsp;<a href="https://www.youtube.com/watch?v=OQUO1DSwYN0">Wall Street Journal</a>&nbsp;about how sorry the company is for the "confusion" it has caused, but how the public shouldn\'t worry: Apple&nbsp;“feel[s] very good about what they’re doing.”',
          },
        },
        {
          id: "J6F0Zo-VUd",
          type: "image",
          data: {
            url: "https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fcddcf9dc-1db9-4287-be35-1b56de4060d8_640x336.jpeg",
            caption: "",
            withBorder: false,
            withBackground: false,
            stretched: false,
          },
        },
        {
          id: "l1BDV_cVHd",
          type: "paragraph",
          data: {
            text: "I would say I’m being unfair to him, but I’m not the one who dismissed universal public opposition to a new and intensely personal form of mass surveillance as “confusion.”",
          },
        },
        {
          id: "FKJZlziGrP",
          type: "paragraph",
          data: {
            text: "Neither the message nor the messenger was a mistake. Apple dispatched its SVP-for-Software Ken doll to speak with the&nbsp;Journal&nbsp;not to protect the company's users, but to reassure the company's investors. His role was to create the false impression that this is not something that you, or anyone, should be upset about.&nbsp;And, collaterally,&nbsp;his role was to ensure this new \"policy\" would be associated with the face of an Apple executive other than&nbsp;CEO Tim Cook, just in case the roll-out, or the fall-out, results in a corporate beheading.",
          },
        },
        {
          id: "pQF_2y41nj",
          type: "paragraph",
          data: {
            text: 'Why? Why is Apple risking so much for a CSAM-detection system that has been denounced as “dangerous” and "easily repurposed for surveillance and censorship" by&nbsp;<a href="https://www.washingtonpost.com/opinions/2021/08/19/apple-csam-abuse-encryption-security-privacy-dangerous/">the very computer scientists who\'ve already put it to the test</a>? What could be worth the decisive shattering of the foundational Apple idea that an iPhone belongs to the person who carries it, rather than to the company that made it?&nbsp;',
          },
        },
        {
          id: "8V1Gp6aSC4",
          type: "paragraph",
          data: {
            text: 'Apple: "Designed in California, Assembled in China, Purchased by You, Owned by Us."',
          },
        },
        {
          id: "gWahbpxYCr",
          type: "paragraph",
          data: {
            text: 'The one answer to these questions that the optimists keep coming back to&nbsp;is the likelihood that Apple is doing this as a prelude to finally switching over to&nbsp;<a href="https://ssd.eff.org/en/module/deep-dive-end-end-encryption-how-do-public-key-encryption-systems-work">“end-to-end” encryption</a>&nbsp;for everything its customers store on iCloud—something Apple had previously intended to do before backtracking,&nbsp;<a href="https://www.reuters.com/article/us-apple-fbi-icloud-exclusive/exclusive-apple-dropped-plan-for-encrypting-backups-after-fbi-complained-sources-idUSKBN1ZK1CT">in a dismaying&nbsp;display of cowardice</a>, after the FBI secretly complained.',
          },
        },
        {
          id: "IgqFeLwpc6",
          type: "paragraph",
          data: {
            text: "For the unfamiliar, what I’m describing here as end-to-end encryption is a somewhat complex concept, but briefly, it means that only the two endpoints sharing a file—say, two phones on opposite sides of the internet—are able to&nbsp;decrypt it. Even if the file were being stored and served from an iCloud server in Cupertino, as far as Apple (or any other middleman-in-a-handsome-suit) is concerned, that file is just an indecipherable blob of random garbage: the file only becomes a text message, a video, a photo, or whatever it is, when it is paired with a key that’s possessed only by you and by those with whom you choose to share it.",
          },
        },
        {
          id: "PimTTqjudS",
          type: "image",
          data: {
            url: "https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F3fdfec14-9cf9-4bd5-9137-169234d2d774_1100x714.png",
            caption: "",
            withBorder: false,
            withBackground: false,
            stretched: false,
          },
        },
        {
          id: "3tQEntm4UK",
          type: "image",
          data: {
            url: "https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F073bd933-ea53-44c5-b4c5-f9bfd2791919_1200x600.png",
            caption: "",
            withBorder: false,
            withBackground: false,
            stretched: false,
          },
        },
        {
          id: "nc8_80ha1J",
          type: "paragraph",
          data: {
            text: "This is the goal of end-to-end encryption: drawing a new and ineradicable line in the digital sand dividing&nbsp;your&nbsp;data and&nbsp;their&nbsp;data.&nbsp;It allows you to trust a service provider to&nbsp;store&nbsp;your data without granting them any ability to&nbsp;understand&nbsp;it. This would mean that even Apple itself could no longer be expected to rummage through your iCloud account with its grabby little raccoon hands—and therefore could not be expected to hand it over to any government that can stamp a sheet of paper, which is precisely why the FBI (again: secretly) complained.",
          },
        },
        {
          id: "_ZQp5n5HAZ",
          type: "paragraph",
          data: {
            text: "For Apple to realize this original vision would have represented a&nbsp;huge&nbsp;improvement in the privacy of our devices, effectively delivering the&nbsp;final word in a thirty year-long debate over&nbsp;establishing a new industry standard—and, by extension, the new global expectation that parties seeking access to data from a device must&nbsp;obtain it&nbsp;from that device, rather than turning the internet and its ecosystem into a spy machine.",
          },
        },
        {
          id: "PX3VGY9KYp",
          type: "paragraph",
          data: {
            text: "Unfortunately, I am here to report that once again, the optimists are&nbsp;wrong: Apple’s proposal to make their phones inform on and betray their owners marks the dawn of a dark future, one to be written in the blood of the political opposition of a hundred countries that will exploit this system to the hilt. See, the day after this system goes live, it will no longer matter whether or not Apple ever enables end-to-end encryption, because our iPhones will be reporting their contents&nbsp;before our keys are even used.&nbsp;",
          },
        },
        {
          id: "em7Q15hYzB",
          type: "paragraph",
          data: {
            text: "I can’t think of any other company that has so proudly, and so publicly, distributed spyware to its own devices—and I can’t think of a threat more dangerous to a product’s security than the mischief of its own maker. There is no fundamental technological limit to how far the precedent Apple is establishing can be pushed, meaning the only restraint is Apple’s all-too-flexible company policy, something governments understand all too well.",
          },
        },
        {
          id: "O7z9EVjxkq",
          type: "paragraph",
          data: {
            text: "I would say there should be a law, but I fear it would only make things worse.",
          },
        },
        {
          id: "RP4PaNZuMM",
          type: "image",
          data: {
            url: "https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F46966131-b95b-4dd2-a8d3-b4f0809765eb_768x768.jpeg",
            caption: "",
            withBorder: false,
            withBackground: false,
            stretched: false,
          },
        },
        {
          id: "LYzrgvwNcd",
          type: "paragraph",
          data: {
            text: 'We are bearing witness to the construction of an all-seeing-i—an&nbsp;<a href="https://en.wikipedia.org/wiki/Eye_of_Providence">Eye of&nbsp;</a><a href="https://en.wikipedia.org/wiki/Eye_of_Providence">Im</a><a href="https://en.wikipedia.org/wiki/Eye_of_Providence">providence</a>—under whose aegis&nbsp;every iPhone will search itself&nbsp;for whatever Apple wants, or for whatever Apple is directed to want. They are inventing a world in which every product you purchase owes its highest loyalty to someone other than its owner.',
          },
        },
        {
          id: "uG9dgNhire",
          type: "paragraph",
          data: {
            text: "To put it bluntly, this is not an innovation but a tragedy, a disaster-in-the-making.",
          },
        },
        {
          id: "chNgmGM8Tk",
          type: "paragraph",
          data: {
            text: "Or maybe I'm&nbsp;confused—or maybe I just&nbsp;think different.",
          },
        },
      ],
      version: "2.24.3",
    },
  },
  //Astral Codex Eleven
  {
    id: "b6d97632-79ad-4108-89bf-0339dc3b7bdd",
    author: "0x16496589b001541701B6806a8870C4d9d7F459EF",
    data: {
      time: 1654658144126,
      blocks: [
        {
          id: "uGCg6U8I9m",
          type: "header",
          data: {
            text: "A Guide To Asking Robots To Design Stained Glass Windows",
            level: 1,
          },
        },
        {
          id: "0nsz3lIR-Z",
          type: "paragraph",
          data: {
            text: 'I love stained glass. Not so much your usual suburban house stained glass with a picture of lilies. The good stuff. Cathedral windows, Art Nouveau, Art Deco. Why did we stop doing that? I blame&nbsp;<a href="https://astralcodexten.substack.com/p/whither-tartaria?s=w">the conspiracy</a>.',
          },
        },
        {
          id: "9k2wAjAjM9",
          type: "paragraph",
          data: {
            text: 'Recently I’ve been experimenting with small-scale alternatives. You can get custom-printed window film from&nbsp;<a href="https://www.wallpaperforwindows.com/window-film/custom-printed-window-film/">these people</a>. If you print out a picture of a stained glass scene and stick it on a window, it looks pretty realistic.',
          },
        },
        {
          id: "TFjr2WI8wi",
          type: "paragraph",
          data: {
            text: 'But what scenes to use? Most of the stained glass images you can find are saints, which isn’t really the mood I’m going for. What I’d really like is a giant twelve-part panel depicting&nbsp;<a href="https://www.yudkowsky.net/rational/virtues">the Virtues Of Rationality</a>. But the artists I’ve asked to design this all balk. I need an artist who works for free and isn’t allowed to say no.',
          },
        },
        {
          id: "f9eCrr5nrs",
          type: "paragraph",
          data: {
            text: 'Enter&nbsp;<a href="https://openai.com/dall-e-2/">DALL-E-2</a>, the new art-generating AI. I’m still on the waitlist, but a friend who jumped in sooner than I did let me use their computer for a while and play around with it. This was my first introduction to the exciting world of DALL-E query framing - the surprisingly complicated relationship between what you ask the AI to do, and what it actually does. Seems on topic for this blog. So this is a combination investigation into how DALL-E thinks about queries, but also a practical guide to getting DALL-E to make good stained glass. Let’s get started.',
          },
        },
        {
          id: "lS22zWKNtt",
          type: "header",
          data: { text: "The Sixth Virtue: Empiricism", level: 3 },
        },
        {
          id: "cgAWlScLA_",
          type: "paragraph",
          data: {
            text: "I’m going to go out of order here so I can demonstrate some principles from simplest to most complicated. Empiricism was the easiest window to generate. I wanted a picture of Charles Darwin studying finches. DALL-E was happy to provide.",
          },
        },
        {
          id: "1oR6b52iv_",
          type: "paragraph",
          data: {
            text: "(On these and most other images, I’ve put the prompt on the top so you can see what it’s doing. All of these “screenshots” are slightly edited. In particular, I’m only showing three rather than the usual ten so that they show up better.)",
          },
        },
        {
          id: "yN8Vo-imlO",
          type: "image",
          data: {
            url: "https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F328f57c7-98f0-443d-b39a-20ebdb816417_672x257.png",
            caption: "",
            withBorder: false,
            withBackground: false,
            stretched: false,
          },
        },
        {
          id: "ENiVUNoE9K",
          type: "paragraph",
          data: {
            text: "Though even on this easiest of questions, some of the pictures could only be described as “disastrous”.",
          },
        },
        {
          id: "tSjh4dKXPH",
          type: "image",
          data: {
            url: "https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F306201a2-9715-43d4-a406-a72d8b53cbd5_746x241.png",
            caption: "",
            withBorder: false,
            withBackground: false,
            stretched: false,
          },
        },
        {
          id: "pbj5dcsbKq",
          type: "paragraph",
          data: {
            text: "If Darwin had really looked like this, I bet he would have had an easier time convincing people of evolution.",
          },
        },
        {
          id: "86fr10-jAX",
          type: "paragraph",
          data: { text: "Still, let’s move on." },
        },
        {
          id: "dMlMo7bx9i",
          type: "header",
          data: { text: "The Fourth Virtue: Evenness", level: 3 },
        },
        {
          id: "PA9lJ9Juat",
          type: "paragraph",
          data: {
            text: "For this one, I wanted a picture of Reverend Thomas Bayes holding a scale:",
          },
        },
        {
          id: "OPQWzWfd29",
          type: "image",
          data: {
            url: "https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Faff70a0c-4205-4968-869d-cb67235f0e9b_697x260.png",
            caption: "",
            withBorder: false,
            withBackground: false,
            stretched: false,
          },
        },
        {
          id: "UgD7gFQGbT",
          type: "paragraph",
          data: {
            text: "Some of these are okay, but they don’t especially look like Bayes. I figured that maybe DALL-E doesn’t know who Bayes is. Is that true?",
          },
        },
        {
          id: "nE0ptoRJGm",
          type: "paragraph",
          data: { text: "The only known picture of Bayes is this one:" },
        },
        {
          id: "VQ_71GF_Nh",
          type: "image",
          data: {
            url: "https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_lossy/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F3ef36b98-e19e-4abb-8a9a-79970172f2d0_304x326.gif",
            caption: "",
            withBorder: false,
            withBackground: false,
            stretched: false,
          },
        },
        {
          id: "xvKVKA4GPR",
          type: "paragraph",
          data: {
            text: "When I ask DALL-E to give me Reverend Thomas Bayes, I get:",
          },
        },
        {
          id: "cV1YFTSqDJ",
          type: "image",
          data: {
            url: "https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fb5a4bee1-e12e-4db5-b660-bffad1473d6b_694x277.png",
            caption: "",
            withBorder: false,
            withBackground: false,
            stretched: false,
          },
        },
        {
          id: "9oRvA4d4U9",
          type: "paragraph",
          data: {
            text: "First things first: yes, DALL-E is very bad at text. Even when it’s good, it’s bad, as you can see in the last picture, “Bay of Tayees”. My guess is that it’s seen so many maps that it has a high prior on anything with the string “Bay” in it being a bay on a map, which is always called “Bay of X”. This kind of failure mode is going to be key to some of our later query engineering, so remember it.",
          },
        },
        {
          id: "jtMzLB0Z6c",
          type: "paragraph",
          data: {
            text: "But also - it kind of does look like Bayes. Is this because it knows who he is, or because every reverend kind of looks like this? Let’s see!",
          },
        },
        {
          id: "P56d2O2wrQ",
          type: "image",
          data: {
            url: "https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fd26593ca-fafb-4b43-9a50-983616dce1cf_680x249.png",
            caption: "",
            withBorder: false,
            withBackground: false,
            stretched: false,
          },
        },
        {
          id: "jrAxnn2k1e",
          type: "paragraph",
          data: {
            text: "“Thomas Bayes” without the “Reverend” still gives many pictures in the style of the one picture of Thomas Bayes. So I conclude that DALL-E really does know who Thomas Bayes is!",
          },
        },
        {
          id: "cJtEcohjED",
          type: "paragraph",
          data: {
            text: "Usually the way these systems work is that they have a sort of Platonic ideal of what Bayes looks like, and then they vary it a little randomly (the “temperature”) in order to be able to come up with many different takes on him. It looks like DALL-E is sufficiently un-confident in its knowledge of Bayes that the random variation can change what he looks like quite a lot.",
          },
        },
        {
          id: "1scwTfRPEB",
          type: "paragraph",
          data: {
            text: "Moving back to our stained glass window, more speculatively we’re encountering at larger scale the same problem that gave us “Bay Of Tayees”. DALL-E has seen one picture of Thomas Bayes, and many pictures of reverends in stained glass windows, and it has a Platonic ideal of what a reverend in a stained glass window looks like. Sometimes the stained glass reverend looks different from Bayes, and this is able to overpower its un-confident belief in what Bayes looks like.",
          },
        },
        {
          id: "1Q7yiATfey",
          type: "paragraph",
          data: {
            text: "I think a minimum viable change the Reverend would be having him wear all black. Let’s see what happens:",
          },
        },
        {
          id: "RhFxLGYyAP",
          type: "image",
          data: {
            url: "https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fbada9fa0-fae1-4c7f-b2e3-0b69daea2176_739x278.png",
            caption: "",
            withBorder: false,
            withBackground: false,
            stretched: false,
          },
        },
        {
          id: "zkZZXWHkni",
          type: "paragraph",
          data: { text: "Is it just me, or is that last one Elon Musk?" },
        },
        {
          id: "Eq5ChKFRgT",
          type: "paragraph",
          data: {
            text: "The quality is now much worse! Also, we’ve lost the last vestiges of stained glass as the artistic style, and now Bayes is just standing&nbsp;in front of&nbsp;a stained glass window.",
          },
        },
        {
          id: "enCJ3JpLWy",
          type: "paragraph",
          data: {
            text: "Here’s my guess about what’s going on: DALL-E probably has a&nbsp;lot&nbsp;of stock images from stock image sites in its database. Stock image sites describe their images very carefully. If a description gets too close to the kind of description a stock image site would use, then the style shifts to be more like the style stock image sites have, ie clip art. Since the style of clip art is different from the style of a stained glass window, DALL-E assumes the “stained glass window” in the description can’t be talking about the style, and must be a picture element.",
          },
        },
        {
          id: "yVdXELKQ-D",
          type: "paragraph",
          data: {
            text: "After some trial and error, I determined that the word “dressed” seems to be a big part of the clip art. Let’s try removing that and just having him be “in black”:",
          },
        },
        {
          id: "FvjoslPl3w",
          type: "image",
          data: {
            url: "https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Ff0f6ceed-f556-4225-b7bf-0d891eafe878_742x280.png",
            caption: "",
            withBorder: false,
            withBackground: false,
            stretched: false,
          },
        },
        {
          id: "4vieSAl-QN",
          type: "paragraph",
          data: {
            text: "This solves the problem, at the cost of the Reverend’s head.",
          },
        },
        {
          id: "QXhE0F5q14",
          type: "paragraph",
          data: {
            text: "I&nbsp;think&nbsp;that by focusing on his dress (even without the taboo word “dressed”), we’re telling the AI to literally focus&nbsp;on his dress&nbsp;in the image, at the cost of his head (a few images, not shown, did include the head - my selection is meant to capture a statistical tendency not to be perfectly representative).",
          },
        },
        {
          id: "FokEDG_6EX",
          type: "paragraph",
          data: {
            text: "Okay, so what if we focus on both his dress and his head, by mentioning he’s in black&nbsp;and&nbsp;has black hair?",
          },
        },
        {
          id: "41qfoIuy2G",
          type: "image",
          data: {
            url: "https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Ff105b46a-78cd-4959-af6b-bf371ba31b95_749x296.png",
            caption: "",
            withBorder: false,
            withBackground: false,
            stretched: false,
          },
        },
        {
          id: "t892s2s04b",
          type: "paragraph",
          data: { text: "Now he is a vampire. Whatever. Let’s move on." },
        },
        {
          id: "5qvJZrlK-g",
          type: "header",
          data: { text: "The Tenth Virtue: Precision", level: 3 },
        },
        {
          id: "Y5LG_IeLe8",
          type: "paragraph",
          data: {
            text: "For the virtue of Precision, I want to show Tycho Brahe, the great 17th century astronomer who measured the position and movement of the stars more precisely than any who came before him. Let’s see what we get:",
          },
        },
        {
          id: "-G576zIZuq",
          type: "image",
          data: {
            url: "https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F62894192-86fb-4f14-8143-b2669baa1108_785x306.png",
            caption: "",
            withBorder: false,
            withBackground: false,
            stretched: false,
          },
        },
        {
          id: "Jxyh6gxokZ",
          type: "paragraph",
          data: {
            text: "Stunning! Truly excellent! Problem is, nobody’s going to know that’s supposed to be Tycho Brahe.",
          },
        },
        {
          id: "_n1Quere4N",
          type: "paragraph",
          data: {
            text: "The most salient fact about Tycho Brahe is that he had a pet moose. Sometimes he would let the moose drink beer, and one time it got so drunk that it fell down the stairs and died. Anyway, I think everyone would know who this window was depicting if there was a moose in the background:",
          },
        },
        {
          id: "v51btVzA7_",
          type: "image",
          data: {
            url: "https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F5984e6aa-958c-4da4-a27e-c8eba6dd3eff_782x295.png",
            caption: "",
            withBorder: false,
            withBackground: false,
            stretched: false,
          },
        },
        {
          id: "r-AS_1gxXF",
          type: "paragraph",
          data: {
            text: "These are also great, but, I think, differently great. The stained glass has retreated from the style to become a picture element again. The style has become generally more modern.",
          },
        },
        {
          id: "jeBwZ4HV5E",
          type: "paragraph",
          data: {
            text: "I think what’s going on here is - nobody depicts a moose in stained glass. A man scrying the heavens through a telescope is exactly the sort of dignified thing people make stained glass windows about. A moose isn’t. So DALL-E loses confidence and decides you don’t&nbsp;really&nbsp;mean it should be stained glass style.",
          },
        },
        {
          id: "X6Y3ybp7pt",
          type: "paragraph",
          data: {
            text: "Also, is it just me, or does Brahe look kind of like Santa here? Is it possible that wise old man + member of the family Cervidae gets into a Santa-shaped attractor region in concept space? I decided to turn the moose into a reindeer to see what happened:",
          },
        },
        {
          id: "ObGSZtcvjM",
          type: "image",
          data: {
            url: "https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F0195f7ea-ba82-4c89-92d3-90452d905a50_781x298.png",
            caption: "",
            withBorder: false,
            withBackground: false,
            stretched: false,
          },
        },
        {
          id: "ktIFvGR31T",
          type: "paragraph",
          data: {
            text: "Yup! Now Tycho is dressed in red, wearing a red and white cap, the reindeer is flying in the central image, and the whole thing looks kind of Christmas-y (though, to be fair, still also like stained glass).",
          },
        },
        {
          id: "FeWQDaV5UI",
          type: "paragraph",
          data: {
            text: "But I really do want a picture of Tycho and his moose. By trial and error, I discovered that it works fine if you substitute Tycho with his fellow astronomer, William Herschel:",
          },
        },
        {
          id: "I9IRG3D_he",
          type: "image",
          data: {
            url: "https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F26e64e83-a87d-4a16-a32d-6f7bb593c920_785x289.png",
            caption: "",
            withBorder: false,
            withBackground: false,
            stretched: false,
          },
        },
        {
          id: "x8-0_R1dcv",
          type: "paragraph",
          data: {
            text: "This isn’t perfect - in particular, the second picture seems unsure whether the picture itself is a window, or the picture includes a window - but they all sort of work.",
          },
        },
        {
          id: "dUmW1xUziQ",
          type: "paragraph",
          data: {
            text: "It works even better if you replace “moose” with “deer”:",
          },
        },
        {
          id: "2ZO1O1kzJr",
          type: "image",
          data: {
            url: "https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Ff2a50b69-6a59-4598-a3e1-bd53c26e84f3_786x300.png",
            caption: "",
            withBorder: false,
            withBackground: false,
            stretched: false,
          },
        },
        {
          id: "nD36OAOFXG",
          type: "paragraph",
          data: {
            text: "No mortal can truly understand the mind of DALL-E, but I think that either it’s more confident in who Herschel is than who Brahe is, anchoring it to “stained glass depictions of specific historical figures who are known not to be Santa Claus”. Or possibly “Tycho Brahe” sounds kind of fanciful, like the sort of person who&nbsp;might&nbsp;secretly be Santa Claus if you dig a little deeper, but “William Herschel” sounds like a respectable English historical figure who has far too Jewish a name to be Santa.",
          },
        },
        {
          id: "75zTdl0xwM",
          type: "paragraph",
          data: {
            text: "As for deer, they’re a more common subject of classical art than moose are, so they shift the genre out of “classical Renaissance-looking stained glass window” less.",
          },
        },
        {
          id: "RqkceRZn09",
          type: "header",
          data: { text: "The Seventh Virtue: Simplicity", level: 3 },
        },
        {
          id: "bd-Y1ybuZH",
          type: "paragraph",
          data: { text: "It’s got to be Occam with his razor, right? So:" },
        },
        {
          id: "yt_hzJRpij",
          type: "image",
          data: {
            url: "https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F63170470-b383-4e7e-9673-a6f01e61d40d_792x293.png",
            caption: "",
            withBorder: false,
            withBackground: false,
            stretched: false,
          },
        },
        { id: "AB-pKyVxY5", type: "paragraph", data: { text: "GILA-WHAMM!" } },
        {
          id: "Ba0xrGtCU_",
          type: "paragraph",
          data: { text: "Okaaaay. There’s a lot to unpack here." },
        },
        {
          id: "MQvnEdkTgF",
          type: "paragraph",
          data: {
            text: "When I Google “medieval razor”, I get things that look like this:",
          },
        },
        {
          id: "0nu-dFzqIC",
          type: "image",
          data: {
            url: "https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fef8dbcca-99db-4193-ac33-a648c556399f_450x337.png",
            caption: "",
            withBorder: false,
            withBackground: false,
            stretched: false,
          },
        },
        {
          id: "kDVaDlEysK",
          type: "paragraph",
          data: {
            text: "…so that second picture is actually historically accurate and DALL-E knows more about the history of razors than I do.",
          },
        },
        {
          id: "C-O924ABVw",
          type: "paragraph",
          data: {
            text: "The knife-like razor was also used during medieval times, though probably not with the exact expression that Occam has in panel three. I think DALL-E assumes that if you are holding a sharp knife-like object, you are probably trying to kill someone. And if you are trying to kill someone with a knife, you probably have red hair and a red beard (William of Ockham didn’t look like that, but most of the pictures DALL-E generates do).",
          },
        },
        {
          id: "UX7JFzsf8z",
          type: "paragraph",
          data: {
            text: "GilaWhamm might be some kind of demented spoonerism of “William Ockham”, though I think it would also be a good name for a shaving brand:",
          },
        },
        {
          id: "dd2BbVoi2G",
          type: "paragraph",
          data: {
            text: "Think BurmaShave’s / a pricy scam?Save on cash / With GilaWhamm!",
          },
        },
        {
          id: "0EIpipuRuq",
          type: "paragraph",
          data: {
            text: "But also, these stained glass windows are a very different style than some of the earlier ones. Compare Darwin’s finches with Occam’s razor:",
          },
        },
        {
          id: "dufDovBmtZ",
          type: "image",
          data: {
            url: "https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fd0e7927e-0f92-4aff-8006-b1b5ffc45768_483x208.png",
            caption: "",
            withBorder: false,
            withBackground: false,
            stretched: false,
          },
        },
        {
          id: "vJc0bbI5BI",
          type: "paragraph",
          data: {
            text: "Darwin is done in the style of the late 1800s; Occam in the style of the Middle Ages. DALL-E knows who both these figures are, and is putting each of them in the context of their period.",
          },
        },
        {
          id: "dOwyePh4rU",
          type: "paragraph",
          data: {
            text: "You can make it even worse by calling him “William&nbsp;of&nbsp;Ockham” - Dall-E knows that “X of Y” names are medieval:",
          },
        },
        {
          id: "GFdNx7Qh88",
          type: "image",
          data: {
            url: "https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fbb873030-45f3-4362-95c6-bc9e7e0d6849_786x289.png",
            caption: "",
            withBorder: false,
            withBackground: false,
            stretched: false,
          },
        },
        {
          id: "L0KhgL1EQB",
          type: "paragraph",
          data: {
            text: "But I already chose my Darwin picture, and I want an Occam picture in the same style. What happens if I tell DALL-E that it should be Art Nouveau?",
          },
        },
        {
          id: "J-K361YZS5",
          type: "image",
          data: {
            url: "https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F6a07a6c3-af87-4359-80df-6073d3d821dc_810x287.png",
            caption: "",
            withBorder: false,
            withBackground: false,
            stretched: false,
          },
        },
        {
          id: "WGuK_S5fR3",
          type: "paragraph",
          data: {
            text: "I wish I was as sure of anything as DALL-E is as sure that William Ockham had a giant red beard. Or that “William Ockham” is spelled “THAMHHH AR”",
          },
        },
        {
          id: "xbedyUoKFB",
          type: "paragraph",
          data: {
            text: "Meeeediocre. What if I really overload it with stylistic cues?",
          },
        },
        {
          id: "yiYArCsm-K",
          type: "image",
          data: {
            url: "https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fd8b3b08f-bca1-4966-a198-6ec92627da30_799x314.png",
            caption: "",
            withBorder: false,
            withBackground: false,
            stretched: false,
          },
        },
        {
          id: "3_TwQfUUsy",
          type: "paragraph",
          data: {
            text: "WAIT NO I JUST GOT IT! The reason William of Ockham has the giant beard is because most of the corpus of images with people holding razors is SHAVING ADVERTISEMENTS!",
          },
        },
        {
          id: "77Hd7IMLRn",
          type: "paragraph",
          data: { text: "(but why red in particular?)" },
        },
        {
          id: "qW8M8F5CE6",
          type: "header",
          data: { text: "The Third Virtue: Lightness", level: 3 },
        },
        {
          id: "I0XnM3uxJk",
          type: "paragraph",
          data: { text: "Oh God, Lightness. This one was such a mess." },
        },
        {
          id: "rfvaBDvTBs",
          type: "paragraph",
          data: { text: "I wanted it to be a hot air balloon. But:" },
        },
        {
          id: "I8mWkHVlFK",
          type: "image",
          data: {
            url: "https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fc35a32fb-7274-4c52-89d9-f4f44551273f_796x316.png",
            caption: "",
            withBorder: false,
            withBackground: false,
            stretched: false,
          },
        },
        {
          id: "gmfu7UY2IX",
          type: "paragraph",
          data: {
            text: "Just as “moose” suggests Christmas, and “William of Ockham” suggests medieval times, “hot air balloon” suggests “amateur stained glass artist who wants to make something colorful and geometric and cute”.",
          },
        },
        {
          id: "AMu0WpW61q",
          type: "paragraph",
          data: {
            text: "The old “add Art Nouveau” trick didn’t help much, but after trying a lot of things, I noticed that all the previous examples had people’s names. Maybe having a historical figure grounds it in the sort of stained glass windows people made during the figure’s time period?",
          },
        },
        {
          id: "Ig1sgVjfl6",
          type: "image",
          data: {
            url: "https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F8a5ec912-da3e-4724-b65c-7818df0816fc_775x299.png",
            caption: "",
            withBorder: false,
            withBackground: false,
            stretched: false,
          },
        },
        {
          id: "4tegWtphAE",
          type: "paragraph",
          data: {
            text: "…something is happening here, but I’m not sure I like it.",
          },
        },
        {
          id: "fC_7v1XXlf",
          type: "paragraph",
          data: {
            text: "The first hot air balloon was launched by the Montgolfier brothers in 1783, maybe they can help us:",
          },
        },
        {
          id: "MWui9pZ6s1",
          type: "image",
          data: {
            url: "https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F98f6d95a-0ed1-4889-91bc-a63dfe8879ec_763x289.png",
            caption: "",
            withBorder: false,
            withBackground: false,
            stretched: false,
          },
        },
        {
          id: "lEOxsDvFyD",
          type: "paragraph",
          data: {
            text: "Quite the improvement! What if we get more specific?",
          },
        },
        {
          id: "pT2r01XfMr",
          type: "image",
          data: {
            url: "https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F7ce8bd33-5788-4e06-933c-31bc8ae90031_688x277.png",
            caption: "",
            withBorder: false,
            withBackground: false,
            stretched: false,
          },
        },
        {
          id: "WtsBcvLxNg",
          type: "paragraph",
          data: {
            text: "Yeeeeeeaaah! This is the good stuff! Does it keep getting better as I add more and more French names?",
          },
        },
        {
          id: "DwbJ-TRgTV",
          type: "image",
          data: {
            url: "https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fbcd12d10-4826-465f-8294-f472cc4147e6_778x282.png",
            caption: "",
            withBorder: false,
            withBackground: false,
            stretched: false,
          },
        },
        {
          id: "8e_V_GR-jr",
          type: "paragraph",
          data: { text: "Not really, no. But it was worth a try." },
        },
        {
          id: "wEir3zpSN5",
          type: "header",
          data: { text: "The Eleventh Virtue: Scholarship", level: 3 },
        },
        {
          id: "RyskjMXnaD",
          type: "paragraph",
          data: {
            text: "My plan for this one was Alexandra Elbakyan (the Sci-Hub woman) in a library, with the Sci-Hub mascot (a raven with a key in its mouth).",
          },
        },
        {
          id: "FQDoH0GYAk",
          type: "image",
          data: {
            url: "https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F5eb34e40-29b3-4a47-8461-8e62efa5c2ed_800x304.png",
            caption: "",
            withBorder: false,
            withBackground: false,
            stretched: false,
          },
        },
        {
          id: "STLk1s5RWB",
          type: "paragraph",
          data: { text: "For the record, Alexandra Elbakyan looks like this:" },
        },
        {
          id: "ftVAkYEBl8",
          type: "image",
          data: {
            url: "https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fd0b6579d-3f44-4e08-be82-15720890f4fc_395x335.png",
            caption: "",
            withBorder: false,
            withBackground: true,
            stretched: false,
          },
        },
        {
          id: "GhZ9Io-hyl",
          type: "paragraph",
          data: {
            text: "…and not like a Goth version of Hermione Granger. I think DALL-E assumes that anybody in the vicinity of a raven must be a Goth, and anybody in a library must be at least sort of Hermione Granger (I bet its corpus included a&nbsp;lot&nbsp;of Harry Potter fan art).",
          },
        },
        {
          id: "X_8tVijPi1",
          type: "paragraph",
          data: {
            text: "More important, we’ve completely lost the stained glass window look, in favor of the library having a window in it. I think the AI feels like if we’re talking about libraries and windows, the window&nbsp;must&nbsp;be in the library, regardless of what the query says.",
          },
        },
        {
          id: "ajJXxdF_sB",
          type: "paragraph",
          data: {
            text: "Also, none of these pictures even attempt to have a key in the raven’s mouth. Whatever, I can Photoshop that in later.",
          },
        },
        {
          id: "hRv816uY6y",
          type: "paragraph",
          data: {
            text: "Let’s try again, switching the potentially window-bearing “library” to the hopefully more neutral “bookshelves”:",
          },
        },
        {
          id: "5GPMjce8SF",
          type: "image",
          data: {
            url: "https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fe26be402-2915-4eca-9efe-a9295f9d4b30_786x292.png",
            caption: "",
            withBorder: false,
            withBackground: false,
            stretched: false,
          },
        },
        {
          id: "yv4NedNWz6",
          type: "paragraph",
          data: {
            text: "Why did the quality drop so sharply? I think that “library” suggests a certain style of maybe Harry Potter fan art which keeps up at least some minimal quality standards, and “bookshelves” doesn’t.",
          },
        },
        {
          id: "LPzR_VsEEz",
          type: "paragraph",
          data: {
            text: "Maybe Alexandra Elbakyan is part of the problem? Maybe a more proper 19th-century figure would get me a more proper 19th-century stained glass window?",
          },
        },
        {
          id: "T_mJSM01n3",
          type: "image",
          data: {
            url: "https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fe4f1c5f9-99ac-45af-86ad-217295204faa_779x306.png",
            caption: "",
            withBorder: false,
            withBackground: false,
            stretched: false,
          },
        },
        {
          id: "kB6sqgCtSt",
          type: "paragraph",
          data: {
            text: "Now we’ve doubled down on the Gothicism, and on lace collars in particular. In retrospect, I should have realized that although DALL-E has some idea who Ada Lovelace is, it’s not&nbsp;totally&nbsp;confident that’s her name, and wants to cover its bases in case she’s just someone who loves lace a lot.",
          },
        },
        {
          id: "hBCdNn8T8h",
          type: "paragraph",
          data: { text: "Let’s try overwhelming it with stylistic cues:" },
        },
        {
          id: "WfwPtZyYXf",
          type: "image",
          data: {
            url: "https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fbb282aee-f159-499a-947d-44cef273ec21_776x294.png",
            caption: "",
            withBorder: false,
            withBackground: false,
            stretched: false,
          },
        },
        {
          id: "l9xWS03gJv",
          type: "paragraph",
          data: { text: "Getting closer! Let’s redefine “overwhelm”:" },
        },
        {
          id: "C8mSMn_eUT",
          type: "image",
          data: {
            url: "https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fad4722f3-597e-482d-954b-335713fa2b88_770x314.png",
            caption: "",
            withBorder: false,
            withBackground: false,
            stretched: false,
          },
        },
        {
          id: "NGWw9Jv4b9",
          type: "paragraph",
          data: {
            text: 'Oh nooooo! We’ve gone too far!&nbsp;<a href="http://dresdencodak.com/2009/09/22/caveman-science-fiction/">We are play gods!</a>&nbsp;Abort abort abort!',
          },
        },
        {
          id: "g45QevI6b2",
          type: "header",
          data: { text: "Final Thoughts", level: 3 },
        },
        {
          id: "Eb1oP0LaG5",
          type: "paragraph",
          data: {
            text: "The most interesting thing I learned from this experience is that DALL-E can’t separate styles from subject matters (or birds from humans).",
          },
        },
        {
          id: "o1YLhHX-w_",
          type: "paragraph",
          data: {
            text: "If you ask it for a stained glass scene of something that seems stained-glass-y, it will do a good job. If you ask it for a stained glass scene of something that isn’t traditionally depicted in stained glass, it will assume it’s misunderstanding your query and do something else. And if you ask it for a scene where it’s more plausible for the stained glass to be&nbsp;in&nbsp;the scene than&nbsp;the style of&nbsp;the scene, it will put the stained glass in the scene.",
          },
        },
        {
          id: "3xFfXb2nXq",
          type: "paragraph",
          data: {
            text: "If you give it a subject that sounds like the kind of thing depicted in medieval stained glass, it will depict it in a medieval way. If you give it a subject that sounds more modern, it will depict it in a more modern way. Some topics, like Santa Claus and Hermione Granger, form vast black-hole-like attractor basins in conceptual space, dragging in anything even remotely related, and turning the scene into Christmas decorations or Harry Potter fan art.",
          },
        },
        {
          id: "SegouyerKh",
          type: "paragraph",
          data: {
            text: "Every object in a scene influences everything else in a scene. If you add a moose, the entire scene will look more like the sort of scene where mooses might appear. If you add a razor, all the characters will look a bit more like the characters in shaving ads, even if they are medieval monks.",
          },
        },
        {
          id: "EHqO8LZKyg",
          type: "paragraph",
          data: {
            text: "To get a subject depicted in a specific style, you need to balance the attention paid to style and subject. Talk too much about the style, and you’ll get the sort of scene which is typically depicted in that style, regardless of what scene you want. Talk too much about the scene, and you’ll get the sort of style that scene is usually depicted in, regardless of what style you told it. Query engineering is about figuring out ways so that each additional thing you add reinforces DALL-E’s idea of what you want, instead of detracting from it.",
          },
        },
        {
          id: "2nv_HPXABx",
          type: "paragraph",
          data: {
            text: "DALL-E is clearly capable of incredible work. That having been said, I mostly couldn’t access it. Although it can make stunning stained glass of traditional stained-glass subjects, trying to get it to do anything at all unusual degrades the style until you end up picking the best of a bad lot and being grateful for it. You can try to recover the style by adding more and more stylistic cues, but it’s really hit-or-miss, and you can never be sure you’ll get two scenes depicted in the same (or even remotely similar) styles, which kind of sinks my plan for a twelve-part window.",
          },
        },
        {
          id: "ByNn5FUMeR",
          type: "paragraph",
          data: {
            text: "I’m not going to make the mistake of saying these problems are inherent to AI art. My guess is a slightly better language model would solve most of them, and the ability to have it view other pictures (ie “a picture of X in the style of Y”) would solve the rest. For all I know, some of the larger image models have already fixed these issues. These are the sorts of problems I expect to go away with a few months of future research.",
          },
        },
        {
          id: "iSc1US5fnN",
          type: "paragraph",
          data: {
            text: "But for now, if you want robots to design your stained glass windows for you, it will be a long slog through a bunch of different queries.",
          },
        },
        {
          id: "OQVvuyLOea",
          type: "paragraph",
          data: {
            text: "(thanks to a friend who wishes to remain anonymous for letting me use their computer with DALL-E access to write this)",
          },
        },
      ],
      version: "2.24.3",
    },
  },
  {
    id: "842335f3-375a-4da6-bdb2-bdb1413292b3",
    author: "0x16496589b001541701B6806a8870C4d9d7F459EF",
    data: {
      time: 1654658348337,
      blocks: [
        {
          id: "mB2YfKA3KT",
          type: "header",
          data: { text: "Justice Creep", level: 1 },
        },
        {
          id: "4TT2D6-c0c",
          type: "paragraph",
          data: {
            text: 'Freddie deBoer says we’re a&nbsp;<a href="https://freddiedeboer.substack.com/p/planet-of-cops?s=r">planet of cops</a>. Maybe that’s why justice is eating the world.',
          },
        },
        {
          id: "Uj6vMkYUfA",
          type: "paragraph",
          data: {
            text: 'Helping the poor becomes&nbsp;<a href="https://en.wikipedia.org/wiki/Economic_justice">economic justice</a>. If they’re minorities, then it’s&nbsp;<a href="https://www.aclu.org/issues/racial-justice">racial justice</a>, itself a subspecies of&nbsp;<a href="http://everythingintheworld/">social justice</a>. Saving the environment becomes&nbsp;<a href="https://www.epa.gov/environmentaljustice">environmental justice</a>, except when it’s about climate change in which case it’s&nbsp;<a href="https://en.wikipedia.org/wiki/Climate_justice">climate justice</a>. Caring about young people is actually about fighting for&nbsp;<a href="https://www.oecd.org/gov/youth-and-intergenerational-justice/">intergenerational justice</a>. The very laws of space and time are subject to&nbsp;<a href="https://en.wikipedia.org/wiki/Spatial_justice">spatial justice</a>&nbsp;and&nbsp;<a href="https://www.cambridge.org/core/journals/journal-of-social-policy/article/abs/temporal-justice/C19E923FB188E759B9ABA9E4B6823F56">temporal justice</a>.',
          },
        },
        {
          id: "t_BONSYc1g",
          type: "paragraph",
          data: {
            text: 'I can’t find clear evidence&nbsp;<a href="https://trends.google.com/trends/explore?date=all&amp;geo=US&amp;q=%22climate%20justice%22,%22environmental%20justice%22,%22intergenerational%20justice%22">on Google Trends</a>&nbsp;that use of these terms is increasing - I just feel like I’ve been hearing them more and more often. Nor can I find a simple story behind why - it’s got to have something to do with Rawls, but I can’t trace any of these back to specific Rawlsian philosophers. Some of it seems to have something to do with Amartya Sen, who I don’t know enough about to have an opinion. But mostly it just seems to be the&nbsp;zeitgeist.',
          },
        },
        {
          id: "FWRYB3GHJS",
          type: "paragraph",
          data: {
            text: "This is mostly a semantic shift - instead of saying “we should help the poor”, you can say “we should pursue economic justice”. But different framings have slightly different implications and connotations, and it’s worth examining what connotations all this justice talk has.",
          },
        },
        {
          id: "iDXDYyUjsv",
          type: "paragraph",
          data: {
            text: "“We should help the poor” mildly suggests a friendly optimistic picture of progress. We are helpers - good people who are nice to others because that’s who we are. And the poor get helped - the world becomes a better place. Sometimes people go further: “We should save the poor” (or the whales, doesn’t matter). That makes us saviors, a rather more impressive title than helpers. And at the end of it, people/whales/whatever are saved - we’re one step closer to saving the world. Extrapolate the line out far enough, and you can dream of utopia.",
          },
        },
        {
          id: "JFYbzAU-GB",
          type: "paragraph",
          data: {
            text: "“We should pursue economic justice” suggests other assumptions. Current economic conditions are unjust. There is some particular way to make them just, or at least closer to just. We have some kind of obligation to pursue it. We are not helpers or saviors, who can pat ourselves on the back and feel heroic for leaving the world better than we found it. We are some weird superposition of criminals and cops, both responsible for breaking the moral law and responsible for restoring it, trying to redress some sort of violation. The end result isn’t utopia, it’s people getting what they deserve.",
          },
        },
        {
          id: "plUNTgyLnj",
          type: "paragraph",
          data: {
            text: "(cf. Thomas Jefferson: “I tremble for my country when I remember that God is just.”)",
          },
        },
        {
          id: "Az9LEzM0Xb",
          type: "paragraph",
          data: {
            text: "What is “climate justice”? Was the Little Ice Age unjust? What if it killed millions? Is it unjust for Mali to have a less pleasant climate than California? What if I said that there’s a really high correlation between temperature and GDP, and Mali’s awful climate is a big part of why it’s so poor? Climate justice couldn’t care less about any of this. Why not? Hard to say. Maybe because there’s no violation and no villain.",
          },
        },
        {
          id: "P7CIsOmng8",
          type: "paragraph",
          data: {
            text: 'Is that conflating the sophisticated Rawlsian sense of justice with the vulgar criminal sense? Maybe. But do you think the millions of people talking about _____ justice who have never heard of Rawls are somehow avoiding that conflation? I think it’s a&nbsp;<a href="https://slatestarcodex.com/2014/11/03/all-in-all-another-brick-in-the-motte/">motte-and-bailey</a>: justice - as it’s actually used - is catchy exactly because it&nbsp;does&nbsp;draw on criminal justice connotations. I don’t think it’s a coincidence people are talking about “climate justice” at the same time there are 311,000 Google hits for “climate villains”:',
          },
        },
        {
          id: "TPZR2dTKsC",
          type: "image",
          data: {
            url: "https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F7735a02f-d602-4ecc-9ff4-1aa66489aa7f_617x806.png",
            caption: "",
            withBorder: false,
            withBackground: false,
            stretched: false,
          },
        },
        {
          id: "I1CZBMMUK9",
          type: "paragraph",
          data: {
            text: 'Slightly edited to avoid repeats. Also, the international group for pursuing climate justice is called&nbsp;<a href="https://unfccc.int/process/bodies/supreme-bodies/conference-of-the-parties-cop">COP</a>, and this is not a coincidence because nothing is ever a coincidence.',
          },
        },
        {
          id: "1eFiJblJzE",
          type: "paragraph",
          data: {
            text: "You can’t “help the economy” or “save the poor” merely by harming rich people. Can you get “economic justice” this way? Depends who you ask, but I notice that “getting justice” for a murder involves punishing a suspect a lot more often than it involves resurrecting the victim.",
          },
        },
        {
          id: "EHw6pXZecj",
          type: "paragraph",
          data: {
            text: "There’s one last disadvantage I’m having trouble putting into words, but which I think is the most important. A narrative of helpers and saviors allows&nbsp;saints. It allows people who are genuinely good, above and beyond expectations, who rightly serve as ideals and role models for others. A narrative of justice allows, at best,&nbsp;non-criminals&nbsp;- people who haven’t broken any of the rules yet, who don’t suck quite as much as everyone else. You either stand condemned, or you’re okay so far. If it has any real role models, it’s the cop who wins Officer Of The Year, the guy who’s more sensitive to violations and more efficient in punishment than anyone else. Turn this guy into your moral model, and you’ve got, well, the planet of cops.",
          },
        },
        {
          id: "DEBfU7fElp",
          type: "paragraph",
          data: {
            text: 'Here’s a crazy theory: the moral transition from other virtues to Justice mirrors the literary transition from utopian fiction to dystopian. In Utopia, people practice virtues like Charity, Industry, and Humanity, excelling at them and making their good world even better. In Dystopia, Justice is all you can hope for. If I were in&nbsp;<a href="https://amzn.to/37DKzKB">Terra Ignota</a>, my fondest wish would be to excel in some way the same way Sniper, Apollo Mojave, and the other utopian characters excel, bringing glory to my Hive and giving its already-brilliant shine extra luster. But if I were in 1984, my fondest wish would be to bring O’Brien and the others to justice; to watch them suffer, to undo the wound in the world caused by their scheming.',
          },
        },
        {
          id: "unWnpyn6Z9",
          type: "paragraph",
          data: {
            text: "Of course, every society is somewhere in between Utopia and Dystopia, and needs values relevant to both. Justice is a useful lens that I’m not at all trying to get rid of. But when it starts annexing all the other virtues, until it’s hard to think of them except as species of Justice, I do think that’s potentially a sign of a sick society.",
          },
        },
        {
          id: "eR6woWy71L",
          type: "paragraph",
          data: {
            text: '(“A sick society? Sounds like you need some&nbsp;<a href="https://www.wcl.american.edu/impact/initiatives-programs/health/events/healthjustice2020/whatishealthjustice/">health justice</a>,&nbsp;<a href="https://www.msms.org/About-MSMS/News-Media/apply-now-for-medical-justice-in-advocacy-fellowship">medical justice</a>, and&nbsp;<a href="https://www.thealchemistskitchen.com/pages/wellnessjustice">wellness justice</a>!” —— “You’re not helping!”)',
          },
        },
      ],
      version: "2.24.3",
    },
  },
  //Shoshanna
  {
    id: "00c786ba-4057-49ee-9b8e-5b4b7133a6d9",
    author: "0x56611e15b75aBE1818827747F933Bc132f3C54c3",
    data: {
      time: 1654658627467,
      blocks: [
        {
          id: "ReXOK9Kej9",
          type: "header",
          data: {
            text: "It’s not that we’ve failed to rein in Facebook and Google. We’ve not even tried",
            level: 1,
          },
        },
        {
          id: "bYukp_KR1I",
          type: "paragraph",
          data: {
            text: "The tech giants use our data not only to predict our behaviour but to change it. But we can resist this attack on democracy",
          },
        },
        {
          id: "03y9KZu5qK",
          type: "image",
          data: {
            url: "https://i.guim.co.uk/img/media/4acb40dbb466937e6b15468157d9431d1f0043a8/0_0_2560_1536/master/2560.jpg?width=465&amp;quality=45&amp;auto=format&amp;fit=max&amp;dpr=2&amp;s=78695529305404f6ee32d0c29e1a1c17",
            caption: "",
            withBorder: false,
            withBackground: false,
            stretched: false,
          },
        },
        {
          id: "CjXKUXhhE8",
          type: "paragraph",
          data: {
            text: "Illustration by Matt KenyonTue 2 Jul 2019 06.00 BST306",
          },
        },
        {
          id: "yxa2uv-f7r",
          type: "paragraph",
          data: {
            text: 'In a BBC interview last week, Facebook’s vice-president,&nbsp;<a href="https://www.bbc.co.uk/news/uk-48740231">Nick Clegg</a>, surprised viewers by calling for new “rules of the road” on privacy, data collection and other company practices that have attracted heavy criticism during the past year. “It’s not for private companies … to come up with those rules,” he insisted. “It is for democratic politicians in the democratic world to do so.”',
          },
        },
        {
          id: "ZEA7C3apHJ",
          type: "paragraph",
          data: {
            text: "Facebook’s response would be to adopt a “mature role”, not “shunning” but “advocating” the new rules. For a company that has fiercely resisted new laws, Clegg’s message aimed to persuade us that the page had turned. Yet his remarks sounded like Newspeak, as if to obscure ugly facts.",
          },
        },
        {
          id: "12cfwl70sN",
          type: "paragraph",
          data: {
            text: "A few weeks earlier Facebook’s chiefs, Mark Zuckerberg and Sheryl Sandberg, snubbed a subpoena from the Canadian parliament to appear for questioning. Clegg then showcased Silicon Valley’s standard defence against the rule of law – warning that any restrictions resulting from “tech-lash” risked making it “almost impossible for tech to innovate properly”, and summoning the spectre of Chinese ascendance. “I can predict that … we will have tech domination from a country with wholly different sets of values.”",
          },
        },
        {
          id: "prINrp_v1k",
          type: "paragraph",
          data: {
            text: 'Both Facebook and Google have long relied on this misguided formula to shield them from law. In 2011, the former Google CEO Eric Schmidt warned that government overreach would foolishly constrain innovation,&nbsp;<a href="https://www.businessinsider.com/eric-schmidt-google-eg8-2011-5?r=US&amp;IR=T">“We’ll move much faster than any government.”</a>Then, in 2013, Google co-founder&nbsp;<a href="https://www.businessinsider.com/google-ceo-larry-page-wants-a-place-for-experiments-2013-5?r=US&amp;IR=T">Larry Page</a>&nbsp;complained that “old institutions like the law” impede the company’s freedom to “build really great things”. This rhetoric is a hand-me-down from another era when “Gilded Age” barons in the late-19th century United States insisted that there was no need for law when one had the “law of evolution”, the “laws of capital” and the “laws of industrial society”. As the historian David Nasaw put it, the millionaires preached that “democracy had its limits, beyond which voters and their elected representatives dared not trespass lest economic calamity befall the nation”.',
          },
        },
        {
          id: "rxeBCryRYJ",
          type: "paragraph",
          data: {
            text: "Surveillance capitalism is an economic logic that has hijacked the digital for its own purposes",
          },
        },
        {
          id: "wHGocsqc5s",
          type: "paragraph",
          data: {
            text: 'The tech companies’ innovation rhetoric effectively blinded users and lawmakers for many years. Facebook and Google were regarded as innovative companies that sometimes made dreadful mistakes at the expense of our privacy. Since then the picture has sharpened. It’s easier to see that what we thought of as mistakes actually were the innovations –&nbsp;<a href="https://www.theguardian.com/technology/google-glass">Google Glass</a>, Facebook giving private information to developers, and more. Each of these was an expression of a larger breakthrough: the invention of what I call surveillance capitalism.',
          },
        },
        {
          id: "tgO3Gsh1jL",
          type: "paragraph",
          data: {
            text: "Surveillance capitalism is not the same as digital technology. It is an economic logic that has hijacked the digital for its own purposes. The logic of surveillance capitalism begins with unilaterally claiming private human experience as free raw material for production and sales. It wants your walk in the park, online browsing and communications, hunt for a parking space, voice at the breakfast table …",
          },
        },
        {
          id: "szDdr7m3jj",
          type: "paragraph",
          data: {
            text: 'These experiences are translated into behavioural data. Some of this data may be applied to product or service improvements, and the rest is valued for its predictive power. These flows of predictive data are fed into computational products that predict human behaviour. A leaked Facebook document in 2018 describes its machine-learning system that “ingests trillions of data points every day” and produces&nbsp;<a href="https://www.ourcommons.ca/Content/Committee/421/ETHI/Brief/BR10573725/br-external/ZuboffShoshana-e.pdf">“more than 6m predictions per second”</a>. Finally, these prediction products are sold to business customers in markets that trade in human futures.',
          },
        },
        {
          id: "c0fdmD6Xae",
          type: "paragraph",
          data: {
            text: "This economic logic was first invented at Google in the context of online targeted ads where the “clickthrough rate” was the first globally successful prediction product, and targeted ad markets were the first markets to specialise in human futures. During the first years of discovery and invention from 2000 to 2004, Google’s revenues increased by 3,590%. Right from the start it was understood that the only way to protect these revenues was to hide the operations that produce them, keeping “users” in the dark with practices designed to be undetectable and indecipherable.",
          },
        },
        {
          id: "MzjM8xabfn",
          type: "paragraph",
          data: {
            text: "Surveillance capitalism migrated to Facebook, Microsoft and Amazon – and became the default option in most of the tech sector. It now advances across the economy from insurance, to retail, finance, health, education and more, including every “smart” product and “personalised” service.",
          },
        },
        {
          id: "J4ENo-Y3Q6",
          type: "paragraph",
          data: {
            text: "Markets in human futures compete on the quality of predictions. This competition to sell certainty produces the economic imperatives that drive business practices. Ultimately, it has become clear that the most predictive data comes from intervening in our lives to tune and herd our behaviour towards the most profitable outcomes. Data scientists describe this as a shift from monitoring to actuation. The idea is not only to know our behaviour but also to shape it in ways that can turn predictions into guarantees. It is no longer enough to automate information flows about us; the goal now is to automate us. As one data scientist explained to me: “We can engineer the context around a particular behaviour and force change that way … We are learning how to write the music, and then we let the music make them dance.”",
          },
        },
        {
          id: "FFhrrBamUV",
          type: "paragraph",
          data: {
            text: "These economic imperatives erode democracy from below and from above. At the grassroots, systems are designed to evade individual awareness, undermining human agency, eliminating decision rights, diminishing autonomy and depriving us of the right to combat. The big picture reveals extreme concentrations of knowledge and power. Surveillance capitalists know everything about us, but we know little about them. Their knowledge is used for others’ interests, not our own. Surveillance capitalism thrives in the absence of law. In a way, this is good news. We have not failed to rein in this rogue capitalism; we’ve not yet tried. More good news: our societies successfully confronted destructive forms of capitalism in the past, asserting new laws that tethered capitalism to the real needs of people. Democracy ended the Gilded Age. We have every reason to believe that we can be successful again.",
          },
        },
        {
          id: "NZUScRF9-l",
          type: "image",
          data: {
            url: "https://i.guim.co.uk/img/media/c5bf3c9d8db1edbe7be326b45090b10b5a6bcf3c/0_137_4203_2522/master/4203.jpg?width=460&amp;quality=85&amp;auto=format&amp;fit=max&amp;s=c26f007e834970b9663dce7da16f0f10",
            caption: "",
            withBorder: false,
            withBackground: true,
            stretched: false,
          },
        },
        {
          id: "f0fPu2udUm",
          type: "paragraph",
          data: {
            text: "Bringing big tech to heel: how do we take back control of the internet?Read more",
          },
        },
        {
          id: "DKaTce2S6O",
          type: "paragraph",
          data: {
            text: "The next great regulatory vision is likely to be framed by warriors for a democracy under threat: lawmakers, citizens and specialists, allied in the knowledge that only democracy can impose the people’s interests through law and regulation. The question is, what kind of regulation? Are existing approaches to privacy and antitrust law the answer? Both are critical but neither is adequate.",
          },
        },
        {
          id: "mqNBCIRxug",
          type: "paragraph",
          data: {
            text: "One example is privacy law’s call for “data ownership”. It’s a misleading notion because it legitimates the unilateral taking of human experience – your face, your phone, your refrigerator, your emotions – for translation into data in the first place. Even if we achieve “ownership” of the data we have provided to a company like Facebook, we will not achieve “ownership” of the predictions gleaned from it, or the fate of those products in its prediction markets. Data ownership is an individual solution when collective solutions are required. We will never own those 6m predictions produced each second. Surveillance capitalists know this. Clegg knows this. That is why they can tolerate discussions of “data ownership” and publicly invite privacy regulation.",
          },
        },
        {
          id: "fK6Cu87rXi",
          type: "paragraph",
          data: {
            text: "What should lawmakers do? First, interrupt and outlaw surveillance capitalism’s data supplies and revenue flows. This means, at the front end, outlawing the secret theft of private experience. At the back end, we can disrupt revenues by outlawing markets that trade in human futures knowing that their imperatives are fundamentally anti-democratic. We already outlaw markets that traffic in slavery or human organs.",
          },
        },
        {
          id: "IIuz6iEcaa",
          type: "paragraph",
          data: {
            text: "Second, research over the past decade suggests that when “users” are informed of surveillance capitalism’s backstage operations, they want protection, and they want alternatives. We need laws and regulation designed to advantage companies that want to break with surveillance capitalism. Competitors that align themselves with the actual needs of people and the norms of a market democracy are likely to attract just about every person on Earth as their customer.",
          },
        },
        {
          id: "x-hYKN6mB1",
          type: "paragraph",
          data: {
            text: "Third, lawmakers will need to support new forms of collective action, just as nearly a century ago workers won legal protection for their rights to organise, to bargain collectively and to strike. Lawmakers need citizen support, and citizens need the leadership of their elected officials.",
          },
        },
        {
          id: "AXhsVdnQ7x",
          type: "paragraph",
          data: {
            text: "Surveillance capitalists are rich and powerful, but they are not invulnerable. They fear law. They fear lawmakers. They fear citizens who insist on a different path. Both groups are bound together in the work of rescuing the digital future for democracy. Mr Clegg, be careful what you wish for.",
          },
        },
      ],
      version: "2.24.3",
    },
  },

  {
    id: "b4770de6-2bfd-4830-bb86-0b327ca96273",
    author: "0x56611e15b75aBE1818827747F933Bc132f3C54c3",
    data: {
      time: 1654658841182,
      blocks: [
        {
          id: "wqKe9DLF2-",
          type: "header",
          data: {
            text: "The Surveillance Threat Is Not What Orwell Imagined",
            level: 1,
          },
        },
        {
          id: "i_0SsJu_Pv",
          type: "image",
          data: {
            url: "https://api.time.com/wp-content/uploads/2019/06/george-orwell-1984-surveillance-big-brother.jpeg?quality=85&amp;w=1400",
            caption: "",
            withBorder: false,
            withBackground: false,
            stretched: false,
          },
        },
        {
          id: "nzPJETo7QA",
          type: "paragraph",
          data: {
            text: 'Orwell\'s1984was published on June 8, 1949.Houghton Mifflin HarcourtIDEASBY&nbsp;<a href="https://time.com/author/shoshana-zuboff/">SHOSHANA ZUBOFF</a>JUNE 6, 2019 12:11 PM EDT',
          },
        },
        {
          id: "iPoWeLpA0j",
          type: "paragraph",
          data: {
            text: 'Zuboff is the author of three major books, each signaling a new epoch in technological society. Her most recent work is&nbsp;<a href="https://www.amazon.com/Age-Surveillance-Capitalism-Future-Frontier/dp/1610395697?ie=UTF8&amp;camp=1789&amp;creative=9325&amp;linkCode=as2&amp;creativeASIN=1610395697&amp;tag=timecom-20&amp;ascsubtag=dc4a326e70c6f4e4d4d5046ea44ae72e" target="_blank" rel="nofollow">The Age of Surveillance Capitalism</a>. She is the Charles Edward Wilson Professor Emeritus Harvard Business School and a faculty associate at the Harvard Kennedy School’s Carr Center for Human Rights.',
          },
        },
        {
          id: "GLRiE4Romv",
          type: "paragraph",
          data: {
            text: 'George Orwell repeatedly delayed crucial medical care to complete&nbsp;<a href="https://www.amazon.com/gp/product/0451524934/ref=as_li_qf_asin_il_tl?ie=UTF8&amp;tag=time037-20&amp;creative=9325&amp;linkCode=as2&amp;creativeASIN=0451524934&amp;linkId=802120e09e40ec7b81c1b2f470fd1e49" target="_blank">1984</a>,&nbsp;the book still synonymous with our worst fears of a totalitarian future — published 70 years ago this month. Half a year after his novel’s debut, he was dead. Because he believed everything was at stake, he forfeited everything, including a young son, a devoted sister, a wife of three months and a grateful public that canonized his prescient and pressing novel. But today we are haunted by a question: Did George Orwell die in vain?',
          },
        },
        {
          id: "kSaP9Nve0F",
          type: "paragraph",
          data: {
            text: "Orwell sought to awaken British and U.S. societies to the totalitarian dangers that threatened democracy even after the Nazi defeat. In letters before and after his novel’s completion, Orwell urged “constant criticism,” warning that any “immunity” to totalitarianism must not be taken for granted: “Totalitarianism, if not fought against, could triumph anywhere.”",
          },
        },
        {
          id: "XTFNxry9Da",
          type: "paragraph",
          data: {
            text: "State of the Art: 19840 seconds of 3 minutes, 2 secondsVolume 90%",
          },
        },
        {
          id: "aKUME1Cr1I",
          type: "paragraph",
          data: {
            text: "Since&nbsp;1984’s publication, we have assumed with Orwell that the dangers of mass surveillance and social control could only originate in the state. We were wrong. This error has left us unprotected from an equally pernicious but profoundly different threat to freedom and democracy.",
          },
        },
        {
          id: "zBDVsvKNLI",
          type: "paragraph",
          data: {
            text: "For 19 years, private companies practicing an unprecedented economic logic that I call&nbsp;surveillance capitalism&nbsp;have hijacked the Internet and its digital technologies. Invented at Google beginning in 2000, this new economics covertly claims private human experience as free raw material for translation into behavioral data. Some data are used to improve services, but the rest are turned into computational products that predict your behavior. These predictions are traded in a new futures market, where surveillance capitalists sell certainty to businesses determined to know what we will do next. This logic was first applied to finding which ads online will attract our interest, but similar practices now reside in nearly every sector — insurance, retail, health, education, finance and more — where personal experience is secretly captured and computed for behavioral predictions. By now it is no exaggeration to say that the Internet is owned and operated by private surveillance capital.",
          },
        },
        {
          id: "ONOANjxVud",
          type: "paragraph",
          data: {
            text: 'In the competition for certainty, surveillance capitalists learned that the most predictive data come not just from monitoring but also from modifying and directing behavior. For example, by 2013, Facebook had learned how to engineer subliminal cues on its pages to shape users’ real-world actions and feelings. Later, these methods were combined with real-time emotional analyses, allowing marketers to cue behavior at the moment of maximum vulnerability. These inventions were celebrated for being both effective and undetectable.&nbsp;<a href="https://time.com/5205314/facebook-cambridge-analytica-breach/">Cambridge Analytica</a>&nbsp;later demonstrated that the same methods could be employed to shape political rather than commercial behavior.',
          },
        },
        {
          id: "3CKS7VrfHW",
          type: "paragraph",
          data: {
            text: 'Augmented reality game&nbsp;<a href="https://time.com/4400791/pokemon-go-iphone-android-nintendo/">Pokémon Go</a>, developed at Google and released in 2016 by a Google spinoff, took the challenge of mass behavioral modification to a new level. Business customers from McDonalds to Starbucks paid for “footfall” to their establishments on a “cost per visit” basis, just as online advertisers pay for “cost per click.” The game engineers learned how to herd people through their towns and cities to destinations that contribute profits, all of it without game players’ knowledge.',
          },
        },
        {
          id: "7K2bjDOE3x",
          type: "paragraph",
          data: {
            text: "Democracy slept while surveillance capitalism flourished. As a result, surveillance capitalists now wield a uniquely 21st century quality of power, as unprecedented as totalitarianism was nearly a century ago. I call it&nbsp;instrumentarian power,&nbsp;because it works its will through the ubiquitous architecture of digital instrumentation. Rather than an intimate Big Brother that uses murder and terror to possess each soul from the inside out, these digital networks are a Big Other: impersonal systems trained to monitor and shape our actions remotely, unimpeded by law.",
          },
        },
        {
          id: "7TQ_aXqQoN",
          type: "paragraph",
          data: {
            text: "Instrumentarian power delivers our futures to surveillance capitalism’s interests, yet because this new power does not claim our bodies through violence and fear, we undervalue its effects and lower our guard. Instrumentarian power does not want to break us; it simply wants to automate us. To this end, it exiles us from our own behavior. It does not care what we think, feel or do, as long as we think, feel and do things in ways that are accessible to Big Other’s billions of sensate, computational, actuating eyes and ears.",
          },
        },
        {
          id: "6XL80T6gRM",
          type: "paragraph",
          data: {
            text: "Instrumentarian power challenges democracy. Big Other knows everything, while its operations remain hidden, eliminating our right to resist. This undermines human autonomy and self-determination, without which democracy cannot survive. Instrumentarian power creates unprecedented asymmetries of knowledge, once associated with pre-modern times. Big Other’s knowledge is&nbsp;about&nbsp;us, but it is not used&nbsp;for&nbsp;us. Big Other knows everything about&nbsp;us, while we know almost nothing about&nbsp;it. This imbalance of power is not illegal, because we do not yet have laws to control it, but it is fundamentally anti-democratic.",
          },
        },
        {
          id: "bnYLt7m6OF",
          type: "paragraph",
          data: {
            text: "Surveillance capitalists claim that their methods are inevitable consequences of digital technologies. This is false. It’s easy to imagine the digital future without surveillance capitalism, but impossible to imagine surveillance capitalism without digital technologies.",
          },
        },
      ],
      version: "2.24.3",
    },
  },
];

let draft;

module.exports = {
  users,
  articles,
  draft,
};
