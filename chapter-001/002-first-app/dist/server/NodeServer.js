"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Http = require("http");
var NodeServer = /** @class */ (function () {
    function NodeServer() {
        var _this = this;
        this._port = 3000;
        this._server = Http.createServer(function (request, response) {
            response.end("Hello NodeJS!");
        });
        this._server.listen(this._port, "127.0.0.1", function () {
            console.log("Listening on port: " + _this._port);
        });
    }
    return NodeServer;
}());
exports.default = NodeServer;
//# sourceMappingURL=NodeServer.js.map