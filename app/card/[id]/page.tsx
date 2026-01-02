import { CardWithDataFetch } from "./CardWithDataFetch";

interface CardPageProps {
  params: Promise<{ id: string}>;
}

export default async function CoinDetailsPage(props: CardPageProps) {
  const params = await props.params;
  const id = params.id;

// TODO if(ai)
  return (
    <CardWithDataFetch id={id}/>
  );
}
