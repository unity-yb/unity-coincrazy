// ゲームオーバー画面の制御を行うスクリプト。

var skin : GUISkin; // 表示に使うスキン。

private var score : int; // 発動時に受け取った得点。

function EndGame(endScore : int) {
	score = endScore;
	enabled = true;
}

function Update() {
	// キー入力でタイトル画面へ戻る。
	if (Input.GetButtonDown("Jump")) {
		Application.LoadLevel("Title");
	}
}

function OnGUI() {
	GUI.skin = skin;
	var sw = Screen.width;
	var sh = Screen.height;
	GUI.Label(Rect(0, 0.2 * sh, sw, 0.3 * sh), "GAME OVER!", "gameover");
	GUI.Label(Rect(0, 0.5 * sh, sw, 0.3 * sh), "SCORE: " + score.ToString(), "result");
}
