# loopback-sandbox

In customer.js model, based on User model, there is a `redirect`
that user is pointed to when he verifies his email.<br><br>
 If `redirect` is hash path (like `/#/login`), it breaks the verification,
because verify token starts to be aprt of hash and not normal GET variable.

A repository for reproducing [LoopBack community issues][wiki-issues].

[wiki-issues]: https://github.com/strongloop/loopback/wiki/Reporting-issues
