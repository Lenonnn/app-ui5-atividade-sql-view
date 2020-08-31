/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"Seleciona_dados/Dados_SQLView_ZGETV07/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"Seleciona_dados/Dados_SQLView_ZGETV07/test/integration/pages/App",
	"Seleciona_dados/Dados_SQLView_ZGETV07/test/integration/pages/Browser",
	"Seleciona_dados/Dados_SQLView_ZGETV07/test/integration/pages/Master",
	"Seleciona_dados/Dados_SQLView_ZGETV07/test/integration/pages/Detail",
	"Seleciona_dados/Dados_SQLView_ZGETV07/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "Seleciona_dados.Dados_SQLView_ZGETV07.view."
	});

	sap.ui.require([
		"Seleciona_dados/Dados_SQLView_ZGETV07/test/integration/NavigationJourneyPhone",
		"Seleciona_dados/Dados_SQLView_ZGETV07/test/integration/NotFoundJourneyPhone",
		"Seleciona_dados/Dados_SQLView_ZGETV07/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});