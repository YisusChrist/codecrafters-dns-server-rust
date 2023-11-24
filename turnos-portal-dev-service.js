// TURNOS PORTAL
define("YuCase6Page", [], function() {
	return {
		entitySchemaName: "Case",
		attributes: {
			"MyFieldChange": {
			    dependencies: [{
			      columns: ["YuTipoSolicitud"], //field to trigger change event for
			      methodName: "onMyFieldChange" //method to execute
			    }]
			},
			"Tipo Solicitud Colombia": {
			    dependencies: [{
			      columns: ["YuTipodeSolicitudColC"], //field to trigger change event for
			      methodName: "onMyFieldChange" //method to execute
			    }]
			},
			"Tipo Solicitud Chile": {
			    dependencies: [{
			      columns: ["YuTipodeSolicitudChiC"], //field to trigger change event for
			      methodName: "onMyFieldChange" //method to execute
			    }]
			},
			"Tipo Solicitud UK": {
			    dependencies: [{
			      columns: ["YuTipoSolicitudUKC"], //field to trigger change event for
			      methodName: "onMyFieldChange" //method to execute
			    }]
			},
			"VariableEditable":{
				dataValueType: Terrasoft.DataValueType.BOOLEAN,
				type: Terrasoft.ViewModelColumnType.VIRTUAL_COLUMN,
				value: true
			}
		},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "CaseFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "Case"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{
			"YuCampServ": {
				"56ab21f5-c440-4551-b90b-00c5acabb461": {
					"uId": "56ab21f5-c440-4551-b90b-00c5acabb461",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuAreaC"
							},
							"rightExpression": {
								"type": 0,
								"value": "0c6d0ca2-c64c-4998-9599-f221af1c17ec",
								"dataValueType": 10
							}
						}
					]
				},
				"2d13457b-7201-48e5-8719-ab443be22b43": {
					"uId": "2d13457b-7201-48e5-8719-ab443be22b43",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status",
								"attributePath": "IsFinal"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						}
					]
				},
				"c7e412ad-b116-4e47-beb6-913710579799": {
					"uId": "c7e412ad-b116-4e47-beb6-913710579799",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 4,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitud"
							},
							"rightExpression": {
								"type": 0,
								"value": "88c265f9-f976-4baa-b471-41ac5bfbd55c",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuNombreApellSol": {
				"cca39b8c-6897-4db6-8bf9-a8a2a234faa1": {
					"uId": "cca39b8c-6897-4db6-8bf9-a8a2a234faa1",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuAreaC"
							},
							"rightExpression": {
								"type": 0,
								"value": "0c6d0ca2-c64c-4998-9599-f221af1c17ec",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuMotivoResolucion": {
				"4ce325b6-1bb6-41a8-9f05-e7ba7001f47f": {
					"uId": "4ce325b6-1bb6-41a8-9f05-e7ba7001f47f",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "YuMotivoResolucion"
							}
						}
					]
				}
			},
			"YuFechaTurnoDesde": {
				"1e4ac278-0e88-4682-8703-33fa11dc711b": {
					"uId": "1e4ac278-0e88-4682-8703-33fa11dc711b",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitud"
							},
							"rightExpression": {
								"type": 0,
								"value": "b7ccb96a-c9be-4b80-b12e-ff43fdc935aa",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudColC"
							},
							"rightExpression": {
								"type": 0,
								"value": "b22d1e81-1bed-4655-a2b0-6a7fd8343ef6",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudChiC"
							},
							"rightExpression": {
								"type": 0,
								"value": "9151ab0b-e7a2-4c27-b88f-ba1acde8ef99",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitudUKC"
							},
							"rightExpression": {
								"type": 0,
								"value": "6a7b75f0-8d80-4655-9a38-58c5d3680cbc",
								"dataValueType": 10
							}
						}
					]
				},
				"26e7b87b-ab91-4d9b-9b7f-74e86fec4a8e": {
					"uId": "26e7b87b-ab91-4d9b-9b7f-74e86fec4a8e",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status",
								"attributePath": "IsFinal"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"YuFechaTurnoDesde2": {
				"71eed495-54b0-4911-89fe-67825cb900df": {
					"uId": "71eed495-54b0-4911-89fe-67825cb900df",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitud"
							},
							"rightExpression": {
								"type": 0,
								"value": "b7ccb96a-c9be-4b80-b12e-ff43fdc935aa",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudColC"
							},
							"rightExpression": {
								"type": 0,
								"value": "b22d1e81-1bed-4655-a2b0-6a7fd8343ef6",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudChiC"
							},
							"rightExpression": {
								"type": 0,
								"value": "9151ab0b-e7a2-4c27-b88f-ba1acde8ef99",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitudUKC"
							},
							"rightExpression": {
								"type": 0,
								"value": "6a7b75f0-8d80-4655-9a38-58c5d3680cbc",
								"dataValueType": 10
							}
						}
					]
				},
				"1c7de82b-cc27-4a72-bd5f-80b8890d244a": {
					"uId": "1c7de82b-cc27-4a72-bd5f-80b8890d244a",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status",
								"attributePath": "IsFinal"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"YuTipoTurnoSolic": {
				"9ff8ef5d-c7ab-42fa-be33-ecd2ddb5de84": {
					"uId": "9ff8ef5d-c7ab-42fa-be33-ecd2ddb5de84",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitud"
							},
							"rightExpression": {
								"type": 0,
								"value": "b7ccb96a-c9be-4b80-b12e-ff43fdc935aa",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitud"
							},
							"rightExpression": {
								"type": 0,
								"value": "7b5ac6ca-abd4-4016-96ab-db46c50a08f4",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudColC"
							},
							"rightExpression": {
								"type": 0,
								"value": "b22d1e81-1bed-4655-a2b0-6a7fd8343ef6",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudColC"
							},
							"rightExpression": {
								"type": 0,
								"value": "75e56f6a-17af-4985-bdef-3699f391fc8c",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudChiC"
							},
							"rightExpression": {
								"type": 0,
								"value": "9151ab0b-e7a2-4c27-b88f-ba1acde8ef99",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitudUKC"
							},
							"rightExpression": {
								"type": 0,
								"value": "6a7b75f0-8d80-4655-9a38-58c5d3680cbc",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitudUKC"
							},
							"rightExpression": {
								"type": 0,
								"value": "a8acd2a0-9f25-4d3f-9755-c84188c00ebb",
								"dataValueType": 10
							}
						}
					]
				},
				"0a950b76-94ab-4907-9c74-c6df77514d77": {
					"uId": "0a950b76-94ab-4907-9c74-c6df77514d77",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status",
								"attributePath": "IsFinal"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"YuHasta": {
				"f122ddbb-dcca-4685-9c3a-c9d5e57c2ec1": {
					"uId": "f122ddbb-dcca-4685-9c3a-c9d5e57c2ec1",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitud"
							},
							"rightExpression": {
								"type": 0,
								"value": "b7ccb96a-c9be-4b80-b12e-ff43fdc935aa",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudColC"
							},
							"rightExpression": {
								"type": 0,
								"value": "b22d1e81-1bed-4655-a2b0-6a7fd8343ef6",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudChiC"
							},
							"rightExpression": {
								"type": 0,
								"value": "9151ab0b-e7a2-4c27-b88f-ba1acde8ef99",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitudUKC"
							},
							"rightExpression": {
								"type": 0,
								"value": "6a7b75f0-8d80-4655-9a38-58c5d3680cbc",
								"dataValueType": 10
							}
						}
					]
				},
				"9dca71be-4402-4876-860e-0e384cf48035": {
					"uId": "9dca71be-4402-4876-860e-0e384cf48035",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status",
								"attributePath": "IsFinal"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"YuHasta2": {
				"788e1d0f-2479-4322-a7e7-80677f24192e": {
					"uId": "788e1d0f-2479-4322-a7e7-80677f24192e",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitud"
							},
							"rightExpression": {
								"type": 0,
								"value": "b7ccb96a-c9be-4b80-b12e-ff43fdc935aa",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudChiC"
							},
							"rightExpression": {
								"type": 0,
								"value": "9151ab0b-e7a2-4c27-b88f-ba1acde8ef99",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudColC"
							},
							"rightExpression": {
								"type": 0,
								"value": "b22d1e81-1bed-4655-a2b0-6a7fd8343ef6",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitudUKC"
							},
							"rightExpression": {
								"type": 0,
								"value": "6a7b75f0-8d80-4655-9a38-58c5d3680cbc",
								"dataValueType": 10
							}
						}
					]
				},
				"c3bfc8a4-5aa5-42bb-b202-c5fb5423486a": {
					"uId": "c3bfc8a4-5aa5-42bb-b202-c5fb5423486a",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status",
								"attributePath": "IsFinal"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"YuHoraInicio": {
				"e3e1d893-76de-45a0-9738-4daae7998541": {
					"uId": "e3e1d893-76de-45a0-9738-4daae7998541",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitud"
							},
							"rightExpression": {
								"type": 0,
								"value": "b7ccb96a-c9be-4b80-b12e-ff43fdc935aa",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudColC"
							},
							"rightExpression": {
								"type": 0,
								"value": "b22d1e81-1bed-4655-a2b0-6a7fd8343ef6",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudChiC"
							},
							"rightExpression": {
								"type": 0,
								"value": "9151ab0b-e7a2-4c27-b88f-ba1acde8ef99",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitudUKC"
							},
							"rightExpression": {
								"type": 0,
								"value": "6a7b75f0-8d80-4655-9a38-58c5d3680cbc",
								"dataValueType": 10
							}
						}
					]
				},
				"4ca2aaa0-b74e-488d-95a9-b664aa87b6cd": {
					"uId": "4ca2aaa0-b74e-488d-95a9-b664aa87b6cd",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status",
								"attributePath": "IsFinal"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"YuHoraInicio2": {
				"ebc73fd1-3cf3-43c1-b23d-4d224e5a268f": {
					"uId": "ebc73fd1-3cf3-43c1-b23d-4d224e5a268f",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitud"
							},
							"rightExpression": {
								"type": 0,
								"value": "b7ccb96a-c9be-4b80-b12e-ff43fdc935aa",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudChiC"
							},
							"rightExpression": {
								"type": 0,
								"value": "9151ab0b-e7a2-4c27-b88f-ba1acde8ef99",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudColC"
							},
							"rightExpression": {
								"type": 0,
								"value": "b22d1e81-1bed-4655-a2b0-6a7fd8343ef6",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitudUKC"
							},
							"rightExpression": {
								"type": 0,
								"value": "6a7b75f0-8d80-4655-9a38-58c5d3680cbc",
								"dataValueType": 10
							}
						}
					]
				},
				"8c750c89-d66c-40a7-8123-e1fb291ffbde": {
					"uId": "8c750c89-d66c-40a7-8123-e1fb291ffbde",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status",
								"attributePath": "IsFinal"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"YuHoraFin": {
				"b82d63cf-5d99-4dae-be7e-abcaf42504aa": {
					"uId": "b82d63cf-5d99-4dae-be7e-abcaf42504aa",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitud"
							},
							"rightExpression": {
								"type": 0,
								"value": "b7ccb96a-c9be-4b80-b12e-ff43fdc935aa",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudChiC"
							},
							"rightExpression": {
								"type": 0,
								"value": "9151ab0b-e7a2-4c27-b88f-ba1acde8ef99",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudColC"
							},
							"rightExpression": {
								"type": 0,
								"value": "b22d1e81-1bed-4655-a2b0-6a7fd8343ef6",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitudUKC"
							},
							"rightExpression": {
								"type": 0,
								"value": "6a7b75f0-8d80-4655-9a38-58c5d3680cbc",
								"dataValueType": 10
							}
						}
					]
				},
				"06b69556-bc50-4fad-b31e-792ed4e30b18": {
					"uId": "06b69556-bc50-4fad-b31e-792ed4e30b18",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status",
								"attributePath": "IsFinal"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"YuHoraFin2": {
				"fe1549b9-3753-4595-8c13-3b37199baed0": {
					"uId": "fe1549b9-3753-4595-8c13-3b37199baed0",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitud"
							},
							"rightExpression": {
								"type": 0,
								"value": "b7ccb96a-c9be-4b80-b12e-ff43fdc935aa",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudColC"
							},
							"rightExpression": {
								"type": 0,
								"value": "b22d1e81-1bed-4655-a2b0-6a7fd8343ef6",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudChiC"
							},
							"rightExpression": {
								"type": 0,
								"value": "9151ab0b-e7a2-4c27-b88f-ba1acde8ef99",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitudUKC"
							},
							"rightExpression": {
								"type": 0,
								"value": "6a7b75f0-8d80-4655-9a38-58c5d3680cbc",
								"dataValueType": 10
							}
						}
					]
				},
				"8effe12c-db49-4789-99c0-be56a6be6e71": {
					"uId": "8effe12c-db49-4789-99c0-be56a6be6e71",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status",
								"attributePath": "IsFinal"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"YuTipoTurno": {
				"1ddb4871-3140-4dc8-89e2-c130e4482d71": {
					"uId": "1ddb4871-3140-4dc8-89e2-c130e4482d71",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitud"
							},
							"rightExpression": {
								"type": 0,
								"value": "b7ccb96a-c9be-4b80-b12e-ff43fdc935aa",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudChiC"
							},
							"rightExpression": {
								"type": 0,
								"value": "9151ab0b-e7a2-4c27-b88f-ba1acde8ef99",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudColC"
							},
							"rightExpression": {
								"type": 0,
								"value": "b22d1e81-1bed-4655-a2b0-6a7fd8343ef6",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitudUKC"
							},
							"rightExpression": {
								"type": 0,
								"value": "6a7b75f0-8d80-4655-9a38-58c5d3680cbc",
								"dataValueType": 10
							}
						}
					]
				},
				"bd24a21f-55ab-465e-a3c8-826a30ab0420": {
					"uId": "bd24a21f-55ab-465e-a3c8-826a30ab0420",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status",
								"attributePath": "IsFinal"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"YuNombre": {
				"b192e07c-dabf-4835-b333-cb6544d75fc4": {
					"uId": "b192e07c-dabf-4835-b333-cb6544d75fc4",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuSolicitudCambioDiaOff"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"b7070743-5fee-4df0-9162-1cd50a2e07c0": {
					"uId": "b7070743-5fee-4df0-9162-1cd50a2e07c0",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuSolicitudCambioDiaOff"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"1e6724c4-4414-4b8a-a752-031c7f21f4f1": {
					"uId": "1e6724c4-4414-4b8a-a752-031c7f21f4f1",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 2,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitud"
							},
							"rightExpression": {
								"type": 0,
								"value": "b7ccb96a-c9be-4b80-b12e-ff43fdc935aa",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuSolicitudCambioDiaOff"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"bead40ae-0d4d-46d1-80e5-be1657df1d22": {
					"uId": "bead40ae-0d4d-46d1-80e5-be1657df1d22",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status",
								"attributePath": "IsFinal"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						}
					]
				},
				"4d842ed9-b683-4c6d-b444-96c3b7ca1ee0": {
					"uId": "4d842ed9-b683-4c6d-b444-96c3b7ca1ee0",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuSolicitudCambioDiaOff"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudColC"
							},
							"rightExpression": {
								"type": 0,
								"value": "b22d1e81-1bed-4655-a2b0-6a7fd8343ef6",
								"dataValueType": 10
							}
						}
					]
				},
				"9d899584-f21d-446d-ab7e-37486882843c": {
					"uId": "9d899584-f21d-446d-ab7e-37486882843c",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuSolicitudCambioDiaOff"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudColC"
							},
							"rightExpression": {
								"type": 0,
								"value": "b22d1e81-1bed-4655-a2b0-6a7fd8343ef6",
								"dataValueType": 10
							}
						}
					]
				},
				"2b4836d6-41ef-440e-8a0f-16f05689d8ee": {
					"uId": "2b4836d6-41ef-440e-8a0f-16f05689d8ee",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuSolicitudCambioDiaOff"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitudUKC"
							},
							"rightExpression": {
								"type": 0,
								"value": "6a7b75f0-8d80-4655-9a38-58c5d3680cbc",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuApellidos": {
				"7abed80b-9248-41a8-99db-21325e39b8f3": {
					"uId": "7abed80b-9248-41a8-99db-21325e39b8f3",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuSolicitudCambioDiaOff"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"8498021c-19b7-4d48-890a-efe26528a34d": {
					"uId": "8498021c-19b7-4d48-890a-efe26528a34d",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuSolicitudCambioDiaOff"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"fc00b59f-d2d4-464f-ad76-3ed20d5d8cc6": {
					"uId": "fc00b59f-d2d4-464f-ad76-3ed20d5d8cc6",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status",
								"attributePath": "IsFinal"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"YuHoraInicioFueraDeBanda": {
				"fbde6206-19d2-4a01-a67e-c9da317996de": {
					"uId": "fbde6206-19d2-4a01-a67e-c9da317996de",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitud"
							},
							"rightExpression": {
								"type": 0,
								"value": "0ad86c6c-469f-48d0-8702-7ddd411a9c79",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudChiC"
							},
							"rightExpression": {
								"type": 0,
								"value": "21914efb-c731-4f1e-b92f-daf219cd2ddc",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudColC"
							},
							"rightExpression": {
								"type": 0,
								"value": "c7777ba0-ed15-4c61-b22b-84f23f74ae26",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitudUKC"
							},
							"rightExpression": {
								"type": 0,
								"value": "7a1c2c30-ff61-48ec-a00c-c8d37a7b3463",
								"dataValueType": 10
							}
						}
					]
				},
				"e08126c0-9cd9-4baf-8f17-921612a18f8e": {
					"uId": "e08126c0-9cd9-4baf-8f17-921612a18f8e",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status",
								"attributePath": "IsFinal"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"YuHoraFinFueraDeBanda": {
				"4a1185ed-ff16-4bfa-baae-40d5fc315635": {
					"uId": "4a1185ed-ff16-4bfa-baae-40d5fc315635",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitud"
							},
							"rightExpression": {
								"type": 0,
								"value": "0ad86c6c-469f-48d0-8702-7ddd411a9c79",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudChiC"
							},
							"rightExpression": {
								"type": 0,
								"value": "21914efb-c731-4f1e-b92f-daf219cd2ddc",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudColC"
							},
							"rightExpression": {
								"type": 0,
								"value": "c7777ba0-ed15-4c61-b22b-84f23f74ae26",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitudUKC"
							},
							"rightExpression": {
								"type": 0,
								"value": "7a1c2c30-ff61-48ec-a00c-c8d37a7b3463",
								"dataValueType": 10
							}
						}
					]
				},
				"cae9d918-5250-45cf-8a33-110b57a27984": {
					"uId": "cae9d918-5250-45cf-8a33-110b57a27984",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status",
								"attributePath": "IsFinal"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"YuDuracionFueraDeBanda": {
				"b71a0be9-e532-45c6-bedd-7fe63c163151": {
					"uId": "b71a0be9-e532-45c6-bedd-7fe63c163151",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitud"
							},
							"rightExpression": {
								"type": 0,
								"value": "0ad86c6c-469f-48d0-8702-7ddd411a9c79",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudChiC"
							},
							"rightExpression": {
								"type": 0,
								"value": "21914efb-c731-4f1e-b92f-daf219cd2ddc",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudColC"
							},
							"rightExpression": {
								"type": 0,
								"value": "c7777ba0-ed15-4c61-b22b-84f23f74ae26",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitudUKC"
							},
							"rightExpression": {
								"type": 0,
								"value": "7a1c2c30-ff61-48ec-a00c-c8d37a7b3463",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuFechaFinFueraDeBanda": {
				"59d00cce-d62a-4f3c-9e24-fa75c4b64941": {
					"uId": "59d00cce-d62a-4f3c-9e24-fa75c4b64941",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuFechaFinFB"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"2627b6f7-7bb6-45f5-971f-cc3291df0b7d": {
					"uId": "2627b6f7-7bb6-45f5-971f-cc3291df0b7d",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuFechaFinFB"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"fecba06a-d624-4904-9c90-4de786540373": {
					"uId": "fecba06a-d624-4904-9c90-4de786540373",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status",
								"attributePath": "IsFinal"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"YuCampana": {
				"c3270309-aad6-49a0-b365-ebadac15bac2": {
					"uId": "c3270309-aad6-49a0-b365-ebadac15bac2",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuPermanenciaCampanaFB"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"ad8d9f19-d65d-4d1a-9ed5-9024b16f2d9f": {
					"uId": "ad8d9f19-d65d-4d1a-9ed5-9024b16f2d9f",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuPermanenciaCampanaFB"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"d7d08548-04af-42b8-b5e5-8478f78f9dd9": {
					"uId": "d7d08548-04af-42b8-b5e5-8478f78f9dd9",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status",
								"attributePath": "IsFinal"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"YuSolLact": {
				"02a153b9-0db9-483b-aff5-4930975bf71c": {
					"uId": "02a153b9-0db9-483b-aff5-4930975bf71c",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitud"
							},
							"rightExpression": {
								"type": 0,
								"value": "15b6c62f-50b5-4ffb-8e6a-433a41203621",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudChiC"
							},
							"rightExpression": {
								"type": 0,
								"value": "32c20b45-98cf-4f10-a55e-e5c23463054f",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudColC"
							},
							"rightExpression": {
								"type": 0,
								"value": "d3c1a5a9-2760-4991-9854-87ec5eee2a44",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitudUKC"
							},
							"rightExpression": {
								"type": 0,
								"value": "a621e399-e0bf-495b-bc94-bdf67eac736c",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuUltimoDiaPermisoMaternidad": {
				"3f0f67d6-3a05-42da-b7f0-3b44ef754c72": {
					"uId": "3f0f67d6-3a05-42da-b7f0-3b44ef754c72",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuAcumulacionHorasLactancia"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"648855a6-dcb1-4c26-a4b9-2bc00d83b5aa": {
					"uId": "648855a6-dcb1-4c26-a4b9-2bc00d83b5aa",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuAcumulacionHorasLactancia"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"1962e800-0732-4681-bb70-e007f96a901a": {
					"uId": "1962e800-0732-4681-bb70-e007f96a901a",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status",
								"attributePath": "IsFinal"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"YuFechaInicioAcumulacion": {
				"8db22187-6df3-45a0-9641-4cb202cf993d": {
					"uId": "8db22187-6df3-45a0-9641-4cb202cf993d",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuAcumulacionHorasLactancia"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"4b7e8b74-2b65-48bd-b7b2-ec1b1d699fdc": {
					"uId": "4b7e8b74-2b65-48bd-b7b2-ec1b1d699fdc",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuAcumulacionHorasLactancia"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"97493e59-38c5-4e6d-b5ea-5f56e487cdc5": {
					"uId": "97493e59-38c5-4e6d-b5ea-5f56e487cdc5",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status",
								"attributePath": "IsFinal"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"YuFechaInicioRedPermLactancia": {
				"7c01cd5b-8f56-4ab5-a9aa-66ceb712855a": {
					"uId": "7c01cd5b-8f56-4ab5-a9aa-66ceb712855a",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuReduccionPermisoLactancia"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"8ad5a51d-61de-4e64-a068-99d69d9521d8": {
					"uId": "8ad5a51d-61de-4e64-a068-99d69d9521d8",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuReduccionPermisoLactancia"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"ebd638cd-04ea-458e-9827-e54668181bf5": {
					"uId": "ebd638cd-04ea-458e-9827-e54668181bf5",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status",
								"attributePath": "IsFinal"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"YuFechaFinRedPermLactancia": {
				"8d8bac2f-2f9e-4293-8862-54dbce937fce": {
					"uId": "8d8bac2f-2f9e-4293-8862-54dbce937fce",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuReduccionPermisoLactancia"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"0ce0c440-a802-435b-939d-2dd40158cbf1": {
					"uId": "0ce0c440-a802-435b-939d-2dd40158cbf1",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuReduccionPermisoLactancia"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"66f0e8a6-05e7-4d0b-8d1e-8aec899c67e2": {
					"uId": "66f0e8a6-05e7-4d0b-8d1e-8aec899c67e2",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status",
								"attributePath": "IsFinal"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"YuTipoSolicitudFestivos": {
				"39deef23-3cfa-4f48-b36e-1cb0b488cd69": {
					"uId": "39deef23-3cfa-4f48-b36e-1cb0b488cd69",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitud"
							},
							"rightExpression": {
								"type": 0,
								"value": "7b5ac6ca-abd4-4016-96ab-db46c50a08f4",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudChiC"
							},
							"rightExpression": {
								"type": 0,
								"value": "766eeaf6-6afd-4047-9a62-537134538a90",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudColC"
							},
							"rightExpression": {
								"type": 0,
								"value": "75e56f6a-17af-4985-bdef-3699f391fc8c",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitudUKC"
							},
							"rightExpression": {
								"type": 0,
								"value": "a8acd2a0-9f25-4d3f-9755-c84188c00ebb",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuAutorizado1": {
				"b83fc326-f2b1-4e15-9f80-d57cfe4da755": {
					"uId": "b83fc326-f2b1-4e15-9f80-d57cfe4da755",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuAutorizado1"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"YuAutorizado2": {
				"3d5a61e7-9a98-41b5-b195-e0672eb9090e": {
					"uId": "3d5a61e7-9a98-41b5-b195-e0672eb9090e",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuAutorizado2"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"YuAutorizado3": {
				"ea58724f-906b-46d1-8e25-dcfc110cca4b": {
					"uId": "ea58724f-906b-46d1-8e25-dcfc110cca4b",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuAutorizado3"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"YuAutorizado4": {
				"974ac397-df30-4be3-85fb-ab3af78f348f": {
					"uId": "974ac397-df30-4be3-85fb-ab3af78f348f",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuAutorizado4"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"YuDiaAPasarOff": {
				"63e2ab4c-9788-4a6a-82e3-824947f057e0": {
					"uId": "63e2ab4c-9788-4a6a-82e3-824947f057e0",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuSolicitudCambioDiaOff"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"8802dbeb-44a1-422b-ad39-a2c5df7bfc02": {
					"uId": "8802dbeb-44a1-422b-ad39-a2c5df7bfc02",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuSolicitudCambioDiaOff"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"aa66cd77-5bb0-47a2-aafb-52ab435a3c7a": {
					"uId": "aa66cd77-5bb0-47a2-aafb-52ab435a3c7a",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status",
								"attributePath": "IsFinal"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"YuDiaAPasarOffCambio": {
				"89378988-6777-41ca-9a36-2d60607537f9": {
					"uId": "89378988-6777-41ca-9a36-2d60607537f9",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuSolicitudCambioDiaOff"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"d5dc82a2-9606-46aa-bb6c-8c3e08f4c209": {
					"uId": "d5dc82a2-9606-46aa-bb6c-8c3e08f4c209",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuSolicitudCambioDiaOff"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"b2a55975-e340-4b3d-8d19-0073080ed7db": {
					"uId": "b2a55975-e340-4b3d-8d19-0073080ed7db",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status",
								"attributePath": "IsFinal"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"YuDiaOff": {
				"86ac9741-4a90-4943-b3ce-91c2b7a266b5": {
					"uId": "86ac9741-4a90-4943-b3ce-91c2b7a266b5",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuSolicitudCambioDiaOff"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"8e761a46-c5a7-43ee-b0a5-8bc426c8d440": {
					"uId": "8e761a46-c5a7-43ee-b0a5-8bc426c8d440",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuSolicitudCambioDiaOff"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"d62d3e13-5489-4887-bb3e-170ec8bfcb4d": {
					"uId": "d62d3e13-5489-4887-bb3e-170ec8bfcb4d",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status",
								"attributePath": "IsFinal"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"YuDiaOffCambio": {
				"1f42d137-8d08-44f1-aa0f-164492a2c490": {
					"uId": "1f42d137-8d08-44f1-aa0f-164492a2c490",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuSolicitudCambioDiaOff"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"72d2c5cb-e368-4141-9ab7-20b3b79027ef": {
					"uId": "72d2c5cb-e368-4141-9ab7-20b3b79027ef",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuSolicitudCambioDiaOff"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"a9bdd70f-91b1-4651-8e2a-472369550176": {
					"uId": "a9bdd70f-91b1-4651-8e2a-472369550176",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status",
								"attributePath": "IsFinal"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"YuHorarioSolicitado": {
				"b163b1cd-ec3e-4a8a-aba2-ea48bdf2b9e2": {
					"uId": "b163b1cd-ec3e-4a8a-aba2-ea48bdf2b9e2",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitud"
							},
							"rightExpression": {
								"type": 0,
								"value": "1156dd8b-cb5f-4f90-b0ba-14abc011e7ec",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudChiC"
							},
							"rightExpression": {
								"type": 0,
								"value": "21914efb-c731-4f1e-b92f-daf219cd2ddc",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudColC"
							},
							"rightExpression": {
								"type": 0,
								"value": "3f397d0e-50c9-436c-a35e-feaad98cdb54",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitudUKC"
							},
							"rightExpression": {
								"type": 0,
								"value": "8c336b20-a6da-4c72-8fb2-973d98a0644e",
								"dataValueType": 10
							}
						}
					]
				},
				"c2fb0d03-9a52-44b3-b94e-1abf59fd55ce": {
					"uId": "c2fb0d03-9a52-44b3-b94e-1abf59fd55ce",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status",
								"attributePath": "IsFinal"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"YuMotivoSolicitud": {
				"5701d68e-3014-4d10-9cc9-277037723e3b": {
					"uId": "5701d68e-3014-4d10-9cc9-277037723e3b",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitud"
							},
							"rightExpression": {
								"type": 0,
								"value": "1156dd8b-cb5f-4f90-b0ba-14abc011e7ec",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudChiC"
							},
							"rightExpression": {
								"type": 0,
								"value": "21914efb-c731-4f1e-b92f-daf219cd2ddc",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudColC"
							},
							"rightExpression": {
								"type": 0,
								"value": "3f397d0e-50c9-436c-a35e-feaad98cdb54",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitudUKC"
							},
							"rightExpression": {
								"type": 0,
								"value": "8c336b20-a6da-4c72-8fb2-973d98a0644e",
								"dataValueType": 10
							}
						}
					]
				},
				"4a9a88e8-1ae2-42e3-8755-762048f412ba": {
					"uId": "4a9a88e8-1ae2-42e3-8755-762048f412ba",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status",
								"attributePath": "IsFinal"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"YuTurnoActual": {
				"3ce61d22-a879-4f1a-b44f-0284af5995f4": {
					"uId": "3ce61d22-a879-4f1a-b44f-0284af5995f4",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitud"
							},
							"rightExpression": {
								"type": 0,
								"value": "1156dd8b-cb5f-4f90-b0ba-14abc011e7ec",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitud"
							},
							"rightExpression": {
								"type": 0,
								"value": "ecc85a02-ff85-456b-9dbd-914c7cff5523",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudChiC"
							},
							"rightExpression": {
								"type": 0,
								"value": "21914efb-c731-4f1e-b92f-daf219cd2ddc",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudColC"
							},
							"rightExpression": {
								"type": 0,
								"value": "3f397d0e-50c9-436c-a35e-feaad98cdb54",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudColC"
							},
							"rightExpression": {
								"type": 0,
								"value": "a40f3548-c93d-4969-93d1-6684a86bdb03",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitudUKC"
							},
							"rightExpression": {
								"type": 0,
								"value": "8c336b20-a6da-4c72-8fb2-973d98a0644e",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitudUKC"
							},
							"rightExpression": {
								"type": 0,
								"value": "d55c4904-45aa-4fb2-b32c-6d73a28faee7",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudChiC"
							},
							"rightExpression": {
								"type": 0,
								"value": "21914efb-c731-4f1e-b92f-daf219cd2ddc",
								"dataValueType": 10
							}
						}
					]
				},
				"859ed75d-1ce8-4af1-8958-6f9244f34ac0": {
					"uId": "859ed75d-1ce8-4af1-8958-6f9244f34ac0",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status",
								"attributePath": "IsFinal"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"YuNomCorres": {
				"9a9f0c36-46e3-4814-b184-064c87e65317": {
					"uId": "9a9f0c36-46e3-4814-b184-064c87e65317",
					"enabled": false,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitud"
							},
							"rightExpression": {
								"type": 0,
								"value": "569b3607-90c4-49f0-9086-eba6bed09f9b",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudColC"
							},
							"rightExpression": {
								"type": 0,
								"value": "b5112449-b9c4-4faf-a1c8-c8725541dd4c",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitudUKC"
							},
							"rightExpression": {
								"type": 0,
								"value": "a6824cb7-7d9a-4358-a91d-eb0f94ef6b67",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudChiC"
							},
							"rightExpression": {
								"type": 0,
								"value": "87b2806a-7c13-450c-956c-38279801eb37",
								"dataValueType": 10
							}
						}
					]
				},
				"cabb3928-c7b4-49a7-9a3c-f285ac683839": {
					"uId": "cabb3928-c7b4-49a7-9a3c-f285ac683839",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						}
					]
				},
				"18ea192d-7c81-4938-a408-841f0a07f55f": {
					"uId": "18ea192d-7c81-4938-a408-841f0a07f55f",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 3,
								"value": "CurrentUserContact",
								"dataValueType": 10
							},
							"rightExpression": {
								"type": 0,
								"value": "410006e1-ca4e-4502-a9ec-e54d922d2c00",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuNoFactible1": {
				"06115204-538c-4734-a189-13fd17a36fb9": {
					"uId": "06115204-538c-4734-a189-13fd17a36fb9",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuNoFactible1"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"YuNoFactible2": {
				"7df01190-6afd-44f7-bd90-dc5169d43257": {
					"uId": "7df01190-6afd-44f7-bd90-dc5169d43257",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuNoFactible2"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"YuNoFactible3": {
				"0a1357e0-d292-4692-a5e1-f35e0913ad39": {
					"uId": "0a1357e0-d292-4692-a5e1-f35e0913ad39",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuNoFactible3"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"YuNoFactible4": {
				"280700ee-f90b-4103-853b-632a3c68b608": {
					"uId": "280700ee-f90b-4103-853b-632a3c68b608",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuNoFactible4"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"YuPeriodoVacaciones": {
				"1fe4cd61-2e6b-45df-bd1c-1f9fb0b7d6db": {
					"uId": "1fe4cd61-2e6b-45df-bd1c-1f9fb0b7d6db",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitud"
							},
							"rightExpression": {
								"type": 0,
								"value": "8cbab6c1-9c91-403c-92ca-055fe930c41f",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudColC"
							},
							"rightExpression": {
								"type": 0,
								"value": "d012929e-7511-4915-bb59-9e208b5cd542",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitudUKC"
							},
							"rightExpression": {
								"type": 0,
								"value": "ecf049f0-a4d6-4a26-ac42-97b3c02f0a19",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudChiC"
							},
							"rightExpression": {
								"type": 0,
								"value": "1903b102-709e-4b1b-b735-673639377a03",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuFechaInicio1": {
				"b8b3aaf6-7e67-4001-a08d-a90a6ad18534": {
					"uId": "b8b3aaf6-7e67-4001-a08d-a90a6ad18534",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitud"
							},
							"rightExpression": {
								"type": 0,
								"value": "8cbab6c1-9c91-403c-92ca-055fe930c41f",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudColC"
							},
							"rightExpression": {
								"type": 0,
								"value": "d012929e-7511-4915-bb59-9e208b5cd542",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitudUKC"
							},
							"rightExpression": {
								"type": 0,
								"value": "ecf049f0-a4d6-4a26-ac42-97b3c02f0a19",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudChiC"
							},
							"rightExpression": {
								"type": 0,
								"value": "1903b102-709e-4b1b-b735-673639377a03",
								"dataValueType": 10
							}
						}
					]
				},
				"f3c6b0c6-69e4-4700-bb50-a58c3556d571": {
					"uId": "f3c6b0c6-69e4-4700-bb50-a58c3556d571",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status",
								"attributePath": "IsFinal"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"YuFechaFin1": {
				"a9ee51fe-c135-4151-85cb-169e40223c46": {
					"uId": "a9ee51fe-c135-4151-85cb-169e40223c46",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitud"
							},
							"rightExpression": {
								"type": 0,
								"value": "8cbab6c1-9c91-403c-92ca-055fe930c41f",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitudUKC"
							},
							"rightExpression": {
								"type": 0,
								"value": "ecf049f0-a4d6-4a26-ac42-97b3c02f0a19",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudChiC"
							},
							"rightExpression": {
								"type": 0,
								"value": "1903b102-709e-4b1b-b735-673639377a03",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudColC"
							},
							"rightExpression": {
								"type": 0,
								"value": "d012929e-7511-4915-bb59-9e208b5cd542",
								"dataValueType": 10
							}
						}
					]
				},
				"b740c70f-60ad-451e-8be3-8c1dbc846d14": {
					"uId": "b740c70f-60ad-451e-8be3-8c1dbc846d14",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status",
								"attributePath": "IsFinal"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"YuOpc1DiaSuelto1": {
				"884144a5-aca2-4f79-a9b8-692eb38da74d": {
					"uId": "884144a5-aca2-4f79-a9b8-692eb38da74d",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitud"
							},
							"rightExpression": {
								"type": 0,
								"value": "efa4ed39-1c7f-49ca-84c2-8f04fc450bd6",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudChiC"
							},
							"rightExpression": {
								"type": 0,
								"value": "766eeaf6-6afd-4047-9a62-537134538a90",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudColC"
							},
							"rightExpression": {
								"type": 0,
								"value": "b16b1b87-8ed1-47e2-9e09-82a0791aea75",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitudUKC"
							},
							"rightExpression": {
								"type": 0,
								"value": "c4b79ff8-edf5-4387-9dbe-bc6fbf3205a2",
								"dataValueType": 10
							}
						}
					]
				},
				"34e59f55-a232-40c4-a6e9-ae9e30a5eea9": {
					"uId": "34e59f55-a232-40c4-a6e9-ae9e30a5eea9",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status",
								"attributePath": "IsFinal"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"YuFranjaHor1": {
				"df81efef-8050-4f24-b6e1-ac82848bc4ba": {
					"uId": "df81efef-8050-4f24-b6e1-ac82848bc4ba",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitud"
							},
							"rightExpression": {
								"type": 0,
								"value": "ecc85a02-ff85-456b-9dbd-914c7cff5523",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudColC"
							},
							"rightExpression": {
								"type": 0,
								"value": "a40f3548-c93d-4969-93d1-6684a86bdb03",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitudUKC"
							},
							"rightExpression": {
								"type": 0,
								"value": "d55c4904-45aa-4fb2-b32c-6d73a28faee7",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuNHorasSol1": {
				"2f267ec4-6f9e-4d81-947b-058848c2b8a1": {
					"uId": "2f267ec4-6f9e-4d81-947b-058848c2b8a1",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitud"
							},
							"rightExpression": {
								"type": 0,
								"value": "ecc85a02-ff85-456b-9dbd-914c7cff5523",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudColC"
							},
							"rightExpression": {
								"type": 0,
								"value": "a40f3548-c93d-4969-93d1-6684a86bdb03",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitudUKC"
							},
							"rightExpression": {
								"type": 0,
								"value": "d55c4904-45aa-4fb2-b32c-6d73a28faee7",
								"dataValueType": 10
							}
						}
					]
				},
				"954e41fd-e9b1-4182-9b7b-00e16b6e5d74": {
					"uId": "954e41fd-e9b1-4182-9b7b-00e16b6e5d74",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status",
								"attributePath": "IsFinal"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"YuFecha": {
				"bcf007da-ab7b-442c-8b7c-274076bc8ff2": {
					"uId": "bcf007da-ab7b-442c-8b7c-274076bc8ff2",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitud"
							},
							"rightExpression": {
								"type": 0,
								"value": "ecc85a02-ff85-456b-9dbd-914c7cff5523",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudColC"
							},
							"rightExpression": {
								"type": 0,
								"value": "a40f3548-c93d-4969-93d1-6684a86bdb03",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitudUKC"
							},
							"rightExpression": {
								"type": 0,
								"value": "d55c4904-45aa-4fb2-b32c-6d73a28faee7",
								"dataValueType": 10
							}
						}
					]
				},
				"d8935b3d-a525-429b-9143-dbcc9ddc392c": {
					"uId": "d8935b3d-a525-429b-9143-dbcc9ddc392c",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status",
								"attributePath": "IsFinal"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"YuFestTra": {
				"823b4946-484c-43b0-a0c6-d81cf9577084": {
					"uId": "823b4946-484c-43b0-a0c6-d81cf9577084",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitud"
							},
							"rightExpression": {
								"type": 0,
								"value": "3bc43ba1-e096-442b-897c-cf33244dae49",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudColC"
							},
							"rightExpression": {
								"type": 0,
								"value": "4b779b2f-3ef4-40f1-be76-120bc64fec73",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitudUKC"
							},
							"rightExpression": {
								"type": 0,
								"value": "1b5d613f-d4cf-4d5e-a5eb-133493a32bf3",
								"dataValueType": 10
							}
						}
					]
				},
				"01d95724-9011-4c85-a9e9-437bd0fbe58f": {
					"uId": "01d95724-9011-4c85-a9e9-437bd0fbe58f",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status",
								"attributePath": "IsFinal"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"YuDiasSolicitados": {
				"3a0eb57a-8b47-4012-b067-06ed819e81f8": {
					"uId": "3a0eb57a-8b47-4012-b067-06ed819e81f8",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitud"
							},
							"rightExpression": {
								"type": 0,
								"value": "3bc43ba1-e096-442b-897c-cf33244dae49",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudColC"
							},
							"rightExpression": {
								"type": 0,
								"value": "4b779b2f-3ef4-40f1-be76-120bc64fec73",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitudUKC"
							},
							"rightExpression": {
								"type": 0,
								"value": "1b5d613f-d4cf-4d5e-a5eb-133493a32bf3",
								"dataValueType": 10
							}
						}
					]
				},
				"1f599374-edac-45c7-8f3f-8dc27702931c": {
					"uId": "1f599374-edac-45c7-8f3f-8dc27702931c",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status",
								"attributePath": "IsFinal"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"YuAutorizado": {
				"5dbb9032-15d2-49a4-b9d4-514e15cb3fc7": {
					"uId": "5dbb9032-15d2-49a4-b9d4-514e15cb3fc7",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuAutorizado"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"YuDenegado": {
				"6e907602-6175-4e0d-9e0a-23d64c2c6089": {
					"uId": "6e907602-6175-4e0d-9e0a-23d64c2c6089",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuDenegado"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"YuDiaSolicitado1": {
				"5f2925a1-2ba0-472f-ad9b-2ed4a134bd3b": {
					"uId": "5f2925a1-2ba0-472f-ad9b-2ed4a134bd3b",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitud"
							},
							"rightExpression": {
								"type": 0,
								"value": "7b5ac6ca-abd4-4016-96ab-db46c50a08f4",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitud"
							},
							"rightExpression": {
								"type": 0,
								"value": "ecc85a02-ff85-456b-9dbd-914c7cff5523",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudColC"
							},
							"rightExpression": {
								"type": 0,
								"value": "75e56f6a-17af-4985-bdef-3699f391fc8c",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudColC"
							},
							"rightExpression": {
								"type": 0,
								"value": "a40f3548-c93d-4969-93d1-6684a86bdb03",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitudUKC"
							},
							"rightExpression": {
								"type": 0,
								"value": "a8acd2a0-9f25-4d3f-9755-c84188c00ebb",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitudUKC"
							},
							"rightExpression": {
								"type": 0,
								"value": "d55c4904-45aa-4fb2-b32c-6d73a28faee7",
								"dataValueType": 10
							}
						}
					]
				},
				"f0911eaa-c767-4fd6-9f4a-3389967c291a": {
					"uId": "f0911eaa-c767-4fd6-9f4a-3389967c291a",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status",
								"attributePath": "IsFinal"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"YuDenegado1": {
				"9d9f49ab-d61b-4620-8226-1fed579eaded": {
					"uId": "9d9f49ab-d61b-4620-8226-1fed579eaded",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuDenegado1"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"YuDenegado2": {
				"e11394f5-a9b3-44f1-b5fd-3357a89dd0d9": {
					"uId": "e11394f5-a9b3-44f1-b5fd-3357a89dd0d9",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuDenegado2"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"YuDenegado3": {
				"b14bd98a-4f0c-4519-9aa4-82a8f6cd18d1": {
					"uId": "b14bd98a-4f0c-4519-9aa4-82a8f6cd18d1",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuDenegado3"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"YuDenegado4": {
				"1459ae9d-6b1a-428d-8245-ef63b5a1a8c1": {
					"uId": "1459ae9d-6b1a-428d-8245-ef63b5a1a8c1",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuDenegado4"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"YuSolicito": {
				"b2020ba8-a0f6-4fcb-a250-fa6b9c7f2cb4": {
					"uId": "b2020ba8-a0f6-4fcb-a250-fa6b9c7f2cb4",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitud"
							},
							"rightExpression": {
								"type": 0,
								"value": "1db6c046-d715-486b-b943-308d0e3d8a86",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitud"
							},
							"rightExpression": {
								"type": 0,
								"value": "6b5a6230-bc80-4989-bb50-f03983180348",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitud"
							},
							"rightExpression": {
								"type": 0,
								"value": "d0de36ff-57d8-454f-9fd5-479ee8c38abe",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitud"
							},
							"rightExpression": {
								"type": 0,
								"value": "c2210ba9-1d4d-41d5-82c5-b32fa58ae59f",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitud"
							},
							"rightExpression": {
								"type": 0,
								"value": "13177334-525f-4bb2-aba3-510cd85a4796",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitud"
							},
							"rightExpression": {
								"type": 0,
								"value": "d5049970-61c3-43ac-bb1f-f541987b42ef",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitud"
							},
							"rightExpression": {
								"type": 0,
								"value": "6601355b-dbcb-4c6f-9f26-fa6e31989865",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitud"
							},
							"rightExpression": {
								"type": 0,
								"value": "ce8bd067-e5d4-4cd8-8045-a40f591e2273",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitud"
							},
							"rightExpression": {
								"type": 0,
								"value": "43fe2fc6-8bd5-42bd-9251-c7d867021c68",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitud"
							},
							"rightExpression": {
								"type": 0,
								"value": "378956b4-e4e4-439d-85d8-8b52e6a1de08",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudChiC"
							},
							"rightExpression": {
								"type": 0,
								"value": "a0f9d3d1-5b69-4082-bbde-e9e09f9f0fc1",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudChiC"
							},
							"rightExpression": {
								"type": 0,
								"value": "a77a3980-d805-4b71-8953-39bea162ca9d",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudChiC"
							},
							"rightExpression": {
								"type": 0,
								"value": "c18e0639-1b03-4174-8ea2-9519035c9179",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudChiC"
							},
							"rightExpression": {
								"type": 0,
								"value": "32c20b45-98cf-4f10-a55e-e5c23463054f",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudColC"
							},
							"rightExpression": {
								"type": 0,
								"value": "b9aa2da6-b157-4833-8e45-6a726707ea32",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudColC"
							},
							"rightExpression": {
								"type": 0,
								"value": "f66dc930-93a6-4c56-83a8-4de7ae35e6f1",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudColC"
							},
							"rightExpression": {
								"type": 0,
								"value": "0e9dc9cc-9814-40cd-85af-7d9d2987024a",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudColC"
							},
							"rightExpression": {
								"type": 0,
								"value": "ee06f436-8552-4dbc-ac5e-70d7334df139",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudColC"
							},
							"rightExpression": {
								"type": 0,
								"value": "4e54ced1-1884-4c22-afdb-cab58c2d1510",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudColC"
							},
							"rightExpression": {
								"type": 0,
								"value": "8011a00f-9aa8-4348-920a-183e708f813d",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudColC"
							},
							"rightExpression": {
								"type": 0,
								"value": "c7fef982-de54-459f-82f3-2a758e289097",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudColC"
							},
							"rightExpression": {
								"type": 0,
								"value": "f83fa5c7-1e73-492f-ba0f-1dd45a277104",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudColC"
							},
							"rightExpression": {
								"type": 0,
								"value": "58aa90b1-cbb1-4ce5-ab1d-86e90211817c",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudColC"
							},
							"rightExpression": {
								"type": 0,
								"value": "ec5fa5d4-77d4-40b6-9492-029055debf05",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitudUKC"
							},
							"rightExpression": {
								"type": 0,
								"value": "bb9a2720-dfae-446a-ac84-269b506ee835",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitudUKC"
							},
							"rightExpression": {
								"type": 0,
								"value": "bf92f6ae-17c9-4dae-b431-38aaa647ddbf",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitudUKC"
							},
							"rightExpression": {
								"type": 0,
								"value": "ddc6f407-6325-409f-b0b8-70b4f71a0648",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitudUKC"
							},
							"rightExpression": {
								"type": 0,
								"value": "42a1eb7a-079e-483e-85b2-d8ae3ad0daf1",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitudUKC"
							},
							"rightExpression": {
								"type": 0,
								"value": "554fabc6-bca3-433c-a196-ad1ac719998c",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitudUKC"
							},
							"rightExpression": {
								"type": 0,
								"value": "2ab08cae-2205-4f53-b79a-854510893cf6",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitudUKC"
							},
							"rightExpression": {
								"type": 0,
								"value": "caaa086e-18ab-4115-a3d6-c449efcda069",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitudUKC"
							},
							"rightExpression": {
								"type": 0,
								"value": "1eaa9c85-3b38-4c6e-9300-dcefd53b1333",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitudUKC"
							},
							"rightExpression": {
								"type": 0,
								"value": "3dcf964a-8b08-4bd9-9f2b-9e6be998f689",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitudUKC"
							},
							"rightExpression": {
								"type": 0,
								"value": "3c5f014f-a223-484c-bf2c-bdd09a0b5705",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudChiC"
							},
							"rightExpression": {
								"type": 0,
								"value": "d33905c1-2c94-487b-b709-f3e1c07a3a26",
								"dataValueType": 10
							}
						}
					]
				},
				"64e24e5d-fa4a-42f9-ac63-1d9f57dcdfda": {
					"uId": "64e24e5d-fa4a-42f9-ac63-1d9f57dcdfda",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status",
								"attributePath": "IsFinal"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"YuMotivo": {
				"92f3d44a-55ce-4a39-82e1-4544f2d43ae6": {
					"uId": "92f3d44a-55ce-4a39-82e1-4544f2d43ae6",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitud"
							},
							"rightExpression": {
								"type": 0,
								"value": "1db6c046-d715-486b-b943-308d0e3d8a86",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitud"
							},
							"rightExpression": {
								"type": 0,
								"value": "6b5a6230-bc80-4989-bb50-f03983180348",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitud"
							},
							"rightExpression": {
								"type": 0,
								"value": "d0de36ff-57d8-454f-9fd5-479ee8c38abe",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitud"
							},
							"rightExpression": {
								"type": 0,
								"value": "c2210ba9-1d4d-41d5-82c5-b32fa58ae59f",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitud"
							},
							"rightExpression": {
								"type": 0,
								"value": "13177334-525f-4bb2-aba3-510cd85a4796",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitud"
							},
							"rightExpression": {
								"type": 0,
								"value": "d5049970-61c3-43ac-bb1f-f541987b42ef",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitud"
							},
							"rightExpression": {
								"type": 0,
								"value": "6601355b-dbcb-4c6f-9f26-fa6e31989865",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitud"
							},
							"rightExpression": {
								"type": 0,
								"value": "ce8bd067-e5d4-4cd8-8045-a40f591e2273",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitud"
							},
							"rightExpression": {
								"type": 0,
								"value": "43fe2fc6-8bd5-42bd-9251-c7d867021c68",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitud"
							},
							"rightExpression": {
								"type": 0,
								"value": "378956b4-e4e4-439d-85d8-8b52e6a1de08",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudColC"
							},
							"rightExpression": {
								"type": 0,
								"value": "b9aa2da6-b157-4833-8e45-6a726707ea32",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudColC"
							},
							"rightExpression": {
								"type": 0,
								"value": "f66dc930-93a6-4c56-83a8-4de7ae35e6f1",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudColC"
							},
							"rightExpression": {
								"type": 0,
								"value": "0e9dc9cc-9814-40cd-85af-7d9d2987024a",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudColC"
							},
							"rightExpression": {
								"type": 0,
								"value": "ee06f436-8552-4dbc-ac5e-70d7334df139",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudColC"
							},
							"rightExpression": {
								"type": 0,
								"value": "4e54ced1-1884-4c22-afdb-cab58c2d1510",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudColC"
							},
							"rightExpression": {
								"type": 0,
								"value": "8011a00f-9aa8-4348-920a-183e708f813d",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudColC"
							},
							"rightExpression": {
								"type": 0,
								"value": "c7fef982-de54-459f-82f3-2a758e289097",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudColC"
							},
							"rightExpression": {
								"type": 0,
								"value": "f83fa5c7-1e73-492f-ba0f-1dd45a277104",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudColC"
							},
							"rightExpression": {
								"type": 0,
								"value": "58aa90b1-cbb1-4ce5-ab1d-86e90211817c",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudColC"
							},
							"rightExpression": {
								"type": 0,
								"value": "ec5fa5d4-77d4-40b6-9492-029055debf05",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitudUKC"
							},
							"rightExpression": {
								"type": 0,
								"value": "bb9a2720-dfae-446a-ac84-269b506ee835",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitudUKC"
							},
							"rightExpression": {
								"type": 0,
								"value": "bf92f6ae-17c9-4dae-b431-38aaa647ddbf",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitudUKC"
							},
							"rightExpression": {
								"type": 0,
								"value": "ddc6f407-6325-409f-b0b8-70b4f71a0648",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitudUKC"
							},
							"rightExpression": {
								"type": 0,
								"value": "42a1eb7a-079e-483e-85b2-d8ae3ad0daf1",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitudUKC"
							},
							"rightExpression": {
								"type": 0,
								"value": "554fabc6-bca3-433c-a196-ad1ac719998c",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitudUKC"
							},
							"rightExpression": {
								"type": 0,
								"value": "2ab08cae-2205-4f53-b79a-854510893cf6",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitudUKC"
							},
							"rightExpression": {
								"type": 0,
								"value": "caaa086e-18ab-4115-a3d6-c449efcda069",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitudUKC"
							},
							"rightExpression": {
								"type": 0,
								"value": "1eaa9c85-3b38-4c6e-9300-dcefd53b1333",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitudUKC"
							},
							"rightExpression": {
								"type": 0,
								"value": "3dcf964a-8b08-4bd9-9f2b-9e6be998f689",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitudUKC"
							},
							"rightExpression": {
								"type": 0,
								"value": "3c5f014f-a223-484c-bf2c-bdd09a0b5705",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudChiC"
							},
							"rightExpression": {
								"type": 0,
								"value": "a0f9d3d1-5b69-4082-bbde-e9e09f9f0fc1",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudChiC"
							},
							"rightExpression": {
								"type": 0,
								"value": "a77a3980-d805-4b71-8953-39bea162ca9d",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudChiC"
							},
							"rightExpression": {
								"type": 0,
								"value": "c18e0639-1b03-4174-8ea2-9519035c9179",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudChiC"
							},
							"rightExpression": {
								"type": 0,
								"value": "32c20b45-98cf-4f10-a55e-e5c23463054f",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudChiC"
							},
							"rightExpression": {
								"type": 0,
								"value": "d33905c1-2c94-487b-b709-f3e1c07a3a26",
								"dataValueType": 10
							}
						}
					]
				},
				"0dbf771c-481a-4f66-a1d5-2904aab5ee11": {
					"uId": "0dbf771c-481a-4f66-a1d5-2904aab5ee11",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status",
								"attributePath": "IsFinal"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"YuDepartamentoDestino": {
				"21127eb4-47a9-4f22-ab09-9b40e01a094a": {
					"uId": "21127eb4-47a9-4f22-ab09-9b40e01a094a",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuAreaC"
							},
							"rightExpression": {
								"type": 0,
								"value": "0c6d0ca2-c64c-4998-9599-f221af1c17ec",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 4,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitud"
							},
							"rightExpression": {
								"type": 0,
								"value": "88c265f9-f976-4baa-b471-41ac5bfbd55c",
								"dataValueType": 10
							}
						}
					]
				},
				"e85b91e8-81df-45d2-905a-4d1f515c6baa": {
					"uId": "e85b91e8-81df-45d2-905a-4d1f515c6baa",
					"enabled": true,
					"removed": true,
					"ruleType": 1,
					"baseAttributePatch": "YuAreaCascDep",
					"comparisonType": 3,
					"type": 1,
					"attribute": "YuAreaC"
				},
				"580ce44c-ec52-487b-afee-491d370baf08": {
					"uId": "580ce44c-ec52-487b-afee-491d370baf08",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status",
								"attributePath": "IsFinal"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						}
					]
				},
				"be3c8e74-2bca-4440-acfd-a8af2ca78b84": {
					"uId": "be3c8e74-2bca-4440-acfd-a8af2ca78b84",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 4,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitud"
							},
							"rightExpression": {
								"type": 0,
								"value": "88c265f9-f976-4baa-b471-41ac5bfbd55c",
								"dataValueType": 10
							}
						}
					]
				},
				"6aeda5b0-4d0b-4ac6-8e85-9c5c2ea4b7a6": {
					"uId": "6aeda5b0-4d0b-4ac6-8e85-9c5c2ea4b7a6",
					"enabled": true,
					"removed": false,
					"ruleType": 1,
					"baseAttributePatch": "YuPaisDep",
					"comparisonType": 3,
					"type": 1,
					"attribute": "YuPaisC"
				}
			},
			"YuDiaSolicitado2": {
				"cf3404d7-3b58-45d1-afd7-527cf688407e": {
					"uId": "cf3404d7-3b58-45d1-afd7-527cf688407e",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuDepartamentoDestino"
							},
							"rightExpression": {
								"type": 0,
								"value": "3f9d39f8-096d-46f0-92df-3f1ffce0a44b",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuDepartamentoDestino"
							},
							"rightExpression": {
								"type": 0,
								"value": "9e60ead5-bb6d-49f8-bba8-6ba19f2f6e00",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuDepartamentoDestino"
							},
							"rightExpression": {
								"type": 0,
								"value": "c02a6edc-57d2-4613-8a85-31879fb5ca3f",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitud"
							},
							"rightExpression": {
								"type": 0,
								"value": "7b5ac6ca-abd4-4016-96ab-db46c50a08f4",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudColC"
							},
							"rightExpression": {
								"type": 0,
								"value": "75e56f6a-17af-4985-bdef-3699f391fc8c",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitudUKC"
							},
							"rightExpression": {
								"type": 0,
								"value": "a8acd2a0-9f25-4d3f-9755-c84188c00ebb",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitud"
							},
							"rightExpression": {
								"type": 0,
								"value": "ecc85a02-ff85-456b-9dbd-914c7cff5523",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudColC"
							},
							"rightExpression": {
								"type": 0,
								"value": "a40f3548-c93d-4969-93d1-6684a86bdb03",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitudUKC"
							},
							"rightExpression": {
								"type": 0,
								"value": "d55c4904-45aa-4fb2-b32c-6d73a28faee7",
								"dataValueType": 10
							}
						}
					]
				},
				"7e393514-d678-4e7a-8894-5d9fa9833952": {
					"uId": "7e393514-d678-4e7a-8894-5d9fa9833952",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status",
								"attributePath": "IsFinal"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"YuDiaSolicitado3": {
				"28c166ea-7373-4161-afb9-a701faf00f6e": {
					"uId": "28c166ea-7373-4161-afb9-a701faf00f6e",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitud"
							},
							"rightExpression": {
								"type": 0,
								"value": "7b5ac6ca-abd4-4016-96ab-db46c50a08f4",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuDepartamentoDestino"
							},
							"rightExpression": {
								"type": 0,
								"value": "3f9d39f8-096d-46f0-92df-3f1ffce0a44b",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuDepartamentoDestino"
							},
							"rightExpression": {
								"type": 0,
								"value": "9e60ead5-bb6d-49f8-bba8-6ba19f2f6e00",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuDepartamentoDestino"
							},
							"rightExpression": {
								"type": 0,
								"value": "c02a6edc-57d2-4613-8a85-31879fb5ca3f",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudColC"
							},
							"rightExpression": {
								"type": 0,
								"value": "75e56f6a-17af-4985-bdef-3699f391fc8c",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitudUKC"
							},
							"rightExpression": {
								"type": 0,
								"value": "a8acd2a0-9f25-4d3f-9755-c84188c00ebb",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitud"
							},
							"rightExpression": {
								"type": 0,
								"value": "ecc85a02-ff85-456b-9dbd-914c7cff5523",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudColC"
							},
							"rightExpression": {
								"type": 0,
								"value": "a40f3548-c93d-4969-93d1-6684a86bdb03",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitudUKC"
							},
							"rightExpression": {
								"type": 0,
								"value": "d55c4904-45aa-4fb2-b32c-6d73a28faee7",
								"dataValueType": 10
							}
						}
					]
				},
				"34c83057-6c57-47d9-8dc4-f5c3ead6e309": {
					"uId": "34c83057-6c57-47d9-8dc4-f5c3ead6e309",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status",
								"attributePath": "IsFinal"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"YuDiaSolicitado4": {
				"44895a12-3ef8-47c4-bcf6-fef2b3671214": {
					"uId": "44895a12-3ef8-47c4-bcf6-fef2b3671214",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitud"
							},
							"rightExpression": {
								"type": 0,
								"value": "7b5ac6ca-abd4-4016-96ab-db46c50a08f4",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuDepartamentoDestino"
							},
							"rightExpression": {
								"type": 0,
								"value": "3f9d39f8-096d-46f0-92df-3f1ffce0a44b",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuDepartamentoDestino"
							},
							"rightExpression": {
								"type": 0,
								"value": "9e60ead5-bb6d-49f8-bba8-6ba19f2f6e00",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuDepartamentoDestino"
							},
							"rightExpression": {
								"type": 0,
								"value": "c02a6edc-57d2-4613-8a85-31879fb5ca3f",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudColC"
							},
							"rightExpression": {
								"type": 0,
								"value": "75e56f6a-17af-4985-bdef-3699f391fc8c",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitudUKC"
							},
							"rightExpression": {
								"type": 0,
								"value": "a8acd2a0-9f25-4d3f-9755-c84188c00ebb",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitud"
							},
							"rightExpression": {
								"type": 0,
								"value": "ecc85a02-ff85-456b-9dbd-914c7cff5523",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudColC"
							},
							"rightExpression": {
								"type": 0,
								"value": "a40f3548-c93d-4969-93d1-6684a86bdb03",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitudUKC"
							},
							"rightExpression": {
								"type": 0,
								"value": "d55c4904-45aa-4fb2-b32c-6d73a28faee7",
								"dataValueType": 10
							}
						}
					]
				},
				"cb348823-c91b-48b5-bcf8-9b2741881ccf": {
					"uId": "cb348823-c91b-48b5-bcf8-9b2741881ccf",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status",
								"attributePath": "IsFinal"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"YuRecuerda": {
				"8ca5c186-ff99-40fd-8a4b-4f4c0085d89f": {
					"uId": "8ca5c186-ff99-40fd-8a4b-4f4c0085d89f",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuDepartamentoDestino"
							},
							"rightExpression": {
								"type": 0,
								"value": "3f9d39f8-096d-46f0-92df-3f1ffce0a44b",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuDepartamentoDestino"
							},
							"rightExpression": {
								"type": 0,
								"value": "9e60ead5-bb6d-49f8-bba8-6ba19f2f6e00",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuDepartamentoDestino"
							},
							"rightExpression": {
								"type": 0,
								"value": "c02a6edc-57d2-4613-8a85-31879fb5ca3f",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuSolicito2": {
				"5648a2fa-487d-4311-924f-8a25a145fb8b": {
					"uId": "5648a2fa-487d-4311-924f-8a25a145fb8b",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuSolicitudCambioDiaOff"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						}
					]
				},
				"05def34a-8f7c-4a9a-a5e1-495ce9ede5f5": {
					"uId": "05def34a-8f7c-4a9a-a5e1-495ce9ede5f5",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuSolicitudCambioDiaOff"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitud"
							},
							"rightExpression": {
								"type": 0,
								"value": "4d065d1c-2066-4c72-a112-bbdf78b44ea9",
								"dataValueType": 10
							}
						}
					]
				},
				"12b07da2-fadd-459e-88a3-a61165a4d11c": {
					"uId": "12b07da2-fadd-459e-88a3-a61165a4d11c",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status",
								"attributePath": "IsFinal"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"YuMotivo2": {
				"9de00121-1911-43d0-b784-28d225df80bd": {
					"uId": "9de00121-1911-43d0-b784-28d225df80bd",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuSolicitudCambioDiaOff"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						}
					]
				},
				"cd0ba875-7d0a-4cc5-b689-5170a6e7b2a3": {
					"uId": "cd0ba875-7d0a-4cc5-b689-5170a6e7b2a3",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitud"
							},
							"rightExpression": {
								"type": 0,
								"value": "4d065d1c-2066-4c72-a112-bbdf78b44ea9",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuSolicitudCambioDiaOff"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						}
					]
				},
				"22073361-bf8f-4ee3-983e-b1d1234fd3aa": {
					"uId": "22073361-bf8f-4ee3-983e-b1d1234fd3aa",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status",
								"attributePath": "IsFinal"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"YuSolicito3": {
				"38fd9ee8-0247-447a-9f07-408f0c6fd8e3": {
					"uId": "38fd9ee8-0247-447a-9f07-408f0c6fd8e3",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 4,
							"leftExpression": {
								"type": 1,
								"attribute": "YuDepartamentoDestino"
							},
							"rightExpression": {
								"type": 0,
								"value": "3f9d39f8-096d-46f0-92df-3f1ffce0a44b",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 4,
							"leftExpression": {
								"type": 1,
								"attribute": "YuDepartamentoDestino"
							},
							"rightExpression": {
								"type": 0,
								"value": "9e60ead5-bb6d-49f8-bba8-6ba19f2f6e00",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 4,
							"leftExpression": {
								"type": 1,
								"attribute": "YuDepartamentoDestino"
							},
							"rightExpression": {
								"type": 0,
								"value": "c02a6edc-57d2-4613-8a85-31879fb5ca3f",
								"dataValueType": 10
							}
						}
					]
				},
				"57b93bb9-3f05-4dd2-94fa-a2c229c0ecf9": {
					"uId": "57b93bb9-3f05-4dd2-94fa-a2c229c0ecf9",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 4,
							"leftExpression": {
								"type": 1,
								"attribute": "YuDepartamentoDestino"
							},
							"rightExpression": {
								"type": 0,
								"value": "3f9d39f8-096d-46f0-92df-3f1ffce0a44b",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 4,
							"leftExpression": {
								"type": 1,
								"attribute": "YuDepartamentoDestino"
							},
							"rightExpression": {
								"type": 0,
								"value": "9e60ead5-bb6d-49f8-bba8-6ba19f2f6e00",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 4,
							"leftExpression": {
								"type": 1,
								"attribute": "YuDepartamentoDestino"
							},
							"rightExpression": {
								"type": 0,
								"value": "c02a6edc-57d2-4613-8a85-31879fb5ca3f",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitud"
							},
							"rightExpression": {
								"type": 0,
								"value": "d47332b5-93ca-4fe3-ac07-7b65f59655b2",
								"dataValueType": 10
							}
						}
					]
				},
				"f3719cbf-f61e-4852-8df7-848b285b7104": {
					"uId": "f3719cbf-f61e-4852-8df7-848b285b7104",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuMotivo3": {
				"f0431af3-cab1-4eff-8d93-fdb40ba60c14": {
					"uId": "f0431af3-cab1-4eff-8d93-fdb40ba60c14",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 4,
							"leftExpression": {
								"type": 1,
								"attribute": "YuDepartamentoDestino"
							},
							"rightExpression": {
								"type": 0,
								"value": "3f9d39f8-096d-46f0-92df-3f1ffce0a44b",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 4,
							"leftExpression": {
								"type": 1,
								"attribute": "YuDepartamentoDestino"
							},
							"rightExpression": {
								"type": 0,
								"value": "9e60ead5-bb6d-49f8-bba8-6ba19f2f6e00",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 4,
							"leftExpression": {
								"type": 1,
								"attribute": "YuDepartamentoDestino"
							},
							"rightExpression": {
								"type": 0,
								"value": "c02a6edc-57d2-4613-8a85-31879fb5ca3f",
								"dataValueType": 10
							}
						}
					]
				},
				"cf702f0e-011e-4f10-9125-cc2b846dc8cc": {
					"uId": "cf702f0e-011e-4f10-9125-cc2b846dc8cc",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitud"
							},
							"rightExpression": {
								"type": 0,
								"value": "d47332b5-93ca-4fe3-ac07-7b65f59655b2",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 4,
							"leftExpression": {
								"type": 1,
								"attribute": "YuDepartamentoDestino"
							},
							"rightExpression": {
								"type": 0,
								"value": "3f9d39f8-096d-46f0-92df-3f1ffce0a44b",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 4,
							"leftExpression": {
								"type": 1,
								"attribute": "YuDepartamentoDestino"
							},
							"rightExpression": {
								"type": 0,
								"value": "9e60ead5-bb6d-49f8-bba8-6ba19f2f6e00",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 4,
							"leftExpression": {
								"type": 1,
								"attribute": "YuDepartamentoDestino"
							},
							"rightExpression": {
								"type": 0,
								"value": "c02a6edc-57d2-4613-8a85-31879fb5ca3f",
								"dataValueType": 10
							}
						}
					]
				},
				"cecd17e5-fad1-47dd-8051-3ca900b34204": {
					"uId": "cecd17e5-fad1-47dd-8051-3ca900b34204",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuDiaSol1Rep": {
				"58a38d91-65ec-471e-b9dc-6ca2ab95bd57": {
					"uId": "58a38d91-65ec-471e-b9dc-6ca2ab95bd57",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuDepartamentoDestino"
							},
							"rightExpression": {
								"type": 0,
								"value": "3f9d39f8-096d-46f0-92df-3f1ffce0a44b",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuDepartamentoDestino"
							},
							"rightExpression": {
								"type": 0,
								"value": "9e60ead5-bb6d-49f8-bba8-6ba19f2f6e00",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuDepartamentoDestino"
							},
							"rightExpression": {
								"type": 0,
								"value": "c02a6edc-57d2-4613-8a85-31879fb5ca3f",
								"dataValueType": 10
							}
						}
					]
				},
				"a093245c-c4f4-441c-b596-4323cd99ae34": {
					"uId": "a093245c-c4f4-441c-b596-4323cd99ae34",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitud"
							},
							"rightExpression": {
								"type": 0,
								"value": "d47332b5-93ca-4fe3-ac07-7b65f59655b2",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 4,
							"leftExpression": {
								"type": 1,
								"attribute": "YuDepartamentoDestino"
							},
							"rightExpression": {
								"type": 0,
								"value": "de77f96b-1bdd-4ea8-8114-dd7ab6f0ee6c",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 4,
							"leftExpression": {
								"type": 1,
								"attribute": "YuDepartamentoDestino"
							},
							"rightExpression": {
								"type": 0,
								"value": "d1f68ab1-a3f0-4010-ac61-57d2def819d1",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 4,
							"leftExpression": {
								"type": 1,
								"attribute": "YuDepartamentoDestino"
							},
							"rightExpression": {
								"type": 0,
								"value": "d20f9301-5a0d-4e6d-aa01-5a3008e33535",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 4,
							"leftExpression": {
								"type": 1,
								"attribute": "YuDepartamentoDestino"
							},
							"rightExpression": {
								"type": 0,
								"value": "1e772d0a-926a-4a8e-ae7c-e0a17b8c10a2",
								"dataValueType": 10
							}
						}
					]
				},
				"20bdc4b7-21bb-40aa-ab79-f66f8d01870c": {
					"uId": "20bdc4b7-21bb-40aa-ab79-f66f8d01870c",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuFesTra1": {
				"27ff3b47-ebd9-4836-87ff-6d74e947e2fa": {
					"uId": "27ff3b47-ebd9-4836-87ff-6d74e947e2fa",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitud"
							},
							"rightExpression": {
								"type": 0,
								"value": "ecc85a02-ff85-456b-9dbd-914c7cff5523",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudColC"
							},
							"rightExpression": {
								"type": 0,
								"value": "a40f3548-c93d-4969-93d1-6684a86bdb03",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitudUKC"
							},
							"rightExpression": {
								"type": 0,
								"value": "d55c4904-45aa-4fb2-b32c-6d73a28faee7",
								"dataValueType": 10
							}
						}
					]
				},
				"e25b0c02-8b23-4eaa-a873-1064f3570de9": {
					"uId": "e25b0c02-8b23-4eaa-a873-1064f3570de9",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuTipoSolicitud": {
				"1a89d9af-55ca-4de0-bf53-933b5e4c5e46": {
					"uId": "1a89d9af-55ca-4de0-bf53-933b5e4c5e46",
					"enabled": true,
					"removed": false,
					"ruleType": 1,
					"baseAttributePatch": "YuAreaTipoSolic",
					"autocomplete": true,
					"autoClean": true,
					"comparisonType": 3,
					"type": 1,
					"attribute": "YuAreaC"
				},
				"a8dbc4ba-eec2-4fee-ae15-47c8b20842a0": {
					"uId": "a8dbc4ba-eec2-4fee-ae15-47c8b20842a0",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuAreaC"
							},
							"rightExpression": {
								"type": 0,
								"value": "0c6d0ca2-c64c-4998-9599-f221af1c17ec",
								"dataValueType": 10
							}
						}
					]
				},
				"2450db38-36a5-4279-b125-29a891ba30f9": {
					"uId": "2450db38-36a5-4279-b125-29a891ba30f9",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 1,
							"leftExpression": {
								"type": 1,
								"attribute": "CreatedOn"
							}
						}
					]
				},
				"b8917220-c27a-4fa8-8b47-92bdd6b625ce": {
					"uId": "b8917220-c27a-4fa8-8b47-92bdd6b625ce",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuPaisC"
							},
							"rightExpression": {
								"type": 0,
								"value": "889f1072-70d2-4c08-9624-dbe36a02c97f",
								"dataValueType": 10
							}
						}
					]
				},
				"9cfb2099-678f-4b23-a170-5208823ac5ec": {
					"uId": "9cfb2099-678f-4b23-a170-5208823ac5ec",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuPaisC"
							},
							"rightExpression": {
								"type": 0,
								"value": "889f1072-70d2-4c08-9624-dbe36a02c97f",
								"dataValueType": 10
							}
						}
					]
				},
				"1fcd47d7-f43e-466a-b2ec-8d24793b9756": {
					"uId": "1fcd47d7-f43e-466a-b2ec-8d24793b9756",
					"enabled": false,
					"removed": true,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 1,
							"leftExpression": {
								"type": 1,
								"attribute": "CreatedOn"
							}
						}
					]
				}
			},
			"Number": {
				"8540bb13-d5b2-44ce-8d8e-5dfc510074b7": {
					"uId": "8540bb13-d5b2-44ce-8d8e-5dfc510074b7",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "Number"
							}
						}
					]
				}
			},
			"CreatedOn": {
				"5870d842-d05e-402c-a379-a8fdd19938ce": {
					"uId": "5870d842-d05e-402c-a379-a8fdd19938ce",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "CreatedOn"
							}
						}
					]
				}
			},
			"Subject": {
				"c6176708-a11b-4cd4-81f2-d7fb95cc9841": {
					"uId": "c6176708-a11b-4cd4-81f2-d7fb95cc9841",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						}
					]
				},
				"7b3995c9-9cf5-40ce-882c-d8884754f825": {
					"uId": "7b3995c9-9cf5-40ce-882c-d8884754f825",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuAreaC"
							},
							"rightExpression": {
								"type": 0,
								"value": "0c6d0ca2-c64c-4998-9599-f221af1c17ec",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuQuieroSerInfEmail": {
				"42a4a3d1-fcb6-4dd0-b4ff-36249c6fb5c6": {
					"uId": "42a4a3d1-fcb6-4dd0-b4ff-36249c6fb5c6",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuIndefinidoFB": {
				"925206a2-b2a6-4259-a3cb-80fe43c6b022": {
					"uId": "925206a2-b2a6-4259-a3cb-80fe43c6b022",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuPermanenciaCampanaFB": {
				"a673584f-82e4-4888-9bf4-097088f91b0b": {
					"uId": "a673584f-82e4-4888-9bf4-097088f91b0b",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuFechaFinFB": {
				"954b4e82-f0ac-490a-b35f-67adb3a70878": {
					"uId": "954b4e82-f0ac-490a-b35f-67adb3a70878",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuSiAutorizoCopia": {
				"5aa59ceb-ac49-41c3-907c-0f3a201e8c77": {
					"uId": "5aa59ceb-ac49-41c3-907c-0f3a201e8c77",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuNoAutorizoCopia": {
				"2c76d5f7-142d-450b-bc4d-1106c685d3cf": {
					"uId": "2c76d5f7-142d-450b-bc4d-1106c685d3cf",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuAcumulacionHorasLactancia": {
				"36d67fc5-e1c2-4349-8709-2ec8217a15c3": {
					"uId": "36d67fc5-e1c2-4349-8709-2ec8217a15c3",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuReduccionPermisoLactancia": {
				"c871b76a-83a8-4c7d-8df3-4ea433af7dca": {
					"uId": "c871b76a-83a8-4c7d-8df3-4ea433af7dca",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuReducJornadaOpc1": {
				"7bce7e0e-3eea-41cb-a162-32054e9be5a4": {
					"uId": "7bce7e0e-3eea-41cb-a162-32054e9be5a4",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						}
					]
				},
				"c7ef00ac-aa35-41fa-a0ea-7112e090cb45": {
					"uId": "c7ef00ac-aa35-41fa-a0ea-7112e090cb45",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuReduccionPermisoLactancia"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"YuReducJornadaOpc2": {
				"08a594a0-022d-4b69-9d10-d4fb8c27473a": {
					"uId": "08a594a0-022d-4b69-9d10-d4fb8c27473a",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						}
					]
				},
				"44e020f6-3940-4573-ba91-10742fd2b2e8": {
					"uId": "44e020f6-3940-4573-ba91-10742fd2b2e8",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuReduccionPermisoLactancia"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"YuCompensacionFestivos": {
				"36c0e00a-1117-4a53-8fcc-28b21b57c735": {
					"uId": "36c0e00a-1117-4a53-8fcc-28b21b57c735",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuPeticFestivVolunt": {
				"9190e98f-4e18-44fb-b722-19b04ff5c2ce": {
					"uId": "9190e98f-4e18-44fb-b722-19b04ff5c2ce",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuFestivoTrabajado": {
				"6dab9939-cded-46ae-8c76-6f5a9e373e29": {
					"uId": "6dab9939-cded-46ae-8c76-6f5a9e373e29",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuFestivoVoluntario": {
				"9bdc2802-8496-45ae-8b6d-778ded721afb": {
					"uId": "9bdc2802-8496-45ae-8b6d-778ded721afb",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuSolicitudCambioDiaOff": {
				"e4cf76cc-6d7a-4fb8-937d-cd154f87a8d0": {
					"uId": "e4cf76cc-6d7a-4fb8-937d-cd154f87a8d0",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuTurnoSolicitado": {
				"1d0dbf8e-59bd-4ec6-a306-1ecfc4867feb": {
					"uId": "1d0dbf8e-59bd-4ec6-a306-1ecfc4867feb",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuFotocopiaLibroFamilia": {
				"d832c8ac-2f7b-4a23-8c66-a3a92de6472e": {
					"uId": "d832c8ac-2f7b-4a23-8c66-a3a92de6472e",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuJustificanteMatricula": {
				"fdbb59e5-66ec-4a76-b58a-3e6f31685b2b": {
					"uId": "fdbb59e5-66ec-4a76-b58a-3e6f31685b2b",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuJustificanteHorarioEstudios": {
				"0c3cbaa1-594a-4113-b747-49ca15505c78": {
					"uId": "0c3cbaa1-594a-4113-b747-49ca15505c78",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuContratoLaboral": {
				"91d5bab7-da8b-4b52-8f2a-7f53b564f20d": {
					"uId": "91d5bab7-da8b-4b52-8f2a-7f53b564f20d",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuIRPF": {
				"1528327a-9d67-4631-b126-4bd26391cf20": {
					"uId": "1528327a-9d67-4631-b126-4bd26391cf20",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuObsIRPF": {
				"0970fc82-72aa-4db5-8a9c-8604ce7be806": {
					"uId": "0970fc82-72aa-4db5-8a9c-8604ce7be806",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuBajaMedica": {
				"9f5073a6-cc79-4a7b-bde0-f27dbe102da7": {
					"uId": "9f5073a6-cc79-4a7b-bde0-f27dbe102da7",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuObsBajaMedica": {
				"f3bad1f7-3373-460d-a494-0eea06a83df4": {
					"uId": "f3bad1f7-3373-460d-a494-0eea06a83df4",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuPlusDeIdiomas": {
				"2d8219c1-0ae1-41bc-a59e-bd8870e97d41": {
					"uId": "2d8219c1-0ae1-41bc-a59e-bd8870e97d41",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuObsPlusIdiomas": {
				"49f3c32e-f264-4e9d-95dc-877d59e07520": {
					"uId": "49f3c32e-f264-4e9d-95dc-877d59e07520",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuBecaFormacion": {
				"5ba5a4c1-9e26-40cb-be53-66b35d97882e": {
					"uId": "5ba5a4c1-9e26-40cb-be53-66b35d97882e",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuObsBecaFormacion": {
				"d2ce3850-3171-40e3-b89d-571fad82bf6c": {
					"uId": "d2ce3850-3171-40e3-b89d-571fad82bf6c",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuFestivos": {
				"e3051ef9-e7a9-4f43-a8f6-5dd9c25064ac": {
					"uId": "e3051ef9-e7a9-4f43-a8f6-5dd9c25064ac",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuObsFestivos": {
				"621e75da-1b8e-413d-9426-00ac8f9cfb55": {
					"uId": "621e75da-1b8e-413d-9426-00ac8f9cfb55",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuPlusNocturnidad": {
				"34217feb-b431-49cf-805d-27a6e6097c62": {
					"uId": "34217feb-b431-49cf-805d-27a6e6097c62",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuObsPlusNocturnidad": {
				"5c2a4bbd-1cb0-456e-91f1-89640bcaec1a": {
					"uId": "5c2a4bbd-1cb0-456e-91f1-89640bcaec1a",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuPlusTransporte": {
				"e43d337b-c63a-4a4c-a320-973b2f398616": {
					"uId": "e43d337b-c63a-4a4c-a320-973b2f398616",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuObsPlusTransporte": {
				"0de73ec2-e08d-49d7-8779-fc1090be58e3": {
					"uId": "0de73ec2-e08d-49d7-8779-fc1090be58e3",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuPlusExcelencia": {
				"9e74c38a-7c35-4a3b-a1b7-9777cc387b91": {
					"uId": "9e74c38a-7c35-4a3b-a1b7-9777cc387b91",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuObsPlusExcelencia": {
				"79684814-ed15-4c24-8d47-1247610fdb9d": {
					"uId": "79684814-ed15-4c24-8d47-1247610fdb9d",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"Category": {
				"6d0144de-9ac2-4e83-bd32-9519970f94ac": {
					"uId": "6d0144de-9ac2-4e83-bd32-9519970f94ac",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuObsCategoria": {
				"a6aac46f-d8e8-4077-a2af-e1a970b4f131": {
					"uId": "a6aac46f-d8e8-4077-a2af-e1a970b4f131",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuAusencias": {
				"15f7320f-804c-4689-92ed-1ffb0dc111cf": {
					"uId": "15f7320f-804c-4689-92ed-1ffb0dc111cf",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuObsAusencias": {
				"bd8fa7e5-7211-40e4-ada4-3a377578c806": {
					"uId": "bd8fa7e5-7211-40e4-ada4-3a377578c806",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuOtros": {
				"3590cd13-e86a-4a2e-9fe7-c1747d58d2db": {
					"uId": "3590cd13-e86a-4a2e-9fe7-c1747d58d2db",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuObsOtros": {
				"aa6fbc58-99bb-427f-bf6a-56fcd08688d6": {
					"uId": "aa6fbc58-99bb-427f-bf6a-56fcd08688d6",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuEstival": {
				"de1199de-7e95-4f87-a695-8e63bf35c1e2": {
					"uId": "de1199de-7e95-4f87-a695-8e63bf35c1e2",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuNoEstival": {
				"2d3bdfb5-deed-4f40-821d-b4cb433f6cc7": {
					"uId": "2d3bdfb5-deed-4f40-821d-b4cb433f6cc7",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuSolVacaInicioDiaFestivo": {
				"328554f5-0825-48cd-8126-97e7dfdaf6cd": {
					"uId": "328554f5-0825-48cd-8126-97e7dfdaf6cd",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuFechaInicio2": {
				"6f834445-b5dd-4a34-bc9c-27176a494fa1": {
					"uId": "6f834445-b5dd-4a34-bc9c-27176a494fa1",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuFechaInicio3": {
				"c3490376-7cc4-4827-8d9e-6062184fab3c": {
					"uId": "c3490376-7cc4-4827-8d9e-6062184fab3c",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuFechaInicio4": {
				"eed85792-b6b5-4c51-ae75-8364a4e5e4f6": {
					"uId": "eed85792-b6b5-4c51-ae75-8364a4e5e4f6",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuFechaFin2": {
				"745e4c94-18af-4d0b-b8af-d8f4e6d8758e": {
					"uId": "745e4c94-18af-4d0b-b8af-d8f4e6d8758e",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuFechaFin3": {
				"0c68539f-b886-4906-9181-acc56f172b28": {
					"uId": "0c68539f-b886-4906-9181-acc56f172b28",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuFechaFin4": {
				"6ed44a8a-5343-4cc1-82ae-ba1291e23021": {
					"uId": "6ed44a8a-5343-4cc1-82ae-ba1291e23021",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuObs1": {
				"e315d482-9f65-40e2-b439-c1d0c8f381e2": {
					"uId": "e315d482-9f65-40e2-b439-c1d0c8f381e2",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuObs2": {
				"0a4ff2ec-e750-40ed-abe0-c0639d8657b9": {
					"uId": "0a4ff2ec-e750-40ed-abe0-c0639d8657b9",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuObs3": {
				"d956a163-9871-4683-8bd0-3ab852540eca": {
					"uId": "d956a163-9871-4683-8bd0-3ab852540eca",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuObs4": {
				"beeb9c7a-53b8-4341-87dd-49d1ca7fb154": {
					"uId": "beeb9c7a-53b8-4341-87dd-49d1ca7fb154",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuOpc1DiaSuelto2": {
				"5fe2a2c4-1a98-42bc-b969-b0088da098a9": {
					"uId": "5fe2a2c4-1a98-42bc-b969-b0088da098a9",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuOpc1DiaSuelto3": {
				"4fb70c6d-6170-411d-933b-dd68a454f404": {
					"uId": "4fb70c6d-6170-411d-933b-dd68a454f404",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuOpc1DiaSuelto4": {
				"527a6a80-afab-4b62-beeb-be80acb9513b": {
					"uId": "527a6a80-afab-4b62-beeb-be80acb9513b",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuOpc2DiaSuelto1": {
				"91c8d67d-a5e7-41a0-bfe1-b5101a0eea57": {
					"uId": "91c8d67d-a5e7-41a0-bfe1-b5101a0eea57",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuOpc2DiaSuelto2": {
				"5a6db549-39b0-44fc-ada2-95446be730a6": {
					"uId": "5a6db549-39b0-44fc-ada2-95446be730a6",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuOpc2DiaSuelto3": {
				"b3b7aa22-c4c9-49a0-8ca5-6643c4e14961": {
					"uId": "b3b7aa22-c4c9-49a0-8ca5-6643c4e14961",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuOpc2DiaSuelto4": {
				"70aa2294-2fa7-47a4-b68a-326b08b0e318": {
					"uId": "70aa2294-2fa7-47a4-b68a-326b08b0e318",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuOpc3DiaSuelto1": {
				"9a32f16d-c268-448f-a51f-9744bbd3a4bb": {
					"uId": "9a32f16d-c268-448f-a51f-9744bbd3a4bb",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuOpc3DiaSuelto2": {
				"d688722a-6efd-40f6-a7bd-337df0f8ea13": {
					"uId": "d688722a-6efd-40f6-a7bd-337df0f8ea13",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuOpc3DiaSuelto3": {
				"86be46b6-1c78-4d59-b5b7-92614f91b25f": {
					"uId": "86be46b6-1c78-4d59-b5b7-92614f91b25f",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuOpc3DiaSuelto4": {
				"91b62ddc-3324-494d-a729-276958aa2007": {
					"uId": "91b62ddc-3324-494d-a729-276958aa2007",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuOpc4DiaSuelto1": {
				"4ef71d50-4fcf-408b-81e1-3b6add96cd32": {
					"uId": "4ef71d50-4fcf-408b-81e1-3b6add96cd32",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuOpc4DiaSuelto2": {
				"99941e65-b643-4ba2-94af-38099337e859": {
					"uId": "99941e65-b643-4ba2-94af-38099337e859",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuOpc4DiaSuelto3": {
				"e14b8a5f-d867-4bfa-83c0-656babfcd216": {
					"uId": "e14b8a5f-d867-4bfa-83c0-656babfcd216",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuOpc4DiaSuelto4": {
				"8a6ee782-a3a2-48f7-a6bd-15b25eba15da": {
					"uId": "8a6ee782-a3a2-48f7-a6bd-15b25eba15da",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuFesTra2": {
				"49392f04-a8b2-4430-bfd2-9aa651f19b0a": {
					"uId": "49392f04-a8b2-4430-bfd2-9aa651f19b0a",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuFesTra3": {
				"e63317ce-f4fb-413f-b955-2f372e4dfb94": {
					"uId": "e63317ce-f4fb-413f-b955-2f372e4dfb94",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuFesTra4": {
				"8d0a9a89-be16-4021-94d9-3c71f5a6353d": {
					"uId": "8d0a9a89-be16-4021-94d9-3c71f5a6353d",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "9276b980-1d60-4dcc-9bdd-4c951efe7454",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3859c6e7-cbcb-486b-ba53-77808fe6e593",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuNHorasSol2": {
				"7f56a418-9a85-40fb-89e1-5e2f2d4418b5": {
					"uId": "7f56a418-9a85-40fb-89e1-5e2f2d4418b5",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status",
								"attributePath": "IsFinal"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"YuNHorasSol3": {
				"ba6e8a7d-c460-4379-af6d-8c2908a72141": {
					"uId": "ba6e8a7d-c460-4379-af6d-8c2908a72141",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status",
								"attributePath": "IsFinal"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"YuNHorasSol4": {
				"7002fcd2-1ee8-4e71-862b-e08cf89c633f": {
					"uId": "7002fcd2-1ee8-4e71-862b-e08cf89c633f",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status",
								"attributePath": "IsFinal"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"YuFechaLectura": {
				"0bfb0290-b14c-46b3-8932-05d84631a90c": {
					"uId": "0bfb0290-b14c-46b3-8932-05d84631a90c",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "Number"
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitud"
							},
							"rightExpression": {
								"type": 0,
								"value": "88c265f9-f976-4baa-b471-41ac5bfbd55c",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"Notes": {
				"3573b18f-ae5a-46dc-8a87-8da27f4dce35": {
					"uId": "3573b18f-ae5a-46dc-8a87-8da27f4dce35",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 4,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitud"
							},
							"rightExpression": {
								"type": 0,
								"value": "88c265f9-f976-4baa-b471-41ac5bfbd55c",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuTipodeSolicitudColC": {
				"e38b565e-9efb-47b8-ad45-431d8fbcfa1d": {
					"uId": "e38b565e-9efb-47b8-ad45-431d8fbcfa1d",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuPaisC"
							},
							"rightExpression": {
								"type": 0,
								"value": "03d55f7c-2487-4e2c-9ba8-ddc16004b8d4",
								"dataValueType": 10
							}
						}
					]
				},
				"7d486102-e75d-43d5-93fc-ab9457ce3d69": {
					"uId": "7d486102-e75d-43d5-93fc-ab9457ce3d69",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuPaisC"
							},
							"rightExpression": {
								"type": 0,
								"value": "03d55f7c-2487-4e2c-9ba8-ddc16004b8d4",
								"dataValueType": 10
							}
						}
					]
				},
				"51ec3c8e-76b9-4e16-aa5d-7bbf6d5d20b3": {
					"uId": "51ec3c8e-76b9-4e16-aa5d-7bbf6d5d20b3",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 1,
							"leftExpression": {
								"type": 1,
								"attribute": "CreatedOn"
							}
						}
					]
				},
				"b2afdeac-70b8-460e-ba61-1307f7f4c292": {
					"uId": "b2afdeac-70b8-460e-ba61-1307f7f4c292",
					"enabled": true,
					"removed": false,
					"ruleType": 1,
					"baseAttributePatch": "Description",
					"comparisonType": 3,
					"autoClean": false,
					"autocomplete": false,
					"type": 0,
					"value": "TURNOS",
					"dataValueType": 1
				}
			},
			"YuTipodeSolicitudChiC": {
				"8b7f688b-dfc5-411a-b579-b4027afe2b52": {
					"uId": "8b7f688b-dfc5-411a-b579-b4027afe2b52",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuPaisC"
							},
							"rightExpression": {
								"type": 0,
								"value": "4004bc2a-cfcb-4549-80d0-4c8119815d58",
								"dataValueType": 10
							}
						}
					]
				},
				"730bac69-f720-43a7-982b-4ab80d60dfb4": {
					"uId": "730bac69-f720-43a7-982b-4ab80d60dfb4",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuPaisC"
							},
							"rightExpression": {
								"type": 0,
								"value": "4004bc2a-cfcb-4549-80d0-4c8119815d58",
								"dataValueType": 10
							}
						}
					]
				},
				"8ee8739f-4be1-4e5d-b4ee-61ef20b5ce61": {
					"uId": "8ee8739f-4be1-4e5d-b4ee-61ef20b5ce61",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 1,
							"leftExpression": {
								"type": 1,
								"attribute": "CreatedOn"
							}
						}
					]
				},
				"37155dda-75b6-48e0-9f47-0bd7d1c93c6d": {
					"uId": "37155dda-75b6-48e0-9f47-0bd7d1c93c6d",
					"enabled": true,
					"removed": false,
					"ruleType": 1,
					"baseAttributePatch": "YuActivo",
					"comparisonType": 3,
					"autoClean": false,
					"autocomplete": false,
					"type": 0,
					"value": true,
					"dataValueType": 12
				}
			},
			"YuTipoSolicitudUKC": {
				"fd413c46-2d14-4d60-ad22-8b085517186d": {
					"uId": "fd413c46-2d14-4d60-ad22-8b085517186d",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuPaisC"
							},
							"rightExpression": {
								"type": 0,
								"value": "b443aa43-d6ca-4c40-8c9f-2758b2c041e7",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuDescripcionServicio": {
				"18a5b8f9-f6a8-4fec-b1a9-a21ec62cdde3": {
					"uId": "18a5b8f9-f6a8-4fec-b1a9-a21ec62cdde3",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuAtCliente"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuAtClienteyVentaCruzada"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuVentaInbound"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuVentaOutbound"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuVentaSeguros"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuRetencionClientes"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuBO"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"YuInfoPerfilCandidato": {
				"84609e14-975a-44b9-8aac-190297705f25": {
					"uId": "84609e14-975a-44b9-8aac-190297705f25",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuVentaTelefonica"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuVentaPresencial"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuAtencionalClientePresencial"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuAtencionalClienteTelefonica"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuSoporteTecnico"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuAdministrativo"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuSinExperiencia"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuSeguros"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuPeluqueria"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuInformatica"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuProductosFarmaceuticos"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"YuDiasTrabajo": {
				"7f941c55-5212-4b55-baf5-59cf0ce0fbdc": {
					"uId": "7f941c55-5212-4b55-baf5-59cf0ce0fbdc",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuLunesDomingo"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuLunesViernes"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuFinSemana"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"Tab0cfc5c56TabLabel": {
				"75cb9fc7-88c7-4a79-8627-ebc87db4bb15": {
					"uId": "75cb9fc7-88c7-4a79-8627-ebc87db4bb15",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3e7f420c-f46b-1410-fc9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "6e5f4218-f46b-1410-fe9a-0050ba5d6c38",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "f063ebbe-fdc6-4982-8431-d8cfa52fedcf",
								"dataValueType": 10
							}
						}
					]
				},
				"2e78fd58-05e1-4baa-a1ac-9ee61cb4880a": {
					"uId": "2e78fd58-05e1-4baa-a1ac-9ee61cb4880a",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuMeetLanzado"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuPaisC"
							},
							"rightExpression": {
								"type": 0,
								"value": "889f1072-70d2-4c08-9624-dbe36a02c97f",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuCorreoElectronico": {
				"fd962634-04cf-4331-8354-b7e550088346": {
					"uId": "fd962634-04cf-4331-8354-b7e550088346",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuAusencias"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"e1dfb264-9f5a-4427-bed8-7220a1e55f54": {
					"uId": "e1dfb264-9f5a-4427-bed8-7220a1e55f54",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 1,
							"leftExpression": {
								"type": 1,
								"attribute": "CreatedOn"
							}
						},
						{
							"comparisonType": 1,
							"leftExpression": {
								"type": 1,
								"attribute": "YuCorreoElectronico"
							}
						}
					]
				}
			},
			"Tabe087a3a5TabLabel": {
				"8bc7734c-b4dc-4e8b-8ef0-8283af115022": {
					"uId": "8bc7734c-b4dc-4e8b-8ef0-8283af115022",
					"enabled": false,
					"removed": true,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudColC"
							},
							"rightExpression": {
								"type": 0,
								"value": "82e046c6-8c98-430f-8d44-71c0907bb728",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"Tab6f4f2135TabLabel": {
				"0325a217-f51a-4fbd-b37f-2c55248878d2": {
					"uId": "0325a217-f51a-4fbd-b37f-2c55248878d2",
					"enabled": false,
					"removed": true,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudColC"
							},
							"rightExpression": {
								"type": 0,
								"value": "99f03aec-b9ce-4732-800d-9d7172fa3d7b",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"Tab56a5d9f7TabLabel": {
				"8a3d53ea-c213-4294-99e3-3f9140e89d94": {
					"uId": "8a3d53ea-c213-4294-99e3-3f9140e89d94",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudColC"
							},
							"rightExpression": {
								"type": 0,
								"value": "277ffbfd-9647-4c7d-ad21-d8620197b270",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuObservaciones5": {
				"714fb0fa-2abe-434a-9ee0-b343bf67241b": {
					"uId": "714fb0fa-2abe-434a-9ee0-b343bf67241b",
					"enabled": true,
					"removed": true,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "YuTipoSolicitud",
							"attributePath": "Description"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitud"
							},
							"rightExpression": {
								"type": 0,
								"value": "569b3607-90c4-49f0-9086-eba6bed09f9b",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuAnoDevengoC": {
				"efb8a590-744d-489a-ab03-0cdf2b0c575c": {
					"uId": "efb8a590-744d-489a-ab03-0cdf2b0c575c",
					"enabled": true,
					"removed": false,
					"ruleType": 1,
					"baseAttributePatch": "YuReclamacionesDeNomina",
					"comparisonType": 3,
					"autoClean": false,
					"autocomplete": false,
					"type": 0,
					"value": true,
					"dataValueType": 12
				},
				"bfc4e3eb-e0b4-4385-98d7-21786b15c585": {
					"uId": "bfc4e3eb-e0b4-4385-98d7-21786b15c585",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitud"
							},
							"rightExpression": {
								"type": 0,
								"value": "569b3607-90c4-49f0-9086-eba6bed09f9b",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudChiC"
							},
							"rightExpression": {
								"type": 0,
								"value": "87b2806a-7c13-450c-956c-38279801eb37",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudColC"
							},
							"rightExpression": {
								"type": 0,
								"value": "b5112449-b9c4-4faf-a1c8-c8725541dd4c",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitudUKC"
							},
							"rightExpression": {
								"type": 0,
								"value": "a6824cb7-7d9a-4358-a91d-eb0f94ef6b67",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuMesDevengoC": {
				"b34cefe1-0fd9-4ecc-b4a6-9654d5d17d8a": {
					"uId": "b34cefe1-0fd9-4ecc-b4a6-9654d5d17d8a",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitud"
							},
							"rightExpression": {
								"type": 0,
								"value": "569b3607-90c4-49f0-9086-eba6bed09f9b",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudChiC"
							},
							"rightExpression": {
								"type": 0,
								"value": "87b2806a-7c13-450c-956c-38279801eb37",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipodeSolicitudColC"
							},
							"rightExpression": {
								"type": 0,
								"value": "b5112449-b9c4-4faf-a1c8-c8725541dd4c",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitudUKC"
							},
							"rightExpression": {
								"type": 0,
								"value": "a6824cb7-7d9a-4358-a91d-eb0f94ef6b67",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"YuMotivoTeletrabajo": {
				"f1d60f3a-db60-4464-b680-b05bdcdf328b": {
					"uId": "f1d60f3a-db60-4464-b680-b05bdcdf328b",
					"enabled": true,
					"removed": false,
					"ruleType": 1,
					"baseAttributePatch": "YuReclamacionesDeNomina",
					"comparisonType": 3,
					"autoClean": false,
					"autocomplete": false,
					"type": 0,
					"value": true,
					"dataValueType": 12
				},
				"462b4799-c602-4c23-adec-97ba1d4402c3": {
					"uId": "462b4799-c602-4c23-adec-97ba1d4402c3",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTeletrabajo"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"04d57c3a-f17d-483b-b3dd-6fea7655f949": {
					"uId": "04d57c3a-f17d-483b-b3dd-6fea7655f949",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTeletrabajo"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"YuJornadaSemanal": {
				"f2753a32-396d-4acd-a0e5-30ffdbe91458": {
					"uId": "f2753a32-396d-4acd-a0e5-30ffdbe91458",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTeletrabajo"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"YuNumDiasReclamados": {
				"eb9546e0-ef2a-4222-9a95-9ce20755156e": {
					"uId": "eb9546e0-ef2a-4222-9a95-9ce20755156e",
					"enabled": true,
					"removed": true,
					"ruleType": 1,
					"baseAttributePatch": "YuReclamacionesDeNominaNumDiasPortal",
					"comparisonType": 3,
					"autoClean": false,
					"autocomplete": false,
					"type": 0,
					"value": true,
					"dataValueType": 12
				}
			},
			"YuCantDiasSueldo": {
				"b220570c-95e7-4caa-b778-4517714ff365": {
					"uId": "b220570c-95e7-4caa-b778-4517714ff365",
					"enabled": false,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTeletrabajo"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"Taba56c44bcTabLabelGroup32d0bbcc": {
				"f65917d0-e795-4135-b5e0-4ed05089bc14": {
					"uId": "f65917d0-e795-4135-b5e0-4ed05089bc14",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuAusencias"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "YuTipoSolicitud"
							},
							"rightExpression": {
								"type": 0,
								"value": "569b3607-90c4-49f0-9086-eba6bed09f9b",
								"dataValueType": 10
							}
						}
					]
				}
			}
		}/**SCHEMA_BUSINESS_RULES*/,
		methods: {
			
			init: function() {
                this.callParent(arguments);                
                if (this.isAddMode()) {
					this.determinarPAIS();		
					this.setCampana();
				}
                // Ocultar todas las pestañas
                var tabs = this.get("TabsCollection");
                var valoresP = this.misVariablesPortal("Todas");
				var tab;
				for (var i = 0;i<valoresP.length;i++){
					tab = tabs.get(valoresP[i]);
					tab.set("Visible",false);
				}				
			},
			
			onEntityInitialized: function() {
			    this.callParent(arguments);
			    
			    
			    
			    var tabs = this.get("TabsCollection");
			 	var tabb;
			 	var valorTipologia;			 	
			    var pais;
			    
			    if (this.isAddMode()) {
			    	
			    	this.set("YuCanal",{value: "916acb84-c320-4999-ab6e-0cd85f8fbf58", displayValue: "Portal"});
			    	//this.setCampana();
			    }else{
			    	var estado = this.get("Status").displayValue;
			    	if(estado.includes("Cerrado")){
			    		this.set("VariableEditable",false);
			    	}
			    	pais = this.get("YuPaisC").displayValue;
			    	this.mostrarTipoSolicitudFuncion(pais);
			    	if(pais === "España"){
			    		var nombreTiposol = this.get("YuTipoSolicitud").displayValue;
						if(nombreTiposol === "ABSENTISMO"){
							tabb = tabs.get("ESNTab");
							tabb.set("Visible",false);
						}
					}
					var valoresP = this.tipoSolicitudID();
				    var nombrePest = this.misVariablesPortal("");
				    valorTipologia = this.tipoSolicitudPaisFuncion();
				    for (var i = 0;i<valoresP.length;i++){
						if (valorTipologia === valoresP[i]){
				    		tabb = tabs.get(nombrePest[i]);
					    	tabb.set("Visible",true);
					    	this.setActiveTab(nombrePest[i]);
					    }else{							
					    	tabb = tabs.get(nombrePest[i]);
							tabb.set("Visible",false);					    	
					    }
					}
					// Encuesta de satisfacción
					if(this.get("YuMeetLanzado")===true){
						tabb = tabs.get("Tab0cfc5c56TabLabel");	
						tabb.set("Visible",true);
					    this.setActiveTab("Tab0cfc5c56TabLabel");												
					}
			    }			    
			},
			
			setCampana: function(){				
				var campanaActual = this.get("YuUnidadOrganiz");
				var asignarCampana;
				if (!campanaActual){
					
					var contacto = this.Terrasoft.SysValue.CURRENT_USER_CONTACT.value;
					var esq= this.Ext.create( //definimos el ESQ
						"Terrasoft.EntitySchemaQuery",{
							rootSchemaName:"Contact"
						}
					);				
					esq.addColumn("YuUnidadOrganizativaMeta");
					//filtro 
					var esqFirstFilter=esq.createColumnFilterWithParameter(Terrasoft.ComparisonType.EQUAL, "Id", contacto);
					esq.filters.add("esqFirstFilter", esqFirstFilter);
					esq.getEntityCollection(function(result){
						if(result.success){
							result.collection.each(function(item) {
								asignarCampana = item.get("YuUnidadOrganizativaMeta");
							});
							if(asignarCampana){
								this.set("YuUnidadOrganiz", asignarCampana);
								this.set("YuCampServ", asignarCampana);
							}
						}
					}, this);
				}				
			},
			
			onMyFieldChange: function() {
			    this.setActiveTab("GeneralInfoTab");
			    
			    var tabs = this.get("TabsCollection");
			    
			    var valorTipologia = this.tipoSolicitudPaisFuncion();
			    var valoresID = this.tipoSolicitudID();
			    var nombrePest = this.misVariablesPortal("");
			    
			    var tabb;
			    
			    for (var i = 0;i<valoresID.length;i++){
					if (valorTipologia === valoresID[i]){
			    		tabb = tabs.get(nombrePest[i]);
				    	tabb.set("Visible",true);
				    	this.setActiveTab(nombrePest[i]);
				    }else{
				    	tabb = tabs.get(nombrePest[i]);
				    	tabb.set("Visible",false);
				    }
				}
			},
			
			// PRUEBA VALIDADOR ENCUESTA EN TURNOS ****************************************************************************
			ValidadorEncuesta: function(){
				var invalidMessage="";
				if((this.get("Status").value=="3e7f420c-f46b-1410-fc9a-0050ba5d6c38"||this.get("Status").value=="6e5f4218-f46b-1410-fe9a-0050ba5d6c38")){
					if((this.get("YuValor")<=0) || (this.get("YuValor")>5)){
						invalidMessage="Los valores de las respuestas a la encuesta tienen que estar entre 1 y 5";
					}
				}
				return{
						invalidMessage: invalidMessage
					};
			},
			ValidadorEncuesta2: function(){
				var invalidMessage="";
				if(this.get("Status").value=="3e7f420c-f46b-1410-fc9a-0050ba5d6c38"||this.get("Status").value=="6e5f4218-f46b-1410-fe9a-0050ba5d6c38"){
					if((this.get("YuValor2")<=0) || (this.get("YuValor2")>5)){
						invalidMessage="Los valores de las respuestas a la encuesta tienen que estar entre 1 y 5";
					}
				}
				return{
						invalidMessage: invalidMessage
				};
			},			
			ValidadorEncuesta3: function(){
				var invalidMessage="";
				if(this.get("Status").value=="3e7f420c-f46b-1410-fc9a-0050ba5d6c38"||this.get("Status").value=="6e5f4218-f46b-1410-fe9a-0050ba5d6c38"){
					if((this.get("YuSatisfaccionGlobal")<=0) || (this.get("YuSatisfaccionGlobal")>5)){
						invalidMessage="Los valores de las respuestas a la encuesta tienen que estar entre 1 y 5";
					}
					
				}
				return{
						invalidMessage: invalidMessage
					};
			},
			ValidadorDiasReclamados: function(){
				var invalidMessage="";
				if(this.get("YuTipoSolicitud").value=="569b3607-90c4-49f0-9086-eba6bed09f9b" && this.get("YuTeletrabajo")){
					if(!this.get("YuCantDiasSueldo") || (this.get("YuCantDiasSueldo") <= 0) || (this.get("YuCantDiasSueldo") > 27)){
						invalidMessage="El número de días debe ser entre 1 y 27";
					}
					
				}
				return{
						invalidMessage: invalidMessage
					};
			},
			
			setValidationConfig: function(){
				this.callParent(arguments);
				this.addColumnValidator("YuValor", this.ValidadorEncuesta);
				this.addColumnValidator("YuValor2", this.ValidadorEncuesta2);
				this.addColumnValidator("YuSatisfaccionGlobal", this.ValidadorEncuesta3);
				this.addColumnValidator("YuCantDiasSueldo", this.ValidadorDiasReclamados)
			},
			
			
			// PRUEBA VALIDADOR ENCUESTA EN TURNOS ****************************************************************************
			determinarPAIS: function(){
				var nombrePais = "";
				var idPais = "";
				var userContactId = Terrasoft.SysValue.CURRENT_USER_CONTACT.value;
				var esq = Ext.create("Terrasoft.EntitySchemaQuery", {
					rootSchemaName: "Contact"
				});
				esq.addColumn("YuPaisTrabajo.Name", "PaisTrabajoName");
				esq.addColumn("YuPaisTrabajo.Id", "PaisTrabajoId");
				esq.addColumn("Id");
				esq.addColumn("Name","Nombre contacto");
				var filterName = esq.createColumnFilterWithParameter(Terrasoft.ComparisonType.EQUAL, "Id", userContactId);
				esq.filters.addItem(filterName);
				esq.getEntityCollection(function (result) {
					if (!result.success) {
						this.showInformationDialog("Data query error");
						return;
					}
					result.collection.each(function (item) {
						nombrePais = item.get("PaisTrabajoName");
						idPais =item.get("PaisTrabajoId");						
					});
					nombrePais = nombrePais;
					idPais = idPais;
					this.set("YuPaisC",{value: idPais,displayValue:nombrePais});
					this.mostrarTipoSolicitudFuncion(nombrePais);
				}, this);
			},
			
			mostrarTipoSolicitudFuncion: function(nombrepais){
				if(nombrepais === "España"){
			    	this.set("MostrarTipoSolicitud",true);
				}
			    if(nombrepais === "Colombia"){
			    	this.set("MostrarTipoSolicitudCol",true);
			    }
			    if(nombrepais === "Chile"){
			    	this.set("MostrarTipoSolicitudChi",true);
			    }
			    if(nombrepais === "UK"){
			    	this.set("MostrarTipoSolicitudUK",true);
			    }
			},
			
			tipoSolicitudPaisFuncion: function(){
				var pais = this.get("YuPaisC").displayValue;
				var tipoSolicitud;
				if(pais === "España"){
			    	tipoSolicitud = this.get("YuTipoSolicitud").value;
				}
			    if(pais === "Colombia"){
			    	tipoSolicitud = this.get("YuTipodeSolicitudColC").value;
			    }
			    if(pais === "Chile"){
			    	tipoSolicitud = this.get("YuTipodeSolicitudChiC").value;
					if (tipoSolicitud==="76a81344-496b-44db-a53f-fb62a669b19a"){
						this.showInformationDialog("Recuerda adjuntar el certificado (claro, legible, el cual debe incluir nombre completo y Rut del trabajador, firma y timbre del médico) e indicar siempre la fecha y la hora de desconexión, para poder gestionar la solicitud.");
					}
			    }
			    if(pais === "UK"){
			    	tipoSolicitud = this.get("YuTipoSolicitudUKC").value;
			    }
			    return tipoSolicitud;
			},
			
			misVariablesPortal: function(todas){
				
				var ventanas;
				if (todas === "Todas"){
					ventanas = ["Tabe087a3a5TabLabel"];	//01
					ventanas.push("Tab15b172f7TabLabel");	//02
					ventanas.push("Tab0c5ecacdTabLabel");	//03
					ventanas.push("Tab66e8e01eTabLabel");	//04
					ventanas.push("Tab0a670775TabLabel");	//05
					ventanas.push("Tab0b35c5c6TabLabel");	//06
					ventanas.push("Tab5cafa2bfTabLabel");	//07
					ventanas.push("Tab6f4f2135TabLabel");	//08
					ventanas.push("Tab965fb3d7TabLabel");	//09
					ventanas.push("Tabc600983bTabLabel");	//10
					ventanas.push("Tab51273ae4TabLabel");	//11
					ventanas.push("Tabfbb05131TabLabel");	//12
					ventanas.push("Tabe1d9f280TabLabel");	//13
					ventanas.push("Tabee5c4487TabLabel");	//14
					ventanas.push("Taba56c44bcTabLabel");	//15
					ventanas.push("Tab77414d63TabLabel");	//16
					ventanas.push("Tab3b7002bcTabLabel");	//17
					ventanas.push("Tabc57b8dfdTabLabel");	//18
					ventanas.push("Tab90be337fTabLabel");	//19
					ventanas.push("Tabe8450679TabLabel");	//20
					ventanas.push("Tab042fb325TabLabel");	//21
					ventanas.push("Tab803199dfTabLabel");	//22
					ventanas.push("Tab55716acdTabLabel");	//23
					ventanas.push("Tab6560865fTabLabel");	//15 Chile
					ventanas.push("Tab6db39f4fTabLabel");	//13 Chile
					ventanas.push("Tabc30e9b99TabLabel");	//21 Chile
					ventanas.push("Tab56a5d9f7TabLabel");
					ventanas.push("Tabc8d1b392TabLabel");   //24					
					return ventanas;
				}
				var pais = this.get("YuPaisC").displayValue;
				if (pais === "España"){
					ventanas = ["Tabe087a3a5TabLabel"];	//01
					ventanas.push("Tab15b172f7TabLabel");	//02
					ventanas.push("Tab0c5ecacdTabLabel");	//03
					ventanas.push("Tab66e8e01eTabLabel");	//04
					ventanas.push("Tab0a670775TabLabel");	//05
					ventanas.push("Tab0b35c5c6TabLabel");	//06
					ventanas.push("Tab5cafa2bfTabLabel");	//07
					ventanas.push("Tab6f4f2135TabLabel");	//08
					ventanas.push("Tab965fb3d7TabLabel");	//09
					ventanas.push("Tabc600983bTabLabel");	//10
					ventanas.push("Tab51273ae4TabLabel");	//11
					ventanas.push("Tabfbb05131TabLabel");	//12
					ventanas.push("Tabe1d9f280TabLabel");	//13
					ventanas.push("Tabee5c4487TabLabel");	//14
					ventanas.push("Taba56c44bcTabLabel");	//15
					ventanas.push("Tab77414d63TabLabel");	//16
					ventanas.push("Tab3b7002bcTabLabel");	//17
					ventanas.push("Tabc57b8dfdTabLabel");	//18
					ventanas.push("Tab90be337fTabLabel");	//19
					ventanas.push("Tabe8450679TabLabel");	//20
					ventanas.push("Tab042fb325TabLabel");	//21
					ventanas.push("Tab803199dfTabLabel");	//22
					ventanas.push("Tab55716acdTabLabel");	//23
					ventanas.push("Tabc8d1b392TabLabel");   //24						
					
				}
				if (pais === "Colombia"){
					ventanas = ["Tabe087a3a5TabLabel"];	//01
					ventanas.push("Tab6f4f2135TabLabel");	//02
					ventanas.push("Tab965fb3d7TabLabel");	//03
					ventanas.push("Tabc600983bTabLabel");	//04
					ventanas.push("Tabfbb05131TabLabel");	//05
					ventanas.push("Tabe1d9f280TabLabel");	//06
					ventanas.push("Tabee5c4487TabLabel");	//07
					ventanas.push("Tab803199dfTabLabel");	//08
					ventanas.push("Tabc57b8dfdTabLabel");	//09
					ventanas.push("Tab55716acdTabLabel");	//10
					ventanas.push("Tab56a5d9f7TabLabel");	//11
					ventanas.push("Taba56c44bcTabLabel");	//12
				}
				if (pais === "Chile"){
					ventanas = ["Tabe087a3a5TabLabel"];	//01
					ventanas.push("Tab15b172f7TabLabel");	//02
					ventanas.push("Tab0a670775TabLabel");	//05
					ventanas.push("Tab6f4f2135TabLabel");	//08
					ventanas.push("Tab965fb3d7TabLabel");	//09
					ventanas.push("Tabc600983bTabLabel");	//10
					ventanas.push("Tab6db39f4fTabLabel");	//13 Chile
					ventanas.push("Tabee5c4487TabLabel");	//14
					ventanas.push("Tab6560865fTabLabel");	//15 Chile
					ventanas.push("Tab3b7002bcTabLabel");	//17
					ventanas.push("Tab90be337fTabLabel");	//19
					ventanas.push("Tabe8450679TabLabel");	//20
					ventanas.push("Tabc30e9b99TabLabel");	//21 Chile
				}
				if (pais === "UK"){
					ventanas = ["Tabe087a3a5TabLabel"];	//01
					ventanas.push("Tab15b172f7TabLabel");	//02
					ventanas.push("Tab0c5ecacdTabLabel");	//03
					ventanas.push("Tab66e8e01eTabLabel");	//04
					ventanas.push("Tab0a670775TabLabel");	//05
					ventanas.push("Tab0b35c5c6TabLabel");	//06
					ventanas.push("Tab5cafa2bfTabLabel");	//07
					ventanas.push("Tab6f4f2135TabLabel");	//08
					ventanas.push("Tab965fb3d7TabLabel");	//09
					ventanas.push("Tabc600983bTabLabel");	//10
					ventanas.push("Tab51273ae4TabLabel");	//11
					ventanas.push("Tabfbb05131TabLabel");	//12
					ventanas.push("Tabe1d9f280TabLabel");	//13
					ventanas.push("Tabee5c4487TabLabel");	//14
					ventanas.push("Taba56c44bcTabLabel");	//15
					ventanas.push("Tab77414d63TabLabel");	//16
					ventanas.push("Tab3b7002bcTabLabel");	//17
					ventanas.push("Tabc57b8dfdTabLabel");	//18
					ventanas.push("Tab90be337fTabLabel");	//19
					ventanas.push("Tabe8450679TabLabel");	//20
					ventanas.push("Tab042fb325TabLabel");	//21
					ventanas.push("Tab803199dfTabLabel");	//22
					ventanas.push("Tab55716acdTabLabel");	//23
				}
				return ventanas;
			},
			
			tipoSolicitudID: function(){
				
				var pais = this.get("YuPaisC").displayValue;
				var arrayID;
				
				if (pais === "España"){
					arrayID = ["b7ccb96a-c9be-4b80-b12e-ff43fdc935aa"];
					arrayID.push("1db6c046-d715-486b-b943-308d0e3d8a86");	//02
					arrayID.push("6b5a6230-bc80-4989-bb50-f03983180348");	//03
					arrayID.push("d0de36ff-57d8-454f-9fd5-479ee8c38abe");	//04
					arrayID.push("c2210ba9-1d4d-41d5-82c5-b32fa58ae59f");	//05
					arrayID.push("13177334-525f-4bb2-aba3-510cd85a4796");	//06
					arrayID.push("0ad86c6c-469f-48d0-8702-7ddd411a9c79");	//07
					arrayID.push("df70815e-b947-471b-b10d-96c3e6861570");	//08
					arrayID.push("15b6c62f-50b5-4ffb-8e6a-433a41203621");	//09
					arrayID.push("d5049970-61c3-43ac-bb1f-f541987b42ef");	//10
					arrayID.push("7b5ac6ca-abd4-4016-96ab-db46c50a08f4");	//11
					arrayID.push("4d065d1c-2066-4c72-a112-bbdf78b44ea9");	//12
					arrayID.push("6601355b-dbcb-4c6f-9f26-fa6e31989865");	//13
					arrayID.push("1156dd8b-cb5f-4f90-b0ba-14abc011e7ec");	//14
					arrayID.push("569b3607-90c4-49f0-9086-eba6bed09f9b");	//15
					arrayID.push("ce8bd067-e5d4-4cd8-8045-a40f591e2273");	//16
					arrayID.push("43fe2fc6-8bd5-42bd-9251-c7d867021c68");	//17
					arrayID.push("d47332b5-93ca-4fe3-ac07-7b65f59655b2");	//18
					arrayID.push("8cbab6c1-9c91-403c-92ca-055fe930c41f");	//19
					arrayID.push("efa4ed39-1c7f-49ca-84c2-8f04fc450bd6");	//20
					arrayID.push("ecc85a02-ff85-456b-9dbd-914c7cff5523");	//21
					arrayID.push("378956b4-e4e4-439d-85d8-8b52e6a1de08");	//22
					arrayID.push("3bc43ba1-e096-442b-897c-cf33244dae49");	//23
					arrayID.push("541dc815-2ec3-4437-b3cf-09845761c16b");	//24					
				}
				if (pais === "Colombia"){
					arrayID = ["82e046c6-8c98-430f-8d44-71c0907bb728"];	//01
					arrayID.push("99f03aec-b9ce-4732-800d-9d7172fa3d7b");	//02
					arrayID.push("d3c1a5a9-2760-4991-9854-87ec5eee2a44");	//03
					arrayID.push("8011a00f-9aa8-4348-920a-183e708f813d");	//04
					arrayID.push("699ab0bb-894f-4435-bddf-420699f3a429");	//05
					arrayID.push("c7fef982-de54-459f-82f3-2a758e289097");	//06
					arrayID.push("3f397d0e-50c9-436c-a35e-feaad98cdb54");	//07
					arrayID.push("ec5fa5d4-77d4-40b6-9492-029055debf05");	//08
					arrayID.push("f9c910d3-f86f-4c3e-92f4-e544ddd6d0e0");	//09
					arrayID.push("4b779b2f-3ef4-40f1-be76-120bc64fec73");	//10
					arrayID.push("277ffbfd-9647-4c7d-ad21-d8620197b270");	//11
					arrayID.push("b5112449-b9c4-4faf-a1c8-c8725541dd4c");	//12
				}
					
				if (pais === "Chile"){
					arrayID = ["9151ab0b-e7a2-4c27-b88f-ba1acde8ef99"];	//01
					arrayID.push("a0f9d3d1-5b69-4082-bbde-e9e09f9f0fc1");	//02
					arrayID.push("a77a3980-d805-4b71-8953-39bea162ca9d");	//05
					arrayID.push("76a81344-496b-44db-a53f-fb62a669b19a");	//08
					arrayID.push("af2f5292-837a-48a5-98d5-e5ed1ac69766");	//09
					arrayID.push("c18e0639-1b03-4174-8ea2-9519035c9179");	//10
					arrayID.push("f6c02c3e-ca38-4a2c-94bd-95107c82216b");	//13 Chile
					arrayID.push("21914efb-c731-4f1e-b92f-daf219cd2ddc");	//14
					arrayID.push("87b2806a-7c13-450c-956c-38279801eb37");	//15 Cihle
					arrayID.push("32c20b45-98cf-4f10-a55e-e5c23463054f");	//17
					arrayID.push("1903b102-709e-4b1b-b735-673639377a03");	//19
					arrayID.push("766eeaf6-6afd-4047-9a62-537134538a90");	//20
					arrayID.push("d33905c1-2c94-487b-b709-f3e1c07a3a26");	//21
				}
				if (pais === "UK"){
					arrayID = ["6a7b75f0-8d80-4655-9a38-58c5d3680cbc"];
					arrayID.push("bb9a2720-dfae-446a-ac84-269b506ee835");	//02
					arrayID.push("bf92f6ae-17c9-4dae-b431-38aaa647ddbf");	//03
					arrayID.push("ddc6f407-6325-409f-b0b8-70b4f71a0648");	//04
					arrayID.push("42a1eb7a-079e-483e-85b2-d8ae3ad0daf1");	//05
					arrayID.push("554fabc6-bca3-433c-a196-ad1ac719998c");	//06
					arrayID.push("7a1c2c30-ff61-48ec-a00c-c8d37a7b3463");	//07
					arrayID.push("83fa9ae6-a808-4b83-9400-e21dd4caf3d5");	//08
					arrayID.push("a621e399-e0bf-495b-bc94-bdf67eac736c");	//09
					arrayID.push("2ab08cae-2205-4f53-b79a-854510893cf6");	//10
					arrayID.push("a8acd2a0-9f25-4d3f-9755-c84188c00ebb");	//11
					arrayID.push("c54aca46-a8ad-4835-ad79-c5c73e197770");	//12
					arrayID.push("caaa086e-18ab-4115-a3d6-c449efcda069");	//13
					arrayID.push("8c336b20-a6da-4c72-8fb2-973d98a0644e");	//14
					arrayID.push("a6824cb7-7d9a-4358-a91d-eb0f94ef6b67");	//15
					arrayID.push("1eaa9c85-3b38-4c6e-9300-dcefd53b1333");	//16
					arrayID.push("3dcf964a-8b08-4bd9-9f2b-9e6be998f689");	//17
					arrayID.push("4844a4ed-9cf0-4f55-8a40-e0a3313d5eb5");	//18
					arrayID.push("ecf049f0-a4d6-4a26-ac42-97b3c02f0a19");	//19
					arrayID.push("c4b79ff8-edf5-4387-9dbe-bc6fbf3205a2");	//20
					arrayID.push("d55c4904-45aa-4fb2-b32c-6d73a28faee7");	//21
					arrayID.push("3c5f014f-a223-484c-bf2c-bdd09a0b5705");	//22
					arrayID.push("1b5d613f-d4cf-4d5e-a5eb-133493a32bf3");	//23
				}
				return arrayID;
				
			}
			
		},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "Numberf7829141-e572-44fb-8b54-2ad87dadf7f8",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "Number",
					"enabled": false
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "YuAreaC96263864-05c6-4b44-bcff-13f6b787c99e",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "YuAreaC",
					"enabled": false,
					"contentType": 3
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "CreatedBy120a2d3b-0648-4b82-a409-ee7261e3a77e",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "CreatedBy",
					"enabled": false,
					"contentType": 3
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "YuTipoSolicitud23a41e82-a815-41af-998e-90def2437493",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "YuTipoSolicitud",
					"enabled": {
						"bindTo": "VariableEditable"
					},
					"visible": {
						"bindTo": "MostrarTipoSolicitud"
					},
					"contentType": 3
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "LOOKUPc6ad8859-44d3-45e6-96fa-00e8ea8eaa53",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "YuTipodeSolicitudColC",
					"enabled": true,
					"visible": {
						"bindTo": "MostrarTipoSolicitudCol"
					},
					"contentType": 3
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "LOOKUP5fb34c82-d0a2-4f80-b4cb-b4a4aa19e193",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "YuTipodeSolicitudChiC",
					"enabled": true,
					"visible": {
						"bindTo": "MostrarTipoSolicitudChi"
					},
					"contentType": 3
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "YuTipoSolicitudUKCc921c695-5e32-4fe4-ade5-a0e72366375f",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 6,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "YuTipoSolicitudUKC",
					"visible": {
						"bindTo": "MostrarTipoSolicitudUK"
					},
					"enabled": true,
					"contentType": 3
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "YuDepartamentoDestino1259af01-fbb6-4211-8311-635af1f9ef89",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 7,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "YuDepartamentoDestino",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "YuCampServ26ac954a-ca1a-4a2c-917d-5240d1b50d76",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 8,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "YuCampServ"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "CreatedOn850896fc-b56f-4cfe-95b4-37a0ccbb0298",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 9,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "CreatedOn",
					"enabled": false
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "DATE3bbe58a0-e519-4ca3-8ace-3d1156e5182e",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 10,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "YuFechaLectura",
					"enabled": false
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "Subjectf4f173e8-8d4d-49ed-b29f-0216029d5a6a",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "Subject"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "YuQuieroSerInfEmailc9689b62-090a-4c73-a5fc-5bbb23f660b9",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 18,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "YuQuieroSerInfEmail"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "YuTipoCierreC219bca93-aa60-4cae-8fb9-e8ca80fac5d9",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "Header"
					},
					"bindTo": "YuTipoCierreC",
					"enabled": false,
					"contentType": 5
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "YuDescripcionCierre9ad4a1bf-bd87-4dea-9eb6-7a163f1b61c7",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "Header"
					},
					"bindTo": "YuDescripcionCierre",
					"enabled": false
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Tab965fb3d7TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab965fb3d7TabLabelTabCaption"
					},
					"blur": {
						"bindTo": "onMyFieldExit"
					},
					"items": [],
					"order": 0
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tab965fb3d7TabLabelGroup0021d957",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab965fb3d7TabLabelGroup0021d957GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tab965fb3d7TabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tab965fb3d7TabLabelGridLayoutd0cdb791",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tab965fb3d7TabLabelGroup0021d957",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "YuAcumulacionHorasLactancia4704be9d-1d44-43a4-9b51-5e4b57d71024",
				"values": {
					"layout": {
						"colSpan": 9,
						"rowSpan": 1,
						"column": 3,
						"row": 0,
						"layoutName": "Tab965fb3d7TabLabelGridLayoutd0cdb791"
					},
					"bindTo": "YuAcumulacionHorasLactancia"
				},
				"parentName": "Tab965fb3d7TabLabelGridLayoutd0cdb791",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "YuReduccionPermisoLactancia472eaddd-1cac-4acf-bf52-8b2222e92e54",
				"values": {
					"layout": {
						"colSpan": 9,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Tab965fb3d7TabLabelGridLayoutd0cdb791"
					},
					"bindTo": "YuReduccionPermisoLactancia"
				},
				"parentName": "Tab965fb3d7TabLabelGridLayoutd0cdb791",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Tab965fb3d7TabLabelGroup6cf1f675",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab965fb3d7TabLabelGroup6cf1f675GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tab965fb3d7TabLabel",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Tab965fb3d7TabLabelGridLayout6281e3bc",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tab965fb3d7TabLabelGroup6cf1f675",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "YuUltimoDiaPermisoMaternidadeba9d139-ed10-44d4-8c3a-23fa54fa1563",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tab965fb3d7TabLabelGridLayout6281e3bc"
					},
					"bindTo": "YuUltimoDiaPermisoMaternidad"
				},
				"parentName": "Tab965fb3d7TabLabelGridLayout6281e3bc",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "YuFechaInicioAcumulacion2cc26756-77b4-442c-888a-cc1f4b9307f8",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Tab965fb3d7TabLabelGridLayout6281e3bc"
					},
					"bindTo": "YuFechaInicioAcumulacion"
				},
				"parentName": "Tab965fb3d7TabLabelGridLayout6281e3bc",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Tab965fb3d7TabLabelGroup03b2dcc5",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab965fb3d7TabLabelGroup03b2dcc5GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tab965fb3d7TabLabel",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Tab965fb3d7TabLabelGridLayoutcfe31acb",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tab965fb3d7TabLabelGroup03b2dcc5",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "YuReducJornadaOpc1dbcd0451-fe57-49db-bf1c-f84b0b58b0cf",
				"values": {
					"layout": {
						"colSpan": 9,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tab965fb3d7TabLabelGridLayoutcfe31acb"
					},
					"bindTo": "YuReducJornadaOpc1"
				},
				"parentName": "Tab965fb3d7TabLabelGridLayoutcfe31acb",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "YuFechaInicioRedPermLactancia3b7b6557-fa6c-4d10-8c96-8aba1a6ae62f",
				"values": {
					"layout": {
						"colSpan": 14,
						"rowSpan": 1,
						"column": 10,
						"row": 0,
						"layoutName": "Tab965fb3d7TabLabelGridLayoutcfe31acb"
					},
					"bindTo": "YuFechaInicioRedPermLactancia"
				},
				"parentName": "Tab965fb3d7TabLabelGridLayoutcfe31acb",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "YuReducJornadaOpc23fa5e8e4-f6cc-4d69-8d3d-8e96c336e786",
				"values": {
					"layout": {
						"colSpan": 9,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Tab965fb3d7TabLabelGridLayoutcfe31acb"
					},
					"bindTo": "YuReducJornadaOpc2",
					"enabled": true
				},
				"parentName": "Tab965fb3d7TabLabelGridLayoutcfe31acb",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "YuFechaFinRedPermLactanciadab0464f-c755-4718-9f99-016dfc2e76ed",
				"values": {
					"layout": {
						"colSpan": 14,
						"rowSpan": 1,
						"column": 10,
						"row": 1,
						"layoutName": "Tab965fb3d7TabLabelGridLayoutcfe31acb"
					},
					"bindTo": "YuFechaFinRedPermLactancia"
				},
				"parentName": "Tab965fb3d7TabLabelGridLayoutcfe31acb",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Tabc600983bTabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabc600983bTabLabelTabCaption"
					},
					"blur": {
						"bindTo": "onMyFieldExit"
					},
					"items": [],
					"order": 1
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Tabc600983bTabLabelGroup638600a7",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabc600983bTabLabelGroup638600a7GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tabc600983bTabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tabc600983bTabLabelGridLayoutf2c69890",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tabc600983bTabLabelGroup638600a7",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "YuSolicitoa93b0cdd-164d-45d1-adc3-98935f0d5518",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tabc600983bTabLabelGridLayoutf2c69890"
					},
					"bindTo": "YuSolicito"
				},
				"parentName": "Tabc600983bTabLabelGridLayoutf2c69890",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "YuMotivo6efb2883-cda3-4575-864e-20fc19c80aea",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Tabc600983bTabLabelGridLayoutf2c69890"
					},
					"bindTo": "YuMotivo"
				},
				"parentName": "Tabc600983bTabLabelGridLayoutf2c69890",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Tab51273ae4TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab51273ae4TabLabelTabCaption"
					},
					"blur": {
						"bindTo": "onMyFieldExit"
					},
					"items": [],
					"order": 2
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Tab51273ae4TabLabelGroup1b6e1037",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab51273ae4TabLabelGroup1b6e1037GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tab51273ae4TabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tab51273ae4TabLabelGridLayoutf99583d5",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tab51273ae4TabLabelGroup1b6e1037",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "YuTipoTurnoSolic275cdb6a-f8a6-4d58-9aab-c0d052ae2183",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tab51273ae4TabLabelGridLayoutf99583d5"
					},
					"bindTo": "YuTipoTurnoSolic",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Tab51273ae4TabLabelGridLayoutf99583d5",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "YuCompensacionFestivos1e3c0eee-5429-44b1-b049-1f82768fd37d",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Tab51273ae4TabLabelGridLayoutf99583d5"
					},
					"bindTo": "YuCompensacionFestivos"
				},
				"parentName": "Tab51273ae4TabLabelGridLayoutf99583d5",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "YuPeticFestivVoluntf0136fab-f9f0-4997-9982-1fab3a05aba1",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "Tab51273ae4TabLabelGridLayoutf99583d5"
					},
					"bindTo": "YuPeticFestivVolunt"
				},
				"parentName": "Tab51273ae4TabLabelGridLayoutf99583d5",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "YuFestivoTrabajado216184ff-9d70-4089-ab99-aecef04c00ab",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "Tab51273ae4TabLabelGridLayoutf99583d5"
					},
					"bindTo": "YuFestivoTrabajado"
				},
				"parentName": "Tab51273ae4TabLabelGridLayoutf99583d5",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "YuFestivoVoluntario770affc2-ccf8-4f15-8bc1-400ed6070135",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 3,
						"layoutName": "Tab51273ae4TabLabelGridLayoutf99583d5"
					},
					"bindTo": "YuFestivoVoluntario"
				},
				"parentName": "Tab51273ae4TabLabelGridLayoutf99583d5",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "YuAutorizado1dca5af6c-0fb2-464b-9b63-2a7540d2be66",
				"values": {
					"layout": {
						"colSpan": 7,
						"rowSpan": 1,
						"column": 10,
						"row": 5,
						"layoutName": "Tab51273ae4TabLabelGridLayoutf99583d5"
					},
					"bindTo": "YuAutorizado1",
					"enabled": false
				},
				"parentName": "Tab51273ae4TabLabelGridLayoutf99583d5",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "YuDenegado1c455c7f3-87d2-42a9-b2d1-78db45424ff8",
				"values": {
					"layout": {
						"colSpan": 7,
						"rowSpan": 1,
						"column": 17,
						"row": 5,
						"layoutName": "Tab51273ae4TabLabelGridLayoutf99583d5"
					},
					"bindTo": "YuDenegado1",
					"enabled": false
				},
				"parentName": "Tab51273ae4TabLabelGridLayoutf99583d5",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "YuDiaSolicitado1c79115ab-7b7f-4437-b1f4-7f6c6d4dfed0",
				"values": {
					"layout": {
						"colSpan": 10,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "Tab51273ae4TabLabelGridLayoutf99583d5"
					},
					"bindTo": "YuDiaSolicitado1"
				},
				"parentName": "Tab51273ae4TabLabelGridLayoutf99583d5",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "YuAutorizado2ed7a98d5-2cf7-4bfc-b163-e9b26e493c81",
				"values": {
					"layout": {
						"colSpan": 7,
						"rowSpan": 1,
						"column": 10,
						"row": 6,
						"layoutName": "Tab51273ae4TabLabelGridLayoutf99583d5"
					},
					"bindTo": "YuAutorizado2",
					"enabled": false
				},
				"parentName": "Tab51273ae4TabLabelGridLayoutf99583d5",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "YuDenegado2c3fc9cba-f49c-4d27-a812-f1976f59c56a",
				"values": {
					"layout": {
						"colSpan": 7,
						"rowSpan": 1,
						"column": 17,
						"row": 6,
						"layoutName": "Tab51273ae4TabLabelGridLayoutf99583d5"
					},
					"bindTo": "YuDenegado2",
					"enabled": false
				},
				"parentName": "Tab51273ae4TabLabelGridLayoutf99583d5",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "YuDiaSolicitado28b9f51bc-9cab-43ed-9b76-faf9af56021c",
				"values": {
					"layout": {
						"colSpan": 10,
						"rowSpan": 1,
						"column": 0,
						"row": 6,
						"layoutName": "Tab51273ae4TabLabelGridLayoutf99583d5"
					},
					"bindTo": "YuDiaSolicitado2"
				},
				"parentName": "Tab51273ae4TabLabelGridLayoutf99583d5",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "YuAutorizado3035c7a26-273f-4859-925b-78b368f67007",
				"values": {
					"layout": {
						"colSpan": 7,
						"rowSpan": 1,
						"column": 10,
						"row": 7,
						"layoutName": "Tab51273ae4TabLabelGridLayoutf99583d5"
					},
					"bindTo": "YuAutorizado3",
					"enabled": false
				},
				"parentName": "Tab51273ae4TabLabelGridLayoutf99583d5",
				"propertyName": "items",
				"index": 11
			},
			{
				"operation": "insert",
				"name": "YuDenegado3116d1efd-2e7d-4f5f-aa86-0eae61491b46",
				"values": {
					"layout": {
						"colSpan": 7,
						"rowSpan": 1,
						"column": 17,
						"row": 7,
						"layoutName": "Tab51273ae4TabLabelGridLayoutf99583d5"
					},
					"bindTo": "YuDenegado3",
					"enabled": false
				},
				"parentName": "Tab51273ae4TabLabelGridLayoutf99583d5",
				"propertyName": "items",
				"index": 12
			},
			{
				"operation": "insert",
				"name": "YuDiaSolicitado35bd9a4bb-4e69-4e42-aee6-f5fef3c713da",
				"values": {
					"layout": {
						"colSpan": 10,
						"rowSpan": 1,
						"column": 0,
						"row": 7,
						"layoutName": "Tab51273ae4TabLabelGridLayoutf99583d5"
					},
					"bindTo": "YuDiaSolicitado3"
				},
				"parentName": "Tab51273ae4TabLabelGridLayoutf99583d5",
				"propertyName": "items",
				"index": 13
			},
			{
				"operation": "insert",
				"name": "YuAutorizado4f3252e59-0fd9-45fe-847d-633dbce63b52",
				"values": {
					"layout": {
						"colSpan": 7,
						"rowSpan": 1,
						"column": 10,
						"row": 8,
						"layoutName": "Tab51273ae4TabLabelGridLayoutf99583d5"
					},
					"bindTo": "YuAutorizado4",
					"enabled": false
				},
				"parentName": "Tab51273ae4TabLabelGridLayoutf99583d5",
				"propertyName": "items",
				"index": 14
			},
			{
				"operation": "insert",
				"name": "YuDenegado4f30e6229-0def-440e-b255-cf8b2850f58c",
				"values": {
					"layout": {
						"colSpan": 7,
						"rowSpan": 1,
						"column": 17,
						"row": 8,
						"layoutName": "Tab51273ae4TabLabelGridLayoutf99583d5"
					},
					"bindTo": "YuDenegado4",
					"enabled": false
				},
				"parentName": "Tab51273ae4TabLabelGridLayoutf99583d5",
				"propertyName": "items",
				"index": 15
			},
			{
				"operation": "insert",
				"name": "YuDiaSolicitado41a538741-af43-4cee-b665-ca76709deb2c",
				"values": {
					"layout": {
						"colSpan": 10,
						"rowSpan": 1,
						"column": 0,
						"row": 8,
						"layoutName": "Tab51273ae4TabLabelGridLayoutf99583d5"
					},
					"bindTo": "YuDiaSolicitado4"
				},
				"parentName": "Tab51273ae4TabLabelGridLayoutf99583d5",
				"propertyName": "items",
				"index": 16
			},
			{
				"operation": "insert",
				"name": "Tab56a5d9f7TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab56a5d9f7TabLabelTabCaption"
					},
					"items": [],
					"order": 3
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Tab56a5d9f7TabLabelGroup76f60b53",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab56a5d9f7TabLabelGroup76f60b53GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tab56a5d9f7TabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tab56a5d9f7TabLabelGridLayoutabe8cc0e",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tab56a5d9f7TabLabelGroup76f60b53",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "YuDiaFamiliaProgramadoQueDeseaModificarae42fcdb-37ae-492c-b64a-4f338c8788f0",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tab56a5d9f7TabLabelGridLayoutabe8cc0e"
					},
					"bindTo": "YuDiaFamiliaProgramadoQueDeseaModificar"
				},
				"parentName": "Tab56a5d9f7TabLabelGridLayoutabe8cc0e",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "YuDiaFamiliaQueSolicita6878ceaa-3f84-4280-addd-67135a02a947",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Tab56a5d9f7TabLabelGridLayoutabe8cc0e"
					},
					"bindTo": "YuDiaFamiliaQueSolicita"
				},
				"parentName": "Tab56a5d9f7TabLabelGridLayoutabe8cc0e",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Tabfbb05131TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabfbb05131TabLabelTabCaption"
					},
					"blur": {
						"bindTo": "onMyFieldExit"
					},
					"items": [],
					"order": 4
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Tabfbb05131TabLabelGroupb9ede219",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabfbb05131TabLabelGroupb9ede219GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tabfbb05131TabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tabfbb05131TabLabelGridLayout31bbb7b3",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tabfbb05131TabLabelGroupb9ede219",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "YuSolicitudCambioDiaOff6641ca9f-f7b8-44b8-aac2-ea4ec3884aef",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 2,
						"row": 0,
						"layoutName": "Tabfbb05131TabLabelGridLayout31bbb7b3"
					},
					"bindTo": "YuSolicitudCambioDiaOff"
				},
				"parentName": "Tabfbb05131TabLabelGridLayout31bbb7b3",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tabfbb05131TabLabelGroup4a59642a",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabfbb05131TabLabelGroup4a59642aGroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tabfbb05131TabLabel",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Tabfbb05131TabLabelGridLayout1e1e705e",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tabfbb05131TabLabelGroup4a59642a",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "STRINGf51499f4-b5db-423f-afcc-0ebb01bb74df",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tabfbb05131TabLabelGridLayout1e1e705e"
					},
					"bindTo": "YuSolicito2",
					"enabled": true
				},
				"parentName": "Tabfbb05131TabLabelGridLayout1e1e705e",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "STRING951f7712-50a8-475b-aaeb-a799bbb6133f",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Tabfbb05131TabLabelGridLayout1e1e705e"
					},
					"bindTo": "YuMotivo2",
					"enabled": true
				},
				"parentName": "Tabfbb05131TabLabelGridLayout1e1e705e",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Tabfbb05131TabLabelGroup977f031c",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabfbb05131TabLabelGroup977f031cGroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tabfbb05131TabLabel",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Tabfbb05131TabLabelGridLayout9c592523",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tabfbb05131TabLabelGroup977f031c",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "YuDiaAPasarOff0c795468-1a15-4a00-8b2d-03d23bdac162",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tabfbb05131TabLabelGridLayout9c592523"
					},
					"bindTo": "YuDiaAPasarOff"
				},
				"parentName": "Tabfbb05131TabLabelGridLayout9c592523",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "YuDiaOff056f977f-4535-4b04-8adc-1a07a09b3460",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Tabfbb05131TabLabelGridLayout9c592523"
					},
					"bindTo": "YuDiaOff"
				},
				"parentName": "Tabfbb05131TabLabelGridLayout9c592523",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Tabfbb05131TabLabelGroup75f0d432",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabfbb05131TabLabelGroup75f0d432GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tabfbb05131TabLabel",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Tabfbb05131TabLabelGridLayout72c1cd7f",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tabfbb05131TabLabelGroup75f0d432",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "YuNombre23d02654-96dd-4f0c-811c-3c4735da847b",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tabfbb05131TabLabelGridLayout72c1cd7f"
					},
					"bindTo": "YuNombre"
				},
				"parentName": "Tabfbb05131TabLabelGridLayout72c1cd7f",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "YuApellidos32684565-2dbb-4b33-a0e7-5f0edfc25dec",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Tabfbb05131TabLabelGridLayout72c1cd7f"
					},
					"bindTo": "YuApellidos"
				},
				"parentName": "Tabfbb05131TabLabelGridLayout72c1cd7f",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "YuDiaAPasarOffCambiocc4dbcd7-285c-4870-8407-a98e0e4c0650",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Tabfbb05131TabLabelGridLayout72c1cd7f"
					},
					"bindTo": "YuDiaAPasarOffCambio"
				},
				"parentName": "Tabfbb05131TabLabelGridLayout72c1cd7f",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "YuDiaOffCambiof395dac9-72d0-4430-8e6f-373fa0088fa1",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "Tabfbb05131TabLabelGridLayout72c1cd7f"
					},
					"bindTo": "YuDiaOffCambio"
				},
				"parentName": "Tabfbb05131TabLabelGridLayout72c1cd7f",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Tabe1d9f280TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabe1d9f280TabLabelTabCaption"
					},
					"blur": {
						"bindTo": "onMyFieldExit"
					},
					"items": [],
					"order": 5
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Tabe1d9f280TabLabelGroupa6f9d3c7",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabe1d9f280TabLabelGroupa6f9d3c7GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tabe1d9f280TabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tabe1d9f280TabLabelGridLayoutc6fa7fd6",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tabe1d9f280TabLabelGroupa6f9d3c7",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "YuSolicito3d1889ec-1721-4681-ab02-5ede95836dda",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tabe1d9f280TabLabelGridLayoutc6fa7fd6"
					},
					"bindTo": "YuSolicito"
				},
				"parentName": "Tabe1d9f280TabLabelGridLayoutc6fa7fd6",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "YuMotivo9377a142-2235-4351-83bf-08643a19b708",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Tabe1d9f280TabLabelGridLayoutc6fa7fd6"
					},
					"bindTo": "YuMotivo"
				},
				"parentName": "Tabe1d9f280TabLabelGridLayoutc6fa7fd6",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Tab6db39f4fTabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab6db39f4fTabLabelTabCaption"
					},
					"items": [],
					"order": 6
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "Tab6db39f4fTabLabelGroup53060180",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab6db39f4fTabLabelGroup53060180GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tab6db39f4fTabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tab6db39f4fTabLabelGridLayout2568e43f",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tab6db39f4fTabLabelGroup53060180",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "YuDiaAdministrativo64bbb861-5dca-482d-b457-b2b7e69aef1c",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tab6db39f4fTabLabelGridLayout2568e43f"
					},
					"bindTo": "YuDiaAdministrativo"
				},
				"parentName": "Tab6db39f4fTabLabelGridLayout2568e43f",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "YuDiaCambioDomicilio3f291b29-e73b-4dc9-bd00-393565f2c27a",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Tab6db39f4fTabLabelGridLayout2568e43f"
					},
					"bindTo": "YuDiaCambioDomicilio"
				},
				"parentName": "Tab6db39f4fTabLabelGridLayout2568e43f",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "YuBoolean126aae586-6f0b-40ca-885e-73f0965a2222",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Tab6db39f4fTabLabelGridLayout2568e43f"
					},
					"bindTo": "YuBoolean1"
				},
				"parentName": "Tab6db39f4fTabLabelGridLayout2568e43f",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "BOOLEAN0914b1e3-d368-4322-8fe0-7bf7832c4b04",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "Tab6db39f4fTabLabelGridLayout2568e43f"
					},
					"bindTo": "YuDiasDefuncion",
					"enabled": true
				},
				"parentName": "Tab6db39f4fTabLabelGridLayout2568e43f",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "BOOLEANc8c261e0-29b3-4f81-867c-4d8c569d1721",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "Tab6db39f4fTabLabelGridLayout2568e43f"
					},
					"bindTo": "YuDiasNacimiento",
					"enabled": true
				},
				"parentName": "Tab6db39f4fTabLabelGridLayout2568e43f",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "BOOLEANaaa400cf-d85c-4ca7-b6e4-81554c3a5526",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "Tab6db39f4fTabLabelGridLayout2568e43f"
					},
					"bindTo": "YuPermisoEmbarazadas",
					"enabled": true
				},
				"parentName": "Tab6db39f4fTabLabelGridLayout2568e43f",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "BOOLEANbaa180b3-88d1-4494-959d-783a9b36cefc",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 6,
						"layoutName": "Tab6db39f4fTabLabelGridLayout2568e43f"
					},
					"bindTo": "YuPermisosExamenesMedicosLegales",
					"enabled": true
				},
				"parentName": "Tab6db39f4fTabLabelGridLayout2568e43f",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "Tabee5c4487TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabee5c4487TabLabelTabCaption"
					},
					"blur": {
						"bindTo": "onMyFieldExit"
					},
					"items": [],
					"order": 7
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "Tabee5c4487TabLabelGroup6d8752d2",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabee5c4487TabLabelGroup6d8752d2GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tabee5c4487TabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tabee5c4487TabLabelGridLayouta7a3621a",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tabee5c4487TabLabelGroup6d8752d2",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "YuTurnoActualc0560f8b-52a7-437a-b618-cfa3ca54bcff",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tabee5c4487TabLabelGridLayouta7a3621a"
					},
					"bindTo": "YuTurnoActual",
					"enabled": {
						"bindTo": "VariableEditable"
					},
					"contentType": 3
				},
				"parentName": "Tabee5c4487TabLabelGridLayouta7a3621a",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "YuTurnoSolicitado945a4f6e-8210-4498-9f7c-5c247f196bf2",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Tabee5c4487TabLabelGridLayouta7a3621a"
					},
					"bindTo": "YuTurnoSolicitado",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Tabee5c4487TabLabelGridLayouta7a3621a",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "YuHorarioSolicitado6dde21e8-434e-4ed3-87f6-f4b86d31c339",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Tabee5c4487TabLabelGridLayouta7a3621a"
					},
					"bindTo": "YuHorarioSolicitado"
				},
				"parentName": "Tabee5c4487TabLabelGridLayouta7a3621a",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "YuMotivoSolicitud435e659c-c168-411b-bd49-173f9a6604da",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Tabee5c4487TabLabelGridLayouta7a3621a"
					},
					"bindTo": "YuMotivoSolicitud",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Tabee5c4487TabLabelGridLayouta7a3621a",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Tabee5c4487TabLabelGroup851b7fff",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabee5c4487TabLabelGroup851b7fffGroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tabee5c4487TabLabel",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Tabee5c4487TabLabelGridLayout3aeca8b0",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tabee5c4487TabLabelGroup851b7fff",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "YuFotocopiaLibroFamiliaf5151907-e313-4140-97f3-7df50b58b55b",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tabee5c4487TabLabelGridLayout3aeca8b0"
					},
					"bindTo": "YuFotocopiaLibroFamilia"
				},
				"parentName": "Tabee5c4487TabLabelGridLayout3aeca8b0",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "YuJustificanteMatricula9ad2aaf3-e643-4b9a-9a3e-3aadd9da36dd",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Tabee5c4487TabLabelGridLayout3aeca8b0"
					},
					"bindTo": "YuJustificanteMatricula"
				},
				"parentName": "Tabee5c4487TabLabelGridLayout3aeca8b0",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "YuJustificanteHorarioEstudios2e976612-3e22-4b33-90e6-8be69712c0b6",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Tabee5c4487TabLabelGridLayout3aeca8b0"
					},
					"bindTo": "YuJustificanteHorarioEstudios"
				},
				"parentName": "Tabee5c4487TabLabelGridLayout3aeca8b0",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "YuContratoLaboral9d91c1e3-d68d-4f18-9a92-04ea68a363a1",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "Tabee5c4487TabLabelGridLayout3aeca8b0"
					},
					"bindTo": "YuContratoLaboral"
				},
				"parentName": "Tabee5c4487TabLabelGridLayout3aeca8b0",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Tabc30e9b99TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabc30e9b99TabLabelTabCaption"
					},
					"items": [],
					"order": 8
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "Tabc30e9b99TabLabelGroup1a38e978",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabc30e9b99TabLabelGroup1a38e978GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tabc30e9b99TabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tabc30e9b99TabLabelGridLayout3e7c8b02",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tabc30e9b99TabLabelGroup1a38e978",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "YuSolicitof4c29b6b-bd4e-474d-9f19-f4aab5fe410c",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tabc30e9b99TabLabelGridLayout3e7c8b02"
					},
					"bindTo": "YuSolicito",
					"enabled": true,
					"contentType": 0
				},
				"parentName": "Tabc30e9b99TabLabelGridLayout3e7c8b02",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "YuMotivo605539e3-d9c1-47b9-adb7-11c2803b442d",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Tabc30e9b99TabLabelGridLayout3e7c8b02"
					},
					"bindTo": "YuMotivo",
					"enabled": true,
					"contentType": 0
				},
				"parentName": "Tabc30e9b99TabLabelGridLayout3e7c8b02",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Taba56c44bcTabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Taba56c44bcTabLabelTabCaption"
					},
					"blur": {
						"bindTo": "onMyFieldExit"
					},
					"items": [],
					"order": 9
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "Taba56c44bcTabLabelGroup32d0bbcc",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Taba56c44bcTabLabelGroup32d0bbccGroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Taba56c44bcTabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Taba56c44bcTabLabelGridLayout6d94999c",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Taba56c44bcTabLabelGroup32d0bbcc",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "YuNomCorres04a20abb-16d6-4914-b6d6-23b23002476e",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Taba56c44bcTabLabelGridLayout6d94999c"
					},
					"bindTo": "YuNomCorres"
				},
				"parentName": "Taba56c44bcTabLabelGridLayout6d94999c",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "YuCorreoElectronicoe85a18b7-a361-4b5b-ab6c-5318e0ac7f58",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Taba56c44bcTabLabelGridLayout6d94999c"
					},
					"bindTo": "YuCorreoElectronico"
				},
				"parentName": "Taba56c44bcTabLabelGridLayout6d94999c",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Taba56c44bcTabLabelGroupd9e1aa50",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Taba56c44bcTabLabelGroupd9e1aa50GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Taba56c44bcTabLabel",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Taba56c44bcTabLabelGridLayoutf430d4d4",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Taba56c44bcTabLabelGroupd9e1aa50",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "YuMesDevengoC64b9a0ea-f576-47ab-b16b-a867b984da18",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Taba56c44bcTabLabelGridLayoutf430d4d4"
					},
					"bindTo": "YuMesDevengoC",
					"labelConfig": {
						"caption": {
							"bindTo": "Resources.Strings.YuMesDevengoC64b9a0eaf57647abb16ba867b984da18LabelCaption"
						}
					},
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Taba56c44bcTabLabelGridLayoutf430d4d4",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "YuAnoDevengoCb903a7b1-28aa-4c69-99c7-2982480e3faf",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Taba56c44bcTabLabelGridLayoutf430d4d4"
					},
					"bindTo": "YuAnoDevengoC",
					"labelConfig": {
						"caption": {
							"bindTo": "Resources.Strings.YuAnoDevengoCb903a7b128aa4c6999c72982480e3fafLabelCaption"
						}
					},
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Taba56c44bcTabLabelGridLayoutf430d4d4",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Taba56c44bcTabLabelGroupfeeb3d88",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Taba56c44bcTabLabelGroupfeeb3d88GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Taba56c44bcTabLabel",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Taba56c44bcTabLabelGridLayout91bccebf",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Taba56c44bcTabLabelGroupfeeb3d88",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "YuIRPF6b57606f-dbab-4751-9bd8-40c31c7d43e0",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Taba56c44bcTabLabelGridLayout91bccebf"
					},
					"bindTo": "YuIRPF"
				},
				"parentName": "Taba56c44bcTabLabelGridLayout91bccebf",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "YuObsIRPF68629131-29af-416f-9cdc-0476f49f6ff6",
				"values": {
					"layout": {
						"colSpan": 18,
						"rowSpan": 1,
						"column": 6,
						"row": 0,
						"layoutName": "Taba56c44bcTabLabelGridLayout91bccebf"
					},
					"bindTo": "YuObsIRPF"
				},
				"parentName": "Taba56c44bcTabLabelGridLayout91bccebf",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "YuBajaMedica5cdf5110-c536-4a09-8cf5-4f079bd8b260",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Taba56c44bcTabLabelGridLayout91bccebf"
					},
					"bindTo": "YuBajaMedica"
				},
				"parentName": "Taba56c44bcTabLabelGridLayout91bccebf",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "YuObsBajaMedica102fd90c-c779-4d39-b0e0-0beb9d94fac7",
				"values": {
					"layout": {
						"colSpan": 18,
						"rowSpan": 1,
						"column": 6,
						"row": 1,
						"layoutName": "Taba56c44bcTabLabelGridLayout91bccebf"
					},
					"bindTo": "YuObsBajaMedica"
				},
				"parentName": "Taba56c44bcTabLabelGridLayout91bccebf",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "YuPlusDeIdiomas4c55a522-a7d7-478c-9434-8d465051b197",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Taba56c44bcTabLabelGridLayout91bccebf"
					},
					"bindTo": "YuPlusDeIdiomas"
				},
				"parentName": "Taba56c44bcTabLabelGridLayout91bccebf",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "YuObsPlusIdiomas3270a8d7-7a13-40b0-bd48-a0f7f96848c7",
				"values": {
					"layout": {
						"colSpan": 18,
						"rowSpan": 1,
						"column": 6,
						"row": 2,
						"layoutName": "Taba56c44bcTabLabelGridLayout91bccebf"
					},
					"bindTo": "YuObsPlusIdiomas"
				},
				"parentName": "Taba56c44bcTabLabelGridLayout91bccebf",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "YuBecaFormacion8a0c8a18-2680-4e3f-bade-69afefeed091",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "Taba56c44bcTabLabelGridLayout91bccebf"
					},
					"bindTo": "YuBecaFormacion"
				},
				"parentName": "Taba56c44bcTabLabelGridLayout91bccebf",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "YuObsBecaFormacion0efa08b2-4e02-433a-ae9d-2b387cb845e4",
				"values": {
					"layout": {
						"colSpan": 18,
						"rowSpan": 1,
						"column": 6,
						"row": 3,
						"layoutName": "Taba56c44bcTabLabelGridLayout91bccebf"
					},
					"bindTo": "YuObsBecaFormacion"
				},
				"parentName": "Taba56c44bcTabLabelGridLayout91bccebf",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "YuFestivos298f289d-ec96-4677-8ee0-ffa798b5093e",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "Taba56c44bcTabLabelGridLayout91bccebf"
					},
					"bindTo": "YuFestivos"
				},
				"parentName": "Taba56c44bcTabLabelGridLayout91bccebf",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "YuObsFestivos92abdb37-0028-4f63-a5cf-22362b2036d7",
				"values": {
					"layout": {
						"colSpan": 18,
						"rowSpan": 1,
						"column": 6,
						"row": 4,
						"layoutName": "Taba56c44bcTabLabelGridLayout91bccebf"
					},
					"bindTo": "YuObsFestivos"
				},
				"parentName": "Taba56c44bcTabLabelGridLayout91bccebf",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "YuPlusNocturnidadc3bec136-96ef-4ad3-b2a8-15b14d672d86",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "Taba56c44bcTabLabelGridLayout91bccebf"
					},
					"bindTo": "YuPlusNocturnidad"
				},
				"parentName": "Taba56c44bcTabLabelGridLayout91bccebf",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "YuObsPlusNocturnidad206f1508-2f21-46f6-a2b4-41a7e582ab8d",
				"values": {
					"layout": {
						"colSpan": 18,
						"rowSpan": 1,
						"column": 6,
						"row": 5,
						"layoutName": "Taba56c44bcTabLabelGridLayout91bccebf"
					},
					"bindTo": "YuObsPlusNocturnidad"
				},
				"parentName": "Taba56c44bcTabLabelGridLayout91bccebf",
				"propertyName": "items",
				"index": 11
			},
			{
				"operation": "insert",
				"name": "YuPlusTransporteb22cfebe-4f0e-4d75-85d3-14e5f9eadca6",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 0,
						"row": 6,
						"layoutName": "Taba56c44bcTabLabelGridLayout91bccebf"
					},
					"bindTo": "YuPlusTransporte"
				},
				"parentName": "Taba56c44bcTabLabelGridLayout91bccebf",
				"propertyName": "items",
				"index": 12
			},
			{
				"operation": "insert",
				"name": "YuObsPlusTransporte72260bae-5e9b-4706-8077-dca879b0de22",
				"values": {
					"layout": {
						"colSpan": 18,
						"rowSpan": 1,
						"column": 6,
						"row": 6,
						"layoutName": "Taba56c44bcTabLabelGridLayout91bccebf"
					},
					"bindTo": "YuObsPlusTransporte"
				},
				"parentName": "Taba56c44bcTabLabelGridLayout91bccebf",
				"propertyName": "items",
				"index": 13
			},
			{
				"operation": "insert",
				"name": "YuPlusExcelencia79109e1e-034b-415d-b7eb-4a6e3c371a12",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 0,
						"row": 7,
						"layoutName": "Taba56c44bcTabLabelGridLayout91bccebf"
					},
					"bindTo": "YuPlusExcelencia"
				},
				"parentName": "Taba56c44bcTabLabelGridLayout91bccebf",
				"propertyName": "items",
				"index": 14
			},
			{
				"operation": "insert",
				"name": "YuObsPlusExcelenciafb2aa182-d292-4460-a771-2cc11684d614",
				"values": {
					"layout": {
						"colSpan": 18,
						"rowSpan": 1,
						"column": 6,
						"row": 7,
						"layoutName": "Taba56c44bcTabLabelGridLayout91bccebf"
					},
					"bindTo": "YuObsPlusExcelencia"
				},
				"parentName": "Taba56c44bcTabLabelGridLayout91bccebf",
				"propertyName": "items",
				"index": 15
			},
			{
				"operation": "insert",
				"name": "YuCategoria40da4f2d-0fc5-4fd6-bfd7-90234673539c",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 0,
						"row": 8,
						"layoutName": "Taba56c44bcTabLabelGridLayout91bccebf"
					},
					"bindTo": "YuCategoria",
					"enabled": true
				},
				"parentName": "Taba56c44bcTabLabelGridLayout91bccebf",
				"propertyName": "items",
				"index": 16
			},
			{
				"operation": "insert",
				"name": "YuObsCategoria5100cb81-a973-43e5-9ba2-f08d614b0f75",
				"values": {
					"layout": {
						"colSpan": 18,
						"rowSpan": 1,
						"column": 6,
						"row": 8,
						"layoutName": "Taba56c44bcTabLabelGridLayout91bccebf"
					},
					"bindTo": "YuObsCategoria"
				},
				"parentName": "Taba56c44bcTabLabelGridLayout91bccebf",
				"propertyName": "items",
				"index": 17
			},
			{
				"operation": "insert",
				"name": "YuAusencias3573f4ef-dc22-4261-9119-009f424fc280",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 0,
						"row": 9,
						"layoutName": "Taba56c44bcTabLabelGridLayout91bccebf"
					},
					"bindTo": "YuAusencias"
				},
				"parentName": "Taba56c44bcTabLabelGridLayout91bccebf",
				"propertyName": "items",
				"index": 18
			},
			{
				"operation": "insert",
				"name": "YuObsAusenciasa5ca1158-f941-4b8d-bffc-141b1debda9d",
				"values": {
					"layout": {
						"colSpan": 18,
						"rowSpan": 1,
						"column": 6,
						"row": 9,
						"layoutName": "Taba56c44bcTabLabelGridLayout91bccebf"
					},
					"bindTo": "YuObsAusencias"
				},
				"parentName": "Taba56c44bcTabLabelGridLayout91bccebf",
				"propertyName": "items",
				"index": 19
			},
			{
				"operation": "insert",
				"name": "YuTeletrabajo09900350-36b2-4ff8-8f0d-654cc4f2f662",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 0,
						"row": 10,
						"layoutName": "Taba56c44bcTabLabelGridLayout91bccebf"
					},
					"bindTo": "YuTeletrabajo"
				},
				"parentName": "Taba56c44bcTabLabelGridLayout91bccebf",
				"propertyName": "items",
				"index": 20
			},
			{
				"operation": "insert",
				"name": "YuCantDiasSueldod87c7831-ff32-4c56-91c5-8bbc4b1511cc",
				"values": {
					"layout": {
						"colSpan": 7,
						"rowSpan": 1,
						"column": 17,
						"row": 10,
						"layoutName": "Taba56c44bcTabLabelGridLayout91bccebf"
					},
					"bindTo": "YuCantDiasSueldo",
					"labelConfig": {
						"caption": {
							"bindTo": "Resources.Strings.YuCantDiasSueldod87c7831ff324c5691c58bbc4b1511ccLabelCaption"
						}
					},
					"enabled": true
				},
				"parentName": "Taba56c44bcTabLabelGridLayout91bccebf",
				"propertyName": "items",
				"index": 21
			},
			{
				"operation": "insert",
				"name": "LOOKUP25f8a96d-1638-48dd-a57b-6dacfe95226b",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 6,
						"row": 10,
						"layoutName": "Taba56c44bcTabLabelGridLayout91bccebf"
					},
					"bindTo": "YuMotivoTeletrabajo",
					"labelConfig": {
						"caption": {
							"bindTo": "Resources.Strings.LOOKUP25f8a96d163848dda57b6dacfe95226bLabelCaption"
						}
					},
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Taba56c44bcTabLabelGridLayout91bccebf",
				"propertyName": "items",
				"index": 22
			},
			{
				"operation": "insert",
				"name": "STRINGad1c5e7e-4ad3-4f76-b2e0-c0b2529d00a7",
				"values": {
					"layout": {
						"colSpan": 18,
						"rowSpan": 1,
						"column": 6,
						"row": 11,
						"layoutName": "Taba56c44bcTabLabelGridLayout91bccebf"
					},
					"bindTo": "YuObsTeletrabajo",
					"enabled": true
				},
				"parentName": "Taba56c44bcTabLabelGridLayout91bccebf",
				"propertyName": "items",
				"index": 23
			},
			{
				"operation": "insert",
				"name": "YuOtros01e43654-9998-4265-ada2-e11ccaba2668",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 0,
						"row": 12,
						"layoutName": "Taba56c44bcTabLabelGridLayout91bccebf"
					},
					"bindTo": "YuOtros"
				},
				"parentName": "Taba56c44bcTabLabelGridLayout91bccebf",
				"propertyName": "items",
				"index": 24
			},
			{
				"operation": "insert",
				"name": "YuObsOtros0f11f189-d4b0-43a7-80eb-b1a87a54491c",
				"values": {
					"layout": {
						"colSpan": 18,
						"rowSpan": 1,
						"column": 6,
						"row": 12,
						"layoutName": "Taba56c44bcTabLabelGridLayout91bccebf"
					},
					"bindTo": "YuObsOtros"
				},
				"parentName": "Taba56c44bcTabLabelGridLayout91bccebf",
				"propertyName": "items",
				"index": 25
			},
			{
				"operation": "insert",
				"name": "Tab6560865fTabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab6560865fTabLabelTabCaption"
					},
					"items": [],
					"order": 10
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "Tab6560865fTabLabelGroupe0700611",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab6560865fTabLabelGroupe0700611GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tab6560865fTabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tab6560865fTabLabelGridLayout0cd35368",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tab6560865fTabLabelGroupe0700611",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CreatedByf246801f-06db-413f-b718-3c67c1d55f90",
				"values": {
					"layout": {
						"colSpan": 18,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tab6560865fTabLabelGridLayout0cd35368"
					},
					"bindTo": "CreatedBy",
					"enabled": false,
					"contentType": 5
				},
				"parentName": "Tab6560865fTabLabelGridLayout0cd35368",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "YuTelefonodecontacto6a1a67ed-597e-47eb-a129-e3327fe51140",
				"values": {
					"layout": {
						"colSpan": 18,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Tab6560865fTabLabelGridLayout0cd35368"
					},
					"bindTo": "YuTelefonodecontacto"
				},
				"parentName": "Tab6560865fTabLabelGridLayout0cd35368",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Tab6560865fTabLabelGroup55315835",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab6560865fTabLabelGroup55315835GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tab6560865fTabLabel",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Tab6560865fTabLabelGridLayout6c8a2de1",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tab6560865fTabLabelGroup55315835",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "YuNomCorres86c37d8a-1aca-4cea-b905-19885a02a27c",
				"values": {
					"layout": {
						"colSpan": 18,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tab6560865fTabLabelGridLayout6c8a2de1"
					},
					"bindTo": "YuNomCorres"
				},
				"parentName": "Tab6560865fTabLabelGridLayout6c8a2de1",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "BOOLEAN30fa62f9-7c5e-4093-af33-cf1283759b51",
				"values": {
					"layout": {
						"colSpan": 7,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Tab6560865fTabLabelGridLayout6c8a2de1"
					},
					"bindTo": "YuHorasDiariosChi",
					"enabled": true
				},
				"parentName": "Tab6560865fTabLabelGridLayout6c8a2de1",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "YuObs16e81cf2e-e025-4659-8b4f-2619df80219b",
				"values": {
					"layout": {
						"colSpan": 16,
						"rowSpan": 1,
						"column": 8,
						"row": 1,
						"layoutName": "Tab6560865fTabLabelGridLayout6c8a2de1"
					},
					"bindTo": "YuObs1",
					"enabled": true
				},
				"parentName": "Tab6560865fTabLabelGridLayout6c8a2de1",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "BOOLEAN1594084f-af70-4711-aecc-e78dd582b041",
				"values": {
					"layout": {
						"colSpan": 7,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Tab6560865fTabLabelGridLayout6c8a2de1"
					},
					"bindTo": "YuHorasNoctDiariChi",
					"enabled": true
				},
				"parentName": "Tab6560865fTabLabelGridLayout6c8a2de1",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "YuObs27ea1460b-8e6c-4816-bbe3-9a8be18e416a",
				"values": {
					"layout": {
						"colSpan": 16,
						"rowSpan": 1,
						"column": 8,
						"row": 2,
						"layoutName": "Tab6560865fTabLabelGridLayout6c8a2de1"
					},
					"bindTo": "YuObs2"
				},
				"parentName": "Tab6560865fTabLabelGridLayout6c8a2de1",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "BOOLEANd4847c8e-0719-4190-bab0-0184926aaa36",
				"values": {
					"layout": {
						"colSpan": 7,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "Tab6560865fTabLabelGridLayout6c8a2de1"
					},
					"bindTo": "YuFeriadoChi",
					"enabled": true
				},
				"parentName": "Tab6560865fTabLabelGridLayout6c8a2de1",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "YuObs384a078ca-1a00-4f66-85a8-6d41fb56e0a1",
				"values": {
					"layout": {
						"colSpan": 16,
						"rowSpan": 1,
						"column": 8,
						"row": 3,
						"layoutName": "Tab6560865fTabLabelGridLayout6c8a2de1"
					},
					"bindTo": "YuObs3"
				},
				"parentName": "Tab6560865fTabLabelGridLayout6c8a2de1",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "BOOLEAN462c5e84-d034-457f-8435-b45ab012445e",
				"values": {
					"layout": {
						"colSpan": 7,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "Tab6560865fTabLabelGridLayout6c8a2de1"
					},
					"bindTo": "YuColacionNocturnaChi",
					"enabled": true
				},
				"parentName": "Tab6560865fTabLabelGridLayout6c8a2de1",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "YuObs4aa8d3441-890e-4171-9def-ce3d440243c2",
				"values": {
					"layout": {
						"colSpan": 16,
						"rowSpan": 1,
						"column": 8,
						"row": 4,
						"layoutName": "Tab6560865fTabLabelGridLayout6c8a2de1"
					},
					"bindTo": "YuObs4"
				},
				"parentName": "Tab6560865fTabLabelGridLayout6c8a2de1",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "BOOLEANa8021f4a-9d02-4b86-9f7e-02e10fd2f242",
				"values": {
					"layout": {
						"colSpan": 7,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "Tab6560865fTabLabelGridLayout6c8a2de1"
					},
					"bindTo": "YuAusenciasRetrasosChi",
					"enabled": true
				},
				"parentName": "Tab6560865fTabLabelGridLayout6c8a2de1",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "STRING6ddf1f5c-b88e-4a45-92f4-bb1b78b69684",
				"values": {
					"layout": {
						"colSpan": 16,
						"rowSpan": 1,
						"column": 8,
						"row": 5,
						"layoutName": "Tab6560865fTabLabelGridLayout6c8a2de1"
					},
					"bindTo": "YuObservaciones5",
					"enabled": true
				},
				"parentName": "Tab6560865fTabLabelGridLayout6c8a2de1",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "BOOLEANbce65f8c-e2ae-495c-88fa-5b0f21922935",
				"values": {
					"layout": {
						"colSpan": 7,
						"rowSpan": 1,
						"column": 0,
						"row": 6,
						"layoutName": "Tab6560865fTabLabelGridLayout6c8a2de1"
					},
					"bindTo": "YuHorasExtrasDiurnasChi",
					"enabled": true
				},
				"parentName": "Tab6560865fTabLabelGridLayout6c8a2de1",
				"propertyName": "items",
				"index": 11
			},
			{
				"operation": "insert",
				"name": "STRING3828f598-e4b7-4921-8d7f-88647c411c8c",
				"values": {
					"layout": {
						"colSpan": 16,
						"rowSpan": 1,
						"column": 8,
						"row": 6,
						"layoutName": "Tab6560865fTabLabelGridLayout6c8a2de1"
					},
					"bindTo": "YuObservaciones6",
					"enabled": true
				},
				"parentName": "Tab6560865fTabLabelGridLayout6c8a2de1",
				"propertyName": "items",
				"index": 12
			},
			{
				"operation": "insert",
				"name": "BOOLEAN1d8aca9f-db69-4c24-96a9-9571c73448b3",
				"values": {
					"layout": {
						"colSpan": 7,
						"rowSpan": 1,
						"column": 0,
						"row": 7,
						"layoutName": "Tab6560865fTabLabelGridLayout6c8a2de1"
					},
					"bindTo": "YuHorasExtraEstructuraChi",
					"enabled": true
				},
				"parentName": "Tab6560865fTabLabelGridLayout6c8a2de1",
				"propertyName": "items",
				"index": 13
			},
			{
				"operation": "insert",
				"name": "STRING6c1e54d0-2ff6-4b39-bf5d-6c7068503190",
				"values": {
					"layout": {
						"colSpan": 16,
						"rowSpan": 1,
						"column": 8,
						"row": 7,
						"layoutName": "Tab6560865fTabLabelGridLayout6c8a2de1"
					},
					"bindTo": "YuObservaciones7",
					"enabled": true
				},
				"parentName": "Tab6560865fTabLabelGridLayout6c8a2de1",
				"propertyName": "items",
				"index": 14
			},
			{
				"operation": "insert",
				"name": "BOOLEANe8be7c5a-7077-41e8-ba66-4cfd8962d18b",
				"values": {
					"layout": {
						"colSpan": 7,
						"rowSpan": 1,
						"column": 0,
						"row": 8,
						"layoutName": "Tab6560865fTabLabelGridLayout6c8a2de1"
					},
					"bindTo": "YuBonoAsistenciaChi",
					"enabled": true
				},
				"parentName": "Tab6560865fTabLabelGridLayout6c8a2de1",
				"propertyName": "items",
				"index": 15
			},
			{
				"operation": "insert",
				"name": "STRINGc138f03b-1cdc-4a64-9160-80525c9244c7",
				"values": {
					"layout": {
						"colSpan": 16,
						"rowSpan": 1,
						"column": 8,
						"row": 8,
						"layoutName": "Tab6560865fTabLabelGridLayout6c8a2de1"
					},
					"bindTo": "YuObservaciones8",
					"enabled": true
				},
				"parentName": "Tab6560865fTabLabelGridLayout6c8a2de1",
				"propertyName": "items",
				"index": 16
			},
			{
				"operation": "insert",
				"name": "BOOLEANf46dc748-9371-42b1-af9c-54dd04e39a40",
				"values": {
					"layout": {
						"colSpan": 7,
						"rowSpan": 1,
						"column": 0,
						"row": 9,
						"layoutName": "Tab6560865fTabLabelGridLayout6c8a2de1"
					},
					"bindTo": "YuBonoResponsabilidadChi",
					"enabled": true
				},
				"parentName": "Tab6560865fTabLabelGridLayout6c8a2de1",
				"propertyName": "items",
				"index": 17
			},
			{
				"operation": "insert",
				"name": "STRING58073a59-3a2d-4439-989f-73fe070ac774",
				"values": {
					"layout": {
						"colSpan": 16,
						"rowSpan": 1,
						"column": 8,
						"row": 9,
						"layoutName": "Tab6560865fTabLabelGridLayout6c8a2de1"
					},
					"bindTo": "YuObservaciones9",
					"enabled": true
				},
				"parentName": "Tab6560865fTabLabelGridLayout6c8a2de1",
				"propertyName": "items",
				"index": 18
			},
			{
				"operation": "insert",
				"name": "BOOLEANf8aba1d9-0f2c-4014-b140-99798d4c163b",
				"values": {
					"layout": {
						"colSpan": 7,
						"rowSpan": 1,
						"column": 0,
						"row": 10,
						"layoutName": "Tab6560865fTabLabelGridLayout6c8a2de1"
					},
					"bindTo": "YuBonoTransporteChi",
					"enabled": true
				},
				"parentName": "Tab6560865fTabLabelGridLayout6c8a2de1",
				"propertyName": "items",
				"index": 19
			},
			{
				"operation": "insert",
				"name": "STRING0a016834-a668-4a83-a5d0-e1c5f1ef2578",
				"values": {
					"layout": {
						"colSpan": 16,
						"rowSpan": 1,
						"column": 8,
						"row": 10,
						"layoutName": "Tab6560865fTabLabelGridLayout6c8a2de1"
					},
					"bindTo": "YuObservaciones10",
					"enabled": true
				},
				"parentName": "Tab6560865fTabLabelGridLayout6c8a2de1",
				"propertyName": "items",
				"index": 20
			},
			{
				"operation": "insert",
				"name": "BOOLEAN89d4cc6d-3232-458f-9a7b-4248fd2a76c6",
				"values": {
					"layout": {
						"colSpan": 7,
						"rowSpan": 1,
						"column": 0,
						"row": 11,
						"layoutName": "Tab6560865fTabLabelGridLayout6c8a2de1"
					},
					"bindTo": "YuBonoVariable",
					"enabled": true
				},
				"parentName": "Tab6560865fTabLabelGridLayout6c8a2de1",
				"propertyName": "items",
				"index": 21
			},
			{
				"operation": "insert",
				"name": "STRINGe2692c8f-9e9e-48c5-8412-9b8e3e6627f0",
				"values": {
					"layout": {
						"colSpan": 16,
						"rowSpan": 1,
						"column": 8,
						"row": 11,
						"layoutName": "Tab6560865fTabLabelGridLayout6c8a2de1"
					},
					"bindTo": "YuObservaciones11",
					"enabled": true
				},
				"parentName": "Tab6560865fTabLabelGridLayout6c8a2de1",
				"propertyName": "items",
				"index": 22
			},
			{
				"operation": "insert",
				"name": "BOOLEAN2b99c130-f19b-4671-851b-90f4232b131b",
				"values": {
					"layout": {
						"colSpan": 7,
						"rowSpan": 1,
						"column": 0,
						"row": 12,
						"layoutName": "Tab6560865fTabLabelGridLayout6c8a2de1"
					},
					"bindTo": "YuComisionesChi",
					"enabled": true
				},
				"parentName": "Tab6560865fTabLabelGridLayout6c8a2de1",
				"propertyName": "items",
				"index": 23
			},
			{
				"operation": "insert",
				"name": "STRING0a4b2a13-862f-41e9-8dbc-6a08699efd06",
				"values": {
					"layout": {
						"colSpan": 16,
						"rowSpan": 1,
						"column": 8,
						"row": 12,
						"layoutName": "Tab6560865fTabLabelGridLayout6c8a2de1"
					},
					"bindTo": "YuObservaciones12",
					"enabled": true
				},
				"parentName": "Tab6560865fTabLabelGridLayout6c8a2de1",
				"propertyName": "items",
				"index": 24
			},
			{
				"operation": "insert",
				"name": "BOOLEAN54af0854-75aa-4e3a-a04b-e0199ebf44b9",
				"values": {
					"layout": {
						"colSpan": 7,
						"rowSpan": 1,
						"column": 0,
						"row": 13,
						"layoutName": "Tab6560865fTabLabelGridLayout6c8a2de1"
					},
					"bindTo": "YuBonoBrutoChi",
					"enabled": true
				},
				"parentName": "Tab6560865fTabLabelGridLayout6c8a2de1",
				"propertyName": "items",
				"index": 25
			},
			{
				"operation": "insert",
				"name": "STRINGec72fa3f-7871-452b-b261-311ec2fbff1d",
				"values": {
					"layout": {
						"colSpan": 16,
						"rowSpan": 1,
						"column": 8,
						"row": 13,
						"layoutName": "Tab6560865fTabLabelGridLayout6c8a2de1"
					},
					"bindTo": "YuObservaciones13",
					"enabled": true
				},
				"parentName": "Tab6560865fTabLabelGridLayout6c8a2de1",
				"propertyName": "items",
				"index": 26
			},
			{
				"operation": "insert",
				"name": "BOOLEANeb2b4646-938b-4e80-ac33-5eda96920749",
				"values": {
					"layout": {
						"colSpan": 7,
						"rowSpan": 1,
						"column": 0,
						"row": 14,
						"layoutName": "Tab6560865fTabLabelGridLayout6c8a2de1"
					},
					"bindTo": "YuBonoVacacSemCorrChi",
					"enabled": true
				},
				"parentName": "Tab6560865fTabLabelGridLayout6c8a2de1",
				"propertyName": "items",
				"index": 27
			},
			{
				"operation": "insert",
				"name": "STRING882b34e8-551e-4ef3-9526-90cd6c8fa8bb",
				"values": {
					"layout": {
						"colSpan": 16,
						"rowSpan": 1,
						"column": 8,
						"row": 14,
						"layoutName": "Tab6560865fTabLabelGridLayout6c8a2de1"
					},
					"bindTo": "YuObservaciones14",
					"enabled": true
				},
				"parentName": "Tab6560865fTabLabelGridLayout6c8a2de1",
				"propertyName": "items",
				"index": 28
			},
			{
				"operation": "insert",
				"name": "BOOLEAN687a5772-4f7c-49ca-a8e6-14a6c5ca9b98",
				"values": {
					"layout": {
						"colSpan": 7,
						"rowSpan": 1,
						"column": 0,
						"row": 15,
						"layoutName": "Tab6560865fTabLabelGridLayout6c8a2de1"
					},
					"bindTo": "YuBonoCuidadoraChi",
					"enabled": true
				},
				"parentName": "Tab6560865fTabLabelGridLayout6c8a2de1",
				"propertyName": "items",
				"index": 29
			},
			{
				"operation": "insert",
				"name": "STRINGae2d1462-96ad-4bd1-b5d2-7c34e343f0ad",
				"values": {
					"layout": {
						"colSpan": 16,
						"rowSpan": 1,
						"column": 8,
						"row": 15,
						"layoutName": "Tab6560865fTabLabelGridLayout6c8a2de1"
					},
					"bindTo": "YuObservaciones15",
					"enabled": true
				},
				"parentName": "Tab6560865fTabLabelGridLayout6c8a2de1",
				"propertyName": "items",
				"index": 30
			},
			{
				"operation": "insert",
				"name": "BOOLEAN3a0bb5e3-11fe-4543-81b7-50b09b49f9a9",
				"values": {
					"layout": {
						"colSpan": 7,
						"rowSpan": 1,
						"column": 0,
						"row": 16,
						"layoutName": "Tab6560865fTabLabelGridLayout6c8a2de1"
					},
					"bindTo": "YuJornadaChi",
					"enabled": true
				},
				"parentName": "Tab6560865fTabLabelGridLayout6c8a2de1",
				"propertyName": "items",
				"index": 31
			},
			{
				"operation": "insert",
				"name": "STRINGe18f2a8e-3742-4e2b-8e79-17eab1215d57",
				"values": {
					"layout": {
						"colSpan": 16,
						"rowSpan": 1,
						"column": 8,
						"row": 16,
						"layoutName": "Tab6560865fTabLabelGridLayout6c8a2de1"
					},
					"bindTo": "YuObservaciones16",
					"enabled": true
				},
				"parentName": "Tab6560865fTabLabelGridLayout6c8a2de1",
				"propertyName": "items",
				"index": 32
			},
			{
				"operation": "insert",
				"name": "BOOLEANe1135cb7-d588-4655-aea8-c0db7a1cb270",
				"values": {
					"layout": {
						"colSpan": 7,
						"rowSpan": 1,
						"column": 0,
						"row": 17,
						"layoutName": "Tab6560865fTabLabelGridLayout6c8a2de1"
					},
					"bindTo": "YuCategoriaChi",
					"enabled": true
				},
				"parentName": "Tab6560865fTabLabelGridLayout6c8a2de1",
				"propertyName": "items",
				"index": 33
			},
			{
				"operation": "insert",
				"name": "STRING24130fa4-480b-4cb1-aeca-b1c6478b4d0c",
				"values": {
					"layout": {
						"colSpan": 16,
						"rowSpan": 1,
						"column": 8,
						"row": 17,
						"layoutName": "Tab6560865fTabLabelGridLayout6c8a2de1"
					},
					"bindTo": "YuObservaciones17",
					"enabled": true
				},
				"parentName": "Tab6560865fTabLabelGridLayout6c8a2de1",
				"propertyName": "items",
				"index": 34
			},
			{
				"operation": "insert",
				"name": "BOOLEANe2f07487-3cb3-453f-b742-2e978ff56d95",
				"values": {
					"layout": {
						"colSpan": 7,
						"rowSpan": 1,
						"column": 0,
						"row": 18,
						"layoutName": "Tab6560865fTabLabelGridLayout6c8a2de1"
					},
					"bindTo": "YuBonoSemanaCorridaChi",
					"enabled": true
				},
				"parentName": "Tab6560865fTabLabelGridLayout6c8a2de1",
				"propertyName": "items",
				"index": 35
			},
			{
				"operation": "insert",
				"name": "STRING71805e02-95b8-45ba-a547-eadd9a7b9863",
				"values": {
					"layout": {
						"colSpan": 16,
						"rowSpan": 1,
						"column": 8,
						"row": 18,
						"layoutName": "Tab6560865fTabLabelGridLayout6c8a2de1"
					},
					"bindTo": "YuObservaciones18",
					"enabled": true
				},
				"parentName": "Tab6560865fTabLabelGridLayout6c8a2de1",
				"propertyName": "items",
				"index": 36
			},
			{
				"operation": "insert",
				"name": "BOOLEAN7483eb68-5573-4ad3-af6f-436083c8bf13",
				"values": {
					"layout": {
						"colSpan": 7,
						"rowSpan": 1,
						"column": 0,
						"row": 19,
						"layoutName": "Tab6560865fTabLabelGridLayout6c8a2de1"
					},
					"bindTo": "YuBonoEscolaridadChi",
					"enabled": true
				},
				"parentName": "Tab6560865fTabLabelGridLayout6c8a2de1",
				"propertyName": "items",
				"index": 37
			},
			{
				"operation": "insert",
				"name": "STRING8f4c2551-9f94-422e-8a51-09442eb85de6",
				"values": {
					"layout": {
						"colSpan": 16,
						"rowSpan": 1,
						"column": 8,
						"row": 19,
						"layoutName": "Tab6560865fTabLabelGridLayout6c8a2de1"
					},
					"bindTo": "YuObservaciones19",
					"enabled": true
				},
				"parentName": "Tab6560865fTabLabelGridLayout6c8a2de1",
				"propertyName": "items",
				"index": 38
			},
			{
				"operation": "insert",
				"name": "BOOLEAN924f6462-88af-41b9-954d-f35c503798bf",
				"values": {
					"layout": {
						"colSpan": 7,
						"rowSpan": 1,
						"column": 0,
						"row": 20,
						"layoutName": "Tab6560865fTabLabelGridLayout6c8a2de1"
					},
					"bindTo": "YuGratifLegalChi",
					"enabled": true
				},
				"parentName": "Tab6560865fTabLabelGridLayout6c8a2de1",
				"propertyName": "items",
				"index": 39
			},
			{
				"operation": "insert",
				"name": "STRING2c8479b5-e9ba-495b-b102-6d689b5c7f86",
				"values": {
					"layout": {
						"colSpan": 16,
						"rowSpan": 1,
						"column": 8,
						"row": 20,
						"layoutName": "Tab6560865fTabLabelGridLayout6c8a2de1"
					},
					"bindTo": "YuObservaciones20",
					"enabled": true
				},
				"parentName": "Tab6560865fTabLabelGridLayout6c8a2de1",
				"propertyName": "items",
				"index": 40
			},
			{
				"operation": "insert",
				"name": "BOOLEANf8a94c21-ad78-41bc-a73d-22cfcaadb948",
				"values": {
					"layout": {
						"colSpan": 7,
						"rowSpan": 1,
						"column": 0,
						"row": 21,
						"layoutName": "Tab6560865fTabLabelGridLayout6c8a2de1"
					},
					"bindTo": "YuAsignacFamiliarChi",
					"enabled": true
				},
				"parentName": "Tab6560865fTabLabelGridLayout6c8a2de1",
				"propertyName": "items",
				"index": 41
			},
			{
				"operation": "insert",
				"name": "STRING8b3eba0f-3384-42a4-a03f-82d00e6b44fe",
				"values": {
					"layout": {
						"colSpan": 16,
						"rowSpan": 1,
						"column": 8,
						"row": 21,
						"layoutName": "Tab6560865fTabLabelGridLayout6c8a2de1"
					},
					"bindTo": "YuObservaciones21",
					"enabled": true
				},
				"parentName": "Tab6560865fTabLabelGridLayout6c8a2de1",
				"propertyName": "items",
				"index": 42
			},
			{
				"operation": "insert",
				"name": "BOOLEAN0ad499a2-4d27-4575-be47-646bbff2cc91",
				"values": {
					"layout": {
						"colSpan": 7,
						"rowSpan": 1,
						"column": 0,
						"row": 22,
						"layoutName": "Tab6560865fTabLabelGridLayout6c8a2de1"
					},
					"bindTo": "YuCreditosChi",
					"enabled": true
				},
				"parentName": "Tab6560865fTabLabelGridLayout6c8a2de1",
				"propertyName": "items",
				"index": 43
			},
			{
				"operation": "insert",
				"name": "STRINGdf3e438f-cecf-4ce6-a9d4-6d59759e1343",
				"values": {
					"layout": {
						"colSpan": 16,
						"rowSpan": 1,
						"column": 8,
						"row": 22,
						"layoutName": "Tab6560865fTabLabelGridLayout6c8a2de1"
					},
					"bindTo": "YuObservaciones22",
					"enabled": true
				},
				"parentName": "Tab6560865fTabLabelGridLayout6c8a2de1",
				"propertyName": "items",
				"index": 44
			},
			{
				"operation": "insert",
				"name": "BOOLEAN85143d75-09b6-44a8-8086-7c4a43f3dec1",
				"values": {
					"layout": {
						"colSpan": 7,
						"rowSpan": 1,
						"column": 0,
						"row": 23,
						"layoutName": "Tab6560865fTabLabelGridLayout6c8a2de1"
					},
					"bindTo": "YuCuotaSindicalChi",
					"enabled": true
				},
				"parentName": "Tab6560865fTabLabelGridLayout6c8a2de1",
				"propertyName": "items",
				"index": 45
			},
			{
				"operation": "insert",
				"name": "STRING793a92cc-7f1c-46ca-ab44-f3f3ec999f66",
				"values": {
					"layout": {
						"colSpan": 16,
						"rowSpan": 1,
						"column": 8,
						"row": 23,
						"layoutName": "Tab6560865fTabLabelGridLayout6c8a2de1"
					},
					"bindTo": "YuObservaciones23",
					"enabled": true
				},
				"parentName": "Tab6560865fTabLabelGridLayout6c8a2de1",
				"propertyName": "items",
				"index": 46
			},
			{
				"operation": "insert",
				"name": "Tab77414d63TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab77414d63TabLabelTabCaption"
					},
					"blur": {
						"bindTo": "onMyFieldExit"
					},
					"items": [],
					"order": 11
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 11
			},
			{
				"operation": "insert",
				"name": "Tab77414d63TabLabelGroupf4f529b6",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab77414d63TabLabelGroupf4f529b6GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tab77414d63TabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tab77414d63TabLabelGridLayoutc7e11c7d",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tab77414d63TabLabelGroupf4f529b6",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "YuSolicitocb3d339c-6beb-40df-89f4-9f0b9a5391ad",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tab77414d63TabLabelGridLayoutc7e11c7d"
					},
					"bindTo": "YuSolicito"
				},
				"parentName": "Tab77414d63TabLabelGridLayoutc7e11c7d",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "YuMotivoc19ea0ec-aaa8-49bb-a543-1f9fa876bdfc",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Tab77414d63TabLabelGridLayoutc7e11c7d"
					},
					"bindTo": "YuMotivo"
				},
				"parentName": "Tab77414d63TabLabelGridLayoutc7e11c7d",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Tab3b7002bcTabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab3b7002bcTabLabelTabCaption"
					},
					"blur": {
						"bindTo": "onMyFieldExit"
					},
					"items": [],
					"order": 12
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 12
			},
			{
				"operation": "insert",
				"name": "Tab3b7002bcTabLabelGroup284e2964",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab3b7002bcTabLabelGroup284e2964GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tab3b7002bcTabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tab3b7002bcTabLabelGridLayout401e40d1",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tab3b7002bcTabLabelGroup284e2964",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "YuSolicito6e51c2c7-cc73-4d32-8268-21802c055536",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tab3b7002bcTabLabelGridLayout401e40d1"
					},
					"bindTo": "YuSolicito"
				},
				"parentName": "Tab3b7002bcTabLabelGridLayout401e40d1",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "YuMotivo61274512-d31b-432d-b369-8f42677fcde5",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Tab3b7002bcTabLabelGridLayout401e40d1"
					},
					"bindTo": "YuMotivo"
				},
				"parentName": "Tab3b7002bcTabLabelGridLayout401e40d1",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Tabc57b8dfdTabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabc57b8dfdTabLabelTabCaption"
					},
					"blur": {
						"bindTo": "onMyFieldExit"
					},
					"items": [],
					"order": 13
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 13
			},
			{
				"operation": "insert",
				"name": "Tabc57b8dfdTabLabelGroup14bd250f",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabc57b8dfdTabLabelGroup14bd250fGroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tabc57b8dfdTabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tabc57b8dfdTabLabelGridLayout4a3309f2",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tabc57b8dfdTabLabelGroup14bd250f",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "STRING110f14df-c7c4-455e-a6fc-662e18ce5d47",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tabc57b8dfdTabLabelGridLayout4a3309f2"
					},
					"bindTo": "YuSolicito3",
					"enabled": true
				},
				"parentName": "Tabc57b8dfdTabLabelGridLayout4a3309f2",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "STRING7f522dbf-4bc1-479e-9072-0858a8a5cdff",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Tabc57b8dfdTabLabelGridLayout4a3309f2"
					},
					"bindTo": "YuMotivo3",
					"enabled": true
				},
				"parentName": "Tabc57b8dfdTabLabelGridLayout4a3309f2",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "YuRecuerdaac2fee09-3397-42f1-9d2c-39e791405a3d",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "Tabc57b8dfdTabLabelGridLayout4a3309f2"
					},
					"bindTo": "YuRecuerda",
					"enabled": false
				},
				"parentName": "Tabc57b8dfdTabLabelGridLayout4a3309f2",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "YuAutorizado1d513b9ac-0adc-469f-821c-5ef45d978294",
				"values": {
					"layout": {
						"colSpan": 5,
						"rowSpan": 1,
						"column": 9,
						"row": 5,
						"layoutName": "Tabc57b8dfdTabLabelGridLayout4a3309f2"
					},
					"bindTo": "YuAutorizado1",
					"enabled": false
				},
				"parentName": "Tabc57b8dfdTabLabelGridLayout4a3309f2",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "YuNoFactible18281db22-ba22-4a3b-8e5d-359f267a52ef",
				"values": {
					"layout": {
						"colSpan": 5,
						"rowSpan": 1,
						"column": 14,
						"row": 5,
						"layoutName": "Tabc57b8dfdTabLabelGridLayout4a3309f2"
					},
					"bindTo": "YuNoFactible1",
					"enabled": false
				},
				"parentName": "Tabc57b8dfdTabLabelGridLayout4a3309f2",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "YuDenegado1fba9d690-e78a-4b8d-9291-1406a789bdb3",
				"values": {
					"layout": {
						"colSpan": 5,
						"rowSpan": 1,
						"column": 19,
						"row": 5,
						"layoutName": "Tabc57b8dfdTabLabelGridLayout4a3309f2"
					},
					"bindTo": "YuDenegado1",
					"enabled": false
				},
				"parentName": "Tabc57b8dfdTabLabelGridLayout4a3309f2",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "DATE4685fbfb-8d39-4ea0-8203-614ada60c26b",
				"values": {
					"layout": {
						"colSpan": 9,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "Tabc57b8dfdTabLabelGridLayout4a3309f2"
					},
					"bindTo": "YuDiaSol1Rep",
					"enabled": true
				},
				"parentName": "Tabc57b8dfdTabLabelGridLayout4a3309f2",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "YuAutorizado2b345cb9c-facc-42d3-82ab-f99c84df7db7",
				"values": {
					"layout": {
						"colSpan": 5,
						"rowSpan": 1,
						"column": 9,
						"row": 6,
						"layoutName": "Tabc57b8dfdTabLabelGridLayout4a3309f2"
					},
					"bindTo": "YuAutorizado2",
					"enabled": false
				},
				"parentName": "Tabc57b8dfdTabLabelGridLayout4a3309f2",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "YuNoFactible285d36d0a-f94b-4179-8676-cf33cfb3fa52",
				"values": {
					"layout": {
						"colSpan": 5,
						"rowSpan": 1,
						"column": 14,
						"row": 6,
						"layoutName": "Tabc57b8dfdTabLabelGridLayout4a3309f2"
					},
					"bindTo": "YuNoFactible2",
					"enabled": false
				},
				"parentName": "Tabc57b8dfdTabLabelGridLayout4a3309f2",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "YuDenegado2318aaf56-2be7-431a-b2a5-3a9ca02b10e2",
				"values": {
					"layout": {
						"colSpan": 5,
						"rowSpan": 1,
						"column": 19,
						"row": 6,
						"layoutName": "Tabc57b8dfdTabLabelGridLayout4a3309f2"
					},
					"bindTo": "YuDenegado2",
					"enabled": false
				},
				"parentName": "Tabc57b8dfdTabLabelGridLayout4a3309f2",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "YuDiaSolicitado263592261-c46f-40dc-affd-14b8474724a2",
				"values": {
					"layout": {
						"colSpan": 9,
						"rowSpan": 1,
						"column": 0,
						"row": 6,
						"layoutName": "Tabc57b8dfdTabLabelGridLayout4a3309f2"
					},
					"bindTo": "YuDiaSolicitado2"
				},
				"parentName": "Tabc57b8dfdTabLabelGridLayout4a3309f2",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "YuAutorizado312ff8b4e-1568-494c-af4b-c72a72ea6399",
				"values": {
					"layout": {
						"colSpan": 5,
						"rowSpan": 1,
						"column": 9,
						"row": 7,
						"layoutName": "Tabc57b8dfdTabLabelGridLayout4a3309f2"
					},
					"bindTo": "YuAutorizado3",
					"enabled": false
				},
				"parentName": "Tabc57b8dfdTabLabelGridLayout4a3309f2",
				"propertyName": "items",
				"index": 11
			},
			{
				"operation": "insert",
				"name": "YuNoFactible3b6bd6ffa-493b-4fce-bbdd-97cfdc5c6d8f",
				"values": {
					"layout": {
						"colSpan": 5,
						"rowSpan": 1,
						"column": 14,
						"row": 7,
						"layoutName": "Tabc57b8dfdTabLabelGridLayout4a3309f2"
					},
					"bindTo": "YuNoFactible3",
					"enabled": false
				},
				"parentName": "Tabc57b8dfdTabLabelGridLayout4a3309f2",
				"propertyName": "items",
				"index": 12
			},
			{
				"operation": "insert",
				"name": "YuDenegado304e56b79-3117-4801-9804-397e815e101c",
				"values": {
					"layout": {
						"colSpan": 5,
						"rowSpan": 1,
						"column": 19,
						"row": 7,
						"layoutName": "Tabc57b8dfdTabLabelGridLayout4a3309f2"
					},
					"bindTo": "YuDenegado3",
					"enabled": false
				},
				"parentName": "Tabc57b8dfdTabLabelGridLayout4a3309f2",
				"propertyName": "items",
				"index": 13
			},
			{
				"operation": "insert",
				"name": "YuDiaSolicitado302a8e5e9-472a-4d1e-8c0c-8474726b9917",
				"values": {
					"layout": {
						"colSpan": 9,
						"rowSpan": 1,
						"column": 0,
						"row": 7,
						"layoutName": "Tabc57b8dfdTabLabelGridLayout4a3309f2"
					},
					"bindTo": "YuDiaSolicitado3"
				},
				"parentName": "Tabc57b8dfdTabLabelGridLayout4a3309f2",
				"propertyName": "items",
				"index": 14
			},
			{
				"operation": "insert",
				"name": "YuAutorizado49886eda3-6653-408e-a6fe-0c5d452635e3",
				"values": {
					"layout": {
						"colSpan": 5,
						"rowSpan": 1,
						"column": 9,
						"row": 8,
						"layoutName": "Tabc57b8dfdTabLabelGridLayout4a3309f2"
					},
					"bindTo": "YuAutorizado4",
					"enabled": false
				},
				"parentName": "Tabc57b8dfdTabLabelGridLayout4a3309f2",
				"propertyName": "items",
				"index": 15
			},
			{
				"operation": "insert",
				"name": "YuNoFactible46aa54564-7296-45b0-bf44-803058ba6860",
				"values": {
					"layout": {
						"colSpan": 5,
						"rowSpan": 1,
						"column": 14,
						"row": 8,
						"layoutName": "Tabc57b8dfdTabLabelGridLayout4a3309f2"
					},
					"bindTo": "YuNoFactible4",
					"enabled": false
				},
				"parentName": "Tabc57b8dfdTabLabelGridLayout4a3309f2",
				"propertyName": "items",
				"index": 16
			},
			{
				"operation": "insert",
				"name": "YuDenegado472836c9b-83d0-4903-ac7b-63755c5549b0",
				"values": {
					"layout": {
						"colSpan": 5,
						"rowSpan": 1,
						"column": 19,
						"row": 8,
						"layoutName": "Tabc57b8dfdTabLabelGridLayout4a3309f2"
					},
					"bindTo": "YuDenegado4",
					"enabled": false
				},
				"parentName": "Tabc57b8dfdTabLabelGridLayout4a3309f2",
				"propertyName": "items",
				"index": 17
			},
			{
				"operation": "insert",
				"name": "YuDiaSolicitado42e096359-409c-4d86-b8a2-16de942aaa20",
				"values": {
					"layout": {
						"colSpan": 9,
						"rowSpan": 1,
						"column": 0,
						"row": 8,
						"layoutName": "Tabc57b8dfdTabLabelGridLayout4a3309f2"
					},
					"bindTo": "YuDiaSolicitado4"
				},
				"parentName": "Tabc57b8dfdTabLabelGridLayout4a3309f2",
				"propertyName": "items",
				"index": 18
			},
			{
				"operation": "insert",
				"name": "Tab90be337fTabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab90be337fTabLabelTabCaption"
					},
					"blur": {
						"bindTo": "onMyFieldExit"
					},
					"items": [],
					"order": 14
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 14
			},
			{
				"operation": "insert",
				"name": "Tab90be337fTabLabelGroup89e0ed12",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab90be337fTabLabelGroup89e0ed12GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tab90be337fTabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tab90be337fTabLabelGridLayout8a574b01",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tab90be337fTabLabelGroup89e0ed12",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "BOOLEANa0d40d84-b821-4d88-a3a5-7538178c4a31",
				"values": {
					"layout": {
						"colSpan": 8,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tab90be337fTabLabelGridLayout8a574b01"
					},
					"bindTo": "YuEstival",
					"enabled": true
				},
				"parentName": "Tab90be337fTabLabelGridLayout8a574b01",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "YuSolVacaInicioDiaFestivo97900e47-7a29-4747-b980-aa1e1e432211",
				"values": {
					"layout": {
						"colSpan": 8,
						"rowSpan": 1,
						"column": 16,
						"row": 0,
						"layoutName": "Tab90be337fTabLabelGridLayout8a574b01"
					},
					"bindTo": "YuSolVacaInicioDiaFestivo"
				},
				"parentName": "Tab90be337fTabLabelGridLayout8a574b01",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "BOOLEAN9be0cc4a-3709-4275-a098-f7f949439cf7",
				"values": {
					"layout": {
						"colSpan": 8,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Tab90be337fTabLabelGridLayout8a574b01"
					},
					"bindTo": "YuNoEstival",
					"enabled": true
				},
				"parentName": "Tab90be337fTabLabelGridLayout8a574b01",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "YuFechaInicio18cc60464-edde-4d29-9595-afc7114617a4",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "Tab90be337fTabLabelGridLayout8a574b01"
					},
					"bindTo": "YuFechaInicio1"
				},
				"parentName": "Tab90be337fTabLabelGridLayout8a574b01",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "YuFechaFin1c11619f2-de1d-4418-a2e9-6d5d5500c744",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 3,
						"layoutName": "Tab90be337fTabLabelGridLayout8a574b01"
					},
					"bindTo": "YuFechaFin1"
				},
				"parentName": "Tab90be337fTabLabelGridLayout8a574b01",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "YuObs183cb3f2c-8756-4308-aa3e-026717e251e9",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "Tab90be337fTabLabelGridLayout8a574b01"
					},
					"bindTo": "YuObs1"
				},
				"parentName": "Tab90be337fTabLabelGridLayout8a574b01",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "YuFechaInicio239f94a23-7056-464e-8e22-e87ec012f6ed",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "Tab90be337fTabLabelGridLayout8a574b01"
					},
					"bindTo": "YuFechaInicio2"
				},
				"parentName": "Tab90be337fTabLabelGridLayout8a574b01",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "YuFechaFin2974aa35e-02fe-4548-a595-30430813e3f7",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 5,
						"layoutName": "Tab90be337fTabLabelGridLayout8a574b01"
					},
					"bindTo": "YuFechaFin2"
				},
				"parentName": "Tab90be337fTabLabelGridLayout8a574b01",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "YuObs23cc38245-7797-4278-b31f-a5b2bbc8f184",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 6,
						"layoutName": "Tab90be337fTabLabelGridLayout8a574b01"
					},
					"bindTo": "YuObs2"
				},
				"parentName": "Tab90be337fTabLabelGridLayout8a574b01",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "YuFechaInicio3104b55df-17d0-4b09-bda7-2049df882cdc",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 7,
						"layoutName": "Tab90be337fTabLabelGridLayout8a574b01"
					},
					"bindTo": "YuFechaInicio3"
				},
				"parentName": "Tab90be337fTabLabelGridLayout8a574b01",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "YuFechaFin330692191-2aa2-4ea7-a333-cfdd375a72f5",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 7,
						"layoutName": "Tab90be337fTabLabelGridLayout8a574b01"
					},
					"bindTo": "YuFechaFin3"
				},
				"parentName": "Tab90be337fTabLabelGridLayout8a574b01",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "YuObs312e206ac-55af-4402-9a4c-2a126ecaad32",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 8,
						"layoutName": "Tab90be337fTabLabelGridLayout8a574b01"
					},
					"bindTo": "YuObs3"
				},
				"parentName": "Tab90be337fTabLabelGridLayout8a574b01",
				"propertyName": "items",
				"index": 11
			},
			{
				"operation": "insert",
				"name": "YuFechaInicio4d3c0f267-5bf0-4543-9252-03a5e3dffd83",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 9,
						"layoutName": "Tab90be337fTabLabelGridLayout8a574b01"
					},
					"bindTo": "YuFechaInicio4"
				},
				"parentName": "Tab90be337fTabLabelGridLayout8a574b01",
				"propertyName": "items",
				"index": 12
			},
			{
				"operation": "insert",
				"name": "YuFechaFin42c7ca303-675e-4463-b688-9fab323917b1",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 9,
						"layoutName": "Tab90be337fTabLabelGridLayout8a574b01"
					},
					"bindTo": "YuFechaFin4"
				},
				"parentName": "Tab90be337fTabLabelGridLayout8a574b01",
				"propertyName": "items",
				"index": 13
			},
			{
				"operation": "insert",
				"name": "YuObs42dad29dd-eca7-4049-9b3d-1352d03e2c29",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 10,
						"layoutName": "Tab90be337fTabLabelGridLayout8a574b01"
					},
					"bindTo": "YuObs4"
				},
				"parentName": "Tab90be337fTabLabelGridLayout8a574b01",
				"propertyName": "items",
				"index": 14
			},
			{
				"operation": "insert",
				"name": "Tabe8450679TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabe8450679TabLabelTabCaption"
					},
					"blur": {
						"bindTo": "onMyFieldExit"
					},
					"items": [],
					"order": 15
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 15
			},
			{
				"operation": "insert",
				"name": "Tabe8450679TabLabelGroupa13bc892",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabe8450679TabLabelGroupa13bc892GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tabe8450679TabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tabe8450679TabLabelGridLayout35f7aa8b",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tabe8450679TabLabelGroupa13bc892",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "YuOpc1DiaSuelto1066fc74c-2a52-48b5-8b0e-1eabbee67263",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tabe8450679TabLabelGridLayout35f7aa8b"
					},
					"bindTo": "YuOpc1DiaSuelto1"
				},
				"parentName": "Tabe8450679TabLabelGridLayout35f7aa8b",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "YuOpc1DiaSuelto2dbf371d8-226e-4c97-bc50-670d50fbcb1c",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Tabe8450679TabLabelGridLayout35f7aa8b"
					},
					"bindTo": "YuOpc1DiaSuelto2"
				},
				"parentName": "Tabe8450679TabLabelGridLayout35f7aa8b",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "YuOpc1DiaSuelto3a5d87fe3-53d7-45c5-9d77-45521100d820",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Tabe8450679TabLabelGridLayout35f7aa8b"
					},
					"bindTo": "YuOpc1DiaSuelto3",
					"enabled": true
				},
				"parentName": "Tabe8450679TabLabelGridLayout35f7aa8b",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "YuOpc1DiaSuelto47ac9a714-89fc-47dc-aeb6-e56215afdf63",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "Tabe8450679TabLabelGridLayout35f7aa8b"
					},
					"bindTo": "YuOpc1DiaSuelto4"
				},
				"parentName": "Tabe8450679TabLabelGridLayout35f7aa8b",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Tabe8450679TabLabelGroup454e25dd",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabe8450679TabLabelGroup454e25ddGroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tabe8450679TabLabel",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Tabe8450679TabLabelGridLayoutdb1591ed",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tabe8450679TabLabelGroup454e25dd",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "YuOpc2DiaSuelto13d6a2c18-1dee-4e0d-8516-ace79db59f07",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tabe8450679TabLabelGridLayoutdb1591ed"
					},
					"bindTo": "YuOpc2DiaSuelto1"
				},
				"parentName": "Tabe8450679TabLabelGridLayoutdb1591ed",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "YuOpc2DiaSuelto27313db31-ca51-4fe0-a1aa-041fefaa5544",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Tabe8450679TabLabelGridLayoutdb1591ed"
					},
					"bindTo": "YuOpc2DiaSuelto2"
				},
				"parentName": "Tabe8450679TabLabelGridLayoutdb1591ed",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "YuOpc2DiaSuelto39afce582-6cd0-4f77-b730-eb0cb0a86641",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Tabe8450679TabLabelGridLayoutdb1591ed"
					},
					"bindTo": "YuOpc2DiaSuelto3"
				},
				"parentName": "Tabe8450679TabLabelGridLayoutdb1591ed",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "YuOpc2DiaSuelto4d192a941-27c5-4c43-b3ad-392b484b0ec4",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "Tabe8450679TabLabelGridLayoutdb1591ed"
					},
					"bindTo": "YuOpc2DiaSuelto4"
				},
				"parentName": "Tabe8450679TabLabelGridLayoutdb1591ed",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Tabe8450679TabLabelGroupc456d641",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabe8450679TabLabelGroupc456d641GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tabe8450679TabLabel",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Tabe8450679TabLabelGridLayout451e6c88",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tabe8450679TabLabelGroupc456d641",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "YuOpc3DiaSuelto187ee2361-32fc-406f-9b8f-60f85789f0af",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tabe8450679TabLabelGridLayout451e6c88"
					},
					"bindTo": "YuOpc3DiaSuelto1"
				},
				"parentName": "Tabe8450679TabLabelGridLayout451e6c88",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "YuOpc3DiaSuelto21c44b96c-8389-4c5c-a81a-92a438a348cf",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Tabe8450679TabLabelGridLayout451e6c88"
					},
					"bindTo": "YuOpc3DiaSuelto2"
				},
				"parentName": "Tabe8450679TabLabelGridLayout451e6c88",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "YuOpc3DiaSuelto3ed3d710f-a82b-4d24-b1ad-61f00b64503b",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Tabe8450679TabLabelGridLayout451e6c88"
					},
					"bindTo": "YuOpc3DiaSuelto3"
				},
				"parentName": "Tabe8450679TabLabelGridLayout451e6c88",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "YuOpc3DiaSuelto4891e47df-04a7-4926-a137-27f641250386",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "Tabe8450679TabLabelGridLayout451e6c88"
					},
					"bindTo": "YuOpc3DiaSuelto4"
				},
				"parentName": "Tabe8450679TabLabelGridLayout451e6c88",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Tabe8450679TabLabelGroupbfc9c92b",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabe8450679TabLabelGroupbfc9c92bGroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tabe8450679TabLabel",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Tabe8450679TabLabelGridLayout1a5efc59",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tabe8450679TabLabelGroupbfc9c92b",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "YuOpc4DiaSuelto1080297fe-cbba-4f25-aa30-2e64d93e7d1f",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tabe8450679TabLabelGridLayout1a5efc59"
					},
					"bindTo": "YuOpc4DiaSuelto1"
				},
				"parentName": "Tabe8450679TabLabelGridLayout1a5efc59",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "YuOpc4DiaSuelto24772701d-165d-43a1-9682-cfe66fd86806",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Tabe8450679TabLabelGridLayout1a5efc59"
					},
					"bindTo": "YuOpc4DiaSuelto2"
				},
				"parentName": "Tabe8450679TabLabelGridLayout1a5efc59",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "YuOpc4DiaSuelto3144aaf56-df65-4825-baf2-beba01868f67",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Tabe8450679TabLabelGridLayout1a5efc59"
					},
					"bindTo": "YuOpc4DiaSuelto3"
				},
				"parentName": "Tabe8450679TabLabelGridLayout1a5efc59",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "YuOpc4DiaSuelto4e966399e-c8bc-4eba-a08d-e61dc0649072",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "Tabe8450679TabLabelGridLayout1a5efc59"
					},
					"bindTo": "YuOpc4DiaSuelto4"
				},
				"parentName": "Tabe8450679TabLabelGridLayout1a5efc59",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Tab042fb325TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab042fb325TabLabelTabCaption"
					},
					"blur": {
						"bindTo": "onMyFieldExit"
					},
					"items": [],
					"order": 16
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 16
			},
			{
				"operation": "insert",
				"name": "Tab042fb325TabLabelGroup089b3f08",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab042fb325TabLabelGroup089b3f08GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tab042fb325TabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tab042fb325TabLabelGridLayoutde480335",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tab042fb325TabLabelGroup089b3f08",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "YuTurnoActualce1da461-0bf0-470e-a090-3dc3c329ae97",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tab042fb325TabLabelGridLayoutde480335"
					},
					"bindTo": "YuTurnoActual",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Tab042fb325TabLabelGridLayoutde480335",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DATEadd6d935-9dca-414b-8793-eb2edc364006",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Tab042fb325TabLabelGridLayoutde480335"
					},
					"bindTo": "YuFecha",
					"enabled": {
						"bindTo": "VariableEditable"
					}
				},
				"parentName": "Tab042fb325TabLabelGridLayoutde480335",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Tab042fb325TabLabelGroupd5d4bc0d",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab042fb325TabLabelGroupd5d4bc0dGroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tab042fb325TabLabel",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Tab042fb325TabLabelGridLayout9b927c08",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tab042fb325TabLabelGroupd5d4bc0d",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "YuFesTra11731246d-5b4b-4ae1-bab8-e353c2947b04",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tab042fb325TabLabelGridLayout9b927c08"
					},
					"bindTo": "YuFesTra1"
				},
				"parentName": "Tab042fb325TabLabelGridLayout9b927c08",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "YuFesTra2c2b6650a-e77f-4c91-8ddf-f6b1b17b0da0",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 6,
						"row": 0,
						"layoutName": "Tab042fb325TabLabelGridLayout9b927c08"
					},
					"bindTo": "YuFesTra2"
				},
				"parentName": "Tab042fb325TabLabelGridLayout9b927c08",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "YuFesTra3d393f363-7a82-45a3-8f8a-992cfb7ce66e",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Tab042fb325TabLabelGridLayout9b927c08"
					},
					"bindTo": "YuFesTra3"
				},
				"parentName": "Tab042fb325TabLabelGridLayout9b927c08",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "YuFesTra49c1a2f1e-afea-4298-8767-e3eef081824b",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 18,
						"row": 0,
						"layoutName": "Tab042fb325TabLabelGridLayout9b927c08"
					},
					"bindTo": "YuFesTra4"
				},
				"parentName": "Tab042fb325TabLabelGridLayout9b927c08",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "YuDiaSolicitado14ff46bb8-ba30-44c7-9369-c171a2aa8bef",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Tab042fb325TabLabelGridLayout9b927c08"
					},
					"bindTo": "YuDiaSolicitado1"
				},
				"parentName": "Tab042fb325TabLabelGridLayout9b927c08",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "YuDiaSolicitado25e5fc6ee-b010-446f-90ad-9d6db43fd4d9",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 6,
						"row": 2,
						"layoutName": "Tab042fb325TabLabelGridLayout9b927c08"
					},
					"bindTo": "YuDiaSolicitado2"
				},
				"parentName": "Tab042fb325TabLabelGridLayout9b927c08",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "YuDiaSolicitado30b305ece-905a-411a-82bb-ce66a26400cd",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 12,
						"row": 2,
						"layoutName": "Tab042fb325TabLabelGridLayout9b927c08"
					},
					"bindTo": "YuDiaSolicitado3"
				},
				"parentName": "Tab042fb325TabLabelGridLayout9b927c08",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "YuDiaSolicitado4a731337e-968c-4c15-bd19-002e18350ccb",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 18,
						"row": 2,
						"layoutName": "Tab042fb325TabLabelGridLayout9b927c08"
					},
					"bindTo": "YuDiaSolicitado4"
				},
				"parentName": "Tab042fb325TabLabelGridLayout9b927c08",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "YuNHorasSol1cf1237d7-deab-4623-a804-f1eed54c390d",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "Tab042fb325TabLabelGridLayout9b927c08"
					},
					"bindTo": "YuNHorasSol1",
					"enabled": true
				},
				"parentName": "Tab042fb325TabLabelGridLayout9b927c08",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "YuNHorasSol230b759df-d787-4e7d-bb23-eecf31c2f6ae",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 6,
						"row": 3,
						"layoutName": "Tab042fb325TabLabelGridLayout9b927c08"
					},
					"bindTo": "YuNHorasSol2",
					"enabled": true
				},
				"parentName": "Tab042fb325TabLabelGridLayout9b927c08",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "YuNHorasSol36ec31ca9-47a1-4b89-a750-d9cfe3c0e8e7",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 12,
						"row": 3,
						"layoutName": "Tab042fb325TabLabelGridLayout9b927c08"
					},
					"bindTo": "YuNHorasSol3",
					"enabled": true
				},
				"parentName": "Tab042fb325TabLabelGridLayout9b927c08",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "YuNHorasSol4bf630a5a-a9f2-4565-a445-7e51ec19eb15",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 18,
						"row": 3,
						"layoutName": "Tab042fb325TabLabelGridLayout9b927c08"
					},
					"bindTo": "YuNHorasSol4",
					"enabled": true
				},
				"parentName": "Tab042fb325TabLabelGridLayout9b927c08",
				"propertyName": "items",
				"index": 11
			},
			{
				"operation": "insert",
				"name": "YuFranjaHor115247a30-ae54-4f7d-aceb-427f4f34f8ab",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "Tab042fb325TabLabelGridLayout9b927c08"
					},
					"bindTo": "YuFranjaHor1"
				},
				"parentName": "Tab042fb325TabLabelGridLayout9b927c08",
				"propertyName": "items",
				"index": 12
			},
			{
				"operation": "insert",
				"name": "YuFranjaHor21641f93f-98a9-4d35-9055-89c1001dd110",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 6,
						"row": 4,
						"layoutName": "Tab042fb325TabLabelGridLayout9b927c08"
					},
					"bindTo": "YuFranjaHor2"
				},
				"parentName": "Tab042fb325TabLabelGridLayout9b927c08",
				"propertyName": "items",
				"index": 13
			},
			{
				"operation": "insert",
				"name": "YuFranjaHor3bed8c8a5-f61a-4d80-bd7f-b1865dc5cd93",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 12,
						"row": 4,
						"layoutName": "Tab042fb325TabLabelGridLayout9b927c08"
					},
					"bindTo": "YuFranjaHor3"
				},
				"parentName": "Tab042fb325TabLabelGridLayout9b927c08",
				"propertyName": "items",
				"index": 14
			},
			{
				"operation": "insert",
				"name": "YuFranjaHor4c1516078-d047-4b53-a668-4b4eb62a7e75",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 18,
						"row": 4,
						"layoutName": "Tab042fb325TabLabelGridLayout9b927c08"
					},
					"bindTo": "YuFranjaHor4"
				},
				"parentName": "Tab042fb325TabLabelGridLayout9b927c08",
				"propertyName": "items",
				"index": 15
			},
			{
				"operation": "insert",
				"name": "YuAutorizado1c5667728-7f17-4cf8-aa5a-b48ce5fd8178",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "Tab042fb325TabLabelGridLayout9b927c08"
					},
					"bindTo": "YuAutorizado1",
					"enabled": false
				},
				"parentName": "Tab042fb325TabLabelGridLayout9b927c08",
				"propertyName": "items",
				"index": 16
			},
			{
				"operation": "insert",
				"name": "YuAutorizado22ca91c72-e8a5-4b83-b92e-b9acac7c1a9d",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 6,
						"row": 5,
						"layoutName": "Tab042fb325TabLabelGridLayout9b927c08"
					},
					"bindTo": "YuAutorizado2",
					"enabled": false
				},
				"parentName": "Tab042fb325TabLabelGridLayout9b927c08",
				"propertyName": "items",
				"index": 17
			},
			{
				"operation": "insert",
				"name": "YuAutorizado3adc1a6fe-4390-4012-9dd2-2f55fdfabf7d",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 12,
						"row": 5,
						"layoutName": "Tab042fb325TabLabelGridLayout9b927c08"
					},
					"bindTo": "YuAutorizado3",
					"enabled": false
				},
				"parentName": "Tab042fb325TabLabelGridLayout9b927c08",
				"propertyName": "items",
				"index": 18
			},
			{
				"operation": "insert",
				"name": "YuAutorizado4c6ef6baa-2f37-4e45-aaec-9acc890a018c",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 18,
						"row": 5,
						"layoutName": "Tab042fb325TabLabelGridLayout9b927c08"
					},
					"bindTo": "YuAutorizado4",
					"enabled": false
				},
				"parentName": "Tab042fb325TabLabelGridLayout9b927c08",
				"propertyName": "items",
				"index": 19
			},
			{
				"operation": "insert",
				"name": "YuNoFactible151ed0fbf-0c17-4919-a1ad-7d3bf36825a2",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 0,
						"row": 6,
						"layoutName": "Tab042fb325TabLabelGridLayout9b927c08"
					},
					"bindTo": "YuNoFactible1",
					"enabled": false
				},
				"parentName": "Tab042fb325TabLabelGridLayout9b927c08",
				"propertyName": "items",
				"index": 20
			},
			{
				"operation": "insert",
				"name": "YuNoFactible2217ecb5b-d158-4977-b24e-301c717359ff",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 6,
						"row": 6,
						"layoutName": "Tab042fb325TabLabelGridLayout9b927c08"
					},
					"bindTo": "YuNoFactible2",
					"enabled": false
				},
				"parentName": "Tab042fb325TabLabelGridLayout9b927c08",
				"propertyName": "items",
				"index": 21
			},
			{
				"operation": "insert",
				"name": "YuNoFactible3d8e7549c-f875-409c-9a0b-7dd9eb214fb2",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 12,
						"row": 6,
						"layoutName": "Tab042fb325TabLabelGridLayout9b927c08"
					},
					"bindTo": "YuNoFactible3",
					"enabled": false
				},
				"parentName": "Tab042fb325TabLabelGridLayout9b927c08",
				"propertyName": "items",
				"index": 22
			},
			{
				"operation": "insert",
				"name": "YuNoFactible4459c1f51-f2b6-4c22-811d-3740da7d04fb",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 18,
						"row": 6,
						"layoutName": "Tab042fb325TabLabelGridLayout9b927c08"
					},
					"bindTo": "YuNoFactible4",
					"enabled": false
				},
				"parentName": "Tab042fb325TabLabelGridLayout9b927c08",
				"propertyName": "items",
				"index": 23
			},
			{
				"operation": "insert",
				"name": "YuDenegado1135a9e88-a130-4bcd-bd84-2d207a2dd2cf",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 0,
						"row": 7,
						"layoutName": "Tab042fb325TabLabelGridLayout9b927c08"
					},
					"bindTo": "YuDenegado1",
					"enabled": false
				},
				"parentName": "Tab042fb325TabLabelGridLayout9b927c08",
				"propertyName": "items",
				"index": 24
			},
			{
				"operation": "insert",
				"name": "YuDenegado2b58240a2-7ba8-47bf-9ddf-8adc6e37eb38",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 6,
						"row": 7,
						"layoutName": "Tab042fb325TabLabelGridLayout9b927c08"
					},
					"bindTo": "YuDenegado2",
					"enabled": false
				},
				"parentName": "Tab042fb325TabLabelGridLayout9b927c08",
				"propertyName": "items",
				"index": 25
			},
			{
				"operation": "insert",
				"name": "YuDenegado37a8dade7-49dd-4643-9205-f1d178c16dce",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 12,
						"row": 7,
						"layoutName": "Tab042fb325TabLabelGridLayout9b927c08"
					},
					"bindTo": "YuDenegado3",
					"enabled": false
				},
				"parentName": "Tab042fb325TabLabelGridLayout9b927c08",
				"propertyName": "items",
				"index": 26
			},
			{
				"operation": "insert",
				"name": "YuDenegado433b5ea57-7dd6-4074-9616-82f59a92d3ce",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 18,
						"row": 7,
						"layoutName": "Tab042fb325TabLabelGridLayout9b927c08"
					},
					"bindTo": "YuDenegado4",
					"enabled": false
				},
				"parentName": "Tab042fb325TabLabelGridLayout9b927c08",
				"propertyName": "items",
				"index": 27
			},
			{
				"operation": "insert",
				"name": "Tab803199dfTabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab803199dfTabLabelTabCaption"
					},
					"blur": {
						"bindTo": "onMyFieldExit"
					},
					"items": [],
					"order": 17
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 17
			},
			{
				"operation": "insert",
				"name": "Tab803199dfTabLabelGroup630e5fc6",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab803199dfTabLabelGroup630e5fc6GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tab803199dfTabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tab803199dfTabLabelGridLayout2f07a82a",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tab803199dfTabLabelGroup630e5fc6",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "YuSolicitoc32cd827-ce74-472d-88b3-170bc7bee6a6",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tab803199dfTabLabelGridLayout2f07a82a"
					},
					"bindTo": "YuSolicito"
				},
				"parentName": "Tab803199dfTabLabelGridLayout2f07a82a",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "YuMotivo673a208f-769c-4f86-824e-7e845e46e1a4",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Tab803199dfTabLabelGridLayout2f07a82a"
					},
					"bindTo": "YuMotivo"
				},
				"parentName": "Tab803199dfTabLabelGridLayout2f07a82a",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Tab55716acdTabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab55716acdTabLabelTabCaption"
					},
					"blur": {
						"bindTo": "onMyFieldExit"
					},
					"items": [],
					"order": 18
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 18
			},
			{
				"operation": "insert",
				"name": "Tab55716acdTabLabelGroupe32f59e5",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab55716acdTabLabelGroupe32f59e5GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tab55716acdTabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tab55716acdTabLabelGridLayout94501673",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tab55716acdTabLabelGroupe32f59e5",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "YuFestTra4d71a4e2-40b8-4b5c-bf98-3e2a0265567b",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tab55716acdTabLabelGridLayout94501673"
					},
					"bindTo": "YuFestTra",
					"enabled": {
						"bindTo": "VariableEditable"
					}
				},
				"parentName": "Tab55716acdTabLabelGridLayout94501673",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "YuDiasSolicitadosd1f45abf-081a-4a80-a4e4-aa522463aae6",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Tab55716acdTabLabelGridLayout94501673"
					},
					"bindTo": "YuDiasSolicitados",
					"enabled": {
						"bindTo": "VariableEditable"
					}
				},
				"parentName": "Tab55716acdTabLabelGridLayout94501673",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "YuAutorizadoeb61ce94-619a-490d-88a5-a931087b4555",
				"values": {
					"layout": {
						"colSpan": 8,
						"rowSpan": 1,
						"column": 2,
						"row": 3,
						"layoutName": "Tab55716acdTabLabelGridLayout94501673"
					},
					"bindTo": "YuAutorizado"
				},
				"parentName": "Tab55716acdTabLabelGridLayout94501673",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "YuDenegadoa7bef17f-aaf6-4e13-af4d-f681ee93124c",
				"values": {
					"layout": {
						"colSpan": 8,
						"rowSpan": 1,
						"column": 14,
						"row": 3,
						"layoutName": "Tab55716acdTabLabelGridLayout94501673"
					},
					"bindTo": "YuDenegado"
				},
				"parentName": "Tab55716acdTabLabelGridLayout94501673",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "remove",
				"name": "ESNTab"
			},
			{
				"operation": "remove",
				"name": "ESNFeedContainer"
			},
			{
				"operation": "remove",
				"name": "ESNFeed"
			}
		]/**SCHEMA_DIFF*/
	};
});
