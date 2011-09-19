// タイトル画面の制御を行うスクリプト。

var skin : GUISkin; // メッセージ表示に使うGUIスキン。

private var originalRotation : Quaternion; // タイトル文字の元の姿勢。

function Start() {
	// タイトル文字の元の姿勢を保存する。
	originalRotation = transform.localRotation;
}

function Update() {
	// タイトル文字を適当に揺らす。
	transform.localRotation =
		Quaternion.AngleAxis(Mathf.Sin(2.0 * Time.time) * 20.0, Vector3.up) *
		Quaternion.AngleAxis(Mathf.Sin(2.7 * Time.time) * 33.3, Vector3.right) *
		originalRotation;
	// 全体を回転させる。
	transform.parent.localRotation =
		Quaternion.AngleAxis(Time.deltaTime * 10.0, Vector3.up) * transform.parent.localRotation;
	// ボタン入力によりゲームを開始する。
	if (Input.GetButtonDown("Jump")) {
		Application.LoadLevel("Main");
	}
}

function OnGUI() {
	// メッセージをGUIラベルで表示する。
	GUI.skin = skin;
	var sw = Screen.width;
	var sh = Screen.height;
	GUI.Label(Rect(0, 0.6 * sh, sw, 0.4 * sh), "PRESS SPACE TO START", "title");
}
