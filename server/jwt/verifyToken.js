const verifyToken = (req, res, next) => {
  const bearerHeader = req.headers['authorization'];
  if (typeof bearerHeader !== 'undefined') {
    console.log('bear', bearerHeader);
    req.token = bearerHeader;
    next();
  } else {
    //forbidden
    console.log(req.headers['Authorization']);
  }
};

module.exports = verifyToken;
