(function () {
  'use strict';

  jQuery('#lyrics .list-group-item').click(function() {
    jQuery(this).addClass('active');
    ga('send', 'event', 'Btn', 'Click', jQuery(this).attr('id') + '', 1);
  });

})();
