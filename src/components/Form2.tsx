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

const settingsForm2Schema= z.object({
  companyname: z
    .string()
    .min(5, {
      message: "Company Name must be at least 5 characters.",
    })
    .max(30, {
      message: "Company Name must not be longer than 30 characters.",
    }),
    companywebsite: z.string().url("Please enter a valid URL"),
    companylinkedin: z.string().url("Please enter a valid URL"),
    companyindustry: z
    .string()
    .min(5, {
      message: "Company Name must be at least 5 characters.",
    })
    .max(30, {
      message: "Company Name must not be longer than 30 characters.",
    }),

})

type SettingsForm2Values = z.infer<typeof settingsForm2Schema>


export default function SettingsForm1() {
  const form = useForm<SettingsForm2Values>({
    resolver: zodResolver(settingsForm2Schema),

    mode: "onChange",
  })



  function onSubmit(data: SettingsForm2Values) {
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
          name="companyname"
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
          name="companywebsite"
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
          name="companylinkedin"
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
          name="companyindustry"
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


