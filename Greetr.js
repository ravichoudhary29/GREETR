(function (global, $) {
  return new Greetr.init(firstname, lastname, language);

  Greetr.prototype = {};
  Greetr.init = function (firstname, lastname, language) {
    var self = this;
    self.firstname = firstname || "";
    self.lastname = lastname || "";
    self.language = language || "en";
  };
})(window, jQuery);
