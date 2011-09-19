// コインの制御を行うスクリプト。

function OnTriggerEnter(other : Collider) {
	// CatchCoinメッセージを送信する
	other.gameObject.SendMessage("CatchCoin", 1);
	// 自分自身を破棄して、消滅する
	Destroy(gameObject);
}
