import RIOT_CONSTANT from "@/constants/RIOT_CONSTANT";

export async function GET() {
  const res = await fetch(`${RIOT_CONSTANT.RIOT_ROTATION_CHAMPION_URL}`, {
    headers: {
      "X-Riot-Token": `${process.env.NEXT_PUBLIC_RIOT_API_KEY}` || "",
    },
  });

  if (!res.ok) {
  }

  const data = await res.json();

  return Response.json(data);
}
