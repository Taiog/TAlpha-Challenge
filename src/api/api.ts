import { QueryClient } from "@tanstack/react-query";
import axios from "axios";

export const queryClient = new QueryClient({ defaultOptions: { queries: { retry: 0 }, mutations: { retry: 0 } } })

export const api = () =>
    axios.create({
      baseURL: `https://interview.t-alpha.com.br/api`,
      timeout: 1000 * 30,
      headers: { Accept: 'application/json', 'Content-Type': 'application/json', authorization: `Bearer ${localStorage.getItem('token')}` },
    })