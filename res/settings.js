var D = document;

var docReady = function (cb) {
    if (D.readyState === "complete" || (D.readyState !== "loading" && !D.documentElement.doScroll)) {
        cb();
    } else {
        D.addEventListener("DOMContentLoaded", cb);
    }
};

var slext = {
    id: "#cpcheck",
    vr: "#cpvero",
    co: "#cpcountry",
    save: function () {
        localStorage.setItem('cpvero', $(this.vr).val());
        localStorage.setItem('cptype', $(this.id).val());
        localStorage.setItem('cpcountry', $(this.co).val());
        $('#statusmsg').html("Settings saved!");
        setTimeout(function () {
            location.reload();
        }, 500);
    },
    get: function () {
        var obj = {};
        obj.vero = localStorage.getItem('cpvero') || "on";
        obj.check = localStorage.getItem('cptype') || "title";
        obj.country = localStorage.getItem('cpcountry') || "US";
        return obj;
    },
    getcptype: function () {
        return localStorage.getItem('cptype') || "title";
    },
    load: function () {
        $(this.id).val(localStorage.getItem('cptype') || "title");
        $(this.vr).val(localStorage.getItem('cpvero') || "ob");
        $(this.co).val(localStorage.getItem('cpcountry') || "US");
    }
};

docReady(function () {
    slext.load();
    $('#extSavebtn').click(function () {
        slext.save();
    });
});