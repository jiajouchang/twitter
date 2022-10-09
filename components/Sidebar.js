import Image from "next/image";
import SidebarMenuItem from "./SidebarMenuItem";
import { BellAlertIcon, BookmarkIcon, ClipboardDocumentCheckIcon, EllipsisHorizontalCircleIcon, EllipsisHorizontalIcon, HashtagIcon, HomeIcon, InboxIcon, UserIcon } from '@heroicons/react/24/solid'

export default function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full">
      {/* Twitter Logo */}

      <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
        <Image width="50" 
               height="50" 
               src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
               alt="TwitterLogo">
        </Image>
      </div>

      {/* Menu */}

      <div className="mt-4 mb-2.5 xl:items-start">

      <SidebarMenuItem text="Home" Icon={ HomeIcon } activ />
      <SidebarMenuItem text="Explor" Icon={ HashtagIcon } />
      <SidebarMenuItem text="Nocifications" Icon={ BellAlertIcon } />
      <SidebarMenuItem text="Messages" Icon={ InboxIcon } />
      <SidebarMenuItem text="Bookmarks" Icon={ BookmarkIcon } />
      <SidebarMenuItem text="Lists" Icon={ ClipboardDocumentCheckIcon } />
      <SidebarMenuItem text="Profile" Icon={ UserIcon } />
      <SidebarMenuItem text="More" Icon={ EllipsisHorizontalCircleIcon } />

      </div>

      {/* Button */}

      <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">tweet</button>

      {/* Mine-profile */}

      <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
        <Image 
        width="50" 
        height="50" 
        src="https://pbs.twimg.com/profile_images/1578581284871614464/c6zNpkv5_400x400.jpg" 
        alt="user-img"
        className="h-10 w-10 rounded-full xl:mr-2">
        </Image>
        <div className="leading-5 hidden xl:inline">
        <h4 className="font-bold">Jiajou Chang</h4>
        <p className="text-gray-500">@EyestudioHobby</p>
        </div>
        <EllipsisHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline" />
      </div>
     
    </div>
  )
}
