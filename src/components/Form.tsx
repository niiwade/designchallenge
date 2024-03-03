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

const settingsFormSchema = z.object({
  companyDescription: z
    .string()
    .min(2, {
      message: "Company Description must be at least 10 characters.",
    })
    .max(30, {
      message: "Company Description must not be longer than 30 characters.",
    }),
  companygoals: z
    .string()
    .min(2, {
      message: "Company Goals must be at least 10 characters.",
    })
    .max(30, {
      message: "Company Goals must not be longer than 30 characters.",
    }),
  hq: z
    .string()
    .min(2, {
      message: "Country Name must be at least 3 characters",
    })
    .max(30, {
      message: "Country Name must not be longer than 30 characters.",
    }),
  urls: z.string().url("Please enter a valid URL"),
  round: z.string().nonempty("Please select a funding round")


})

type SettingsFormValues = z.infer<typeof settingsFormSchema>



export default function SettingsForm() {
  const form = useForm<SettingsFormValues>({
    resolver: zodResolver(settingsFormSchema),
    mode: "onChange",
  })



  function onSubmit(data: SettingsFormValues) {
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-5">
        <FormField
          control={form.control}
          name="companyDescription"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[##17171F]">Company description</FormLabel>
              <FormControl>
                <Input className="text-[##17171F]" placeholder="Redesign your digital life, reduce your screen time" {...field} />
              </FormControl>
              <FormDescription>
                Your detailed company description
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="companygoals"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[##17171F]" >What are your company goals?</FormLabel>
              <FormControl>
                <Input className="text-[##17171F]" placeholder="Help everyone to be more conscious of where they are spending their time" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />


        <FormField
          control={form.control}
          name="hq"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[##17171F]" >Headquarters</FormLabel>
              <FormControl>
                <Input className="text-[##17171F]" placeholder="Delhi, India" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />



      </form>


      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-1 mt-7 pb-10 grid grid-cols-6 gap-6">
        <FormField
          control={form.control}
          name="round"
          render={({ field }) => (
            <FormItem className="col-span-6 sm:col-span-3" >
              <FormLabel>Funding Round</FormLabel>

              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Seed" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="m@example.com">seed1</SelectItem>
                  <SelectItem value="m@google.com">seed2</SelectItem>
                  <SelectItem value="m@support.com">seed3</SelectItem>
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="urls"
          render={({ field }) => (
            <FormItem className="col-span-6 sm:col-span-3" >
              <FormLabel className="text-[##17171F]" >FAQs</FormLabel>

              <FormControl>
                <Input className="text-[##17171F]" placeholder="https://sixteen.life/faq" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

      </form>
    </Form>






  )
}