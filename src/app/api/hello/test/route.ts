export const runtime = "edge";


export const GET = async (req: Request) => {
  console.log("request?", req);

  return new Response("hello world");
};