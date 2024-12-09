import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { z } from "zod";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DottedSepartor } from "@/components/ui/dotted-separator";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1,"required"),
});

export const SignInCard = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit=(values:z.infer<typeof formSchema>)=>{
        console.log(values);
  }

  return (
    <Card className="w-full h-full md:w-[487px] border-none shadow-none">
      <CardHeader className="flex items-center justify-center text-center p-7">
        <CardTitle className="text-2xl">Welcome back!</CardTitle>
      </CardHeader>
      <div className="px-7 ">
        <DottedSepartor />
      </div>
      <CardContent className="p-7">
        <Form {...form}>
          
          <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                <Input
                {...field}
                  type="email"
                  placeholder="Enter the email address"
                  
                />
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />
          <FormField
            name="password"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                <Input
                {...field}
                  type="password"
                  placeholder="Enter password"
                  
                />
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />
           
            <Button disabled={false} size="lg" className="w-full">
              login
            </Button>
          </form>
        </Form>
      </CardContent>
      <div className="px-5">
        <DottedSepartor />
      </div>
      <CardContent className="p-7 flex flex-col gap-y-4">
        <Button
          variant="secondary"
          size="lg"
          disabled={false}
          className="w-full"
        >
          <FcGoogle className="mr-2 size-5" />
          Login with google
        </Button>
        <Button
          variant="secondary"
          size="lg"
          disabled={false}
          className="w-full"
        >
          <FaGithub className="mr-2 size-5" />
          Login with github
        </Button>
      </CardContent>
    </Card>
  );
};
