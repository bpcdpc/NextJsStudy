import { SaleData } from "@/types/sale";
import { ENV } from "@/config/env";

async function fetchData(url: string): Promise<SaleData[]> {
  try {
    const res = await fetch(url, {
      next: { revalidate: 10 }, // 10초에 한번씩 가져옴
      // cache: "no-store" 캐시하지 않음
      // cache: "force-cache" cache hit에 성공하지 않으면 데이터를 서버에서 새로 가져옴
    });

    if (!res.ok) throw new Error(`Error ${res.status}: HTTP 요청 실패`);
    const data = await res.json();
    return data.documents;
  } catch (err) {
    if (err instanceof Error) console.log(err);
    return [];
  }
}

export function fetchSales(q?: string): Promise<SaleData[]> {
  let url = `${ENV.API_URL}/sales`;
  if (q) url += `?q=${q}`;
  return fetchData(url);
}

export function fetchSalesRecent(): Promise<SaleData[]> {
  const url = `${ENV.API_URL}/sales/recent`;
  return fetchData(url);
}

export function fetchSaleById(id: number): Promise<SaleData[]> {
  const url = `${ENV.API_URL}/sales/${id}`;
  return fetchData(url);
}
