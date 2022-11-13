/** File Hash: 4f085e777822a8a12db0a5a444719ec9a01a1adf492b547f1da4e6346248552b */

/** Autogenerated Code - Do Not Touch */
/* eslint-disable */

import { useService } from './service';
import type { OrderDetail } from "@/dtos/order/order-detail"

export function useCartService() {
  const basePath = `api/v1/carts`;
  const { api, filterSearchParams } = useService(basePath);
  
  async function getShoppingCart(): Promise<OrderDetail> {
    return api.get(``).json();
  }
  return {
    getShoppingCart,
  };
}