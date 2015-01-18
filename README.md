# etch-sketch-om

Etch Sketch originally done with JS/React (https://github.com/kimagure/etch-sketch) done with CLJS/Om

Help Wanted: this has some performance issues causing some hangups. If anyone could help me profile where this is going wrong and help me fix it, I'd be grateful.

## Overview

Draws a bunch of SVG rectangles as you move around the cursor with hjkl/LRDU arrow keys

## Setup

First-time Clojurescript developers, add the following to your bash .profile:

    LEIN_FAST_TRAMPOLINE=y
    export LEIN_FAST_TRAMPOLINE
    alias cljsbuild="lein trampoline cljsbuild $@"

To avoid compiling ClojureScript for each build, AOT Clojurescript locally in your project with the following:

    lein trampoline run -m clojure.main
    user=> (compile 'cljs.closure)
    user=> (compile 'cljs.core)

Subsequent builds can use:

    lein cljsbuild auto

Clean project specific out:

     lein clean

For more info, read [Waitin'](http://swannodette.github.io/2014/12/22/waitin/).

...or run `make watch`
