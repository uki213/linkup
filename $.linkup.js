// $.linkup.js (https://github.com/uki213/linkup)
/*global jQuery */
/*jslint evil: true, plusplus: true*/
(function ($) {
	'use strict';
	$.extend({
		linkup: function (obj) {
			$(document).ready(function () {
				var i;
				for (i = 0; i < obj.task.length; ++i) {
					if (eval('typeof (' + obj.task[i].handler + ')') === 'function') {
						var evalStr =
							'(function(e){'+
							obj.task[i].handler+
							'(e)})';
						$(obj.el).on(
							obj.task[i].event,
							obj.task[i].selector,
						 	$.proxy(
								eval(evalStr),
						  		$(obj.el)
							)
						);
						$(obj.task[i].selector).trigger('ready');
					}
				}
			});
		}
	});
}(jQuery));
