import { auth } from "../auth";

export default auth(async (req) => {
  console.log('test')
  const signinPath = "/api/auth/signin";
  if (!req.auth && req.nextUrl.pathname !== signinPath) {
    const newUrl = new URL(signinPath, req.nextUrl.origin);
    return Response.redirect(newUrl);
  }
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
