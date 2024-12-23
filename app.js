        function checkFortune() {
            var colour = document.getElementById('colour-select').value;
            var number = parseInt(document.getElementById('number-input').value, 10);
            var result = "凶"; // デフォルトの値
                
            } else if (colour === "黒" && number === 2) {
                result = "小吉";
            } else if (colour === "白" && number === 0) {
                result = "小吉";
            } else if (colour === "白" && number === 1) {
                result = "小吉";
            } else if (colour === "白" && number === 2) {
                result = "凶";
            } else if (colour === "オレンジ" && number === 0) {
                result = "凶";
            } else if (colour === "オレンジ" && number === 1) {
                result = "大吉";
            } else if (colour === "オレンジ" && number === 2) {
                result = "小吉";
            }

            document.getElementById('result-output').innerText = "あなたの今週の運勢は【" + result + "】です";
        }

// 画像の表示処理
    var imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = ""; // 既存の画像をクリア

    var img = document.createElement('img');
    switch (result) {
        case "小吉":
            img.src = "images/moss.jpg";
            break;
        default:
            img.src = "images/default.jpg"; // デフォルト画像を設定
            break;
}

    img.alt = result; // アクセシビリティのためにalt属性を設定
    img.style.width = "200px"; // 必要に応じてスタイルを調整
    imageContainer.appendChild(img);
}

