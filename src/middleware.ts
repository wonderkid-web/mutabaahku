import { auth } from "../auth";

export default auth(async (req) => {
  const signinPath = "/auth/signin";
  const schoolOriginformPath = "/auth/signup";

  if (!req.auth) {
    if (req.nextUrl.pathname !== signinPath) {
      const newUrl = new URL(signinPath, req.nextUrl.origin);
      return Response.redirect(newUrl);
    }
  }

  if (
    req.nextUrl.pathname !== schoolOriginformPath &&
    !req.auth?.user?.schoolOrigin
  ) {
    const newUrl = new URL(schoolOriginformPath, req.nextUrl.origin);
    return Response.redirect(newUrl);
  }
});

// export const { auth: middleware } = NextAuth(authConfig);

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|auth/signin).*)"],
};
