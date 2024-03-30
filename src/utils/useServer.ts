

import { cookies } from "next/headers";
import ParseQuery from "querystring";

interface IServerRequest {
  pathname: string;
  query?: { name: string; value: string | undefined | number | boolean }[];
  data?: {
    newToken?: string;
  };
}
async function useServer<T>({
  pathname,
  query,
  data,
}: IServerRequest): Promise<any> {
  const token = cookies().get("token")?.value;
  const obj: ParseQuery.ParsedUrlQueryInput | undefined = {};
  query &&
    query.forEach((item) => {
      if (item.value) {
        obj[`${item.name}`] = item.value || "";
      }
    });
  const queryString = ParseQuery.stringify(obj);

  const response = await fetch(`https://graph.instagram.com/${pathname}?${queryString}`, {
    headers: {
      Authorization: `Bearer ${(data && data.newToken) || token}`,
    },
    next: {
      revalidate: 1000,
    },
  })
    .then((res) => res.json())
    .catch((err) => err.response);

  return response;
}

export { useServer };
