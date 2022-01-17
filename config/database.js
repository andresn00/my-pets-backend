// // default
// const path = require('path');

// module.exports = ({ env }) => ({
//   connection: {
//     client: 'sqlite',
//     connection: {
//       filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
//     },
//     useNullAsDefault: true,
//   },
// });


  // // strapi-api/config/database.js
  // module.exports = ({ env }) => ({
  //   defaultConnection: "default",
  //   connections: {
  //     default: {
  //       connector: "bookshelf",
  //       settings: {
  //         client: "postgres",
  //         host: env("DATABASE_HOST", "192.168.100.98"),
  //         port: env.int("DATABASE_PORT", 5432),
  //         database: env("DATABASE_NAME", "mypets"),
  //         username: env("DATABASE_USERNAME", "postgres"),
  //         password: env("DATABASE_PASSWORD", "postgres"),
  //         schema: env("DATABASE_SCHEMA", "public"),
  //       },
  //       options: {},
  //     },
  //   },
  // });


  // Single
  module.exports = ({ env }) => ({
    connection: {
      client: 'postgres',
      connection: {
        host: env('DATABASE_HOST', '192.168.100.98'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'mypets'),
        user: env('DATABASE_USERNAME', 'postgres'),
        password: env('DATABASE_PASSWORD', 'postgres'),
        schema: env('DATABASE_SCHEMA', 'public'), // Not required
        // ssl: {
        //   rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
        // },
      },
      debug: false,
    },
  });
