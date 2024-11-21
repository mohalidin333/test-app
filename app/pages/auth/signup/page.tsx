"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/ui/form";
import { Input } from "@/app/components/ui/input";
import { Button, buttonVariants } from "@/app/components/ui/button";
import { SiNextdotjs } from "react-icons/si";
import Link from "next/link";

const schema = z.object({
  email: z.string().email("Please enter a valid email."),
  password: z.string().min(6, "Password must be at least 6 characters."),
});

type DataType = z.infer<typeof schema>;

export default function Signup() {
  const form = useForm<DataType>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: DataType) => {
    console.log(data);
    console.log(form.formState.errors);
  };

  return (
    <main className="h-[100vh] overflow-y-auto flex flex-col items-center  py-[10rem] gap-[5rem] screen">
      {/* logo */}
      <div className="flex items-center gap-[1rem]">
        <SiNextdotjs size={30} className="text-slate-800" />
        <h2 className="text-xl">
          Next<span className="text-accent">Kit</span>
        </h2>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="bg-sidebar p-[1rem] rounded-md shadow-sm border flex flex-col gap-[1rem] md:w-[400px] w-[100%]"
        >
          <div className="flex flex-col gap-2">
            <h2 className="text-xl">Create account</h2>
            <p className="text-slate-500 text-sm">Enter your credentials to create your account</p>
          </div>

          {/* email */}
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-[600]">Email</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* password */}
          <FormField
            name="password"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-[600]">Password</FormLabel>
                <FormControl>
                  <Input {...field} type="password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" variant={"default"}>
            Signup
          </Button>

          <div className="flex flex-col w-full">
            <Link
              href={"/pages/auth/login"}
              className={buttonVariants({ variant: "link" })}
            >
              Login here
            </Link>
          </div>
        </form>
      </Form>
    </main>
  );
}
