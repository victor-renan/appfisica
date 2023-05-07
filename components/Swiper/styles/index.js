import { theme } from "native-base";

export const styles = {
  autoplay: false,
  autoplayDelay: 5,
  autoplayLoop: true,
  showPagination: true,
  autoplayLoopKeepAnimation: true,
  paginationStyleItem: {
    width: 11,
    height: 11,
    marginHorizontal: 6
  },
  paginationDefaultColor: theme.colors.gray[300],
  paginationActiveColor: theme.colors.amber[500],
}