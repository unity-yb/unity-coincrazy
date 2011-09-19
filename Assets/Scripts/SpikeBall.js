// トゲトゲを制御するスクリプト。

function OnTriggerEnter(other : Collider) {
	// ApplyDamageメッセージを送信する
	other.gameObject.SendMessage("ApplyDamage", 10);
	// 自分自身を破棄して、消滅する
	Destroy(gameObject);
}