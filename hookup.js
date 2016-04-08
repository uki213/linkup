/*global jQuery,console,$ */
/*jslint evil: true, plusplus: true*/

// JavaScript Document
// UTF-8

function hookup(obj) {
	'use strict';
	(function ($) {
		$(document).ready(function () {
			var i = 0,
				runFunction;
			for (i = 0; i < obj.task.length; i = i + 1) {
				runFunction = eval(obj.task[i].run);
				if ($.isFunction(runFunction)) {
					$(obj.el).on(obj.task[i].event, obj.task[i].element, runFunction);
				}
			}
		});
	}(jQuery));
}
