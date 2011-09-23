// タイトル画面を制御するスクリプト。

var skin : GUISkin; // 文字表示に使うGUIスキン。

private var originalRotation : Quaternion; // タイトル文字の元の姿勢。

// 初期化処理。
function Start() {
	// タイトル文字の元の姿勢を保存する。
	originalRotation = transform.localRotation;
}

// 更新処理。
function Update() {
	// タイトル文字を適当に揺らす。
	// Y軸回転角とX軸回転角をそれぞれサイン波で揺らしている。
	transform.localRotation =
		Quaternion.AngleAxis(Mathf.Sin(2.0 * Time.time) * 20.0, Vector3.up) *
		Quaternion.AngleAxis(Mathf.Sin(2.7 * Time.time) * 33.3, Vector3.right) *
		originalRotation;
	// 全体をゆっくりとY軸回転させる。
	transform.parent.localRotation =
		Quaternion.AngleAxis(Time.deltaTime * 10.0, Vector3.up) *
		transform.parent.localRotation;
	
	// "Jump"ボタン（スペースキーの代用）が押されたら……
	if (Input.GetButtonDown("Jump")) {
		// Mainシーンをロードする。
		Application.LoadLevel("Main");
	}
}

// GUI表示処理。
function OnGUI() {
	// GUIスキンの設定。
	GUI.skin = skin;
	// 画面の幅と高さの取得。
	var sw : int = Screen.width;
	var sh : int = Screen.height;
	// メッセージをスタイル"title"を使って文字表示する。
	GUI.Label(Rect(0, 0.6 * sh, sw, 0.4 * sh), "PRESS SPACE TO START", "title");
}
