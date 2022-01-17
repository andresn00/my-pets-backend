module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e58ceb9eea077580788de73b323148aa'),
  },
});
