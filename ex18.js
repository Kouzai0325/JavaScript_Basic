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
	}
parseJSONAsync1('不正なJSON', result=>console.log('parse結果', result))
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



function parseJSONAsync(json){
    return new Promise((resolve, reject)=>
        setTimeout(()=>{
            try {
                // 成功
                resolve(JSON.parse(json))
            }catch(err){
               // 失敗
                reject(err)
            }
        }, 1000)
       )
}

const success = parseJSONAsync('{"foo": 1}')
const failure = parseJSONAsync('不正なJSON')
console.log('********* Promise生成直後 *********')
console.log(success)
console.log(failure)
setTimeout(()=>{
	console.log('********* 1秒後 **********')
console.log(success)
	console.log(failure)
}, 1000)

const promise1 = Promise.resolve("dummy")
promise1
const promise2 = promise1.then(a=>a.length)
promise2
const promise3 = Promise.reject(new Error('エラー'))
promise3
const promise4 = Promise.reject(new Error('エラー')).catch(()=>console.log('エラーが発生'))
promise4
const finally_fn =()=>console.log('最後に実行される処理です')
const promise5 = Promise.resolve()finallyp(finnally_fn)
const promise5 = Promise.resolve()finally(finally_fn)
const promise5 = Promise.resolve().finally(finally_fn)
promise5
const promise6 = Promise.reject(new Error('エラー')).finally(finally_fn)
promise6
// 非同期なJSON解析関数
function parseJSONAsync(json) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                const result = JSON.parse(json);
                resolve(result);
            } catch (error) {
                reject(error.message);
            }
        }, 1000);
    });
}

// 正常系コールバック関数
const successCallback = (result) => {
    console.log('Success:', result);
};

// 異常系コールバック関数
const errorCallback = (error) => {
    console.error('Error:', error);
};

// 必ず実行されるコールバック関数
const finallyCallback = () => {
    console.log('Finally: This will always be executed.');
};

// 正常系の例
const ex17_1 = parseJSONAsync('{"foo": "pom"}')
    .then(successCallback)
    .finally(finallyCallback);

// 異常系の例
const ex17_2 = parseJSONAsync('不正なJSON')
    .catch(errorCallback)
    .finally(finallyCallback);

