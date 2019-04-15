Adblocker Plus + invalid image issue example
============================================

The issue:
---------

Adblocker Plus (ABP), as of version 3.4.1 (not reproducible in 3.4.2 as far
as I checked), hides an image that originally had a `src` attribute set
to a non-spec-compliant value, but then gets changed to a valid URL
later (think lazy loading).

However, this is not a blanket issue across all images loaded this way.
This only happens if the original URL has a fragment that matches a
value in a block-list (eg: [easylist filters](https://easylist.to/))
that blockers like ABP use. This fragment usually is a query parameter,
that won't make the adblocker block the entire URL—usually URL blocking
configurations are much more stricter.

Running the example:
-------------------

Install the prerequisites (you'll need Node):

    npm install -g parcel
    npm install

Run:

    parcel index.html

And open the link:

[http://localhost:1234/?a=123&videoadid=123](http://localhost:1234/?a=123&videoadid=123)

If your adblocker doesn't do the same thing that ABP <3.4.1 did, you
should be able to see the placeholder image in 2s. In ABP <3.4.1, the
image does load (there'll be a network call and the `<img>` tag's
`onload` handler gets called), but gets hidden by ABP.
