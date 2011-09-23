// プレイヤーに関する効果音を発音するスクリプト。

var coinSE : AudioClip;   // コイン取得音。
var damageSE : AudioClip; // ダメージ効果音。

// コイン取得メッセージを処理する。
function CatchCoin(amount : int) {
	audio.PlayOneShot(coinSE);
}

// ダメージメッセージを処理する。
function ApplyDamage(amount : int) {
	audio.PlayOneShot(damageSE);
}
