import { Ref } from "vue";

export function fetchData<T>(
  url: string,
  loading: Ref<boolean>,
  error: Ref<string>,
  loadingDots: Ref<string>
): Promise<T> {
  loading.value = true;

  const intervalId = setInterval(() => {
    if (loadingDots.value.length === 3) loadingDots.value = ".";
    else loadingDots.value += ".";
  }, 400);

  return fetch(url)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => (error.value = err.message))
    .finally(() => {
      loading.value = false;
      clearInterval(intervalId);
    });
}
