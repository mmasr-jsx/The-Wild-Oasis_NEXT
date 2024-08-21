import Page, { PageProps } from "./page";

export default async function Default({ props: PageProps }) {
  return (
    // @ts-expect-error Async Component
    <Page {...props} />
  );
}
