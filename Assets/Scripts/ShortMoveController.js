// コイン/トゲトゲ共通の動きを発生させるスクリプト。

// 基本的にはプレイヤーに向かって力を与えるだけ。
// パラメーターを調整することによって異なった動きが得られる。
// なお、動き終わった後の消滅も、このスクリプトが担当する。

var velocity : float = 8.0;		// プレイヤーに向かう動きの速度。
var moveDelay : float = 1.0;	// 移動発生までの遅延時間。
var sustainTime : float = 3.0;	// 消滅までの時間。

function Start() {
	// 登場から移動までウェイトをおく。
	yield WaitForSeconds(moveDelay);
	
	// "Player"タグを使ってプレイヤーへの参照を得る。
	var player : GameObject = GameObject.FindWithTag("Player");
	// プレイヤーが存在すれば……
	if (player != null) {
		// プレイヤーに向かう単位ベクトルを算出する。
		var direction : Vector3 = (player.transform.position - transform.position).normalized;
		// プレイヤー方向へ加速する力を与える。
		rigidbody.AddForce(direction * velocity, ForceMode.VelocityChange);
	}
	
	// 消滅までウェイトをおく。
	yield WaitForSeconds(sustainTime);
	
	// 自分自身を消滅させる。
	Destroy(gameObject);
}
