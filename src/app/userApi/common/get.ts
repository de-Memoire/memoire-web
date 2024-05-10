async function requestAPI<T>(
  url: string,
  queryParams?: Record<string, string>,
): Promise<T> {
  if (queryParams) {
    const queryString = Object.keys(queryParams)
      .map(
        (key) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(queryParams[key])}`,
      )
      .join('&');
    url += `?${queryString}`;
  }

  const response = await fetch(`/api/${url}`);
  if (!response.ok) {
    throw new Error(`API 요청 실패: ${response.status}`);
  }

  const data = (await response.json()) as T;
  return data;
}

export async function getData<T>(
  endpoint: string,
  queryParams?: Record<string, string>,
): Promise<T> {
  try {
    const responseData = await requestAPI<T>(endpoint, queryParams);
    return responseData;
  } catch (error) {
    throw new Error(`error: ${error}`);
  }
}
