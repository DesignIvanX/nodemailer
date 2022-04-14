const Email = require("../components/email/network");

const router = (server) => {
  server.use("/api/form", Email);
};

module.exports = router;
