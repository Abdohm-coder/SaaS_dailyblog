import { User } from "@supabase/supabase-js";
import { create } from "zustand";

interface UserState {
  user?: User;
  setUser: (user?: User) => void;
}

export const useUser = create<UserState>((set) => ({
  user: undefined,
  setUser: (user) => set(() => ({ user })),
}));