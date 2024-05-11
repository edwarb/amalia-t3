import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "../utils/api";

import "../styles/globals.css";
import Header from "features/common/components/Header";
import Footer from "features/common/components/Footer";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

const theme = createTheme({
  // typography: {
  //   fontFamily: "Quicksand",
  // },
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <SessionProvider session={session}>
          <Header />
          <div style={{ marginTop: 80 }}>
            <Component {...pageProps} />
          </div>
          <Footer />
        </SessionProvider>
      </CssBaseline>
    </ThemeProvider>
  );
};

export default api.withTRPC(MyApp);

// const AuthShowcase: React.FC = () => {
//   const { data: sessionData } = useSession();

//   const { data: secretMessage } = api.example.getSecretMessage.useQuery(
//     undefined, // no input
//     { enabled: sessionData?.user !== undefined }
//   );

//   return (
//     <div className="flex flex-col items-center justify-center gap-4">
//       <p className="text-center text-2xl text-white">
//         {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
//         {secretMessage && <span> - {secretMessage}</span>}
//       </p>
//       <button
//         className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
//         onClick={sessionData ? () => void signOut() : () => void signIn()}
//       >
//         {sessionData ? "Sign out" : "Sign in"}
//       </button>
//     </div>
//   );
// };
