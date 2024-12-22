import { useState, useEffect } from 'react';
import { Location } from '../types';

export const useGeolocation = () => {
  const [location, setLocation] = useState<Location | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          // In production, make an API call to get district and state from coordinates
          setLocation({
            latitude,
            longitude,
            district: 'Sample District', // Replace with actual API call
            state: 'Sample State'        // Replace with actual API call
          });
        } catch (err) {
          setError('Failed to get location details');
        } finally {
          setLoading(false);
        }
      },
      (err) => {
        setError(err.message);
        setLoading(false);
      }
    );
  }, []);

  return { location, error, loading };
};