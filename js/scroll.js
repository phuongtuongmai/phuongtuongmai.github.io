// top scroll progress bar
$(window).scroll(function() {
  var pageHeight = document.documentElement.scrollHeight || document.body.scrollHeight 
  var windowHeight = document.documentElement.clientHeight || document.body.clientHeight 
  var scrollAvail = pageHeight - windowHeight 
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop 
  var ratio = (scrollTop / scrollAvail) * 100 + '%'
  $('#progress > .line').css('width', ratio)
})