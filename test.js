function parseJSONAsync2(json, callback){
	setTimeout(()=>{
		try{
			callback(null, JSON.parse(json))
		}catch(err){
			callback(err)
		}
	}, 1000)
parseJSONAsync2('不正なJSON', (err, result)=>console.log('parse結果', err, result))

function parseJSONAsync1(json, callback){
	try{
		setTimeout(()=>{
			callback(JSON.parse(json))
		}, 1000)
	} catch (err){
		console.log('エラーをキャッチ', err)
	}}
parseJSONAsync1('不正なJSON', result=>console.log('parse結果', result))

// コールバックで非同期処理を模倣する関数
function simulateAsyncTask(callback) {
    setTimeout(() => {
        const randomNumber = Math.random();
        if (randomNumber < 0.5) {
            callback(null, 'Success: Data is processed.');
        } else {
            callback('Error: Failed to process data.', null);
        }
    }, 1000);
}

// エラーが発生した場合も結果を表示する
simulateAsyncTask((error, result) => {
    console.log('Callback Example (Incorrect Handling):');
    if (error) {
        console.error('Error:', error);
    }
    console.log('Result:', result);
});

// コールバックで非同期処理を模倣する関数
function simulateAsyncTask(callback) {
    setTimeout(() => {
        const randomNumber = Math.random();
        if (randomNumber < 0.5) {
            callback(null, 'Success: Data is processed.');
        } else {
            callback('Error: Failed to process data.', null);
        }
    }, 1000);
}

// エラーが発生した場合はエラーのみを表示する
simulateAsyncTask((error, result) => {
    console.log('Callback Example (Correct Handling):');
    if (error) {
        console.error('Error:', error);
    } else {
        console.log('Result:', result);
    }
});
