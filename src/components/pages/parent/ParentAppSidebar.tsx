"use client"
import {
  AudioWaveform,
  BookOpen,
  Command,
  GalleryVerticalEnd,
  PieChart,
  Settings2,
  SquareTerminal,
  SquareChartGantt
} from "lucide-react"


import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { useSession } from "next-auth/react"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Mutabaahku",
      logo: GalleryVerticalEnd,
      plan: "Dashboard Operator",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Reporting Mutabaah Anak",
      url: "/",
      icon: SquareChartGantt,
      isActive: true,
      items: [
        {
          title: "Profile Anak",
          url: "/parent/children",
        },
        // {
        //   title: "Murid",
        //   url: "/operator/student",
        // },
        // {
        //   title: "Role",
        //   url: "/operator/role",
        // },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
  ],
}


export function ParentAppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const session = useSession()

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        {session.status === "loading"  ? <p>Loading..</p> : <NavUser user={{
          avatar: session.data?.user?.image as string ?? '/avatars/shadcn.jpg',
          email: session.data?.user?.email ?? 'unknown@mutabaah.com',
          name: session.data?.user?.name ?? 'admin'
        }} />}
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
