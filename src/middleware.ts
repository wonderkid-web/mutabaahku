import { auth } from "../auth";

export default auth(async (req) => {
  const signinPath = "/auth/signin";
  const schoolOriginformPath = "/auth/signup";

  const operatorPath = "/operator";
  const parentPath = "/parent";
  const teacherPath = "/teacher/hafalan";
  const newUserPath = "/auth/signin";

  if (!req.auth) {
    if (req.nextUrl.pathname !== signinPath) {
      const newUrl = new URL(signinPath, req.nextUrl.origin);
      return Response.redirect(newUrl);
    }
  }

  const isRole = req.auth?.user?.role;
  const isSchoolOrigin = req.auth?.user?.schoolOrigin;

  if (!isRole && isSchoolOrigin) {
    const newUrl = new URL(newUserPath, req.nextUrl.origin);
    return Response.redirect(newUrl);
  }

  const isTeacher = req.auth?.user?.role == "teacher";
  const teacherRoutes = [teacherPath, '/windows11', '/ios', 'android'].some((route) =>
    req.nextUrl.pathname.startsWith(route)
  );

  if (isTeacher && !teacherRoutes) {
    const newUrl = new URL(teacherPath, req.nextUrl.origin);
    return Response.redirect(newUrl);
  }

  const isParent = req.auth?.user?.role == "parent";
  const parentRoutes = [parentPath, '/windows11', '/ios', 'android'].some((route) =>
    req.nextUrl.pathname.startsWith(route)
  );

  if (isParent && !parentRoutes) {
    const newUrl = new URL(parentPath, req.nextUrl.origin);
    return Response.redirect(newUrl);
  }

  const isOperator = req.auth?.user?.role == "operator";
  const operatorRoutes = [operatorPath, '/windows11', '/ios', 'android'].some((route) =>
    req.nextUrl.pathname.startsWith(route)
  );

  if (isOperator && !operatorRoutes) {
    const newUrl = new URL(operatorPath, req.nextUrl.origin);
    return Response.redirect(newUrl);
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
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|auth/signin|public/*|manifest).*)"],
};
