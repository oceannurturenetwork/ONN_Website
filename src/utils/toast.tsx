
import { toast } from 'sonner';

export const createToast = (title: string, description: string, status: "warning" | "success" | "danger") => {
   if (status === "success") {
    toast.success(title, {description})
   } else if (status === "warning") {
    toast.warning(title, {description})
   } else if (status === "danger") {
    toast.error(title, {description})
   }
}

 