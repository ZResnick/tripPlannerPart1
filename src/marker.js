module.exports = function(type, coords) {
  const types = {
    activity: 'http://i.imgur.com/WbMOfMl.png',
    restaurant: 'http://i.imgur.com/cqR6pUI.png',
    hotel: 'http://i.imgur.com/D9574Cu.png',
  };

  const markerDomEl = document.createElement('div'); // Create a new, detached DIV
  markerDomEl.style.width = '32px';
  markerDomEl.style.height = '39px';
  markerDomEl.style.backgroundImage = `url(${types.type})`;

  new mapboxgl.Marker(markerDomEl).setLngLat(coords).addTo(map);
};
