var wms_layers = [];


        var lyr_ESRINationalGeographic_0 = new ol.layer.Tile({
            'title': 'ESRI National Geographic',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Aluejaot_2026_10k_1 = new ol.format.GeoJSON();
var features_Aluejaot_2026_10k_1 = format_Aluejaot_2026_10k_1.readFeatures(json_Aluejaot_2026_10k_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aluejaot_2026_10k_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aluejaot_2026_10k_1.addFeatures(features_Aluejaot_2026_10k_1);
var lyr_Aluejaot_2026_10k_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Aluejaot_2026_10k_1, 
                style: style_Aluejaot_2026_10k_1,
                popuplayertitle: 'Aluejaot_2026_10k',
                interactive: true,
                title: '<img src="styles/legend/Aluejaot_2026_10k_1.png" /> Aluejaot_2026_10k'
            });
var format_Municipalities_2 = new ol.format.GeoJSON();
var features_Municipalities_2 = format_Municipalities_2.readFeatures(json_Municipalities_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipalities_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municipalities_2.addFeatures(features_Municipalities_2);
var lyr_Municipalities_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Municipalities_2, 
                style: style_Municipalities_2,
                popuplayertitle: 'Municipalities',
                interactive: true,
                title: '<img src="styles/legend/Municipalities_2.png" /> Municipalities'
            });
var format_Observations_3 = new ol.format.GeoJSON();
var features_Observations_3 = format_Observations_3.readFeatures(json_Observations_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Observations_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Observations_3.addFeatures(features_Observations_3);
var lyr_Observations_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Observations_3, 
                style: style_Observations_3,
                popuplayertitle: 'Observations',
                interactive: true,
    title: 'Observations<br />\
    <img src="styles/legend/Observations_3_0.png" /> 2014<br />\
    <img src="styles/legend/Observations_3_1.png" /> 2015<br />\
    <img src="styles/legend/Observations_3_2.png" /> 2016<br />\
    <img src="styles/legend/Observations_3_3.png" /> 2017<br />\
    <img src="styles/legend/Observations_3_4.png" /> 2018<br />\
    <img src="styles/legend/Observations_3_5.png" /> 2019<br />\
    <img src="styles/legend/Observations_3_6.png" /> 2020<br />\
    <img src="styles/legend/Observations_3_7.png" /> 2021<br />\
    <img src="styles/legend/Observations_3_8.png" /> 2022<br />\
    <img src="styles/legend/Observations_3_9.png" /> 2023<br />\
    <img src="styles/legend/Observations_3_10.png" /> 2024<br />' });

lyr_ESRINationalGeographic_0.setVisible(true);lyr_Aluejaot_2026_10k_1.setVisible(true);lyr_Municipalities_2.setVisible(true);lyr_Observations_3.setVisible(true);
var layersList = [lyr_ESRINationalGeographic_0,lyr_Aluejaot_2026_10k_1,lyr_Municipalities_2,lyr_Observations_3];
lyr_Aluejaot_2026_10k_1.set('fieldAliases', {'id': 'id', 'namefin': 'namefin', });
lyr_Municipalities_2.set('fieldAliases', {'fid': 'fid', 'namefin': 'namefin', });
lyr_Observations_3.set('fieldAliases', {'fid': 'fid', 'taxonomic_order': 'taxonomic_order', 'formatted_taxon_name': 'formatted_taxon_name', 'abundance_verbatim': 'abundance_verbatim', 'formatted_date_time': 'formatted_date_time', 'country': 'country', 'bio_province_interpreted': 'bio_province_interpreted', 'locality': 'locality', 'collection_name': 'collection_name', 'team': 'team', 'year': 'year', 'AUTO': 'AUTO', 'location_clean': 'location_clean', 'Location': 'Location', 'count_obs': 'count_obs', });
lyr_Aluejaot_2026_10k_1.set('fieldImages', {'id': 'TextEdit', 'namefin': 'TextEdit', });
lyr_Municipalities_2.set('fieldImages', {'fid': 'TextEdit', 'namefin': 'TextEdit', });
lyr_Observations_3.set('fieldImages', {'fid': 'TextEdit', 'taxonomic_order': 'TextEdit', 'formatted_taxon_name': 'TextEdit', 'abundance_verbatim': 'TextEdit', 'formatted_date_time': 'TextEdit', 'country': 'TextEdit', 'bio_province_interpreted': 'TextEdit', 'locality': 'TextEdit', 'collection_name': 'TextEdit', 'team': 'TextEdit', 'year': '', 'AUTO': 'TextEdit', 'location_clean': 'TextEdit', 'Location': 'TextEdit', 'count_obs': 'Range', });
lyr_Aluejaot_2026_10k_1.set('fieldLabels', {'id': 'hidden field', 'namefin': 'inline label - always visible', });
lyr_Municipalities_2.set('fieldLabels', {'fid': 'hidden field', 'namefin': 'hidden field', });
lyr_Observations_3.set('fieldLabels', {'fid': 'hidden field', 'taxonomic_order': 'hidden field', 'formatted_taxon_name': 'hidden field', 'abundance_verbatim': 'hidden field', 'formatted_date_time': 'hidden field', 'country': 'hidden field', 'bio_province_interpreted': 'hidden field', 'locality': 'hidden field', 'collection_name': 'hidden field', 'team': 'hidden field', 'year': 'inline label - always visible', 'AUTO': 'hidden field', 'location_clean': 'hidden field', 'Location': 'inline label - always visible', 'count_obs': 'hidden field', });
lyr_Observations_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});