// プレイヤー関連の効果音を発音するスクリプト。

var coinSE : AudioClip;   // コイン取得音
var damageSE : AudioClip; // ダメージ効果音

// コインの取得を受信する
function CatchCoin(amount : int) {
	audio.PlayOneShot(coinSE);
}

// ダメージを受信する
function ApplyDamage(amount : int) {
	audio.PlayOneShot(damageSE);
}