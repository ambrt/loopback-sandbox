# loopback-sandbox

In options provided to `verify` method of User based model (customer.js),
there is a `redirect` property [line 24][line24]. It is used to create a `verifyHref` for sending
to user.
<br><br>
 If `redirect` is hash path (like `/#/login`), it breaks the verification,
because verify token starts to be a part of hash and not normal GET variable.

A repository for reproducing [LoopBack community issues][wiki-issues].

[wiki-issues]: https://github.com/strongloop/loopback/wiki/Reporting-issues
[line24]:https://github.com/ambrt/loopback-sandbox/blob/master/common/models/customer.js#L24
