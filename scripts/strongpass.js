;(function ( $, window, undefined ) {

  var pluginName = 'strongpass',
      document = window.document,
      defaults = {
            strong: 'Strong!',
            medium: 'Medium!',
            weak: 'Weak!'
      };

  function Plugin( element, options ) {
    this.element = element;

    this.options = $.extend( {}, defaults, options);

    this._defaults = defaults;
    this._name = pluginName;

    this.init();

  }

  Plugin.prototype.init = function () {
         
         var _this = this;

         if( !this.options.warning ) {
          this.createAlert();
         }

        $(this.element).keyup(function(e){
          var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
          var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
          var enoughRegex = new RegExp("(?=.{6,}).*", "g");
           
          var test  = $(_this.element).val(),
              $pass = $(_this.options.warning);

           if (false === enoughRegex.test(test)) {
              $pass.removeClass().addClass('empty').html('More Characters');
           }
           else if (strongRegex.test(test)) {
               $pass.removeClass().addClass('ok').html(_this.options.strong);
           }
           else if (mediumRegex.test(test)) {
               $pass.removeClass().addClass('alert').html(_this.options.medium);
           }
           else {
               $pass.removeClass().addClass('weak').html(_this.options.weak);
           }
           return true;
        });
  };

  Plugin.prototype.createAlert = function() {
    
    this.options.warning = '#strongPass';

    $('<span />').attr('id', 'strongPass').insertAfter(this.element);

  };

  $.fn[pluginName] = function ( options ) {
    return this.each(function () {
      if (!$.data(this, 'plugin_' + pluginName)) {
        $.data(this, 'plugin_' + pluginName, new Plugin( this, options ));
      }
    });
  };

}(jQuery, window));