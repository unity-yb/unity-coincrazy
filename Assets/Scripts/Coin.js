// コインの接触判定を行うスクリプト。

// トリガーとの接触時に実行される関数。
function OnTriggerEnter(other : Collider) {
	// トリガーにCatchCoinメッセージを送信する
	other.gameObject.SendMessage("CatchCoin", 1);
	// 自分自身を破棄して、消滅する
	Destroy(gameObject);
}
