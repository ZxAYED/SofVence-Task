
export const FetchData = async () => {
  try {
    const response = await fetch("/product_info.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}




