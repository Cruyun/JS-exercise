// 10.2
var dayName = function() {
    var names = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return function(number) {
        return names[number];
    };
}();
console.log(dayName(3));

// 10.3
var weekDay = function() {
    var names = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return {
        name: function(number) { return names[number]; },
        number: function(name) { return names.indexOf(name); }
    };
}();
console.log(weekDay.name(weekDay.number("Sun")));

(function(exports) {
    var names = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    exports.name = function(number) {
        return names[number];
    };
    exports.number = function(name) {
        return names.indexOf(name);
    };
})(this.weekDay = {});
console.log(weekDay.name(weekDay.number("Sun") ));

// 10.6
function require(name) {
    if (name in require.cache[name])
        return require.cache[name];
    var code = new Function("exports, module", readfile(name));
    var exports = {}, module = {exports: exports};
    code(exports, module);

    require.cache[name] = module.exports;
    return module.exports;
}
require.cache = Object.create(null)

// 10.7
define([
    'require',
    'today'
], function(weekDay, today) {
    console.log(weekDay.name(today.dayName()));
});

define([], function() {
    var names = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return {
        name: function(number) { return names[number]},
        number: function(name) { return names.indexOf(name); }
    };
});
