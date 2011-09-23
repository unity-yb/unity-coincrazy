// コイン/トゲトゲを生成するジェネレーターのスクリプト。

var intervalMin : float = 0.5;	// 生成間隔（最小値）。
var intervalMax : float = 1.5;	// 生成間隔（最大値）。
var coinRate : float = 0.3;		// コインを生成する確率。

var coinPrefab : GameObject;	  // コインのプレハブ。
var spikeBallPrefab : GameObject; // トゲトゲのプレハブ。

// 初期化処理。
function Start() {
	// 以下の処理を無限に続ける。
	while (true) {
		// 生成間隔（最小値/最大値）の設定に基づいて、ランダムな秒数ウェイトをおく。
		yield WaitForSeconds(Random.Range(intervalMin, intervalMax));
		
		// coinRateの設定に基づいて、ランダムにコインかトゲトゲのプレハブを選択する。
		var prefab : GameObject = (Random.value < coinRate) ? coinPrefab : spikeBallPrefab;
		  
		// 半径5.5の円周上に、ランダムに生成位置を決定する。
		// まずランダムに角度を決めて、変数theta代入する。
		// そこから三角関数によって円周上の点を求める、という順序。
		var theta : float = Random.Range(0.0, Mathf.PI * 2.0);
		var position : Vector3 = Vector3(Mathf.Cos(theta), 0.0, Mathf.Sin(theta)) * 5.5;
		// 高さは2.5に設定する。
		position.y = 2.5;
		
		// インスタンス化を行う。
		Instantiate(prefab, position, Quaternion.identity);
	}
}
