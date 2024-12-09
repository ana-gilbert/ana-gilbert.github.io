let map;

async function initMap() {
  // all locations and blurbs
  const locations = [
    {position: { lat: 16.83003, lng: -88.0105 },
      title: "Belize Barrier Reef",
      blurb: "Belize is home to the second largest barrier reef in the world! I would love to go diving there some day."
    },
    {position: { lat: 30.0444, lng: 31.2357 },
      title: "Cairo, Egypt",
      blurb: "My grandparents went to Egypt a few years ago and loved it. I really want to visit one of the oldest civilizations in the the world."
    },
    {position: { lat: 46.4908, lng: 9.8355 },
    title: "Saint Mortiz, Switzerland",
    blurb: "I've been skiing since I was a little kid and Switerland is known for having incredible places for après-ski. Would love to visit with my sister."
    },
    {position: { lat: -22.9068, lng: -43.1729 },
    title: "Rio de Janeiro, Brazil",
    blurb: "I would absolutely love to witness Carnival in person. Brazil is also home to incredible beaches and architecture."
    },
    {position: { lat: 35.6764, lng: 139.6500 },
    title: "Tokyo, Japan",
    blurb: "Japanese culture is so vastly different from American culture and I would love to experience it firsthand. Japan also has so much different geography and species of animals and plants."
    }
  ];



  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: locations[0].position,
    mapId: "DEMO_MAP_ID",
  });

  locations.forEach((location) => {
    // make a marker for each location
    const marker = new AdvancedMarkerElement({
        map: map,
        position: location.position,
        title: location.title,
      });
      
    // make an info window for the marker
    const infoWindow = new google.maps.InfoWindow({
        content: `<div>
                    <h3>${location.title}</h3>
                    <p>${location.blurb}</p>
                  </div>`,
      });
  
      // add a click event listener to the marker
      marker.addListener("click", () => {
        infoWindow.open({
          anchor: marker,
          map,
          shouldFocus: false,
        });
      });
    });
  }

initMap();