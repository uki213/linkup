/*global jQuery */
/*jslint evil: true, plusplus: true*/
(function ($) {
	'use strict';
	$.extend({
		linkup: function (obj) {
			$(document).ready(function () {
				var i;
				for (i = 0; i < obj.task.length; ++i) {
					if (eval('typeof (' + obj.task[i].run + ')') === 'function') {
						$(obj.el).on(obj.task[i].event, obj.task[i].element, $.proxy(eval(obj.task[i].run), $(obj.el)));
					}
				}
			});
		}
	});
}(jQuery));
