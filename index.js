// Creating the Map Object
const map = L.map('map').setView([26.842025, 75.563544], 16);
 
// Creating the Tile Layer
const tileLayer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    minZoom: 15, 
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});
tileLayer.addTo(map);

// Parsing the JSON file
const obj = JSON.parse(locs);
let name_list = [];
for(let i=0;i<obj.length;i++){
    if(name_list.indexOf(obj[i]['name']) == -1){
        name_list.push(obj[i]['name']);
    }
}
// Script for search autocomplete function
autocomplete(document.getElementById("txtbox1"), name_list);

// Creating default Icon class
const mapIcon = L.Icon.extend({
    options: {
        iconSize: [48, 48],
        iconAnchor: [24,48],
        popupAnchor: [0,-30]
    }
});

// Creating different coloured icon objects using Icon class
const redIcon = new mapIcon({iconUrl: 'pins/red_pin.png'});
const blueIcon = new mapIcon({iconUrl: 'pins/blue_pin.png'});
const pinkIcon = new mapIcon({iconUrl: 'pins/pink_pin.png'});
const orangeIcon = new mapIcon({iconUrl: 'pins/orange_pin.png'});
const greenIcon = new mapIcon({iconUrl: 'pins/green_pin.png'});
const yellowIcon = new mapIcon({iconUrl: 'pins/yellow_pin.png'});
const purpleIcon = new mapIcon({iconUrl: 'pins/purple_pin.png'});

// To clear the map of current markers
function clear_map(){
    map.eachLayer(function(layer){
        if(layer!=tileLayer){
            map.removeLayer(layer);
        }
    });
}

function hostelShow() {
    clear_map();

    let markers = [];

    for(let i=0;i<obj.length;i++){
        if(obj[i]['type'] != "hostel"){
            continue;
        }
        
        let lat = obj[i]['coord'][0];
        let lng = obj[i]['coord'][1];
        let popupText = obj[i]['name'];
        if(i<=6){
            markers.push( new L.Marker([lat, lng], {icon: blueIcon}) );
        }
        else{
            markers.push( new L.Marker([lat, lng], {icon: pinkIcon}) );
        }
        markers[markers.length-1].bindPopup(popupText,{'className' : 'popup_class'});
    }

    for(let mark of markers){
        map.addLayer(mark);
    }

    document.getElementById('img_1').innerHTML = ` <img src="images/hostel.jpg" alt="">`;
    document.getElementById('demo').innerHTML = "Manipal University Jaipur offers residential facilities, which are operated by GOOD HOST SPACES PVT. LTD (GHS).GHS is a global leader in running student residences, offering new opportunities for students to live, learn, and grow with the promise of a safe and secure environment while providing the right environment for studies and overall development to all its resident students.";
}

function amenitiesShow(){
    clear_map();

    let markers = [];
    
    for(let i=0;i<obj.length;i++){
        if(obj[i]['type'] != "amenities"){
            continue;
        }

        let lat = obj[i]['coord'][0];
        let lng = obj[i]['coord'][1];
        let popupText = obj[i]['name'];
        if(popupText=="Grocery"){
            markers.push( new L.Marker([lat, lng], {icon: greenIcon}) );
        }
        else if(popupText=="Stationery"){
            markers.push( new L.Marker([lat, lng], {icon: blueIcon}) );
        }
        else{
            markers.push( new L.Marker([lat, lng], {icon: redIcon}) );
        }
        markers[markers.length-1].bindPopup(popupText,{'className' : 'popup_class'});
    }

    for(let mark of markers){
        map.addLayer(mark);
    }

    document.getElementById('img_1').innerHTML = `<img src="images/amenities.jpg" alt="">`;
    document.getElementById('demo').innerHTML = "A resident DOCTOR along with an AMBULANCE is available on the hostel premises itself. In case any student requires MEDICAL attention, he/she must immediately inform the Caretaker/Warden.";
}

function foodoutletsShow() {
    clear_map();

    let markers = [];

    for(let i=0;i<obj.length;i++){
        if(obj[i]['type'] != "food_outlets"){
            continue;
        }

        let lat = obj[i]['coord'][0];
        let lng = obj[i]['coord'][1];
        let popupText = obj[i]['name'];
        markers.push( new L.Marker([lat, lng], {icon: yellowIcon}) );
        markers[markers.length-1].bindPopup(popupText,{'className' : 'popup_class'});
    }

    for(let mark of markers){
        map.addLayer(mark);
    }

    document.getElementById('img_1').innerHTML = `<img src="images/food.jpg" alt="">`;
    document.getElementById('demo').innerHTML = "Various Cuisines and brands available within hostel premise of veg/non-veg restaurants, Dominos, Nescafe, Belgium waffles, Burger Farm, Amul Cafe, Tea post, etc. Vending machines with the Coffee concept for snacks and refreshments (24x7)";
}

function sportsShow() {
    clear_map();

    let markers = [];

    for(let i=0;i<obj.length;i++){
        if(obj[i]['type'] != "sports"){
            continue;
        }

        let lat = obj[i]['coord'][0];
        let lng = obj[i]['coord'][1];
        let popupText = obj[i]['name'];
        if(popupText=="Basketball Court"){
            markers.push( new L.Marker([lat, lng], {icon: orangeIcon}) );
        }
        else if(popupText=="Badminton Court"){
            markers.push( new L.Marker([lat, lng], {icon: greenIcon}) );
        }
        else if(popupText=="Volleyball Court"){
            markers.push( new L.Marker([lat, lng], {icon: yellowIcon}) );
        }
        else if(popupText=="Swimming Pool"){
            markers.push( new L.Marker([lat, lng], {icon: blueIcon}) );
        }
        else{
            markers.push( new L.Marker([lat, lng], {icon: redIcon}) );
        }
        markers[markers.length-1].bindPopup(popupText,{'className' : 'popup_class'});
    }

    for(let mark of markers){
        map.addLayer(mark);
    }

    document.getElementById('img_1').innerHTML = `<img src="images/sport.jpg" alt="">`;
    document.getElementById('demo').innerHTML = `Many indoor and outdoor facilities are available to students for sports. The sports facilities include table tennis, carrom, football, lawn tennis, badminton, squash, cricket, throw ball, kabaddi, etc.  Intra- and inter-University matches take place regularly, throughout the year.`;
}

function academicShow(){
    clear_map();

    let markers = [];
    
    for(let i=0;i<obj.length;i++){
        if(obj[i]['type'] != "academic"){
            continue;
        }

        let lat = obj[i]['coord'][0];
        let lng = obj[i]['coord'][1];
        let popupText = obj[i]['name']
        markers.push( new L.Marker([lat, lng], {icon: purpleIcon}) );
        markers[markers.length-1].bindPopup(popupText,{'className' : 'popup_class'});
    }

    for(let mark of markers){
        map.addLayer(mark);
    }

    document.getElementById('img_1').innerHTML = `<img src="images/academic.jpg" alt="">`;
    document.getElementById('demo').innerHTML = "The MUJ campus is fully Wi-Fi enabled and boasts of a large, 120 PC Central Computing Facility. The academic process is completely automated, with an Academic Management System in place. The spacious and state-of-the-art Library at MUJ is adequately stocked with the requisite number of reference and text-books, a large number of national and international journals, e-books and e-journals.  Students and faculties are given online access to many e-books/courses, from Pearson, NPTEL, etc.";
}

function otherShow(){
    clear_map();

    let markers = [];

    for(let i=0;i<obj.length;i++){
        if(obj[i]['type'] != "others"){
            continue;
        }

        let lat = obj[i]['coord'][0];
        let lng = obj[i]['coord'][1];
        let popupText = obj[i]['name']
        markers.push( new L.Marker([lat, lng], {icon: redIcon}) );
        markers[markers.length-1].bindPopup(popupText,{'className' : 'popup_class'});
    }

    for(let mark of markers){
        map.addLayer(mark);
    }

    document.getElementById('img_1').innerHTML = `<img src="images/others.jpg" alt="">`;
    document.getElementById('demo').innerHTML = "World class Auditorium and Conference facilities designed by eminent Architect, Hafeez Contractor providing excellent support for the important meetings, conferences, seminars and presentations are available in a much secured and technologically advance environment of the Manipal University Jaipur campus. Auditorium, naming Amphitheatre, has a capacity of 200 seating and an excellent stage to be used for all common functions/events. The entire facility is fully air-conditioned with a dedicated power back-up.";
}

function searchShow(){
    let name = document.getElementById("txtbox1").value;

    clear_map();

    let markers = [];

    for(let i=0;i<obj.length;i++){
        let popupText = obj[i]['name'];
        if(popupText!=name){
            continue;
        }
        let lat = obj[i]['coord'][0];
        let lng = obj[i]['coord'][1];
        markers.push( new L.Marker([lat, lng], {icon: redIcon}) );
        markers[markers.length-1].bindPopup(popupText,{'className' : 'popup_class'});
    }

    for(let mark of markers){
        map.addLayer(mark);
    }

    document.getElementById('img_1').innerHTML = ``;
    document.getElementById('demo').innerHTML = "";

}