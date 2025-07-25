/*eslint no-console: 0, no-unused-vars: 0*/
"use strict";

var xsjs = require("@sap/async-xsjs");
var xsenv = require("@sap/xsenv");
var port = process.env.PORT || 3000;

var options = {
	// 
	// 주석 첨가 - 인증된 사용자만 접근 가능 
	// 주석 해제 - 익명 사용자 접근 가능
	//
	//	anonymous : true, // remove to authenticate calls
	auditLog: {
		logToConsole: true
	}, // change to auditlog service for productive scenarios
	redirectUrl: "/index.xsjs"
};

// configure HANA
try {
	options = Object.assign(options, xsenv.getServices({
		hana: {
			tag: "hana"
		}
	}));
} catch (err) {
	console.log("[WARN]", err.message);
}

// configure UAA
try {
	options = Object.assign(options, xsenv.getServices({
		uaa: {
			tag: "xsuaa"
		}
	}));
} catch (err) {
	console.log("[WARN]", err.message);
}

// start server
const serve = async(port, options) => {
	(await xsjs(options)).listen(port);
	console.log("Server listening on port %d", port);
}

serve(port, options);