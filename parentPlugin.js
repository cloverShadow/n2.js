namespace("gis.parentPlugin");
gis.parentPlugin = function () {
    this._parentName = "xnn";
};
gis.definePrototype(gis.parentPlugin.prototype, {
    parentName : {
        get : function () {
            return this._parentName;
        },
        set : function (value) {
            this._parentName = value;
        }
    }
});
gis.parentPlugin.prototype.parentHello = function () {
    console.log(this.parentName);
};