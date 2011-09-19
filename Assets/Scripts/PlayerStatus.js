// プレイヤーの状態を管理するスクリプト。
// ついでに表示と演出も担当している。

private var life : int = 100;	// 現在のライフ値。
private var score : int = 0;	// 現在の得点。

var coinFx : GameObject;	// コイン取得時のエフェクト。
var damageFx : GameObject;	// ダメージ時のエフェクト。
var deathFx : GameObject;	// 死亡時のエフェクト。
var skin : GUISkin;			// 表示用のスキン。
  
// コインの取得を受信する。
function CatchCoin(amount : int) {
	score += amount;
	// コイン取得エフェクト。
	Instantiate(coinFx, transform.position, transform.rotation);
}

// ダメージを受信する。
function ApplyDamage(amount : int) {
	life -= amount;
	
	// ライフが0以下になったら死亡。
	if (life <= 0) {
		// 死亡時エフェクト。
		Instantiate(deathFx, transform.position, transform.rotation);
		// GenericManの破棄。
		Destroy(transform.parent.gameObject);
		// Game Controllerに通知。
		GameObject.FindWithTag("GameController").SendMessage("EndGame", score);
	} else {
		// ダメージエフェクト。
		Instantiate(damageFx, transform.position, transform.rotation);
	}
}

function OnGUI() {
	// ライフ値と得点の表示。
	GUI.skin = skin;
	var rect : Rect = Rect(0, 0, Screen.width, Screen.height);
	GUI.Label(rect, "LIFE: " + life.ToString(), "life");
	GUI.Label(rect, "SCORE: " + score.ToString(), "score");
}
