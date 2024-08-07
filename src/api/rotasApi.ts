import { authRoutes } from "./apiRoutes/authRoutes";
import { productRoutes } from "./apiRoutes/productRoutes";

export const rotasApi = {
    ...authRoutes,
    ...productRoutes,
  }