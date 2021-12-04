module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a57c711df132a0081fe8d79dc01792d4'),
  },
});
