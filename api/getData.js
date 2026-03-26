export default async function handler(request) {
  const { searchParams } = new URL(request.url);
  const number = searchParams.get("number");

  const url = `https://cyber-testing-api.vercel.app/num2info?key=CYBER_TEST&number=${number}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });

  } catch (err) {
    return new Response(JSON.stringify({ error: "API failed" }), {
      status: 500
    });
  }
}
