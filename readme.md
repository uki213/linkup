# $.linkup.js

## 概要
$.linkup.jsはmvcフレームワークなどで採用されている、eventと関数とのひも付け部分のみの機能です。  
backbone.jsのviewを参考に少し拡張されたフォーマットを採用しています（互換性はありません）  
javascriptのイベントはバブリングでイベントを張ります。  
関数から this はオブジェクト内の 親DOMに当たる el になります。  

## 必要とするもの
[jQuery](https://jquery.com/)

## 使用方法
	<script type="text/javascript" src="$.linkup.js"></script>
scriptタグから読み込ませて準備完了

	<script>
		$.linkup({
			el: 'elementDOM', // イベントを張る親DOMを指定（bubbling）
			task: [
				{
					element: 'DOM', // 対象DOM
					event: 'eventName', // イベント名
					run: 'functionName' // 関数名
				},
				// 複数指定することができます
				{
					element: 'DOM',
					event: 'eventName',
					run: 'functionName'
				}
			]
		});
	</script>
$.linkup関数にobjectを引数として渡す。

## LICENCE
[MIT License](http://opensource.org/licenses/mit-license.php)

## DEMO
[http://uki213.github.io/linkup/](http://uki213.github.io/linkup/)
