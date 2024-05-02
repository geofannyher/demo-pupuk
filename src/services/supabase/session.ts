import { supabase } from "./connection";

export const getIdSession = async () => {
  try {
    const data = await supabase.from("user_pupuk").select("id_pupuk").single();

    if (data) {
      return data;
    } else {
      throw new Error("User not found");
    }
  } catch (error: any) {
    return error.message;
  }
};

export const changelocalid = async ({ newUserId }: any) => {
  try {
    const data = await supabase
      .from("user_pupuk")
      .update({ id_pupuk: newUserId })
      .eq("id", 1);
    return data;
  } catch (error: any) {
    return error.message;
  }
};
