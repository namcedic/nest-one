import process from 'process';

export const jwtConstants = {
  secret: 'process.env.JWT_SECRET',
  expire: 300,
};
