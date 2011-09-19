// プレイヤーのキャラクターコントローラーを制御するスクリプト。

var walkSpeed : float = 3.0;      // 歩く速度。
var gravity : float = 20.0;       // 重力加速度。
var jumpSpeed : float = 8.0;      // ジャンプの初速。 

var jumpSE : AudioClip;		// ジャンプの効果音。
var touchSE : AudioClip;	// 着地の効果音。

private var velocity : Vector3;		// 現在の速度。
private var wasGrounded : boolean;	// 前のフレームで地面に接していたか？

function Start() {
	// 歩行アニメーションを若干小走りにする。
	animation["Walk"].speed = 2.0;
}

function Update() {
	var controller : CharacterController = GetComponent(CharacterController);
	
	// 接地中のみ行う処理。
	if (controller.isGrounded) {
		// 前フレームで地面に接していなかった場合は着地処理を行う。
		if (!wasGrounded) {
			animation.Play("Crouch");
			audio.PlayOneShot(touchSE);
		}
		
		// キー入力から速度を決める。
		velocity = Vector3(Input.GetAxis("Horizontal"), 0, Input.GetAxis("Vertical"));
		velocity *= walkSpeed;
		
		if (Input.GetButtonDown("Jump")) {
			// ジャンプ開始。縦方向の初速を与えてジャンプを再生する。
			velocity.y = jumpSpeed;
			animation.Play("Jump");
			audio.PlayOneShot(jumpSE);
		} else if (velocity.magnitude > 0.5) {
			// 歩行アニメーションに切り替えつつ、進行方向に旋回する。
			animation.CrossFade("Walk", 0.1);
			transform.LookAt(transform.position + velocity);
		} else {
			animation.CrossFade("Idle", 0.1);
		}
	}
	
	// 接地フラグを保存する。
	wasGrounded = controller.isGrounded;
	
	// 重力による下方向への加速。
	velocity.y -= gravity * Time.deltaTime;
	
	// キャラクターコントローラーの移動。
	controller.Move(velocity * Time.deltaTime);
}
