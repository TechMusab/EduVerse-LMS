"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authClient } from "@/lib/auth-client";
import { GithubIcon, Loader } from "lucide-react";
import React from "react";
import { toast } from "sonner";

export default function Page() {
  const [isPending,startTransition] = React.useTransition();
  async function signinwithGithub() {
  startTransition(async ()=>{
    await authClient.signIn.social({
      provider: "github",
      callbackURL:"/",
      fetchOptions:{
        onSuccess:()=>{
          toast.success("Signed in successfully!");
        },
        onError:(error)=>{
          toast.error(`Failed to sign in: ${error.error.message}`);
        }
      }
    })
  })
    
  }
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Welcome Back</CardTitle>
          <CardDescription>
            Login with your Github account to continue
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Button disabled={isPending} onClick={signinwithGithub} className="w-full" variant="outline">
            {
              isPending ? (
                <>
                <Loader className="size-4 animate-spin" />
                <span>Loading...</span>
                </>
              ):(
                <>
                <GithubIcon className="size-4" />
                Sign in with Github
                </>
              )
            }
          </Button>
          <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
            <span className="relative  z-10 bg-card px-2 text-muted-foreground">
              or continue with
            </span>
          </div>
          <div className="grid gap-3">
            <div className="grid gap-3">
              <Label htmlFor="email">Email</Label>
              <Input type="email" placeholder="m@example.com" />
              <Button>Continue with Email</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
