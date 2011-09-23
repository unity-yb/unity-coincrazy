// プレイヤーキャラクターのダメージ演出を行うスクリプト。

private var effectFlag : boolean;  // 演出の有無を切り替えるフラグ。
private var originalColor : Color; // マテリアルの元の色。

// 初期化処理。
function Start() {
	// マテリアルの元の色を保存しておく。
	originalColor = renderer.material.color;
}

// 更新処理。
function Update() {
	// 演出フラグがtrueの間のみ以下の処理を行う。
	if (effectFlag) {
		// サイン波（の絶対値）から明滅を作り出す。
		var level : float = Mathf.Abs(Mathf.Sin(40.0 * Time.time));
		// 赤色に明滅を掛け合わせて、それをマテリアルの色に代入する。
		renderer.material.color = Color.red * level;
	}
}

// ダメージメッセージの処理。
function ApplyDamage(amount : int) {
	// 演出をオン。
	effectFlag = true;
	// 0.3秒間、演出を続ける。
	yield WaitForSeconds(0.3);
	// 演出をオフにして、マテリアルの色を元に戻す。
	effectFlag = false;
	renderer.material.color = originalColor;
}
