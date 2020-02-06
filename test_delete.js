var ip = '81.17.129.130', isRendered = true, data = {
    "cityForInit": "110",
    "autoLocation": false,
    "userProject": "110",
    "geoProject": 110,
    "geoCountry": "UA",
    "geoLonLat": {"lon": "36.25270", "lat": "49.98080"},
    "cfgLocal": {
        "checkProjectDomain": true,
        "cityRedirect": true,
        "server.listenPort": "3000",
        "server.checkOrigin": true,
        "emergencyProjects.savedList": "/var/www/online4.data/projectList.json",
        "logger.logstash": {
            "graylog": {
                "hostname": "online48.m1.nato",
                "servers": [{"host": "main.logstash.m1.nato", "port": 12201}]
            },
            "level": "warn",
            "name": "graylog2-logstash",
            "staticMeta": {
                "builds_name": "releases.build.master-1743",
                "elastic_type": "gelf_online",
                "project": "online4",
                "team": "online"
            }
        },
        "SSL.checkUntrustedCertificates": true,
        "WebApi.canPatchKey": true,
        "mediaCard.canDisable": false,
        "featureSwitcher.canRewriteReferrer": false,
        "canShowStaticByCookie": false,
        "canGetHolidaysDateFromURL": false,
        "extralayers.onlyActive": false,
        "superagent.mockAvailable": false,
        "analytics.bss.keystatus": 1,
        "mobile.integration": true,
        "mobile.host": "https://m.2gis.$domain"
    },
    "isSearchBot": false,
    "Accept-Language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7,uk;q=0.6",
    "isSeoTraffic": false,
    "browserTabId": "d5166eab-95c3-470f-ab13-676ea8151234",
    "_2gis_webapi_user": "e5066ed9-9720-4e73-8211-482b67d4a26b",
    "_2gis_webapi_session": "509a6acf-b208-4de8-9a5e-484a87ba91e1",
    "stamp": {
        "mausoleum": "e44c3cd19515",
        "floorsLib": "a2f84f784067",
        "l10n": "5f73aa817849",
        "other": "6b3f905c9f86"
    },
    "revision": "181219-12590",
    "region": {
        "bounds": "POLYGON((36.034468 50.060655,36.045996 50.115501,36.087143 50.14146,36.416935 50.127697,36.467904 50.108949,36.481687 49.845767,36.048271 49.835534,36.034468 50.060655))",
        "code": "kharkov",
        "country_code": "ua",
        "default_pos": {"lat": 49.990637, "lon": 36.280511, "zoom": 11},
        "domain": "ua",
        "flags": {
            "2gis_reviews": true,
            "flamp": false,
            "metro": true,
            "pedestrian_routing": true,
            "public_transport": true,
            "road_network": true,
            "traffic": true
        },
        "id": "110",
        "locale": "ru_UA",
        "locales": ["ru_UA", "uk_UA"],
        "name": "Харьков",
        "name_grammatical_cases": {
            "accusative": "Харьков",
            "dative": "Харькову",
            "genitive": "Харькова",
            "prepositional": "Харькове",
            "nominative": "Харьков"
        },
        "online_languages": {"available": "ru,uk", "default_lang": "ru"},
        "satellites": [{
            "centroid": "POINT(36.070218 49.880514)",
            "geometry": "POLYGON((36.045868 49.850054,36.045868 49.897914,36.094568 49.897914,36.094568 49.850054,36.045868 49.850054))",
            "id": "15481746489344056",
            "name": "Пивденное"
        }, {
            "centroid": "POINT(36.102548 50.118905)",
            "geometry": "POLYGON((36.048888 50.082215,36.048888 50.141528,36.156208 50.141528,36.156208 50.082215,36.048888 50.082215))",
            "id": "15481746489344081",
            "name": "Дергачи"
        }, {
            "centroid": "POINT(36.062111 49.844893)",
            "geometry": "POLYGON((36.047862 49.835534,36.047862 49.854079,36.07636 49.854079,36.07636 49.835534,36.047862 49.835534))",
            "id": "15481746489344055",
            "name": "Мерефа"
        }],
        "settlements": ["Дергачи", "Мерефа", "Пивденное"],
        "time_zone": {"name": "Europe/Kiev", "offset": 120},
        "type": "region",
        "zoom_level": {"max": 18, "min": 8},
        "availableLanguages": ["ru", "uk"],
        "defaultLanguage": "ru",
        "dataLanguage": "ru",
        "currentLanguage": "ru",
        "redirectDomain": true
    },
    "[\"floorsApi\",\"getFloorsList\",{\"regionId\":\"110\"}]": {
        "data": [{
            "id": "15481759374261474",
            "type": "mall",
            "bound": {"min": [432947221, 690675741], "max": [432976610, 690703628]},
            "name": "Французский бульвар, торгово-развлекательный центр",
            "address": "Академика Павлова, 44Б",
            "regionId": 110,
            "buildings": ["15481759374261474"],
            "hybrids": ["70000001017897092"],
            "branchId": "70000001017897092",
            "centroid": [49.990673, 36.289836],
            "branchCount": 231,
            "floorCount": 5,
            "defaultFloor": 0,
            "floorNames": ["0", "1", "2", "3", "4"]
        }, {
            "id": "15481759374296994",
            "type": "mall",
            "bound": {"min": [433382522, 691383488], "max": [433442316, 691430148]},
            "name": "Караван, торгово-развлекательный комплекс",
            "address": "Героев Труда, 7",
            "regionId": 110,
            "buildings": ["15481759374296994"],
            "hybrids": ["70000001017896064"],
            "branchId": "70000001017896064",
            "centroid": [50.028722, 36.328618],
            "branchCount": 307,
            "floorCount": 2,
            "defaultFloor": 0,
            "floorNames": ["1", "2"]
        }, {
            "id": "15481759374297082",
            "type": "mall",
            "bound": {"min": [433426810, 691358134], "max": [433461682, 691403237]},
            "name": "Дафи, торгово-развлекательный центр",
            "address": "Героев Труда, 9",
            "regionId": 110,
            "buildings": ["15481759374297082"],
            "hybrids": ["70000001017896870"],
            "branchId": "70000001017896870",
            "centroid": [50.027167, 36.331068],
            "branchCount": 206,
            "floorCount": 3,
            "defaultFloor": 0,
            "floorNames": ["1", "2", "3"]
        }, {
            "id": "15481759374297796",
            "type": "mall",
            "bound": {"min": [433532091, 690776874], "max": [433548479, 690797037]},
            "name": "Україна, торгово-развлекательный комплекс",
            "address": "Тракторостроителей проспект, 59/56",
            "regionId": 110,
            "buildings": ["15481759374297796"],
            "hybrids": ["70000001017876044"],
            "branchId": "70000001017876044",
            "centroid": [49.995826, 36.338958],
            "branchCount": 137,
            "floorCount": 4,
            "defaultFloor": 0,
            "floorNames": ["1", "2", "3", "4"]
        }, {
            "id": "15481759374319885",
            "type": "mall",
            "bound": {"min": [431783276, 692044865], "max": [431822424, 692089296]},
            "name": "Магелан, торгово-развлекательный центр",
            "address": "Окружная дорога, 4а",
            "regionId": 110,
            "buildings": ["15481759374319885"],
            "hybrids": ["70000001018091471"],
            "branchId": "70000001018091471",
            "centroid": [50.064727, 36.194545],
            "branchCount": 77,
            "floorCount": 3,
            "defaultFloor": 0,
            "floorNames": ["1", "2", "3"]
        }, {
            "id": "15481759374324572",
            "type": "mall",
            "bound": {"min": [432606984, 689841095], "max": [432628976, 689854426]},
            "name": "Sun Mall, торгово-развлекательный центр",
            "address": "Гагарина проспект, 181/1",
            "regionId": 110,
            "buildings": ["15481759374324572"],
            "hybrids": ["70000001018206657"],
            "branchId": "70000001018206657",
            "centroid": [49.944954, 36.260719],
            "branchCount": 108,
            "floorCount": 4,
            "defaultFloor": 0,
            "floorNames": ["1", "2", "3", "6"]
        }]
    },
    "mapOptions": {
        "cityBounds": null,
        "center": {"lon": "36.280289", "lat": "49.990525", "isFromState": true},
        "zoom": {"isFromState": true, "level": "11"},
        "minZoom": 2,
        "dashboardDimensions": {"top": 52, "right": 52, "bottom": 44, "left": 412},
        "isMobile": false,
        "detectRetina": false,
        "rtl": false
    },
    "symbols": {"URL": "/assets/other_6b3f905c9f86/symbols.svg", "isQuirkyBrowser": false},
    "[\"dashboardDetector\",null]": {
        "data": {
            "overlap_region_id": "110",
            "item": {
                "allow_change_domain": true,
                "country_code": "ua",
                "id": "15481746489344121",
                "name": "Харьков",
                "overlap_region_id": "110",
                "region_id": "110",
                "segment_id": "0",
                "type": "adm_div.city"
            }
        }
    },
    "[\"dgApi\",\"items\",\"show_in_list\",{\"_filtersKeys\":[],\"query\":\"сто\",\"region_id\":\"110\",\"type\":\"street,adm_div.city,crossroad,adm_div.settlement,station,building,adm_div.district,road,adm_div.division,adm_div.region,adm_div.living_area,attraction,adm_div.place,adm_div.district_area,branch,parking,gate,route,foreign_city\",\"page\":1,\"page_size\":12,\"full\":true,\"q\":\"сто\"}]": [null, {
        "context_rubrics": [{
            "caption": "Авторемонт",
            "group": 0,
            "id": "9041",
            "name": "Авторемонт и техобслуживание (СТО)",
            "short_id": 9041
        }],
        "filters": {
            "attributes": [{"tag": "rating", "type": "sort"}, {
                "tag": "bound",
                "type": "filter"
            }, {"tag": "district"}, {"tag": "worktime"}, {
                "tag": "has_site",
                "type": "filter"
            }, {"tag": "subway"}, {"tag": "has_photos", "type": "filter"}, {
                "tag": "car_repair_brands_Rover",
                "label": "Rover",
                "type": "flag"
            }, {
                "tag": "car_repair_brands_Volvo",
                "label": "Volvo",
                "type": "flag"
            }, {
                "tag": "car_repair_brands_Lincoln",
                "label": "Lincoln",
                "type": "flag"
            }, {
                "tag": "car_repair_brands_Hawtai",
                "label": "Hawtai",
                "type": "flag"
            }, {"tag": "car_repair_brands_Smart", "label": "Smart", "type": "flag"}, {
                "tag": "car_repair_brands_Lancia",
                "label": "Lancia",
                "type": "flag"
            }, {"tag": "car_repair_brands_SEAT", "label": "SEAT", "type": "flag"}, {
                "tag": "car_repair_brands_Ferrari",
                "label": "Ferrari",
                "type": "flag"
            }, {"tag": "car_repair_brands_Audi", "label": "Audi", "type": "flag"}, {
                "tag": "car_repair_brands_Maxus",
                "label": "Maxus",
                "type": "flag"
            }, {
                "tag": "car_repair_brands_Mercedes_Benz",
                "label": "Mercedes-Benz",
                "type": "flag"
            }, {"tag": "car_repair_brands_BYD", "label": "BYD", "type": "flag"}, {
                "tag": "car_repair_brands_Maserati",
                "label": "Maserati",
                "type": "flag"
            }, {"tag": "car_repair_brands_dacia", "label": "Dacia", "type": "flag"}, {
                "tag": "car_repair_brands_Jeep",
                "label": "Jeep",
                "type": "flag"
            }, {"tag": "car_repair_brands_uaz", "label": "УАЗ", "type": "flag"}, {
                "tag": "car_repair_brands_Toyota",
                "label": "Toyota",
                "type": "flag"
            }, {"tag": "car_repair_brands_Haima", "label": "Haima", "type": "flag"}, {
                "tag": "car_repair_brands_Geely",
                "label": "Geely",
                "type": "flag"
            }, {
                "tag": "general_payment_type_card",
                "label": "Расчёт по картам через терминал",
                "type": "flag"
            }, {
                "tag": "car_repair_brands_Porsche",
                "label": "Porsche",
                "type": "flag"
            }, {
                "tag": "car_repair_brands_Hyundai",
                "label": "Hyundai",
                "type": "flag"
            }, {
                "tag": "car_repair_brands_Cadillac",
                "label": "Cadillac",
                "type": "flag"
            }, {
                "tag": "general_payment_type_internet",
                "label": "Оплата через Интернет",
                "type": "flag"
            }, {"tag": "car_repair_brands_GMC", "label": "GMC", "type": "flag"}, {
                "tag": "car_repair_brands_Changan",
                "label": "Changan",
                "type": "flag"
            }, {
                "tag": "car_repair_brands_Isuzu",
                "label": "Isuzu",
                "type": "flag"
            }, {
                "tag": "car_repair_brands_Land_Rover",
                "label": "Land Rover",
                "type": "flag"
            }, {
                "tag": "car_repair_brands_Citroen",
                "label": "Citroen",
                "type": "flag"
            }, {
                "tag": "car_repair_brands_Mitsubishi",
                "label": "Mitsubishi",
                "type": "flag"
            }, {"tag": "car_repair_brands_Foton", "label": "Foton", "type": "flag"}, {
                "tag": "car_repair_brands_Ford",
                "label": "Ford",
                "type": "flag"
            }, {
                "tag": "car_repair_brands_Honda",
                "label": "Honda",
                "type": "flag"
            }, {
                "tag": "car_repair_brands_Daihatsu",
                "label": "Daihatsu",
                "type": "flag"
            }, {"tag": "car_repair_brands_Ravon", "label": "Ravon", "type": "flag"}, {
                "tag": "car_repair_brands_Saab",
                "label": "Saab",
                "type": "flag"
            }, {
                "tag": "car_repair_brands_Alfa_Romeo",
                "label": "Alfa Romeo",
                "type": "flag"
            }, {
                "tag": "car_repair_brands_Peugeot",
                "label": "Peugeot",
                "type": "flag"
            }, {"tag": "car_repair_brands_Opel", "label": "Opel", "type": "flag"}, {
                "tag": "car_repair_brands_zaz",
                "label": "ЗАЗ",
                "type": "flag"
            }, {"tag": "car_repair_brands_MINI", "label": "MINI", "type": "flag"}, {
                "tag": "car_repair_brands_Luxgen",
                "label": "Luxgen",
                "type": "flag"
            }, {"tag": "car_repair_brands_tagaz", "label": "ТагАЗ", "type": "flag"}, {
                "tag": "car_repair_brands_Lexus",
                "label": "Lexus",
                "type": "flag"
            }, {"tag": "car_repair_brands_Fiat", "label": "Fiat", "type": "flag"}, {
                "tag": "car_repair_brands_Suzuki",
                "label": "Suzuki",
                "type": "flag"
            }, {
                "tag": "car_repair_brands_vis",
                "label": "ВИС",
                "type": "flag"
            }, {
                "tag": "car_repair_brands_Rolls_Royce",
                "label": "Rolls-Royce",
                "type": "flag"
            }, {
                "tag": "car_repair_brands_Datsun",
                "label": "Datsun",
                "type": "flag"
            }, {
                "tag": "car_repair_brands_Bugatti",
                "label": "Bugatti",
                "type": "flag"
            }, {
                "tag": "car_repair_brands_Dongfeng",
                "label": "Dongfeng",
                "type": "flag"
            }, {
                "tag": "car_repair_brands_Chevrolet",
                "label": "Chevrolet",
                "type": "flag"
            }, {
                "tag": "car_repair_brands_Jaguar",
                "label": "Jaguar",
                "type": "flag"
            }, {
                "tag": "car_repair_brands_Lifan",
                "label": "Lifan",
                "type": "flag"
            }, {
                "tag": "car_repair_brands_Chrysler",
                "label": "Chrysler",
                "type": "flag"
            }, {
                "tag": "car_repair_brands_Brilliance",
                "label": "Brilliance",
                "type": "flag"
            }, {"tag": "car_repair_brands_ZX", "label": "ZX", "type": "flag"}, {
                "tag": "car_repair_brands_Vortex",
                "label": "Vortex",
                "type": "flag"
            }, {"tag": "car_repair_brands_FAW", "label": "FAW", "type": "flag"}, {
                "tag": "car_repair_brands_Hummer",
                "label": "Hummer",
                "type": "flag"
            }, {
                "tag": "car_repair_brands_Great_Wall",
                "label": "Great Wall",
                "type": "flag"
            }, {"tag": "car_repair_brands_Dodge", "label": "Dodge", "type": "flag"}, {
                "tag": "car_repair_brands_Mazda",
                "label": "Mazda",
                "type": "flag"
            }, {
                "tag": "car_repair_brands_Renault",
                "label": "Renault",
                "type": "flag"
            }, {"tag": "car_repair_brands_Zotye", "label": "Zotye", "type": "flag"}, {
                "tag": "car_repair_brands_JAC",
                "label": "JAC",
                "type": "flag"
            }, {
                "tag": "car_repair_brands_SsangYong",
                "label": "SsangYong",
                "type": "flag"
            }, {
                "tag": "car_repair_brands_Tianye",
                "label": "Tianye",
                "type": "flag"
            }, {
                "tag": "car_repair_brands_Volkswagen",
                "label": "Volkswagen",
                "type": "flag"
            }, {"tag": "car_repair_brands_Nissan", "label": "Nissan", "type": "flag"}, {
                "tag": "car_repair_brands_LADA",
                "label": "LADA (ВАЗ)",
                "type": "flag"
            }, {
                "tag": "car_repair_brands_Infiniti",
                "label": "Infiniti",
                "type": "flag"
            }, {"tag": "car_repair_brands_gaz", "label": "ГАЗ", "type": "flag"}, {
                "tag": "car_repair_brands_Subaru",
                "label": "Subaru",
                "type": "flag"
            }, {"tag": "car_repair_brands_KIA", "label": "KIA", "type": "flag"}, {
                "tag": "car_repair_brands_Acura",
                "label": "Acura",
                "type": "flag"
            }, {
                "tag": "car_repair_brands_Bentley",
                "label": "Bentley",
                "type": "flag"
            }, {"tag": "car_repair_brands_Chery", "label": "Chery", "type": "flag"}, {
                "tag": "car_repair_brands_Haval",
                "label": "Haval",
                "type": "flag"
            }, {
                "tag": "general_payment_type_bank",
                "label": "Оплата через банк",
                "type": "flag"
            }, {"tag": "car_repair_brands_Daewoo", "label": "Daewoo", "type": "flag"}, {
                "tag": "car_repair_brands_BMW",
                "label": "BMW",
                "type": "flag"
            }, {"tag": "car_repair_brands_Skoda", "label": "Skoda", "type": "flag"}, {
                "tag": "car_repair_brands_Tesla",
                "label": "Tesla",
                "type": "flag"
            }, {"tag": "general_payment_type_cash", "label": "Наличный расчёт", "type": "flag"}],
            "rubrics": [{"count": 100, "id": "9041", "name": "Авторемонт и техобслуживание (СТО)"}, {
                "count": 82,
                "id": "7691",
                "name": "Ремонт ходовой части автомобиля"
            }, {"count": 70, "id": "7695", "name": "Ремонт бензиновых двигателей"}, {
                "count": 55,
                "id": "110362",
                "name": "Компьютерная диагностика автомобилей"
            }, {"count": 52, "id": "7690", "name": "Развал / Схождение"}, {
                "count": 45,
                "id": "54884",
                "name": "Автозапчасти для легковых автомобилей"
            }, {"count": 42, "id": "7693", "name": "Кузовной ремонт"}, {
                "count": 41,
                "id": "7692",
                "name": "Ремонт автоэлектрики"
            }, {"count": 40, "id": "7689", "name": "Шиномонтаж"}, {
                "count": 30,
                "id": "7900",
                "name": "Аппаратная замена масла"
            }, {"count": 30, "id": "7694", "name": "Ремонт дизельных двигателей"}, {
                "count": 29,
                "id": "405",
                "name": "Автомойки"
            }, {"count": 28, "id": "110363", "name": "Ремонт МКПП"}, {
                "count": 23,
                "id": "412",
                "name": "Ремонт АКПП"
            }, {
                "count": 22,
                "id": "7697",
                "name": "Ремонт / обслуживание климатических систем автомобиля"
            }, {"count": 18, "id": "431", "name": "Продажа легковых автомобилей"}, {
                "count": 15,
                "id": "7699",
                "name": "Ремонт карбюраторов / инжекторов"
            }, {"count": 13, "id": "408", "name": "Автосигнализации"}, {
                "count": 13,
                "id": "10792",
                "name": "Установка / ремонт автостёкол"
            }, {"count": 10, "id": "437", "name": "Газовое оборудование для автотранспорта"}, {
                "count": 10,
                "id": "414",
                "name": "Тюнинг"
            }, {"count": 10, "id": "52408", "name": "Ремонт выхлопных систем"}, {
                "count": 9,
                "id": "426",
                "name": "Автомасла / Мотомасла / Химия"
            }, {"count": 8, "id": "413", "name": "Тонирование автостёкол"}, {
                "count": 8,
                "id": "110365",
                "name": "Установка / ремонт автомобильной оптики"
            }, {"count": 8, "id": "16648", "name": "Ремонт топливной аппаратуры дизельных двигателей"}, {
                "count": 7,
                "id": "10412",
                "name": "Ремонт электронных систем управления автомобиля"
            }, {"count": 6, "id": "425", "name": "Автоаксессуары"}, {
                "count": 5,
                "id": "404",
                "name": "Автозвук"
            }, {"count": 5, "id": "427", "name": "Шины / Диски"}, {
                "count": 5,
                "id": "110301",
                "name": "Детейлинг"
            }, {"count": 4, "id": "1141", "name": "Автозапчасти для грузовых автомобилей"}, {
                "count": 4,
                "id": "9867",
                "name": "Эвакуация автомобилей"
            }, {"count": 3, "id": "22829", "name": "Хранение шин"}, {
                "count": 3,
                "id": "524",
                "name": "Автомобильные аккумуляторы"
            }, {"count": 3, "id": "20989", "name": "Ремонт грузовых автомобилей"}, {
                "count": 2,
                "id": "433",
                "name": "Специализированное автооборудование"
            }, {"count": 2, "id": "56428", "name": "Услуги по отогреву автомобиля"}, {
                "count": 2,
                "id": "410",
                "name": "Антикоррозийная обработка автомобилей"
            }, {"count": 2, "id": "406", "name": "Услуги авторазбора"}, {
                "count": 1,
                "id": "15335",
                "name": "Сварочные работы"
            }, {"count": 1, "id": "341", "name": "Страхование"}, {
                "count": 1,
                "id": "439",
                "name": "Оборудование для автосервиса"
            }, {"count": 1, "id": "428", "name": "Продажа грузовых автомобилей"}, {
                "count": 1,
                "id": "12486",
                "name": "Оформление купли-продажи автомобилей"
            }, {"count": 1, "id": "525", "name": "Контрактные автозапчасти"}, {
                "count": 1,
                "id": "429",
                "name": "Мототехника"
            }, {"count": 1, "id": "417", "name": "Междугородные автогрузоперевозки"}, {
                "count": 1,
                "id": "8466",
                "name": "Запчасти для спецтехники"
            }, {"count": 1, "id": "70164", "name": "Пошив авточехлов / автоковров"}, {
                "count": 1,
                "id": "102029",
                "name": "Окрасочное оборудование"
            }, {"count": 1, "id": "110366", "name": "Переоборудование автомобилей"}, {
                "count": 1,
                "id": "656",
                "name": "Сварочные материалы"
            }],
            "spatial": {
                "cities": [{"count": 95, "id": "15481746489344121", "name": "Харьков"}, {
                    "count": 1,
                    "id": "15481746489344067",
                    "name": "Коротыч"
                }, {"count": 1, "id": "15481746489344061", "name": "Бабаи"}, {
                    "count": 1,
                    "id": "15481746489344071",
                    "name": "Подворки"
                }, {"count": 1, "id": "15481746489344079", "name": "Малая Даниловка"}, {
                    "count": 1,
                    "id": "15481746489344070",
                    "name": "Песочин"
                }],
                "districts": [{
                    "city_id": "15481746489344121",
                    "id": "15481733604442127",
                    "name": "Немышлянский"
                }, {
                    "city_id": "15481746489344121",
                    "id": "70030076163084287",
                    "name": "Шевченковский"
                }, {
                    "city_id": "15481746489344121",
                    "id": "15481733604442126",
                    "name": "Московский"
                }, {
                    "city_id": "15481746489344121",
                    "id": "15481733604442131",
                    "name": "Новобаварский"
                }, {
                    "city_id": "15481746489344121",
                    "id": "15481733604442123",
                    "name": "Холодногорский"
                }, {
                    "city_id": "15481746489344121",
                    "id": "15481733604442130",
                    "name": "Основянский"
                }, {
                    "city_id": "15481746489344121",
                    "id": "15481733604442125",
                    "name": "Киевский"
                }, {
                    "city_id": "15481746489344121",
                    "id": "15481733604442129",
                    "name": "Слободской"
                }, {"city_id": "15481746489344121", "id": "15481733604442128", "name": "Индустриальный"}]
            }
        },
        "items": [{
            "address": {
                "building_id": "15481759374253897",
                "components": [{
                    "number": "4/2",
                    "street": "Шатилова Дача",
                    "street_id": "15481862453461325",
                    "type": "street_number"
                }],
                "postcode": "61145"
            },
            "address_name": "Шатилова Дача, 4/2",
            "adm_div": [{"name": "Харьковская область", "type": "region"}, {
                "id": "15481746489344121",
                "is_default": true,
                "name": "Харьков",
                "type": "city"
            }, {"id": "70030076163084287", "name": "Шевченковский район", "type": "district"}],
            "ads": {
                "article": "Наши ценности:<br /><br />• Мы заботимся о вас как о самих себе;<br />• Мы не просто гарантируем - мы выполняем обещания;<br />• Мы всегда рады Вас видеть;<br />• Мы постоянно становимся лучше для Вас.<br />Что вы получаете, обслуживаясь у нас:<br />• Комплексное решение проблемы в одном месте;<br />• Даем детальное техническое заключение по результатам работы о состоянии автомобиля и о необходимости ремонта;<br />• Даем гарантию на запчасти, приобретенные и установленные у нас;<br />• 100% гарантия на услуги;<br />• Профессионально выполненные услуги;<br />• Квалифицированный персонал;<br />• Персональный менеджер;<br />• Максимальная скорость обслуживания;<br />• Консультация и подбор деталей;<br />• Удобное Вам время записи и расположение.<br /><br />К услугам клиентов предлагается: <br />* Комфортабельный зал ожиданий;<br />* Бесплатная доставка клиентов любую точку города.",
                "text": "Автосервис \"Elcars\". Полный спектр услуг. Авто от 2010г.",
                "options": {
                    "logo": {
                        "bg_color": "#124812",
                        "img_url": "https://ams2-cdn.2gis.com/previews/1040604981368979498/XCPpscYjy-cefJbWrx1btMQkGg7OBw3/1/image.png",
                        "text_color": "#ffffff"
                    },
                    "actions": [{
                        "caption": "НАШ САЙТ",
                        "name": "НАШ САЙТ",
                        "platforms": ["online", "android", "ios"],
                        "type": "link",
                        "value": "http://link.2gis.ru/1.2/EB4D70C5/online/20181201/project110/70000001032753368/2gis.ru/oyD5wz47G4553113116GGGG1jr6vls26G6G774I7G289G3H2rgewB42I2B6BG1I7032J9CGJz8p3uv56036A428765HA174HH6f?http://elcars.ua/"
                    }],
                    "images": [{"url": "https://ams2-cdn.2gis.com/previews/1040604981368979498/XCPpscYjy-cefJbWrx1btMQkGg7OBw3/3/"}]
                }
            },
            "attribute_groups": [{
                "attributes": [{
                    "name": "Расчёт по картам",
                    "tag": "general_payment_type_card"
                }, {"name": "Наличный расчёт", "tag": "general_payment_type_cash"}, {
                    "name": "Оплата через банк",
                    "tag": "general_payment_type_bank"
                }], "is_context": false, "is_primary": false, "name": "Способы оплаты", "rubric_ids": []
            }],
            "contact_groups": [{
                "contacts": [{
                    "type": "phone",
                    "text": "+380 99‒347‒34‒34",
                    "value": "+380993473434"
                }, {"type": "email", "text": "support@elcars.ua", "value": "support@elcars.ua"}]
            }],
            "external_content": [{
                "count": 10,
                "main_photo_url": "https://i8.photo.2gis.com/main/branch/110/70000001032753368/common",
                "subtype": "common",
                "type": "photo_album"
            }],
            "flags": {"photos": true},
            "id": "70000001032753368",
            "name": "ElCars, СТО",
            "name_ex": {"extension": "СТО", "primary": "ElCars"},
            "org": {"branch_count": 1, "id": "70000001032753376", "name": "ElCars, СТО"},
            "point": {"lat": 50.013211, "lon": 36.221284},
            "region_id": "110",
            "reviews": {
                "general_rating": 5,
                "general_review_count": 1,
                "is_reviewable": false,
                "is_reviewable_on_flamp": true,
                "items": [{"is_reviewable": true, "tag": "2gis_reviews"}, {"is_reviewable": true, "tag": "foursquare"}],
                "org_rating": 5,
                "org_review_count": 1
            },
            "rubrics": [{
                "alias": "avtoremont_i_tekhobsluzhivanie_sto",
                "id": "9041",
                "kind": "primary",
                "name": "Авторемонт и техобслуживание (СТО)",
                "parent_id": "42903",
                "short_id": 9041
            }, {
                "alias": "remont_obsluzhivanie_klimaticheskikh_sistem_avtomobilya",
                "id": "7697",
                "kind": "primary",
                "name": "Ремонт / обслуживание климатических систем автомобиля",
                "parent_id": "42903",
                "short_id": 7697
            }, {
                "alias": "remont_mkpp",
                "id": "110363",
                "kind": "primary",
                "name": "Ремонт МКПП",
                "parent_id": "42903",
                "short_id": 110363
            }, {
                "alias": "remont_akpp",
                "id": "412",
                "kind": "primary",
                "name": "Ремонт АКПП",
                "parent_id": "42903",
                "short_id": 412
            }, {
                "alias": "apparatnaya_zamena_masla",
                "id": "7900",
                "kind": "primary",
                "name": "Аппаратная замена масла",
                "parent_id": "42903",
                "short_id": 7900
            }, {
                "alias": "remont_benzinovykh_dvigatelejj",
                "id": "7695",
                "kind": "primary",
                "name": "Ремонт бензиновых двигателей",
                "parent_id": "42903",
                "short_id": 7695
            }, {
                "alias": "remont_dizelnykh_dvigatelejj",
                "id": "7694",
                "kind": "primary",
                "name": "Ремонт дизельных двигателей",
                "parent_id": "42903",
                "short_id": 7694
            }, {
                "alias": "remont_khodovojj_chasti_avtomobilya",
                "id": "7691",
                "kind": "primary",
                "name": "Ремонт ходовой части автомобиля",
                "parent_id": "42903",
                "short_id": 7691
            }, {
                "alias": "razval_skhozhdenie",
                "id": "7690",
                "kind": "primary",
                "name": "Развал / Схождение",
                "parent_id": "42903",
                "short_id": 7690
            }, {
                "alias": "remont_avtoehlektriki",
                "id": "7692",
                "kind": "primary",
                "name": "Ремонт автоэлектрики",
                "parent_id": "42903",
                "short_id": 7692
            }],
            "schedule": {
                "Fri": {"working_hours": [{"from": "09:00", "to": "18:00"}]},
                "Mon": {"working_hours": [{"from": "09:00", "to": "18:00"}]},
                "Sat": {"working_hours": [{"from": "09:00", "to": "14:00"}]},
                "Thu": {"working_hours": [{"from": "09:00", "to": "18:00"}]},
                "Tue": {"working_hours": [{"from": "09:00", "to": "18:00"}]},
                "Wed": {"working_hours": [{"from": "09:00", "to": "18:00"}]},
                "comment": "по предварительной записи: пн-сб"
            },
            "segment_id": "0",
            "stat": {"adst": 1545113700, "is_advertised": true, "match_type": 4, "rubr": "9041", "source_type": 2},
            "timezone_offset": 120,
            "type": "branch",
            "hash": "oyD5wz47G4553113112GGGGGjr6vls26G6G774I7G289G3H2rgewB42I2B6BG0I7032J9CGJz8p3uv56036A428765HA174H77"
        }, {
            "address": {
                "building_id": "15481759374329607",
                "components": [{
                    "number": "147",
                    "street": "Льва Ландау проспект",
                    "street_id": "15481862453462577",
                    "type": "street_number"
                }],
                "postcode": "61105"
            },
            "address_name": "Льва Ландау проспект, 147",
            "adm_div": [{"name": "Харьковская область", "type": "region"}, {
                "id": "15481746489344121",
                "is_default": true,
                "name": "Харьков",
                "type": "city"
            }, {"id": "15481733604442129", "name": "Слободской район", "type": "district"}],
            "ads": {
                "article": "Наши ценности:<br /><br />• Мы заботимся о вас как о самих себе;<br />• Мы не просто гарантируем - мы выполняем обещания;<br />• Мы всегда рады Вас видеть;<br />• Мы постоянно становимся лучше для Вас.<br />Что вы получаете, обслуживаясь у нас:<br />• Комплексное решение проблемы в одном месте;<br />• Даем детальное техническое заключение по результатам работы о состоянии автомобиля и о необходимости ремонта;<br />• Даем гарантию на запчасти, приобретенные и установленные у нас;<br />• 100% гарантия на услуги;<br />• Профессионально выполненные услуги;<br />• Квалифицированный персонал;<br />• Персональный менеджер;<br />• Максимальная скорость обслуживания;<br />• Консультация и подбор деталей;<br />• Удобное Вам время записи и расположение.<br /><br />К услугам клиентов предлагается:<br />- Комфортабельный зал ожиданий;<br />- Бесплатная доставка клиентов любую точку города.",
                "text": "Автосервис \"Ultraservice\". Полный спектр услуг. Авто от 2010г.",
                "options": {
                    "logo": {
                        "bg_color": "#076315",
                        "img_url": "https://ams2-cdn.2gis.com/previews/1042700656579707087/DkuvMwYO8QCaWPzQPVSbD9qvolKlhAl/1/image.png",
                        "text_color": "#ffffff"
                    },
                    "actions": [{
                        "caption": "Наш сайт",
                        "name": "Наш сайт",
                        "platforms": ["online", "android", "ios"],
                        "type": "link",
                        "value": "http://link.2gis.ru/1.2/E1F1FCD7/online/20181201/project110/70000001032712332/2gis.ru/oyD5wz47G4553113116GGGG1jr6vls26G6G774I7G253G4H2rgewB42I2B6BG1I7032J9CGJz8p3uv56036A428355HA174HHg4?http://ultraservice.com.ua/"
                    }],
                    "images": [{"url": "https://ams2-cdn.2gis.com/previews/1042700656579707087/DkuvMwYO8QCaWPzQPVSbD9qvolKlhAl/3/"}]
                }
            },
            "attribute_groups": [{
                "attributes": [{
                    "name": "Расчёт по картам",
                    "tag": "general_payment_type_card"
                }, {"name": "Наличный расчёт", "tag": "general_payment_type_cash"}, {
                    "name": "Оплата через банк",
                    "tag": "general_payment_type_bank"
                }], "is_context": false, "is_primary": false, "name": "Способы оплаты", "rubric_ids": []
            }, {
                "attributes": [{"name": "Lexus", "tag": "car_repair_brands_Lexus"}, {
                    "name": "Audi",
                    "tag": "car_repair_brands_Audi"
                }, {"name": "BMW", "tag": "car_repair_brands_BMW"}, {
                    "name": "Porsche",
                    "tag": "car_repair_brands_Porsche"
                }, {"name": "Skoda", "tag": "car_repair_brands_Skoda"}, {
                    "name": "Volkswagen",
                    "tag": "car_repair_brands_Volkswagen"
                }],
                "icon_url": "http://disk.2gis.com/rubricator/car_repairc11263337e0283a18061c69879fa366f.svg",
                "is_context": true,
                "is_primary": true,
                "name": "Авторемонт",
                "rubric_ids": ["9041"]
            }],
            "contact_groups": [{
                "contacts": [{
                    "type": "phone",
                    "text": "+380 50‒911‒22‒00",
                    "value": "+380509112200"
                }, {"type": "phone", "text": "+380 93‒911‒22‒00", "value": "+380939112200"}, {
                    "type": "phone",
                    "text": "+380 98‒911‒22‒00",
                    "value": "+380989112200"
                }, {
                    "type": "website",
                    "text": "ultraservice.com.ua",
                    "value": "http://link.2gis.ru/1.2/F00EBF42/online/20181201/project110/70000001032712332/2gis.ru/oyD5wz47G4553113116GGGGGjr6vls26G6G774I7G253G4H2rgewB42I2B6BG1I7032J9CGJz8p3uv56036A428355HA174Hg2?http://ultraservice.com.ua",
                    "url": "http://ultraservice.com.ua"
                }, {"type": "email", "text": "ultraservice.kh@gmail.com", "value": "ultraservice.kh@gmail.com"}]
            }],
            "external_content": [{
                "count": 27,
                "main_photo_url": "https://i2.photo.2gis.com/main/branch/110/70000001032712332/common",
                "subtype": "common",
                "type": "photo_album"
            }],
            "flags": {"photos": true},
            "id": "70000001032712332",
            "name": "Ultraservice, автосервис",
            "name_ex": {"extension": "автосервис", "primary": "Ultraservice"},
            "org": {"branch_count": 1, "id": "70000001032712331", "name": "Ultraservice, автосервис"},
            "point": {"lat": 49.952326, "lon": 36.300481},
            "region_id": "110",
            "reviews": {
                "is_reviewable": false,
                "is_reviewable_on_flamp": true,
                "items": [{"is_reviewable": true, "tag": "2gis_reviews"}, {"is_reviewable": true, "tag": "foursquare"}]
            },
            "rubrics": [{
                "alias": "avtoremont_i_tekhobsluzhivanie_sto",
                "id": "9041",
                "kind": "primary",
                "name": "Авторемонт и техобслуживание (СТО)",
                "parent_id": "42903",
                "short_id": 9041
            }, {
                "alias": "remont_khodovojj_chasti_avtomobilya",
                "id": "7691",
                "kind": "additional",
                "name": "Ремонт ходовой части автомобиля",
                "parent_id": "42903",
                "short_id": 7691
            }, {
                "alias": "remont_mkpp",
                "id": "110363",
                "kind": "additional",
                "name": "Ремонт МКПП",
                "parent_id": "42903",
                "short_id": 110363
            }, {
                "alias": "remont_akpp",
                "id": "412",
                "kind": "additional",
                "name": "Ремонт АКПП",
                "parent_id": "42903",
                "short_id": 412
            }, {
                "alias": "razval_skhozhdenie",
                "id": "7690",
                "kind": "additional",
                "name": "Развал / Схождение",
                "parent_id": "42903",
                "short_id": 7690
            }, {
                "alias": "kuzovnojj_remont",
                "id": "7693",
                "kind": "additional",
                "name": "Кузовной ремонт",
                "parent_id": "42903",
                "short_id": 7693
            }, {
                "alias": "remont_benzinovykh_dvigatelejj",
                "id": "7695",
                "kind": "additional",
                "name": "Ремонт бензиновых двигателей",
                "parent_id": "42903",
                "short_id": 7695
            }, {
                "alias": "remont_dizelnykh_dvigatelejj",
                "id": "7694",
                "kind": "additional",
                "name": "Ремонт дизельных двигателей",
                "parent_id": "42903",
                "short_id": 7694
            }, {
                "alias": "remont_obsluzhivanie_klimaticheskikh_sistem_avtomobilya",
                "id": "7697",
                "kind": "additional",
                "name": "Ремонт / обслуживание климатических систем автомобиля",
                "parent_id": "42903",
                "short_id": 7697
            }],
            "schedule": {
                "Fri": {"working_hours": [{"from": "09:00", "to": "18:00"}]},
                "Mon": {"working_hours": [{"from": "09:00", "to": "18:00"}]},
                "Sat": {"working_hours": [{"from": "09:00", "to": "14:00"}]},
                "Thu": {"working_hours": [{"from": "09:00", "to": "18:00"}]},
                "Tue": {"working_hours": [{"from": "09:00", "to": "18:00"}]},
                "Wed": {"working_hours": [{"from": "09:00", "to": "18:00"}]}
            },
            "segment_id": "0",
            "stat": {"adst": 1545113700, "is_advertised": true, "match_type": 4, "rubr": "9041", "source_type": 2},
            "timezone_offset": 120,
            "type": "branch",
            "hash": "oyD5wz47G4553113112GGGGGjr6vls26G6G774I7G253G4H2rgewB42I2B6BG0I7032J9CGJz8p3uv56036A428355HA174H15"
        }, {
            "address": {
                "building_id": "15481759374257120",
                "components": [{
                    "number": "14",
                    "street": "Ангарская",
                    "street_id": "15481862453461660",
                    "type": "street_number"
                }],
                "postcode": "61013"
            },
            "address_comment": "1 этаж",
            "address_name": "Ангарская, 14",
            "adm_div": [{"name": "Харьковская область", "type": "region"}, {
                "id": "15481746489344121",
                "is_default": true,
                "name": "Харьков",
                "type": "city"
            }, {"id": "15481733604442126", "name": "Московский район", "type": "district"}],
            "ads": {
                "article": " <br />АР Сервис специализируется на ремонте, обслуживании и диагностике автомобилей всех марок.<br />У нас собственный склад автозапчастей.<br />Основные направления:<br />•&nbsp;Диагностика, ремонт и обслуживание двигателей, механических трансмиссий, ходовой части и топливных систем питания автомобиля;<br />•&nbsp;Ремонт насосов и рулевых механизмов, оснащенных гидроусилителем руля;<br />•&nbsp;Ремонт и замена стартеров, генераторов;<br />•&nbsp;Компьютерная диагностика и ремонт электрооборудования и электронных систем;<br />•&nbsp;Кузовные работы любой сложности;<br />•&nbsp;диагностика, заправка и ремонт кондиционеров;<br />•&nbsp;Установка ГБО;<br />•&nbsp;Ремонт топливных систем;<br />•&nbsp;Ремонт механической и автоматической КПП;<br />•&nbsp;Регулировка развал-схождения;<br />•&nbsp;Окраска кузова подетальная и полная;<br />•&nbsp;Компьютерная диагностика геометрии кузова (SPANESI);<br />•&nbsp;Вытяжка кузова на стенде фирмы SPANESI;<br />•&nbsp;Профессиональная диагностика подвески и кузова.<br /><br />Доставьте ваш а/м нам, и мы сделаем все, чтобы вы остались довольными!",
                "text": "Современный автосервис, профессиональное оборудование, доступные цены.",
                "options": {
                    "logo": {
                        "bg_color": "#0492DC",
                        "img_url": "https://ams2-cdn.2gis.com/previews/1038260058065993774/dKRxqyNdxkCJcD8DGfEPOdB5i0wYe8P/1/image.png",
                        "text_color": "#ffffff"
                    },
                    "actions": [{
                        "caption": "НАШ САЙТ",
                        "name": "НАШ САЙТ",
                        "platforms": ["online", "android", "ios"],
                        "type": "link",
                        "value": "http://link.2gis.ru/1.2/1C1F9466/online/20181201/project110/70000001017985919/2gis.ru/oyD5wz47G4553113116GGGG1jr6vls26G6G774I7G23AG5H2rgewB42I2B6BG1I7032J9CGJz8p3uv56036A27AA8BHA174HH64?http://ar-service.com.ua/"
                    }]
                }
            },
            "attribute_groups": [{
                "attributes": [{
                    "name": "Комплексная мойка от 60 ₴",
                    "tag": "carwash_price"
                }, {"name": "Бесконтактная мойка", "tag": "carwash_contactless"}, {
                    "name": "Химчистка салона",
                    "tag": "carwash_chemical"
                }, {"name": "Мойка двигателя", "tag": "carwash_engine"}, {
                    "name": "Мойка днища",
                    "tag": "carwash_bottom"
                }, {"name": "Полировка кузова", "tag": "carwash_protective_polish"}, {
                    "name": "До 4 машин",
                    "tag": "carwash_box_count"
                }, {"name": "Зал ожидания", "tag": "carwash_cafe"}],
                "icon_url": "http://disk.2gis.com/rubricator/carwash3b5dfcef6ead5d8b7062a403c5d6a7ba.svg",
                "is_context": false,
                "is_primary": false,
                "name": "Автомойка",
                "rubric_ids": ["405"]
            }, {
                "attributes": [{
                    "name": "Восстановление геометрии",
                    "tag": "car_bodyworks_service_structural_repair"
                }, {"name": "Покраска", "tag": "car_bodyworks_service_painting"}, {
                    "name": "Полировка",
                    "tag": "car_bodyworks_service_polishing"
                }, {"name": "Рихтовка", "tag": "car_bodyworks_service_alignment"}, {
                    "name": "Сварка",
                    "tag": "car_bodyworks_service_welding"
                }], "is_context": false, "is_primary": false, "name": "Кузовной ремонт", "rubric_ids": ["7693"]
            }, {
                "attributes": [{
                    "name": "Врезка люка",
                    "tag": "car_tuning_service_sunroof"
                }, {
                    "name": "Перетяжка салона",
                    "tag": "car_tuning_service_interior_recovery"
                }, {
                    "name": "Подсветка автомобиля",
                    "tag": "car_tuning_service_illumination"
                }, {
                    "name": "Тюнинг внедорожников",
                    "tag": "car_tuning_service_offroad"
                }, {
                    "name": "Тюнинг выхлопной системы",
                    "tag": "car_tuning_service_exhaust"
                }, {"name": "Тюнинг двигателя", "tag": "car_tuning_service_engine"}, {
                    "name": "Обвесы и спойлеры",
                    "tag": "car_tuning_service_spoilers"
                }, {"name": "Тюнинг подвески", "tag": "car_tuning_service_suspension"}, {
                    "name": "Установка ксенона",
                    "tag": "car_tuning_service_xenon"
                }, {
                    "name": "Хромирование",
                    "tag": "car_tuning_service_chromium_plating"
                }, {"name": "Шумоизоляция салона", "tag": "car_tuning_service_isolation"}],
                "is_context": false,
                "is_primary": false,
                "name": "Тюнинг",
                "rubric_ids": ["414"]
            }, {
                "attributes": [{"name": "Сезонное хранение", "tag": "tire_storage"}, {
                    "name": "Возможна запись",
                    "tag": "tire_prerecord"
                }, {"name": "Мотошиномонтаж", "tag": "tire_moto"}, {
                    "name": "Ремонт порезов",
                    "tag": "tire_repair_lateral_cuts"
                }, {"name": "Прокатка дисков", "tag": "tire_rolling_disk"}],
                "is_context": false,
                "is_primary": false,
                "name": "Шиномонтаж",
                "rubric_ids": ["7689"]
            }, {
                "attributes": [{"name": "Наличный расчёт", "tag": "general_payment_type_cash"}],
                "is_context": false,
                "is_primary": false,
                "name": "Способы оплаты",
                "rubric_ids": []
            }, {
                "attributes": [{"name": "Wi-Fi", "tag": "wifi_wifi"}],
                "is_context": false,
                "is_primary": false,
                "rubric_ids": ["652", "405", "165", "547", "161", "173", "162", "15791", "164", "51459", "159", "52681", "7689", "305", "110998"]
            }],
            "contact_groups": [{
                "contacts": [{
                    "type": "phone",
                    "text": "+380 95‒208‒57‒77",
                    "value": "+380952085777"
                }, {"type": "phone", "text": "+380 67‒570‒85‒57", "value": "+380675708557"}, {
                    "type": "website",
                    "text": "ar-service.com.ua",
                    "value": "http://link.2gis.ru/1.2/7C9F7458/online/20181201/project110/70000001017985919/2gis.ru/oyD5wz47G4553113116GGGGGjr6vls26G6G774I7G23AG5H2rgewB42I2B6BG1I7032J9CGJz8p3uv56036A27AA8BHA174H38?http://ar-service.com.ua",
                    "url": "http://ar-service.com.ua"
                }, {"type": "email", "text": "lasko@ukr.net", "value": "lasko@ukr.net"}]
            }],
            "external_content": [],
            "id": "70000001017985919",
            "name": "АР Сервис, СТО",
            "name_ex": {"extension": "СТО", "primary": "АР Сервис"},
            "org": {"branch_count": 1, "id": "70000001017985918", "name": "АР Сервис, СТО"},
            "point": {"lat": 49.997617, "lon": 36.272856},
            "region_id": "110",
            "reviews": {
                "general_rating": 1,
                "general_review_count": 1,
                "is_reviewable": false,
                "is_reviewable_on_flamp": true,
                "items": [{"is_reviewable": true, "tag": "2gis_reviews"}, {"is_reviewable": true, "tag": "foursquare"}],
                "org_rating": 1,
                "org_review_count": 1
            },
            "rubrics": [{
                "alias": "avtoremont_i_tekhobsluzhivanie_sto",
                "id": "9041",
                "kind": "primary",
                "name": "Авторемонт и техобслуживание (СТО)",
                "parent_id": "42903",
                "short_id": 9041
            }, {
                "alias": "apparatnaya_zamena_masla",
                "id": "7900",
                "kind": "additional",
                "name": "Аппаратная замена масла",
                "parent_id": "42903",
                "short_id": 7900
            }, {
                "alias": "remont_khodovojj_chasti_avtomobilya",
                "id": "7691",
                "kind": "additional",
                "name": "Ремонт ходовой части автомобиля",
                "parent_id": "42903",
                "short_id": 7691
            }, {
                "alias": "remont_vykhlopnykh_sistem",
                "id": "52408",
                "kind": "additional",
                "name": "Ремонт выхлопных систем",
                "parent_id": "42903",
                "short_id": 52408
            }, {
                "alias": "razval_skhozhdenie",
                "id": "7690",
                "kind": "additional",
                "name": "Развал / Схождение",
                "parent_id": "42903",
                "short_id": 7690
            }, {
                "alias": "kuzovnojj_remont",
                "id": "7693",
                "kind": "additional",
                "name": "Кузовной ремонт",
                "parent_id": "42903",
                "short_id": 7693
            }, {
                "alias": "shinomontazh",
                "id": "7689",
                "kind": "additional",
                "name": "Шиномонтаж",
                "parent_id": "42903",
                "short_id": 7689
            }, {
                "alias": "tonirovanie_avtostjokol",
                "id": "413",
                "kind": "additional",
                "name": "Тонирование автостёкол",
                "parent_id": "42903",
                "short_id": 413
            }, {
                "alias": "tyuning",
                "id": "414",
                "kind": "additional",
                "name": "Тюнинг",
                "parent_id": "42903",
                "short_id": 414
            }, {
                "alias": "avtomojjki",
                "id": "405",
                "kind": "additional",
                "name": "Автомойки",
                "parent_id": "42903",
                "short_id": 405
            }, {
                "alias": "kompyuternaya_diagnostika_avtomobilejj",
                "id": "110362",
                "kind": "additional",
                "name": "Компьютерная диагностика автомобилей",
                "parent_id": "42903",
                "short_id": 110362
            }, {
                "alias": "remont_dizelnykh_dvigatelejj",
                "id": "7694",
                "kind": "additional",
                "name": "Ремонт дизельных двигателей",
                "parent_id": "42903",
                "short_id": 7694
            }, {
                "alias": "remont_benzinovykh_dvigatelejj",
                "id": "7695",
                "kind": "additional",
                "name": "Ремонт бензиновых двигателей",
                "parent_id": "42903",
                "short_id": 7695
            }, {
                "alias": "gazovoe_oborudovanie_dlya_avtotransporta",
                "id": "437",
                "kind": "additional",
                "name": "Газовое оборудование для автотранспорта",
                "parent_id": "42903",
                "short_id": 437
            }],
            "schedule": {
                "Fri": {"working_hours": [{"from": "09:00", "to": "18:00"}]},
                "Mon": {"working_hours": [{"from": "09:00", "to": "18:00"}]},
                "Sat": {"working_hours": [{"from": "09:00", "to": "14:00"}]},
                "Thu": {"working_hours": [{"from": "09:00", "to": "18:00"}]},
                "Tue": {"working_hours": [{"from": "09:00", "to": "18:00"}]},
                "Wed": {"working_hours": [{"from": "09:00", "to": "18:00"}]}
            },
            "segment_id": "0",
            "stat": {"adst": 1545113700, "is_advertised": true, "match_type": 4, "rubr": "9041", "source_type": 2},
            "timezone_offset": 120,
            "type": "branch",
            "hash": "oyD5wz47G4553113112GGGGGjr6vls26G6G774I7G23AG5H2rgewB42I2B6BG0I7032J9CGJz8p3uv56036A27AA8BHA174H77"
        }, {
            "address": {
                "building_id": "15481759374282198",
                "components": [{
                    "number": "4",
                    "street": "Лосевская",
                    "street_id": "15481862453462783",
                    "type": "street_number"
                }],
                "postcode": "61099"
            },
            "address_name": "Лосевская, 4",
            "adm_div": [{"name": "Харьковская область", "type": "region"}, {
                "id": "15481746489344121",
                "is_default": true,
                "name": "Харьков",
                "type": "city"
            }, {"id": "15481733604442127", "name": "Немышлянский район", "type": "district"}],
            "ads": {
                "article": "Наши преимущества  - это сочетание доступных цен, качества сервиса и работ и честное отношение к клиенту.<br />Наши услуги:<br />- Ремонт и обслуживание автомобилей и микроавтобусов;<br />- Автомойка;<br />- Автозапчасти,<br />- Шиномонтаж;<br />- Компьютерная диагностика авто.<br /><br />Наш Автокомпекс ориентирован на постоянных клиентов, и мы увеличиваем число таких клиентов, благодаря уровню обслуживания и индивидуальному подходу к каждому. А профессионализм наших специалистов является отличительной особенностью нашего автосервиса.<br />Также при покупке запчастей в нашем магазине мы даем комплексную гарантию на работу узла. Мы следим за рынком услуг СТО, изучаем и анализируем отзывы клиентов.<br /><br />И многое, многое другое. Позвоните и убедитесь что мы знаем свое дело!<br /><br />С уважением,администрация СТО «ТИСК»!",
                "text": "Качественный ремонт всех марок автомобилей с гарантией качества!",
                "options": {
                    "logo": {
                        "bg_color": "#398EBF",
                        "img_url": "https://ams2-cdn.2gis.com/previews/1028653710957346991/Rap3o2x6spSWTiExCcJYUfViIfrD82O/1/image.png",
                        "text_color": "#ffffff"
                    },
                    "actions": [{
                        "caption": "Подпишись на наш инстаграм",
                        "name": "Подпишись на наш инстаграм",
                        "platforms": ["online", "android", "ios"],
                        "type": "link",
                        "value": "http://link.2gis.ru/1.2/E9F97BD5/online/20181201/project110/70000001018587745/2gis.ru/oyD5wz47G4553113116GGGG1jr6vls26G6G774I7G266G6H2rgewB42I2B6BG1I7032J9CGJz8p3uv56036A286AA9HA174HH2d?https://www.instagram.com/autotisk/?utm_source=ig_profile_share&igshid=1fkd2fi67h11l"
                    }]
                }
            },
            "attribute_groups": [{
                "attributes": [{
                    "name": "Комплексная мойка от 150 ₴",
                    "tag": "carwash_price"
                }, {"name": "Бесконтактная мойка", "tag": "carwash_contactless"}, {
                    "name": "Химчистка салона",
                    "tag": "carwash_chemical"
                }, {"name": "Мойка двигателя", "tag": "carwash_engine"}, {
                    "name": "Мойка днища",
                    "tag": "carwash_bottom"
                }, {"name": "Полировка кузова", "tag": "carwash_protective_polish"}, {
                    "name": "До 5 машин",
                    "tag": "carwash_box_count"
                }, {"name": "Возможна запись", "tag": "carwash_appontment_booking"}, {
                    "name": "Зал ожидания",
                    "tag": "carwash_cafe"
                }],
                "icon_url": "http://disk.2gis.com/rubricator/carwash3b5dfcef6ead5d8b7062a403c5d6a7ba.svg",
                "is_context": false,
                "is_primary": true,
                "name": "Автомойка",
                "rubric_ids": ["405"]
            }, {
                "attributes": [{"name": "Сезонное хранение", "tag": "tire_storage"}, {
                    "name": "Возможна запись",
                    "tag": "tire_prerecord"
                }, {"name": "Ремонт порезов", "tag": "tire_repair_lateral_cuts"}],
                "is_context": false,
                "is_primary": true,
                "name": "Шиномонтаж",
                "rubric_ids": ["7689"]
            }, {
                "attributes": [{"name": "Наличный расчёт", "tag": "general_payment_type_cash"}],
                "is_context": false,
                "is_primary": false,
                "name": "Способы оплаты",
                "rubric_ids": []
            }, {
                "attributes": [{"name": "Wi-Fi", "tag": "wifi_wifi"}],
                "is_context": false,
                "is_primary": true,
                "rubric_ids": ["652", "405", "165", "547", "161", "173", "162", "15791", "164", "51459", "159", "52681", "7689", "305", "110998"]
            }],
            "contact_groups": [{
                "contacts": [{
                    "type": "phone",
                    "text": "+380 96‒979‒74‒67",
                    "value": "+380969797467"
                }, {"type": "phone", "text": "+380 50‒302‒08‒00", "value": "+380503020800"}, {
                    "type": "phone",
                    "text": "+380 68‒989‒83‒68",
                    "value": "+380689898368"
                }, {
                    "type": "phone",
                    "text": "+380 68‒523‒08‒07",
                    "value": "+380685230807",
                    "comment": "автомойка"
                }, {
                    "type": "phone",
                    "text": "+380 63‒298‒10‒92",
                    "value": "+380632981092",
                    "comment": "автомойка"
                }, {
                    "type": "instagram",
                    "text": "https://instagram.com/autotisk",
                    "value": "https://instagram.com/autotisk",
                    "url": "https://instagram.com/autotisk"
                }]
            }],
            "external_content": [{
                "count": 17,
                "main_photo_url": "https://i5.photo.2gis.com/main/branch/110/70000001018587745/common",
                "subtype": "common",
                "type": "photo_album"
            }],
            "flags": {"photos": true},
            "full_name": "Харьков, Лосевская, 4",
            "geometry": {"centroid": "POINT(36.358402 49.959686)"},
            "group": [{"id": "15481759374282198", "type": "building"}],
            "id": "70000001018587745",
            "name": "Тиск, автосервис",
            "name_ex": {"extension": "автосервис", "primary": "Тиск"},
            "org": {"branch_count": 1, "id": "70000001018587744", "name": "Тиск, автосервис"},
            "point": {"lat": 49.959572, "lon": 36.35837},
            "purpose_name": "Автосервис",
            "region_id": "110",
            "reviews": {
                "general_rating": 5,
                "general_review_count": 1,
                "is_reviewable": false,
                "is_reviewable_on_flamp": true,
                "items": [{"is_reviewable": true, "tag": "2gis_reviews"}, {"is_reviewable": true, "tag": "foursquare"}],
                "org_rating": 5,
                "org_review_count": 1
            },
            "rubrics": [{
                "alias": "avtoremont_i_tekhobsluzhivanie_sto",
                "id": "9041",
                "kind": "primary",
                "name": "Авторемонт и техобслуживание (СТО)",
                "parent_id": "42903",
                "short_id": 9041
            }, {
                "alias": "shinomontazh",
                "id": "7689",
                "kind": "primary",
                "name": "Шиномонтаж",
                "parent_id": "42903",
                "short_id": 7689
            }, {
                "alias": "avtomojjki",
                "id": "405",
                "kind": "primary",
                "name": "Автомойки",
                "parent_id": "42903",
                "short_id": 405
            }, {
                "alias": "remont_benzinovykh_dvigatelejj",
                "id": "7695",
                "kind": "additional",
                "name": "Ремонт бензиновых двигателей",
                "parent_id": "42903",
                "short_id": 7695
            }, {
                "alias": "remont_mkpp",
                "id": "110363",
                "kind": "additional",
                "name": "Ремонт МКПП",
                "parent_id": "42903",
                "short_id": 110363
            }, {
                "alias": "kompyuternaya_diagnostika_avtomobilejj",
                "id": "110362",
                "kind": "additional",
                "name": "Компьютерная диагностика автомобилей",
                "parent_id": "42903",
                "short_id": 110362
            }, {
                "alias": "avtozapchasti_dlya_legkovykh_avtomobilejj",
                "id": "54884",
                "kind": "additional",
                "name": "Автозапчасти для легковых автомобилей",
                "parent_id": "42903",
                "short_id": 54884
            }, {
                "alias": "remont_khodovojj_chasti_avtomobilya",
                "id": "7691",
                "kind": "additional",
                "name": "Ремонт ходовой части автомобиля",
                "parent_id": "42903",
                "short_id": 7691
            }],
            "schedule": {
                "Fri": {"working_hours": [{"from": "08:30", "to": "18:30"}]},
                "Mon": {"working_hours": [{"from": "08:30", "to": "18:30"}]},
                "Sat": {"working_hours": [{"from": "09:00", "to": "16:00"}]},
                "Thu": {"working_hours": [{"from": "08:30", "to": "18:30"}]},
                "Tue": {"working_hours": [{"from": "08:30", "to": "18:30"}]},
                "Wed": {"working_hours": [{"from": "08:30", "to": "18:30"}]}
            },
            "segment_id": "0",
            "stat": {"adst": 1545113700, "is_advertised": true, "match_type": 4, "rubr": "9041", "source_type": 2},
            "timezone_offset": 120,
            "type": "branch",
            "hash": "oyD5wz47G4553113112GGGGGjr6vls26G6G774I7G266G6H2rgewB42I2B6BG0I7032J9CGJz8p3uv56036A286AA9HA174H3e"
        }, {
            "address": {
                "building_id": "15481759374288143",
                "components": [{
                    "number": "226а",
                    "street": "Шевченко",
                    "street_id": "15481862453461181",
                    "type": "street_number"
                }],
                "postcode": "61033"
            },
            "address_name": "Шевченко, 226а",
            "adm_div": [{"name": "Харьковская область", "type": "region"}, {
                "id": "15481746489344121",
                "is_default": true,
                "name": "Харьков",
                "type": "city"
            }, {"id": "15481733604442125", "name": "Киевский район", "type": "district"}],
            "ads": {
                "article": "Всегда к Вашим услугам:<br />•&nbsp;Регламентное техническое обслуживание;<br />•&nbsp;диагностика и ремонт агрегатов (Двигатель, КПП, АКПП);<br />•&nbsp;ремонт ходовой части;<br />•&nbsp;ремонт двмгателей;<br />•&nbsp;3D Развал-схождение;<br />•&nbsp;автозапчасти в наличии и под заказ;<br />•&nbsp;антибактериальная чистка системы кондиционирования;<br />•&nbsp;комплексная диагностика автомобиля;<br />•&nbsp;компьютерная диагностика и чип-тюнинг;<br />•&nbsp;шиномонтаж и балансировка колес;<br />•&nbsp;промывка инжекторов;<br />•&nbsp;диагностика и ремонт электрооборудования;<br />•&nbsp;диагностика, обслуживание и ремонт кондиционеров;<br />•&nbsp;установка сигнализаций, парктроников и другого дополнительного оборудования.<br />Профессиональный сервис и гарантия на все проводимые работы.",
                "text": "Гарантированный, качественный ремонт автомобилей.",
                "options": {
                    "logo": {
                        "bg_color": "#2A346A",
                        "img_url": "https://ams2-cdn.2gis.com/previews/1028653414814318767/-CH37Z-7z9Lguec4I0g8uNJMyfbnNH./1/image.png",
                        "text_color": "#ffffff"
                    },
                    "actions": [{
                        "caption": "Наш сайт",
                        "name": "Наш сайт",
                        "platforms": ["online", "android", "ios"],
                        "type": "link",
                        "value": "http://link.2gis.ru/1.2/45EB82BE/online/20181201/project110/70000001018965089/2gis.ru/oyD5wz47G4553113116GGGG1jr6vls26G6G774I7G2AAG7H2rgewB42I2B6BG1I7032J9CGJz8p3uv56036A28A882HA174HH1f?https://auto-sokol.com.ua"
                    }]
                }
            },
            "attribute_groups": [{
                "attributes": [{
                    "name": "Расчёт по картам",
                    "tag": "general_payment_type_card"
                }, {"name": "Наличный расчёт", "tag": "general_payment_type_cash"}, {
                    "name": "Оплата через банк",
                    "tag": "general_payment_type_bank"
                }], "is_context": false, "is_primary": false, "name": "Способы оплаты", "rubric_ids": []
            }, {
                "attributes": [{"name": "Chevrolet", "tag": "car_repair_brands_Chevrolet"}, {
                    "name": "Daewoo",
                    "tag": "car_repair_brands_Daewoo"
                }, {"name": "Hyundai", "tag": "car_repair_brands_Hyundai"}, {
                    "name": "KIA",
                    "tag": "car_repair_brands_KIA"
                }],
                "icon_url": "http://disk.2gis.com/rubricator/car_repairc11263337e0283a18061c69879fa366f.svg",
                "is_context": true,
                "is_primary": true,
                "name": "Авторемонт",
                "rubric_ids": ["9041"]
            }, {
                "attributes": [{"name": "Chevrolet", "tag": "car_brand_spare_parts_chevrolet"}, {
                    "name": "Daewoo",
                    "tag": "car_brand_spare_parts_daewoo"
                }, {"name": "Hyundai", "tag": "car_brand_spare_parts_hyundai"}, {
                    "name": "KIA",
                    "tag": "car_brand_spare_parts_kia"
                }],
                "is_context": false,
                "is_primary": false,
                "name": "Марки легковых запчастей",
                "rubric_ids": ["54884"]
            }, {
                "attributes": [{"name": "Розница", "tag": "type_of_business_type_retail"}],
                "is_context": false,
                "is_primary": false,
                "name": "Тип предприятия",
                "rubric_ids": ["377", "604", "400", "425", "1141", "525", "404", "426", "993", "110445", "645", "360", "361", "435", "686", "19119", "511", "1108", "53116", "1182", "208", "379", "362", "809", "14426", "631", "9972", "582", "280", "580", "354", "10291", "53266", "13648", "10566", "13100", "609", "567", "605", "768", "606", "937", "594", "50871", "110302", "3237", "8740", "380", "346", "67041", "381", "538", "579", "19505", "10458", "181", "524", "575", "382", "13102", "53986", "805", "285", "777", "56265", "5272", "16614", "593", "53054", "574", "698", "351", "785", "773", "658", "9973", "51905", "504", "355", "551", "643", "612", "4484", "573", "562", "712", "54452", "287", "353", "50084", "556", "1234", "356", "564", "47773", "15769", "110390", "52236", "632", "688", "185", "5843", "9776", "940", "352", "626", "10274", "548", "281", "109318", "624", "766", "7591", "110393", "613", "590", "996", "392", "396", "610", "54001", "51362", "102043", "475", "366", "397", "291", "110484", "528", "591", "110381", "489", "598", "505", "358", "607", "47105", "61066", "1233", "659", "292", "583", "16623", "9777", "510", "526", "578", "7669", "293", "508", "12178", "5269", "53139", "345", "71642", "259", "15502", "110333", "555", "540", "1237", "635", "503", "398", "389", "10902", "558", "390", "615", "359", "509", "19745", "110347", "502", "599", "459", "462", "461", "391", "210", "211", "51105", "16968", "16212", "110482", "408", "677", "697", "53304", "644", "110516", "436", "110512", "1549", "1196", "110434", "16498", "9228", "52971", "378", "627", "7988", "14488", "14444", "447", "1074", "641", "69342", "46726", "657", "437", "451", "1242", "110455", "7666", "671", "12127", "513", "110649", "21616", "438", "705", "18978", "51883", "375", "8199", "282", "7960", "421", "283", "568", "13161", "8466", "110394", "16397", "1269", "625", "1558", "16610", "18658", "52256", "589", "639", "7579", "110506", "58621", "50067", "654", "55540", "277", "595", "1055", "585", "394", "50850", "395", "1197", "719", "347", "278", "4480", "110486", "21448", "4385", "1556", "363", "110518", "596", "563", "110306", "55727", "690", "670", "56516", "669", "9629", "5276", "284", "52151", "209", "3231", "110337", "102001", "549", "7949", "945", "44938", "523", "807", "1128", "52187", "660", "448", "50841", "51202", "473", "614", "655", "71648", "110370", "557", "469", "429", "99202", "7662", "110325", "450", "584", "834", "54067", "554", "411", "16814", "10905", "52243", "54409", "776", "53975", "21516", "99209", "103934", "8743", "29502", "13410", "439", "618", "58828", "110435", "531", "1614", "440", "442", "52184", "443", "8065", "14190", "1616", "70039", "1206", "441", "5798", "444", "57185", "24109", "446", "51746", "1248", "799", "110446", "288", "102029", "110334", "936", "9822", "519", "1617", "325", "51009", "372", "786", "22831", "17017", "541", "110361", "128", "452", "53596", "110517", "691", "22370", "51214", "52968", "1559", "665", "21497", "53833", "428", "53267", "600", "110350", "431", "24504", "53982", "55723", "10351", "561", "1273", "21493", "16400", "602", "54649", "110652", "453", "24468", "463", "4420", "464", "12249", "110436", "4497", "174", "559", "383", "656", "57364", "9102", "1667", "3236", "385", "4383", "319", "25194", "15616", "802", "110454", "13406", "879", "110464", "54616", "454", "433", "18471", "501", "10377", "432", "59511", "696", "764", "53061", "640", "242", "24184", "110401", "7406", "1073", "19490", "102026", "49784", "110456", "16491", "55875", "935", "925", "110372", "110299", "387", "24392", "521", "11919", "530", "110451", "58634", "384", "51414", "58849", "110495", "58633", "54450", "47338", "47342", "1241", "490", "110480", "50840", "56108", "348", "623", "110420", "10904", "388", "544", "457", "616", "110443", "458", "427", "110404", "674", "67128", "399", "592", "50076", "110324", "5266", "350", "373", "642", "774", "3232", "16199", "110528", "110529", "54884"]
            }],
            "contact_groups": [{
                "contacts": [{
                    "type": "phone",
                    "text": "+380 99‒149‒55‒19",
                    "value": "+380991495519"
                }, {"type": "phone", "text": "+380 63‒480‒31‒23", "value": "+380634803123"}, {
                    "type": "phone",
                    "text": "+380 96‒811‒28‒02",
                    "value": "+380968112802"
                }, {
                    "type": "website",
                    "text": "auto-sokol.com.ua",
                    "value": "http://link.2gis.ru/1.2/2D204552/online/20181201/project110/70000001018965089/2gis.ru/oyD5wz47G4553113116GGGGGjr6vls26G6G774I7G2AAG7H2rgewB42I2B6BG1I7032J9CGJz8p3uv56036A28A882HA174H82?http://auto-sokol.com.ua",
                    "url": "http://auto-sokol.com.ua"
                }, {"type": "email", "text": "info@auto-sokol.com.ua", "value": "info@auto-sokol.com.ua"}]
            }],
            "external_content": [{
                "count": 23,
                "main_photo_url": "https://i9.photo.2gis.com/main/branch/110/70000001018965089/common",
                "subtype": "common",
                "type": "photo_album"
            }, {
                "count": 1,
                "main_photo_url": "https://i3.photo.2gis.com/main/geo/110/15481759374288143/view",
                "subtype": "view",
                "type": "photo_album"
            }],
            "flags": {"photos": true},
            "full_name": "Харьков, Шевченко, 226а",
            "geometry": {"centroid": "POINT(36.287677 50.012036)"},
            "group": [{"id": "15481759374288143", "type": "building"}],
            "id": "70000001018965089",
            "name": "Сокол, автосервисный центр",
            "name_ex": {"extension": "автосервисный центр", "primary": "Сокол"},
            "org": {"branch_count": 1, "id": "70000001018965088", "name": "Сокол, автосервисный центр"},
            "point": {"lat": 50.01202, "lon": 36.287585},
            "purpose_name": "Автосервис",
            "region_id": "110",
            "reviews": {
                "general_rating": 4,
                "general_review_count": 12,
                "is_reviewable": false,
                "is_reviewable_on_flamp": true,
                "items": [{"is_reviewable": true, "tag": "2gis_reviews"}, {
                    "is_reviewable": true,
                    "review_count": 1,
                    "tag": "foursquare"
                }],
                "org_rating": 4,
                "org_review_count": 12
            },
            "rubrics": [{
                "alias": "avtoremont_i_tekhobsluzhivanie_sto",
                "id": "9041",
                "kind": "primary",
                "name": "Авторемонт и техобслуживание (СТО)",
                "parent_id": "42903",
                "short_id": 9041
            }, {
                "alias": "remont_khodovojj_chasti_avtomobilya",
                "id": "7691",
                "kind": "primary",
                "name": "Ремонт ходовой части автомобиля",
                "parent_id": "42903",
                "short_id": 7691
            }, {
                "alias": "remont_benzinovykh_dvigatelejj",
                "id": "7695",
                "kind": "primary",
                "name": "Ремонт бензиновых двигателей",
                "parent_id": "42903",
                "short_id": 7695
            }, {
                "alias": "avtozapchasti_dlya_legkovykh_avtomobilejj",
                "id": "54884",
                "kind": "additional",
                "name": "Автозапчасти для легковых автомобилей",
                "parent_id": "42903",
                "short_id": 54884
            }, {
                "alias": "razval_skhozhdenie",
                "id": "7690",
                "kind": "additional",
                "name": "Развал / Схождение",
                "parent_id": "42903",
                "short_id": 7690
            }, {
                "alias": "shinomontazh",
                "id": "7689",
                "kind": "additional",
                "name": "Шиномонтаж",
                "parent_id": "42903",
                "short_id": 7689
            }, {
                "alias": "ustanovka_remont_avtomobilnojj_optiki",
                "id": "110365",
                "kind": "additional",
                "name": "Установка / ремонт автомобильной оптики",
                "parent_id": "42903",
                "short_id": 110365
            }, {
                "alias": "kompyuternaya_diagnostika_avtomobilejj",
                "id": "110362",
                "kind": "additional",
                "name": "Компьютерная диагностика автомобилей",
                "parent_id": "42903",
                "short_id": 110362
            }, {
                "alias": "avtosignalizacii",
                "id": "408",
                "kind": "additional",
                "name": "Автосигнализации",
                "parent_id": "42903",
                "short_id": 408
            }, {
                "alias": "remont_mkpp",
                "id": "110363",
                "kind": "additional",
                "name": "Ремонт МКПП",
                "parent_id": "42903",
                "short_id": 110363
            }, {
                "alias": "remont_akpp",
                "id": "412",
                "kind": "additional",
                "name": "Ремонт АКПП",
                "parent_id": "42903",
                "short_id": 412
            }, {
                "alias": "remont_obsluzhivanie_klimaticheskikh_sistem_avtomobilya",
                "id": "7697",
                "kind": "additional",
                "name": "Ремонт / обслуживание климатических систем автомобиля",
                "parent_id": "42903",
                "short_id": 7697
            }],
            "schedule": {
                "Fri": {"working_hours": [{"from": "09:00", "to": "19:00"}]},
                "Mon": {"working_hours": [{"from": "09:00", "to": "19:00"}]},
                "Sat": {"working_hours": [{"from": "09:00", "to": "19:00"}]},
                "Thu": {"working_hours": [{"from": "09:00", "to": "19:00"}]},
                "Tue": {"working_hours": [{"from": "09:00", "to": "19:00"}]},
                "Wed": {"working_hours": [{"from": "09:00", "to": "19:00"}]}
            },
            "segment_id": "0",
            "stat": {"adst": 1545113700, "is_advertised": true, "match_type": 4, "rubr": "9041", "source_type": 2},
            "timezone_offset": 120,
            "type": "branch",
            "hash": "oyD5wz47G4553113112GGGGGjr6vls26G6G774I7G2AAG7H2rgewB42I2B6BG0I7032J9CGJz8p3uv56036A28A882HA174H84"
        }, {
            "address": {
                "building_id": "15481759374250691",
                "components": [{
                    "number": "21",
                    "street": "Куликовская",
                    "street_id": "15481862453461153",
                    "type": "street_number"
                }],
                "postcode": "61002"
            },
            "address_comment": "1 этаж",
            "address_name": "Куликовская, 21",
            "adm_div": [{"name": "Харьковская область", "type": "region"}, {
                "id": "15481746489344121",
                "is_default": true,
                "name": "Харьков",
                "type": "city"
            }, {"id": "15481733604442125", "name": "Киевский район", "type": "district"}],
            "ads": {
                "article": "На нашем СТО Вас ждет широкий спектр услуг:<br /><br />•&nbsp; диагностика и ремонт ходовой части автомобиля;<br />•&nbsp; реставрация шаровых опор с гарантией;<br />•&nbsp; восстановление (проточка) тормозных дисков;<br />•&nbsp; регулировка углов установки колес (развал);<br />•&nbsp; диагностика и ремонт бензиновых двигателей;<br />•&nbsp; диагностика и ремонт топливной системы;<br />•&nbsp; компьютерная диагностика автомобилей всех марок;<br />•&nbsp; ремонт электрики;<br />•&nbsp; ремонт и заправка автомобильных кондиционеров.<br /><br />На все предоставленные услуги мы даем гарантию!",
                "text": "Ремонт и реставрация ходовой, моторов и электрики авто всех марок!",
                "options": {
                    "logo": {
                        "bg_color": "#071954",
                        "img_url": "https://ams2-cdn.2gis.com/previews/1031616009804447976/mFpz3GrUjkGyUEyCB66tqGPdM1s0OBB/1/image.png",
                        "text_color": "#ffffff"
                    }
                }
            },
            "attribute_groups": [{
                "attributes": [{
                    "name": "Наличный расчёт",
                    "tag": "general_payment_type_cash"
                }, {"name": "Оплата через банк", "tag": "general_payment_type_bank"}],
                "is_context": false,
                "is_primary": false,
                "name": "Способы оплаты",
                "rubric_ids": []
            }, {
                "attributes": [{"name": "LADA (ВАЗ)", "tag": "car_repair_brands_LADA"}, {
                    "name": "Acura",
                    "tag": "car_repair_brands_Acura"
                }, {"name": "Lancia", "tag": "car_repair_brands_Lancia"}, {
                    "name": "Alfa Romeo",
                    "tag": "car_repair_brands_Alfa_Romeo"
                }, {"name": "Land Rover", "tag": "car_repair_brands_Land_Rover"}, {
                    "name": "Lexus",
                    "tag": "car_repair_brands_Lexus"
                }, {"name": "Audi", "tag": "car_repair_brands_Audi"}, {
                    "name": "Lincoln",
                    "tag": "car_repair_brands_Lincoln"
                }, {"name": "BMW", "tag": "car_repair_brands_BMW"}, {
                    "name": "Mazda",
                    "tag": "car_repair_brands_Mazda"
                }, {"name": "Mercedes-Benz", "tag": "car_repair_brands_Mercedes_Benz"}, {
                    "name": "MINI",
                    "tag": "car_repair_brands_MINI"
                }, {"name": "Mitsubishi", "tag": "car_repair_brands_Mitsubishi"}, {
                    "name": "Nissan",
                    "tag": "car_repair_brands_Nissan"
                }, {"name": "BYD", "tag": "car_repair_brands_BYD"}, {
                    "name": "Opel",
                    "tag": "car_repair_brands_Opel"
                }, {"name": "Peugeot", "tag": "car_repair_brands_Peugeot"}, {
                    "name": "Porsche",
                    "tag": "car_repair_brands_Porsche"
                }, {"name": "Renault", "tag": "car_repair_brands_Renault"}, {
                    "name": "Cadillac",
                    "tag": "car_repair_brands_Cadillac"
                }, {"name": "Rover", "tag": "car_repair_brands_Rover"}, {
                    "name": "Saab",
                    "tag": "car_repair_brands_Saab"
                }, {"name": "Chery", "tag": "car_repair_brands_Chery"}, {
                    "name": "SEAT",
                    "tag": "car_repair_brands_SEAT"
                }, {"name": "Skoda", "tag": "car_repair_brands_Skoda"}, {
                    "name": "Chevrolet",
                    "tag": "car_repair_brands_Chevrolet"
                }, {"name": "Smart", "tag": "car_repair_brands_Smart"}, {
                    "name": "Chrysler",
                    "tag": "car_repair_brands_Chrysler"
                }, {"name": "Subaru", "tag": "car_repair_brands_Subaru"}, {
                    "name": "Citroen",
                    "tag": "car_repair_brands_Citroen"
                }, {"name": "Suzuki", "tag": "car_repair_brands_Suzuki"}, {
                    "name": "Dacia",
                    "tag": "car_repair_brands_dacia"
                }, {"name": "Daewoo", "tag": "car_repair_brands_Daewoo"}, {
                    "name": "Toyota",
                    "tag": "car_repair_brands_Toyota"
                }, {"name": "Volkswagen", "tag": "car_repair_brands_Volkswagen"}, {
                    "name": "Volvo",
                    "tag": "car_repair_brands_Volvo"
                }, {"name": "Daihatsu", "tag": "car_repair_brands_Daihatsu"}, {
                    "name": "Dodge",
                    "tag": "car_repair_brands_Dodge"
                }, {"name": "Fiat", "tag": "car_repair_brands_Fiat"}, {
                    "name": "Ford",
                    "tag": "car_repair_brands_Ford"
                }, {"name": "Geely", "tag": "car_repair_brands_Geely"}, {
                    "name": "GMC",
                    "tag": "car_repair_brands_GMC"
                }, {"name": "Great Wall", "tag": "car_repair_brands_Great_Wall"}, {
                    "name": "Honda",
                    "tag": "car_repair_brands_Honda"
                }, {"name": "Hummer", "tag": "car_repair_brands_Hummer"}, {
                    "name": "Hyundai",
                    "tag": "car_repair_brands_Hyundai"
                }, {"name": "Infiniti", "tag": "car_repair_brands_Infiniti"}, {
                    "name": "Jaguar",
                    "tag": "car_repair_brands_Jaguar"
                }, {"name": "Jeep", "tag": "car_repair_brands_Jeep"}, {"name": "KIA", "tag": "car_repair_brands_KIA"}],
                "icon_url": "http://disk.2gis.com/rubricator/car_repairc11263337e0283a18061c69879fa366f.svg",
                "is_context": true,
                "is_primary": true,
                "name": "Авторемонт",
                "rubric_ids": ["9041"]
            }],
            "contact_groups": [{
                "contacts": [{
                    "type": "phone",
                    "text": "+380 (57) 758‒42‒65",
                    "value": "+380577584265"
                }, {"type": "phone", "text": "+380 50‒302‒12‒68", "value": "+380503021268"}, {
                    "type": "website",
                    "text": "stokharkov.com",
                    "value": "http://link.2gis.ru/1.2/07789BAA/online/20181201/project110/70000001018505477/2gis.ru/oyD5wz47G4553113116GGGGGjr6vls26G6G774I7G298G8H2rgewB42I2B6BG1I7032J9CGJz8p3uv56036A286286HA174Hed?http://stokharkov.com",
                    "url": "http://stokharkov.com"
                }, {"type": "email", "text": "yegorrus13@gmail.com", "value": "yegorrus13@gmail.com"}]
            }],
            "external_content": [],
            "id": "70000001018505477",
            "name": "Штурман, СТО",
            "name_ex": {"extension": "СТО", "primary": "Штурман"},
            "org": {"branch_count": 1, "id": "70000001018505476", "name": "Штурман, СТО"},
            "point": {"lat": 49.993509, "lon": 36.241444},
            "region_id": "110",
            "reviews": {
                "general_rating": 0,
                "general_review_count": 1,
                "is_reviewable": false,
                "is_reviewable_on_flamp": true,
                "items": [{"is_reviewable": true, "tag": "2gis_reviews"}, {
                    "is_reviewable": true,
                    "review_count": 1,
                    "tag": "foursquare"
                }],
                "org_rating": 0,
                "org_review_count": 1
            },
            "rubrics": [{
                "alias": "avtoremont_i_tekhobsluzhivanie_sto",
                "id": "9041",
                "kind": "primary",
                "name": "Авторемонт и техобслуживание (СТО)",
                "parent_id": "42903",
                "short_id": 9041
            }, {
                "alias": "razval_skhozhdenie",
                "id": "7690",
                "kind": "primary",
                "name": "Развал / Схождение",
                "parent_id": "42903",
                "short_id": 7690
            }, {
                "alias": "kompyuternaya_diagnostika_avtomobilejj",
                "id": "110362",
                "kind": "additional",
                "name": "Компьютерная диагностика автомобилей",
                "parent_id": "42903",
                "short_id": 110362
            }, {
                "alias": "remont_obsluzhivanie_klimaticheskikh_sistem_avtomobilya",
                "id": "7697",
                "kind": "additional",
                "name": "Ремонт / обслуживание климатических систем автомобиля",
                "parent_id": "42903",
                "short_id": 7697
            }, {
                "alias": "remont_khodovojj_chasti_avtomobilya",
                "id": "7691",
                "kind": "additional",
                "name": "Ремонт ходовой части автомобиля",
                "parent_id": "42903",
                "short_id": 7691
            }, {
                "alias": "remont_avtoehlektriki",
                "id": "7692",
                "kind": "additional",
                "name": "Ремонт автоэлектрики",
                "parent_id": "42903",
                "short_id": 7692
            }, {
                "alias": "remont_benzinovykh_dvigatelejj",
                "id": "7695",
                "kind": "additional",
                "name": "Ремонт бензиновых двигателей",
                "parent_id": "42903",
                "short_id": 7695
            }, {
                "alias": "remont_karbyuratorov_inzhektorov",
                "id": "7699",
                "kind": "additional",
                "name": "Ремонт карбюраторов / инжекторов",
                "parent_id": "42903",
                "short_id": 7699
            }, {
                "alias": "remont_mkpp",
                "id": "110363",
                "kind": "additional",
                "name": "Ремонт МКПП",
                "parent_id": "42903",
                "short_id": 110363
            }, {
                "alias": "remont_akpp",
                "id": "412",
                "kind": "additional",
                "name": "Ремонт АКПП",
                "parent_id": "42903",
                "short_id": 412
            }],
            "schedule": {
                "Fri": {"working_hours": [{"from": "10:00", "to": "18:00"}]},
                "Mon": {"working_hours": [{"from": "10:00", "to": "18:00"}]},
                "Sat": {"working_hours": [{"from": "10:00", "to": "18:00"}]},
                "Thu": {"working_hours": [{"from": "10:00", "to": "18:00"}]},
                "Tue": {"working_hours": [{"from": "10:00", "to": "18:00"}]},
                "Wed": {"working_hours": [{"from": "10:00", "to": "18:00"}]},
                "comment": "по предварительной записи: сб"
            },
            "segment_id": "0",
            "stat": {"adst": 1545113700, "is_advertised": true, "match_type": 4, "rubr": "9041", "source_type": 2},
            "timezone_offset": 120,
            "type": "branch",
            "hash": "oyD5wz47G4553113112GGGGGjr6vls26G6G774I7G298G8H2rgewB42I2B6BG0I7032J9CGJz8p3uv56036A286286HA174H8g"
        }, {
            "address": {
                "building_id": "15481759374287284",
                "components": [{
                    "number": "334",
                    "street": "Шевченко",
                    "street_id": "15481862453461181",
                    "type": "street_number"
                }],
                "postcode": "61070"
            },
            "address_name": "Шевченко, 334",
            "adm_div": [{"name": "Харьковская область", "type": "region"}, {
                "name": "Харьковский городской совет",
                "type": "district_area"
            }, {
                "id": "15481746489344121",
                "is_default": true,
                "name": "Харьков",
                "type": "city"
            }, {"id": "15481733604442125", "name": "Киевский район", "type": "district"}],
            "ads": {
                "article": "Наш центр работает в городе с 2005 года.<br />Следуя главному принципу компании &laquo;постоянное совершенствование&raquo;, центр стал одним из лучших сначала в регионе, а потом в Украине. Среди ценителей японского автомобильного концерна прочно закрепилась ассоциация: &laquo;говорим Тойота &mdash; подразумеваем &ldquo;Автоарт&rdquo;&raquo;<br /><br />Официальный дилер Toyota в Харькове. Продажа, сервис, гарантийное обслуживание автомобилей в Toyota Центр предлагает широкий ассортимент автомобилей.<br /><br />В 2008 году Тойота центр открыли новый 3S концептуальный сервисный центр, являющийся одной из наиболее уникальных станций по сервисному обслуживанию автомобилей марки Toyota, качество работы которой оценили уже более 6000 постоянных клиентов.<br /><br />Главным преимуществом сервисного обслуживания автомобилей на станции является установка оригинальных деталей, на которые действует гарантия 1 год, вне зависимости от общей гарантии, при условии приобретения деталей в сервисном центре.",
                "text": "Оригинальные запчасти для автомобилей Toyota  с гарантией 1 год",
                "options": {
                    "logo": {
                        "bg_color": "#FFFFFF",
                        "img_url": "https://ams2-cdn.2gis.com/previews/1029452962730082536/vPKLn.1tct.2WkYMQt8sDh15m39PLIQ/1/image.png",
                        "text_color": "#000000"
                    },
                    "actions": [{
                        "caption": "Записаться на сейчас",
                        "name": "Записаться на сейчас",
                        "platforms": ["online", "android", "ios"],
                        "type": "link",
                        "value": "http://link.2gis.ru/1.2/7B0034C5/online/20181201/project110/70000001018222881/2gis.ru/oyD5wz47G4553113116GGGG1jr6vls26G6G774I7G2A2G9H2rgewB42I2B6BG1I7032J9CGJz8p3uv56036A28345AHA174HHc7?https://www.toyota.kh.ua/"
                    }]
                }
            },
            "attribute_groups": [{
                "attributes": [{
                    "name": "Toyota",
                    "tag": "car_sale_brand_toyota"
                }, {"name": "Trade-in", "tag": "car_sale_types_trade_in"}, {
                    "name": "Новые автомобили",
                    "tag": "car_sale_types_new"
                }, {"name": "Тест-драйв", "tag": "car_sale_service_test_drive"}],
                "is_context": false,
                "is_primary": true,
                "name": "Продажа легковых автомобилей",
                "rubric_ids": ["431"]
            }, {
                "attributes": [{
                    "name": "Наличный расчёт",
                    "tag": "general_payment_type_cash"
                }, {"name": "Оплата через банк", "tag": "general_payment_type_bank"}],
                "is_context": false,
                "is_primary": false,
                "name": "Способы оплаты",
                "rubric_ids": []
            }, {
                "attributes": [{"name": "Toyota", "tag": "car_repair_brands_Toyota"}],
                "icon_url": "http://disk.2gis.com/rubricator/car_repairc11263337e0283a18061c69879fa366f.svg",
                "is_context": true,
                "is_primary": true,
                "name": "Авторемонт",
                "rubric_ids": ["9041"]
            }, {
                "attributes": [{"name": "Toyota", "tag": "car_brand_spare_parts_toyota"}],
                "is_context": false,
                "is_primary": true,
                "name": "Марки легковых запчастей",
                "rubric_ids": ["54884"]
            }],
            "contact_groups": [{
                "contacts": [{
                    "type": "phone",
                    "text": "+380 (57) 763‒22‒22",
                    "value": "+380577632222"
                }, {
                    "type": "website",
                    "text": "toyota.kh.ua",
                    "value": "http://link.2gis.ru/1.2/0C650089/online/20181201/project110/70000001018222881/2gis.ru/oyD5wz47G4553113116GGGGGjr6vls26G6G774I7G2A2G9H2rgewB42I2B6BG1I7032J9CGJz8p3uv56036A28345AHA174H96?http://toyota.kh.ua",
                    "url": "http://toyota.kh.ua"
                }, {
                    "type": "facebook",
                    "text": "https://facebook.com/toyota.avtoart",
                    "value": "https://facebook.com/toyota.avtoart",
                    "url": "https://facebook.com/toyota.avtoart"
                }]
            }],
            "external_content": [{
                "count": 3,
                "main_photo_url": "https://i1.photo.2gis.com/main/branch/110/70000001018222881/common",
                "subtype": "common",
                "type": "photo_album"
            }],
            "flags": {"photos": true},
            "id": "70000001018222881",
            "name": "Автоарт, официальный дилер Toyota",
            "name_ex": {"extension": "официальный дилер Toyota", "primary": "Автоарт"},
            "org": {"branch_count": 1, "id": "70000001018222880", "name": "Автоарт, официальный дилер Toyota"},
            "point": {"lat": 50.02725, "lon": 36.301256},
            "region_id": "110",
            "reviews": {
                "is_reviewable": false,
                "is_reviewable_on_flamp": true,
                "items": [{"is_reviewable": true, "tag": "2gis_reviews"}, {"is_reviewable": true, "tag": "foursquare"}]
            },
            "rubrics": [{
                "alias": "avtoremont_i_tekhobsluzhivanie_sto",
                "id": "9041",
                "kind": "primary",
                "name": "Авторемонт и техобслуживание (СТО)",
                "parent_id": "42903",
                "short_id": 9041
            }, {
                "alias": "prodazha_legkovykh_avtomobilejj",
                "id": "431",
                "kind": "primary",
                "name": "Продажа легковых автомобилей",
                "parent_id": "12",
                "short_id": 431
            }, {
                "alias": "avtozapchasti_dlya_legkovykh_avtomobilejj",
                "id": "54884",
                "kind": "primary",
                "name": "Автозапчасти для легковых автомобилей",
                "parent_id": "42903",
                "short_id": 54884
            }, {
                "alias": "remont_khodovojj_chasti_avtomobilya",
                "id": "7691",
                "kind": "additional",
                "name": "Ремонт ходовой части автомобиля",
                "parent_id": "42903",
                "short_id": 7691
            }, {
                "alias": "remont_benzinovykh_dvigatelejj",
                "id": "7695",
                "kind": "additional",
                "name": "Ремонт бензиновых двигателей",
                "parent_id": "42903",
                "short_id": 7695
            }, {
                "alias": "razval_skhozhdenie",
                "id": "7690",
                "kind": "additional",
                "name": "Развал / Схождение",
                "parent_id": "42903",
                "short_id": 7690
            }],
            "schedule": {
                "Fri": {"working_hours": [{"from": "09:00", "to": "19:00"}]},
                "Mon": {"working_hours": [{"from": "09:00", "to": "19:00"}]},
                "Sat": {"working_hours": [{"from": "10:00", "to": "18:00"}]},
                "Sun": {"working_hours": [{"from": "10:00", "to": "15:00"}]},
                "Thu": {"working_hours": [{"from": "09:00", "to": "19:00"}]},
                "Tue": {"working_hours": [{"from": "09:00", "to": "19:00"}]},
                "Wed": {"working_hours": [{"from": "09:00", "to": "19:00"}]},
                "comment": "СТО: пн-сб 10:00-19:00; вс 10:00-15:00"
            },
            "segment_id": "0",
            "stat": {"adst": 1545113700, "is_advertised": true, "match_type": 4, "rubr": "9041", "source_type": 2},
            "timezone_offset": 120,
            "type": "branch",
            "hash": "oyD5wz47G4553113112GGGGGjr6vls26G6G774I7G2A2G9H2rgewB42I2B6BG0I7032J9CGJz8p3uv56036A28345AHA174Hf2"
        }, {
            "address": {
                "building_id": "15481759374305531",
                "components": [{
                    "number": "1/3",
                    "street": "Акварельный переулок",
                    "street_id": "15481862453466867",
                    "type": "street_number"
                }],
                "postcode": "62371"
            },
            "address_name": "Акварельный переулок, 1/3",
            "adm_div": [{"name": "Харьковская область", "type": "region"}, {
                "id": "15481746489344071",
                "name": "с. Подворки",
                "type": "settlement"
            }],
            "ads": {
                "article": "Автосервис «Astar» - специализированный автосервис по установке, обслуживанию и ремонту ГБО на авто. Мы всегда рады помочь и проконсультировать Вас по вопросу установки и ремонту газобаллонного оборудования на авто. Каждого клиента угощаем чашечкой горячего кофе!<br />Мы предоставляем услуги:<br />- Установка.<br />- Ремонт.<br />- Диагностика и настройка.<br />- Техническое обслуживание<br />Наши преимущества:<br />- Прямые поставки из Европы.<br />- Огромный ассортимент на складе.<br />- Любые формы оплаты (наличная и безналичная).<br />- Только оригинальные, сертифицированные запчасти.<br />- Высококвалифицированный персонал.<br />- Представительства в других городах.<br />- Ремонт электромобилей.<br />- Установка ГБО.",
                "text": "Ремонт легковых автомобилей на все случаи жизни!",
                "options": {
                    "logo": {
                        "bg_color": "#5CB5EA",
                        "img_url": "https://ams2-cdn.2gis.com/previews/1049430232110465025/nH9UCakx4B84K38o1CzjJdMXQg6APIR/1/image.png",
                        "text_color": "#000000"
                    },
                    "actions": [{
                        "caption": "наш сайт",
                        "name": "наш сайт",
                        "platforms": ["online", "android", "ios"],
                        "type": "link",
                        "value": "http://link.2gis.ru/1.2/D7F0CDB8/online/20181201/project110/70000001018331730/2gis.ru/oyD5wz47G4553113116GGGG1jr6vls26G6G774I7G251GAH2rgewB42I2B6BG1I7032J9CGJz8p3uv56036A284549HA174HHca?https://sto.astar.ua/"
                    }]
                }
            },
            "attribute_groups": [{
                "attributes": [{
                    "name": "Наличный расчёт",
                    "tag": "general_payment_type_cash"
                }, {"name": "Оплата через банк", "tag": "general_payment_type_bank"}],
                "is_context": false,
                "is_primary": false,
                "name": "Способы оплаты",
                "rubric_ids": []
            }],
            "contact_groups": [{
                "contacts": [{
                    "type": "phone",
                    "text": "+380 67‒539‒11‒20",
                    "value": "+380675391120"
                }, {
                    "type": "website",
                    "text": "sto.astar.ua",
                    "value": "http://link.2gis.ru/1.2/915F8DF9/online/20181201/project110/70000001018331730/2gis.ru/oyD5wz47G4553113116GGGGGjr6vls26G6G774I7G251GAH2rgewB42I2B6BG1I7032J9CGJz8p3uv56036A284549HA174H9g?http://sto.astar.ua",
                    "url": "http://sto.astar.ua"
                }, {"type": "email", "text": "v.mitasov@astar.ua", "value": "v.mitasov@astar.ua"}, {
                    "type": "youtube",
                    "text": "https://youtube.com/channel/UC-p66JJ7zzDEwdZ6h4fZPsw",
                    "value": "https://youtube.com/channel/UC-p66JJ7zzDEwdZ6h4fZPsw",
                    "url": "https://youtube.com/channel/UC-p66JJ7zzDEwdZ6h4fZPsw"
                }]
            }],
            "external_content": [{
                "count": 2,
                "main_photo_url": "https://i0.photo.2gis.com/main/branch/110/70000001018331730/common",
                "subtype": "common",
                "type": "photo_album"
            }],
            "flags": {"photos": true},
            "full_name": "Подворки, Акварельный переулок, 1/3",
            "geometry": {"centroid": "POINT(36.089102 49.976978)"},
            "group": [{"id": "15481759374305531", "type": "building"}],
            "id": "70000001018331730",
            "name": "Bosh Car Service ASTAR, автосервис",
            "name_ex": {"extension": "автосервис", "primary": "Bosh Car Service ASTAR"},
            "org": {"branch_count": 1, "id": "70000001018331729", "name": "Bosh Car Service ASTAR, автосервис"},
            "point": {"lat": 49.977285, "lon": 36.089322},
            "purpose_name": "Автосервис",
            "region_id": "110",
            "reviews": {
                "is_reviewable": false,
                "is_reviewable_on_flamp": true,
                "items": [{"is_reviewable": true, "tag": "2gis_reviews"}, {"is_reviewable": true, "tag": "foursquare"}]
            },
            "rubrics": [{
                "alias": "avtoremont_i_tekhobsluzhivanie_sto",
                "id": "9041",
                "kind": "primary",
                "name": "Авторемонт и техобслуживание (СТО)",
                "parent_id": "42903",
                "short_id": 9041
            }, {
                "alias": "gazovoe_oborudovanie_dlya_avtotransporta",
                "id": "437",
                "kind": "additional",
                "name": "Газовое оборудование для автотранспорта",
                "parent_id": "42903",
                "short_id": 437
            }, {
                "alias": "remont_mkpp",
                "id": "110363",
                "kind": "additional",
                "name": "Ремонт МКПП",
                "parent_id": "42903",
                "short_id": 110363
            }, {
                "alias": "remont_dizelnykh_dvigatelejj",
                "id": "7694",
                "kind": "additional",
                "name": "Ремонт дизельных двигателей",
                "parent_id": "42903",
                "short_id": 7694
            }, {
                "alias": "remont_benzinovykh_dvigatelejj",
                "id": "7695",
                "kind": "additional",
                "name": "Ремонт бензиновых двигателей",
                "parent_id": "42903",
                "short_id": 7695
            }, {
                "alias": "remont_karbyuratorov_inzhektorov",
                "id": "7699",
                "kind": "additional",
                "name": "Ремонт карбюраторов / инжекторов",
                "parent_id": "42903",
                "short_id": 7699
            }, {
                "alias": "apparatnaya_zamena_masla",
                "id": "7900",
                "kind": "additional",
                "name": "Аппаратная замена масла",
                "parent_id": "42903",
                "short_id": 7900
            }, {
                "alias": "remont_khodovojj_chasti_avtomobilya",
                "id": "7691",
                "kind": "additional",
                "name": "Ремонт ходовой части автомобиля",
                "parent_id": "42903",
                "short_id": 7691
            }, {
                "alias": "remont_avtoehlektriki",
                "id": "7692",
                "kind": "additional",
                "name": "Ремонт автоэлектрики",
                "parent_id": "42903",
                "short_id": 7692
            }],
            "schedule": {
                "Fri": {"working_hours": [{"from": "09:00", "to": "18:00"}]},
                "Mon": {"working_hours": [{"from": "09:00", "to": "18:00"}]},
                "Sat": {"working_hours": [{"from": "09:00", "to": "15:00"}]},
                "Thu": {"working_hours": [{"from": "09:00", "to": "18:00"}]},
                "Tue": {"working_hours": [{"from": "09:00", "to": "18:00"}]},
                "Wed": {"working_hours": [{"from": "09:00", "to": "18:00"}]}
            },
            "segment_id": "0",
            "stat": {"adst": 1545113700, "is_advertised": true, "match_type": 4, "rubr": "9041", "source_type": 2},
            "timezone_offset": 120,
            "type": "branch",
            "hash": "oyD5wz47G4553113112GGGGGjr6vls26G6G774I7G251GAH2rgewB42I2B6BG0I7032J9CGJz8p3uv56036A284549HA174H84"
        }, {
            "address": {
                "building_id": "15481759374252548",
                "components": [{
                    "number": "55",
                    "street": "Конторская",
                    "street_id": "15481862453461029",
                    "type": "street_number"
                }],
                "postcode": "61052"
            },
            "address_name": "Конторская, 55",
            "adm_div": [{"name": "Харьковская область", "type": "region"}, {
                "name": "Харьковский городской совет",
                "type": "district_area"
            }, {
                "id": "15481746489344121",
                "is_default": true,
                "name": "Харьков",
                "type": "city"
            }, {"id": "15481733604442131", "name": "Новобаварский район", "type": "district"}],
            "ads": {
                "article": "Наш автосервис – это предприятие полного цикла: вам не придется искать дополнительную услугу «на стороне». Мы сделаем все необходимое на месте, быстро, качественно, за разумную цену, с удобными формами оплаты и гибкими скидками. К вашим услугам – огромный выбор оригинальных запчастей, в том числе для тюнинга. Немаловажно и удобное расположение в центре г. Харькова.",
                "text": "Быстрый и гарантированный ремонт автомобилей!",
                "options": {
                    "logo": {
                        "bg_color": "#D20808",
                        "img_url": "https://ams2-cdn.2gis.com/previews/1036250838282010737/FkpAohRBxOHTX-Ic6b0WHUYHzlQYSPx/1/image.png",
                        "text_color": "#ffffff"
                    }
                }
            },
            "attribute_groups": [{
                "attributes": [{
                    "name": "Восстановление геометрии",
                    "tag": "car_bodyworks_service_structural_repair"
                }, {"name": "Покраска", "tag": "car_bodyworks_service_painting"}, {
                    "name": "Полировка",
                    "tag": "car_bodyworks_service_polishing"
                }, {"name": "Рихтовка", "tag": "car_bodyworks_service_alignment"}, {
                    "name": "Сварка",
                    "tag": "car_bodyworks_service_welding"
                }], "is_context": false, "is_primary": false, "name": "Кузовной ремонт", "rubric_ids": ["7693"]
            }, {
                "attributes": [{
                    "name": "Наличный расчёт",
                    "tag": "general_payment_type_cash"
                }, {"name": "Оплата через банк", "tag": "general_payment_type_bank"}],
                "is_context": false,
                "is_primary": false,
                "name": "Способы оплаты",
                "rubric_ids": []
            }, {
                "attributes": [{"name": "Audi", "tag": "car_repair_brands_Audi"}, {
                    "name": "Mercedes-Benz",
                    "tag": "car_repair_brands_Mercedes_Benz"
                }, {"name": "Mitsubishi", "tag": "car_repair_brands_Mitsubishi"}, {
                    "name": "Nissan",
                    "tag": "car_repair_brands_Nissan"
                }, {"name": "Renault", "tag": "car_repair_brands_Renault"}, {
                    "name": "SEAT",
                    "tag": "car_repair_brands_SEAT"
                }, {"name": "Skoda", "tag": "car_repair_brands_Skoda"}, {
                    "name": "Chevrolet",
                    "tag": "car_repair_brands_Chevrolet"
                }, {"name": "Toyota", "tag": "car_repair_brands_Toyota"}, {
                    "name": "Volkswagen",
                    "tag": "car_repair_brands_Volkswagen"
                }, {"name": "Ford", "tag": "car_repair_brands_Ford"}, {
                    "name": "Hyundai",
                    "tag": "car_repair_brands_Hyundai"
                }, {"name": "KIA", "tag": "car_repair_brands_KIA"}],
                "icon_url": "http://disk.2gis.com/rubricator/car_repairc11263337e0283a18061c69879fa366f.svg",
                "is_context": true,
                "is_primary": true,
                "name": "Авторемонт",
                "rubric_ids": ["9041"]
            }],
            "contact_groups": [{
                "contacts": [{
                    "type": "phone",
                    "text": "+380 93‒866‒83‒38",
                    "value": "+380938668338"
                }, {"type": "phone", "text": "+380 97‒474‒44‒14", "value": "+380974744414"}]
            }],
            "external_content": [],
            "full_name": "Харьков, Конторская, 55",
            "geometry": {"centroid": "POINT(36.215598 49.982504)"},
            "group": [{"id": "15481759374252548", "type": "building"}],
            "id": "70000001019258286",
            "name": "Спарта, СТО",
            "name_ex": {"extension": "СТО", "primary": "Спарта"},
            "org": {"branch_count": 1, "id": "70000001019258285", "name": "Спарта, СТО"},
            "point": {"lat": 49.982707, "lon": 36.215289},
            "purpose_name": "Автосервис",
            "region_id": "110",
            "reviews": {
                "is_reviewable": false,
                "is_reviewable_on_flamp": true,
                "items": [{"is_reviewable": true, "tag": "2gis_reviews"}, {"is_reviewable": true, "tag": "foursquare"}]
            },
            "rubrics": [{
                "alias": "avtoremont_i_tekhobsluzhivanie_sto",
                "id": "9041",
                "kind": "primary",
                "name": "Авторемонт и техобслуживание (СТО)",
                "parent_id": "42903",
                "short_id": 9041
            }, {
                "alias": "avtomojjki",
                "id": "405",
                "kind": "primary",
                "name": "Автомойки",
                "parent_id": "42903",
                "short_id": 405
            }, {
                "alias": "avtosignalizacii",
                "id": "408",
                "kind": "additional",
                "name": "Автосигнализации",
                "parent_id": "42903",
                "short_id": 408
            }, {
                "alias": "remont_khodovojj_chasti_avtomobilya",
                "id": "7691",
                "kind": "additional",
                "name": "Ремонт ходовой части автомобиля",
                "parent_id": "42903",
                "short_id": 7691
            }, {
                "alias": "remont_benzinovykh_dvigatelejj",
                "id": "7695",
                "kind": "additional",
                "name": "Ремонт бензиновых двигателей",
                "parent_id": "42903",
                "short_id": 7695
            }, {
                "alias": "kompyuternaya_diagnostika_avtomobilejj",
                "id": "110362",
                "kind": "additional",
                "name": "Компьютерная диагностика автомобилей",
                "parent_id": "42903",
                "short_id": 110362
            }, {
                "alias": "kuzovnojj_remont",
                "id": "7693",
                "kind": "additional",
                "name": "Кузовной ремонт",
                "parent_id": "42903",
                "short_id": 7693
            }, {
                "alias": "remont_mkpp",
                "id": "110363",
                "kind": "additional",
                "name": "Ремонт МКПП",
                "parent_id": "42903",
                "short_id": 110363
            }, {
                "alias": "remont_akpp",
                "id": "412",
                "kind": "additional",
                "name": "Ремонт АКПП",
                "parent_id": "42903",
                "short_id": 412
            }],
            "schedule": {
                "Fri": {"working_hours": [{"from": "08:00", "to": "18:00"}]},
                "Mon": {"working_hours": [{"from": "08:00", "to": "18:00"}]},
                "Sat": {"working_hours": [{"from": "09:00", "to": "16:00"}]},
                "Thu": {"working_hours": [{"from": "08:00", "to": "18:00"}]},
                "Tue": {"working_hours": [{"from": "08:00", "to": "18:00"}]},
                "Wed": {"working_hours": [{"from": "08:00", "to": "18:00"}]}
            },
            "segment_id": "0",
            "stat": {"adst": 1545113700, "is_advertised": true, "match_type": 4, "rubr": "9041", "source_type": 2},
            "timezone_offset": 120,
            "type": "branch",
            "hash": "oyD5wz47G4553113112GGGGGjr6vls26G6G774I7G2A7GBH2rgewB42I2B6BG0I7032J9CGJz8p3uv56036A2937B4HA174H39"
        }, {
            "address": {
                "building_id": "15481759374270559",
                "components": [{
                    "number": "3Б",
                    "street": "Матюшенко",
                    "street_id": "15481862453463150",
                    "type": "street_number"
                }],
                "postcode": "61013"
            },
            "address_name": "Матюшенко, 3Б",
            "adm_div": [{"name": "Харьковская область", "type": "region"}, {
                "id": "15481746489344121",
                "is_default": true,
                "name": "Харьков",
                "type": "city"
            }, {"id": "15481733604442125", "name": "Киевский район", "type": "district"}],
            "ads": {
                "article": "Объединение в одно целое автосервисной станции и специализированного магазина-концепция первоклассного автомобильного обслуживания &laquo;АТЛ&raquo;.<br />С &laquo;АТЛ&raquo; клиент гарантировано получает преимущества:<br /><br />&bull; Широкий ассортимент. В &laquo;AТЛ&raquo; вы найдете все, что связано с автомобилями: от чехлов на сидения до элементов ходовой части.<br />&bull; Сертифицированные торговые марки от ведущих мировых производителей-мы не продаем товар, за который не несем ответственности-<br />&bull; Возможность приобретения товара &laquo;под заказ&raquo;.<br />&bull; Консультация опытных и высококвалифицированных специалистов.<br />&bull; Мы ценим Ваше время,поэтому установка,ремонт,диагностика и обслуживание совершаются в темпах первоочередности!<br />&bull; Наличие инструмента практически для всех видов работ.<br />&bull; Наши сотрудники-профессионалы<br />&bull; Удобное расположение автоцентров,дисконтная система,любая форма оплаты,комната отдыха, WI-FI.",
                "text": "Большой ассортимент авто товаров в сети магазинов АТЛ!",
                "options": {
                    "logo": {
                        "bg_color": "#0752A0",
                        "img_url": "https://ams2-cdn.2gis.com/previews/1028653620578484399/NSuiBkjTg8wL4UJ1.Ln5sfuP0oXwgsp/1/image.png",
                        "text_color": "#ffffff"
                    }
                }
            },
            "attribute_groups": [{
                "attributes": [{
                    "name": "Грузовые шины",
                    "tag": "tire_sale_types_truck"
                }, {"name": "Легковые шины", "tag": "tire_sale_types_passenger"}, {
                    "name": "Шины для спецтехники",
                    "tag": "tire_sale_types_special"
                }],
                "icon_url": "http://disk.2gis.com/rubricator/tiresee3b9dbc39fa605ae18713328aca6300.svg",
                "is_context": false,
                "is_primary": true,
                "name": "Шины и диски",
                "rubric_ids": ["427"]
            }, {
                "attributes": [{
                    "name": "Расчёт по картам",
                    "tag": "general_payment_type_card"
                }, {"name": "Наличный расчёт", "tag": "general_payment_type_cash"}, {
                    "name": "Оплата через банк",
                    "tag": "general_payment_type_bank"
                }], "is_context": false, "is_primary": false, "name": "Способы оплаты", "rubric_ids": []
            }],
            "contact_groups": [{
                "contacts": [{
                    "type": "website",
                    "text": "atl.ua",
                    "value": "http://link.2gis.ru/1.2/58B8BC2D/online/20181201/project110/70000001017907104/2gis.ru/oyD5wz47G4553113116GGGGGjr6vls26G6G774I7G225GCH2rgewB42I2B6BG1I7032J9CGJz8p3uv56036A27A2A3HA174H42?http://atl.ua",
                    "url": "http://atl.ua"
                }, {"type": "email", "text": "info@atl.ua", "value": "info@atl.ua"}, {
                    "type": "facebook",
                    "text": "https://facebook.com/ATL.AutoService",
                    "value": "https://facebook.com/ATL.AutoService",
                    "url": "https://facebook.com/ATL.AutoService"
                }]
            }, {
                "contacts": [{
                    "type": "phone",
                    "text": "+380 (57) 704‒00‒62",
                    "value": "+380577040062"
                }, {"type": "phone", "text": "+380 (57) 704‒06‒53", "value": "+380577040653"}, {
                    "type": "phone",
                    "text": "+380 67‒243‒81‒58",
                    "value": "+380672438158"
                }, {"type": "email", "text": "kharkov-5@atl.ua", "value": "kharkov-5@atl.ua"}]
            }],
            "external_content": [{
                "count": 4,
                "main_photo_url": "https://i4.photo.2gis.com/main/branch/110/70000001017907104/common",
                "subtype": "common",
                "type": "photo_album"
            }],
            "flags": {
                "badges": [{
                    "collection_uid": "26fbfa8c-d4f6-4545-b7d6-27adb658a5dc",
                    "text": "3 место",
                    "type": "award2017"
                }], "photos": true
            },
            "full_name": "Харьков, Матюшенко, 3Б",
            "geometry": {"centroid": "POINT(36.268699 50.002529)"},
            "group": [{"id": "15481759374270559", "type": "building"}],
            "id": "70000001017907104",
            "name": "АТЛ, автоцентр",
            "name_ex": {"extension": "автоцентр", "primary": "АТЛ"},
            "org": {"branch_count": 5, "id": "70000001017906759", "name": "АТЛ, автоцентр"},
            "point": {"lat": 50.002548, "lon": 36.268911},
            "purpose_name": "Автоцентр",
            "region_id": "110",
            "reviews": {
                "general_rating": 5,
                "general_review_count": 1,
                "is_reviewable": false,
                "is_reviewable_on_flamp": true,
                "items": [{"is_reviewable": true, "tag": "2gis_reviews"}, {"is_reviewable": true, "tag": "foursquare"}],
                "org_rating": 3,
                "org_review_count": 2
            },
            "rubrics": [{
                "alias": "avtoremont_i_tekhobsluzhivanie_sto",
                "id": "9041",
                "kind": "primary",
                "name": "Авторемонт и техобслуживание (СТО)",
                "parent_id": "42903",
                "short_id": 9041
            }, {
                "alias": "avtozapchasti_dlya_legkovykh_avtomobilejj",
                "id": "54884",
                "kind": "primary",
                "name": "Автозапчасти для легковых автомобилей",
                "parent_id": "42903",
                "short_id": 54884
            }, {
                "alias": "shiny_diski",
                "id": "427",
                "kind": "primary",
                "name": "Шины / Диски",
                "parent_id": "42903",
                "short_id": 427
            }, {
                "alias": "avtomasla_motomasla_khimiya",
                "id": "426",
                "kind": "primary",
                "name": "Автомасла / Мотомасла / Химия",
                "parent_id": "42903",
                "short_id": 426
            }, {
                "alias": "avtomobilnye_akkumulyatory",
                "id": "524",
                "kind": "primary",
                "name": "Автомобильные аккумуляторы",
                "parent_id": "42903",
                "short_id": 524
            }, {
                "alias": "razval_skhozhdenie",
                "id": "7690",
                "kind": "primary",
                "name": "Развал / Схождение",
                "parent_id": "42903",
                "short_id": 7690
            }, {
                "alias": "remont_obsluzhivanie_klimaticheskikh_sistem_avtomobilya",
                "id": "7697",
                "kind": "primary",
                "name": "Ремонт / обслуживание климатических систем автомобиля",
                "parent_id": "42903",
                "short_id": 7697
            }, {
                "alias": "remont_khodovojj_chasti_avtomobilya",
                "id": "7691",
                "kind": "additional",
                "name": "Ремонт ходовой части автомобиля",
                "parent_id": "42903",
                "short_id": 7691
            }],
            "schedule": {
                "Fri": {"working_hours": [{"from": "09:00", "to": "20:00"}]},
                "Mon": {"working_hours": [{"from": "09:00", "to": "20:00"}]},
                "Sat": {"working_hours": [{"from": "09:00", "to": "18:00"}]},
                "Sun": {"working_hours": [{"from": "10:00", "to": "18:00"}]},
                "Thu": {"working_hours": [{"from": "09:00", "to": "20:00"}]},
                "Tue": {"working_hours": [{"from": "09:00", "to": "20:00"}]},
                "Wed": {"working_hours": [{"from": "09:00", "to": "20:00"}]}
            },
            "segment_id": "0",
            "stat": {"adst": 1545113700, "is_advertised": true, "match_type": 4, "rubr": "9041", "source_type": 2},
            "timezone_offset": 120,
            "type": "branch",
            "hash": "oyD5wz47G4553113112GGGGGjr6vls26G6G774I7G225GCH2rgewB42I2B6BG0I7032J9CGJz8p3uv56036A27A2A3HA174H11"
        }, {
            "address": {
                "building_id": "15481759374280859",
                "components": [{
                    "number": "259",
                    "street": "Московский проспект",
                    "street_id": "15481862453461169",
                    "type": "street_number"
                }],
                "postcode": "61044"
            },
            "address_name": "Московский проспект, 259",
            "adm_div": [{"name": "Харьковская область", "type": "region"}, {
                "id": "15481746489344121",
                "is_default": true,
                "name": "Харьков",
                "type": "city"
            }, {"id": "15481733604442127", "name": "Немышлянский район", "type": "district"}],
            "ads": {
                "article": "В СТО Авторитет-Центр Вас ждет дружный коллектив, успешно обслуживающий автомобили более 15 лет. Мы предлагаем услуги по комплексному техническому обслуживанию и ремонту всех моделей автомобилей марки FORD, MAZDA, SKODA, HUYNDAI, KIA, VOLKSWAGEN, LADA и др.<br /><br />Станция технического обслуживания производит следующие виды работ:<br />•&nbsp;Развал схождение.<br />•&nbsp;Диагностика. <br />•&nbsp;Техническое обслуживание и регламентные работы.<br />•&nbsp;Обслуживание систем кондиционирования и вентиляции.<br />•&nbsp;Ремонт ходовой части автомобиля.<br />•&nbsp;Ремонт трансмиссии автомобиля.<br />•&nbsp;Ремонт двигателя автомобиля.<br />•&nbsp;Шиномонтаж и балансировочные работы.<br />•&nbsp;Мойка.<br />К услугам клиентов предлагается:<br />•&nbsp;Запчасти в наличии и под заказ.<br />•&nbsp;Отчетные документы для плательщиков НДС.<br />•&nbsp;Гарантия на работы.<br />•&nbsp;Непосредственное наблюдение за автомобилем в ремонтной зоне СТО.<br />•&nbsp;Комфортабельная зона отдыха..<br />•&nbsp;Wi-fi<br />•&nbsp;Кофейный автомат.<br />",
                "text": "Полный комплекс услуг по ремонту и обслуживанию автомобилей",
                "options": {
                    "logo": {
                        "bg_color": "#1D258C",
                        "img_url": "https://ams2-cdn.2gis.com/previews/1049378880592281833/BfUm6g7hP9BBmiqWQmeaJ2rt2s6AZ4G/1/image.png",
                        "text_color": "#ffffff"
                    },
                    "actions": [{
                        "caption": "Записаться онлайн",
                        "name": "Записаться онлайн",
                        "platforms": ["online", "android", "ios"],
                        "type": "link",
                        "value": "http://link.2gis.ru/1.2/D92412B3/online/20181201/project110/70000001034251453/2gis.ru/oyD5wz47G455311311I4GGGGjr6vls26G6G774I7G274G41HrgewB42I2B6BG1I703G5IA9Jz8p3uv56036A4437462HA3722Hae?https://avtoritet.cb24.eu/#book"
                    }]
                }
            },
            "attribute_groups": [{
                "attributes": [{"name": "Возможна запись", "tag": "tire_prerecord"}],
                "is_context": false,
                "is_primary": false,
                "name": "Шиномонтаж",
                "rubric_ids": ["7689"]
            }, {
                "attributes": [{
                    "name": "Наличный расчёт",
                    "tag": "general_payment_type_cash"
                }, {"name": "Оплата через банк", "tag": "general_payment_type_bank"}],
                "is_context": false,
                "is_primary": false,
                "name": "Способы оплаты",
                "rubric_ids": []
            }],
            "contact_groups": [{
                "contacts": [{
                    "type": "phone",
                    "text": "+380 50‒300‒50‒60",
                    "value": "+380503005060"
                }, {"type": "email", "text": "avtoritetkharkov@gmail.com", "value": "avtoritetkharkov@gmail.com"}]
            }],
            "external_content": [{
                "count": 9,
                "main_photo_url": "https://i3.photo.2gis.com/main/branch/110/70000001034251453/common",
                "subtype": "common",
                "type": "photo_album"
            }, {
                "count": 2,
                "main_photo_url": "https://i9.photo.2gis.com/main/geo/110/15481759374280859/view",
                "subtype": "view",
                "type": "photo_album"
            }],
            "flags": {"photos": true},
            "id": "70000001034251453",
            "name": "Авторитет центр, ООО, СТО",
            "name_ex": {"extension": "СТО", "primary": "Авторитет центр, ООО"},
            "org": {"branch_count": 1, "id": "70000001034251452", "name": "Авторитет центр, ООО, СТО"},
            "point": {"lat": 49.965434, "lon": 36.330085},
            "region_id": "110",
            "reviews": {
                "is_reviewable": false,
                "is_reviewable_on_flamp": true,
                "items": [{"is_reviewable": true, "tag": "2gis_reviews"}, {"is_reviewable": true, "tag": "foursquare"}]
            },
            "rubrics": [{
                "alias": "avtoremont_i_tekhobsluzhivanie_sto",
                "id": "9041",
                "kind": "primary",
                "name": "Авторемонт и техобслуживание (СТО)",
                "parent_id": "42903",
                "short_id": 9041
            }, {
                "alias": "remont_khodovojj_chasti_avtomobilya",
                "id": "7691",
                "kind": "additional",
                "name": "Ремонт ходовой части автомобиля",
                "parent_id": "42903",
                "short_id": 7691
            }, {
                "alias": "remont_benzinovykh_dvigatelejj",
                "id": "7695",
                "kind": "additional",
                "name": "Ремонт бензиновых двигателей",
                "parent_id": "42903",
                "short_id": 7695
            }, {
                "alias": "remont_dizelnykh_dvigatelejj",
                "id": "7694",
                "kind": "additional",
                "name": "Ремонт дизельных двигателей",
                "parent_id": "42903",
                "short_id": 7694
            }, {
                "alias": "remont_mkpp",
                "id": "110363",
                "kind": "additional",
                "name": "Ремонт МКПП",
                "parent_id": "42903",
                "short_id": 110363
            }, {
                "alias": "kompyuternaya_diagnostika_avtomobilejj",
                "id": "110362",
                "kind": "additional",
                "name": "Компьютерная диагностика автомобилей",
                "parent_id": "42903",
                "short_id": 110362
            }, {
                "alias": "razval_skhozhdenie",
                "id": "7690",
                "kind": "additional",
                "name": "Развал / Схождение",
                "parent_id": "42903",
                "short_id": 7690
            }, {
                "alias": "avtomojjki",
                "id": "405",
                "kind": "additional",
                "name": "Автомойки",
                "parent_id": "42903",
                "short_id": 405
            }, {
                "alias": "shinomontazh",
                "id": "7689",
                "kind": "additional",
                "name": "Шиномонтаж",
                "parent_id": "42903",
                "short_id": 7689
            }, {
                "alias": "remont_akpp",
                "id": "412",
                "kind": "additional",
                "name": "Ремонт АКПП",
                "parent_id": "42903",
                "short_id": 412
            }, {
                "alias": "remont_obsluzhivanie_klimaticheskikh_sistem_avtomobilya",
                "id": "7697",
                "kind": "additional",
                "name": "Ремонт / обслуживание климатических систем автомобиля",
                "parent_id": "42903",
                "short_id": 7697
            }, {
                "alias": "remont_karbyuratorov_inzhektorov",
                "id": "7699",
                "kind": "additional",
                "name": "Ремонт карбюраторов / инжекторов",
                "parent_id": "42903",
                "short_id": 7699
            }],
            "schedule": {
                "Fri": {"working_hours": [{"from": "09:00", "to": "18:00"}]},
                "Mon": {"working_hours": [{"from": "09:00", "to": "18:00"}]},
                "Sat": {"working_hours": [{"from": "09:00", "to": "16:00"}]},
                "Thu": {"working_hours": [{"from": "09:00", "to": "18:00"}]},
                "Tue": {"working_hours": [{"from": "09:00", "to": "18:00"}]},
                "Wed": {"working_hours": [{"from": "09:00", "to": "18:00"}]}
            },
            "segment_id": "0",
            "stat": {"adst": 1545113700, "is_advertised": true, "match_type": 4, "rubr": "9041", "source_type": 2},
            "timezone_offset": 120,
            "type": "branch",
            "hash": "oyD5wz47G455311311I0GGGGjr6vls26G6G774I7G274G41HrgewB42I2B6BG0I703G5IA9Jz8p3uv56036A4437462HA372Hca"
        }, {
            "address": {
                "building_id": "15481759374312306",
                "components": [{
                    "number": "151д",
                    "street": "Льва Ландау проспект",
                    "street_id": "15481862453462577",
                    "type": "street_number"
                }],
                "postcode": "61105"
            },
            "address_name": "Льва Ландау проспект, 151д",
            "adm_div": [{"name": "Харьковская область", "type": "region"}, {
                "id": "15481746489344121",
                "is_default": true,
                "name": "Харьков",
                "type": "city"
            }, {"id": "15481733604442129", "name": "Слободской район", "type": "district"}],
            "ads": {
                "article": "Автосалон «Укравтоснаб» является официальным,<br />сертифицированым дилером автомобильных марок: <br />RAVON: R2, Gentra, Matiz.<br />LADA: Granta, Kalina 2, Largus.<br />LADA: Niva 4x4, Niva Chevrolet.<br />УАЗ:Hunter, Patriot.<br />ГАЗ: ГАЗель, Next, ГАЗон.<br />Автобусы: ЭТАЛОН, Атаман,БОГДАН.<br />Грузовые автомобили МАЗ.<br />На все автомобили предоставляется официальная  гарантия.<br /><br />Перечень услуг СТО:<br />•&nbsp;Автомойка<br />•&nbsp;Гарантийное и сервисное обслуживание автомобилей<br />•&nbsp;Антикоррозионная обработка<br />•&nbsp;Шумоизоляция автомобиля<br />•&nbsp;Установка автосигнализаций, механических противоугонных систем<br />•&nbsp;Установка аудиосистем, аккустики, усилителей, сабвуферов<br />•&nbsp;Установка противотуманных фар, ксенон<br />•&nbsp;Тонирование стёкол<br />•&nbsp;Установка фаркопов<br />•&nbsp;Установка автомобильных аксессуаров и т.п. <br />•&nbsp;Продажа оригинальных запчастей LADA.<br />",
                "link": {
                    "value": "http://link.2gis.ru/1.2/B453116F/online/20181201/project110/70000001018783242/2gis.ru/oyD5wz47G455311311I23GGGjr6vls26G6G774I7G263G42HrgewB42I2B6BG1I703G5IA9Jz8p3uv56036A288A642HA372HH6e?http://autosnab.com.ua/kredit.html",
                    "text": "Кредитование"
                },
                "text": "Ремонт и обслуживание LADA,RAVON.",
                "options": {
                    "logo": {
                        "bg_color": "#0839E4",
                        "img_url": "https://ams2-cdn.2gis.com/previews/1029573589940043831/IlgJ.cNGLLBinQsEHvUSNErjDwcew-W/1/image.png",
                        "text_color": "#ffffff"
                    },
                    "actions": [{
                        "caption": "сервис",
                        "name": "сервис",
                        "platforms": ["online", "android", "ios"],
                        "type": "link",
                        "value": "http://link.2gis.ru/1.2/E68A7F5B/online/20181201/project110/70000001018783242/2gis.ru/oyD5wz47G455311311I4GGGGjr6vls26G6G774I7G263G42HrgewB42I2B6BG1I703G5IA9Jz8p3uv56036A288A642HA3722Hb7?http://autosnab.com.ua/servise.html"
                    }]
                }
            },
            "attribute_groups": [{
                "attributes": [{
                    "name": "Ravon",
                    "tag": "car_sale_brand_Ravon"
                }, {"name": "LADA (ВАЗ)", "tag": "car_sale_brand_vaz"}, {
                    "name": "ГАЗ",
                    "tag": "car_sale_brand_gaz"
                }, {"name": "УАЗ", "tag": "car_sale_brand_uaz"}, {
                    "name": "Новые автомобили",
                    "tag": "car_sale_types_new"
                }, {"name": "Тест-драйв", "tag": "car_sale_service_test_drive"}],
                "is_context": false,
                "is_primary": true,
                "name": "Продажа легковых автомобилей",
                "rubric_ids": ["431"]
            }, {
                "attributes": [{
                    "name": "Наличный расчёт",
                    "tag": "general_payment_type_cash"
                }, {"name": "Оплата через банк", "tag": "general_payment_type_bank"}],
                "is_context": false,
                "is_primary": false,
                "name": "Способы оплаты",
                "rubric_ids": []
            }, {
                "attributes": [{"name": "LADA (ВАЗ)", "tag": "car_repair_brands_LADA"}, {
                    "name": "Ravon",
                    "tag": "car_repair_brands_Ravon"
                }, {"name": "ГАЗ", "tag": "car_repair_brands_gaz"}],
                "icon_url": "http://disk.2gis.com/rubricator/car_repairc11263337e0283a18061c69879fa366f.svg",
                "is_context": true,
                "is_primary": true,
                "name": "Авторемонт",
                "rubric_ids": ["9041"]
            }, {
                "attributes": [{"name": "Ravon", "tag": "car_brand_spare_parts_ravon"}, {
                    "name": "LADA (ВАЗ)",
                    "tag": "car_brand_spare_parts_lada"
                }],
                "is_context": false,
                "is_primary": false,
                "name": "Марки легковых запчастей",
                "rubric_ids": ["54884"]
            }, {
                "attributes": [{"name": "Розница", "tag": "type_of_business_type_retail"}],
                "is_context": false,
                "is_primary": true,
                "name": "Тип предприятия",
                "rubric_ids": ["377", "604", "400", "425", "1141", "525", "404", "426", "993", "110445", "645", "360", "361", "435", "686", "19119", "511", "1108", "53116", "1182", "208", "379", "362", "809", "14426", "631", "9972", "582", "280", "580", "354", "10291", "53266", "13648", "10566", "13100", "609", "567", "605", "768", "606", "937", "594", "50871", "110302", "3237", "8740", "380", "346", "67041", "381", "538", "579", "19505", "10458", "181", "524", "575", "382", "13102", "53986", "805", "285", "777", "56265", "5272", "16614", "593", "53054", "574", "698", "351", "785", "773", "658", "9973", "51905", "504", "355", "551", "643", "612", "4484", "573", "562", "712", "54452", "287", "353", "50084", "556", "1234", "356", "564", "47773", "15769", "110390", "52236", "632", "688", "185", "5843", "9776", "940", "352", "626", "10274", "548", "281", "109318", "624", "766", "7591", "110393", "613", "590", "996", "392", "396", "610", "54001", "51362", "102043", "475", "366", "397", "291", "110484", "528", "591", "110381", "489", "598", "505", "358", "607", "47105", "61066", "1233", "659", "292", "583", "16623", "9777", "510", "526", "578", "7669", "293", "508", "12178", "5269", "53139", "345", "71642", "259", "15502", "110333", "555", "540", "1237", "635", "503", "398", "389", "10902", "558", "390", "615", "359", "509", "19745", "110347", "502", "599", "459", "462", "461", "391", "210", "211", "51105", "16968", "16212", "110482", "408", "677", "697", "53304", "644", "110516", "436", "110512", "1549", "1196", "110434", "16498", "9228", "52971", "378", "627", "7988", "14488", "14444", "447", "1074", "641", "69342", "46726", "657", "437", "451", "1242", "110455", "7666", "671", "12127", "513", "110649", "21616", "438", "705", "18978", "51883", "375", "8199", "282", "7960", "421", "283", "568", "13161", "8466", "110394", "16397", "1269", "625", "1558", "16610", "18658", "52256", "589", "639", "7579", "110506", "58621", "50067", "654", "55540", "277", "595", "1055", "585", "394", "50850", "395", "1197", "719", "347", "278", "4480", "110486", "21448", "4385", "1556", "363", "110518", "596", "563", "110306", "55727", "690", "670", "56516", "669", "9629", "5276", "284", "52151", "209", "3231", "110337", "102001", "549", "7949", "945", "44938", "523", "807", "1128", "52187", "660", "448", "50841", "51202", "473", "614", "655", "71648", "110370", "557", "469", "429", "99202", "7662", "110325", "450", "584", "834", "54067", "554", "411", "16814", "10905", "52243", "54409", "776", "53975", "21516", "99209", "103934", "8743", "29502", "13410", "439", "618", "58828", "110435", "531", "1614", "440", "442", "52184", "443", "8065", "14190", "1616", "70039", "1206", "441", "5798", "444", "57185", "24109", "446", "51746", "1248", "799", "110446", "288", "102029", "110334", "936", "9822", "519", "1617", "325", "51009", "372", "786", "22831", "17017", "541", "110361", "128", "452", "53596", "110517", "691", "22370", "51214", "52968", "1559", "665", "21497", "53833", "428", "53267", "600", "110350", "431", "24504", "53982", "55723", "10351", "561", "1273", "21493", "16400", "602", "54649", "110652", "453", "24468", "463", "4420", "464", "12249", "110436", "4497", "174", "559", "383", "656", "57364", "9102", "1667", "3236", "385", "4383", "319", "25194", "15616", "802", "110454", "13406", "879", "110464", "54616", "454", "433", "18471", "501", "10377", "432", "59511", "696", "764", "53061", "640", "242", "24184", "110401", "7406", "1073", "19490", "102026", "49784", "110456", "16491", "55875", "935", "925", "110372", "110299", "387", "24392", "521", "11919", "530", "110451", "58634", "384", "51414", "58849", "110495", "58633", "54450", "47338", "47342", "1241", "490", "110480", "50840", "56108", "348", "623", "110420", "10904", "388", "544", "457", "616", "110443", "458", "427", "110404", "674", "67128", "399", "592", "50076", "110324", "5266", "350", "373", "642", "774", "3232", "16199", "110528", "110529", "54884"]
            }],
            "contact_groups": [{
                "contacts": [{
                    "type": "phone",
                    "text": "+380 (57) 716‒49‒40",
                    "value": "+380577164940",
                    "comment": "автосалон"
                }, {
                    "type": "phone",
                    "text": "+380 50‒301‒36‒37",
                    "value": "+380503013637",
                    "comment": "автосалон"
                }, {
                    "type": "phone",
                    "text": "+380 67‒575‒25‒24",
                    "value": "+380675752524",
                    "comment": "автосалон"
                }, {
                    "type": "phone",
                    "text": "+380 95‒591‒98‒85",
                    "value": "+380955919885",
                    "comment": "СТО"
                }, {
                    "type": "phone",
                    "text": "+380 67‒577‒25‒30",
                    "value": "+380675772530",
                    "comment": "отдел автозапчастей"
                }, {
                    "type": "website",
                    "text": "autosnab.com.ua",
                    "value": "http://link.2gis.ru/1.2/A88A239F/online/20181201/project110/70000001018783242/2gis.ru/oyD5wz47G455311311I4GGGGjr6vls26G6G774I7G263G42HrgewB42I2B6BG1I703G5IA9Jz8p3uv56036A288A642HA372Hga?http://autosnab.com.ua",
                    "url": "http://autosnab.com.ua"
                }, {"type": "email", "text": "ukravtosnab@gmail.com", "value": "ukravtosnab@gmail.com"}]
            }],
            "external_content": [{
                "count": 13,
                "main_photo_url": "https://i2.photo.2gis.com/main/branch/110/70000001018783242/common",
                "subtype": "common",
                "type": "photo_album"
            }],
            "flags": {"photos": true},
            "full_name": "Харьков, Льва Ландау проспект, 151д",
            "geometry": {"centroid": "POINT(36.301467 49.954139)"},
            "group": [{"id": "15481759374312306", "type": "building"}],
            "id": "70000001018783242",
            "name": "Укравтоснаб, автоцентр",
            "name_ex": {"extension": "автоцентр", "primary": "Укравтоснаб"},
            "org": {"branch_count": 1, "id": "70000001018783241", "name": "Укравтоснаб, автоцентр"},
            "point": {"lat": 49.954248, "lon": 36.301631},
            "purpose_name": "Автоцентр",
            "region_id": "110",
            "reviews": {
                "is_reviewable": false,
                "is_reviewable_on_flamp": true,
                "items": [{"is_reviewable": true, "tag": "2gis_reviews"}, {"is_reviewable": true, "tag": "foursquare"}]
            },
            "rubrics": [{
                "alias": "avtoremont_i_tekhobsluzhivanie_sto",
                "id": "9041",
                "kind": "primary",
                "name": "Авторемонт и техобслуживание (СТО)",
                "parent_id": "42903",
                "short_id": 9041
            }, {
                "alias": "prodazha_legkovykh_avtomobilejj",
                "id": "431",
                "kind": "primary",
                "name": "Продажа легковых автомобилей",
                "parent_id": "12",
                "short_id": 431
            }, {
                "alias": "prodazha_gruzovykh_avtomobilejj",
                "id": "428",
                "kind": "primary",
                "name": "Продажа грузовых автомобилей",
                "parent_id": "12",
                "short_id": 428
            }, {
                "alias": "avtozapchasti_dlya_legkovykh_avtomobilejj",
                "id": "54884",
                "kind": "additional",
                "name": "Автозапчасти для легковых автомобилей",
                "parent_id": "42903",
                "short_id": 54884
            }, {
                "alias": "antikorrozijjnaya_obrabotka_avtomobilejj",
                "id": "410",
                "kind": "additional",
                "name": "Антикоррозийная обработка автомобилей",
                "parent_id": "42903",
                "short_id": 410
            }, {
                "alias": "kompyuternaya_diagnostika_avtomobilejj",
                "id": "110362",
                "kind": "additional",
                "name": "Компьютерная диагностика автомобилей",
                "parent_id": "42903",
                "short_id": 110362
            }, {
                "alias": "tonirovanie_avtostjokol",
                "id": "413",
                "kind": "additional",
                "name": "Тонирование автостёкол",
                "parent_id": "42903",
                "short_id": 413
            }, {
                "alias": "remont_khodovojj_chasti_avtomobilya",
                "id": "7691",
                "kind": "additional",
                "name": "Ремонт ходовой части автомобиля",
                "parent_id": "42903",
                "short_id": 7691
            }],
            "schedule": {
                "Fri": {"working_hours": [{"from": "09:00", "to": "18:00"}]},
                "Mon": {"working_hours": [{"from": "09:00", "to": "18:00"}]},
                "Sat": {"working_hours": [{"from": "10:00", "to": "16:00"}]},
                "Sun": {"working_hours": [{"from": "10:00", "to": "16:00"}]},
                "Thu": {"working_hours": [{"from": "09:00", "to": "18:00"}]},
                "Tue": {"working_hours": [{"from": "09:00", "to": "18:00"}]},
                "Wed": {"working_hours": [{"from": "09:00", "to": "18:00"}]}
            },
            "segment_id": "0",
            "stat": {"adst": 1545113700, "is_advertised": true, "match_type": 4, "rubr": "9041", "source_type": 2},
            "timezone_offset": 120,
            "type": "branch",
            "hash": "oyD5wz47G455311311I0GGGGjr6vls26G6G774I7G263G42HrgewB42I2B6BG0I703G5IA9Jz8p3uv56036A288A642HA372H32"
        }],
        "request_type": "discovery",
        "search_attributes": {
            "advertisers": [{"org": "70000001032753376", "rubr": "9041"}, {
                "org": "70000001032712331",
                "rubr": "9041"
            }, {"org": "70000001017985918", "rubr": "9041"}, {
                "org": "70000001018587744",
                "rubr": "9041"
            }, {"org": "70000001018965088", "rubr": "9041"}, {
                "org": "70000001018505476",
                "rubr": "9041"
            }, {"org": "70000001018222880", "rubr": "9041"}, {
                "org": "70000001018331729",
                "rubr": "9041"
            }, {"org": "70000001019258285", "rubr": "9041"}, {
                "org": "70000001017906759",
                "rubr": "9041"
            }, {"org": "70000001034251452", "rubr": "9041"}, {
                "org": "70000001018783241",
                "rubr": "9041"
            }, {"org": "70000001018288089", "rubr": "9041"}, {
                "org": "70000001020359862",
                "rubr": "9041"
            }, {"org": "70000001021154246", "rubr": "9041"}, {
                "org": "70000001025869302",
                "rubr": "9041"
            }, {"org": "70000001030803967", "rubr": "9041"}],
            "context_rubrics": ["9041"],
            "dgis_project_id": "110",
            "geo_restriction": false,
            "is_partial": false,
            "stat": {"adst": 1545113700, "lang": "ru_UA"},
            "type_total_matches": {
                "geo_total_results_count": 0,
                "org_total_results_count": 346,
                "transport_total_results_count": 1,
                "unclassified_total_results_count": 0
            }
        },
        "search_type": 2,
        "total": 347,
        "widgets": {
            "actions": [{
                "expanding": {},
                "items": [[{"text": "Рейтинг", "type": "sort", "values": ["rating"]}, {
                    "text": "На карте",
                    "type": "filter",
                    "values": ["bound"]
                }]],
                "widget": "checkboxlist"
            }, {
                "expanding": {},
                "items": [[{"text": "Оплата картой", "type": "filter", "values": ["general_payment_type_card"]}]],
                "widget": "checkboxlist"
            }],
            "main": [{
                "caption": "Станция метро",
                "default": {"text": "Все"},
                "items": [[{"tag": "#3EA332", "text": "23 Августа", "values": ["15481909698101297"]}, {
                    "tag": "#0064AF",
                    "text": "Академика Барабашова",
                    "values": ["15481909698101308"]
                }, {"tag": "#0064AF", "text": "Академика Павлова", "values": ["15481909698101309"]}, {
                    "tag": "#3EA332",
                    "text": "Алексеевская",
                    "values": ["15481909698101296"]
                }, {"tag": "#D10000", "text": "Армейская", "values": ["15481909698101320"]}, {
                    "tag": "#3EA332",
                    "text": "Архитектора Бекетова",
                    "values": ["15481909698101301"]
                }, {"tag": "#3EA332", "text": "Ботанический Сад", "values": ["15481909698101298"]}, {
                    "tag": "#0064AF",
                    "text": "Героев труда",
                    "values": ["15481909698101311"]
                }, {"tag": "#3EA332", "text": "Госпром", "values": ["15481909698101300"]}, {
                    "tag": "#D10000",
                    "text": "Дворец Спорта",
                    "values": ["15481909698101319"]
                }, {"tag": "#D10000", "text": "Завод им. Малышева", "values": ["15481909698101317"]}, {
                    "tag": "#3EA332",
                    "text": "Защитников Украины",
                    "values": ["15481909698101302"]
                }, {
                    "tag": "#D10000",
                    "text": "Имени А.С. Масельского",
                    "values": ["15481909698101321"]
                }, {"tag": "#D10000", "text": "Индустриальная", "values": ["15481909698101323"]}, {
                    "tag": "#0064AF",
                    "text": "Исторический музей",
                    "values": ["15481909698101304"]
                }, {"tag": "#0064AF", "text": "Киевская", "values": ["15481909698101307"]}, {
                    "tag": "#3EA332",
                    "text": "Метростроителей",
                    "values": ["15481909698101303"]
                }, {
                    "tag": "#D10000",
                    "text": "Московский проспект",
                    "values": ["15481909698101318"]
                }, {"tag": "#3EA332", "text": "Научная", "values": ["15481909698101299"]}, {
                    "tag": "#D10000",
                    "text": "Площадь Конституции",
                    "values": ["15481909698101314"]
                }, {"tag": "#3EA332", "text": "Победа", "values": ["15481909747341528"]}, {
                    "tag": "#D10000",
                    "text": "Проспект Гагарина",
                    "values": ["15481909698101315"]
                }, {"tag": "#0064AF", "text": "Пушкинская", "values": ["15481909698101306"]}, {
                    "tag": "#D10000",
                    "text": "Спортивная",
                    "values": ["15481909698101316"]
                }, {"tag": "#0064AF", "text": "Студенческая", "values": ["15481909698101310"]}, {
                    "tag": "#D10000",
                    "text": "Тракторный Завод",
                    "values": ["15481909698101322"]
                }, {"tag": "#0064AF", "text": "Университет", "values": ["15481909698101305"]}, {
                    "tag": "#D10000",
                    "text": "Холодная гора",
                    "values": ["15481909698101324"]
                }, {"tag": "#D10000", "text": "Центральный Рынок", "values": ["15481909698101313"]}, {
                    "tag": "#D10000",
                    "text": "Южный вокзал",
                    "values": ["15481909698101312"]
                }]],
                "tag": "subway",
                "widget": "combobox"
            }, {
                "first_week_day": "mon",
                "labels": {
                    "alltime": "Круглосуточно",
                    "fri": "Пт",
                    "mon": "Пн",
                    "now": "Открыто сейчас",
                    "sat": "Сб",
                    "specified": "В указанное время",
                    "sun": "Вс",
                    "thu": "Чт",
                    "tue": "Вт",
                    "wed": "Ср"
                },
                "time_format": "24h",
                "widget": "worktime"
            }, {
                "expanding": {},
                "items": [[{"text": "С сайтом", "type": "filter", "values": ["has_site"]}, {
                    "text": "С фото",
                    "type": "filter",
                    "values": ["has_photos"]
                }], [{"text": "Расчёт по картам", "type": "filter", "values": ["general_payment_type_card"]}]],
                "widget": "checkboxlist"
            }, {
                "caption": "Марки",
                "expanding": {},
                "items": [[{
                    "text": "Acura",
                    "type": "filter",
                    "values": ["car_repair_brands_Acura"]
                }, {
                    "text": "Alfa Romeo",
                    "type": "filter",
                    "values": ["car_repair_brands_Alfa_Romeo"]
                }], [{"text": "Audi", "type": "filter", "values": ["car_repair_brands_Audi"]}, {
                    "text": "Bentley",
                    "type": "filter",
                    "values": ["car_repair_brands_Bentley"]
                }], [{"text": "BMW", "type": "filter", "values": ["car_repair_brands_BMW"]}, {
                    "text": "Brilliance",
                    "type": "filter",
                    "values": ["car_repair_brands_Brilliance"]
                }], [{"text": "Bugatti", "type": "filter", "values": ["car_repair_brands_Bugatti"]}, {
                    "text": "BYD",
                    "type": "filter",
                    "values": ["car_repair_brands_BYD"]
                }], [{
                    "text": "Cadillac",
                    "type": "filter",
                    "values": ["car_repair_brands_Cadillac"]
                }, {"text": "Changan", "type": "filter", "values": ["car_repair_brands_Changan"]}], [{
                    "text": "Chery",
                    "type": "filter",
                    "values": ["car_repair_brands_Chery"]
                }, {
                    "text": "Chevrolet",
                    "type": "filter",
                    "values": ["car_repair_brands_Chevrolet"]
                }], [{
                    "text": "Chrysler",
                    "type": "filter",
                    "values": ["car_repair_brands_Chrysler"]
                }, {"text": "Citroen", "type": "filter", "values": ["car_repair_brands_Citroen"]}], [{
                    "text": "Dacia",
                    "type": "filter",
                    "values": ["car_repair_brands_dacia"]
                }, {"text": "Daewoo", "type": "filter", "values": ["car_repair_brands_Daewoo"]}], [{
                    "text": "Daihatsu",
                    "type": "filter",
                    "values": ["car_repair_brands_Daihatsu"]
                }, {"text": "Datsun", "type": "filter", "values": ["car_repair_brands_Datsun"]}], [{
                    "text": "Dodge",
                    "type": "filter",
                    "values": ["car_repair_brands_Dodge"]
                }, {"text": "Dongfeng", "type": "filter", "values": ["car_repair_brands_Dongfeng"]}], [{
                    "text": "FAW",
                    "type": "filter",
                    "values": ["car_repair_brands_FAW"]
                }, {"text": "Ferrari", "type": "filter", "values": ["car_repair_brands_Ferrari"]}], [{
                    "text": "Fiat",
                    "type": "filter",
                    "values": ["car_repair_brands_Fiat"]
                }, {"text": "Ford", "type": "filter", "values": ["car_repair_brands_Ford"]}], [{
                    "text": "Foton",
                    "type": "filter",
                    "values": ["car_repair_brands_Foton"]
                }, {"text": "Geely", "type": "filter", "values": ["car_repair_brands_Geely"]}], [{
                    "text": "GMC",
                    "type": "filter",
                    "values": ["car_repair_brands_GMC"]
                }, {
                    "text": "Great Wall",
                    "type": "filter",
                    "values": ["car_repair_brands_Great_Wall"]
                }], [{"text": "Haima", "type": "filter", "values": ["car_repair_brands_Haima"]}, {
                    "text": "Haval",
                    "type": "filter",
                    "values": ["car_repair_brands_Haval"]
                }], [{"text": "Hawtai", "type": "filter", "values": ["car_repair_brands_Hawtai"]}, {
                    "text": "Honda",
                    "type": "filter",
                    "values": ["car_repair_brands_Honda"]
                }], [{"text": "Hummer", "type": "filter", "values": ["car_repair_brands_Hummer"]}, {
                    "text": "Hyundai",
                    "type": "filter",
                    "values": ["car_repair_brands_Hyundai"]
                }], [{"text": "Infiniti", "type": "filter", "values": ["car_repair_brands_Infiniti"]}, {
                    "text": "Isuzu",
                    "type": "filter",
                    "values": ["car_repair_brands_Isuzu"]
                }], [{"text": "JAC", "type": "filter", "values": ["car_repair_brands_JAC"]}, {
                    "text": "Jaguar",
                    "type": "filter",
                    "values": ["car_repair_brands_Jaguar"]
                }], [{"text": "Jeep", "type": "filter", "values": ["car_repair_brands_Jeep"]}, {
                    "text": "KIA",
                    "type": "filter",
                    "values": ["car_repair_brands_KIA"]
                }], [{"text": "LADA (ВАЗ)", "type": "filter", "values": ["car_repair_brands_LADA"]}, {
                    "text": "Lancia",
                    "type": "filter",
                    "values": ["car_repair_brands_Lancia"]
                }], [{
                    "text": "Land Rover",
                    "type": "filter",
                    "values": ["car_repair_brands_Land_Rover"]
                }, {"text": "Lexus", "type": "filter", "values": ["car_repair_brands_Lexus"]}], [{
                    "text": "Lifan",
                    "type": "filter",
                    "values": ["car_repair_brands_Lifan"]
                }, {"text": "Lincoln", "type": "filter", "values": ["car_repair_brands_Lincoln"]}], [{
                    "text": "Luxgen",
                    "type": "filter",
                    "values": ["car_repair_brands_Luxgen"]
                }, {"text": "Maserati", "type": "filter", "values": ["car_repair_brands_Maserati"]}], [{
                    "text": "Maxus",
                    "type": "filter",
                    "values": ["car_repair_brands_Maxus"]
                }, {
                    "text": "Mazda",
                    "type": "filter",
                    "values": ["car_repair_brands_Mazda"]
                }], [{
                    "text": "Mercedes-Benz",
                    "type": "filter",
                    "values": ["car_repair_brands_Mercedes_Benz"]
                }, {"text": "MINI", "type": "filter", "values": ["car_repair_brands_MINI"]}], [{
                    "text": "Mitsubishi",
                    "type": "filter",
                    "values": ["car_repair_brands_Mitsubishi"]
                }, {"text": "Nissan", "type": "filter", "values": ["car_repair_brands_Nissan"]}], [{
                    "text": "Opel",
                    "type": "filter",
                    "values": ["car_repair_brands_Opel"]
                }, {"text": "Peugeot", "type": "filter", "values": ["car_repair_brands_Peugeot"]}], [{
                    "text": "Porsche",
                    "type": "filter",
                    "values": ["car_repair_brands_Porsche"]
                }, {"text": "Ravon", "type": "filter", "values": ["car_repair_brands_Ravon"]}], [{
                    "text": "Renault",
                    "type": "filter",
                    "values": ["car_repair_brands_Renault"]
                }, {
                    "text": "Rolls-Royce",
                    "type": "filter",
                    "values": ["car_repair_brands_Rolls_Royce"]
                }], [{"text": "Rover", "type": "filter", "values": ["car_repair_brands_Rover"]}, {
                    "text": "Saab",
                    "type": "filter",
                    "values": ["car_repair_brands_Saab"]
                }], [{"text": "SEAT", "type": "filter", "values": ["car_repair_brands_SEAT"]}, {
                    "text": "Skoda",
                    "type": "filter",
                    "values": ["car_repair_brands_Skoda"]
                }], [{"text": "Smart", "type": "filter", "values": ["car_repair_brands_Smart"]}, {
                    "text": "SsangYong",
                    "type": "filter",
                    "values": ["car_repair_brands_SsangYong"]
                }], [{"text": "Subaru", "type": "filter", "values": ["car_repair_brands_Subaru"]}, {
                    "text": "Suzuki",
                    "type": "filter",
                    "values": ["car_repair_brands_Suzuki"]
                }], [{"text": "Tesla", "type": "filter", "values": ["car_repair_brands_Tesla"]}, {
                    "text": "Tianye",
                    "type": "filter",
                    "values": ["car_repair_brands_Tianye"]
                }], [{
                    "text": "Toyota",
                    "type": "filter",
                    "values": ["car_repair_brands_Toyota"]
                }, {
                    "text": "Volkswagen",
                    "type": "filter",
                    "values": ["car_repair_brands_Volkswagen"]
                }], [{"text": "Volvo", "type": "filter", "values": ["car_repair_brands_Volvo"]}, {
                    "text": "Vortex",
                    "type": "filter",
                    "values": ["car_repair_brands_Vortex"]
                }], [{"text": "Zotye", "type": "filter", "values": ["car_repair_brands_Zotye"]}, {
                    "text": "ZX",
                    "type": "filter",
                    "values": ["car_repair_brands_ZX"]
                }], [{"text": "ВИС", "type": "filter", "values": ["car_repair_brands_vis"]}, {
                    "text": "ГАЗ",
                    "type": "filter",
                    "values": ["car_repair_brands_gaz"]
                }], [{"text": "ЗАЗ", "type": "filter", "values": ["car_repair_brands_zaz"]}, {
                    "text": "ТагАЗ",
                    "type": "filter",
                    "values": ["car_repair_brands_tagaz"]
                }], [{"text": "УАЗ", "type": "filter", "values": ["car_repair_brands_uaz"]}]],
                "widget": "checkboxlist"
            }, {
                "caption": "Тип предприятия",
                "expanding": {},
                "items": [[{
                    "text": "Розница",
                    "type": "filter",
                    "values": ["type_of_business_type_retail"]
                }, {
                    "text": "Интернет-магазин",
                    "type": "filter",
                    "values": ["type_of_business_type_online_store"]
                }], [{
                    "text": "Производство",
                    "type": "filter",
                    "values": ["type_of_business_type_manufacturing"]
                }, {"text": "Опт", "type": "filter", "values": ["type_of_business_type_wholesale"]}]],
                "widget": "checkboxlist"
            }]
        }
    }, {"api_version": "3.0.445", "code": 200, "issue_date": "20181220", "ippHeaders": {}}],
    "[\"photoCounters\",\"branch\",[\"70000001032753368\",\"70000001032712332\",\"70000001017985919\",\"70000001018587745\",\"70000001018965089\",\"70000001018505477\",\"70000001018222881\",\"70000001018331730\",\"70000001019258286\",\"70000001017907104\",\"70000001034251453\",\"70000001018783242\"]]": {
        "data": [{
            "id": "70000001032753368",
            "type": "branch",
            "albums": [{
                "type": "common",
                "count": 10,
                "main_photo_url": "https://i8.photo.2gis.com/main/branch/110/70000001032753368/common",
                "main_photo_preview": {
                    "100x100": "https://i8.photo.2gis.com/main/branch/110/70000001032753368/common/100x100",
                    "304x190": "https://i8.photo.2gis.com/main/branch/110/70000001032753368/common/304x190",
                    "304x": "https://i8.photo.2gis.com/main/branch/110/70000001032753368/common/304x",
                    "64x64": "https://i8.photo.2gis.com/main/branch/110/70000001032753368/common/64x64",
                    "128x128": "https://i8.photo.2gis.com/main/branch/110/70000001032753368/common/128x128",
                    "80x80": "https://i8.photo.2gis.com/main/branch/110/70000001032753368/common/80x80",
                    "160x160": "https://i8.photo.2gis.com/main/branch/110/70000001032753368/common/160x160",
                    "156x156": "https://i8.photo.2gis.com/main/branch/110/70000001032753368/common/156x156",
                    "472x156": "https://i8.photo.2gis.com/main/branch/110/70000001032753368/common/472x156",
                    "946x156": "https://i8.photo.2gis.com/main/branch/110/70000001032753368/common/946x156",
                    "235x156": "https://i8.photo.2gis.com/main/branch/110/70000001032753368/common/235x156",
                    "311x156": "https://i8.photo.2gis.com/main/branch/110/70000001032753368/common/311x156",
                    "624x156": "https://i8.photo.2gis.com/main/branch/110/70000001032753368/common/624x156",
                    "384x120": "https://i8.photo.2gis.com/main/branch/110/70000001032753368/common/384x120",
                    "768x240": "https://i8.photo.2gis.com/main/branch/110/70000001032753368/common/768x240"
                }
            }]
        }, {
            "id": "70000001032712332",
            "type": "branch",
            "albums": [{
                "type": "common",
                "count": 27,
                "main_photo_url": "https://i2.photo.2gis.com/main/branch/110/70000001032712332/common",
                "main_photo_preview": {
                    "100x100": "https://i2.photo.2gis.com/main/branch/110/70000001032712332/common/100x100",
                    "304x190": "https://i2.photo.2gis.com/main/branch/110/70000001032712332/common/304x190",
                    "304x": "https://i2.photo.2gis.com/main/branch/110/70000001032712332/common/304x",
                    "64x64": "https://i2.photo.2gis.com/main/branch/110/70000001032712332/common/64x64",
                    "128x128": "https://i2.photo.2gis.com/main/branch/110/70000001032712332/common/128x128",
                    "80x80": "https://i2.photo.2gis.com/main/branch/110/70000001032712332/common/80x80",
                    "160x160": "https://i2.photo.2gis.com/main/branch/110/70000001032712332/common/160x160",
                    "156x156": "https://i2.photo.2gis.com/main/branch/110/70000001032712332/common/156x156",
                    "472x156": "https://i2.photo.2gis.com/main/branch/110/70000001032712332/common/472x156",
                    "946x156": "https://i2.photo.2gis.com/main/branch/110/70000001032712332/common/946x156",
                    "235x156": "https://i2.photo.2gis.com/main/branch/110/70000001032712332/common/235x156",
                    "311x156": "https://i2.photo.2gis.com/main/branch/110/70000001032712332/common/311x156",
                    "624x156": "https://i2.photo.2gis.com/main/branch/110/70000001032712332/common/624x156",
                    "384x120": "https://i2.photo.2gis.com/main/branch/110/70000001032712332/common/384x120",
                    "768x240": "https://i2.photo.2gis.com/main/branch/110/70000001032712332/common/768x240"
                }
            }]
        }, {"id": "70000001017985919", "type": "branch", "albums": []}, {
            "id": "70000001018587745",
            "type": "branch",
            "albums": [{
                "type": "common",
                "count": 17,
                "main_photo_url": "https://i5.photo.2gis.com/main/branch/110/70000001018587745/common",
                "main_photo_preview": {
                    "100x100": "https://i5.photo.2gis.com/main/branch/110/70000001018587745/common/100x100",
                    "304x190": "https://i5.photo.2gis.com/main/branch/110/70000001018587745/common/304x190",
                    "304x": "https://i5.photo.2gis.com/main/branch/110/70000001018587745/common/304x",
                    "64x64": "https://i5.photo.2gis.com/main/branch/110/70000001018587745/common/64x64",
                    "128x128": "https://i5.photo.2gis.com/main/branch/110/70000001018587745/common/128x128",
                    "80x80": "https://i5.photo.2gis.com/main/branch/110/70000001018587745/common/80x80",
                    "160x160": "https://i5.photo.2gis.com/main/branch/110/70000001018587745/common/160x160",
                    "156x156": "https://i5.photo.2gis.com/main/branch/110/70000001018587745/common/156x156",
                    "472x156": "https://i5.photo.2gis.com/main/branch/110/70000001018587745/common/472x156",
                    "946x156": "https://i5.photo.2gis.com/main/branch/110/70000001018587745/common/946x156",
                    "235x156": "https://i5.photo.2gis.com/main/branch/110/70000001018587745/common/235x156",
                    "311x156": "https://i5.photo.2gis.com/main/branch/110/70000001018587745/common/311x156",
                    "624x156": "https://i5.photo.2gis.com/main/branch/110/70000001018587745/common/624x156",
                    "384x120": "https://i5.photo.2gis.com/main/branch/110/70000001018587745/common/384x120",
                    "768x240": "https://i5.photo.2gis.com/main/branch/110/70000001018587745/common/768x240"
                }
            }]
        }, {
            "id": "70000001018965089",
            "type": "branch",
            "albums": [{
                "type": "common",
                "count": 23,
                "main_photo_url": "https://i9.photo.2gis.com/main/branch/110/70000001018965089/common",
                "main_photo_preview": {
                    "100x100": "https://i9.photo.2gis.com/main/branch/110/70000001018965089/common/100x100",
                    "304x190": "https://i9.photo.2gis.com/main/branch/110/70000001018965089/common/304x190",
                    "304x": "https://i9.photo.2gis.com/main/branch/110/70000001018965089/common/304x",
                    "64x64": "https://i9.photo.2gis.com/main/branch/110/70000001018965089/common/64x64",
                    "128x128": "https://i9.photo.2gis.com/main/branch/110/70000001018965089/common/128x128",
                    "80x80": "https://i9.photo.2gis.com/main/branch/110/70000001018965089/common/80x80",
                    "160x160": "https://i9.photo.2gis.com/main/branch/110/70000001018965089/common/160x160",
                    "156x156": "https://i9.photo.2gis.com/main/branch/110/70000001018965089/common/156x156",
                    "472x156": "https://i9.photo.2gis.com/main/branch/110/70000001018965089/common/472x156",
                    "946x156": "https://i9.photo.2gis.com/main/branch/110/70000001018965089/common/946x156",
                    "235x156": "https://i9.photo.2gis.com/main/branch/110/70000001018965089/common/235x156",
                    "311x156": "https://i9.photo.2gis.com/main/branch/110/70000001018965089/common/311x156",
                    "624x156": "https://i9.photo.2gis.com/main/branch/110/70000001018965089/common/624x156",
                    "384x120": "https://i9.photo.2gis.com/main/branch/110/70000001018965089/common/384x120",
                    "768x240": "https://i9.photo.2gis.com/main/branch/110/70000001018965089/common/768x240"
                }
            }, {
                "type": "view",
                "count": 1,
                "main_photo_url": "https://i3.photo.2gis.com/main/geo/110/15481759374288143/view",
                "main_photo_preview": {
                    "100x100": "https://i3.photo.2gis.com/main/geo/110/15481759374288143/view/100x100",
                    "304x190": "https://i3.photo.2gis.com/main/geo/110/15481759374288143/view/304x190",
                    "304x": "https://i3.photo.2gis.com/main/geo/110/15481759374288143/view/304x",
                    "64x64": "https://i3.photo.2gis.com/main/geo/110/15481759374288143/view/64x64",
                    "128x128": "https://i3.photo.2gis.com/main/geo/110/15481759374288143/view/128x128",
                    "80x80": "https://i3.photo.2gis.com/main/geo/110/15481759374288143/view/80x80",
                    "160x160": "https://i3.photo.2gis.com/main/geo/110/15481759374288143/view/160x160",
                    "156x156": "https://i3.photo.2gis.com/main/geo/110/15481759374288143/view/156x156",
                    "472x156": "https://i3.photo.2gis.com/main/geo/110/15481759374288143/view/472x156",
                    "946x156": "https://i3.photo.2gis.com/main/geo/110/15481759374288143/view/946x156",
                    "235x156": "https://i3.photo.2gis.com/main/geo/110/15481759374288143/view/235x156",
                    "311x156": "https://i3.photo.2gis.com/main/geo/110/15481759374288143/view/311x156",
                    "624x156": "https://i3.photo.2gis.com/main/geo/110/15481759374288143/view/624x156",
                    "384x120": "https://i3.photo.2gis.com/main/geo/110/15481759374288143/view/384x120",
                    "768x240": "https://i3.photo.2gis.com/main/geo/110/15481759374288143/view/768x240"
                }
            }]
        }, {"id": "70000001018505477", "type": "branch", "albums": []}, {
            "id": "70000001018222881",
            "type": "branch",
            "albums": [{
                "type": "common",
                "count": 3,
                "main_photo_url": "https://i1.photo.2gis.com/main/branch/110/70000001018222881/common",
                "main_photo_preview": {
                    "100x100": "https://i1.photo.2gis.com/main/branch/110/70000001018222881/common/100x100",
                    "304x190": "https://i1.photo.2gis.com/main/branch/110/70000001018222881/common/304x190",
                    "304x": "https://i1.photo.2gis.com/main/branch/110/70000001018222881/common/304x",
                    "64x64": "https://i1.photo.2gis.com/main/branch/110/70000001018222881/common/64x64",
                    "128x128": "https://i1.photo.2gis.com/main/branch/110/70000001018222881/common/128x128",
                    "80x80": "https://i1.photo.2gis.com/main/branch/110/70000001018222881/common/80x80",
                    "160x160": "https://i1.photo.2gis.com/main/branch/110/70000001018222881/common/160x160",
                    "156x156": "https://i1.photo.2gis.com/main/branch/110/70000001018222881/common/156x156",
                    "472x156": "https://i1.photo.2gis.com/main/branch/110/70000001018222881/common/472x156",
                    "946x156": "https://i1.photo.2gis.com/main/branch/110/70000001018222881/common/946x156",
                    "235x156": "https://i1.photo.2gis.com/main/branch/110/70000001018222881/common/235x156",
                    "311x156": "https://i1.photo.2gis.com/main/branch/110/70000001018222881/common/311x156",
                    "624x156": "https://i1.photo.2gis.com/main/branch/110/70000001018222881/common/624x156",
                    "384x120": "https://i1.photo.2gis.com/main/branch/110/70000001018222881/common/384x120",
                    "768x240": "https://i1.photo.2gis.com/main/branch/110/70000001018222881/common/768x240"
                }
            }]
        }, {
            "id": "70000001018331730",
            "type": "branch",
            "albums": [{
                "type": "common",
                "count": 2,
                "main_photo_url": "https://i0.photo.2gis.com/main/branch/110/70000001018331730/common",
                "main_photo_preview": {
                    "100x100": "https://i0.photo.2gis.com/main/branch/110/70000001018331730/common/100x100",
                    "304x190": "https://i0.photo.2gis.com/main/branch/110/70000001018331730/common/304x190",
                    "304x": "https://i0.photo.2gis.com/main/branch/110/70000001018331730/common/304x",
                    "64x64": "https://i0.photo.2gis.com/main/branch/110/70000001018331730/common/64x64",
                    "128x128": "https://i0.photo.2gis.com/main/branch/110/70000001018331730/common/128x128",
                    "80x80": "https://i0.photo.2gis.com/main/branch/110/70000001018331730/common/80x80",
                    "160x160": "https://i0.photo.2gis.com/main/branch/110/70000001018331730/common/160x160",
                    "156x156": "https://i0.photo.2gis.com/main/branch/110/70000001018331730/common/156x156",
                    "472x156": "https://i0.photo.2gis.com/main/branch/110/70000001018331730/common/472x156",
                    "946x156": "https://i0.photo.2gis.com/main/branch/110/70000001018331730/common/946x156",
                    "235x156": "https://i0.photo.2gis.com/main/branch/110/70000001018331730/common/235x156",
                    "311x156": "https://i0.photo.2gis.com/main/branch/110/70000001018331730/common/311x156",
                    "624x156": "https://i0.photo.2gis.com/main/branch/110/70000001018331730/common/624x156",
                    "384x120": "https://i0.photo.2gis.com/main/branch/110/70000001018331730/common/384x120",
                    "768x240": "https://i0.photo.2gis.com/main/branch/110/70000001018331730/common/768x240"
                }
            }]
        }, {"id": "70000001019258286", "type": "branch", "albums": []}, {
            "id": "70000001017907104",
            "type": "branch",
            "albums": [{
                "type": "common",
                "count": 4,
                "main_photo_url": "https://i4.photo.2gis.com/main/branch/110/70000001017907104/common",
                "main_photo_preview": {
                    "100x100": "https://i4.photo.2gis.com/main/branch/110/70000001017907104/common/100x100",
                    "304x190": "https://i4.photo.2gis.com/main/branch/110/70000001017907104/common/304x190",
                    "304x": "https://i4.photo.2gis.com/main/branch/110/70000001017907104/common/304x",
                    "64x64": "https://i4.photo.2gis.com/main/branch/110/70000001017907104/common/64x64",
                    "128x128": "https://i4.photo.2gis.com/main/branch/110/70000001017907104/common/128x128",
                    "80x80": "https://i4.photo.2gis.com/main/branch/110/70000001017907104/common/80x80",
                    "160x160": "https://i4.photo.2gis.com/main/branch/110/70000001017907104/common/160x160",
                    "156x156": "https://i4.photo.2gis.com/main/branch/110/70000001017907104/common/156x156",
                    "472x156": "https://i4.photo.2gis.com/main/branch/110/70000001017907104/common/472x156",
                    "946x156": "https://i4.photo.2gis.com/main/branch/110/70000001017907104/common/946x156",
                    "235x156": "https://i4.photo.2gis.com/main/branch/110/70000001017907104/common/235x156",
                    "311x156": "https://i4.photo.2gis.com/main/branch/110/70000001017907104/common/311x156",
                    "624x156": "https://i4.photo.2gis.com/main/branch/110/70000001017907104/common/624x156",
                    "384x120": "https://i4.photo.2gis.com/main/branch/110/70000001017907104/common/384x120",
                    "768x240": "https://i4.photo.2gis.com/main/branch/110/70000001017907104/common/768x240"
                }
            }]
        }, {
            "id": "70000001034251453",
            "type": "branch",
            "albums": [{
                "type": "common",
                "count": 9,
                "main_photo_url": "https://i3.photo.2gis.com/main/branch/110/70000001034251453/common",
                "main_photo_preview": {
                    "100x100": "https://i3.photo.2gis.com/main/branch/110/70000001034251453/common/100x100",
                    "304x190": "https://i3.photo.2gis.com/main/branch/110/70000001034251453/common/304x190",
                    "304x": "https://i3.photo.2gis.com/main/branch/110/70000001034251453/common/304x",
                    "64x64": "https://i3.photo.2gis.com/main/branch/110/70000001034251453/common/64x64",
                    "128x128": "https://i3.photo.2gis.com/main/branch/110/70000001034251453/common/128x128",
                    "80x80": "https://i3.photo.2gis.com/main/branch/110/70000001034251453/common/80x80",
                    "160x160": "https://i3.photo.2gis.com/main/branch/110/70000001034251453/common/160x160",
                    "156x156": "https://i3.photo.2gis.com/main/branch/110/70000001034251453/common/156x156",
                    "472x156": "https://i3.photo.2gis.com/main/branch/110/70000001034251453/common/472x156",
                    "946x156": "https://i3.photo.2gis.com/main/branch/110/70000001034251453/common/946x156",
                    "235x156": "https://i3.photo.2gis.com/main/branch/110/70000001034251453/common/235x156",
                    "311x156": "https://i3.photo.2gis.com/main/branch/110/70000001034251453/common/311x156",
                    "624x156": "https://i3.photo.2gis.com/main/branch/110/70000001034251453/common/624x156",
                    "384x120": "https://i3.photo.2gis.com/main/branch/110/70000001034251453/common/384x120",
                    "768x240": "https://i3.photo.2gis.com/main/branch/110/70000001034251453/common/768x240"
                }
            }, {
                "type": "view",
                "count": 2,
                "main_photo_url": "https://i9.photo.2gis.com/main/geo/110/15481759374280859/view",
                "main_photo_preview": {
                    "100x100": "https://i9.photo.2gis.com/main/geo/110/15481759374280859/view/100x100",
                    "304x190": "https://i9.photo.2gis.com/main/geo/110/15481759374280859/view/304x190",
                    "304x": "https://i9.photo.2gis.com/main/geo/110/15481759374280859/view/304x",
                    "64x64": "https://i9.photo.2gis.com/main/geo/110/15481759374280859/view/64x64",
                    "128x128": "https://i9.photo.2gis.com/main/geo/110/15481759374280859/view/128x128",
                    "80x80": "https://i9.photo.2gis.com/main/geo/110/15481759374280859/view/80x80",
                    "160x160": "https://i9.photo.2gis.com/main/geo/110/15481759374280859/view/160x160",
                    "156x156": "https://i9.photo.2gis.com/main/geo/110/15481759374280859/view/156x156",
                    "472x156": "https://i9.photo.2gis.com/main/geo/110/15481759374280859/view/472x156",
                    "946x156": "https://i9.photo.2gis.com/main/geo/110/15481759374280859/view/946x156",
                    "235x156": "https://i9.photo.2gis.com/main/geo/110/15481759374280859/view/235x156",
                    "311x156": "https://i9.photo.2gis.com/main/geo/110/15481759374280859/view/311x156",
                    "624x156": "https://i9.photo.2gis.com/main/geo/110/15481759374280859/view/624x156",
                    "384x120": "https://i9.photo.2gis.com/main/geo/110/15481759374280859/view/384x120",
                    "768x240": "https://i9.photo.2gis.com/main/geo/110/15481759374280859/view/768x240"
                }
            }]
        }, {
            "id": "70000001018783242",
            "type": "branch",
            "albums": [{
                "type": "common",
                "count": 13,
                "main_photo_url": "https://i2.photo.2gis.com/main/branch/110/70000001018783242/common",
                "main_photo_preview": {
                    "100x100": "https://i2.photo.2gis.com/main/branch/110/70000001018783242/common/100x100",
                    "304x190": "https://i2.photo.2gis.com/main/branch/110/70000001018783242/common/304x190",
                    "304x": "https://i2.photo.2gis.com/main/branch/110/70000001018783242/common/304x",
                    "64x64": "https://i2.photo.2gis.com/main/branch/110/70000001018783242/common/64x64",
                    "128x128": "https://i2.photo.2gis.com/main/branch/110/70000001018783242/common/128x128",
                    "80x80": "https://i2.photo.2gis.com/main/branch/110/70000001018783242/common/80x80",
                    "160x160": "https://i2.photo.2gis.com/main/branch/110/70000001018783242/common/160x160",
                    "156x156": "https://i2.photo.2gis.com/main/branch/110/70000001018783242/common/156x156",
                    "472x156": "https://i2.photo.2gis.com/main/branch/110/70000001018783242/common/472x156",
                    "946x156": "https://i2.photo.2gis.com/main/branch/110/70000001018783242/common/946x156",
                    "235x156": "https://i2.photo.2gis.com/main/branch/110/70000001018783242/common/235x156",
                    "311x156": "https://i2.photo.2gis.com/main/branch/110/70000001018783242/common/311x156",
                    "624x156": "https://i2.photo.2gis.com/main/branch/110/70000001018783242/common/624x156",
                    "384x120": "https://i2.photo.2gis.com/main/branch/110/70000001018783242/common/384x120",
                    "768x240": "https://i2.photo.2gis.com/main/branch/110/70000001018783242/common/768x240"
                }
            }]
        }]
    },
    "timestamp": 1545300671973,
    "cfgJsapi": {
        "tileServer": "//tile{s}.maps.2gis.com/tiles?x={x}&y={y}&z={z}&v=1.5&r=g&ts=online_sd",
        "poiMetaServer": "//tile{s}.maps.2gis.com/poi?x={x}&y={y}&z={z}&v=1.5&r=g&ts=online_sd",
        "retinaTileServer": "//tile{s}.maps.2gis.com/tiles?x={x}&y={y}&z={z}&v=1.5&r=g&ts=online_hd",
        "retinaPoiMetaServer": "//tile{s}.maps.2gis.com/poi?x={x}&y={y}&z={z}&v=1.5&r=g&ts=online_hd",
        "webApiKey": "ruoedw9225",
        "poiLayerMinZoom": 11,
        "projectLeaveMaxZoom": 16
    }
};

const a = {
    "meta": {"api_version": "3.0.446", "code": 200, "issue_date": "20181220"},
    "result": {
        "items": [{
            "geometry_id": "15481759374253897",
            "id": "70000001032753368_dxmhf6G6G7I2G1G4HA156szjeewB42758I4312338uvrg55614929G99AI1G9mp2e48G4572003385452J5HGJ2JGJIG69",
            "is_advertising": true,
            "lat": 50.013211,
            "lon": 36.221284,
            "match_type": 4,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374329607",
            "id": "70000001032712332_dxmhf6G6G7I2G1G4HA156szjeewB42758I4312338uvrg55614929G964I2G9mp2e48G4572003381352J5HGJ2JGJIG23",
            "is_advertising": true,
            "lat": 49.952326,
            "lon": 36.300481,
            "match_type": 4,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374257120",
            "id": "70000001017985919_dxmhf6G6G7I2G1G4HA156szjeewB42758I4312318uvrg55614929G94BI3G9mp2e48G45720038A86B2J5HGJ2JGJIG5b",
            "is_advertising": true,
            "lat": 49.997617,
            "lon": 36.272856,
            "match_type": 4,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374282198",
            "id": "70000001018587745_dxmhf6G6G7I2G1G4HA156szjeewB42758I4312318uvrg55614929G977I4G9mp2e48G4572003968892J5HGJ2JGJIGeb",
            "is_advertising": true,
            "lat": 49.959572,
            "lon": 36.35837,
            "match_type": 4,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374288143",
            "id": "70000001018965089_dxmhf6G6G7I2G1G4HA156szjeewB42758I4312318uvrg55614929G9BBI5G9mp2e48G45720039A6622J5HGJ2JGJIG8b",
            "is_advertising": true,
            "lat": 50.01202,
            "lon": 36.287585,
            "match_type": 4,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374287284",
            "id": "70000001018222881_dxmhf6G6G7I2G1G4HA156szjeewB42758I4312318uvrg55614929G9B3I6G9mp2e48G45720039323A2J5HGJ2JGJIGce",
            "is_advertising": true,
            "lat": 50.02725,
            "lon": 36.301256,
            "match_type": 4,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374250691",
            "id": "70000001018505477_dxmhf6G6G7I2G1G4HA156szjeewB42758I4312318uvrg55614929G9A9I7G9mp2e48G4572003960662J5HGJ2JGJIGb7",
            "is_advertising": true,
            "lat": 49.993509,
            "lon": 36.241444,
            "match_type": 4,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374305531",
            "id": "70000001018331730_dxmhf6G6G7I2G1G4HA156szjeewB42758I4312318uvrg55614929G962I8G9mp2e48G4572003943292J5HGJ2JGJIGb3",
            "is_advertising": true,
            "lat": 49.977285,
            "lon": 36.089322,
            "match_type": 4,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374252548",
            "id": "70000001019258286_dxmhf6G6G7I2G1G4HA156szjeewB42758I4312318uvrg55614929G9B8I9G9mp2e48G4572003A35942J5HGJ2JGJIGc8",
            "is_advertising": true,
            "lat": 49.982707,
            "lon": 36.215289,
            "match_type": 4,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374288409",
            "id": "70000001025869303_dxmhf6G6G7I2G1G4HA156szjeewB42758I4312328uvrg55614929G935IAG9mp2e48G4572003696A52J5HGJ2JGJIGc9",
            "is_advertising": true,
            "lat": 50.057931,
            "lon": 36.363101,
            "match_type": 4,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374280859",
            "id": "70000001034251453_dxmhf6G6G7I2G1GJ2HA16szjeewB42758I4312338uvrg55614929G985I209mp2e48G45720035352654J3GJI3GJIGGce",
            "is_advertising": true,
            "lat": 49.965434,
            "lon": 36.330085,
            "match_type": 4,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374260834",
            "id": "70000001020359863_dxmhf6G6G7I2G1GJ2HA16szjeewB42758I4312328uvrg55614929G995I219mp2e48G4572003145AA54J3GJI3GJIGG04",
            "is_advertising": true,
            "lat": 50.055093,
            "lon": 36.186007,
            "match_type": 4,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374312306",
            "id": "70000001018783242_dxmhf6G6G7I2G1GJ2HA16szjeewB42758I4312318uvrg55614929G974I229mp2e48G45720039884454J3GJI3GJIGG50",
            "is_advertising": true,
            "lat": 49.954248,
            "lon": 36.301631,
            "match_type": 4,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374273149",
            "id": "70000001021154247_dxmhf6G6G7I2G1GJ2HA16szjeewB42758I4312328uvrg55614929G979I239mp2e48G45720032255454J3GJI3GJIGG7b",
            "is_advertising": true,
            "lat": 49.965332,
            "lon": 36.318807,
            "match_type": 4,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374297524",
            "id": "70000001030803968_dxmhf6G6G7I2G1GJ2HA16szjeewB42758I4312338uvrg55614929G99AI249mp2e48G45720031904B54J3GJI3GJIGG95",
            "is_advertising": true,
            "lat": 50.033372,
            "lon": 36.3411,
            "match_type": 4,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374283660",
            "id": "70000001018288090_dxmhf6G6G7I2G1GJ2HA16szjeewB42758I4312318uvrg55614929G9C2I259mp2e48G45720039389254J3GJI3GJIGGb1",
            "is_advertising": true,
            "lat": 50.021366,
            "lon": 36.240967,
            "match_type": 4,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374270559",
            "id": "70000001017907104_dxmhf6G6G7I2G1GJ2HA16szjeewB42758I4312318uvrg55614929G936I269mp2e48G45720038A08354J3GJI3GJIGGb7",
            "is_advertising": true,
            "lat": 50.002548,
            "lon": 36.268911,
            "match_type": 4,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374266910",
            "id": "70000001018500825_dxmhf6G6G7I2G1GJ2HA16szjeewB42758I4312318uvrg55614929G957I279mp2e48G45720039601A54J3GJI3GJIGG55",
            "is_advertising": true,
            "lat": 50.030608,
            "lon": 36.235053,
            "match_type": 4,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374256428",
            "id": "70000001017907192_dxmhf6G6G7I2G1GJ2HA16szjeewB42758I4312318uvrg55614929G9C4I289mp2e48G45720038A08354J3GJI3GJIGG06",
            "is_advertising": true,
            "lat": 49.921696,
            "lon": 36.26671,
            "match_type": 4,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374253159",
            "id": "70000001018899629_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312318uvrg55614929G95BI299mp2e48G4572003999A854J3GJI3GJIGGa4",
            "is_advertising": false,
            "lat": 49.964106,
            "lon": 36.24081,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374288905",
            "id": "70000001020304967_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312328uvrg55614929G999I309mp2e48G45720031405B54J3GJI3GJIGG81",
            "is_advertising": false,
            "lat": 50.017312,
            "lon": 36.291501,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374288224",
            "id": "70000001019632235_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312318uvrg55614929G967I319mp2e48G4572003A733454J3GJI3GJIGG13",
            "is_advertising": false,
            "lat": 50.013397,
            "lon": 36.289675,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374296727",
            "id": "70000001018222847_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312318uvrg55614929G979I329mp2e48G45720039323A54J3GJI3GJIGGef",
            "is_advertising": false,
            "lat": 50.002753,
            "lon": 36.217634,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374265612",
            "id": "70000001019073645_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312318uvrg55614929G977I339mp2e48G4572003A174854J3GJI3GJIGGc2",
            "is_advertising": false,
            "lat": 49.986123,
            "lon": 36.253359,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374296489",
            "id": "70000001018421082_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312318uvrg55614929G9B4I349mp2e48G45720039522254J3GJI3GJIGG50",
            "is_advertising": false,
            "lat": 49.998893,
            "lon": 36.22414,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374286375",
            "id": "70000001018577677_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312318uvrg55614929G9A9I359mp2e48G45720039678854J3GJI3GJIGG63",
            "is_advertising": false,
            "lat": 50.01149,
            "lon": 36.250822,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374267399",
            "id": "70000001018579065_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312318uvrg55614929G997I369mp2e48G4572003967A254J3GJI3GJIGGa2",
            "is_advertising": false,
            "lat": 49.986185,
            "lon": 36.203035,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374265873",
            "id": "70000001019122976_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312318uvrg55614929G9A8I379mp2e48G4572003A223B54J3GJI3GJIGGbe",
            "is_advertising": false,
            "lat": 49.986709,
            "lon": 36.254779,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374247390",
            "id": "70000001019031221_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312318uvrg55614929G953I389mp2e48G4572003A132454J3GJI3GJIGG21",
            "is_advertising": false,
            "lat": 49.967119,
            "lon": 36.255846,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374281983",
            "id": "70000001018551833_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312318uvrg55614929G965I399mp2e48G45720039652A54J3GJI3GJIGGd3",
            "is_advertising": false,
            "lat": 49.978386,
            "lon": 36.272053,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374267418",
            "id": "70000001018960802_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312318uvrg55614929G934I409mp2e48G45720039A61A54J3GJI3GJIGG12",
            "is_advertising": false,
            "lat": 49.972369,
            "lon": 36.194066,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374261003",
            "id": "70000001018523069_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312318uvrg55614929G99BI419mp2e48G45720039624254J3GJI3GJIGG82",
            "is_advertising": false,
            "lat": 50.058814,
            "lon": 36.193672,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374288490",
            "id": "70000001019588137_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312318uvrg55614929G969I429mp2e48G4572003A689354J3GJI3GJIGG68",
            "is_advertising": false,
            "lat": 50.026559,
            "lon": 36.300529,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374274614",
            "id": "70000001018221942_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312318uvrg55614929G974I439mp2e48G45720039322B54J3GJI3GJIGG9c",
            "is_advertising": false,
            "lat": 50.001475,
            "lon": 36.265818,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374266806",
            "id": "70000001020453613_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312328uvrg55614929G945I449mp2e48G45720031554854J3GJI3GJIGGd3",
            "is_advertising": false,
            "lat": 49.995234,
            "lon": 36.278999,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374254383",
            "id": "70000001018808491_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312318uvrg55614929G9C3I459mp2e48G45720039909654J3GJI3GJIGG6c",
            "is_advertising": false,
            "lat": 49.961371,
            "lon": 36.257963,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374253549",
            "id": "70000001018176081_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312318uvrg55614929G9B3I469mp2e48G45720039277254J3GJI3GJIGGc6",
            "is_advertising": false,
            "lat": 50.00088,
            "lon": 36.22047,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374284365",
            "id": "70000001018016545_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312318uvrg55614929G977I479mp2e48G45720039117754J3GJI3GJIGGba",
            "is_advertising": false,
            "lat": 49.953026,
            "lon": 36.13787,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374265813",
            "id": "70000001018522126_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312318uvrg55614929G958I489mp2e48G45720039623354J3GJI3GJIGG74",
            "is_advertising": false,
            "lat": 49.975275,
            "lon": 36.292711,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374246758",
            "id": "70000001018403209_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312318uvrg55614929G93BI499mp2e48G45720039504454J3GJI3GJIGGa5",
            "is_advertising": false,
            "lat": 49.987799,
            "lon": 36.241738,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374268363",
            "id": "70000001018561379_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312318uvrg55614929G9ABI509mp2e48G45720039662554J3GJI3GJIGG18",
            "is_advertising": false,
            "lat": 49.971914,
            "lon": 36.301611,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374255091",
            "id": "70000001018449681_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312318uvrg55614929G9B3I519mp2e48G4572003954A854J3GJI3GJIGG85",
            "is_advertising": false,
            "lat": 49.975164,
            "lon": 36.234243,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374246988",
            "id": "70000001027313657_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312328uvrg55614929G989I529mp2e48G45720038414854J3GJI3GJIGGd3",
            "is_advertising": false,
            "lat": 49.970238,
            "lon": 36.247718,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374246298",
            "id": "70000001018587867_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312318uvrg55614929G999I539mp2e48G45720039688A54J3GJI3GJIGG93",
            "is_advertising": false,
            "lat": 50.019904,
            "lon": 36.2855,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374279075",
            "id": "70000001034047691_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312338uvrg55614929G9C3I549mp2e48G45720035148854J3GJI3GJIGG1c",
            "is_advertising": false,
            "lat": 49.998355,
            "lon": 36.254073,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374267734",
            "id": "70000001018542419_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312318uvrg55614929G94BI559mp2e48G45720039643654J3GJI3GJIGG6a",
            "is_advertising": false,
            "lat": 50.045949,
            "lon": 36.213973,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374254527",
            "id": "70000001018855360_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312318uvrg55614929G992I569mp2e48G45720039956554J3GJI3GJIGG8f",
            "is_advertising": false,
            "lat": 49.952283,
            "lon": 36.259419,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "70030076127218275",
            "id": "70000001019047997_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312318uvrg55614929G9C9I579mp2e48G4572003A148B54J3GJI3GJIGG1d",
            "is_advertising": false,
            "lat": 50.015256,
            "lon": 36.231328,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374247255",
            "id": "70000001019015443_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312318uvrg55614929G975I589mp2e48G4572003A116654J3GJI3GJIGG94",
            "is_advertising": false,
            "lat": 49.968657,
            "lon": 36.254556,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374322208",
            "id": "70000001018891829_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312318uvrg55614929G95BI599mp2e48G45720039992A54J3GJI3GJIGG66",
            "is_advertising": false,
            "lat": 49.935223,
            "lon": 36.423095,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374275839",
            "id": "70000001018222704_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312318uvrg55614929G936I609mp2e48G45720039323954J3GJI3GJIGG09",
            "is_advertising": false,
            "lat": 49.981875,
            "lon": 36.259328,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374269549",
            "id": "70000001020475003_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312328uvrg55614929G935I619mp2e48G45720031576254J3GJI3GJIGG76",
            "is_advertising": false,
            "lat": 49.960744,
            "lon": 36.314791,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374254181",
            "id": "70000001018449763_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312318uvrg55614929G995I629mp2e48G4572003954A954J3GJI3GJIGG73",
            "is_advertising": false,
            "lat": 49.975443,
            "lon": 36.240023,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374266852",
            "id": "70000001018668363_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312318uvrg55614929G995I639mp2e48G45720039769554J3GJI3GJIGG22",
            "is_advertising": false,
            "lat": 50.005564,
            "lon": 36.34279,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374295956",
            "id": "70000001018562078_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312318uvrg55614929G9AAI649mp2e48G45720039663254J3GJI3GJIGG12",
            "is_advertising": false,
            "lat": 50.018038,
            "lon": 36.19442,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374298108",
            "id": "70000001019740672_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312318uvrg55614929G9A4I659mp2e48G4572003A841854J3GJI3GJIGGde",
            "is_advertising": false,
            "lat": 49.877146,
            "lon": 36.24548,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374325405",
            "id": "70000001018525159_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312318uvrg55614929G98BI669mp2e48G45720039626354J3GJI3GJIGG6f",
            "is_advertising": false,
            "lat": 50.011798,
            "lon": 36.216275,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374269282",
            "id": "70000001019015691_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312318uvrg55614929G9C3I679mp2e48G4572003A116854J3GJI3GJIGGbd",
            "is_advertising": false,
            "lat": 49.964092,
            "lon": 36.291689,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374288883",
            "id": "70000001021061199_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312328uvrg55614929G9CBI689mp2e48G45720032162354J3GJI3GJIGG6f",
            "is_advertising": false,
            "lat": 49.960685,
            "lon": 36.187134,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374282784",
            "id": "70000001021424413_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312328uvrg55614929G945I699mp2e48G45720032525654J3GJI3GJIGG5f",
            "is_advertising": false,
            "lat": 50.098005,
            "lon": 36.265366,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374264182",
            "id": "70000001020933905_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312328uvrg55614929G937I709mp2e48G45720031A34B54J3GJI3GJIGG9b",
            "is_advertising": false,
            "lat": 49.997269,
            "lon": 36.36072,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374266498",
            "id": "70000001018559236_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312318uvrg55614929G968I719mp2e48G4572003965A454J3GJI3GJIGG5b",
            "is_advertising": false,
            "lat": 50.008809,
            "lon": 36.320344,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374383559",
            "id": "70000001018297536_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312318uvrg55614929G968I729mp2e48G45720039398754J3GJI3GJIGG9c",
            "is_advertising": false,
            "lat": 49.980197,
            "lon": 36.207265,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374324477",
            "id": "70000001029062929_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312328uvrg55614929G95BI739mp2e48G4572003A163B54J3GJI3GJIGG4d",
            "is_advertising": false,
            "lat": 49.97041,
            "lon": 36.15993,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374322469",
            "id": "70000001018522587_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312318uvrg55614929G9B9I749mp2e48G45720039623754J3GJI3GJIGGc8",
            "is_advertising": false,
            "lat": 50.021303,
            "lon": 36.219305,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374330013",
            "id": "70000001018522811_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312318uvrg55614929G943I759mp2e48G45720039623A54J3GJI3GJIGG7e",
            "is_advertising": false,
            "lat": 50.05413,
            "lon": 36.193106,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374254443",
            "id": "70000001028093331_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312328uvrg55614929G963I769mp2e48G45720039194554J3GJI3GJIGGf8",
            "is_advertising": false,
            "lat": 49.983784,
            "lon": 36.221482,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374284406",
            "id": "70000001021930483_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312328uvrg55614929G9B5I779mp2e48G45720032A31654J3GJI3GJIGG34",
            "is_advertising": false,
            "lat": 49.972433,
            "lon": 36.357508,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374263068",
            "id": "70000001018543908_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312318uvrg55614929G93AI789mp2e48G45720039644B54J3GJI3GJIGGb3",
            "is_advertising": false,
            "lat": 49.998515,
            "lon": 36.313628,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374290672",
            "id": "70000001021381723_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312328uvrg55614929G955I799mp2e48G45720032482954J3GJI3GJIGG27",
            "is_advertising": false,
            "lat": 49.962415,
            "lon": 36.123153,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374283684",
            "id": "70000001023754871_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312328uvrg55614929G9A3I809mp2e48G45720034855A54J3GJI3GJIGG93",
            "is_advertising": false,
            "lat": 49.960145,
            "lon": 36.167369,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374267399",
            "id": "70000001018554714_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312318uvrg55614929G946I819mp2e48G45720039655954J3GJI3GJIGG05",
            "is_advertising": false,
            "lat": 49.986377,
            "lon": 36.202675,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374251500",
            "id": "70000001018279856_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312318uvrg55614929G988I829mp2e48G4572003937AA54J3GJI3GJIGGb0",
            "is_advertising": false,
            "lat": 49.985963,
            "lon": 36.211657,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374280031",
            "id": "70000001023273394_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312328uvrg55614929G9C6I839mp2e48G45720034374554J3GJI3GJIGGb0",
            "is_advertising": false,
            "lat": 50.042416,
            "lon": 36.210542,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374297594",
            "id": "70000001018027537_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312318uvrg55614929G969I849mp2e48G45720039128754J3GJI3GJIGG9d",
            "is_advertising": false,
            "lat": 50.037373,
            "lon": 36.346102,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374385385",
            "id": "70000001019501328_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312318uvrg55614929G95AI859mp2e48G4572003A602554J3GJI3GJIGG55",
            "is_advertising": false,
            "lat": 49.974478,
            "lon": 36.240378,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374325883",
            "id": "70000001018904987_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312318uvrg55614929G9B9I869mp2e48G45720039A05B54J3GJI3GJIGG23",
            "is_advertising": false,
            "lat": 49.911648,
            "lon": 36.222116,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374325318",
            "id": "70000001029429881_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312328uvrg55614929G9B3I879mp2e48G4572003A52AA54J3GJI3GJIGG92",
            "is_advertising": false,
            "lat": 49.942906,
            "lon": 36.252893,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374273634",
            "id": "70000001021389480_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312328uvrg55614929G9B2I889mp2e48G4572003248A654J3GJI3GJIGG1d",
            "is_advertising": false,
            "lat": 50.054079,
            "lon": 36.282359,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374278671",
            "id": "70000001018258757_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312318uvrg55614929G989I899mp2e48G45720039359954J3GJI3GJIGGd0",
            "is_advertising": false,
            "lat": 49.958756,
            "lon": 36.348797,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374252056",
            "id": "70000001018449717_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312318uvrg55614929G949I909mp2e48G4572003954A954J3GJI3GJIGG91",
            "is_advertising": false,
            "lat": 49.981413,
            "lon": 36.231467,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374266784",
            "id": "70000001018789892_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312318uvrg55614929G9C4I919mp2e48G4572003988AA54J3GJI3GJIGG32",
            "is_advertising": false,
            "lat": 49.993537,
            "lon": 36.279708,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374259374",
            "id": "70000001032328828_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312338uvrg55614929G95AI929mp2e48G45720033429A54J3GJI3GJIGG70",
            "is_advertising": false,
            "lat": 50.03236,
            "lon": 36.201446,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374323890",
            "id": "70000001018881689_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312318uvrg55614929G9BBI939mp2e48G45720039982854J3GJI3GJIGGb6",
            "is_advertising": false,
            "lat": 50.016381,
            "lon": 36.283907,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374291359",
            "id": "70000001018860656_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312318uvrg55614929G988I949mp2e48G45720039961854J3GJI3GJIGG20",
            "is_advertising": false,
            "lat": 49.973804,
            "lon": 36.170295,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374262049",
            "id": "70000001033776593_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312338uvrg55614929G9C5I959mp2e48G45720034877754J3GJI3GJIGG30",
            "is_advertising": false,
            "lat": 49.994866,
            "lon": 36.316125,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374263614",
            "id": "70000001019180785_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312318uvrg55614929G9B7I969mp2e48G4572003A281954J3GJI3GJIGGf7",
            "is_advertising": false,
            "lat": 49.963013,
            "lon": 36.280093,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374384154",
            "id": "70000001030787796_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312338uvrg55614929G9C8I979mp2e48G45720031888954J3GJI3GJIGG21",
            "is_advertising": false,
            "lat": 50.069771,
            "lon": 36.212267,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374263863",
            "id": "70000001018222601_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312318uvrg55614929G933I989mp2e48G45720039323854J3GJI3GJIGGf6",
            "is_advertising": false,
            "lat": 50.02771,
            "lon": 36.323613,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374257043",
            "id": "70000001018579468_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312318uvrg55614929G99AI999mp2e48G4572003967A654J3GJI3GJIGG2d",
            "is_advertising": false,
            "lat": 50.033899,
            "lon": 36.244056,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374282434",
            "id": "70000001021059592_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312328uvrg55614929G9C4IA09mp2e48G4572003215A754J3GJI3GJIGG3c",
            "is_advertising": false,
            "lat": 49.952965,
            "lon": 36.370733,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374264937",
            "id": "70000001030626879_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312338uvrg55614929G9ABIA19mp2e48G45720031727A54J3GJI3GJIGG85",
            "is_advertising": false,
            "lat": 49.999791,
            "lon": 36.355747,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374266335",
            "id": "70000001020725108_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312328uvrg55614929G93AIA29mp2e48G45720031826354J3GJI3GJIGG89",
            "is_advertising": false,
            "lat": 49.978305,
            "lon": 36.252325,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "70030076132402070",
            "id": "70000001019450245_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312318uvrg55614929G977IA39mp2e48G4572003A551454J3GJI3GJIGG07",
            "is_advertising": false,
            "lat": 49.996162,
            "lon": 36.208294,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374300376",
            "id": "70000001034308197_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312338uvrg55614929G9C9IA49mp2e48G45720035409354J3GJI3GJIGG8e",
            "is_advertising": false,
            "lat": 50.05472,
            "lon": 36.177084,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374249571",
            "id": "70000001019034684_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312318uvrg55614929G9B6IA59mp2e48G4572003A135854J3GJI3GJIGG4a",
            "is_advertising": false,
            "lat": 50.04879,
            "lon": 36.18026,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374269880",
            "id": "70000001019531669_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312318uvrg55614929G99BIA69mp2e48G4572003A632854J3GJI3GJIGGad",
            "is_advertising": false,
            "lat": 50.014991,
            "lon": 36.323997,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374261501",
            "id": "70000001018571279_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312318uvrg55614929G9ABIA79mp2e48G45720039672454J3GJI3GJIGG0f",
            "is_advertising": false,
            "lat": 49.989591,
            "lon": 36.291234,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374264886",
            "id": "70000001018213728_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312318uvrg55614929G95AIA89mp2e48G45720039314954J3GJI3GJIGGc2",
            "is_advertising": false,
            "lat": 49.953338,
            "lon": 36.343537,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374287620",
            "id": "70000001021381380_dxmhf6G6G7I2G1GJ1HA16szjeewB42758I4312328uvrg55614929G9B2IA99mp2e48G45720032482554J3GJI3GJIGG02",
            "is_advertising": false,
            "lat": 49.963471,
            "lon": 36.351424,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374266555",
            "id": "70000001018021068_xmhf9m48G455312319IGGG116szjed26G6G7G9I2G1I203H1rgewB48I4929G720032JIJ0Jp2e8uv56147512229AHA174H",
            "is_advertising": false,
            "lat": 50.00535,
            "lon": 36.313618,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "70030076151017986",
            "id": "70000001029109147_xmhf9m48G45531232AIGGGea6szjed26G6G7G9I2G1I204H1rgewB48I4929G720032JIJ0Jp2e8uv56147520A379HA174H",
            "is_advertising": false,
            "lat": 49.917264,
            "lon": 36.401403,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374252328",
            "id": "70000001029109102_xmhf9m48G45531232AIGGG356szjed26G6G7G9I2G1I205H1rgewB48I4929G720032JIJ0Jp2e8uv56147520A334HA174H",
            "is_advertising": false,
            "lat": 49.983111,
            "lon": 36.212227,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374327718",
            "id": "70000001019122328_xmhf9m48G45531231AIGGG386szjed26G6G7G9I2G1I206H1rgewB48I4929G720032JIJ0Jp2e8uv56147522355AHA174H",
            "is_advertising": false,
            "lat": 49.987798,
            "lon": 36.256815,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374282502",
            "id": "70000001034317521_xmhf9m48G455312335IGGGcd6szjed26G6G7G9I2G1I207H1rgewB48I4929G720032JIJ0Jp2e8uv561475418753HA174H",
            "is_advertising": false,
            "lat": 49.969765,
            "lon": 36.34939,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759409765825",
            "id": "70000001023643563_xmhf9m48G455312324IGGGed6szjed26G6G7G9I2G1I208H1rgewB48I4929G720032JIJ0Jp2e8uv561475744795HA174H",
            "is_advertising": false,
            "lat": 49.960569,
            "lon": 36.043828,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374279075",
            "id": "70000001018390834_xmhf9m48G455312319IGGGf76szjed26G6G7G9I2G1I209H1rgewB48I4929G720032JIJ0Jp2e8uv561475491A66HA174H",
            "is_advertising": false,
            "lat": 49.998557,
            "lon": 36.254456,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374317446",
            "id": "70000001018499131_xmhf9m48G455312319IGGGa86szjed26G6G7G9I2G1I20AH1rgewB48I4929G720032JIJ0Jp2e8uv56147559A363HA174H",
            "is_advertising": false,
            "lat": 49.979708,
            "lon": 36.253307,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374290284",
            "id": "70000001025233543_xmhf9m48G455312326IGGGb76szjed26G6G7G9I2G1I20BH1rgewB48I4929G720032JIJ0Jp2e8uv561475334775HA174H",
            "is_advertising": false,
            "lat": 50.008985,
            "lon": 36.292734,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374262968",
            "id": "70000001018958009_xmhf9m48G455312319IGGG876szjed26G6G7G9I2G1I20CH1rgewB48I4929G720032JIJ0Jp2e8uv561475A5923BHA174H",
            "is_advertising": false,
            "lat": 49.996078,
            "lon": 36.310648,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374270435",
            "id": "70000001018265190_xmhf9m48G455312319IGGG416szjed26G6G7G9I2G1I213H1rgewB48I4929G720032JIJ0Jp2e8uv5614753663C2HA174H",
            "is_advertising": false,
            "lat": 49.952975,
            "lon": 36.332174,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374300391",
            "id": "70000001019485650_xmhf9m48G45531231AIGGG326szjed26G6G7G9I2G1I214H1rgewB48I4929G720032JIJ0Jp2e8uv561475586882HA174H",
            "is_advertising": false,
            "lat": 49.982764,
            "lon": 36.341336,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374321126",
            "id": "70000001026041919_xmhf9m48G455312327IGGG736szjed26G6G7G9I2G1I215H1rgewB48I4929G720032JIJ0Jp2e8uv561475142B4BHA174H",
            "is_advertising": false,
            "lat": 49.982462,
            "lon": 36.245573,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374293713",
            "id": "70000001018857084_xmhf9m48G455312319IGGGca6szjed26G6G7G9I2G1I216H1rgewB48I4929G720032JIJ0Jp2e8uv5614759582B6HA174H",
            "is_advertising": false,
            "lat": 49.957502,
            "lon": 36.364771,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374250880",
            "id": "70000001019035101_xmhf9m48G45531231AIGGGce6szjed26G6G7G9I2G1I217H1rgewB48I4929G720032JIJ0Jp2e8uv561475136333HA174H",
            "is_advertising": false,
            "lat": 50.047652,
            "lon": 36.188335,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374319830",
            "id": "70000001030128950_xmhf9m48G455312331IGGG926szjed26G6G7G9I2G1I218H1rgewB48I4929G720032JIJ0Jp2e8uv561475229B82HA174H",
            "is_advertising": false,
            "lat": 50.057792,
            "lon": 36.191222,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374299743",
            "id": "70000001023307255_xmhf9m48G455312324IGGG526szjed26G6G7G9I2G1I219H1rgewB48I4929G720032JIJ0Jp2e8uv561475408487HA174H",
            "is_advertising": false,
            "lat": 50.032101,
            "lon": 36.340893,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374305678",
            "id": "70000001019868073_xmhf9m48G45531231AIGGG236szjed26G6G7G9I2G1I21AH1rgewB48I4929G720032JIJ0Jp2e8uv5614759692A5HA174H",
            "is_advertising": false,
            "lat": 49.954561,
            "lon": 36.12807,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374263236",
            "id": "70000001017984485_xmhf9m48G455312318IGGG656szjed26G6G7G9I2G1I21BH1rgewB48I4929G720032JIJ0Jp2e8uv561475A856B7HA174H",
            "is_advertising": false,
            "lat": 49.996207,
            "lon": 36.274041,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374267399",
            "id": "70000001018577183_xmhf9m48G455312319IGGG726szjed26G6G7G9I2G1I21CH1rgewB48I4929G720032JIJ0Jp2e8uv5614756783B5HA174H",
            "is_advertising": false,
            "lat": 49.986169,
            "lon": 36.202799,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374279022",
            "id": "70000001018262374_xmhf9m48G455312319IGGG506szjed26G6G7G9I2G1I223H1rgewB48I4929G720032JIJ0Jp2e8uv5614753635A6HA174H",
            "is_advertising": false,
            "lat": 49.953205,
            "lon": 36.336706,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374368048",
            "id": "70000001021380871_xmhf9m48G455312322IGGG606szjed26G6G7G9I2G1I224H1rgewB48I4929G720032JIJ0Jp2e8uv561475481AA3HA174H",
            "is_advertising": false,
            "lat": 50.035988,
            "lon": 36.297548,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374251531",
            "id": "70000001018542980_xmhf9m48G455312319IGGGae6szjed26G6G7G9I2G1I225H1rgewB48I4929G720032JIJ0Jp2e8uv561475643BB2HA174H",
            "is_advertising": false,
            "lat": 49.99299,
            "lon": 36.301137,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374259062",
            "id": "70000001018510242_xmhf9m48G455312319IGGG486szjed26G6G7G9I2G1I226H1rgewB48I4929G720032JIJ0Jp2e8uv561475611474HA174H",
            "is_advertising": false,
            "lat": 49.986365,
            "lon": 36.298474,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374269938",
            "id": "70000001018526464_xmhf9m48G455312319IGGG466szjed26G6G7G9I2G1I227H1rgewB48I4929G720032JIJ0Jp2e8uv561475627696HA174H",
            "is_advertising": false,
            "lat": 50.04842,
            "lon": 36.200468,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374332628",
            "id": "70000001019714579_xmhf9m48G45531231AIGGG6b6szjed26G6G7G9I2G1I228H1rgewB48I4929G720032JIJ0Jp2e8uv5614758157ABHA174H",
            "is_advertising": false,
            "lat": 49.993081,
            "lon": 36.195547,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374290995",
            "id": "70000001019547101_xmhf9m48G45531231AIGGGad6szjed26G6G7G9I2G1I229H1rgewB48I4929G720032JIJ0Jp2e8uv561475648333HA174H",
            "is_advertising": false,
            "lat": 49.950318,
            "lon": 36.299388,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374283047",
            "id": "70000001018396908_xmhf9m48G455312319IGGG846szjed26G6G7G9I2G1I22AH1rgewB48I4929G720032JIJ0Jp2e8uv561475497B3AHA174H",
            "is_advertising": false,
            "lat": 50.001264,
            "lon": 36.261064,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374325432",
            "id": "70000001019578989_xmhf9m48G45531231AIGGG656szjed26G6G7G9I2G1I22BH1rgewB48I4929G720032JIJ0Jp2e8uv561475679BBBHA174H",
            "is_advertising": false,
            "lat": 50.000916,
            "lon": 36.268938,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374250880",
            "id": "70000001019034571_xmhf9m48G45531231AIGGGc56szjed26G6G7G9I2G1I22CH1rgewB48I4929G720032JIJ0Jp2e8uv5614751357A3HA174H",
            "is_advertising": false,
            "lat": 50.047811,
            "lon": 36.189223,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374262633",
            "id": "70000001018933014_xmhf9m48G455312319IGGGe86szjed26G6G7G9I2G1I233H1rgewB48I4929G720032JIJ0Jp2e8uv561475A34246HA174H",
            "is_advertising": false,
            "lat": 49.959809,
            "lon": 36.253867,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374299937",
            "id": "70000001018768763_xmhf9m48G455312319IGGG186szjed26G6G7G9I2G1I234H1rgewB48I4929G720032JIJ0Jp2e8uv561475869995HA174H",
            "is_advertising": false,
            "lat": 49.939516,
            "lon": 36.425347,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374269829",
            "id": "70000001028307501_xmhf9m48G455312329IGGG186szjed26G6G7G9I2G1I235H1rgewB48I4929G720032JIJ0Jp2e8uv561475408733HA174H",
            "is_advertising": false,
            "lat": 50.03681,
            "lon": 36.21972,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374256553",
            "id": "70000001018500358_xmhf9m48G455312319IGGGd86szjed26G6G7G9I2G1I236H1rgewB48I4929G720032JIJ0Jp2e8uv56147560158AHA174H",
            "is_advertising": false,
            "lat": 50.020293,
            "lon": 36.214892,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374292543",
            "id": "70000001024675761_xmhf9m48G455312325IGGG046szjed26G6G7G9I2G1I237H1rgewB48I4929G720032JIJ0Jp2e8uv561475776993HA174H",
            "is_advertising": false,
            "lat": 50.074333,
            "lon": 36.20608,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374258955",
            "id": "70000001018176675_xmhf9m48G455312319IGGG546szjed26G6G7G9I2G1I238H1rgewB48I4929G720032JIJ0Jp2e8uv5614752778A7HA174H",
            "is_advertising": false,
            "lat": 49.937604,
            "lon": 36.261732,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374248863",
            "id": "70000001018475683_xmhf9m48G455312319IGGG5f6szjed26G6G7G9I2G1I239H1rgewB48I4929G720032JIJ0Jp2e8uv5614755768B5HA174H",
            "is_advertising": false,
            "lat": 49.990991,
            "lon": 36.220464,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374322288",
            "id": "70000001031456515_xmhf9m48G455312332IGGG836szjed26G6G7G9I2G1I23AH1rgewB48I4929G720032JIJ0Jp2e8uv561475557747HA174H",
            "is_advertising": false,
            "lat": 49.997102,
            "lon": 36.196913,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374261428",
            "id": "70000001033402119_xmhf9m48G455312334IGGGc06szjed26G6G7G9I2G1I23BH1rgewB48I4929G720032JIJ0Jp2e8uv56147550334BHA174H",
            "is_advertising": false,
            "lat": 49.984945,
            "lon": 36.299412,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374267079",
            "id": "70000001017963388_xmhf9m48G455312318IGGG176szjed26G6G7G9I2G1I23CH1rgewB48I4929G720032JIJ0Jp2e8uv561475A645BAHA174H",
            "is_advertising": false,
            "lat": 50.011548,
            "lon": 36.321112,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374258955",
            "id": "70000001018176950_xmhf9m48G455312319IGGGe76szjed26G6G7G9I2G1I243H1rgewB48I4929G720032JIJ0Jp2e8uv561475277B82HA174H",
            "is_advertising": false,
            "lat": 49.93789,
            "lon": 36.261771,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374272643",
            "id": "70000001018331608_xmhf9m48G455312319IGGG726szjed26G6G7G9I2G1I244H1rgewB48I4929G720032JIJ0Jp2e8uv56147543283AHA174H",
            "is_advertising": false,
            "lat": 49.945083,
            "lon": 36.311383,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374384776",
            "id": "70000001018389425_xmhf9m48G455312319IGGG766szjed26G6G7G9I2G1I245H1rgewB48I4929G720032JIJ0Jp2e8uv56147548A657HA174H",
            "is_advertising": false,
            "lat": 49.983872,
            "lon": 36.220829,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374259763",
            "id": "70000001019679998_xmhf9m48G45531231AIGGG2f6szjed26G6G7G9I2G1I246H1rgewB48I4929G720032JIJ0Jp2e8uv56147577ABCAHA174H",
            "is_advertising": false,
            "lat": 49.949301,
            "lon": 36.285127,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374260338",
            "id": "70000001018185324_xmhf9m48G455312319IGGG2d6szjed26G6G7G9I2G1I247H1rgewB48I4929G720032JIJ0Jp2e8uv561475286556HA174H",
            "is_advertising": false,
            "lat": 50.0176,
            "lon": 36.346613,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374247100",
            "id": "70000001018403482_xmhf9m48G455312319IGGGfd6szjed26G6G7G9I2G1I248H1rgewB48I4929G720032JIJ0Jp2e8uv5614755046B4HA174H",
            "is_advertising": false,
            "lat": 49.990342,
            "lon": 36.250303,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374275010",
            "id": "70000001032149370_xmhf9m48G455312333IGGG256szjed26G6G7G9I2G1I249H1rgewB48I4929G720032JIJ0Jp2e8uv56147524A5A2HA174H",
            "is_advertising": false,
            "lat": 50.062331,
            "lon": 36.197637,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374254443",
            "id": "70000001018298697_xmhf9m48G455312319IGGGad6szjed26G6G7G9I2G1I24AH1rgewB48I4929G720032JIJ0Jp2e8uv5614753998C9HA174H",
            "is_advertising": false,
            "lat": 49.983838,
            "lon": 36.220669,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374325498",
            "id": "70000001024307408_xmhf9m48G455312325IGGGd06szjed26G6G7G9I2G1I24BH1rgewB48I4929G720032JIJ0Jp2e8uv56147540863AHA174H",
            "is_advertising": false,
            "lat": 49.939265,
            "lon": 36.307836,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374270408",
            "id": "70000001019080953_xmhf9m48G45531231AIGGG586szjed26G6G7G9I2G1I24CH1rgewB48I4929G720032JIJ0Jp2e8uv561475181B85HA174H",
            "is_advertising": false,
            "lat": 49.95085,
            "lon": 36.308714,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374327708",
            "id": "70000001018428465_xmhf9m48G455312319IGGG016szjed26G6G7G9I2G1I253H1rgewB48I4929G720032JIJ0Jp2e8uv561475529697HA174H",
            "is_advertising": false,
            "lat": 49.987163,
            "lon": 36.260009,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374275839",
            "id": "70000001018222644_xmhf9m48G455312319IGGG846szjed26G6G7G9I2G1I254H1rgewB48I4929G720032JIJ0Jp2e8uv561475323876HA174H",
            "is_advertising": false,
            "lat": 49.981069,
            "lon": 36.258489,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374250558",
            "id": "70000001018221302_xmhf9m48G455312319IGGG3e6szjed26G6G7G9I2G1I255H1rgewB48I4929G720032JIJ0Jp2e8uv561475322534HA174H",
            "is_advertising": false,
            "lat": 49.995512,
            "lon": 36.213073,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374285254",
            "id": "70000001019374057_xmhf9m48G45531231AIGGG916szjed26G6G7G9I2G1I256H1rgewB48I4929G720032JIJ0Jp2e8uv561475475289HA174H",
            "is_advertising": false,
            "lat": 49.953084,
            "lon": 36.162227,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374319105",
            "id": "70000001027261115_xmhf9m48G455312328IGGG6a6szjed26G6G7G9I2G1I257H1rgewB48I4929G720032JIJ0Jp2e8uv561475362347HA174H",
            "is_advertising": false,
            "lat": 50.042221,
            "lon": 36.211435,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374246683",
            "id": "70000001018307366_xmhf9m48G455312319IGGGa96szjed26G6G7G9I2G1I258H1rgewB48I4929G720032JIJ0Jp2e8uv561475408598HA174H",
            "is_advertising": false,
            "lat": 49.980055,
            "lon": 36.218164,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374266217",
            "id": "70000001018527492_xmhf9m48G455312319IGGG596szjed26G6G7G9I2G1I259H1rgewB48I4929G720032JIJ0Jp2e8uv5614756286C4HA174H",
            "is_advertising": false,
            "lat": 49.978563,
            "lon": 36.283746,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374256208",
            "id": "70000001018387196_xmhf9m48G455312319IGGG576szjed26G6G7G9I2G1I25AH1rgewB48I4929G720032JIJ0Jp2e8uv5614754883C8HA174H",
            "is_advertising": false,
            "lat": 50.018597,
            "lon": 36.21434,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374259103",
            "id": "70000001019245219_xmhf9m48G45531231AIGGG4b6szjed26G6G7G9I2G1I25BH1rgewB48I4929G720032JIJ0Jp2e8uv56147534644BHA174H",
            "is_advertising": false,
            "lat": 49.941492,
            "lon": 36.271401,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374251935",
            "id": "70000001018346965_xmhf9m48G455312319IGGG2d6szjed26G6G7G9I2G1I25CH1rgewB48I4929G720032JIJ0Jp2e8uv561475447B97HA174H",
            "is_advertising": false,
            "lat": 49.997462,
            "lon": 36.211277,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374269602",
            "id": "70000001018543559_xmhf9m48G455312319IGGG676szjed26G6G7G9I2G1I263H1rgewB48I4929G720032JIJ0Jp2e8uv56147564478BHA174H",
            "is_advertising": false,
            "lat": 49.995019,
            "lon": 36.297292,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374290305",
            "id": "70000001025837174_xmhf9m48G455312326IGGGfb6szjed26G6G7G9I2G1I264H1rgewB48I4929G720032JIJ0Jp2e8uv5614759383A6HA174H",
            "is_advertising": false,
            "lat": 50.029931,
            "lon": 36.303324,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374248306",
            "id": "70000001018421851_xmhf9m48G455312319IGGGe96szjed26G6G7G9I2G1I265H1rgewB48I4929G720032JIJ0Jp2e8uv561475522A83HA174H",
            "is_advertising": false,
            "lat": 49.98669,
            "lon": 36.240189,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374277997",
            "id": "70000001018431509_xmhf9m48G455312319IGGGfc6szjed26G6G7G9I2G1I266H1rgewB48I4929G720032JIJ0Jp2e8uv56147553273BHA174H",
            "is_advertising": false,
            "lat": 49.985643,
            "lon": 36.278119,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374250880",
            "id": "70000001018588459_xmhf9m48G455312319IGGG0e6szjed26G6G7G9I2G1I267H1rgewB48I4929G720032JIJ0Jp2e8uv56147568968BHA174H",
            "is_advertising": false,
            "lat": 50.047991,
            "lon": 36.187827,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374324540",
            "id": "70000001029768144_xmhf9m48G45531232AIGGGe06szjed26G6G7G9I2G1I268H1rgewB48I4929G720032JIJ0Jp2e8uv561475869376HA174H",
            "is_advertising": false,
            "lat": 49.945658,
            "lon": 36.148695,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374279992",
            "id": "70000001018909336_xmhf9m48G455312319IGGG4d6szjed26G6G7G9I2G1I269H1rgewB48I4929G720032JIJ0Jp2e8uv561475A0A568HA174H",
            "is_advertising": false,
            "lat": 49.979771,
            "lon": 36.309909,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "70030076132647710",
            "id": "70000001019032106_xmhf9m48G45531231AIGGG9f6szjed26G6G7G9I2G1I26AH1rgewB48I4929G720032JIJ0Jp2e8uv561475133338HA174H",
            "is_advertising": false,
            "lat": 49.976663,
            "lon": 36.310668,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "70030076144272823",
            "id": "70000001029003388_xmhf9m48G45531232AIGGG936szjed26G6G7G9I2G1I26BH1rgewB48I4929G720032JIJ0Jp2e8uv5614751045BAHA174H",
            "is_advertising": false,
            "lat": 49.977021,
            "lon": 36.310698,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374246011",
            "id": "70000001018449652_xmhf9m48G455312319IGGG286szjed26G6G7G9I2G1I26CH1rgewB48I4929G720032JIJ0Jp2e8uv56147554A884HA174H",
            "is_advertising": false,
            "lat": 49.978976,
            "lon": 36.233957,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759414554935",
            "id": "70000001020177500_xmhf9m48G455312321IGGGf26szjed26G6G7G9I2G1I273H1rgewB48I4929G720032JIJ0Jp2e8uv561475278732HA174H",
            "is_advertising": false,
            "lat": 49.996402,
            "lon": 36.198611,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374255098",
            "id": "70000001018428282_xmhf9m48G455312319IGGG516szjed26G6G7G9I2G1I274H1rgewB48I4929G720032JIJ0Jp2e8uv5614755294B4HA174H",
            "is_advertising": false,
            "lat": 49.983183,
            "lon": 36.224899,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374255226",
            "id": "70000001023161924_xmhf9m48G455312324IGGGb76szjed26G6G7G9I2G1I275H1rgewB48I4929G720032JIJ0Jp2e8uv561475262B56HA174H",
            "is_advertising": false,
            "lat": 49.920971,
            "lon": 36.253384,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374266037",
            "id": "70000001018954950_xmhf9m48G455312319IGGGfe6szjed26G6G7G9I2G1I276H1rgewB48I4929G720032JIJ0Jp2e8uv561475A55B82HA174H",
            "is_advertising": false,
            "lat": 49.971175,
            "lon": 36.1914,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374295507",
            "id": "70000001018906376_xmhf9m48G455312319IGGGac6szjed26G6G7G9I2G1I277H1rgewB48I4929G720032JIJ0Jp2e8uv561475A075A8HA174H",
            "is_advertising": false,
            "lat": 49.985017,
            "lon": 36.381645,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374384771",
            "id": "70000001019459558_xmhf9m48G45531231AIGGG936szjed26G6G7G9I2G1I278H1rgewB48I4929G720032JIJ0Jp2e8uv56147555A78AHA174H",
            "is_advertising": false,
            "lat": 49.949039,
            "lon": 36.394982,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374269642",
            "id": "70000001019350046_xmhf9m48G45531231AIGGG6d6szjed26G6G7G9I2G1I279H1rgewB48I4929G720032JIJ0Jp2e8uv561475451278HA174H",
            "is_advertising": false,
            "lat": 49.994168,
            "lon": 36.302284,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374257088",
            "id": "70000001031751727_xmhf9m48G455312332IGGGf86szjed26G6G7G9I2G1I27AH1rgewB48I4929G720032JIJ0Jp2e8uv561475852959HA174H",
            "is_advertising": false,
            "lat": 49.967868,
            "lon": 36.261157,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374250558",
            "id": "70000001018221532_xmhf9m48G455312319IGGG3e6szjed26G6G7G9I2G1I27BH1rgewB48I4929G720032JIJ0Jp2e8uv561475322764HA174H",
            "is_advertising": false,
            "lat": 49.995016,
            "lon": 36.213637,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374257154",
            "id": "70000001018729267_xmhf9m48G455312319IGGGf86szjed26G6G7G9I2G1I27CH1rgewB48I4929G720032JIJ0Jp2e8uv56147582A499HA174H",
            "is_advertising": false,
            "lat": 50.028249,
            "lon": 36.252518,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374245976",
            "id": "70000001018335776_xmhf9m48G455312319IGGG416szjed26G6G7G9I2G1I283H1rgewB48I4929G720032JIJ0Jp2e8uv5614754369A8HA174H",
            "is_advertising": false,
            "lat": 49.97627,
            "lon": 36.232877,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374259697",
            "id": "70000001018433129_xmhf9m48G455312319IGGG366szjed26G6G7G9I2G1I284H1rgewB48I4929G720032JIJ0Jp2e8uv56147553435BHA174H",
            "is_advertising": false,
            "lat": 49.947002,
            "lon": 36.266559,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374283630",
            "id": "70000001022260562_xmhf9m48G455312323IGGG5a6szjed26G6G7G9I2G1I285H1rgewB48I4929G720032JIJ0Jp2e8uv561475361794HA174H",
            "is_advertising": false,
            "lat": 49.958845,
            "lon": 36.171842,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374304659",
            "id": "70000001024496371_xmhf9m48G455312325IGGG966szjed26G6G7G9I2G1I286H1rgewB48I4929G720032JIJ0Jp2e8uv5614755975A3HA174H",
            "is_advertising": false,
            "lat": 50.092828,
            "lon": 36.395151,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374276794",
            "id": "70000001019551031_xmhf9m48G45531231AIGGGc36szjed26G6G7G9I2G1I287H1rgewB48I4929G720032JIJ0Jp2e8uv561475652263HA174H",
            "is_advertising": false,
            "lat": 50.053014,
            "lon": 36.18597,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374276794",
            "id": "70000001020703539_xmhf9m48G455312321IGGG096szjed26G6G7G9I2G1I288H1rgewB48I4929G720032JIJ0Jp2e8uv56147580476BHA174H",
            "is_advertising": false,
            "lat": 50.052819,
            "lon": 36.18565,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374262464",
            "id": "70000001019073653_xmhf9m48G45531231AIGGGb46szjed26G6G7G9I2G1I289H1rgewB48I4929G720032JIJ0Jp2e8uv561475174885HA174H",
            "is_advertising": false,
            "lat": 49.957004,
            "lon": 36.27994,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374268581",
            "id": "70000001019098305_xmhf9m48G45531231AIGGG456szjed26G6G7G9I2G1I28AH1rgewB48I4929G720032JIJ0Jp2e8uv561475199537HA174H",
            "is_advertising": false,
            "lat": 49.964802,
            "lon": 36.305337,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374379669",
            "id": "70000001018268853_xmhf9m48G455312319IGGGf86szjed26G6G7G9I2G1I28BH1rgewB48I4929G720032JIJ0Jp2e8uv561475369A85HA174H",
            "is_advertising": false,
            "lat": 49.962009,
            "lon": 36.312735,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374327571",
            "id": "70000001020201528_xmhf9m48G455312321IGGG686szjed26G6G7G9I2G1I28CH1rgewB48I4929G720032JIJ0Jp2e8uv56147530275AHA174H",
            "is_advertising": false,
            "lat": 49.998225,
            "lon": 36.322536,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374322779",
            "id": "70000001018987826_xmhf9m48G455312319IGGG746szjed26G6G7G9I2G1I293H1rgewB48I4929G720032JIJ0Jp2e8uv561475A88A58HA174H",
            "is_advertising": false,
            "lat": 49.955978,
            "lon": 36.314535,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374282640",
            "id": "70000001032613165_xmhf9m48G455312333IGGG766szjed26G6G7G9I2G1I294H1rgewB48I4929G720032JIJ0Jp2e8uv561475714397HA174H",
            "is_advertising": false,
            "lat": 49.913761,
            "lon": 36.27589,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374287989",
            "id": "70000001018790864_xmhf9m48G455312319IGGGa26szjed26G6G7G9I2G1I295H1rgewB48I4929G720032JIJ0Jp2e8uv561475891A96HA174H",
            "is_advertising": false,
            "lat": 49.944113,
            "lon": 36.396039,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759418543444",
            "id": "70000001018012028_xmhf9m48G455312319IGGGed6szjed26G6G7G9I2G1I296H1rgewB48I4929G720032JIJ0Jp2e8uv56147511325AHA174H",
            "is_advertising": false,
            "lat": 50.033765,
            "lon": 36.357945,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374257640",
            "id": "70000001018390948_xmhf9m48G455312319IGGGc46szjed26G6G7G9I2G1I297H1rgewB48I4929G720032JIJ0Jp2e8uv561475491B7AHA174H",
            "is_advertising": false,
            "lat": 49.980473,
            "lon": 36.259036,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374304413",
            "id": "70000001022251990_xmhf9m48G455312323IGGGf86szjed26G6G7G9I2G1I298H1rgewB48I4929G720032JIJ0Jp2e8uv561475352BC2HA174H",
            "is_advertising": false,
            "lat": 49.964062,
            "lon": 36.085847,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374291262",
            "id": "70000001018856278_xmhf9m48G455312319IGGGbf6szjed26G6G7G9I2G1I299H1rgewB48I4929G720032JIJ0Jp2e8uv5614759574AAHA174H",
            "is_advertising": false,
            "lat": 49.96868,
            "lon": 36.167374,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374249298",
            "id": "70000001018521361_xmhf9m48G455312319IGGG536szjed26G6G7G9I2G1I29AH1rgewB48I4929G720032JIJ0Jp2e8uv561475622593HA174H",
            "is_advertising": false,
            "lat": 49.984648,
            "lon": 36.247448,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374250558",
            "id": "70000001018360908_xmhf9m48G455312319IGGGaf6szjed26G6G7G9I2G1I29BH1rgewB48I4929G720032JIJ0Jp2e8uv561475461B3AHA174H",
            "is_advertising": false,
            "lat": 49.995649,
            "lon": 36.212917,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374283607",
            "id": "70000001018544271_xmhf9m48G455312319IGGG066szjed26G6G7G9I2G1I29CH1rgewB48I4929G720032JIJ0Jp2e8uv5614756454A3HA174H",
            "is_advertising": false,
            "lat": 50.02389,
            "lon": 36.22606,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374273921",
            "id": "70000001018332501_xmhf9m48G455312319IGGGe96szjed26G6G7G9I2G1I303H1rgewB48I4929G720032JIJ0Jp2e8uv561475433733HA174H",
            "is_advertising": false,
            "lat": 49.956111,
            "lon": 36.362902,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374299490",
            "id": "70000001019598831_xmhf9m48G45531231AIGGGbf6szjed26G6G7G9I2G1I304H1rgewB48I4929G720032JIJ0Jp2e8uv561475699A63HA174H",
            "is_advertising": false,
            "lat": 50.003359,
            "lon": 36.188165,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374245978",
            "id": "70000001018691032_xmhf9m48G455312319IGGG3d6szjed26G6G7G9I2G1I305H1rgewB48I4929G720032JIJ0Jp2e8uv561475792264HA174H",
            "is_advertising": false,
            "lat": 50.017478,
            "lon": 36.2515,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374275436",
            "id": "70000001019059868_xmhf9m48G45531231AIGGG836szjed26G6G7G9I2G1I306H1rgewB48I4929G720032JIJ0Jp2e8uv56147515AA9AHA174H",
            "is_advertising": false,
            "lat": 50.040171,
            "lon": 36.197064,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374360717",
            "id": "70000001027535986_xmhf9m48G455312328IGGG866szjed26G6G7G9I2G1I307H1rgewB48I4929G720032JIJ0Jp2e8uv561475636BB8HA174H",
            "is_advertising": false,
            "lat": 49.975476,
            "lon": 36.104919,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374321797",
            "id": "70000001018736528_xmhf9m48G455312319IGGGe86szjed26G6G7G9I2G1I308H1rgewB48I4929G720032JIJ0Jp2e8uv56147583775AHA174H",
            "is_advertising": false,
            "lat": 50.021909,
            "lon": 36.218685,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374270327",
            "id": "70000001032594869_xmhf9m48G455312333IGGGf46szjed26G6G7G9I2G1I309H1rgewB48I4929G720032JIJ0Jp2e8uv561475695A9BHA174H",
            "is_advertising": false,
            "lat": 49.957532,
            "lon": 36.307599,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374288611",
            "id": "70000001019381418_xmhf9m48G45531231AIGGG7e6szjed26G6G7G9I2G1I30AH1rgewB48I4929G720032JIJ0Jp2e8uv56147548264AHA174H",
            "is_advertising": false,
            "lat": 50.043137,
            "lon": 36.321377,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374282283",
            "id": "70000001019585688_xmhf9m48G45531231AIGGGc36szjed26G6G7G9I2G1I30BH1rgewB48I4929G720032JIJ0Jp2e8uv5614756868BAHA174H",
            "is_advertising": false,
            "lat": 49.962653,
            "lon": 36.34944,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374249856",
            "id": "70000001018490933_xmhf9m48G455312319IGGG8f6szjed26G6G7G9I2G1I30CH1rgewB48I4929G720032JIJ0Jp2e8uv561475591B65HA174H",
            "is_advertising": false,
            "lat": 49.982116,
            "lon": 36.253802,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374325373",
            "id": "70000001018525243_xmhf9m48G455312319IGGG4b6szjed26G6G7G9I2G1I313H1rgewB48I4929G720032JIJ0Jp2e8uv561475626475HA174H",
            "is_advertising": false,
            "lat": 50.031105,
            "lon": 36.201097,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374343355",
            "id": "70000001018965847_xmhf9m48G455312319IGGGf76szjed26G6G7G9I2G1I314H1rgewB48I4929G720032JIJ0Jp2e8uv561475A66A79HA174H",
            "is_advertising": false,
            "lat": 50.028462,
            "lon": 36.371454,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374292503",
            "id": "70000001023411243_xmhf9m48G455312324IGGG4f6szjed26G6G7G9I2G1I315H1rgewB48I4929G720032JIJ0Jp2e8uv561475512475HA174H",
            "is_advertising": false,
            "lat": 49.981457,
            "lon": 36.162895,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374325488",
            "id": "70000001019646596_xmhf9m48G45531231AIGGG1d6szjed26G6G7G9I2G1I316H1rgewB48I4929G720032JIJ0Jp2e8uv5614757477C8HA174H",
            "is_advertising": false,
            "lat": 49.991559,
            "lon": 36.147856,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374279730",
            "id": "70000001020177464_xmhf9m48G455312321IGGG906szjed26G6G7G9I2G1I317H1rgewB48I4929G720032JIJ0Jp2e8uv561475278696HA174H",
            "is_advertising": false,
            "lat": 50.028383,
            "lon": 36.255204,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374299743",
            "id": "70000001017884246_xmhf9m48G455312318IGGGa86szjed26G6G7G9I2G1I318H1rgewB48I4929G720032JIJ0Jp2e8uv561475985478HA174H",
            "is_advertising": false,
            "lat": 50.032101,
            "lon": 36.340893,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374247886",
            "id": "70000001034454332_xmhf9m48G455312335IGGGe16szjed26G6G7G9I2G1I319H1rgewB48I4929G720032JIJ0Jp2e8uv561475555564HA174H",
            "is_advertising": false,
            "lat": 50.045437,
            "lon": 36.296275,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374287803",
            "id": "70000001021381395_xmhf9m48G455312322IGGG5b6szjed26G6G7G9I2G1I31AH1rgewB48I4929G720032JIJ0Jp2e8uv5614754825C7HA174H",
            "is_advertising": false,
            "lat": 49.891603,
            "lon": 36.151837,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374249382",
            "id": "70000001019167890_xmhf9m48G45531231AIGGGab6szjed26G6G7G9I2G1I31BH1rgewB48I4929G720032JIJ0Jp2e8uv561475268AC2HA174H",
            "is_advertising": false,
            "lat": 49.983646,
            "lon": 36.216108,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374278136",
            "id": "70000001018428770_xmhf9m48G455312319IGGGca6szjed26G6G7G9I2G1I31CH1rgewB48I4929G720032JIJ0Jp2e8uv5614755299A2HA174H",
            "is_advertising": false,
            "lat": 49.986544,
            "lon": 36.27766,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374298077",
            "id": "70000001018538163_xmhf9m48G455312319IGGG446szjed26G6G7G9I2G1I323H1rgewB48I4929G720032JIJ0Jp2e8uv561475639395HA174H",
            "is_advertising": false,
            "lat": 49.997602,
            "lon": 36.202569,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374337182",
            "id": "70000001032823645_xmhf9m48G455312333IGGG426szjed26G6G7G9I2G1I324H1rgewB48I4929G720032JIJ0Jp2e8uv561475924877HA174H",
            "is_advertising": false,
            "lat": 50.015991,
            "lon": 36.217175,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374251606",
            "id": "70000001032930382_xmhf9m48G455312333IGGGd06szjed26G6G7G9I2G1I325H1rgewB48I4929G720032JIJ0Jp2e8uv561475A315B4HA174H",
            "is_advertising": false,
            "lat": 49.986652,
            "lon": 36.210791,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "70030076151853982",
            "id": "70000001029384056_xmhf9m48G45531232AIGGG306szjed26G6G7G9I2G1I326H1rgewB48I4929G720032JIJ0Jp2e8uv561475485288HA174H",
            "is_advertising": false,
            "lat": 50.033988,
            "lon": 36.371156,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374303301",
            "id": "70000001020380719_xmhf9m48G455312321IGGG8c6szjed26G6G7G9I2G1I327H1rgewB48I4929G720032JIJ0Jp2e8uv56147548194BHA174H",
            "is_advertising": false,
            "lat": 49.963725,
            "lon": 36.126475,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374369905",
            "id": "70000001032740735_xmhf9m48G455312333IGGG2b6szjed26G6G7G9I2G1I328H1rgewB48I4929G720032JIJ0Jp2e8uv561475841967HA174H",
            "is_advertising": false,
            "lat": 49.990763,
            "lon": 36.28066,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374256812",
            "id": "70000001018418572_xmhf9m48G455312319IGGG196szjed26G6G7G9I2G1I329H1rgewB48I4929G720032JIJ0Jp2e8uv5614755197A4HA174H",
            "is_advertising": false,
            "lat": 49.988939,
            "lon": 36.271521,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374271560",
            "id": "70000001017986434_xmhf9m48G455312318IGGGe76szjed26G6G7G9I2G1I32AH1rgewB48I4929G720032JIJ0Jp2e8uv561475A87666HA174H",
            "is_advertising": false,
            "lat": 49.99563,
            "lon": 36.266362,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374265833",
            "id": "70000001031970480_xmhf9m48G455312332IGGG8a6szjed26G6G7G9I2G1I32BH1rgewB48I4929G720032JIJ0Jp2e8uv561475A716B2HA174H",
            "is_advertising": false,
            "lat": 49.97536,
            "lon": 36.29122,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374272222",
            "id": "70000001019547878_xmhf9m48G45531231AIGGG1d6szjed26G6G7G9I2G1I32CH1rgewB48I4929G720032JIJ0Jp2e8uv561475648AAAHA174H",
            "is_advertising": false,
            "lat": 49.950176,
            "lon": 36.300921,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374253742",
            "id": "70000001019868357_xmhf9m48G45531231AIGGG306szjed26G6G7G9I2G1I333H1rgewB48I4929G720032JIJ0Jp2e8uv561475969589HA174H",
            "is_advertising": false,
            "lat": 50.010372,
            "lon": 36.220272,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374283391",
            "id": "70000001018880079_xmhf9m48G455312319IGGG5d6szjed26G6G7G9I2G1I334H1rgewB48I4929G720032JIJ0Jp2e8uv5614759812ABHA174H",
            "is_advertising": false,
            "lat": 50.033656,
            "lon": 36.200496,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759417323094",
            "id": "70000001024496196_xmhf9m48G455312325IGGG0c6szjed26G6G7G9I2G1I335H1rgewB48I4929G720032JIJ0Jp2e8uv5614755973C8HA174H",
            "is_advertising": false,
            "lat": 50.081341,
            "lon": 36.383825,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374297500",
            "id": "70000001017883760_xmhf9m48G455312318IGGG4d6szjed26G6G7G9I2G1I336H1rgewB48I4929G720032JIJ0Jp2e8uv561475984992HA174H",
            "is_advertising": false,
            "lat": 50.027423,
            "lon": 36.337862,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374251964",
            "id": "70000001019810491_xmhf9m48G45531231AIGGG056szjed26G6G7G9I2G1I337H1rgewB48I4929G720032JIJ0Jp2e8uv5614759116C3HA174H",
            "is_advertising": false,
            "lat": 50.090057,
            "lon": 36.124297,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374282766",
            "id": "70000001017890306_xmhf9m48G455312318IGGG1c6szjed26G6G7G9I2G1I338H1rgewB48I4929G720032JIJ0Jp2e8uv561475991538HA174H",
            "is_advertising": false,
            "lat": 49.998393,
            "lon": 36.319673,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374268468",
            "id": "70000001018526647_xmhf9m48G455312319IGGG2a6szjed26G6G7G9I2G1I339H1rgewB48I4929G720032JIJ0Jp2e8uv561475627879HA174H",
            "is_advertising": false,
            "lat": 49.972929,
            "lon": 36.259254,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374296735",
            "id": "70000001021716453_xmhf9m48G455312322IGGG636szjed26G6G7G9I2G1I33AH1rgewB48I4929G720032JIJ0Jp2e8uv561475817685HA174H",
            "is_advertising": false,
            "lat": 50.00218,
            "lon": 36.215745,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374253742",
            "id": "70000001018342068_xmhf9m48G455312319IGGG496szjed26G6G7G9I2G1I33BH1rgewB48I4929G720032JIJ0Jp2e8uv56147544329AHA174H",
            "is_advertising": false,
            "lat": 50.010798,
            "lon": 36.220703,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374298463",
            "id": "70000001025928956_xmhf9m48G455312326IGGG526szjed26G6G7G9I2G1I33CH1rgewB48I4929G720032JIJ0Jp2e8uv561475A29B88HA174H",
            "is_advertising": false,
            "lat": 50.000773,
            "lon": 36.210284,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374247662",
            "id": "70000001020399886_xmhf9m48G455312321IGGG806szjed26G6G7G9I2G1I343H1rgewB48I4929G720032JIJ0Jp2e8uv56147549AAB8HA174H",
            "is_advertising": false,
            "lat": 50.020156,
            "lon": 36.267193,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374261961",
            "id": "70000001018939843_xmhf9m48G455312319IGGG6d6szjed26G6G7G9I2G1I344H1rgewB48I4929G720032JIJ0Jp2e8uv561475A3AA75HA174H",
            "is_advertising": false,
            "lat": 49.994629,
            "lon": 36.318056,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374320039",
            "id": "70000001018521911_xmhf9m48G455312319IGGG366szjed26G6G7G9I2G1I345H1rgewB48I4929G720032JIJ0Jp2e8uv561475622B43HA174H",
            "is_advertising": false,
            "lat": 49.992761,
            "lon": 36.210605,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374256564",
            "id": "70000001024636952_xmhf9m48G455312325IGGG576szjed26G6G7G9I2G1I346H1rgewB48I4929G720032JIJ0Jp2e8uv561475737B84HA174H",
            "is_advertising": false,
            "lat": 49.927381,
            "lon": 36.265016,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374377784",
            "id": "70000001018290418_xmhf9m48G455312319IGGG366szjed26G6G7G9I2G1I347H1rgewB48I4929G720032JIJ0Jp2e8uv56147539164AHA174H",
            "is_advertising": false,
            "lat": 49.961588,
            "lon": 36.349252,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374297524",
            "id": "70000001031753184_xmhf9m48G455312332IGGG5e6szjed26G6G7G9I2G1I348H1rgewB48I4929G720032JIJ0Jp2e8uv5614758543B6HA174H",
            "is_advertising": false,
            "lat": 50.033472,
            "lon": 36.340869,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374324357",
            "id": "70000001019311614_xmhf9m48G45531231AIGGGf66szjed26G6G7G9I2G1I349H1rgewB48I4929G720032JIJ0Jp2e8uv561475412846HA174H",
            "is_advertising": false,
            "lat": 49.955006,
            "lon": 36.133093,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374255267",
            "id": "70000001018332976_xmhf9m48G455312319IGGG566szjed26G6G7G9I2G1I34AH1rgewB48I4929G720032JIJ0Jp2e8uv561475433BA8HA174H",
            "is_advertising": false,
            "lat": 50.01139,
            "lon": 36.219286,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374305075",
            "id": "70000001022072984_xmhf9m48G455312323IGGG556szjed26G6G7G9I2G1I34BH1rgewB48I4929G720032JIJ0Jp2e8uv561475173BB6HA174H",
            "is_advertising": false,
            "lat": 49.968606,
            "lon": 36.098614,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374261538",
            "id": "70000001018520735_xmhf9m48G455312319IGGGb66szjed26G6G7G9I2G1I34CH1rgewB48I4929G720032JIJ0Jp2e8uv561475621967HA174H",
            "is_advertising": false,
            "lat": 49.992646,
            "lon": 36.295439,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374272424",
            "id": "70000001018274391_xmhf9m48G455312319IGGG6f6szjed26G6G7G9I2G1I353H1rgewB48I4929G720032JIJ0Jp2e8uv5614753755C3HA174H",
            "is_advertising": false,
            "lat": 49.986794,
            "lon": 36.258846,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374247276",
            "id": "70000001018319643_xmhf9m48G455312319IGGG706szjed26G6G7G9I2G1I354H1rgewB48I4929G720032JIJ0Jp2e8uv56147541A875HA174H",
            "is_advertising": false,
            "lat": 49.986173,
            "lon": 36.233912,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374385796",
            "id": "70000001019750018_xmhf9m48G45531231AIGGG986szjed26G6G7G9I2G1I355H1rgewB48I4929G720032JIJ0Jp2e8uv56147585124AHA174H",
            "is_advertising": false,
            "lat": 50.045194,
            "lon": 36.297314,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374254820",
            "id": "70000001018804276_xmhf9m48G455312319IGGGed6szjed26G6G7G9I2G1I356H1rgewB48I4929G720032JIJ0Jp2e8uv5614759054A8HA174H",
            "is_advertising": false,
            "lat": 49.922584,
            "lon": 36.266409,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374321016",
            "id": "70000001018037475_xmhf9m48G455312319IGGGda6szjed26G6G7G9I2G1I357H1rgewB48I4929G720032JIJ0Jp2e8uv5614751386A7HA174H",
            "is_advertising": false,
            "lat": 50.044642,
            "lon": 36.358374,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374286953",
            "id": "70000001025739158_xmhf9m48G455312326IGGGbf6szjed26G6G7G9I2G1I358H1rgewB48I4929G720032JIJ0Jp2e8uv56147583A38AHA174H",
            "is_advertising": false,
            "lat": 49.912363,
            "lon": 36.200897,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374307550",
            "id": "70000001019013124_xmhf9m48G45531231AIGGGd56szjed26G6G7G9I2G1I359H1rgewB48I4929G720032JIJ0Jp2e8uv561475114356HA174H",
            "is_advertising": false,
            "lat": 49.922699,
            "lon": 36.415949,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374299464",
            "id": "70000001032519996_xmhf9m48G455312333IGGG126szjed26G6G7G9I2G1I35AH1rgewB48I4929G720032JIJ0Jp2e8uv56147561ABC8HA174H",
            "is_advertising": false,
            "lat": 49.940908,
            "lon": 36.424705,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374257120",
            "id": "70000001025685200_xmhf9m48G455312326IGGG156szjed26G6G7G9I2G1I35BH1rgewB48I4929G720032JIJ0Jp2e8uv561475786432HA174H",
            "is_advertising": false,
            "lat": 49.997437,
            "lon": 36.272708,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759409731653",
            "id": "70000001023039503_xmhf9m48G455312324IGGG376szjed26G6G7G9I2G1I35CH1rgewB48I4929G720032JIJ0Jp2e8uv56147513A735HA174H",
            "is_advertising": false,
            "lat": 50.009346,
            "lon": 36.271748,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374249462",
            "id": "70000001020251828_xmhf9m48G455312321IGGG036szjed26G6G7G9I2G1I363H1rgewB48I4929G720032JIJ0Jp2e8uv561475352A5AHA174H",
            "is_advertising": false,
            "lat": 49.985814,
            "lon": 36.252383,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374248819",
            "id": "70000001022354815_xmhf9m48G455312323IGGG266szjed26G6G7G9I2G1I364H1rgewB48I4929G720032JIJ0Jp2e8uv561475455A47HA174H",
            "is_advertising": false,
            "lat": 49.982145,
            "lon": 36.249668,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374250558",
            "id": "70000001018221610_xmhf9m48G455312319IGGGb36szjed26G6G7G9I2G1I365H1rgewB48I4929G720032JIJ0Jp2e8uv561475322842HA174H",
            "is_advertising": false,
            "lat": 49.995124,
            "lon": 36.213515,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374317164",
            "id": "70000001018293810_xmhf9m48G455312319IGGG6b6szjed26G6G7G9I2G1I366H1rgewB48I4929G720032JIJ0Jp2e8uv561475394A42HA174H",
            "is_advertising": false,
            "lat": 49.984474,
            "lon": 36.211578,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374337182",
            "id": "70000001020821191_xmhf9m48G455312321IGGGae6szjed26G6G7G9I2G1I367H1rgewB48I4929G720032JIJ0Jp2e8uv5614759223C3HA174H",
            "is_advertising": false,
            "lat": 50.015991,
            "lon": 36.217175,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374383831",
            "id": "70000001018526577_xmhf9m48G455312319IGGGcd6szjed26G6G7G9I2G1I368H1rgewB48I4929G720032JIJ0Jp2e8uv5614756277A9HA174H",
            "is_advertising": false,
            "lat": 49.99159,
            "lon": 36.20735,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374263455",
            "id": "70000001027249110_xmhf9m48G455312328IGGG446szjed26G6G7G9I2G1I369H1rgewB48I4929G720032JIJ0Jp2e8uv56147534A342HA174H",
            "is_advertising": false,
            "lat": 50.104986,
            "lon": 36.269265,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374304576",
            "id": "70000001022243541_xmhf9m48G455312323IGGG906szjed26G6G7G9I2G1I36AH1rgewB48I4929G720032JIJ0Jp2e8uv561475344773HA174H",
            "is_advertising": false,
            "lat": 49.97095,
            "lon": 36.127774,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "70030076161949330",
            "id": "70000001032597885_xmhf9m48G455312333IGGG266szjed26G6G7G9I2G1I36BH1rgewB48I4929G720032JIJ0Jp2e8uv561475698AB7HA174H",
            "is_advertising": false,
            "lat": 49.967804,
            "lon": 36.262008,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374279022",
            "id": "70000001018262059_xmhf9m48G455312319IGGGc26szjed26G6G7G9I2G1I36CH1rgewB48I4929G720032JIJ0Jp2e8uv56147536328BHA174H",
            "is_advertising": false,
            "lat": 49.953214,
            "lon": 36.337027,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374359825",
            "id": "70000001027381866_xmhf9m48G455312328IGGG136szjed26G6G7G9I2G1I373H1rgewB48I4929G720032JIJ0Jp2e8uv561475482A98HA174H",
            "is_advertising": false,
            "lat": 49.982355,
            "lon": 36.267586,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374275839",
            "id": "70000001018222673_xmhf9m48G455312319IGGG9b6szjed26G6G7G9I2G1I374H1rgewB48I4929G720032JIJ0Jp2e8uv5614753238A5HA174H",
            "is_advertising": false,
            "lat": 49.981144,
            "lon": 36.258773,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374257088",
            "id": "70000001026042540_xmhf9m48G455312327IGGGab6szjed26G6G7G9I2G1I375H1rgewB48I4929G720032JIJ0Jp2e8uv561475143772HA174H",
            "is_advertising": false,
            "lat": 49.967868,
            "lon": 36.261157,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "70030076164113541",
            "id": "70000001032729496_xmhf9m48G455312333IGGGab6szjed26G6G7G9I2G1I376H1rgewB48I4929G720032JIJ0Jp2e8uv56147582A6C8HA174H",
            "is_advertising": false,
            "lat": 49.986842,
            "lon": 36.201006,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374263572",
            "id": "70000001021740828_xmhf9m48G455312322IGGG516szjed26G6G7G9I2G1I377H1rgewB48I4929G720032JIJ0Jp2e8uv561475841A5AHA174H",
            "is_advertising": false,
            "lat": 49.960089,
            "lon": 36.282994,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374363608",
            "id": "70000001018544122_xmhf9m48G455312319IGGG746szjed26G6G7G9I2G1I378H1rgewB48I4929G720032JIJ0Jp2e8uv561475645354HA174H",
            "is_advertising": false,
            "lat": 49.996708,
            "lon": 36.313057,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374261961",
            "id": "70000001032518099_xmhf9m48G455312333IGGG1a6szjed26G6G7G9I2G1I379H1rgewB48I4929G720032JIJ0Jp2e8uv5614756192CBHA174H",
            "is_advertising": false,
            "lat": 49.994629,
            "lon": 36.318056,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374265044",
            "id": "70000001018780830_xmhf9m48G455312319IGGGf36szjed26G6G7G9I2G1I37AH1rgewB48I4929G720032JIJ0Jp2e8uv561475881A62HA174H",
            "is_advertising": false,
            "lat": 49.948834,
            "lon": 36.276089,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374257154",
            "id": "70000001022680400_xmhf9m48G455312323IGGGe66szjed26G6G7G9I2G1I37BH1rgewB48I4929G720032JIJ0Jp2e8uv561475781632HA174H",
            "is_advertising": false,
            "lat": 50.028249,
            "lon": 36.252518,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374251631",
            "id": "70000001019663245_xmhf9m48G45531231AIGGGeb6szjed26G6G7G9I2G1I37CH1rgewB48I4929G720032JIJ0Jp2e8uv561475764477HA174H",
            "is_advertising": false,
            "lat": 49.970723,
            "lon": 36.236437,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374374809",
            "id": "70000001020724967_xmhf9m48G455312321IGGG796szjed26G6G7G9I2G1I383H1rgewB48I4929G720032JIJ0Jp2e8uv561475825B99HA174H",
            "is_advertising": false,
            "lat": 50.045195,
            "lon": 36.297519,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374256697",
            "id": "70000001018421751_xmhf9m48G455312319IGGG386szjed26G6G7G9I2G1I384H1rgewB48I4929G720032JIJ0Jp2e8uv561475522983HA174H",
            "is_advertising": false,
            "lat": 49.979018,
            "lon": 36.224376,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374321016",
            "id": "70000001032168932_xmhf9m48G455312333IGGGd06szjed26G6G7G9I2G1I385H1rgewB48I4929G720032JIJ0Jp2e8uv561475269B64HA174H",
            "is_advertising": false,
            "lat": 50.043791,
            "lon": 36.359714,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374288931",
            "id": "70000001028623250_xmhf9m48G455312329IGGGf06szjed26G6G7G9I2G1I386H1rgewB48I4929G720032JIJ0Jp2e8uv561475724482HA174H",
            "is_advertising": false,
            "lat": 49.960307,
            "lon": 36.186529,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374291473",
            "id": "70000001031628870_xmhf9m48G455312332IGGG026szjed26G6G7G9I2G1I387H1rgewB48I4929G720032JIJ0Jp2e8uv561475729AA2HA174H",
            "is_advertising": false,
            "lat": 49.973821,
            "lon": 36.156449,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "70030076154647516",
            "id": "70000001029713545_xmhf9m48G45531232AIGGGbd6szjed26G6G7G9I2G1I388H1rgewB48I4929G720032JIJ0Jp2e8uv561475814777HA174H",
            "is_advertising": false,
            "lat": 49.923125,
            "lon": 36.426257,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374322395",
            "id": "70000001018876070_xmhf9m48G455312319IGGG536szjed26G6G7G9I2G1I389H1rgewB48I4929G720032JIJ0Jp2e8uv5614759772A2HA174H",
            "is_advertising": false,
            "lat": 50.006428,
            "lon": 36.356263,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759413000769",
            "id": "70000001021536066_xmhf9m48G455312322IGGG836szjed26G6G7G9I2G1I38AH1rgewB48I4929G720032JIJ0Jp2e8uv561475637298HA174H",
            "is_advertising": false,
            "lat": 49.994979,
            "lon": 36.266788,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374256564",
            "id": "70000001018222210_xmhf9m48G455312319IGGGd96szjed26G6G7G9I2G1I38BH1rgewB48I4929G720032JIJ0Jp2e8uv561475323442HA174H",
            "is_advertising": false,
            "lat": 49.928413,
            "lon": 36.264091,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374251659",
            "id": "70000001018280966_xmhf9m48G455312319IGGG836szjed26G6G7G9I2G1I38CH1rgewB48I4929G720032JIJ0Jp2e8uv561475381B98HA174H",
            "is_advertising": false,
            "lat": 49.985369,
            "lon": 36.20647,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374283495",
            "id": "70000001018586052_xmhf9m48G455312319IGGG006szjed26G6G7G9I2G1I393H1rgewB48I4929G720032JIJ0Jp2e8uv561475687284HA174H",
            "is_advertising": false,
            "lat": 50.004572,
            "lon": 36.198881,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374257154",
            "id": "70000001018941033_xmhf9m48G455312319IGGG776szjed26G6G7G9I2G1I394H1rgewB48I4929G720032JIJ0Jp2e8uv561475A42265HA174H",
            "is_advertising": false,
            "lat": 50.028249,
            "lon": 36.252518,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759418278338",
            "id": "70000001018892255_xmhf9m48G455312319IGGGe26szjed26G6G7G9I2G1I395H1rgewB48I4929G720032JIJ0Jp2e8uv561475993487HA174H",
            "is_advertising": false,
            "lat": 49.936344,
            "lon": 36.425334,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374250558",
            "id": "70000001018221378_xmhf9m48G455312319IGGG4c6szjed26G6G7G9I2G1I396H1rgewB48I4929G720032JIJ0Jp2e8uv5614753225AAHA174H",
            "is_advertising": false,
            "lat": 49.995444,
            "lon": 36.213149,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374256564",
            "id": "70000001018222870_xmhf9m48G455312319IGGG596szjed26G6G7G9I2G1I397H1rgewB48I4929G720032JIJ0Jp2e8uv561475323AA2HA174H",
            "is_advertising": false,
            "lat": 49.927538,
            "lon": 36.264877,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374261352",
            "id": "70000001018719867_xmhf9m48G455312319IGGG5f6szjed26G6G7G9I2G1I398H1rgewB48I4929G720032JIJ0Jp2e8uv56147581AA99HA174H",
            "is_advertising": false,
            "lat": 50.031677,
            "lon": 36.223188,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374377797",
            "id": "70000001019482003_xmhf9m48G45531231AIGGG4b6szjed26G6G7G9I2G1I399H1rgewB48I4929G720032JIJ0Jp2e8uv561475583235HA174H",
            "is_advertising": false,
            "lat": 50.042882,
            "lon": 36.213065,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374308224",
            "id": "70000001030700966_xmhf9m48G455312331IGGG176szjed26G6G7G9I2G1I39AH1rgewB48I4929G720032JIJ0Jp2e8uv561475801B98HA174H",
            "is_advertising": false,
            "lat": 50.027774,
            "lon": 36.363558,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374271560",
            "id": "70000001017976334_xmhf9m48G455312318IGGGcb6szjed26G6G7G9I2G1I39BH1rgewB48I4929G720032JIJ0Jp2e8uv561475A77566HA174H",
            "is_advertising": false,
            "lat": 49.995357,
            "lon": 36.266614,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374274137",
            "id": "70000001019373763_xmhf9m48G45531231AIGGGbb6szjed26G6G7G9I2G1I39CH1rgewB48I4929G720032JIJ0Jp2e8uv561475474995HA174H",
            "is_advertising": false,
            "lat": 49.984483,
            "lon": 36.266476,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374275839",
            "id": "70000001018222722_xmhf9m48G455312319IGGG626szjed26G6G7G9I2G1I403H1rgewB48I4929G720032JIJ0Jp2e8uv561475323954HA174H",
            "is_advertising": false,
            "lat": 49.981474,
            "lon": 36.259047,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759417993790",
            "id": "70000001018476100_xmhf9m48G455312319IGGGe96szjed26G6G7G9I2G1I404H1rgewB48I4929G720032JIJ0Jp2e8uv561475577332HA174H",
            "is_advertising": false,
            "lat": 49.962328,
            "lon": 36.268905,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374282780",
            "id": "70000001018889082_xmhf9m48G455312319IGGG7d6szjed26G6G7G9I2G1I405H1rgewB48I4929G720032JIJ0Jp2e8uv56147598A2B4HA174H",
            "is_advertising": false,
            "lat": 49.994326,
            "lon": 36.247721,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374247276",
            "id": "70000001018319213_xmhf9m48G455312319IGGGee6szjed26G6G7G9I2G1I406H1rgewB48I4929G720032JIJ0Jp2e8uv56147541A445HA174H",
            "is_advertising": false,
            "lat": 49.986173,
            "lon": 36.233912,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374247276",
            "id": "70000001019122409_xmhf9m48G45531231AIGGG886szjed26G6G7G9I2G1I407H1rgewB48I4929G720032JIJ0Jp2e8uv56147522363BHA174H",
            "is_advertising": false,
            "lat": 49.986287,
            "lon": 36.234118,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374337182",
            "id": "70000001021484518_xmhf9m48G455312322IGGG256szjed26G6G7G9I2G1I408H1rgewB48I4929G720032JIJ0Jp2e8uv56147558574AHA174H",
            "is_advertising": false,
            "lat": 50.015991,
            "lon": 36.217175,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374255354",
            "id": "70000001018687955_xmhf9m48G455312319IGGG736szjed26G6G7G9I2G1I409H1rgewB48I4929G720032JIJ0Jp2e8uv561475788B87HA174H",
            "is_advertising": false,
            "lat": 50.014743,
            "lon": 36.217423,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374343345",
            "id": "70000001031917350_xmhf9m48G455312332IGGG946szjed26G6G7G9I2G1I40AH1rgewB48I4929G720032JIJ0Jp2e8uv561475A18582HA174H",
            "is_advertising": false,
            "lat": 50.027729,
            "lon": 36.371469,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374298526",
            "id": "70000001018864807_xmhf9m48G455312319IGGG5b6szjed26G6G7G9I2G1I40BH1rgewB48I4929G720032JIJ0Jp2e8uv561475965A39HA174H",
            "is_advertising": false,
            "lat": 50.008085,
            "lon": 36.178612,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374286661",
            "id": "70000001018760384_xmhf9m48G455312319IGGGb96szjed26G6G7G9I2G1I40CH1rgewB48I4929G720032JIJ0Jp2e8uv5614758615B6HA174H",
            "is_advertising": false,
            "lat": 49.944225,
            "lon": 36.38609,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374328666",
            "id": "70000001019012708_xmhf9m48G45531231AIGGG416szjed26G6G7G9I2G1I413H1rgewB48I4929G720032JIJ0Jp2e8uv56147511393AHA174H",
            "is_advertising": false,
            "lat": 49.916239,
            "lon": 36.420364,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374251160",
            "id": "70000001019834227_xmhf9m48G45531231AIGGG816szjed26G6G7G9I2G1I414H1rgewB48I4929G720032JIJ0Jp2e8uv561475935459HA174H",
            "is_advertising": false,
            "lat": 50.086614,
            "lon": 36.143658,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374277103",
            "id": "70000001031828377_xmhf9m48G455312332IGGG606szjed26G6G7G9I2G1I415H1rgewB48I4929G720032JIJ0Jp2e8uv5614759295A9HA174H",
            "is_advertising": false,
            "lat": 49.963997,
            "lon": 36.329151,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374248382",
            "id": "70000001018221857_xmhf9m48G455312319IGGGef6szjed26G6G7G9I2G1I416H1rgewB48I4929G720032JIJ0Jp2e8uv561475322A89HA174H",
            "is_advertising": false,
            "lat": 49.997925,
            "lon": 36.223421,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374294869",
            "id": "70000001021930262_xmhf9m48G455312322IGGGa86szjed26G6G7G9I2G1I417H1rgewB48I4929G720032JIJ0Jp2e8uv561475A31494HA174H",
            "is_advertising": false,
            "lat": 49.904897,
            "lon": 36.284379,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374271560",
            "id": "70000001017971033_xmhf9m48G455312318IGGG1b6szjed26G6G7G9I2G1I418H1rgewB48I4929G720032JIJ0Jp2e8uv561475A72265HA174H",
            "is_advertising": false,
            "lat": 49.994911,
            "lon": 36.266572,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374298526",
            "id": "70000001022436909_xmhf9m48G455312323IGGGbb6szjed26G6G7G9I2G1I419H1rgewB48I4929G720032JIJ0Jp2e8uv561475537B3BHA174H",
            "is_advertising": false,
            "lat": 50.00813,
            "lon": 36.178403,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "70030076171069947",
            "id": "70000001030685020_xmhf9m48G455312331IGGGcc6szjed26G6G7G9I2G1I41AH1rgewB48I4929G720032JIJ0Jp2e8uv561475786252HA174H",
            "is_advertising": false,
            "lat": 49.87328,
            "lon": 36.297026,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374323000",
            "id": "70000001032591648_xmhf9m48G455312333IGGGfd6szjed26G6G7G9I2G1I41BH1rgewB48I4929G720032JIJ0Jp2e8uv56147569287AHA174H",
            "is_advertising": false,
            "lat": 49.976068,
            "lon": 36.153902,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374281615",
            "id": "70000001034372863_xmhf9m48G455312335IGGG476szjed26G6G7G9I2G1I41CH1rgewB48I4929G720032JIJ0Jp2e8uv561475473A95HA174H",
            "is_advertising": false,
            "lat": 49.985592,
            "lon": 36.272327,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374271560",
            "id": "70000001017978901_xmhf9m48G455312318IGGG6c6szjed26G6G7G9I2G1I423H1rgewB48I4929G720032JIJ0Jp2e8uv561475A79B33HA174H",
            "is_advertising": false,
            "lat": 49.995795,
            "lon": 36.26611,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374274641",
            "id": "70000001030686023_xmhf9m48G455312331IGGG3e6szjed26G6G7G9I2G1I424H1rgewB48I4929G720032JIJ0Jp2e8uv561475787255HA174H",
            "is_advertising": false,
            "lat": 50.002285,
            "lon": 36.269007,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374274641",
            "id": "70000001032724882_xmhf9m48G455312333IGGG786szjed26G6G7G9I2G1I425H1rgewB48I4929G720032JIJ0Jp2e8uv561475825AB4HA174H",
            "is_advertising": false,
            "lat": 50.002285,
            "lon": 36.269007,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374248673",
            "id": "70000001024055594_xmhf9m48G455312325IGGG726szjed26G6G7G9I2G1I426H1rgewB48I4929G720032JIJ0Jp2e8uv5614751567C6HA174H",
            "is_advertising": false,
            "lat": 49.979766,
            "lon": 36.247665,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374259783",
            "id": "70000001020147721_xmhf9m48G455312321IGGG786szjed26G6G7G9I2G1I427H1rgewB48I4929G720032JIJ0Jp2e8uv561475248953HA174H",
            "is_advertising": false,
            "lat": 49.950314,
            "lon": 36.282113,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374259770",
            "id": "70000001021723996_xmhf9m48G455312322IGGG326szjed26G6G7G9I2G1I428H1rgewB48I4929G720032JIJ0Jp2e8uv561475824BC8HA174H",
            "is_advertising": false,
            "lat": 49.949495,
            "lon": 36.281917,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374263732",
            "id": "70000001019400766_xmhf9m48G45531231AIGGG9d6szjed26G6G7G9I2G1I429H1rgewB48I4929G720032JIJ0Jp2e8uv561475501998HA174H",
            "is_advertising": false,
            "lat": 49.944994,
            "lon": 36.264193,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374260338",
            "id": "70000001018788699_xmhf9m48G455312319IGGGbc6szjed26G6G7G9I2G1I42AH1rgewB48I4929G720032JIJ0Jp2e8uv5614758898CBHA174H",
            "is_advertising": false,
            "lat": 50.017623,
            "lon": 36.346479,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374323763",
            "id": "70000001033989756_xmhf9m48G455312334IGGGfd6szjed26G6G7G9I2G1I42BH1rgewB48I4929G720032JIJ0Jp2e8uv561475A8A988HA174H",
            "is_advertising": false,
            "lat": 49.929248,
            "lon": 36.252293,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374267405",
            "id": "70000001018876995_xmhf9m48G455312319IGGG386szjed26G6G7G9I2G1I42CH1rgewB48I4929G720032JIJ0Jp2e8uv561475977BC7HA174H",
            "is_advertising": false,
            "lat": 49.986272,
            "lon": 36.201491,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374298675",
            "id": "70000001018555874_xmhf9m48G455312319IGGGc66szjed26G6G7G9I2G1I433H1rgewB48I4929G720032JIJ0Jp2e8uv561475656AA6HA174H",
            "is_advertising": false,
            "lat": 50.002688,
            "lon": 36.173653,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374287463",
            "id": "70000001019546468_xmhf9m48G45531231AIGGG336szjed26G6G7G9I2G1I434H1rgewB48I4929G720032JIJ0Jp2e8uv56147564769AHA174H",
            "is_advertising": false,
            "lat": 49.961963,
            "lon": 36.169121,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374319827",
            "id": "70000001026821460_xmhf9m48G455312327IGGG826szjed26G6G7G9I2G1I435H1rgewB48I4929G720032JIJ0Jp2e8uv561475922692HA174H",
            "is_advertising": false,
            "lat": 50.057661,
            "lon": 36.191344,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374251160",
            "id": "70000001019839464_xmhf9m48G45531231AIGGG186szjed26G6G7G9I2G1I436H1rgewB48I4929G720032JIJ0Jp2e8uv56147593A696HA174H",
            "is_advertising": false,
            "lat": 50.086833,
            "lon": 36.144264,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374304413",
            "id": "70000001023555441_xmhf9m48G455312324IGGG586szjed26G6G7G9I2G1I437H1rgewB48I4929G720032JIJ0Jp2e8uv561475656673HA174H",
            "is_advertising": false,
            "lat": 49.96386,
            "lon": 36.085729,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374327240",
            "id": "70000001018928330_xmhf9m48G455312319IGGG066szjed26G6G7G9I2G1I438H1rgewB48I4929G720032JIJ0Jp2e8uv561475A29562HA174H",
            "is_advertising": false,
            "lat": 50.004599,
            "lon": 36.261838,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374318263",
            "id": "70000001018588329_xmhf9m48G455312319IGGGdb6szjed26G6G7G9I2G1I439H1rgewB48I4929G720032JIJ0Jp2e8uv56147568955BHA174H",
            "is_advertising": false,
            "lat": 49.952172,
            "lon": 36.258257,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374263732",
            "id": "70000001018342474_xmhf9m48G455312319IGGG986szjed26G6G7G9I2G1I43AH1rgewB48I4929G720032JIJ0Jp2e8uv5614754436A6HA174H",
            "is_advertising": false,
            "lat": 49.944994,
            "lon": 36.264193,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374322417",
            "id": "70000001018858884_xmhf9m48G455312319IGGGee6szjed26G6G7G9I2G1I43BH1rgewB48I4929G720032JIJ0Jp2e8uv561475959AB6HA174H",
            "is_advertising": false,
            "lat": 50.027835,
            "lon": 36.366492,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374254205",
            "id": "70000001018279178_xmhf9m48G455312319IGGG616szjed26G6G7G9I2G1I43CH1rgewB48I4929G720032JIJ0Jp2e8uv56147537A3AAHA174H",
            "is_advertising": false,
            "lat": 50.015035,
            "lon": 36.223268,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374248863",
            "id": "70000001018475905_xmhf9m48G455312319IGGG116szjed26G6G7G9I2G1I443H1rgewB48I4929G720032JIJ0Jp2e8uv561475576B37HA174H",
            "is_advertising": false,
            "lat": 49.99098,
            "lon": 36.220029,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374295868",
            "id": "70000001018525481_xmhf9m48G455312319IGGG8c6szjed26G6G7G9I2G1I444H1rgewB48I4929G720032JIJ0Jp2e8uv5614756266B3HA174H",
            "is_advertising": false,
            "lat": 50.019418,
            "lon": 36.19269,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374308224",
            "id": "70000001025359628_xmhf9m48G455312326IGGG3f6szjed26G6G7G9I2G1I445H1rgewB48I4929G720032JIJ0Jp2e8uv56147545A85AHA174H",
            "is_advertising": false,
            "lat": 50.027774,
            "lon": 36.363558,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "70030076154956120",
            "id": "70000001030432558_xmhf9m48G455312331IGGG4e6szjed26G6G7G9I2G1I446H1rgewB48I4929G720032JIJ0Jp2e8uv56147553378AHA174H",
            "is_advertising": false,
            "lat": 49.983792,
            "lon": 36.246511,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374251671",
            "id": "70000001034866746_xmhf9m48G455312335IGGG1d6szjed26G6G7G9I2G1I447H1rgewB48I4929G720032JIJ0Jp2e8uv561475967978HA174H",
            "is_advertising": false,
            "lat": 49.985701,
            "lon": 36.206378,
            "match_type": 2,
            "rubr": "9041",
            "source_type": 2,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374277371",
            "id": "70000001019010133_dxmhf6G6G7I2G1G8H1HH6szjeewB42758I4312318uvrg55614929G965I449mp2e48G4572003A111345JHG3IJGJIc1",
            "is_advertising": false,
            "lat": 49.985275,
            "lon": 36.175331,
            "match_type": 5,
            "source_type": 32,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374328664",
            "id": "70000001023847025_dxmhf6G6G7I2G1G9H1HH6szjeewB42758I4312328uvrg55614929G957I449mp2e48G45720034948245JHG3IJGJI96",
            "is_advertising": false,
            "lat": 49.928259,
            "lon": 36.425648,
            "match_type": 5,
            "source_type": 32,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374270536",
            "id": "70000001018148832_dxmhf6G6G7I2G1GAH1HH6szjeewB42758I4312318uvrg55614929G964I449mp2e48G45720039249A45JHG3IJGJIe5",
            "is_advertising": false,
            "lat": 50.006619,
            "lon": 36.279719,
            "match_type": 5,
            "source_type": 32,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "70030076136909154",
            "id": "70000001018305710_dxmhf6G6G7I2G1GBH1HH6szjeewB42758I4312318uvrg55614929G942I449mp2e48G45720039406945JHG3IJGJI3a",
            "is_advertising": false,
            "lat": 50.022122,
            "lon": 36.234552,
            "match_type": 5,
            "source_type": 32,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374319781",
            "id": "70000001018390723_dxmhf6G6G7I2G1GCH1HH6szjeewB42758I4312318uvrg55614929G955I449mp2e48G45720039491945JHG3IJGJIae",
            "is_advertising": false,
            "lat": 50.032396,
            "lon": 36.239005,
            "match_type": 5,
            "source_type": 32,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374247100",
            "id": "70000001028431231_dxmhf6G6G7I2G1G3H1HH6szjeewB42758I4312328uvrg55614929G963I459mp2e48G45720039532445JHG3IJGJI71",
            "is_advertising": false,
            "lat": 49.990503,
            "lon": 36.250583,
            "match_type": 5,
            "source_type": 32,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374320957",
            "id": "70000001018012607_dxmhf6G6G7I2G1G4H1HH6szjeewB42758I4312318uvrg55614929G939I459mp2e48G45720039113845JHG3IJGJIca",
            "is_advertising": false,
            "lat": 50.013242,
            "lon": 36.324548,
            "match_type": 5,
            "source_type": 32,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374259479",
            "id": "70000001018529885_dxmhf6G6G7I2G1G5H1HH6szjeewB42758I4312318uvrg55614929G9B7I459mp2e48G4572003962AA45JHG3IJGJI43",
            "is_advertising": false,
            "lat": 50.031088,
            "lon": 36.209483,
            "match_type": 5,
            "source_type": 32,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374270359",
            "id": "70000001018628557_dxmhf6G6G7I2G1G6H1HH6szjeewB42758I4312318uvrg55614929G989I459mp2e48G45720039729745JHG3IJGJI00",
            "is_advertising": false,
            "lat": 50.021286,
            "lon": 36.318648,
            "match_type": 5,
            "source_type": 32,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374281694",
            "id": "70000001018390659_dxmhf6G6G7I2G1G7H1HH6szjeewB42758I4312318uvrg55614929G98BI459mp2e48G45720039491845JHG3IJGJI7c",
            "is_advertising": false,
            "lat": 49.999422,
            "lon": 36.222666,
            "match_type": 5,
            "source_type": 32,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374329066",
            "id": "70000001019577720_dxmhf6G6G7I2G1G8H1HH6szjeewB42758I4312318uvrg55614929G952I459mp2e48G4572003A678945JHG3IJGJI65",
            "is_advertising": false,
            "lat": 49.913267,
            "lon": 36.276142,
            "match_type": 5,
            "source_type": 32,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374246366",
            "id": "70000001018969330_dxmhf6G6G7I2G1G9H1HH6szjeewB42758I4312318uvrg55614929G962I459mp2e48G45720039A6A545JHG3IJGJI6d",
            "is_advertising": false,
            "lat": 50.019469,
            "lon": 36.288258,
            "match_type": 5,
            "source_type": 32,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374273634",
            "id": "70000001021381507_dxmhf6G6G7I2G1GAH1HH6szjeewB42758I4312328uvrg55614929G939I459mp2e48G45720032482745JHG3IJGJIdc",
            "is_advertising": false,
            "lat": 50.053989,
            "lon": 36.282504,
            "match_type": 5,
            "source_type": 32,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374295950",
            "id": "70000001019381283_dxmhf6G6G7I2G1GBH1HH6szjeewB42758I4312318uvrg55614929G9B5I459mp2e48G4572003A482445JHG3IJGJIbe",
            "is_advertising": false,
            "lat": 50.03879,
            "lon": 36.293625,
            "match_type": 5,
            "source_type": 32,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374282820",
            "id": "70000001017895584_dxmhf6G6G7I2G1GCH1HH6szjeewB42758I4312318uvrg55614929G9B6I459mp2e48G45720038996745JHG3IJGJI0e",
            "is_advertising": false,
            "lat": 49.99829,
            "lon": 36.320363,
            "match_type": 5,
            "source_type": 32,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374296642",
            "id": "70000001033268201_dxmhf6G6G7I2G1G3H1HH6szjeewB42758I4312338uvrg55614929G933I469mp2e48G45720034369445JHG3IJGJI03",
            "is_advertising": false,
            "lat": 50.012386,
            "lon": 36.287181,
            "match_type": 5,
            "source_type": 32,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374322707",
            "id": "70000001019512625_dxmhf6G6G7I2G1G4H1HH6szjeewB42758I4312318uvrg55614929G957I469mp2e48G4572003A613845JHG3IJGJI30",
            "is_advertising": false,
            "lat": 49.926342,
            "lon": 36.411112,
            "match_type": 5,
            "source_type": 32,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374303941",
            "id": "70000001019916995_dxmhf6G6G7I2G1G5H1HH6szjeewB42758I4312318uvrg55614929G9C7I469mp2e48G4572003AA17B45JHG3IJGJI4f",
            "is_advertising": false,
            "lat": 49.961018,
            "lon": 36.097083,
            "match_type": 5,
            "source_type": 32,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374249150",
            "id": "70000001032146898_dxmhf6G6G7I2G1G6H1HH6szjeewB42758I4312338uvrg55614929G9CAI469mp2e48G45720033247A45JHG3IJGJIca",
            "is_advertising": false,
            "lat": 49.983133,
            "lon": 36.24802,
            "match_type": 5,
            "source_type": 32,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374253552",
            "id": "70000001018782713_dxmhf6G6G7I2G1G7H1HH6szjeewB42758I4312318uvrg55614929G945I469mp2e48G45720039883945JHG3IJGJI26",
            "is_advertising": false,
            "lat": 50.000629,
            "lon": 36.221436,
            "match_type": 5,
            "source_type": 32,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "70030076126085646",
            "id": "70000001019014943_dxmhf6G6G7I2G1G8H1HH6szjeewB42758I4312318uvrg55614929G975I469mp2e48G4572003A115B45JHG3IJGJIdf",
            "is_advertising": false,
            "lat": 49.958365,
            "lon": 36.364088,
            "match_type": 5,
            "source_type": 32,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374260948",
            "id": "70000001024200456_dxmhf6G6G7I2G1G9H1HH6szjeewB42758I4312328uvrg55614929G988I469mp2e48G45720035301645JHG3IJGJIef",
            "is_advertising": false,
            "lat": 50.052466,
            "lon": 36.193032,
            "match_type": 5,
            "source_type": 32,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374284365",
            "id": "70000001024198007_dxmhf6G6G7I2G1GAH1HH6szjeewB42758I4312328uvrg55614929G939I469mp2e48G45720035299245JHG3IJGJIea",
            "is_advertising": false,
            "lat": 49.953026,
            "lon": 36.13787,
            "match_type": 5,
            "source_type": 32,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374323884",
            "id": "70000001018909456_dxmhf6G6G7I2G1GBH1HH6szjeewB42758I4312318uvrg55614929G988I469mp2e48G45720039A0A645JHG3IJGJI44",
            "is_advertising": false,
            "lat": 50.042434,
            "lon": 36.214561,
            "match_type": 5,
            "source_type": 32,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374260502",
            "id": "70000001025612605_dxmhf6G6G7I2G1GCH1HH6szjeewB42758I4312328uvrg55614929G937I469mp2e48G45720036713845JHG3IJGJIe0",
            "is_advertising": false,
            "lat": 49.943794,
            "lon": 36.258653,
            "match_type": 5,
            "source_type": 32,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374248863",
            "id": "70000001022681025_dxmhf6G6G7I2G1G3H1HH6szjeewB42758I4312328uvrg55614929G957I479mp2e48G45720033782245JHG3IJGJIb0",
            "is_advertising": false,
            "lat": 49.991004,
            "lon": 36.22098,
            "match_type": 5,
            "source_type": 32,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374254443",
            "id": "70000001024972785_dxmhf6G6G7I2G1G4H1HH6szjeewB42758I4312328uvrg55614929G9B7I479mp2e48G45720035A73945JHG3IJGJIad",
            "is_advertising": false,
            "lat": 49.983579,
            "lon": 36.220976,
            "match_type": 5,
            "source_type": 32,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374286801",
            "id": "70000001032766433_dxmhf6G6G7I2G1G5H1HH6szjeewB42758I4312338uvrg55614929G965I479mp2e48G45720033867645JHG3IJGJI6b",
            "is_advertising": false,
            "lat": 49.976308,
            "lon": 36.369572,
            "match_type": 5,
            "source_type": 32,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374302243",
            "id": "70000001022569266_dxmhf6G6G7I2G1G6H1HH6szjeewB42758I4312328uvrg55614929G998I479mp2e48G4572003366A445JHG3IJGJIc5",
            "is_advertising": false,
            "lat": 49.924756,
            "lon": 36.400598,
            "match_type": 5,
            "source_type": 32,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374297123",
            "id": "70000001022734168_dxmhf6G6G7I2G1G7H1HH6szjeewB42758I4312328uvrg55614929G99AI479mp2e48G45720033835345JHG3IJGJI88",
            "is_advertising": false,
            "lat": 49.943187,
            "lon": 36.443487,
            "match_type": 5,
            "source_type": 32,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374319798",
            "id": "70000001018419083_dxmhf6G6G7I2G1G8H1HH6szjeewB42758I4312318uvrg55614929G9B5I479mp2e48G4572003951A245JHG3IJGJI5c",
            "is_advertising": false,
            "lat": 49.988771,
            "lon": 36.271319,
            "match_type": 5,
            "source_type": 32,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374260228",
            "id": "70000001019219116_dxmhf6G6G7I2G1G9H1HH6szjeewB42758I4312318uvrg55614929G948I479mp2e48G4572003A31A345JHG3IJGJIe4",
            "is_advertising": false,
            "lat": 49.946274,
            "lon": 36.240835,
            "match_type": 5,
            "source_type": 32,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374287431",
            "id": "70000001019547153_dxmhf6G6G7I2G1GAH1HH6szjeewB42758I4312318uvrg55614929G985I479mp2e48G4572003A648345JHG3IJGJIbb",
            "is_advertising": false,
            "lat": 49.96164,
            "lon": 36.167737,
            "match_type": 5,
            "source_type": 32,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374291269",
            "id": "70000001030860737_dxmhf6G6G7I2G1GBH1HH6szjeewB42758I4312338uvrg55614929G969I479mp2e48G45720031961945JHG3IJGJI98",
            "is_advertising": false,
            "lat": 49.967779,
            "lon": 36.16652,
            "match_type": 5,
            "source_type": 32,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374327708",
            "id": "70000001018428652_dxmhf6G6G7I2G1GCH1HH6szjeewB42758I4312318uvrg55614929G984I479mp2e48G45720039529845JHG3IJGJI72",
            "is_advertising": false,
            "lat": 49.987163,
            "lon": 36.260009,
            "match_type": 5,
            "source_type": 32,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374271219",
            "id": "70000001025291941_dxmhf6G6G7I2G1G3H1HH6szjeewB42758I4312328uvrg55614929G973I489mp2e48G45720036392B45JHG3IJGJI6d",
            "is_advertising": false,
            "lat": 49.956026,
            "lon": 36.315527,
            "match_type": 5,
            "source_type": 32,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374254042",
            "id": "70000001020359383_dxmhf6G6G7I2G1G4H1HH6szjeewB42758I4312328uvrg55614929G9B5I489mp2e48G4572003145A545JHG3IJGJIec",
            "is_advertising": false,
            "lat": 49.980869,
            "lon": 36.235606,
            "match_type": 5,
            "source_type": 32,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374299964",
            "id": "70000001028285616_dxmhf6G6G7I2G1G5H1HH6szjeewB42758I4312328uvrg55614929G948I489mp2e48G45720039386845JHG3IJGJI21",
            "is_advertising": false,
            "lat": 49.937778,
            "lon": 36.423952,
            "match_type": 5,
            "source_type": 32,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374250880",
            "id": "70000001019035032_dxmhf6G6G7I2G1G6H1HH6szjeewB42758I4312318uvrg55614929G964I489mp2e48G4572003A136245JHG3IJGJI68",
            "is_advertising": false,
            "lat": 50.047974,
            "lon": 36.187957,
            "match_type": 5,
            "source_type": 32,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374276794",
            "id": "70000001020325725_dxmhf6G6G7I2G1G7H1HH6szjeewB42758I4312328uvrg55614929G957I489mp2e48G45720031426945JHG3IJGJIfc",
            "is_advertising": false,
            "lat": 50.052819,
            "lon": 36.18565,
            "match_type": 5,
            "source_type": 32,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374254054",
            "id": "70000001018400646_dxmhf6G6G7I2G1G8H1HH6szjeewB42758I4312318uvrg55614929G978I489mp2e48G45720039501845JHG3IJGJI78",
            "is_advertising": false,
            "lat": 49.979817,
            "lon": 36.231852,
            "match_type": 5,
            "source_type": 32,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374265921",
            "id": "70000001018910180_dxmhf6G6G7I2G1G9H1HH6szjeewB42758I4312318uvrg55614929G9B2I489mp2e48G45720039A11345JHG3IJGJI51",
            "is_advertising": false,
            "lat": 50.009428,
            "lon": 36.327842,
            "match_type": 5,
            "source_type": 32,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374324923",
            "id": "70000001018954150_dxmhf6G6G7I2G1GAH1HH6szjeewB42758I4312318uvrg55614929G982I489mp2e48G45720039A55345JHG3IJGJIe1",
            "is_advertising": false,
            "lat": 49.97299,
            "lon": 36.199625,
            "match_type": 5,
            "source_type": 32,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374277103",
            "id": "70000001018314544_dxmhf6G6G7I2G1GBH1HH6szjeewB42758I4312318uvrg55614929G976I489mp2e48G45720039415745JHG3IJGJIee",
            "is_advertising": false,
            "lat": 49.964014,
            "lon": 36.329058,
            "match_type": 5,
            "source_type": 32,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374271268",
            "id": "70000001018987602_dxmhf6G6G7I2G1GCH1HH6szjeewB42758I4312318uvrg55614929G934I489mp2e48G45720039A88845JHG3IJGJId8",
            "is_advertising": false,
            "lat": 49.955379,
            "lon": 36.305526,
            "match_type": 5,
            "source_type": 32,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374322391",
            "id": "70000001019526111_dxmhf6G6G7I2G1G3H1HH6szjeewB42758I4312318uvrg55614929G943I499mp2e48G4572003A627345JHG3IJGJI8d",
            "is_advertising": false,
            "lat": 49.940907,
            "lon": 36.413592,
            "match_type": 5,
            "source_type": 32,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374271560",
            "id": "70000001021533664_dxmhf6G6G7I2G1G4H1HH6szjeewB42758I4312328uvrg55614929G996I499mp2e48G45720032634845JHG3IJGJI3c",
            "is_advertising": false,
            "lat": 49.995357,
            "lon": 36.266614,
            "match_type": 5,
            "source_type": 32,
            "type": "branch",
            "vital": 1
        }, {
            "geometry_id": "15481759374325135",
            "id": "70000001025612596_dxmhf6G6G7I2G1G5H1HH6szjeewB42758I4312328uvrg55614929G9C8I499mp2e48G45720036713745JHG3IJGJIbe",
            "is_advertising": false,
            "lat": 49.945114,
            "lon": 36.333154,
            "match_type": 5,
            "source_type": 32,
            "type": "branch",
            "vital": 1
        }], "total": 393
    }
}





