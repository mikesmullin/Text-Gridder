/*
 * Release: 1.0 2010-03-04
 */
/*
 * Copyright (c) Mike Smullin (mike.smullin@smullindesign.com)
 * MIT License - http://www.opensource.org/licenses/mit-license.php
 * Idea loosely based on 960.gridder.js, http://gridder.andreehansson.se/
 * Inspired to support baseline typography gridding ala http://www.alistapart.com/comments/settingtypeontheweb/
 *
 * Website: http://github.com/mikesmullin/Text-Gridder
 *
 * Changelog:
 * - First version. Contribute via github.
 */ 
document.body.appendChild(document.createElement('script')).src='http://code.jquery.com/jquery-1.4.2.min.js';if(u=parseInt(prompt('Please enter baseline (px):',18),10))for(var y=0,div=jQuery('<div/>').css({top:y,left:0,width:'100%',height:1,position:'absolute',display:'block',zIndex:99999,background:'#ff0000'}).appendTo(document.body);y<jQuery(document).height();y+=u)div.clone().offset({top:y}).appendTo(document.body);
