/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
});

module.exports = withPWA({
  // config
});

//

// const withPlugins = require("next-compose-plugins");
// const runtimeCaching = require("next-pwa/cache");

// const withPWA = require("next-pwa");

// const nextConfig = {
//   reactStrictMode: true,
// };

// module.exports = withPlugins(
//   [
//     [
//       withPWA,
//       {
//         pwa: {
//           dest: "public",
//           register: true,
//           skipWaiting: true,
//           runtimeCaching,
//           buildExcludes: [/middleware-manifest.json$/],
//         },
//       },
//     ],
//     // 추가 플러그인 작성
//   ],
//   nextConfig
// );

// const withPWA = require("next-pwa")({
//   dest: "public",
//   register: true,
//   skipWaiting: true,
//   // disable: process.env.NODE_ENV === "development",
//   fallbacks: {
//     image: "/offline.png",
//     document: "/pages/offline-2.tsx",
//   },
// });

// module.exports = withPWA({
//   dest: "public",
//   register: true,
//   skipWaiting: true,
//   disable: process.env.NODE_ENV === "development",
// })(nextConfig);
