// $.linkup.js (https://github.com/uki213/linkup)
/*global jQuery */
/*jslint evil: true, plusplus: true*/
(function ($) {
	'use strict';
	var checkStrIsFunction = function(str) {
		return eval('typeof ' + str) === 'function';
	}
	$.extend({
		linkup: function (obj) {
			$(document).ready(function () {
				var i;
				for (i = 0; i < obj.task.length; ++i) {
					if (checkStrIsFunction(obj.task[i].handler)) {
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
