"use client"

import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useFieldArray, useForm } from "react-hook-form"
import { z } from "zod"

import { cn } from "@/lib/utils"
import { Button } from "../components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../components/ui/form'
import { Input } from "../components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select"
import { Textarea } from "../components/ui/textarea"
import { toast } from "../components/ui/use-toast"

const profileFormSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(30, {
      message: "Username must not be longer than 30 characters.",
    }),
  email: z
    .string({
      required_error: "Please select an email to display.",
    })
    .email(),
  bio: z.string().max(160).min(4),
  urls: z
    .array(
      z.object({
        value: z.string().url({ message: "Please enter a valid URL." }),
      })
    )
    .optional(),
})

type ProfileFormValues = z.infer<typeof profileFormSchema>

// This can come from your database or API.
const defaultValues: Partial<ProfileFormValues> = {
  bio: "I own a computer.",
  urls: [
    { value: "https://shadcn.com" },
    { value: "http://twitter.com/shadcn" },
  ],
}

export default function SettingsForm1() {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: "onChange",
  })

  const { fields, append } = useFieldArray({
    name: "urls",
    control: form.control,
  })

  function onSubmit(data: ProfileFormValues) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (

    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-1 mt-7 grid grid-cols-6 gap-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="col-span-6 sm:col-span-3" >
              <FormLabel>Company’s Name</FormLabel>
              <FormControl>
                <Input placeholder="Sixteen Inc." {...field} />
              </FormControl>
          
              <FormMessage />
            </FormItem>
          )}
        />

<FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="col-span-6 sm:col-span-3" >
              <FormLabel>Company’s Website</FormLabel>
              <FormControl>
                <Input placeholder="https://sixteen.life/" {...field} />
              </FormControl>
          
              <FormMessage />
            </FormItem>
          )}
        />

<FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="col-span-6 sm:col-span-3" >
              <FormLabel>Company’s Linkedin</FormLabel>
              <FormControl>
                <Input placeholder="https://www.linkedin.com/company/sixteenlife" {...field} />
              </FormControl>
          
              <FormMessage />
            </FormItem>
          )}
        />

<FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="col-span-6 sm:col-span-3" >
              <FormLabel className="text-sm font-medium text-gray-900 block mb-2">Company’s Industry</FormLabel>
              <FormControl>
                <Input placeholder="Digital Wellbeing" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

      </form>
    </Form>




  )


  


}


