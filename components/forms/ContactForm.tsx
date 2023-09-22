"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { contactValidation } from "@/lib/validation/contact";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { subscribersValidation } from "@/lib/validation/subscribers";

const ContactForm = () => {
  const form = useForm<z.infer<typeof contactValidation>>({
    resolver: zodResolver(contactValidation),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof contactValidation>) => {
    //e.preventDefault()
    console.log(values);
  };

  const onSubscribe = (values: z.infer<typeof subscribersValidation>) => {
     console.log(values)
  }

  return (
    <section className="mt-20 flex flex-col">
      <div className="text-center mt-4">
        <h2 className="half-underline inline-block font-bold">CONTACT US</h2>
      </div>
      <p className="mt-4 text-center">
        Get in touch with our department for questions and more informations BME
        HUB
      </p>
      <div className="mt-8 bg-gradient-to-br from-green-300 to-slate-500 p-2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      className="outline-none border-none"
                      placeholder="name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      className="outline-none border-none"
                      type="email"
                      placeholder="Email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="bg-gradient-to-br from-green-600 to-blue-300 rounded-md block mx-auto mt-4 text-black"
            >
              Send
            </Button>
          </form>
        </Form>
      </div>

      <div className="mt-8">
        <h2 className="mt-4 text-center font-bold">Join Our Newsletter</h2>
        <p className="mt-2">Subscribe to stay up to date with the latest Nest updates, features, and videos!</p>
        <div className="mt-4">
        <div className="mt-8 bg-gradient-to-br from-green-300 to-slate-500 p-2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubscribe)} className="space-y-8">

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      className="outline-none border-none"
                      type="email"
                      placeholder="Email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              className="bg-gradient-to-br from-green-600 to-blue-300 rounded-md block mx-auto mt-4 text-black"
            >
              Subscribe
            </Button>
          </form>
        </Form>
      </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
