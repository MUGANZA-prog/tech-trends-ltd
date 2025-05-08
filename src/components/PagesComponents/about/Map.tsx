import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

function Maps() {
  const defaultPosition = { lat: -1.9808258881431746, lng: 30.103873411319007 };  
  return (
    <APIProvider apiKey= "AIzaSyCDoRlhs6FVVewThXAUAuuiefD19ISAzdg">
      <div style={{ height: '500px', width: '100%' }}>
        <Map defaultCenter={defaultPosition} defaultZoom={10} style={{ height: '100%', width: '100%' }}>
          <Marker position={defaultPosition} title={'Tech-trends-ltd'} />
        </Map>
      </div>
    </APIProvider>
  );
}

export default Maps;
