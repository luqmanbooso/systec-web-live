import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
} from "@/components/ui/form";
import toast from "react-hot-toast";

type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

export const Contact = () => {
  const form = useForm<ContactFormValues>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (values: ContactFormValues) => {
    // TODO: replace with real submission (API endpoint or third-party)
    console.log("Contact form submitted:", values);
    toast.success("Thanks! Your message was sent.");
    form.reset();
  };

  return (
    <section id="contact" className="py-20 px-6 bg-card">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-serif font-bold mb-4">Contact Us</h2>
        <p className="text-muted-foreground mb-8">
          Have a project in mind or want to learn more? Send us a message and
          we’ll get back to you shortly.
        </p>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-1 gap-4"
            noValidate
          >
            <FormField
              name="name"
              control={form.control}
              rules={{ required: "Name is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="email"
              control={form.control}
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email",
                },
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="you@company.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="message"
              control={form.control}
              rules={{
                required: "Message is required",
                minLength: { value: 10, message: "Please provide more details" },
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Tell us about your project" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="pt-2">
              <Button type="submit" variant="cta">
                Send Message
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default Contact;
