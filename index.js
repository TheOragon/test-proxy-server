"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var cors_1 = __importDefault(require("cors"));
var express_1 = __importStar(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var mailer_1 = __importDefault(require("./mailer"));
var version = require("./package.json").version;
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, express_1.text)());
app.use((0, express_1.json)());
app.use((0, morgan_1.default)("dev"));
app.get("/", function (req, res) {
    res.status(200).send("Proxy Live v".concat(version));
});
app.all("/test", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var alert, email;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                alert = req.body;
                email = "samuleagina20@gmail.com";
                console.info(JSON.stringify(alert));
                console.info(alert);
                return [4 /*yield*/, new mailer_1.default([email, "motet_tanners0o@icloud.com", "odogwuconfidence1@gmail.com"], 'Testing Bot', "".concat(alert))];
            case 1:
                _a.sent();
                res.status(200).send("Success");
                return [2 /*return*/];
        }
    });
}); });
app.all("/go", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, url, body, headers, _b, method, result, _c, data, resHeaders, status, key;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = req.body, url = _a.url, body = _a.body, headers = _a.headers, _b = _a.method, method = _b === void 0 ? "GET" : _b;
                return [4 /*yield*/, (0, axios_1.default)({
                        method: method,
                        url: url,
                        data: body, headers: headers, timeout: 25 * 1000
                    }).catch(function (err) {
                        if (err.response) {
                            var _a = err.response, status_1 = _a.status, data_1 = _a.data;
                            return res.status(status_1).send(data_1);
                        }
                        return res.status(500).send({ message: "server error occurred", data: null, status: false });
                    })];
            case 1:
                result = _d.sent();
                if (!result) {
                    return [2 /*return*/];
                }
                _c = result, data = _c.data, resHeaders = _c.headers, status = _c.status;
                for (key in resHeaders) {
                    res.setHeader(key, resHeaders[key]);
                }
                return [2 /*return*/, res.status(status).send(data)];
        }
    });
}); });
var PORT = Number(process.env.PORT || '') || 8080;
var server = app.listen(PORT, function () {
    console.log("Server Running on http://localhost:".concat(PORT));
});
// process.on("SIGKILL", () => {
//      console.log("Shutting down server");
//      server.close();
// })
