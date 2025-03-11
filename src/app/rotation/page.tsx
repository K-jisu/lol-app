const page = async () => {
  const res = await fetch(
    `https://kr.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=RGAPI-d4520e6e-a219-4855-8385-2bf6de83e20e`
  );
  const data = await res.json();

  return <div>{JSON.stringify(data)}</div>;
};

export default page;
