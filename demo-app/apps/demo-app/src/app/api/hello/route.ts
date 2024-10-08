export async function GET(request: Request) {
  const password =" my password"
  return new Response(`Hello,${password} from API!`);
}
