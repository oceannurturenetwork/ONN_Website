import React from "react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { resetClass } from "@/components/utils/app-input";

import ImageUpload from "./image-upload";
// import EditorContainer from "./editor";

interface TextInputProps {
  inputClass?: string;
  className?: string;
  form?: any;
  name: string;
  loading?: boolean;
  placeholder?: string | number;
  type?: string;
  textarea?: boolean;
  editor?: boolean;
  file?: boolean;
  labelInstructions?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  inputClass,
  className = "",
  form,
  name,
  loading,
  placeholder = "Type here...",
  type = "text",
  labelInstructions,
  textarea = false,
  editor = false,
  file = false,
}) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }: { field: any }) => (
        <FormItem className={`mb-4 ${className && className}`}>
          <FormLabel className="uppercase flex items-center">
            {name}
            <span className="text-xs text-active-color ml-4">
              {labelInstructions}
            </span>
          </FormLabel>
          <FormControl>
            <div>
              {file && (
                <ImageUpload
                  disabled={loading}
                  onChange={(url: string) => {
                    const updatedValue = [...field.value, url];
                    field.onChange(updatedValue);
                  }}
                  onRemove={(url: string) => {
                    const updatedValue = field.value.filter(
                      (imageUrl: string) => imageUrl !== url
                    );
                    field.onChange(updatedValue);
                  }}
                  path={
                    process.env.NODE_ENV === "production"
                      ? `/manlyman`
                      : "/test"
                  }
                  images={field.value}
                />
              )}
              {textarea && (
                <Textarea
                  className={cn(
                    resetClass,
                    "min-h-[150px] bg-transparent focus:border-active-color"
                  )}
                  //   "min-h-[300px] bg-transparent text-txt-color border-0 border-2 border-txt-color focus:border-primary-color focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  disabled={loading}
                  placeholder={String(placeholder)}
                  {...field}
                />
              )}


              {!file && !editor && !textarea && (
                <Input
                  className={cn(resetClass, "focus:border-active-color")}
                  //   "pl-0 bg-transparent rounded-none text-txt-color border-0 border-b-2 border-txt-color focus:border-primary-color focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  disabled={loading}
                  placeholder={String(placeholder)}
                  type={type || "text"}
                  {...field}
                />
              )}
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default TextInput;
