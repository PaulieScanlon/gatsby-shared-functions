module.exports = {
  START: new Date(new Date().setDate(new Date().getDate() - 60)).toLocaleDateString('en-CA'),
  END: new Date().toLocaleDateString('en-CA')
};
