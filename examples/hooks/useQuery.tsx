import { useEffect, useState } from "react";

import { ORIGIN } from "@/__mocks__/server";

export default function useQuery<T>(endpoint: string) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<T>();

  useEffect(() => {
    (async () => {
      const raw = await fetch(`${ORIGIN}${endpoint}`);
      const response = await raw.json();

      setData(response);
      setLoading(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, loading };
}
