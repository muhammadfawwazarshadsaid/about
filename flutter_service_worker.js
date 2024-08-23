'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "be3d09bf8b0b70cdd5da636264ae81d8",
"firebase-debug.log": "4cbd9aca58229b4e5530fb76d39d0e09",
"version.json": "7df3c1b366aaeeb76d6cb458d5aa1e98",
"index.html": "34942580ed3e18694939f41561ea34bf",
"/": "34942580ed3e18694939f41561ea34bf",
"main.dart.js": "7d941096f35a7cf4cfa82a3613a7640c",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"README.md": "353ca80f2d79bdbe9e47dbbe077a1940",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a409cd6e703758ca5a3157c1702c8ce5",
".git/config": "ce455d575b16d551ef4e19d97cc1ce0f",
".git/objects/0d/258ec7caf2a28bc437915422099edd228c8d4c": "cecf86149ae9de316fe427bfb01d3441",
".git/objects/92/5d9ce1e7d44971816aa03011bdfb78e56dc9a4": "fc5263f75daabb886bdacd6eee9aaf26",
".git/objects/66/36dee689d2b3fa89a264085102bdd4101e9375": "d2e7836ccf1d4c6d6ec95ef37c01a535",
".git/objects/66/76f282c131d84ad8ba48637fb95663a9130e70": "2c9d0af99c77429cb55899e56d695b96",
".git/objects/68/be197b22cbe655afaefe3db22ad512902bc05b": "86cb11155ae042c9d4ac47e72378dbdf",
".git/objects/68/a60c0c842df1f4402d54887ff1cbb8664d7891": "119d08277ea156331911216a2596f6b6",
".git/objects/3b/a85bfbdda12174d7a86b2062c1e6c2263601a4": "520d9b6733d6fd93b262218a7e7de64f",
".git/objects/03/e736613a750cdd8d4f54bca28844e2d13257cb": "bd840ac16c281d81f004822f55e1db62",
".git/objects/03/87b510d017c8c8575331b223248d930d1480af": "377e57731d31de3158478e9827b184f2",
".git/objects/9e/40ec5e00428a556f4cbd04fa5f7b56d8982482": "9371c38fd8f728e7ec0f724f284e55ad",
".git/objects/04/070cff5a974b56de8518404639d1cb817361c6": "484c4d85490554b2564809ef679a6044",
".git/objects/04/040c3a2f1a62d4f52270a55e834c490e7ed6c6": "22c94c9ab82141888b27a96531a8531c",
".git/objects/6a/044351ed916bfb106346afd8a694206c3f7156": "22e9d7187ffea36c26e552c8914ca497",
".git/objects/6a/6f78fc777d847f21b6e26655e17801c975880f": "15ded21cdc44e34b9b34f8dab6c3a3f8",
".git/objects/32/c965f3ccd30be07561674c5730287adf3f8595": "111d0e44382c2ffa262545e7e6ccc842",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/32/1a831f11a7eb1cb20ae059b5bb4ba02253f519": "9d4418b9e3e3adfbc4efe1d50f699b75",
".git/objects/94/26d29fbba37b189e4a5445c0dae1cd790bcdc8": "05089461df2252be75216f63d8e5cc87",
".git/objects/60/05d82bfc2142be5aeb4c01e379e28cc2e801c8": "cd99b6b12a67a22cdc7672393a75c657",
".git/objects/60/9cbcc2c1197c07080466a5d184404e9c8ea41d": "0abf036664c9b411922e6adedd98d9ad",
".git/objects/9d/6b304d19e2e9f57d520dba87b65dbb0e054dca": "edbd266551e2f45e47d2983dfcac70cb",
".git/objects/a3/c14b4fd2a451464162b3b30ad3c5974f853f91": "c891beb5fdaf31ed3293fc843da55be1",
".git/objects/ac/7527abf02ae765ab4d3ca1eb540d45164af9e2": "15bb62248e6ea0e9a9ca11387c09bd6c",
".git/objects/ac/2392ef586f70bb1ee56d740a41362dbfdc26e5": "9c29d2e3507935baf1102b535b51eda7",
".git/objects/b3/f455d33fcc5b74862eda201a94aa62040576c0": "14bd2c78dc591b7209b42384afa01cb2",
".git/objects/df/7093608a7eb6173529ce9eeeb4d46e3a8290e5": "151239f49193115888a1b60c3a47cefb",
".git/objects/a2/c2c501d92cade4609fbff2a20d058036a0f07d": "5799cad65f96fe00122233a5625d5041",
".git/objects/bd/158b039c3cae7a2f6a189825e5ae7bc2c1a1de": "7f1df744255a7f26dc0406b08a642dba",
".git/objects/d6/fef042c109ef0a95ae00f842613dd654ecec2f": "16cfbeb2499df5a7cd224a0f07b4f3a3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/36bcc2427a84e29e61ea7b634024072c04b206": "08cd2a4fd07be093532cedca2675ee60",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/331b1cb79559cab5db3981154427075b5fae6b": "fe5c90493b2851b8ee25e9e8904bbc27",
".git/objects/ee/d76fae11abfa619d6d94f8b4cc92ae3dc91886": "8fb4afd9df033661458aa9fe8a5680ab",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/b638a95d1b6643c1e0fb0e1520284c7cecae5e": "8d6143ba53c8819167d24df9463e299b",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "04eb9fcdf209b67f396e5ab84cb956e2",
".git/objects/e4/e634ccb761809085248024654d9873f1f8f40b": "e9e83efe7e129e85754ad66df194fc5d",
".git/objects/c8/1cce97141dea73e01292dcbb8af725d63d95a4": "cb379bf131b5d6993b2a989ef8d9a90c",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/df24878dda8de6b8b800c69db2db6ea1fb29c7": "9cfeed05b9e4f043f41837efa4968179",
".git/objects/27/0cc979a9e5b95da7647dc24e5699bb093eda5d": "762c662038ecf91deb21992a20325a9c",
".git/objects/29/d030bd2c76602350850a0c87c3626fcdad4f60": "bb4e025822c4f28be021d7696edb04af",
".git/objects/29/6f1b745e6bf30cf11eb59e615698fe7e6c6a9f": "b3eedc64202d2ec4e52f2a6575dacffd",
".git/objects/16/5da67191b73406e15fc3e6cf7cda3c195dc735": "86cfac30d97fb45bba2f4417782645d6",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/73/9b5d399f925f540d6d4a7ce1f219c721b4b61c": "d363cda1f539dae02a705ee97ec3641a",
".git/objects/80/9c15045b54fceca1fa8db625f0967aa8c8e388": "babe318f8d8aeb8244a8ab55c1b871db",
".git/objects/74/c726e32781bc2c0a83170f6800c0ef4cb9ddcf": "69a43282cb8038fd0577dc0529e5d6cb",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/7a1ce56d0dd6fba0da622743de81af6155915e": "8a687d7e46bc1a65a0ad9d5c1f117a16",
".git/objects/86/76425a61b90afb1b207fb8a5bec6a273943ebc": "70fffe28802a1e2d3b437e22be49dc51",
".git/objects/2f/4bb29d56d81e25ef5e07773cb9bb840f9f6f9f": "dddbf23e00f1c3bc3fbc15b66f2267fb",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/9f/84d3e272ccbc2353792a16624056e559040474": "81cd3d1ac01279457491dc176f867095",
".git/objects/6b/cdcc27f22e001e46defdfd9e23f224ff65dd67": "624b5324c1f5198f7f6ede95410d5b7b",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6b/b7de03ae0f0c404a7cbc86e9e63f58c425b779": "68f68d66bd86d4c00254cbec88982905",
".git/objects/00/d7dc5ba24338655f4f9b01d32e9b834cf5216a": "4f883b4a06ee44c635f1fa30a7cd1c39",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "79a44d8578cc18e3add64aa6a97f0da0",
".git/objects/31/e717953c11403b9a1aaaf2b62e3ee1e7924e68": "4d578e1de747782438ca0eead2179245",
".git/objects/65/140a5fcfc43e8c0745d8f1322e3fb446662a82": "c2eec6067207582561e5ade6bec80815",
".git/objects/3a/260ef820ca10e6d1a4f3a999739f58b9d7a4a6": "b2e9e435688bb621a599cb32d0c237bc",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/30/7385899538105f9c94270acc2355b5429acf7f": "4492e4b738c1b5ca718c523bdcd7853c",
".git/objects/5e/a15b3fd46f5f2e12ac4eef60115d485d69b190": "3d76bb215b856810beb1fdf17a49220a",
".git/objects/5e/2d7a4ca9bfac5ca0690e3e0ffed97ecc2ef7d2": "9319156e5afbe702745eeada41cfa644",
".git/objects/08/e5d253d55cb343bae7b7e3800516262daaad33": "31c4bdc570253a3a42a427719010d416",
".git/objects/08/66f6d51422e726ee07770898e5b7c4d20cc14e": "f9dd6d210b03b333b6e7d6ee8b31957b",
".git/objects/6d/39019aeeb4f8d74453d940796bdfe7a65806f2": "b35ea6e4c15ff1bd6f856c1f670416cc",
".git/objects/52/a2a4836ba181687daeb1107b5c5af6be983be7": "7eafc37fdb92d24312c679b35fd0ab50",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/bf/977fdf8f2c2bb094f94e7b7f048e22091b7cf7": "a3bc7c00e5997c8db4032622b7c7ee53",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b8/bf2a6465476329cb16a701ff53a1b9ed6ab043": "6f5bf823893a2ebf817904e8840a4e34",
".git/objects/d5/d4c9f55e83178f625456dd3e67cb13a728865d": "8c7d746395c2598697ac55b611d8f263",
".git/objects/aa/8f197aa313aa4d72907f9d0be87f6e7b69f8c4": "804d7b9f460de33ccb60b7c885824e3e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/176606232da5b518592ab98b05aceedcccd41d": "5e077976ae07e3478b9fd3243f732120",
".git/objects/a8/4a321c17032948cd335ea5039e0ad50f742919": "3675e63e443d54a2a9e125c11d3357fd",
".git/objects/a6/ef744934b3bc4e7d7b6a13753da1a7aa5a218c": "3ed6111b67e5a97f06733f49f2fceb94",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/19faf12318cb4ee527a465565ef409bb14ed0e": "3808433a5d8d62aeb42890390f4bf71f",
".git/objects/ea/95584ca5288637d7d925b9dddb8226fd9c4c5c": "bb6d199bb53c4d968af6de2b51566808",
".git/objects/ff/ef096cf60723646d84e3a9cca889ec3e6597de": "e2e9de2ddd3f1a5a22b4f3af72036235",
".git/objects/e7/4940e24389c921433e28e5927562e67460bd5a": "caeda771011fc98b1bc4f220a169aedf",
".git/objects/e7/6ec69a650f1323fe9af6dafc55628ca1afc7e1": "cdc851a64d802b21a07c9e1291833911",
".git/objects/cb/74689bdf0ba602d3d7d6d9cd4e081cb5bfc077": "23de3a4a19fc2b0779644a05922278b0",
".git/objects/ce/58c99c3e098c0d487e3fd889d4cb14d2f79770": "9dc42ddc056a3321bd85187f61b0e323",
".git/objects/2d/a2f138e30defec26c3145edf3a949c33f112ab": "a3ec43f912b643a3fb1096091872bbae",
".git/objects/2d/7f992b2afbf730f1d1b595e4c696486546d177": "e4aab8545d7a6aeb23455723f6da6f1d",
".git/objects/1e/8add037a5b681dac66c96b5389f9bebca4460f": "09553ba991c45f486e76d1df0ad92a06",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/c0f995ee64396f29a3d9ef283b5050f45d6e0f": "aa69ae6032786d8c915bfc9bd1c64c28",
".git/objects/40/3129c486220bbc88f628f65e433558c393fbe4": "88f1dc312ec75e6db284455d3e677148",
".git/objects/2b/f24fc2baf2daa72eaa21e0fd122375b08d7389": "d26a10f7eceb59a2ce1a1b38f47fa17a",
".git/objects/7a/f935e106ee4f9bbb5a093d7fcf32cd5549c6a1": "8c2b0e6a4cc5ec0ede347874373e38ae",
".git/objects/7a/fa121a07e0e93ec7b4f9108cbfa5e3c2a143a7": "568644e1c480223ba87bf7578e278878",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/25/e2d9f56b11cd362337faf0a654f6948486b5b2": "7ae9e9e0b293c40853264d5667e2c7a8",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8fc813754e96f50a5772a42dc20e147e",
".git/logs/refs/heads/main": "1f22af2dd956b0dd5a00ea2e3b5dfde5",
".git/logs/refs/remotes/origin/main": "9e6c0d62929d62f4e6fc7ae448367efb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "50be3facd1c0440d98a815cddc54fe18",
".git/refs/remotes/origin/main": "50be3facd1c0440d98a815cddc54fe18",
".git/index": "38a4d6f1d50a6a35776b97fe2655dcd1",
".git/COMMIT_EDITMSG": "dd638c80afd6c7c58e0bb55b472b2a0b",
".git/FETCH_HEAD": "bfb6621ec0bcbac264e3a29b2343dbf8",
"assets/AssetManifest.json": "3213f5865c1b0da98125ed295d3c4c9a",
"assets/NOTICES": "88b4b6fd79814cc67b3fc76562174c2f",
"assets/FontManifest.json": "ea084dce6a31689d1a83740c083f4972",
"assets/AssetManifest.bin.json": "fa5c6aff3fe0b7bd92996c8b082a2f9a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "caa59ab5298a1aa1688eba1211ad9f16",
"assets/fonts/Poppins-ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/fonts/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/fonts/MaterialIcons-Regular.otf": "f45f9b0438f11078073fbd3e91756e71",
"assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/fonts/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/fonts/Poppins-Thin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/decoration/decoration-1.png": "678206ab8c692f1a286a3812715d978d",
"assets/assets/decoration/decoration-2.png": "22df198e5daf09403c394478ce54e242",
"assets/assets/decoration/Perekaman%2520Layar%2520Aug%252015.mov": "3faa953e941c9c5d1e601f501bb0367c",
"assets/assets/decoration/decoration-3.png": "153cd2efd13f8ad43cb5f3f064f8db8d",
"assets/assets/decoration/decoration-6.png": "6b03e14b372ef59b70cdd0551414299a",
"assets/assets/decoration/decoration-4.png": "adbc13bc1f412012b070f2fc955c3406",
"assets/assets/decoration/decoration-5.png": "002585f1627f671ccad02b141b2450a9",
"assets/assets/decoration/decoration-1.gif": "63fc720b2fb1af817c7f66fb63b2f052",
"assets/assets/decoration/decoration-2.gif": "2bc26f3a8546e5caccb03ce801628ec7",
"assets/assets/decoration/decoration-3.gif": "f9a57e382aa36a711408a21c0af9e8fe",
"assets/assets/icon/download.png": "6e5aea56c728564098ebe5059cdc7a12",
"assets/assets/icon/mail.png": "7d43274d30bee6624d16c567aa3be27c",
"assets/assets/icon/chevron-right.png": "02e870c569703807725c18019926a067",
"assets/assets/icon/download.png.png": "6e5aea56c728564098ebe5059cdc7a12",
"assets/assets/icon/chevron-up.png.png": "5b85966184480a5146294fe0deccde17",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
