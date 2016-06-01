// $.linkup.js (https://github.com/uki213/linkup)
/*global jQuery */
(function ($) {
  'use strict'

	/**
   * Linkup クラス
   * コンストラクタ
   * @param {String} obj.el イベントを張る親DOM
   * @param {Array} obj.task タスク配列
   */
  function Linkup (obj) {
    this.$el = $(obj.el)
    this.tasks = obj.task
  }

	/**
   * タスクデータを元にイベントを張る
   */
  Linkup.prototype.bindEvents = function () {
    for (var ti = 0; ti < this.tasks.length; ti++) {
      var task = this.tasks[ti]

      if (typeof task.logic === 'function') {
        task.organizeFunction = function (Element) {
          var returnLogic = task.logic(Element)
          task.action(returnLogic)
        }

        this.$el.on(task.event, task.selector, $.proxy(task.organizeFunction, this.$el))
        $(task.selector, this.$el).trigger('ready')
      }
    }
  }

  $.extend({
    linkup: function (obj) {
      $(document).ready(function () {
        var linkup = new Linkup(obj)
        linkup.bindEvents()
      })
    }
  })
}(jQuery))
