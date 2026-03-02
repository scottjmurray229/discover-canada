// Shared destination coordinates — single source of truth
// Used by plan page + companion app + generate-itinerary API.

export const DESTINATION_COORDS: Record<string, { lat: number; lng: number; label: string }> = {
  banff: { lat: 51.1784, lng: -115.5708, label: 'Banff' },
  vancouver: { lat: 49.2827, lng: -123.1207, label: 'Vancouver' },
  toronto: { lat: 43.6532, lng: -79.3832, label: 'Toronto' },
  'quebec-city': { lat: 46.8139, lng: -71.2080, label: 'Quebec City' },
  jasper: { lat: 52.8737, lng: -118.0814, label: 'Jasper' },
  whistler: { lat: 50.1163, lng: -122.9574, label: 'Whistler' },
  'niagara-falls': { lat: 43.0962, lng: -79.0377, label: 'Niagara Falls' },
  victoria: { lat: 48.4284, lng: -123.3656, label: 'Victoria' },
  montreal: { lat: 45.5017, lng: -73.5673, label: 'Montreal' },
  calgary: { lat: 51.0447, lng: -114.0719, label: 'Calgary' },
  ottawa: { lat: 45.4215, lng: -75.6972, label: 'Ottawa' },
  'prince-edward-island': { lat: 46.5107, lng: -63.4168, label: 'Prince Edward Island' },
};

// Also export as destinationCoords for backward compatibility
export const destinationCoords: Record<string, { lat: number; lng: number }> = {
  banff: { lat: 51.1784, lng: -115.5708 },
  vancouver: { lat: 49.2827, lng: -123.1207 },
  toronto: { lat: 43.6532, lng: -79.3832 },
  'quebec-city': { lat: 46.8139, lng: -71.2080 },
  jasper: { lat: 52.8737, lng: -118.0814 },
  whistler: { lat: 50.1163, lng: -122.9574 },
  'niagara-falls': { lat: 43.0962, lng: -79.0377 },
  victoria: { lat: 48.4284, lng: -123.3656 },
  montreal: { lat: 45.5017, lng: -73.5673 },
  calgary: { lat: 51.0447, lng: -114.0719 },
  ottawa: { lat: 45.4215, lng: -75.6972 },
  'prince-edward-island': { lat: 46.5107, lng: -63.4168 },
};
