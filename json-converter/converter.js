String.prototype.isEmpty = function () {
    return (this.trim().length === 0);
};

function compare() {
    console.log('comparing...');
    var json1 = document.getElementById('jsonString1').value;
    if (json1.isEmpty()) {
        document.getElementById('lblResultMessage').innerText = "json1 is empty!"
        return;
    }

    var json2 = document.getElementById('jsonString2').value;
    if (json2.isEmpty()) {
        document.getElementById('lblResultMessage').innerText = "json2 is empty!"
        return;
    }

    const object1 = JSON.parse(json1)
    var array_object1 = [];

    for (var i in object1)
        array_object1.push([i, object1[i]]);
    console.log(array_object1);

    const jsonString = JSON.stringify(array_object1);
    console.log(jsonString);
    // const object2 = JSON.parse(json2)
    // var difference = getDifference(object1, object2)
    // console.log(difference)

}

function getDifference(o1, o2) {
    var diff = {};
    var tmp = null;

    console.log('object1:')
    console.log(o1);
    console.log('object2:')
    console.log(o2);

    if (JSON.stringify(o1) === JSON.stringify(o2)) {
        document.getElementById('lblResultMessage').innerText = "The two files are semantically identical."
        return;
    };

    for (var k in o1) {
        if (Array.isArray(o1[k]) && Array.isArray(o2[k])) {
            tmp = o1[k].reduce(function (p, c, i) {
                var _t = getDifference(c, o2[k][i]);
                if (_t)
                    p.push(_t);
                return p;
            }, []);
            if (Object.keys(tmp).length > 0)
                diff[k] = tmp;
        } else if (typeof (o1[k]) === "object" && typeof (o2[k]) === "object") {
            tmp = getDifference(o1[k], o2[k]);
            if (tmp && Object.keys(tmp) > 0)
                diff[k] = tmp;
        } else if (o1[k] !== o2[k]) {
            diff[k] = o2[k]
        }
    }
    return diff;
}