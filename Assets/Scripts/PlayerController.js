// プレイヤーのキャラクターコントローラーを制御するスクリプト。

// ※ 書籍の内容から次の変更を行なってあります。
//
// 1) 効果音の追加。
//
// 2) 着地時のアニメーション制御の追加。
//
// 着地した瞬間に、一瞬だけCrouchアニメーションを挟むことにより、
// 着地時のインパクトを表現しています。

var walkSpeed : float = 3.0; // 歩く速度。
var gravity : float = 20.0;	 // 重力加速度。
var jumpSpeed : float = 8.0; // ジャンプの初速。 

var jumpSE : AudioClip;	 // ジャンプの効果音。
var touchSE : AudioClip; // 着地の効果音。

private var velocity : Vector3;	   // 現在の速度。
private var wasGrounded : boolean; // 前のフレームで地面に接していたか？

// 初期化処理。
function Start() {
	// 歩行アニメーションを若干小走りにする。
	animation["Walk"].speed = 2.0;
}

// 更新処理。
function Update() {
	// キャラクターコントローラーへの参照の取得。
	var controller : CharacterController = GetComponent(CharacterController);

	// 現在、地面に接しているか？	
	if (controller.isGrounded) {
		// 前フレームで地面に接していなかった場合は……
		if (!wasGrounded) {
			// しゃがみアニメーションを発動する。
			animation.Play("Crouch");
			// 着地時の効果音を鳴らす。
			audio.PlayOneShot(touchSE);
		}
		
		// キー入力から速度を決める。
		velocity = Vector3(Input.GetAxis("Horizontal"), 0, Input.GetAxis("Vertical"));
		velocity *= walkSpeed;
		
		// "Jump"ボタン（スペースキー）が押されていたら……
		if (Input.GetButtonDown("Jump")) {
			// ジャンプの初速として、上方向の速度を設定する。
			velocity.y = jumpSpeed;
			// ジャンプアニメーションを再生する。
			animation.Play("Jump");
			// ジャンプ時の効果音を鳴らす。
			audio.PlayOneShot(jumpSE);
		} else if (velocity.magnitude > 0.5) { // 速度が0.5以上になっていたら……
			// 歩行アニメーションにクロスフェードする。
			animation.CrossFade("Walk", 0.1);
			// トランスフォームを進行方向に向ける。
			transform.LookAt(transform.position + velocity);
		} else {
			// 待機アニメーションにクロスフェードする。
			animation.CrossFade("Idle", 0.1);
		}
	}
	
	// 現在の接地の状態を保存しておく。
	wasGrounded = controller.isGrounded;
	
	// 重力による下方向への加速。
	velocity.y -= gravity * Time.deltaTime;
	
	// キャラクターコントローラーの移動。
	controller.Move(velocity * Time.deltaTime);
}
