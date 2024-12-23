function checkFortune() {
    // 入力値を取得
    const colour = document.getElementById('colour-select').value;
    const number = parseInt(document.getElementById('number-input').value, 10);

    // 結果を格納する変数
    let result = "凶"; // デフォルト値

    // 条件による結果判定
    if (colour === "黒" && number === 0) {
        result = "小吉";
    } else if (colour === "黒" && number === 1) {
        result = "中吉";
    } else if (colour === "黒" && number === 2) {
        result = "吉";
    } else if (colour === "白" && number === 0) {
        result = "中吉";
    } else if (colour === "白" && number === 1) {
        result = "吉";
    } else if (colour === "白" && number === 2) {
        result = "凶";
    } else if (colour === "オレンジ" && number === 0) {
        result = "大吉";
    } else if (colour === "オレンジ" && number === 1) {
        result = "中吉";
    } else if (colour === "オレンジ" && number === 2) {
        result = "吉";
    }

    // 結果を表示
    document.getElementById('result-output').innerText = `あなたの今週の運勢は【${result}】です`;

    // 画像の切り替え
    const imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = ""; // 既存の画像をクリア

    const img = document.createElement('img');
    switch (result) {
        case "大吉":
            img.src = "images/moss.jpg";
            break;
        case "凶":
            img.src = "images/default.jpg";
            break;
        default:
            img.src = "images/moss.jpg";
            break;
    }

    img.alt = result; // アクセシビリティのためのalt属性
    img.style.width = "300px"; // 必要に応じてスタイルを調整
    imageContainer.appendChild(img);
}
