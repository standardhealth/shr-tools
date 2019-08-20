$(window).on('load', function() {
  function applyFilter() {
    var matchText = $('input#class-name-filter').val().toLowerCase();
    var classFilter = $('input[name=class-type-filter]:checked').val();
    var toShow = $('ul li').hide().filter(function(index, li) {
      li = $(li);
      if(classFilter == 'entry' && !(li.hasClass('entry') || li.hasClass('abstract'))) {
        return false;
      } else if(classFilter == 'group' && !li.hasClass('group')) {
        return false;
      } else if(classFilter == 'element' && !li.hasClass('element')) {
        return false;
      } else {
        return li.find('a').text().toLowerCase().indexOf(matchText) > -1;
      }
    });
    if(toShow.length == 0) {
      $('p#no-match').show();
    } else {
      $('p#no-match').hide();
      toShow.show();
    }
  }

  function updateShownClasses() {
    $('span#shown-classes').text($(this).parent().text());
  }

  $('input#class-name-filter').on('keyup', applyFilter);
  $('input[name=class-type-filter]:radio').on('change', applyFilter);
  $('input[name=class-type-filter]:radio').on('change', updateShownClasses);
});