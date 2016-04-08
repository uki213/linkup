/*global jQuery,console,$ */
/*jslint evil: true, plusplus: true*/

// JavaScript Document
// UTF-8

function hookup(obj) {
	'use strict';
	(function ($) {
		$(document).ready(function () {
			var i = 0;
			for (i = 0; i < obj.task.length; i = i + 1) {
				$(obj.el).on(obj.task[i].event, obj.task[i].element, eval(obj.task[i].run));
			}
		});
	}(jQuery));
}
