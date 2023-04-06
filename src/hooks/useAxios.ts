import { useState } from "react";
import { AxiosResponse } from "axios";

import { api } from "../api/axios";

interface AxiosState<T> {
  response: AxiosResponse<T> | null;
  loading: boolean;
}

export function axiosGet<T>() {
  const [state, setState] = useState<AxiosState<T>>({
    loading: false,
    response: null,
  });

  const request = async (url: string): Promise<AxiosResponse<T> | null> => {
    setState((prevState) => ({ ...prevState, loading: true }));

    const response = await api.get<T>(url);

    setState({ loading: false, response });

    return response;
  };

  return { ...state, request };
}
