Adblocker Plus + invalid image issue example
============================================

The issue:
---------

Adblocker Plus (ABP), version 3.4.2 or less, hides an image that
originally had a `src` attribute set to a non-spec-compliant value, but
then gets changed to a valid URL later (think lazy loading).

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

If your adblocker doesn't do the same thing that ABP <= 3.4.2 did, you
should be able to see the placeholder image in 2s. In ABP <= 3.4.2, the
image does load (there'll be a network call and the `<img>` tag's
`onload` handler gets called), but gets hidden by ABP.


To install the ABP version that does this:

I've included an unsigned version of the extension built from the [ABP
GitHub repo](https://github.com/adblockplus/adblockpluschrome/) at
commit [4ee6005](https://github.com/adblockplus/adblockpluschrome/commit/4ee6005)

1. Download the folder under `ext`, unzip it
2. Turn on "Developer Mode" in [chrome://extensions](chrome://extensions)
3. Load the unpacked extension
