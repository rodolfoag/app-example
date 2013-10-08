$(document).ready(function () {
  var route = $('body').data('dispatcher');
  App.dispatchRoute(route);
});