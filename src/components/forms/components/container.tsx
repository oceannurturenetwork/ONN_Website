// "use client"; - no need because it has to be imported by a client component
// form container that allows the creeation of forms without repitition 
// check the contacts folder for an example 

import React from "react";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Form } from "@/components/ui/form";

import TextInput from "./input";

// type
import { FormItem } from "@/types";

interface FormProps {
  formSchema: any;
  className?: string;
  defaultValues: any;
  buttonPosition: string;
  button: React.ReactNode;
  values: FormItem[];
  loading: boolean;
  onSubmit: (data: any) => Promise<void>;
  cRef?: any | null;
}
const FormContainer: React.FC<FormProps> = ({
  formSchema,
  defaultValues,
  buttonPosition,
  button,
  values,
  loading,
  onSubmit,
  className = "",
  cRef,
}) => {
  type FormValues = z.infer<typeof formSchema>;

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  return (
    <Form {...form}>
      <form
        ref={cRef}
        className={className}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        {buttonPosition === "top" && button}
        <div className="w-full">
          {values.map((item: FormItem, index: number) => (
            <TextInput
              key={index}
              form={form}
              name={item.name}
              loading={loading}
              placeholder={item.placeholder}
              textarea={item.textarea}
              editor={item.editor}
              file={item.file}
              labelInstructions={item.labelInstructions}
            />
          ))}
        </div>

        {buttonPosition === "bottom" && button}
      </form>
    </Form>
  );
};

export default FormContainer;
