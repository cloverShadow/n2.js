gis.using(["./testUsing.js"], function (testUsing) {
    namespace("gis.testPlugin");
    gis.testPlugin = function () {
        this._name = "yk";
        gis.base(this, gis.parentName);
    };
    gis.inherits(gis.testPlugin, gis.parentPlugin);
    gis.definePrototype(gis.testPlugin.prototype, {
        name: {
            get: function () {
                return this._name;
            }
        }
    });
    gis.testPlugin.prototype.hello = function () {
        console.log(this.name);
    };
});