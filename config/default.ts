export default {
  port: 3000,
  dbUri: "mongodb://localhost:27017/auth-api",
  logLevel: "info",
  accessTokenPrivateKey: "",
  refreshTokenPrivateKey: "",
  smtp: {
    user: "test@gmail.com",
    pass: "someVeryStrongPassword",
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
  },
};
