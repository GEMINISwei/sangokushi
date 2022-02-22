// Pagination
interface PaginationItem {
  text: string,
  class?: Object,
  method?: PaginationMethod
}

interface PaginationMethod {
  (index: number): void;
}


// Sidebar
interface SidebarItem {
  text: string,
  name: string,
}