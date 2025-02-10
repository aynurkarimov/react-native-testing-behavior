import { createContext, useMemo, useState } from "react";

type User = { id: number; name: string };
export type Auth = {
  user: User | undefined;
  setUserInformation: (user: User) => void;
};

const ContextWithMethods = createContext<Auth>({} as Auth);

export { ContextWithMethods };

export default function ContextWithMethodsProvider({ children }: any) {
  const [user, setUser] = useState<User>();

  const setUserInformation = (user: User) => {
    setUser({
      ...user,
      name: "Bob",
    });
  };

  const memoizedAuthState = useMemo(
    () => ({
      user: user,
      setUserInformation,
    }),
    // eslint-disable-next-line prettier/prettier
    [user]
  );

  return (
    <ContextWithMethods.Provider value={memoizedAuthState}>
      {children}
    </ContextWithMethods.Provider>
  );
}
