import { SaleData } from "@/types/sale";

async function fetchData(url: string): Promise<SaleData[]> {
  try {
    const res = await fetch(url);

    if (!res.ok) throw new Error(`Error: ${res.status} : HTTP request failed.`);
    const data = await res.json();

    return data.documents;
  } catch (err) {
    if (err instanceof Error) console.log(err);
    return [];
  }
}

export async function fetchSales(q?: string): Promise<SaleData[]> {
  let endpoint = `${process.env.NEXT_PUBLIC_API_URL}/sales`;
  if (q) {
    endpoint += `?q=${q}`;
  }
  return fetchData(endpoint);
}

export async function fetchSalesRecent(): Promise<SaleData[]> {
  const endpoint = `${process.env.NEXT_PUBLIC_API_URL}/sales/recent`;
  return fetchData(endpoint);
}

export async function fetchSaleById(id: number): Promise<SaleData[]> {
  const endpoint = `${process.env.NEXT_PUBLIC_API_URL}/sales/${id}`;
  return fetchData(endpoint);
}
