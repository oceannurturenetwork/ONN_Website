"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { AppImage } from "@/components/utils";
import { ShoppingBasket } from "lucide-react";
import { useCart } from "@/stores/cart-store";

export const Product = ({ product }: { product: any }) => {
  const addToCart = useCart((state) => state.addToCart);

  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    quantity: 1,
    size: "",
    location: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (!form.name || !form.size || !form.location) return;

    addToCart({
      title: product.title,
      image: product.image,
      price: product.price,
      name: form.name,
      quantity: Number(form.quantity),
      size: form.size,
      location: form.location,
    });

    setOpen(false);
    setForm({ name: "", quantity: 1, size: "", location: "" });
  };

  return (
    <>
      <Card className="w-full h-[350px] lg:h-[450px] relative overflow-hidden">
        <AppImage
          alt={product.title}
          title={product.title}
          src={product.image}
          fill
          objectFit="contain"
        />
        <div className="flex items-end justify-between absolute bottom-0 left-0 bg-black-transparent text-white w-full p-4">
          <div>
            <h3 className="text-xl font-bold">{product.title}</h3>
            <p className="text-lg">$&nbsp;{product.price.toFixed(2)}</p>
          </div>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button variant="ghost" size="sm">
                <ShoppingBasket size={30} />
              </Button>
            </DialogTrigger>
            <DialogContent className="space-y-2">
              <DialogHeader>
                <DialogTitle>Add to Basket</DialogTitle>
              </DialogHeader>
              <Input name="name" placeholder="Your Name" value={form.name} onChange={handleChange} />
              <Input name="quantity" type="number" min={1} placeholder="Quantity" value={form.quantity} onChange={handleChange} />
              <Input name="size" placeholder="Size (e.g., M, L, XL)" value={form.size} onChange={handleChange} />
              <Input name="location" placeholder="Your Location" value={form.location} onChange={handleChange} />
              <Button onClick={handleAdd} className="w-full">
                Add to Basket
              </Button>
            </DialogContent>
          </Dialog>
        </div>
      </Card>
    </>
  );
};
