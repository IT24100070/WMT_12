/**
 * useRefresh.js
 * Pull-to-refresh helper hook compatible with FlatList / ScrollView.
 * Usage:
 *   const { refreshing, onRefresh } = useRefresh(fetchFn);
 *   <FlatList refreshing={refreshing} onRefresh={onRefresh} ... />
 */
import { useState, useCallback } from 'react';

export function useRefresh(fetchFn) {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    try {
      await fetchFn();
    } finally {
      setRefreshing(false);
    }
  }, [fetchFn]);

  return { refreshing, onRefresh };
}
