var config = require('../../server/config.json');
var path = require('path');

module.exports = function(Customer) {
  console.log("in Customer.js");
  //send verification email after registration
  Customer.afterRemote('create', function(context, userInstance, next) {
    console.log('> user.afterRemote triggered');

    var verifyTextTemplate = path.resolve(__dirname, '../../server/views/verify-email-content.ejs');
    var verifyText;
    context.res.render(verifyTextTemplate, {layout:false}, function (err,html) {
      verifyText = html;

    });
    console.log(verifyText);
    var options = {
      type: 'email',
      to: userInstance.email,
      from: 'noreply@loopback.com',
      subject: 'Thanks for registering.',
      text: verifyText,
      template: path.resolve(__dirname, '../../server/views/verify.ejs'),
      redirect: '/#/login',
      Customer: Customer
    };



    userInstance.verify(options, function(err, response) {
      if (err) return next(err);

      console.log('> verification email sent:', response);

      context.res.redirect("/");
      // context.res.render('response', {
      //   title: 'Signed up successfully',
      //   content: 'Please check your email and click on the verification link ' +
      //       'before logging in.',
      //   redirectTo: '/',
      //   redirectToLinkText: 'Log in'
      // });
    });
  });
}
