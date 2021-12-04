const path = require('path');

module.exports = ({ env }) => ({
  defaultConnection:'default',
  connections:{
    connector:'bookshelf',
    settings:{
      client:'postgres',
      host:env('DATABASE_HOST','127.0.0.1'),
      port:env.int('DATABASE_PORT','5432'),
      database: env('DATABASE_NAME', 'verus'),
      username: env('DATABASE_USERNAME', 'admin'),
      password: env('DATABASE_PASSWORD', 'admin')
    },
    options: {
      ssl: false
    }
  }
  /*
  connection: {
    client: 'sqlite',
    connection: {
      filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
    },
    useNullAsDefault: true,
  },
   */
});
