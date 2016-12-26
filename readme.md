# $.linkup.js

![event => logic => action](http://uki213.github.io/linkup/document_image/linkupImg.png "event => logic => action")

## 概要
$.linkup.jsはmvcフレームワークなどで採用されている、eventと関数とのひも付け部分のみの機能です。  
backbone.jsのviewを参考に少し拡張されたフォーマットを採用しています（互換性はありません）  
javascriptのイベントはバブリングでイベントを張ります。  
関数から this はオブジェクト内の 親DOMに当たる el になります。  

### 制作理由
$.linkupでは、javascriptの流れを event => logic => action の三つの工程で処理する考えに基づき作成されました。  
特にlogic部分を分離し処理したデータを一度、returnで出力することにより、
UNITテストを行いやすくしたいという目的がありました。

### 概念
eventはselectorで指定されたDOMに対してのフックさせるイベント名となり、
そのイベントの発火を起因に、logicはデータを取りまとめreturnで出力します。
actionはlogicからreturnで出力された値を引数で受け取り、最終段階の画面出力やcookie、
APIアクセス等の出力系処理を行います

### 設計手法
簡単ではありますが以下の様な方法で設計すると考えやすいです。  
動作の流れは、event => logic => actionですが、設計は逆にactionからになります。  
actionでどのような出力を行うか設計を行い、そのために必要な情報を整理します。  
整理された情報はobject等のデータ形式へまとめ、そのデータを出力するためのlogicを設計します。

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
					selector: 'DOM', // 対象DOM
					event: 'eventName', // イベント名
					logic: functionName, // 関数名（データ処理担当）
					action: functionName // 関数名（出力処理担当）
				},
				// 複数指定することができます
				{
					selector: 'DOM',
					event: 'eventName',
					logic: functionName,
					action: functionName
				}
			]
		});
	</script>
$.linkup関数にobjectを引数として渡す。

## LICENCE
[MIT License](http://opensource.org/licenses/mit-license.php)

<!--
## DEMO
[http://uki213.github.io/linkup/](http://uki213.github.io/linkup/)
-->

## Thanks
[kt3k](https://github.com/kt3k), [ampcpmgp](https://github.com/ampcpmgp)
