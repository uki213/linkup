// $.linkup.js (https://github.com/uki213/linkup)
/*global jQuery */
(function ($) {
  'use strict'

	/**
   * Linkup クラス
   * コンストラクタ
   * @param {String} obj.el イベントを張る親DOM
   * @param {Array} obj.task タスクの配列
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

      this.bindTaskEvent(task)
      this.triggerTaskReady(task)
    }
  }

  /**
   * タスク1つについて適切なイベントを張る
   * @param {Object} task タスクオブジェクト
   * @param {String} task.event タスクのイベント
   * @param {String} task.selector タスクのセレクタ
   * @param {Function} task.logic タスクのロジック (データ処理担当)
   * @param {Function} task.action タスクのアクション (出力処理担当)
   */
  Linkup.prototype.bindTaskEvent = function(task) {
    var $el = this.$el

    if (typeof task.logic !== 'function') {
      return
    }

    var organizeFunction = function () {
      var returnLogic = task.logic.apply($el, arguments)

      if (typeof task.action !== 'function') {
        return
      }

      task.action.call($el, returnLogic)
    }

    $el.on(task.event, task.selector, organizeFunction)
  }

  /**
   * Linkup の初期化が完了したことを ready イベントとして通知する (タスク単位)
   * @param {Object} task タスクオブジェクト
   * @param {String} task.selector タスクのセレクタ
   */
  Linkup.prototype.triggerTaskReady = function (task) {
    $(task.selector, this.$el).trigger('ready')
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
