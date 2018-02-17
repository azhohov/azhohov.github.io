var clipboard = new Clipboard('[data-clipboard-target]');

clipboard.on('success', function (e) {
    e.clearSelection();
    showTooltip(e.trigger, 'Copied!');
});

clipboard.on('error', function (e) {
    showTooltip(e.trigger, fallbackMessage(e.action));
});

function getQueryParams() {
    var params = {};
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; ++i) {
        var p = vars[i].split('=');
        if (p.length !== 2) continue;
        params[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    }
    return params;
}

var Base64url = {
    encode: function (input) {
        return btoa(input)
            .replace(/\+/g, '-')
            .replace(/\//g, '_')
            .replace(/=+$/, '');
    }
};
var params = getQueryParams();
// window.location="https://telegram.me/azhohovBot?start=" + Base64url.encode(params["code"]);
// console.log("params[\"code\"] =", params["code"]);
document.getElementById("foo").value = "/start " + Base64url.encode(params["code"]);

