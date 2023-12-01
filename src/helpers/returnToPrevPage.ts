import { Router } from "vue-router";

export function returnToPrevPage(router: Router): void {
  router.back();
}
