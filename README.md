Text Gridder
============

**Text Gridder lets you measure your typography baseline faster.**

Installation
------------

Copy and paste the following as the URL for a new bookmark:

    javascript:(function(){document.body.appendChild(document.createElement('script')).src='http://github.com/mikesmullin/Text-Gridder/raw/master/text.gridder.js';})();

This would be easier if you could drag and drop a link to your bookmarks, but github specifically disallows javascript links for security reasons. Sorry.

Usage
-----

 - Click the bookmark link on the page you want to apply grid.
 - Enter a baseline in pixels. (Default is 18px)

Example
-------

 - Visit [Wilson's demo page](http://www.alistapart.com/d/settingtypeontheweb/example_grid.html) from the [A List Apart article](http://www.alistapart.com/articles/settingtypeontheweb).
 - Click your new bookmark to activate the JavaScript magic.
 - Answer "18px" to the prompt that appears, or leave as-is because that should be the default.
 - Viola! Observe closely as the red lines directly overlay the gridbg.gif ones Wilson had originally designed.

Credits
-------

Text Gridder is written by Mike Smullin and is released under the MIT license.

This project is inspired by the work of [Wilson Miner](http://www.alistapart.com/articles/settingtypeontheweb) and Andr?e Hansson's [960 Gridder](http://gridder.andreehansson.se/).

Errata
------

For more information, see docblock comments in text.gridder.js.
