// コイン/トゲトゲを生成するジェネレーター。

var intervalMin : float = 0.5;	// 生成間隔（最小値）
var intervalMax : float = 1.5;	// 生成間隔（最大値）
var coinRate : float = 0.3;		// コインを生成する確率

var coinPrefab : GameObject;		// コインのプレハブ
var spikeBallPrefab : GameObject;	// トゲトゲのプレハブ

function Start() {
	// 以下の処理を無限に続ける
	while (true) {
		// ランダムに間隔をおく
		yield WaitForSeconds(Random.Range(intervalMin, intervalMax));
		
		// プレハブをランダムに選択する
		var prefab : GameObject = Random.value < coinRate ? coinPrefab : spikeBallPrefab;
		  
		// 生成位置をランダムに決める（半径5.5の円周上）
		var theta : float = Random.Range(0.0, Mathf.PI * 2.0);
		var position : Vector3 = Vector3(Mathf.Cos(theta), 0.0, Mathf.Sin(theta)) * 5.5;
		position.y = 2.5;
		
		// 生成する
		Instantiate(prefab, position, Quaternion.identity);
	}
}
