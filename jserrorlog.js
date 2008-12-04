// $Id$ 

/**
 * capture javascript errors, then post
 * to /jserrorlog/ and record them
 */
var jsErrorLogger = {
  URI: '/jserrorlog/',
  onError: function(msg, file_loc, line_no) {
    var data = {
      message: msg,
         file: file_loc,
         line: line_no
    } ;
    try { 
      $.post( jsErrorLogger.URI, data ) ;
    } catch (e) { 
      return false; 
    }                            
    return true;
  }
} ;
window.onerror = jsErrorLogger.onError ;
