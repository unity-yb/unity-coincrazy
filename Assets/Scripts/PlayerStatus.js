// プレイヤーの状態を管理するスクリプト。
// ついでに表示と演出も担当している。

private var life : int = 100; // 現在のライフ値。
private var score : int = 0;  // 現在の得点。

var coinFx : GameObject;	// コイン取得時のエフェクト。
var damageFx : GameObject;	// ダメージ時のエフェクト。
var deathFx : GameObject;	// 死亡時のエフェクト。
var skin : GUISkin;			// 文字表示用のスキン。

// コイン取得メッセージの処理。
function CatchCoin(amount : int) {
	// 得点を加算する。
	score += amount;

	// コイン取得エフェクトをインスタンス化する。
	Instantiate(coinFx, transform.position, transform.rotation);
}

// ダメージメッセージの処理。
function ApplyDamage(amount : int) {
	// ライフ値を減少させる。
	life -= amount;

	// ライフが0以下になったら……
	if (life <= 0) {
		// 死亡エフェクトをインスタンス化する。
		Instantiate(deathFx, transform.position, transform.rotation);
		// GenericManを破棄する。
		Destroy(transform.parent.gameObject);
		// Game Controllerにゲーム終了を通知する。
		GameObject.FindWithTag("GameController").SendMessage("EndGame", score);
	} else {
		// ダメージエフェクトをインスタンス化する。
		Instantiate(damageFx, transform.position, transform.rotation);
	}
}

// GUI表示処理。
function OnGUI() {
	// GUIスキンの設定。
	GUI.skin = skin;

	// 画面全体の領域指定。
	var rect : Rect = Rect(0, 0, Screen.width, Screen.height);

	// "LIFE: ライフ値"をスタイル"life"で文字表示する。
	// "life"スタイルにより左上寄せになる。
	GUI.Label(rect, "LIFE: " + life.ToString(), "life");

	// "SCORE: 得点"をスタイル"score"で文字表示する。
	// "score"スタイルにより右上寄せになる。
	GUI.Label(rect, "SCORE: " + score.ToString(), "score");
}
