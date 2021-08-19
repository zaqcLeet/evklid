$(document).ready(function() {

  var icons = {
    header: "iconClosed",
    activeHeader: "iconOpen"
  };

  $("#accordion" ).accordion({
    active: false,
    collapsible: true,
    animate: 400,
    header: "h3",
    autoHeigth: true,
    icons: icons,
    heightStyle: "content"
  });

});
