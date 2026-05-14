// } from "@tanstack/react-router";
// import appCss from "../styles.css?url";
// import { Header } from "@/components/Header";
// import { Footer } from "@/components/Footer";
// function NotFoundComponent() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-background px-4">
//       <div className="max-w-md text-center">
//         <h1 className="text-7xl font-bold text-foreground">404</h1>
//         <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
//         <p className="mt-2 text-sm text-muted-foreground">
//           The page you're looking for doesn't exist or has been moved.
//         </p>
//         <h1 className="text-7xl font-bold text-primary font-display">404</h1>
//         <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
//         <p className="mt-2 text-sm text-muted-foreground">This story doesn't exist or has been moved.</p>
//         <div className="mt-6">
//           <Link
//             to="/"
//             className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
//           >
//             Go home
//           <Link to="/" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary-dark">
//             Back to home
//           </Link>
//         </div>
//       </div>
// function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
//   console.error(error);
//   const router = useRouter();
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-background px-4">
//       <div className="max-w-md text-center">
//         <h1 className="text-xl font-semibold tracking-tight text-foreground">
//           This page didn't load
//         </h1>
//         <p className="mt-2 text-sm text-muted-foreground">
//           Something went wrong on our end. You can try refreshing or head back home.
//         </p>
//         <div className="mt-6 flex flex-wrap justify-center gap-2">
//           <button
//             onClick={() => {
//               router.invalidate();
//               reset();
//             }}
//             className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
//           >
//             Try again
//           </button>
//           <a
//             href="/"
//             className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
//           >
//             Go home
//           </a>
//         </div>
//         <h1 className="text-xl font-semibold">This page didn't load</h1>
//         <p className="mt-2 text-sm text-muted-foreground">Something went wrong. Try again.</p>
//         <button
//           onClick={() => { router.invalidate(); reset(); }}
//           className="mt-4 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary-dark"
//         >
//           Try again
//         </button>
//       </div>
//     </div>
//   );
//     meta: [
//       { charSet: "utf-8" },
//       { name: "viewport", content: "width=device-width, initial-scale=1" },
//       { title: "Lovable App" },
//       { name: "description", content: "Lovable Generated Project" },
//       { name: "author", content: "Lovable" },
//       { property: "og:title", content: "Lovable App" },
//       { property: "og:description", content: "Lovable Generated Project" },
//       { property: "og:type", content: "website" },
//       { name: "twitter:card", content: "summary" },
//       { name: "twitter:site", content: "@Lovable" },
//       { title: "Khabar24 — India's Bold News Platform" },
//       { name: "description", content: "Latest breaking news, politics, sports and entertainment from across India." },
//     ],
//     links: [
//       {
//         rel: "stylesheet",
//         href: appCss,
//       },
//     ],
//     links: [{ rel: "stylesheet", href: appCss }],
//   }),
//   shellComponent: RootShell,
//   component: RootComponent,
// function RootShell({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <head>
//         <HeadContent />
//       </head>
//       <body>
//         {children}
//         <Scripts />
//       </body>
//       <head><HeadContent /></head>
//       <body>{children}<Scripts /></body>
//     </html>
//   );
// }
// function RootComponent() {
//   const { queryClient } = Route.useRouteContext();
//   return (
//     <QueryClientProvider client={queryClient}>
//       <Outlet />
//       <div className="min-h-screen flex flex-col bg-background">
//         <Header />
//         <main className="flex-1"><Outlet /></main>
//         <Footer />
//       </div>
//     </QueryClientProvider>
//   );
// }
