import { PageProps } from "$fresh/server.ts";
import Layout from "../components/Layout.tsx";

export default function NotFound(props: PageProps) {
  return <Layout centered>Sorry! 404</Layout>;
}
