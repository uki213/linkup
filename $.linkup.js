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
					if (!checkStrIsFunction(obj.task[i].handler)) {continue;}
					var renderFirstFuncStr = '';
					var renderLastFuncStr = '';
					if (checkStrIsFunction(obj.task[i].render)) {
						renderFirstFuncStr = obj.task[i].render + '.call($(obj.el), ';
						renderLastFuncStr = ')';
					}
					var evalStr =
						'(function(e){'+renderFirstFuncStr+
						obj.task[i].handler+
						'.call($(obj.el), e)'+renderLastFuncStr+'})';
					console.log(evalStr);
					$(obj.el).on(
						obj.task[i].event,
						obj.task[i].selector,
						eval(evalStr)
					);
					$(obj.task[i].selector).trigger('ready');
				}
			});
		}
	});
}(jQuery));
