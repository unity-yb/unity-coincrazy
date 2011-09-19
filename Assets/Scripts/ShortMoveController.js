// コイン/トゲトゲ共通の動きを発声させるスクリプト。

var velocity : float = 8.0;		// 移動速度
var moveDelay : float = 1.0;	// 移動までの遅延時間
var sustainTime : float = 3.0;	// 消滅までの時間

function Start() {
	// 登場から移動までウェイトをおく
	yield WaitForSeconds(moveDelay);
	
	// プレイヤーの存在を確認する
	var player : GameObject = GameObject.FindWithTag("Player");
	if (player != null) {
		// プレイヤー方向へ一瞬で加速する
		var direction : Vector3 = (player.transform.position - transform.position).normalized;
		rigidbody.AddForce(direction * velocity, ForceMode.VelocityChange);
	}
	
	// 消滅までウェイトをおく
	yield WaitForSeconds(sustainTime);
	
	// 時間切れで死亡
	Destroy(gameObject);
}
