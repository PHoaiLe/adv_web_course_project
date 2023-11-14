import { revalidatePath } from "next/cache";

export function c_revalidatePath(path)
{
    revalidatePath(path)
}