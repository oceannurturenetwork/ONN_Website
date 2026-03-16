"use client";
import React from "react";
import { AtSign, Send } from "lucide-react";

import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { Heading4 } from "../utils/typography";
import AppInput from "../utils/app-input";
import { Button } from "../ui/button";
import { validateEmail } from "@/utils/validation";
import { toast } from "sonner"

const Subscribe = (
  { fn, className, modal }: { fn?: () => void; className?: string; modal?: boolean }
) => {
  const [email, setEmail] = React.useState<string>("");
  const [trueEmail, setTrueEmail] = React.useState<boolean>(false);
  const [mounted, setMounted] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);

  React.useEffect(() => setMounted(true), []);

  const handleSubmit = async () => {
    if (!validateEmail(email)) return;

    setLoading(true);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        // You could add a toast here instead
        toast("Successfully subscribed!")

        setEmail("");
        if (fn) fn();
      } else {
        toast("Subscription failed")
      }
    } catch (err) {
      toast("Error subscribing!")
    }
    setLoading(false);
  };

  if (!mounted)
    return (
      <Skeleton className="w-[300px] h-[50px] rounded-full lg:mt-[3.5rem] my-3" />
    );

  return (
    <div className={cn(!modal && "lg:mt-[4.3rem]")}> 
      {!fn && (
        <Heading4 className="text-md lg:text-base font-bold  text-white mb-4">
          Subscribe to our newsletter
        </Heading4>
      )}

      <AppInput
        value={email}
        disabled={loading}
        setValue={setEmail}
        icon={email.length < 2 && <AtSign size={18} color="white" />}
        cls="text-white border-none"
        button={
          trueEmail && (
            <Button
              className={cn("rounded-full min-w-[70px] my-1")}
              onClick={handleSubmit}
              disabled={loading}
              size="sm"
            >
              <Send size={18} />
            </Button>
          )
        }
        containerClassName={cn("rounded-full w-[300px]", className)}
        placeholder="Enter your email"
        onKeyDown={(e: any) => {
          if (validateEmail(e)) setTrueEmail(true);
          else setTrueEmail(false);
        }}
      />
    </div>
  );
};

export default Subscribe;

// "use client";
// import React from "react";
// import { AtSign, Send } from "lucide-react";

// import { Skeleton } from "@/components/ui/skeleton";
// import { cn } from "@/lib/utils";
// import { Heading4 } from "../utils/typography";
// import AppInput from "../utils/app-input";
// import { Button } from "../ui/button";
// import { validateEmail } from "@/utils/validation";
 
// const Subscribe = (
//     {fn, className, modal}: 
//     {fn?: () => void, className?: string, modal?: boolean}
// ) => {
//     const [email, setEmail] = React.useState<string>(""); 
//     const [trueEmail, setTrueEmail] = React.useState<boolean>(false); 

//     const [mounted, setMounted] = React.useState<boolean>(false); 
//     const [loading, setLoading] = React.useState<boolean>(false); 

//     React.useEffect(() => setMounted(true), []); 

//     const handleSubmit = async () => {
//         setLoading(true);
//         let res; 
//         // await handleSubscribing({email}); 

//         if (res) {
//             // createToast("success", "You have been subscribed!");
//             setEmail("");
//             if (fn) fn()
//         }; 
//         setLoading(false); 
//     }

//     if (!mounted) return <Skeleton className="w-[300px] h-[50px] rounded-full lg:mt-[3.5rem] my-3"/>; 

//     return (
//         <div className={cn(!modal && "lg:mt-[4.3rem]")}>
//             {
//                 !fn && (
//                     <Heading4 className="text-md lg:text-base font-bold  text-white mb-4">
//                         Subscribe to our newsletter
//                     </Heading4>
//                 )
//             }
//             <AppInput 
//                 value={email}
//                 disabled={loading}
//                 setValue={setEmail}
//                 icon={email.length < 2 && <AtSign size={18} color="white"/>}
//                 cls="text-white border-none"
//                 button={
//                     trueEmail && (
//                         <Button 
//                             className={cn("rounded-full min-w-[70px] my-1")}
//                             onClick={handleSubmit}
//                             disabled={loading}
//                             size="sm"
//                         >
//                             <Send size={18}/>
//                         </Button>
//                     )
//                 }
//                 containerClassName={cn("rounded-full w-[300px]", className)}
//                 placeholder="Enter your email"
//                 onKeyDown={(e: any) => {
//                     if (validateEmail(e)) setTrueEmail(true);
//                     else setTrueEmail(false)
//                 }}
//             />
                
//         </div>
//     )
// }; 

// export default Subscribe; 

 