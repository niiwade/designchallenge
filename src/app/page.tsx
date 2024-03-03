
import SettingsForm from "@/components/Form";
import SettingsForm1 from "@/components/Form2";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";


export default function Home() {
  return (

    <>



      <div className="mx-4 min-h-screen max-w-screen-xl sm:mx-8 xl:mx-auto">
        <h1 className=" py-6 text-3xl font-semibold">Settings</h1>
        <div className="grid grid-cols-8 pt-2 sm:grid-cols-10">

          <div className="col-span-10 overflow-hidden  sm:px-8 ">
            <div className="pt-4">
              <Tabs defaultValue="company" className="space-y-4">
                <TabsList>
                  <TabsTrigger value="profile" disabled>Your Profile</TabsTrigger>
                  <TabsTrigger value="company" >
                    Company Info
                  </TabsTrigger>
                  <TabsTrigger value="seats" disabled>
                    Manage Seats
                  </TabsTrigger>
                  <TabsTrigger value="contact" disabled>
                    Do not Contact
                  </TabsTrigger>
                  <TabsTrigger value="integrations" disabled>
                    Integrations
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="company" className="space-y-4">

                <div className="grid  py-6 sm:grid-cols-2">
  <div className="mt-4 flex items-center sm:justify-center mx-auto py-5 sm:order-first lg:order-2 "> 
    <div className="flex flex-row gap-3">
      <Button variant='outline' type="submit">Cancel</Button>
      <Button type="submit">Save Changes</Button>
    </div>
  </div>
  <div className="sm:order-second">
    <div className="flex items-center">
      <Avatar className="h-84 w-84">
        <AvatarImage src="/companylogo.png" />
      </Avatar>

      <div className="ml-7 flex flex-col">
        <div className="flex flex-row gap-3">
          <Button variant='destructive' type="submit">Remove</Button>
          <Button type="submit" variant='outline'>Change Photo</Button>
        </div>
        <div className="leading-snug text-sm mt-6 text-gray-400">or drag and drop (SVG, PNG, JPG)</div>
      </div>
    </div>
  </div>
</div>

                </TabsContent>
              </Tabs>
            </div>

            <SettingsForm1 />



            <p className="py-2 text-normal mt-8  ">Employee Count</p>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">


              <div className="flex justify-evenly w-full mt-2 dark:border-gray-600/60 dark:text-white">

                <div className=" px-2 py-1 rounded-md ">
                <Button type="submit" className="rounded-full" size='sm'>1-10</Button>
                </div>

                <div className=" px-2 py-1 rounded-md ">
                <Button type="submit" variant='outline'  className="rounded-full" size='sm'>10-100</Button>
                </div>

                <div className="  px-2 py-1 rounded-md ">
                <Button type="submit"  variant='outline' className="rounded-full" size='sm'>100-500</Button>
                </div>

                <div className="  px-2 py-1 rounded-md ">
                <Button type="submit"  variant='outline' className="rounded-full" size='sm'>1000+</Button>
                </div>


                <div className=" px-2 py-1 rounded-md w-full">
                  
                </div>

              </div>

            </div>

            <SettingsForm />




          </div>
        </div>
      </div>


    </>
  );
}
