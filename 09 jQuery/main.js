// перше завдання
$(document).ready(function() {
    $('h2.head').css('background-color', 'green');
    $('h2.head').find('.inner').css('font-size', '35px');
  });

// друге завдання
$(document).ready(function() {
    $('a[href^="https://"]').attr('target', '_blank');
  });

// третє завдання
$(document).ready(function() {
    $('h3').each(function() {
      $(this).prev('div').insertBefore($(this));
    });
  });

// четверте завдання
$(document).ready(function() {
    $('input[type="checkbox"]').on('change', function() {
      var checkedCount = $('input[type="checkbox"]:checked').length;
      if (checkedCount >= 3) {
        $('input[type="checkbox"]').not(':checked').prop('disabled', true);
      } else {
        $('input[type="checkbox"]').prop('disabled', false);
      }
    });
  });
  