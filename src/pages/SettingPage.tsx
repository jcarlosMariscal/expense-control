import { Button, FileInput, Label, Tabs, TextInput } from "flowbite-react";
import { SectionTitle } from "../components/Pure/SectionTitle";
import { HiAdjustments, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";

const image =
  "https://www.flowbite-react.com/images/people/profile-picture-5.jpg";

export const SettingPage = () => {
  return (
    <>
      <SectionTitle className="mb-4 text-2xl">
        <span className="font-bold">Settings</span>
      </SectionTitle>
      <Tabs aria-label="Tabs with underline" style="underline">
        <Tabs.Item active title="Profile" icon={HiUserCircle}>
          <form className="flex gap-4">
            <div className="w-2/3">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email1" value="Your Name" />
                </div>
                <TextInput
                  id="email1"
                  type="email"
                  placeholder="username"
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email1" value="Your email" />
                </div>
                <TextInput
                  id="email1"
                  type="email"
                  placeholder="name@flowbite.com"
                  required
                />
              </div>
              <Button type="submit" className="my-2">
                Save
              </Button>
            </div>
            <div className="w-1/3 flex flex-col items-center gap-2">
              <img src={image} alt="" className="w-40 rounded-md" />
              <div id="fileUpload" className="max-w-md">
                <FileInput
                  id="file"
                  helperText="A profile picture is useful to confirm your are logged into your account"
                />
              </div>
            </div>
          </form>
        </Tabs.Item>
        <Tabs.Item title="Dashboard" icon={MdDashboard} disabled></Tabs.Item>
        <Tabs.Item title="Security" icon={HiAdjustments} disabled></Tabs.Item>
      </Tabs>
    </>
  );
};
