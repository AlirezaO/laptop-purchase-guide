"use client";
import React, { useCallback, useState } from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useDropzone } from "react-dropzone";
import { toast } from "sonner";
import { ImagePlus, X } from "lucide-react";

export default function FormFieldComponent({ form, formField }) {
  const [preview, setPreview] = useState("");

  const handleDeleteImage = (e) => {
    e.stopPropagation(); // Prevent triggering the dropzone
    setPreview("");
    form.resetField("image");
  };

  const onDrop = useCallback(
    (acceptedFiles) => {
      const reader = new FileReader();
      try {
        reader.onload = () => setPreview(reader.result);
        reader.readAsDataURL(acceptedFiles[0]);
        form.setValue("image", acceptedFiles[0]);
        form.clearErrors("image");
      } catch (error) {
        setPreview(null);
        form.resetField("image");
      }
    },
    [form]
  );
  const { getRootProps, getInputProps, isDragActive, fileRejections } =
    useDropzone({
      onDrop,
      maxFiles: 3,
      maxSize: 1000000,
      accept: { "image/png": [], "image/jpg": [], "image/jpeg": [] },
    });

  switch (formField.type) {
    case "text":
      return (
        <FormField
          control={form.control}
          name={formField.name}
          render={({ field }) => (
            <FormItem>
              {formField.label && <FormLabel>{formField.label}</FormLabel>}
              <FormControl>
                <Input placeholder={formField.placeholder} {...field} />
              </FormControl>
              {formField.description && (
                <FormDescription>{formField.description}</FormDescription>
              )}
              <FormMessage className="text-xs -mt-1" />
            </FormItem>
          )}
        />
      );
    case "text-area":
      return (
        <FormField
          control={form.control}
          name={formField.name}
          render={({ field }) => (
            <FormItem>
              {formField.label && <FormLabel>{formField.label}</FormLabel>}
              <FormControl>
                <Textarea
                  placeholder="Tell us a little bit about yourself"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              {formField.description && (
                <FormDescription>{formField.description}</FormDescription>
              )}
              <FormMessage className="text-xs -mt-1" />
            </FormItem>
          )}
        />
      );
    case "select":
      return (
        <FormField
          control={form.control}
          name={formField.name}
          render={({ field }) => (
            <FormItem>
              {formField.label && <FormLabel>{formField.label}</FormLabel>}
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full cursor-pointer">
                    <SelectValue placeholder={formField.placeholder} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {formField.values.map((item, index) => (
                    <SelectItem
                      key={`fieldItem${item.label}`}
                      value={item.value}
                      className="cursor-pointer"
                    >
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {formField.description && (
                <FormDescription>{formField.description}</FormDescription>
              )}
              <FormMessage className="text-xs -mt-1" />
            </FormItem>
          )}
        />
      );
    case "image":
      return (
        <FormField
          control={form.control}
          name={formField.name}
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel
              // className={`${
              //   fileRejections.length !== 0 && "text-destructive"
              // }`}
              >
                {/* <h2 className="text-xl font-semibold tracking-tight"> */}
                Upload your image
                {/* <span
                    className={
                      form.formState.errors.image || fileRejections.length !== 0
                        ? "text-destructive"
                        : "text-muted-foreground"
                    }
                  ></span>
                </h2> */}
              </FormLabel>
              <FormControl>
                <div
                  {...getRootProps()}
                  className="flex cursor-pointer flex-col items-center justify-center gap-y-2 rounded-lg border p-5 "
                >
                  {preview && (
                    <div className="relative border-1 rounded-sm">
                      <button
                        onClick={handleDeleteImage}
                        className="cursor-pointer absolute -right-2 -top-2 rounded-full p-1 text-black bg-white border-2 hover:bg-amber-500"
                        type="button"
                      >
                        <X className="size-4" />
                      </button>
                      <img
                        src={preview}
                        alt="Uploaded image"
                        className="max-h-[100px] "
                      />
                    </div>
                  )}
                  <ImagePlus
                    className={`size-10 ${preview ? "hidden" : "block"}`}
                  />
                  <Input {...getInputProps()} type="file" />
                  {isDragActive ? (
                    <p>Drop the image!</p>
                  ) : (
                    <p className="text-sm">
                      Click here or drag an image to upload it
                    </p>
                  )}
                </div>
              </FormControl>
              <FormMessage className="text-xs -mt-1">
                {fileRejections.length !== 0 &&
                  "Image must be less than 1MB and of type png, jpg, or jpeg"}
              </FormMessage>
            </FormItem>
          )}
        />
      );
    default:
      break;
  }
}
