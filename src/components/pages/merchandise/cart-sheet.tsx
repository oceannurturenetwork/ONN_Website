"use client";

import { useState } from "react";
import Image from "next/image";
import { ShoppingBasket, X, Minus, Plus } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useCart } from "@/stores/cart-store";
import { PayPalCheckout } from "./paypal-wrapper";
import { generatePdf } from "@/utils/pdf";
import { createToast } from "@/utils/toast";

export const CartSheet = () => {
    const [open, setOpen] = useState(false);
    const [proceed, setProceed] = useState<boolean>(false);
    const [email, setEmail] = useState<string>(""); 

    const cart = useCart((state) => state.items);
    const count = useCart((state) => state.count());
    const removeFromCart = useCart((state) => state.removeFromCart);
    const updateQuantity = useCart((state) => state.updateQuantity);
    const total = cart.reduce((sum, item) => sum + item.quantity * parseFloat(item.price), 0).toFixed(2);

    const handleProceed = () => {
        // const invoicePdf = await generatePdf(cart);
        // const res = await initiatePayPalPayment(total); // You can also use PayPal Buttons
        if (!email) {
            createToast("Error", "Provide a valid email!", "danger");
            return; 
        }
        setProceed(true)
        // if (res.success) {
        //     await fetch("/api/send-invoice", {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify({
        //         pdf: invoicePdf, // base64 or file URL
        //         email: userEmail,
        //         ownerEmail: "siteowner@example.com"
        //     })
        //     });
        // }
    };

    const handleOnApprove = async () => {
        const pdf = await generatePdf(cart);
        const res = await fetch("/api/send-invoice", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ pdf, email }),
        });

        if (res.ok) {
            alert("Payment complete and invoice sent!");
        } else {
            alert("Payment complete but invoice failed to send.");
        }
        localStorage.deleteItem("cart"); 
        setProceed(false)
    }

  return (
    <>
        {
            count ? (
                <div className="fixed top-1/2 right-4 mt-[6rem] transform -translate-y-1/2 z-50">
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" className="relative p-2 rounded-full bg-white shadow-md">
                                <ShoppingBasket className="h-6 w-6" />
                                
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                                    {count}
                                </span>
                                
                            </Button>
                        </SheetTrigger>

                        <SheetContent side="right" className="w-[400px] sm:w-[500px] h-[100vh] px-2 py-5">
                            <SheetHeader className="mt-[2rem]">
                                <SheetTitle>Your Cart</SheetTitle>
                            </SheetHeader>
                            {cart.length === 0 ? (
                                <p className="mt-4 text-center text-sm text-gray-500">Your cart is empty.</p>
                            ) : (
                                <>
                                    {
                                        !proceed ? (
                                            <div className="mt-4 space-y-6 flex-1 overflow-y-auto">
                                                {cart.map((item) => (
                                                    <div key={item.id} className="flex gap-4 border-b pb-4">
                                                    <Image src={item.image} alt={item.title} width={80} height={80} className="rounded-md object-cover" />
                                                    <div className="flex-1">
                                                        <h3 className="font-semibold">{item.title}</h3>
                                                        <p className="text-sm text-muted-foreground">Size: {item.size}</p>
                                                        <div className="flex items-center gap-2 mt-2">
                                                        <Button variant="ghost" size="icon" onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}>
                                                            <Minus className="h-4 w-4" />
                                                        </Button>
                                                        <span className="text-sm">{item.quantity}</span>
                                                        <Button variant="ghost" size="icon" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                                                            <Plus className="h-4 w-4" />
                                                        </Button>
                                                        <Button variant="ghost" size="icon" className="ml-auto text-red-600" onClick={() => removeFromCart(item.id)}>
                                                            <X className="h-4 w-4" />
                                                        </Button>
                                                        </div>
                                                    </div>
                                                    </div>
                                                ))}
                                            </div>
                                        ): (
                                            <>
                                               
                                            </>
                                        )
                                    }
                                </>
                            )}
                            <div className="mt-6 border-t pt-4 space-y-4">
                                <div className="flex justify-between font-semibold text-lg">
                                    <span>Subtotal</span>
                                    <span>${total}</span>
                                </div>
                                {
                                    !proceed ? (
                                        <>
                                            <Label>Email to send invoice</Label>
                                            <Input 
                                                type="email"
                                                value={email}
                                                onChange={e => setEmail(e.target.value)}
                                                placeholdeer="Enter a valid email"
                                            />
                                            <Button className="w-full" onClick={handleProceed}>
                                                Checkout with PayPal
                                            </Button>
                                        </>

                                    ): <></>
                                }
                            </div>
                            {
                                proceed && (
                                    <div className="mt-4">
                                        <PayPalCheckout
                                            amount={total}
                                            onApprove={handleOnApprove}
                                            setProceed={setProceed}
                                        />
                                    </div>
                                )
                            }
                        </SheetContent>
                        
                    </Sheet>
                </div>
            ): <></>
        }


    </>
  );
};
