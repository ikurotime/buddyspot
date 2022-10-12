import { PageProps } from "$fresh/server.ts";
import Layout from "../../components/Layout.tsx";

export default function Greet(props: PageProps) {
  return <Layout>Hello {props.params.name}</Layout>;
}
