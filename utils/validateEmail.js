function validateEmail(email){
  const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|fr|dz|gov|info|mobi|name|aero|jobs|museum)\b/
  return String(email).match(re);
};

module.exports = { validateEmail };