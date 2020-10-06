window.onload = function() {
    window.cb = new CB({parent:'#example', id:'example'});
    window.cb.init();

    document.querySelector('#output-button').addEventListener('click', function(e) {
        let data=window.cb.data;
        document.querySelector('#output-json').innerHTML = 
`{
    "code": "${data.code}",
    "name": "${data.name}",
    "expiration": "${data.expiration}",
    "crypto": "${data.crypto}"
}`
    })
}
