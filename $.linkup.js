// $.linkup.js (https://github.com/uki213/linkup)
/*global jQuery */
(function ($) {
	'use strict';

	/**
	 * Linkup クラス
	 * コンストラクタ
	 * @param {String} obj.el イベントを張る親DOM
	 * @param {Array} obj.task タスク配列
	 */
	function Linkup(obj) {
		this.$el = $(obj.el);
		this.tasks = obj.task;
	}

	/**
	 * タスクデータを元にイベントを張る
	 */
	Linkup.prototype.bindEvents = function () {
		for (var i = 0; i < this.tasks.length; i++) {
			var task = this.tasks[i];

			if (typeof task.handler === 'function') {
				this.$el.on(task.event, task.selector, $.proxy(task.handler, this.$el));
				$(task.selector, this.$el).trigger('ready');
			}
		}
	};

	$.extend({
		linkup: function (obj) {
			$(document).ready(function () {
				var linkup = new Linkup(obj);
				linkup.bindEvents();
			});
		}
	});
}(jQuery));
