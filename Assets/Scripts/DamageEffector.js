// プレイヤーキャラクターのダメージ演出を制御するスクリプト。

private var effectFlag : boolean;	// 演出フラグ
private var originalColor : Color;	// マテリアルの元来の色

function Start() {
	// マテリアルの元来の色を保存しておく
	originalColor = renderer.material.color;
}

function Update() {
	if (effectFlag) {
		// マテリアルを赤点滅させる
		renderer.material.color = Color.red * Mathf.Abs(Mathf.Sin(40.0 * Time.time));
	}
}

// ダメージを受信する
function ApplyDamage(amount : int) {
	// 演出をオン
	effectFlag = true;
	// 0.3秒間、演出を続ける
	yield WaitForSeconds(0.3);
	// 演出をオフにして、マテリアルの色を元に戻す
	effectFlag = false;
	renderer.material.color = originalColor;
}
