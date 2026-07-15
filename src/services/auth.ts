import { supabase } from "../api/supabaseClient";

interface SignUpPayload {
  name: string;
  email: string;
  password: string;
}

interface SignInPayload {
  email: string;
  password: string;
}
interface resetPasswordPayload {
  email: string;
}
export const authServices = {
  signUp: async ({ name, email, password }: SignUpPayload) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: name },
      },
    });
    if (error) throw error;
    return data;
  },
  signIn: async ({ email, password }: SignInPayload) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) throw error;
    return data;
  },
  signOut: async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  },
  // resetPassword: async ({ email }: resetPasswordPayload) => {
  //   const { data, error } = await supabase.auth.resetPasswordForEmail(email);
  //   if (error) throw error;
  //   return data;
  // },

  getSession: async () => {
    const { data, error } = await supabase.auth.getSession();
    if (error) throw error;
    return data.session;
  },
};
