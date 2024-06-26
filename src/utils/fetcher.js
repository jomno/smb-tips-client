const baseURL = process.env.NEXT_PUBLIC_API_URL;

export const fetchOptions = (cookies) => {
  return {
    credentials: "include",
    headers: { Cookie: cookies?.toString() },
  };
};

export const fetcher = async (url, cookies, options = {}) => {
  return await fetch(`${baseURL}${url}`, {
    options,
    ...fetchOptions(cookies),
  })
};
