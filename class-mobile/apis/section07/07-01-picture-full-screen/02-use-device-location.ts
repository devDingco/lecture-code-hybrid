import * as Location from 'expo-location'

export const useDeviceLocation = (onResponse) => {

    const fetchDeviceLocationForLatLngSet = async () => {
        const result = await Location.requestForegroundPermissionsAsync()
        if(result.status === "granted"){
            const location = await Location.getCurrentPositionAsync()
            onResponse({ 
                fetchDeviceLocationForLatLngSet: { 
                    lat: location.coords.latitude, 
                    lng: location.coords.longitude 
                }
            })
        } else {
            onResponse({ 
                fetchDeviceLocationForLatLngSet: { lat: 37, lng: 128 }
            })
        }
    }

    return {
        fetchDeviceLocationForLatLngSet
    }
}