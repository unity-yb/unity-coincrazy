// ゲームオーバー画面を制御するスクリプト。

var skin : GUISkin; // 文字表示に使うGUIスキン。

private var score : int; // 得点値（ゲーム終了メッセージと共に受け取る）。

// ゲーム終了メッセージの処理。
function EndGame(endScore : int) {
	// 得点を受け取る。
	score = endScore;
	// スクリプトの処理を開始する。
	enabled = true;
}

// 更新処理。
function Update() {
	// "Jump"ボタン（スペースキーの代用）が押されたら……
	if (Input.GetButtonDown("Jump")) {
		// Titleシーン（タイトル画面）をロードする。
		Application.LoadLevel("Title");
	}
}

// GUI表示処理。
function OnGUI() {
	// スキンの設定。
	GUI.skin = skin;
	// 画面の幅と高さを取得する。
	var sw : int = Screen.width;
	var sh : int = Screen.height;
	// "GAME OVER!"の文字表示。スタイル"gameover"を使う。
	GUI.Label(Rect(0, 0.2 * sh, sw, 0.3 * sh), "GAME OVER!", "gameover");
	// "SCORE: 得点"の文字表示。スタイル"result"を使う。
	GUI.Label(Rect(0, 0.5 * sh, sw, 0.3 * sh), "SCORE: " + score.ToString(), "result");
}
